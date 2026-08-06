import React from "react"
import { AccountsContext } from "~App/contexts/accounts"
import { SettingsContext } from "~App/contexts/settings"
import * as routes from "~App/routes"
import { useRouter } from "~Generic/hooks/userinterface"
import { getLastOpenedAccountAction } from "./LastOpenedAccountManager.logic"

function LastOpenedAccountManager() {
  const { accounts, initialized: accountsInitialized } = React.useContext(AccountsContext)
  const { initialized: settingsInitialized, lastOpenedAccount, setSetting } = React.useContext(SettingsContext)
  const router = useRouter()
  const startupResolved = React.useRef(false)

  React.useEffect(() => {
    if (!accountsInitialized || !settingsInitialized) {
      return
    }

    const action = getLastOpenedAccountAction({
      accounts,
      lastOpenedAccount,
      pathname: router.location.pathname,
      startup: !startupResolved.current
    })
    startupResolved.current = true

    if (!action) return

    if (action.type === "restore") {
      router.history.replace(routes.account(action.accountID))
    } else if (action.type === "save") {
      setSetting("lastOpenedAccount", action.account)
    } else {
      setSetting("lastOpenedAccount", undefined)
    }
  }, [accounts, accountsInitialized, lastOpenedAccount, router.history, router.location.pathname, setSetting, settingsInitialized])

  return null
}

export default React.memo(LastOpenedAccountManager)
