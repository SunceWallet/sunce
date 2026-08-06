import React from "react"
import { Account, AccountsContext } from "~App/contexts/accounts"
import { SettingsContext } from "~App/contexts/settings"
import * as routes from "~App/routes"
import { matchesRoute } from "~Generic/lib/routes"
import { useRouter } from "~Generic/hooks/userinterface"

function matchesLastOpenedAccount(account: Account, lastOpenedAccount: Platform.LastOpenedAccount | undefined) {
  return (
    lastOpenedAccount?.id === account.id &&
    lastOpenedAccount.publicKey === account.publicKey &&
    lastOpenedAccount.testnet === account.testnet
  )
}

function LastOpenedAccountManager() {
  const { accounts, initialized: accountsInitialized } = React.useContext(AccountsContext)
  const { initialized: settingsInitialized, lastOpenedAccount, setSetting } = React.useContext(SettingsContext)
  const router = useRouter()
  const startupResolved = React.useRef(false)

  React.useEffect(() => {
    if (!accountsInitialized || !settingsInitialized) {
      return
    }

    if (!startupResolved.current) {
      startupResolved.current = true

      if (router.location.pathname === routes.allAccounts() && lastOpenedAccount) {
        const savedAccount = accounts.find(someAccount => matchesLastOpenedAccount(someAccount, lastOpenedAccount))

        if (savedAccount) {
          router.history.replace(routes.account(savedAccount.id))
          return
        }

        setSetting("lastOpenedAccount", undefined)
        return
      }
    }

    const account = accounts.find(someAccount => matchesRoute(router.location.pathname, routes.account(someAccount.id)))

    if (account) {
      if (!matchesLastOpenedAccount(account, lastOpenedAccount)) {
        setSetting("lastOpenedAccount", { id: account.id, publicKey: account.publicKey, testnet: account.testnet })
      }
    } else if (router.location.pathname === routes.allAccounts() && lastOpenedAccount) {
      setSetting("lastOpenedAccount", undefined)
    }
  }, [accounts, accountsInitialized, lastOpenedAccount, router.history, router.location.pathname, setSetting, settingsInitialized])

  return null
}

export default React.memo(LastOpenedAccountManager)
