import React from "react"
import { SettingsContext } from "~App/contexts/settings"
import { AccountData } from "~Generic/lib/account"
import { balancelineToAsset, stringifyAsset } from "~Generic/lib/stellar"

const useVisibleBalances = (accountData: AccountData, showHidden: boolean = true) => {
  const { accountAssetSettings } = React.useContext(SettingsContext)
  const assetSettings = accountAssetSettings[accountData.account_id] || {}
  
  if (showHidden) {
    return accountData.balances
  }

  const activeAssets = accountData.balances.filter((balance) => 
    balance.asset_type === "native" || 
    assetSettings[stringifyAsset(balancelineToAsset(balance))]?.visibility !== "hidden"
  )

  return activeAssets
}

export default useVisibleBalances