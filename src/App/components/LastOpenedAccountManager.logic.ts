import * as routes from "~App/routes"
import { matchesRoute } from "~Generic/lib/routes"

export interface AccountIdentity {
  id: string
  publicKey: string
  testnet: boolean
}

export type LastOpenedAccountAction =
  | { type: "clear" }
  | { accountID: string; type: "restore" }
  | { account: Platform.LastOpenedAccount; type: "save" }
  | undefined

interface LastOpenedAccountInput {
  accounts: AccountIdentity[]
  lastOpenedAccount: Platform.LastOpenedAccount | undefined
  pathname: string
  startup: boolean
}

function matchesLastOpenedAccount(account: AccountIdentity, lastOpenedAccount: Platform.LastOpenedAccount | undefined) {
  return (
    lastOpenedAccount?.id === account.id &&
    lastOpenedAccount.publicKey === account.publicKey &&
    lastOpenedAccount.testnet === account.testnet
  )
}

export function getLastOpenedAccountAction(input: LastOpenedAccountInput): LastOpenedAccountAction {
  if (input.startup && input.pathname === routes.allAccounts() && input.lastOpenedAccount) {
    const savedAccount = input.accounts.find(candidate => matchesLastOpenedAccount(candidate, input.lastOpenedAccount))

    return savedAccount ? { accountID: savedAccount.id, type: "restore" } : { type: "clear" }
  }

  const matchedAccount = input.accounts.find(candidate => matchesRoute(input.pathname, routes.account(candidate.id)))

  if (matchedAccount && !matchesLastOpenedAccount(matchedAccount, input.lastOpenedAccount)) {
    return { account: matchedAccount, type: "save" }
  }

  return input.pathname === routes.allAccounts() && input.lastOpenedAccount ? { type: "clear" } : undefined
}
