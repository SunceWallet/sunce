import BigNumber from "big.js"
import { Asset, extractBaseAddress, Horizon, Transaction } from "@stellar/stellar-sdk"

export type PaymentSummary = {
  asset: Asset
  balanceChange: BigNumber
  publicKeys: string[]
  selfPaymentAmount?: BigNumber
}[]

type BalanceEffect = Horizon.ServerApi.EffectRecord & {
  account?: string
  amount?: string
  asset_code?: string
  asset_issuer?: string
  asset_type?: string
}

function addBalanceChange(
  balanceChanges: PaymentSummary,
  asset: Asset,
  amount: BigNumber,
  publicKeys: string[] = []
) {
  const summaryItem = balanceChanges.find(assetBalanceChange => assetBalanceChange.asset.equals(asset))

  if (summaryItem) {
    summaryItem.balanceChange = summaryItem.balanceChange.add(amount)
    summaryItem.publicKeys = summaryItem.publicKeys.concat(publicKeys)
  } else {
    balanceChanges.push({ asset, balanceChange: amount, publicKeys })
  }
}

function assetFromBalanceEffect(effect: BalanceEffect) {
  return effect.asset_type === "native" || !effect.asset_code
    ? Asset.native()
    : new Asset(effect.asset_code, effect.asset_issuer || "")
}

export function getPaymentSummaryFromEffects(
  accountPublicKey: string,
  effects: Horizon.ServerApi.EffectRecord[],
  operationSummary: PaymentSummary = []
) {
  const balanceChanges: PaymentSummary = []

  for (const effect of effects as BalanceEffect[]) {
    if (effect.account !== accountPublicKey || !effect.amount) continue
    if (effect.type !== "account_credited" && effect.type !== "account_debited") continue

    const asset = assetFromBalanceEffect(effect)
    const amount = BigNumber(effect.amount).mul(effect.type === "account_debited" ? -1 : 1)
    const operationSummaryItem = operationSummary.find(item => item.asset.equals(asset))
    addBalanceChange(balanceChanges, asset, amount, operationSummaryItem?.publicKeys || [])
  }

  return balanceChanges
}

function baseAccount(address: string) {
  return address.startsWith("M") ? extractBaseAddress(address) : address
}

export function getPaymentSummary(accountID: string, transaction: Transaction): PaymentSummary {
  const account = baseAccount(accountID)
  const balanceChanges: PaymentSummary = []
  const selfPayments: PaymentSummary = []

  for (const operation of transaction.operations) {
    if (
      operation.type !== "payment" &&
      operation.type !== "createAccount" &&
      operation.type !== "pathPaymentStrictSend" &&
      operation.type !== "pathPaymentStrictReceive"
    ) {
      continue
    }

    const source = operation.source || transaction.source
    const isSender = baseAccount(source) === account
    const isRecipient = baseAccount(operation.destination) === account
    if (!isSender && !isRecipient) continue

    if (operation.type === "pathPaymentStrictSend" || operation.type === "pathPaymentStrictReceive") {
      if (isSender) {
        addBalanceChange(
          balanceChanges,
          operation.sendAsset,
          BigNumber(operation.type === "pathPaymentStrictSend" ? operation.sendAmount : operation.sendMax).mul(-1),
          isRecipient ? [] : [operation.destination]
        )
      }

      if (isRecipient) {
        addBalanceChange(
          balanceChanges,
          operation.destAsset,
          BigNumber(operation.type === "pathPaymentStrictSend" ? operation.destMin : operation.destAmount),
          isSender ? [] : [source]
        )
      }
      continue
    }

    const amount = BigNumber(operation.type === "payment" ? operation.amount : operation.startingBalance)
    const asset = operation.type === "payment" ? operation.asset : Asset.native()
    if (isSender && isRecipient) {
      addBalanceChange(selfPayments, asset, amount)
    } else if (isRecipient) {
      addBalanceChange(balanceChanges, asset, amount, [source])
    } else {
      addBalanceChange(balanceChanges, asset, amount.mul(-1), [operation.destination])
    }
  }

  if (balanceChanges.length) return balanceChanges

  // History shows the amount moved to self while the account's balance change is zero.
  return selfPayments.map(({ asset, publicKeys, balanceChange: selfPaymentAmount }) => ({
    asset,
    publicKeys,
    balanceChange: BigNumber(0),
    selfPaymentAmount
  }))
}
