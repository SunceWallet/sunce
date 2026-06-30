import { Networks, Horizon, Transaction } from "@stellar/stellar-sdk"
import * as WebAuth from "@suncewallet/stellar-sep-10"

function decodeJwtPayload(token: string) {
  const payload = token.split(".")[1]

  if (!payload) {
    return null
  }

  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/")
  const paddedBase64 = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=")
  const binary = atob(paddedBase64)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))

  return JSON.parse(new TextDecoder().decode(bytes))
}

export async function fetchWebAuthChallenge(
  endpointURL: string,
  serviceSigningKey: string | null,
  localPublicKey: string,
  network: Networks
) {
  const challenge = await WebAuth.fetchChallenge(endpointURL, serviceSigningKey, localPublicKey, network)
  return challenge
    .toEnvelope()
    .toXDR()
    .toString("base64")
}

export async function fetchWebAuthData(horizonURL: string, issuerAccountID: string) {
  const horizon = new Horizon.Server(horizonURL)
  return WebAuth.fetchWebAuthData(horizon, issuerAccountID)
}

export async function postWebAuthResponse(endpointURL: string, transactionXdrBase64: string, network: Networks) {
  const transaction = new Transaction(transactionXdrBase64, network)
  const authToken = await WebAuth.postResponse(endpointURL, transaction)
  const decoded = decodeJwtPayload(authToken) as any

  return {
    authToken,
    decoded
  }
}
