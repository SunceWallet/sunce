import List from "@material-ui/core/List"
import React from "react"
import { useTranslation } from "react-i18next"
import { AccountsContext } from "~App/contexts/accounts"
import { SettingsContext } from "~App/contexts/settings"
import * as routes from "~App/routes"
import { useIsMobile, useRouter } from "~Generic/hooks/userinterface"
import { matchesRoute } from "~Generic/lib/routes"
import Carousel from "~Layout/components/Carousel"
import { isDefaultProtocolClient, setAsDefaultProtocolClient } from "~Platform/protocol-handler"
import { availableLanguages } from "../../../i18n/index"
import ManageTrustedServicesDialog from "./ManageTrustedServicesDialog"
import SavedAddressesExportDialog from "./SavedAddressesExportDialog"
import {
  BiometricLockSetting,
  HideMemoSetting,
  LanguageSetting,
  MultiSigSetting,
  ProtocolHandlerSetting,
  SavedAddressesExportSetting,
  ShowClaimableBalanceSetting,
  ShowDustSetting,
  TestnetSetting,
  TrustedServicesSetting
} from "./Settings"

const SettingsDialogs = React.memo(function SettingsDialogs() {
  const router = useRouter()
  const showManageTrustedServices = matchesRoute(router.location.pathname, routes.manageTrustedServices())
  const showSavedAddressesExport = matchesRoute(router.location.pathname, routes.savedAddressesExport())

  if (showSavedAddressesExport) {
    return <SavedAddressesExportDialog />
  }
  return showManageTrustedServices ? <ManageTrustedServicesDialog /> : <></>
})

function AppSettings() {
  const isSmallScreen = useIsMobile()
  const router = useRouter()
  const { i18n } = useTranslation()

  const [isDefaultHandler, setIsDefaultHandler] = React.useState<boolean>(false)

  const showSettingsOverview = matchesRoute(router.location.pathname, routes.settings(), true)

  const { accounts } = React.useContext(AccountsContext)
  const settings = React.useContext(SettingsContext)

  const getEffectiveLanguage = <L extends string | undefined, F extends any>(lang: L, fallback: F) => {
    return availableLanguages.indexOf(lang as any) > -1 ? lang : fallback
  }

  const hasTestnetAccount = accounts.some(account => account.testnet)
  const navigateToTrustedServices = React.useCallback(() => router.history.push(routes.manageTrustedServices()), [
    router.history
  ])

  const navigateToSavedAddressesExport = React.useCallback(() => router.history.push(routes.savedAddressesExport()), [
    router.history
  ])

  const switchLanguage = React.useCallback(
    (lang: string) => {
      i18n.changeLanguage(getEffectiveLanguage(lang, "en"))
      settings.setLanguage(lang)
    },
    [i18n, settings]
  )

  isDefaultProtocolClient().then(setIsDefaultHandler)

  const setDefaultClient = React.useCallback(() => {
    setAsDefaultProtocolClient().then(success => setIsDefaultHandler(success))
  }, [setIsDefaultHandler])

  return (
    <Carousel current={showSettingsOverview ? 0 : 1}>
      <List style={{ padding: isSmallScreen ? 0 : "24px 16px" }}>
        {availableLanguages.length > 1 ? (
          <LanguageSetting onSelect={switchLanguage} value={getEffectiveLanguage(settings.language, "en")} />
        ) : null}
        {settings.biometricAvailability.available ? (
          <BiometricLockSetting
            enrolled={settings.biometricAvailability.enrolled}
            onToggle={settings.toggleBiometricLock}
            value={settings.biometricLock}
          />
        ) : null}
        <TestnetSetting
          hasTestnetAccount={hasTestnetAccount}
          onToggle={settings.toggleTestnet}
          value={settings.showTestnet || hasTestnetAccount}
        />
        <HideMemoSetting onToggle={settings.toggleHideMemos} value={settings.hideMemos} />
        <MultiSigSetting onToggle={settings.toggleMultiSignature} value={settings.multiSignature} />
        <ShowDustSetting onToggle={settings.toggleShowDust} value={settings.showDust} />
        <ShowClaimableBalanceSetting
          onToggle={settings.toggleShowClaimableBalanceTxs}
          value={settings.showClaimableBalanceTxs}
        />
        <ProtocolHandlerSetting isDefaultHandler={isDefaultHandler} onClick={setDefaultClient} />
        <TrustedServicesSetting onClick={navigateToTrustedServices} />
        <SavedAddressesExportSetting onClick={navigateToSavedAddressesExport} />
      </List>
      <SettingsDialogs />
    </Carousel>
  )
}

export default React.memo(AppSettings)
