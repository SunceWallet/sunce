import React from "react"
import { Route, Switch } from "react-router-dom"
import AccountPage from "~Account/components/AccountView"
import SettingsPage from "~AppSettings/components/AppSettingsView"
import { MainErrorBoundary } from "~Generic/components/ErrorBoundaries"
import { VerticalLayout } from "~Layout/components/Box"
import { appIsLoaded } from "~SplashScreen/splash-screen"
import ConnectionErrorListener from "~Toasts/components/ConnectionErrorListener"
import NotificationContainer from "~Toasts/components/NotificationContainer"
import StellarUriHandler from "~TransactionRequest/components/StellarUriHandler"
import WalletConnectHandler from "~WalletConnect/components/WalletConnectHandler"
import { Account, AccountsContext } from "../contexts/accounts"
import { SettingsContext } from "../contexts/settings"
import AllAccountsPage from "../components/AccountListView"
import AndroidBackButton from "../components/AndroidBackButton"
import DesktopNotifications from "../components/DesktopNotifications"
import LinkHandler from "../components/LinkHandler"
import * as routes from "../routes"
import { useRouter } from "~Generic/hooks/userinterface"
import { matchesRoute } from "~Generic/lib/routes"

const CreateMainnetAccount = () => (
  <React.Suspense fallback={null}>
    <AccountPage accountCreation="pubnet" />
  </React.Suspense>
)

const CreateTestnetAccount = () => (
  <React.Suspense fallback={null}>
    <AccountPage accountCreation="testnet" />
  </React.Suspense>
)

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

function Stage2() {
  React.useEffect(() => {
    appIsLoaded()
  }, [])
  return (
    <>
      <LastOpenedAccountManager />
      <VerticalLayout height="100%" style={{ WebkitOverflowScrolling: "touch" }}>
        <VerticalLayout height="100%" grow overflowY="hidden">
          <MainErrorBoundary>
            <Switch>
              <Route exact path="/" component={AllAccountsPage} />
              <Route
                exact
                path={[
                  "/account/create/mainnet",
                  "/account/import/mainnet",
                  "/account/join/mainnet",
                  "/account/new/mainnet"
                ]}
                component={CreateMainnetAccount}
              />
              <Route
                exact
                path={[
                  "/account/create/testnet",
                  "/account/import/testnet",
                  "/account/join/testnet",
                  "/account/new/testnet"
                ]}
                component={CreateTestnetAccount}
              />
              <Route
                path={["/account/:id/:action/:subaction", "/account/:id/:action", "/account/:id"]}
                render={props => (
                  <React.Suspense fallback={null}>
                    <AccountPage accountID={props.match.params.id} />
                  </React.Suspense>
                )}
              />
              <Route
                path={["/settings/:action", "/settings"]}
                render={() => (
                  <React.Suspense fallback={null}>
                    <SettingsPage />
                  </React.Suspense>
                )}
              />
            </Switch>
          </MainErrorBoundary>
        </VerticalLayout>
      </VerticalLayout>
      <React.Suspense fallback={null}>
        <NotificationContainer />
        <ConnectionErrorListener />
      </React.Suspense>
      <React.Suspense fallback={null}>
        {/* Notifications need to come after the -webkit-overflow-scrolling element on iOS */}
        <DesktopNotifications />
        <StellarUriHandler />
        <WalletConnectHandler />
      </React.Suspense>
      {import.meta.env.VITE_PLATFORM === "android" ? <AndroidBackButton /> : null}
      {import.meta.env.VITE_PLATFORM === "android" || import.meta.env.VITE_PLATFORM === "ios" ? <LinkHandler /> : null}
    </>
  )
}

export default React.memo(Stage2)
