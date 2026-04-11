import React from "react"
import { useNetworkCacheReset } from "~Generic/hooks/stellar-subscriptions"
import {
  defaultMainnetHorizonURLs,
  defaultTestnetHorizonURLs,
  normalizeHorizonServerURL,
  prependCustomHorizonServer
} from "~Generic/lib/horizon-servers"
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

const initialHorizonSelection: Promise<[string[], string[]]> = (async () => {
  const { netWorker } = await workers

  const pubnetHorizonURLs: string[] = Array.from(
    new Set(
      await Promise.all([
        defaultMainnetHorizonURLs[0],
        netWorker.checkHorizonOrFailover(defaultMainnetHorizonURLs[1], defaultMainnetHorizonURLs[0]),
        netWorker.checkHorizonOrFailover(defaultMainnetHorizonURLs[2], defaultMainnetHorizonURLs[0])
      ])
    )
  )

  return [pubnetHorizonURLs, defaultTestnetHorizonURLs]
})()

initialHorizonSelection.catch(trackError)

const initialValues: ContextType = {
  isSelectionPending: true,
  pendingSelection: initialHorizonSelection,
  pubnetHorizonURLs: [defaultMainnetHorizonURLs[0]],
  testnetHorizonURLs: defaultTestnetHorizonURLs
}

const StellarContext = React.createContext<ContextType>(initialValues)

function arraysEqual(a: string[], b: string[]) {
  return a.length === b.length && a.every((value, index) => value === b[index])
}

function createMainnetHorizonURLs(
  baseURLs: string[],
  customURL: string | undefined,
  onlyCustomMainnetHorizon: boolean,
  useCustomMainnetHorizon: boolean
) {
  if (!useCustomMainnetHorizon || !customURL) {
    return baseURLs
  }

  try {
    const normalizedCustomURL = normalizeHorizonServerURL(customURL)
    return onlyCustomMainnetHorizon ? [normalizedCustomURL] : prependCustomHorizonServer(baseURLs, normalizedCustomURL)
  } catch (error) {
    return baseURLs
  }
}

export function StellarProvider(props: Props) {
  const settings = React.useContext(SettingsContext)
  const [contextValue, setContextValue] = React.useState<ContextType>(initialValues)
  const resetNetworkCaches = useNetworkCacheReset()
  const previousURLs = React.useRef({
    pubnet: initialValues.pubnetHorizonURLs,
    testnet: initialValues.testnetHorizonURLs
  })

  React.useEffect(() => {
    let cancelled = false

    const init = async () => {
      const { netWorker } = await workers

      const [basePubnetHorizonURLs, testnetHorizonURLs] = await initialHorizonSelection
      const pubnetHorizonURLs = createMainnetHorizonURLs(
        basePubnetHorizonURLs,
        settings.customMainnetHorizonURL,
        settings.onlyCustomMainnetHorizon,
        settings.useCustomMainnetHorizon
      )

      if (!cancelled) {
        setContextValue({
          isSelectionPending: false,
          pendingSelection: initialHorizonSelection,
          pubnetHorizonURLs,
          testnetHorizonURLs
        })

        const didChange =
          !arraysEqual(previousURLs.current.pubnet, pubnetHorizonURLs) ||
          !arraysEqual(previousURLs.current.testnet, testnetHorizonURLs)

        if (didChange) {
          previousURLs.current = { pubnet: pubnetHorizonURLs, testnet: testnetHorizonURLs }
          await netWorker.resetAllSubscriptions()
          resetNetworkCaches()
        }
      }
    }

    if (navigator.onLine !== false) {
      init().catch(trackError)
    }

    return () => {
      cancelled = true
    }
  }, [
    resetNetworkCaches,
    settings.customMainnetHorizonURL,
    settings.onlyCustomMainnetHorizon,
    settings.useCustomMainnetHorizon
  ])

  return <StellarContext.Provider value={contextValue}>{props.children}</StellarContext.Provider>
}

export { ContextType as StellarContextType, StellarContext }
