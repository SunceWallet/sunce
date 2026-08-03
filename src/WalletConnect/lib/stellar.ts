import { Networks, Transaction } from "@stellar/stellar-sdk"
import { Account } from "~App/contexts/accounts"

export const walletConnectProjectID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID as string | undefined

export const stellarChains = {
  pubnet: "stellar:pubnet",
  testnet: "stellar:testnet"
}

export const stellarMethods = ["stellar_signXDR", "stellar_signAndSubmitXDR"]

export const stellarEvents: string[] = []

export type WalletConnectMethod = typeof stellarMethods[number]

export function isWalletConnectURI(value: string) {
  return value.trim().startsWith("wc:")
}

export function getChainFromAccount(account: Account) {
  return account.testnet ? stellarChains.testnet : stellarChains.pubnet
}

export function getAccountNamespace(account: Account) {
  return `${getChainFromAccount(account)}:${account.publicKey}`
}

export function getNetworkPassphrase(chainId?: string) {
  return chainId === stellarChains.testnet ? Networks.TESTNET : Networks.PUBLIC
}

export function getAccountsForChain(accounts: Account[], chainId?: string) {
  if (chainId === stellarChains.testnet) return accounts.filter(account => account.testnet)
  if (chainId === stellarChains.pubnet) return accounts.filter(account => !account.testnet)
  return accounts
}

export function getSupportedChains(accounts: Account[]) {
  const chains = new Set<string>()
  accounts.forEach(account => chains.add(getChainFromAccount(account)))
  return Array.from(chains)
}

export function parseStellarTransactionFromRequest(requestParams: any[], chainId?: string) {
  const params = requestParams.length === 1 && typeof requestParams[0] === "object" ? requestParams[0] : requestParams
  const xdr =
    (Array.isArray(params) ? params[0] : params.xdr || params.transactionXDR || params.transactionXdr || params.envelope) ||
    ""

  if (!xdr || typeof xdr !== "string") {
    throw new Error("WalletConnect request is missing a Stellar transaction XDR.")
  }

  const networkPassphrase =
    (!Array.isArray(params) && (params.networkPassphrase || params.network)) || getNetworkPassphrase(chainId)

  return new Transaction(xdr, networkPassphrase)
}

export function getRequestedPublicKey(requestParams: any[]) {
  const params = requestParams.length === 1 && typeof requestParams[0] === "object" ? requestParams[0] : requestParams
  const value = Array.isArray(params) ? params[1] : params.publicKey || params.pubkey || params.address || params.account
  return typeof value === "string" && value.startsWith("G") ? value : undefined
}
