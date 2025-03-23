import i18next from "../../App/i18n"
import { parseStellarUri } from "@suncewallet/stellar-uri"
import { CustomError } from "~Generic/lib/errors"

export interface VerificationOptions {
  allowUnsafeTestnetURIs?: boolean
}

export async function verifyTransactionRequest(request: string, options: VerificationOptions = {}) {
  const parsedURI = parseStellarUri(request)
  const isSignatureValid = await parsedURI.verifySignature()

  if (!isSignatureValid) {
    if (parsedURI.isTestNetwork && options.allowUnsafeTestnetURIs) {
      // ignore
    } else {
      throw CustomError("StellarUriVerificationError", i18next.t("stellar-uri-verification-error"))
    }
  }

  if (parsedURI.callback) {
    try {
      const callbackURI = new URL(parsedURI.callback)
      if (!["http:", "https:"].includes(callbackURI.protocol)) {
        throw new Error("Unsupported schema")
      }
    } catch (e) {
      throw CustomError(
        "StellarUriVerificationError",
        i18next.t("stellar-uri-callback-format-error", { reason: e.message || "" })
      )
    }
  }

  return parsedURI
}
