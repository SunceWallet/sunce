import SignClient from "@walletconnect/sign-client"
import { Account } from "~App/contexts/accounts"
import { getAccountNamespace, getSupportedChains, stellarEvents, stellarMethods } from "./stellar"

const userRejected = {
  code: 5000,
  message: "User rejected."
}

const userDisconnected = {
  code: 6000,
  message: "User disconnected."
}

export async function createSignClient(projectId: string) {
  return SignClient.init({
    projectId,
    metadata: {
      name: "Sunce Wallet",
      description: "Wallet for the Stellar payment network by Montelibero.",
      url: "https://sunce.montelibero.org/",
      icons: ["https://sunce.montelibero.org/favicons/android-chrome-192x192.png"]
    }
  })
}

function getRequestedNamespace(proposal: any, key: "requiredNamespaces" | "optionalNamespaces") {
  return proposal?.params?.[key]?.stellar || {}
}

function getApprovedChains(accounts: Account[]) {
  return getSupportedChains(accounts)
}

function getApprovedMethods(proposal: any) {
  const requiredMethods = getRequestedNamespace(proposal, "requiredNamespaces").methods || []
  const optionalMethods = getRequestedNamespace(proposal, "optionalNamespaces").methods || []
  const requestedMethods = Array.from(new Set([...requiredMethods, ...optionalMethods]))
  const approvedMethods = requestedMethods.length
    ? requestedMethods.filter(method => stellarMethods.indexOf(String(method)) > -1)
    : stellarMethods

  const unsupportedRequiredMethod = requiredMethods.find((method: unknown) => stellarMethods.indexOf(String(method)) === -1)
  if (unsupportedRequiredMethod) {
    throw new Error(`Unsupported required WalletConnect method: ${unsupportedRequiredMethod}`)
  }

  return approvedMethods
}

function getApprovedEvents(proposal: any) {
  const requiredEvents = getRequestedNamespace(proposal, "requiredNamespaces").events || []
  const unsupportedRequiredEvent = requiredEvents.find((event: unknown) => stellarEvents.indexOf(String(event)) === -1)
  if (unsupportedRequiredEvent) {
    throw new Error(`Unsupported required WalletConnect event: ${unsupportedRequiredEvent}`)
  }

  return stellarEvents
}

export async function approveStellarSession(signClient: any, proposal: any, accounts: Account[]) {
  const namespaces = {
    stellar: {
      accounts: accounts.map(getAccountNamespace),
      chains: getApprovedChains(accounts),
      methods: getApprovedMethods(proposal),
      events: getApprovedEvents(proposal)
    }
  }

  return signClient.approve({
    id: proposal.id,
    namespaces
  })
}

export async function rejectWalletConnectSession(signClient: any, proposalId: number) {
  return signClient.reject({
    id: proposalId,
    reason: userRejected
  })
}

export async function disconnectWalletConnectSession(signClient: any, topic: string) {
  return signClient.disconnect({
    topic,
    reason: userDisconnected
  })
}

export async function respondWithResult(signClient: any, topic: string, id: number, result: any) {
  return signClient.respond({
    topic,
    response: {
      id,
      jsonrpc: "2.0",
      result
    }
  })
}

export async function respondWithError(signClient: any, topic: string, id: number, message: string) {
  return signClient.respond({
    topic,
    response: {
      id,
      jsonrpc: "2.0",
      error: {
        code: 5000,
        message
      }
    }
  })
}
