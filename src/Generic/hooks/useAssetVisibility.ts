import { Asset } from "@stellar/stellar-sdk"
import { useContext } from "react"
import { stringifyAsset } from "../lib/stellar"
import { SettingsContext } from "~App/contexts/settings"

type VisibilityMode = "default" | "favorite" | "hidden"

export function useAssetVisibility(accountId: string) {
  const { accountAssetVisibilityModes, setAssetVisibilityMode } = useContext(SettingsContext)

  const getVisibilityMode = (asset: Asset): VisibilityMode => {
    const accountModes = accountAssetVisibilityModes[accountId] || {}
    return accountModes[stringifyAsset(asset)] || "default"
  }

  const setVisibilityMode = (asset: Asset, mode: VisibilityMode) => {
    setAssetVisibilityMode(accountId, stringifyAsset(asset), mode)
  }

  const toggleVisibilityMode = (asset: Asset) => {
    const currentMode = getVisibilityMode(asset)
    const modes: VisibilityMode[] = ["default", "favorite", "hidden"]
    const currentIndex = modes.indexOf(currentMode)
    const nextMode = modes[(currentIndex + 1) % modes.length]
    setVisibilityMode(asset, nextMode)
  }

  return {
    visibilityModes: accountAssetVisibilityModes[accountId] || {},
    getVisibilityMode,
    setVisibilityMode,
    toggleVisibilityMode
  }
} 