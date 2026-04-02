export const defaultMainnetHorizonURLs = [
  "https://horizon.stellar.org",
  "https://horizon.stellarx.com",
  "https://horizon.stellar.lobstr.co"
]

export const defaultTestnetHorizonURLs = ["https://horizon-testnet.stellar.org"]

export const horizonProbeAccountID = "GBPRN7JTNQILXWTO3Z72346I3MJGOSCPRM4FWKYC4TSZFGZHLMMSUNCE"

export function normalizeHorizonServerURL(input: string) {
  const url = new URL(input.trim())

  if (!/^https?:$/.test(url.protocol)) {
    throw Error(`Unsupported protocol: ${url.protocol}`)
  }

  if (!url.pathname.endsWith("/")) {
    url.pathname += "/"
  }

  return url.href
}

export function deduplicateHorizonServerURLs(urls: string[]) {
  return Array.from(new Set(urls))
}

export function resolveHorizonEndpointURL(horizonURL: string, endpoint: string) {
  const baseURL = new URL(normalizeHorizonServerURL(horizonURL))
  return new URL(endpoint.replace(/^\//, ""), baseURL)
}
