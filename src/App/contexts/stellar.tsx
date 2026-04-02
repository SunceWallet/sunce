import React from "react"
import { useNetworkCacheReset } from "~Generic/hooks/stellar-subscriptions"
import { defaultMainnetHorizonURLs, defaultTestnetHorizonURLs } from "~Generic/lib/horizon-servers"
import { workers } from "~Workers/worker-controller"
import { SettingsContext } from "./settings"
import { trackError } from "./notifications"

interface Props {
  children: React.ReactNode
}

interface ContextType {
  isSelectionPending: boolean
  pendingSelection: Promise<any>
  pubnetHorizonURLs: string[]
  testnetHorizonURLs: string[]
}

const initialValues: ContextType = {
  isSelectionPending: false,
  pendingSelection: Promise.resolve([defaultMainnetHorizonURLs, defaultTestnetHorizonURLs]),
  pubnetHorizonURLs: defaultMainnetHorizonURLs,
  testnetHorizonURLs: defaultTestnetHorizonURLs
}

const StellarContext = React.createContext<ContextType>(initialValues)

export function StellarProvider(props: Props) {
  const settings = React.useContext(SettingsContext)
  const [contextValue, setContextValue] = React.useState<ContextType>(initialValues)
  const resetNetworkCaches = useNetworkCacheReset()
  const previousURLs = React.useRef({
    pubnet: initialValues.pubnetHorizonURLs,
    testnet: initialValues.testnetHorizonURLs
  })

  React.useEffect(() => {
    const pubnetHorizonURLs =
      settings.mainnetHorizonURLs && settings.mainnetHorizonURLs.length > 0
        ? settings.mainnetHorizonURLs
        : defaultMainnetHorizonURLs
    const testnetHorizonURLs = defaultTestnetHorizonURLs

    setContextValue({
      isSelectionPending: false,
      pendingSelection: Promise.resolve([pubnetHorizonURLs, testnetHorizonURLs]),
      pubnetHorizonURLs,
      testnetHorizonURLs
    })

    const didChange =
      JSON.stringify(previousURLs.current.pubnet) !== JSON.stringify(pubnetHorizonURLs) ||
      JSON.stringify(previousURLs.current.testnet) !== JSON.stringify(testnetHorizonURLs)

    if (didChange) {
      previousURLs.current = { pubnet: pubnetHorizonURLs, testnet: testnetHorizonURLs }

      workers
        .then(({ netWorker }) => netWorker.resetAllSubscriptions())
        .then(resetNetworkCaches)
        .catch(trackError)
    }
  }, [resetNetworkCaches, settings.mainnetHorizonURLs])

  return <StellarContext.Provider value={contextValue}>{props.children}</StellarContext.Provider>
}

export { ContextType as StellarContextType, StellarContext }
