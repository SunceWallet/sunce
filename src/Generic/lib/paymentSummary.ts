import BigNumber from "big.js"
import { Asset, Horizon, Operation, Transaction } from "@stellar/stellar-sdk"

export type PaymentSummary = {
  asset: Asset
  balanceChange: BigNumber
  publicKeys: string[]
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

export function getPaymentSummary(accountPublicKey: string, transaction: Transaction) {
  const balanceChanges: PaymentSummary = []

  const paymentOps: (
    | Operation.Payment
    | Operation.CreateAccount
    | Operation.PathPaymentStrictSend
    | Operation.PathPaymentStrictReceive
  )[] = transaction.operations.filter(
    op =>
      op.type === "payment" ||
      op.type === "createAccount" ||
      op.type === "pathPaymentStrictSend" ||
      op.type === "pathPaymentStrictReceive"
  ) as any

  for (const operation of paymentOps) {
    if (operation.type === "pathPaymentStrictSend" || operation.type === "pathPaymentStrictReceive") {
      const sourceAccount = operation.source || transaction.source
      const isSelfSwap = operation.destination === sourceAccount
      const sourcePublicKeys = isSelfSwap ? [] : [operation.destination]
      const destinationPublicKeys = isSelfSwap ? [] : [sourceAccount]

      if (sourceAccount === accountPublicKey) {
        addBalanceChange(
          balanceChanges,
          operation.sendAsset,
          BigNumber(operation.type === "pathPaymentStrictSend" ? operation.sendAmount : operation.sendMax).mul(-1),
          sourcePublicKeys
        )
      }

      if (operation.destination === accountPublicKey) {
        addBalanceChange(
          balanceChanges,
          operation.destAsset,
          BigNumber(operation.type === "pathPaymentStrictSend" ? operation.destMin : operation.destAmount),
          destinationPublicKeys
        )
      }
      continue
    }

    const amount = (operation as Operation.Payment).amount || (operation as Operation.CreateAccount).startingBalance
    const asset = (operation as Operation.Payment).asset || Asset.native()

    const summaryItem = balanceChanges.find(assetBalanceChange => assetBalanceChange.asset.equals(asset))
    let balanceChange = summaryItem ? summaryItem.balanceChange : BigNumber(0)
    let remotePublicKey: string | null = null

    if (operation.destination === (operation.source || transaction.source)) {
      // leave at zero, since source equals destination
    } else if (operation.destination === accountPublicKey) {
      // incoming payment
      balanceChange = balanceChange.add(amount)
      remotePublicKey = operation.source || transaction.source
    } else if (
      operation.source === accountPublicKey ||
      (!operation.source && transaction.source === accountPublicKey)
    ) {
      // outgoing payment
      balanceChange = balanceChange.sub(amount)
      remotePublicKey = operation.destination
    }

    if (summaryItem) {
      summaryItem.balanceChange = balanceChange
      summaryItem.publicKeys = remotePublicKey ? summaryItem.publicKeys.concat(remotePublicKey) : summaryItem.publicKeys
    } else {
      balanceChanges.push({
        asset,
        balanceChange,
        publicKeys: remotePublicKey ? [remotePublicKey] : [] // TODO: this doesn't work okay for incloming multisig txs?
      })
    }
  }

  return balanceChanges
}
