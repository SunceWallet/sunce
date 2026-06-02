import BigNumber from "big.js"
import { Asset, Operation, Transaction } from "@stellar/stellar-sdk"

export type PaymentSummary = {
  asset: Asset
  balanceChange: BigNumber
  publicKeys: string[]
}[]

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
      const pathRemotePublicKey = isSelfSwap ? null : operation.destination
      const changes = [
        {
          asset: operation.sendAsset,
          amount: BigNumber(operation.type === "pathPaymentStrictSend" ? operation.sendAmount : operation.sendMax).mul(-1)
        },
        {
          asset: operation.destAsset,
          amount: BigNumber(operation.type === "pathPaymentStrictSend" ? operation.destMin : operation.destAmount)
        }
      ]

      for (const change of changes) {
        const pathSummaryItem = balanceChanges.find(assetBalanceChange => assetBalanceChange.asset.equals(change.asset))
        if (pathSummaryItem) {
          pathSummaryItem.balanceChange = pathSummaryItem.balanceChange.add(change.amount)
          pathSummaryItem.publicKeys = pathRemotePublicKey
            ? pathSummaryItem.publicKeys.concat(pathRemotePublicKey)
            : pathSummaryItem.publicKeys
        } else {
          balanceChanges.push({
            asset: change.asset,
            balanceChange: change.amount,
            publicKeys: pathRemotePublicKey ? [pathRemotePublicKey] : []
          })
        }
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
