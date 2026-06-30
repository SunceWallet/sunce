import React from "react"
import { Buffer } from "buffer"
import { hash } from "@stellar/stellar-sdk"
import { BalanceLine } from "~Generic/lib/account"

const DEX_ENABLED_ASSET_ISSUER_HASH = "ef63b608a128f3b25131b23dcd8fb49ff14ff5ec5604b9519b6938c1ff51cbde"

interface ContextType {
  disableNoDexMode: () => void
  noDexMode: boolean
}

const isIOS = import.meta.env.VITE_PLATFORM === "ios"

function sha256Hex(value: string) {
  return hash(Buffer.from(value, "utf8")).toString("hex")
}

const AppModeContext = React.createContext<ContextType>({
  disableNoDexMode: () => undefined,
  noDexMode: isIOS
})

export function AppModeProvider(props: { children: React.ReactNode }) {
  const [noDexMode, setNoDexMode] = React.useState(isIOS)
  const disableNoDexMode = React.useCallback(() => setNoDexMode(false), [])

  const contextValue = React.useMemo(
    () => ({
      disableNoDexMode,
      noDexMode
    }),
    [disableNoDexMode, noDexMode]
  )

  return <AppModeContext.Provider value={contextValue}>{props.children}</AppModeContext.Provider>
}

export function useNoDexModeDetection(balances: BalanceLine[]) {
  const { disableNoDexMode, noDexMode } = React.useContext(AppModeContext)

  React.useEffect(() => {
    if (
      noDexMode &&
      balances.some(
        balance => "asset_issuer" in balance && sha256Hex(balance.asset_issuer) === DEX_ENABLED_ASSET_ISSUER_HASH
      )
    ) {
      disableNoDexMode()
    }
  }, [balances, disableNoDexMode, noDexMode])
}

export { ContextType as AppModeContextType, AppModeContext }
