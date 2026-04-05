import React from "react"
import { Asset } from "@stellar/stellar-sdk"
import { useAssetSettings } from "~Generic/hooks/useAssetSettings"
import { sortBalances } from "~Generic/lib/balances"
import { BalanceLine } from "~Generic/lib/account"
import { balancelineToAsset, getAssetsFromBalances, parseAssetID, stringifyAsset } from "~Generic/lib/stellar"

interface Options {
  accountId: string
  balances: BalanceLine[]
  selectedAssetId?: string
}

export function useReceivePaymentAsset(options: Options) {
  const { assetSettings } = useAssetSettings(options.accountId)

  const orderedAssets = React.useMemo(
    () => sortBalances(options.balances, assetSettings).map(balance => balancelineToAsset(balance)),
    [assetSettings, options.balances]
  )

  const defaultSelectableAsset = React.useMemo(() => {
    const firstVisibleToken = orderedAssets.find(
      asset => !asset.isNative() && assetSettings[stringifyAsset(asset)]?.visibility !== "hidden"
    )

    return firstVisibleToken || Asset.native()
  }, [assetSettings, orderedAssets])

  const allAvailableAssets = React.useMemo(() => {
    const assets = getAssetsFromBalances(options.balances)
    return assets.length > 0 ? assets : [Asset.native()]
  }, [options.balances])

  const selectedAsset = React.useMemo(() => {
    const matchingAvailableAsset = allAvailableAssets.find(asset => stringifyAsset(asset) === options.selectedAssetId)
    if (matchingAvailableAsset) {
      return matchingAvailableAsset
    }

    if (options.selectedAssetId) {
      try {
        return parseAssetID(options.selectedAssetId)
      } catch {
        // ignore invalid persisted values and fall back to the default asset
      }
    }

    return defaultSelectableAsset
  }, [allAvailableAssets, defaultSelectableAsset, options.selectedAssetId])

  const resolvedAssetId = React.useMemo(() => {
    if (options.balances.length === 0) {
      return options.selectedAssetId
    }

    if (!options.selectedAssetId) {
      return stringifyAsset(defaultSelectableAsset)
    }

    const isSelectedAssetAvailable = allAvailableAssets.some(asset => stringifyAsset(asset) === options.selectedAssetId)
    return isSelectedAssetAvailable ? options.selectedAssetId : stringifyAsset(defaultSelectableAsset)
  }, [allAvailableAssets, defaultSelectableAsset, options.balances.length, options.selectedAssetId])

  return {
    selectedAsset,
    resolvedAssetId
  }
}
