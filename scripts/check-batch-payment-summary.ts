// Run with: npx tsx scripts/check-batch-payment-summary.ts
import assert from "node:assert/strict"
import { Account, Asset, Keypair, MuxedAccount, Networks, Operation, TransactionBuilder } from "@stellar/stellar-sdk"
import { getPaymentSummary } from "../src/Generic/lib/paymentSummary"

const [sender, wallet, signer, other] = Array.from({ length: 4 }, () => Keypair.random().publicKey())
const token = new Asset("TOK", sender)
const muxedWallet = new MuxedAccount(new Account(wallet, "0"), "42").accountId()

function batch(...operations: ReturnType<typeof Operation.payment>[]) {
  const builder = new TransactionBuilder(new Account(sender, "0"), { fee: "100", networkPassphrase: Networks.TESTNET })
  operations.forEach(operation => builder.addOperation(operation))
  return builder.setTimeout(0).build()
}

function amounts(account: string, tx: ReturnType<typeof batch>) {
  return getPaymentSummary(account, tx).map(item => [item.asset.getCode(), item.balanceChange.toString()])
}

for (const destination of [wallet, muxedWallet]) {
  const tx = batch(
    Operation.payment({ destination: other, asset: token, amount: "34.5" }),
    Operation.payment({ destination, asset: token, amount: "0.2" }),
    Operation.payment({ destination, asset: token, amount: "0.3" }),
    Operation.payment({ destination: other, asset: Asset.native(), amount: "1" })
  )
  assert.deepEqual(amounts(wallet, tx), [["TOK", "0.5"]])
  assert.deepEqual(amounts(signer, tx), [])
  assert.deepEqual(amounts(sender, tx), [["TOK", "-35"], ["XLM", "-1"]])
}

const self = Operation.payment({ source: muxedWallet, destination: wallet, asset: token, amount: "0.5" })
const unrelated = Operation.payment({ destination: other, asset: token, amount: "34.5" })
for (const tx of [batch(self), batch(self, unrelated)]) {
  const summary = getPaymentSummary(wallet, tx)
  assert.deepEqual(summary.map(item => [item.balanceChange.toString(), item.selfPaymentAmount?.toString()]), [
    ["0", "0.5"]
  ])
}

const mixed = batch(self, unrelated, Operation.payment({ destination: wallet, asset: token, amount: "2" }))
const [received] = getPaymentSummary(wallet, mixed)
assert.equal(received.balanceChange.toString(), "2")
assert.equal(received.selfPaymentAmount, undefined)
