import { parseStellarUri as parseStellarUriOriginal, PayStellarUri, StellarUriType } from "@stellarguard/stellar-uri"
import { MemoHash, MemoID, MemoNone, MemoReturn, MemoText, MemoType } from "stellar-sdk"

// @stellarguard/stellar-uri doesn't follow SEP-0007 in terms of memo_type values
// Short term fix: For now we are fixing it here.
// TODO: proper fix is to update the @stellarguard/stellar-uri itself
const normalizeMemoType = (memoType: string | undefined): MemoType | undefined => {
  if (!memoType) return

  switch (memoType) {
    case MemoID:
    case "MEMO_ID":
      return MemoID
    case MemoText:
    case "MEMO_TEXT":
      return MemoText
    case MemoHash:
    case "MEMO_HASH":
      return MemoHash
    case MemoReturn:
    case "MEMO_RETURN":
      return MemoReturn
  }
  console.warn("Unknown memo type: ", memoType)
  return MemoNone
}

export const parseStellarUri = (request: string) => {
  const stellarUri = parseStellarUriOriginal(request)
  if (stellarUri.operation === StellarUriType.Pay) {
    ;(stellarUri as PayStellarUri).memoType = normalizeMemoType((stellarUri as PayStellarUri).memoType)
  }
  return stellarUri
}
