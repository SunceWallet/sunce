import React from "react"
import { StrKey } from "@stellar/stellar-sdk"
import { SettingsContext } from "./settings"
import {
  ContactItem,
  ContactItems,
  ContactsSyncApiError,
  mergeContactItems,
  syncContacts,
  syncReportHasErrors
} from "~Generic/lib/contacts-sync"

export type SavedAddresses = {
  [address: string]: { label: string }
}

const storageKey = "sunce:favorites:mainnet"
const lastSyncStorageKey = "sunce:favorites:last-sync:mainnet"
const syncCursorStorageKey = "sunce:favorites:sync-cursor:mainnet"
const syncIntervalMs = 5 * 60 * 1000
const syncTimeoutMs = 30 * 1000
const syncRetryDelayMs = 1000

export type SavedAddressesSyncStatus = "idle" | "syncing" | "error"

interface Props {
  children: React.ReactNode
}

interface ContextType {
  savedAddresses: SavedAddresses
  add: (address: string, label: string) => void
  remove: (address: string) => void
  bulkUpdate: (addresses: SavedAddresses) => void
  lastSyncAt: number | undefined
  synchronize: () => void
  syncStatus: SavedAddressesSyncStatus
}

const initialValues: ContextType = {
  savedAddresses: {},
  add: () => undefined,
  remove: () => undefined,
  bulkUpdate: () => undefined,
  lastSyncAt: undefined,
  synchronize: () => undefined,
  syncStatus: "idle"
}

const SavedAddressesContext = React.createContext<ContextType>(initialValues)

export function SavedAddressesProvider(props: Props) {
  const settings = React.useContext(SettingsContext)
  const [contactItems, setContactItems] = React.useState<ContactItems>(() => {
    const items = loadContactItems()
    localStorage.setItem(storageKey, JSON.stringify(items))
    return items
  })
  const contactItemsRef = React.useRef(contactItems)
  const [lastSyncAt, setLastSyncAt] = React.useState<number | undefined>(loadLastSyncAt)
  const lastSyncAtRef = React.useRef(lastSyncAt)
  const syncCursorRef = React.useRef<number | undefined>(loadSyncCursor())
  const syncApiKeyRef = React.useRef<string | undefined>()
  const syncApiKeyInitializedRef = React.useRef(false)
  const [syncStatus, setSyncStatus] = React.useState<SavedAddressesSyncStatus>("idle")
  const synchronizeRef = React.useRef<() => void>(() => undefined)

  const savedAddresses = React.useMemo(() => toSavedAddresses(contactItems), [contactItems])

  const updateContactItems = React.useCallback((update: (current: ContactItems) => ContactItems) => {
    const updatedItems = update(contactItemsRef.current)
    contactItemsRef.current = updatedItems
    localStorage.setItem(storageKey, JSON.stringify(updatedItems))
    setContactItems(updatedItems)
  }, [])

  const synchronize = React.useCallback(() => synchronizeRef.current(), [])

  const resetSyncProgress = React.useCallback(() => {
    localStorage.removeItem(lastSyncStorageKey)
    localStorage.removeItem(syncCursorStorageKey)
    lastSyncAtRef.current = undefined
    syncCursorRef.current = undefined
    setLastSyncAt(undefined)
  }, [])

  const updateSavedAddresses = React.useCallback(
    (update: (current: ContactItems) => ContactItems) => {
      updateContactItems(update)
      synchronize()
    },
    [synchronize, updateContactItems]
  )

  const bulkUpdate = React.useCallback(
    (addresses: SavedAddresses) => {
      updateSavedAddresses(current => replaceSavedAddresses(current, addresses, lastSyncAtRef.current || 0))
    },
    [updateSavedAddresses]
  )

  const add = React.useCallback(
    (address: string, label: string) => {
      updateSavedAddresses(current => {
        return {
          ...current,
          [address]: { label, updated_at: nextUpdatedAt(current[address], lastSyncAtRef.current || 0) }
        }
      })
    },
    [updateSavedAddresses]
  )

  const remove = React.useCallback(
    (address: string) => {
      updateSavedAddresses(current => {
        return {
          ...current,
          [address]: { label: null, updated_at: nextUpdatedAt(current[address], lastSyncAtRef.current || 0) }
        }
      })
    },
    [updateSavedAddresses]
  )

  React.useEffect(() => {
    const apiKey = settings.savedAddressesSyncApiKey?.trim()
    synchronizeRef.current = () => undefined
    setSyncStatus("idle")

    if (!settings.initialized) return

    if (syncApiKeyInitializedRef.current && syncApiKeyRef.current !== apiKey) {
      resetSyncProgress()
    }
    syncApiKeyRef.current = apiKey
    syncApiKeyInitializedRef.current = true

    if (!settings.savedAddressesSyncEnabled || !apiKey) return

    let active = true
    let syncing = false
    let controller: AbortController | undefined
    let retrySyncTimer: number | undefined

    const synchronizeContacts = async () => {
      if (syncing || window.navigator.onLine === false) return

      if (retrySyncTimer !== undefined) {
        window.clearTimeout(retrySyncTimer)
        retrySyncTimer = undefined
      }

      syncing = true
      setSyncStatus("syncing")
      const sourceItems = contactItemsRef.current
      const sentItems = toSyncContactItems(sourceItems, lastSyncAtRef.current || 0)
      let synchronizeAgain = false
      let timeout: number | undefined

      try {
        controller = typeof AbortController === "function" ? new AbortController() : undefined
        const response = await Promise.race([
          syncContacts({
            apiKey,
            cursor: syncCursorRef.current ?? null,
            items: sentItems,
            signal: controller?.signal
          }),
          new Promise<never>((resolve, reject) => {
            timeout = window.setTimeout(() => {
              controller?.abort()
              reject(new Error("Contacts sync timed out"))
            }, syncTimeoutMs)
          })
        ])
        if (!active) return

        const changedWhileSyncing = contactItemsRef.current !== sourceItems
        if (response.items !== undefined) {
          updateContactItems(current => mergeContactItems(current, response.items))
          localStorage.setItem(syncCursorStorageKey, String(response.next_cursor))
          syncCursorRef.current = response.next_cursor
        }

        if (syncReportHasErrors(response.report)) {
          setSyncStatus("error")
        } else if (changedWhileSyncing) {
          synchronizeAgain = true
        } else {
          const syncedAt = Date.now()
          localStorage.setItem(lastSyncStorageKey, String(syncedAt))
          lastSyncAtRef.current = syncedAt
          setLastSyncAt(syncedAt)
          setSyncStatus("idle")
        }
      } catch (error) {
        if (!active) return

        if (error instanceof ContactsSyncApiError && error.status === 409) {
          if (isCursorAheadError(error)) resetSyncProgress()
          synchronizeAgain = true
        } else if (active) {
          setSyncStatus("error")
        }
      } finally {
        if (timeout !== undefined) window.clearTimeout(timeout)
        syncing = false
        controller = undefined
        if (active && synchronizeAgain) {
          retrySyncTimer = window.setTimeout(synchronizeContacts, syncRetryDelayMs)
        }
      }
    }

    synchronizeRef.current = synchronizeContacts
    const initialSyncTimer = window.setTimeout(synchronizeContacts, 1000)
    const syncInterval = window.setInterval(synchronizeContacts, syncIntervalMs)
    window.addEventListener("online", synchronizeContacts)

    return () => {
      active = false
      window.clearTimeout(initialSyncTimer)
      window.clearInterval(syncInterval)
      if (retrySyncTimer !== undefined) window.clearTimeout(retrySyncTimer)
      window.removeEventListener("online", synchronizeContacts)
      if (synchronizeRef.current === synchronizeContacts) synchronizeRef.current = () => undefined
      controller?.abort()
    }
  }, [
    settings.initialized,
    settings.savedAddressesSyncApiKey,
    settings.savedAddressesSyncEnabled,
    resetSyncProgress,
    updateContactItems
  ])

  const context = {
    savedAddresses,
    add,
    remove,
    bulkUpdate,
    lastSyncAt,
    synchronize,
    syncStatus
  }

  return <SavedAddressesContext.Provider value={context}>{props.children}</SavedAddressesContext.Provider>
}

