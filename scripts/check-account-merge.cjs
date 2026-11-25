const assert = require("node:assert/strict")
const { Account, Networks, StrKey, TransactionBuilder } = require("@stellar/stellar-sdk")
require("tsx/cjs")
const { buildAccountMergeOperation, getAccountMergeDestinations } = require("../src/AccountSettings/lib/account-merge.ts")

const address = byte => StrKey.encodeEd25519PublicKey(Buffer.alloc(32, byte))
const signer = address(1)
const source = { id: "source", accountID: address(2), publicKey: signer, testnet: true }
const shared = { id: "shared", accountID: address(3), publicKey: signer, testnet: true }
const ordinary = { id: "ordinary", accountID: address(4), publicKey: address(4), testnet: true }
const sameAccount = { ...source, id: "another-signer", publicKey: address(5) }
const otherNetwork = { ...shared, id: "other-network", testnet: false }

const destinations = getAccountMergeDestinations(source, [source, sameAccount, otherNetwork, shared, ordinary])
assert.deepEqual(destinations, [shared, ordinary], "Offer other accounts on the same network, including those sharing a signer")

for (const destination of destinations) {
  const transaction = new TransactionBuilder(new Account(source.accountID, "1"), {
    fee: "100",
    networkPassphrase: Networks.TESTNET
  })
    .addOperation(buildAccountMergeOperation(source, destination))
    .setTimeout(0)
    .build()

  const decoded = TransactionBuilder.fromXDR(transaction.toXDR(), Networks.TESTNET)
  assert.equal(decoded.operations.length, 1)
  const [operation] = decoded.operations
  assert.equal(operation.type, "accountMerge")
  assert.equal(operation.source, source.accountID)
  assert.equal(operation.destination, destination.accountID, `Wrong merge recipient for ${destination.id}`)
}
