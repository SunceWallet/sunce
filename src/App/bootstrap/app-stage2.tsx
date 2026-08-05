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
import { AccountsContext } from "../contexts/accounts"
import { SettingsContext } from "../contexts/settings"
import AllAccountsPage from "../components/AccountListView"
import AndroidBackButton from "../components/AndroidBackButton"
import DesktopNotifications from "../components/DesktopNotifications"
import LinkHandler from "../components/LinkHandler"
import * as routes from "../routes"
import { useRouter } from "~Generic/hooks/userinterface"

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

function LastOpenedAccountRedirect() {
  const { accounts, initialized: accountsInitialized } = React.useContext(AccountsContext)
  const { initialized: settingsInitialized, lastOpenedAccount, setSetting } = React.useContext(SettingsContext)
  const router = useRouter()
  const redirectAttempted = React.useRef(false)

  React.useEffect(() => {
    if (redirectAttempted.current || !accountsInitialized || !settingsInitialized) {
      return
    }

    redirectAttempted.current = true

    if (router.location.pathname !== routes.allAccounts() || !lastOpenedAccount) return

    const account = accounts.find(
      someAccount =>
        someAccount.id === lastOpenedAccount.id &&
        someAccount.publicKey === lastOpenedAccount.publicKey &&
        someAccount.testnet === lastOpenedAccount.testnet
    )

    if (account) {
      router.history.replace(routes.account(account.id))
    } else {
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
      <LastOpenedAccountRedirect />
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
