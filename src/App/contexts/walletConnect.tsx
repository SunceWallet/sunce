import React from "react"
import { Account } from "./accounts"
import { trackError } from "./notifications"
import {
  approveStellarSession,
  createSignClient,
  disconnectWalletConnectSession,
  rejectWalletConnectSession,
  respondWithError,
  respondWithResult
} from "~WalletConnect/lib/sign-client"
import { walletConnectProjectID } from "~WalletConnect/lib/stellar"

interface WalletConnectRequest {
  id: number
  topic: string
  params: {
    chainId?: string
    request: {
      method: string
      params?: any[]
    }
  }
}

interface ContextType {
  available: boolean
  initialized: boolean
  preselectedProposalAccount: Account | null
  sessions: any[]
  pendingProposal: any | null
  pendingRequest: WalletConnectRequest | null
  pair: (uri: string, preselectedAccount?: Account) => Promise<void>
  approveProposal: (accounts: Account[]) => Promise<void>
  rejectProposal: () => Promise<void>
  disconnectSession: (topic: string) => Promise<void>
  respondSuccess: (topic: string, id: number, result: any) => Promise<void>
  respondError: (topic: string, id: number, message: string) => Promise<void>
}

const initialContext: ContextType = {
  available: Boolean(walletConnectProjectID),
  initialized: false,
  preselectedProposalAccount: null,
  sessions: [],
  pendingProposal: null,
  pendingRequest: null,
  pair: () => Promise.reject(new Error("WalletConnect is not initialized.")),
  approveProposal: () => Promise.reject(new Error("WalletConnect is not initialized.")),
  rejectProposal: () => Promise.reject(new Error("WalletConnect is not initialized.")),
  disconnectSession: () => Promise.reject(new Error("WalletConnect is not initialized.")),
  respondSuccess: () => Promise.reject(new Error("WalletConnect is not initialized.")),
  respondError: () => Promise.reject(new Error("WalletConnect is not initialized."))
}

export const WalletConnectContext = React.createContext<ContextType>(initialContext)

function getSessions(signClient: any) {
  if (!signClient?.session?.getAll) return []
  return signClient.session.getAll()
}

export function WalletConnectProvider(props: { children: React.ReactNode }) {
  const [signClient, setSignClient] = React.useState<any | null>(null)
  const [initialized, setInitialized] = React.useState(false)
  const [preselectedProposalAccount, setPreselectedProposalAccount] = React.useState<Account | null>(null)
  const [sessions, setSessions] = React.useState<any[]>([])
  const [pendingProposal, setPendingProposal] = React.useState<any | null>(null)
  const [pendingRequest, setPendingRequest] = React.useState<WalletConnectRequest | null>(null)

  const refreshSessions = React.useCallback((kit: any) => setSessions(getSessions(kit)), [])

  React.useEffect(() => {
    let cancelled = false

    if (!walletConnectProjectID) {
      setInitialized(true)
      return () => undefined
    }

    createSignClient(walletConnectProjectID)
      .then(client => {
        if (cancelled) return
        setSignClient(client)
        refreshSessions(client)
        setInitialized(true)

        client.on("session_proposal", (proposal: any) => setPendingProposal(proposal))
        client.on("session_request", (request: WalletConnectRequest) => setPendingRequest(request))
        client.on("session_delete", () => refreshSessions(client))
        client.on("session_expire", () => refreshSessions(client))
        client.on("session_update", () => refreshSessions(client))
      })
      .catch(error => {
        setInitialized(true)
        trackError(error)
      })

    return () => {
      cancelled = true
    }
  }, [refreshSessions])

  const pair = React.useCallback(async (uri: string, preselectedAccount?: Account) => {
    if (!signClient) throw new Error("WalletConnect is not initialized.")
    setPreselectedProposalAccount(preselectedAccount || null)
    await signClient.core.pairing.pair({ uri })
  }, [signClient])

  const approveProposal = React.useCallback(async (approvedAccounts: Account[]) => {
    if (!signClient || !pendingProposal) return
    await approveStellarSession(signClient, pendingProposal, approvedAccounts)
    setPendingProposal(null)
    setPreselectedProposalAccount(null)
    refreshSessions(signClient)
  }, [pendingProposal, refreshSessions, signClient])

  const rejectProposal = React.useCallback(async () => {
    if (!signClient || !pendingProposal) return
    await rejectWalletConnectSession(signClient, pendingProposal.id)
    setPendingProposal(null)
    setPreselectedProposalAccount(null)
  }, [pendingProposal, signClient])

  const disconnectSession = React.useCallback(async (topic: string) => {
    if (!signClient) return
    await disconnectWalletConnectSession(signClient, topic)
    refreshSessions(signClient)
  }, [refreshSessions, signClient])

  const respondSuccess = React.useCallback(async (topic: string, id: number, result: any) => {
    if (!signClient) return
    await respondWithResult(signClient, topic, id, result)
    setPendingRequest(current => (current && current.id === id ? null : current))
  }, [signClient])

  const respondError = React.useCallback(async (topic: string, id: number, message: string) => {
    if (!signClient) return
    await respondWithError(signClient, topic, id, message)
    setPendingRequest(current => (current && current.id === id ? null : current))
  }, [signClient])

  const contextValue = React.useMemo(
    () => ({
      available: Boolean(walletConnectProjectID),
      initialized,
      preselectedProposalAccount,
      sessions,
      pendingProposal,
      pendingRequest,
      pair,
      approveProposal,
      rejectProposal,
      disconnectSession,
      respondSuccess,
      respondError
    }),
    [
      approveProposal,
      disconnectSession,
      initialized,
      pair,
      pendingProposal,
      preselectedProposalAccount,
      pendingRequest,
      rejectProposal,
      respondError,
      respondSuccess,
      sessions
    ]
  )

  return <WalletConnectContext.Provider value={contextValue}>{props.children}</WalletConnectContext.Provider>
}

export { ContextType as WalletConnectContextType, WalletConnectRequest }