export { ContextType as SavedAddressesContextType, SavedAddressesContext }

export function useSavedAddressesSyncOnMount() {
  const { synchronize } = React.useContext(SavedAddressesContext)

  React.useEffect(() => {
    synchronize()
  }, [synchronize])
}

function loadContactItems(): ContactItems {
  let stored: unknown

  try {
    stored = JSON.parse(localStorage.getItem(storageKey) || "{}")
  } catch {
    return {}
  }

  if (typeof stored !== "object" || stored === null) return {}

  const items: ContactItems = {}
  for (const [address, value] of Object.entries(stored)) {
    if (typeof value !== "object" || value === null || !("label" in value)) continue

    const label = value.label
    if (typeof label !== "string" && label !== null) continue

    const updatedAt = "updated_at" in value && Number.isSafeInteger(value.updated_at) ? value.updated_at : 1
    items[address] = { label, updated_at: updatedAt }
  }

  return items
}

function loadLastSyncAt(): number | undefined {
  const value = Number(localStorage.getItem(lastSyncStorageKey))
  return Number.isSafeInteger(value) && value > 0 ? value : undefined
}

function loadSyncCursor(): number | undefined {
  const value = Number(localStorage.getItem(syncCursorStorageKey))
  return Number.isSafeInteger(value) && value >= 0 ? value : undefined
}

function toSavedAddresses(items: ContactItems): SavedAddresses {
  const addresses: SavedAddresses = {}

  for (const [address, item] of Object.entries(items)) {
    if (item.label !== null) addresses[address] = { label: item.label }
  }

  return addresses
}

function toSyncContactItems(items: ContactItems, updatedAfter: number): ContactItems {
  const syncItems: ContactItems = {}

  for (const [address, item] of Object.entries(items)) {
    if (StrKey.isValidEd25519PublicKey(address) && item.updated_at > updatedAfter) {
      syncItems[address] = item
    }
  }

  return syncItems
}

function replaceSavedAddresses(current: ContactItems, addresses: SavedAddresses, updatedAfter: number): ContactItems {
  const updated = { ...current }

  for (const [address, item] of Object.entries(addresses)) {
    if (current[address]?.label !== item.label) {
      updated[address] = { label: item.label, updated_at: nextUpdatedAt(current[address], updatedAfter) }
    }
  }

  for (const [address, item] of Object.entries(current)) {
    if (item.label !== null && !addresses[address]) {
      updated[address] = { label: null, updated_at: nextUpdatedAt(item, updatedAfter) }
    }
  }

  return updated
}

function nextUpdatedAt(current: ContactItem | undefined, updatedAfter: number) {
  return Math.max(Date.now(), (current?.updated_at || 0) + 1, updatedAfter + 1)
}

function isCursorAheadError(error: ContactsSyncApiError) {
  return (
    typeof error.body === "object" &&
    error.body !== null &&
    "message" in error.body &&
    error.body.message === "`cursor` is ahead of the current server revision"
  )
}
