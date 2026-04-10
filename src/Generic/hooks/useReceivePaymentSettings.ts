import { useCallback, useContext, useMemo } from "react"
import { SettingsContext } from "~App/contexts/settings"

const defaultReceivePaymentSettings: Platform.ReceivePaymentSettings = {
  amount: "",
  description: ""
}

export function useReceivePaymentSettings(accountId: string) {
  const { accountReceivePaymentSettings, setReceivePaymentSettings } = useContext(SettingsContext)

  const receivePaymentSettings = useMemo(
    () => accountReceivePaymentSettings[accountId] || defaultReceivePaymentSettings,
    [accountId, accountReceivePaymentSettings]
  )

  const updateReceivePaymentSettings = useCallback(
    (settings: Platform.ReceivePaymentSettings) => setReceivePaymentSettings(accountId, settings),
    [accountId, setReceivePaymentSettings]
  )

  return {
    receivePaymentSettings,
    setReceivePaymentSettings: updateReceivePaymentSettings
  }
}
