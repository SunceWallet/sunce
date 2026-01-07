import React from "react"

export type HiddenSenders = {
  [address: string]: { label?: string }
}

const storageKey = "sunce:hidden-senders:mainnet"

interface Props {
  children: React.ReactNode
}

interface ContextType {
  hiddenSenders: HiddenSenders
  add: (address: string, label?: string) => void
  remove: (address: string) => void
  bulkUpdate: (addresses: HiddenSenders) => void
}

const initialValues: ContextType = {
  hiddenSenders: {},
  add: (address: string, label?: string) => {},
  remove: (address: string) => {},
  bulkUpdate: (addresses: HiddenSenders) => {}
}

const HiddenSendersContext = React.createContext<ContextType>(initialValues)

export function HiddenSendersProvider(props: Props) {
  const [hiddenSenders, setHiddenSenders] = React.useState<HiddenSenders>(
    (): HiddenSenders => JSON.parse(localStorage.getItem(storageKey) || "{}")
  )

  const write = React.useCallback(
    (addresses: HiddenSenders) => localStorage.setItem(storageKey, JSON.stringify(addresses)),
    []
  )

  const bulkUpdate = React.useCallback(
    (addresses: HiddenSenders) => {
      write(addresses)
      setHiddenSenders(addresses)
    },
    [write]
  )

  const add = React.useCallback(
    (address: string, label?: string) => {
      setHiddenSenders((addresses: HiddenSenders) => {
        const newAddresses = {
          ...addresses,
          [address]: { ...(label ? { label } : {}) }
        }
        write(newAddresses)
        return newAddresses
      })
    },
    [write]
  )

  const remove = React.useCallback(
    (address: string) => {
      setHiddenSenders((addresses: HiddenSenders) => {
        const { [address]: _, ...newAddresses } = addresses
        write(newAddresses)
        return newAddresses
      })
    },
    [write]
  )
  const context = {
    hiddenSenders,
    add,
    remove,
    bulkUpdate
  }

  return <HiddenSendersContext.Provider value={context}>{props.children}</HiddenSendersContext.Provider>
}

export { ContextType as HiddenSendersContextType, HiddenSendersContext }

