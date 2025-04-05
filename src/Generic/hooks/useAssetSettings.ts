import { Asset } from "@stellar/stellar-sdk"
import { useCallback, useContext, useMemo } from "react"
import { stringifyAsset } from "../lib/stellar"
import { SettingsContext } from "~App/contexts/settings"

export function useAssetSettings(accountId: string) {
  const { accountAssetSettings, setAssetSettings } = useContext(SettingsContext)

  const assetSettings = useMemo(() => accountAssetSettings[accountId] || {}, [accountAssetSettings, accountId])

  const toggleVisibilityMode = useCallback((asset: Asset) => {
    const currentSettings = assetSettings[stringifyAsset(asset)] || {}
    const modes: Platform.VisibilityMode[] = [undefined, "favorite", "hidden"]
    const currentIndex = modes.indexOf(currentSettings.visibility)
    const nextMode = modes[(currentIndex + 1) % modes.length]
    setAssetSettings(accountId, stringifyAsset(asset), {
      ...currentSettings,
      visibility: nextMode,
    })
  }, [accountId, assetSettings, setAssetSettings])

  return {
    assetSettings,
    toggleVisibilityMode
  }
} 