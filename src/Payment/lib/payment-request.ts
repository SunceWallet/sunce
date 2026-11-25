import { Asset, Memo } from "@stellar/stellar-sdk"
import type { PayStellarUri } from "@suncewallet/stellar-uri"
import BigNumber from "big.js"
import { Buffer } from "buffer"

export function getPaymentRequestAsset(uri: PayStellarUri) {
  if (!uri.assetCode) return uri.assetIssuer ? undefined : Asset.native()
  try {
    return new Asset(uri.assetCode, uri.assetIssuer)
  } catch {
    return undefined
  }
}

export function getPaymentMemoType(type: string | undefined, value: string) {
  // SEP-07 uses MEMO_ID etc. Earlier versions of Sunce generated lowercase SDK names.
  return type?.toLowerCase().replace(/^memo_/, "") || (value ? "text" : "none")
}

export function createPaymentMemo(type: string, value: string) {
  switch (type) {
    case "none":
      if (value) throw new Error("MEMO_NONE cannot contain a value")
      return Memo.none()
    case "text":
      return Memo.text(value)
    case "id":
      if (!/^\d+$/.test(value) || BigNumber(value).gt("18446744073709551615")) throw new Error("Invalid MEMO_ID")
      return Memo.id(value)
    case "hash":
    case "return": {
      const hash = Buffer.from(value, "base64")
      if (hash.length !== 32 || hash.toString("base64") !== value.padEnd(44, "=")) {
        throw new Error(`MEMO_${type.toUpperCase()} requires a base64-encoded 32-byte hash`)
      }
      return type === "hash" ? Memo.hash(hash) : Memo.return(hash.toString("hex"))
    }
    default:
      throw new Error(`Unsupported memo type: ${type}`)
  }
}
