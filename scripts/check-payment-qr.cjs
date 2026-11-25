const assert = require("node:assert/strict")
const { Account, Networks, Operation, StrKey, TransactionBuilder } = require("@stellar/stellar-sdk")
const { parseStellarUri } = require("@suncewallet/stellar-uri")
require("tsx/cjs")
const { createPaymentMemo, getPaymentMemoType, getPaymentRequestAsset } = require("../src/Payment/lib/payment-request.ts")

const address = byte => StrKey.encodeEd25519PublicKey(Buffer.alloc(32, byte))
const source = address(1)
const destination = address(2)
const issuer = address(3)
const hash = Buffer.from(Array.from({ length: 32 }, (_, index) => 255 - index))
const credit = { asset_code: "QTOK", asset_issuer: issuer }
const request = params => parseStellarUri("web+stellar:pay?" + new URLSearchParams({ destination, amount: "1", ...params }))

for (const [params, expectedType, expectedValue] of [
  [{}, "none", null],
  [{ memo: "Coffee" }, "text", "Coffee"],
  [{ memo_type: "MEMO_ID", memo: "18446744073709551615" }, "id", "18446744073709551615"],
  [{ ...credit, memo_type: "text", memo: "invoice" }, "text", "invoice"],
  [{ ...credit, memo_type: "MEMO_HASH", memo: hash.toString("base64") }, "hash", hash],
  [{ ...credit, memo_type: "MEMO_RETURN", memo: hash.toString("base64") }, "return", hash]
]) {
  const uri = request(params)
  const asset = getPaymentRequestAsset(uri)
  const memo = createPaymentMemo(getPaymentMemoType(uri.memoType, uri.memo), uri.memo || "")
  const tx = new TransactionBuilder(new Account(source, "1"), { fee: "100", networkPassphrase: Networks.TESTNET })
    .addOperation(Operation.payment({ destination: uri.destination, amount: uri.amount, asset }))
    .addMemo(memo)
    .setTimeout(0)
    .build()

  const decoded = TransactionBuilder.fromXDR(tx.toXDR(), Networks.TESTNET)
  assert.equal(decoded.signatures.length, 0)
  const [payment] = decoded.operations
  assert.equal(payment.destination, destination)
  assert.equal(payment.asset.code, params.asset_code || "XLM")
  assert.equal(payment.asset.issuer, params.asset_issuer)
  assert.equal(decoded.memo.type, expectedType)
  if (Buffer.isBuffer(expectedValue)) assert.deepEqual(Buffer.from(decoded.memo.value), expectedValue)
  else assert.equal(decoded.memo.value === null ? null : decoded.memo.value.toString(), expectedValue)
}

assert.equal(getPaymentRequestAsset(request({ asset_code: "xlm" })).isNative(), true)
assert.equal(getPaymentRequestAsset(request({ asset_code: "USD", asset_issuer: "invalid" })), undefined)
assert.equal(getPaymentRequestAsset(request({ asset_code: "USD" })), undefined)
assert.equal(getPaymentRequestAsset(request({ asset_issuer: issuer })), undefined)
assert.throws(() => createPaymentMemo("id", "18446744073709551616"))
assert.throws(() => createPaymentMemo("hash", "too-short"))
assert.throws(() => createPaymentMemo("return", ""))
assert.throws(() => createPaymentMemo("unsupported", "value"))
