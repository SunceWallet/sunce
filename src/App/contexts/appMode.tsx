import React from "react"
import { hash } from "@stellar/stellar-sdk"
import { StellarContext } from "~App/contexts/stellar"
import { workers } from "~Workers/worker-controller"
import { trackError } from "./notifications"
import { AccountsContext } from "./accounts"

const DEX_ENABLED_ASSET_ISSUER_HASH = "ef63b608a128f3b25131b23dcd8fb49ff14ff5ec5604b9519b6938c1ff51cbde"

interface ContextType {
  isIOS: boolean
  noDexMode: boolean
}

const isIOS = import.meta.env.VITE_PLATFORM === "ios"

function sha256Hex(value: string) {
  return hash(Buffer.from(value, "utf8")).toString("hex")
}

const AppModeContext = React.createContext<ContextType>({
  isIOS,
  noDexMode: isIOS
})

export function AppModeProvider(props: { children: React.ReactNode }) {
  const { accounts } = React.useContext(AccountsContext)
  const stellar = React.useContext(StellarContext)
  const [noDexMode, setNoDexMode] = React.useState(isIOS)

  React.useEffect(() => {
    if (!isIOS || stellar.isSelectionPending) {
      return
    }

    let cancelled = false

    const checkAccountsForDexAsset = async () => {
      const { netWorker } = await workers

      for (const account of accounts) {
        const horizonURLs = account.testnet ? stellar.testnetHorizonURLs : stellar.pubnetHorizonURLs
        const accountData = await netWorker.fetchAccountData(horizonURLs, account.accountID)
        const hasDexAsset =
          accountData &&
          accountData.balances.some(
            balance => "asset_issuer" in balance && sha256Hex(balance.asset_issuer) === DEX_ENABLED_ASSET_ISSUER_HASH
          )

        if (hasDexAsset) {
          if (!cancelled) {
            setNoDexMode(false)
          }
          return
        }
      }

      if (!cancelled) {
        setNoDexMode(true)
      }
    }

    checkAccountsForDexAsset().catch(trackError)

    return () => {
      cancelled = true
    }
  }, [accounts, stellar.isSelectionPending, stellar.pubnetHorizonURLs, stellar.testnetHorizonURLs])

  const contextValue = React.useMemo(
    () => ({
      isIOS,
      noDexMode
    }),
    [noDexMode]
  )

  return <AppModeContext.Provider value={contextValue}>{props.children}</AppModeContext.Provider>
}

export { ContextType as AppModeContextType, AppModeContext }
