/*
 * THIS WILL RUN IN EMULATOR OUTSIDE OF SANDBOXED APP IFRAME!
 */

import { nanoid } from "nanoid"
import { createStore, KeysData, KeyStore } from "key-store"
import { Messages } from "~shared/ipc"
import { expose } from "./ipc"
import { registerKeyStoreCommandHandlers } from "./keystore"

// CHANGING THIS IDENTIFIER WILL BREAK BACKWARDS-COMPATIBILITY!
const cordovaSecureStorageName = "sunce:keystore"

export const storeKeys = {
  keystore: "keys",
  settings: "settings",
  ignoredSignatureRequests: "ignored-signature-requests",
  clientSecret: "clientsecret"
}

expose(Messages.ReadSettings, respondWithSettings)
expose(Messages.StoreSettings, updateSettings)
expose(Messages.ReadIgnoredSignatureRequestHashes, respondWithIgnoredSignatureRequests)
expose(Messages.StoreIgnoredSignatureRequestHashes, updateIgnoredSignatureRequests)

let currentSettings: Platform.SettingsData | undefined

export const getCurrentSettings = () => currentSettings

async function respondWithSettings(secureStorage: CordovaSecureStorage) {
  const settings = await getValueFromStorage(secureStorage, storeKeys.settings)
  return settings
}

async function updateSettings(
  secureStorage: CordovaSecureStorage,
  keyStore: KeyStore<PrivateKeyData, PublicKeyData>,
  settings: Partial<Platform.SettingsData>
) {
  if (!settings || typeof settings !== "object") {
    throw new Error(`Invalid settings passed: ${settings}`)
  }

  await saveValueIntoStorage(secureStorage, storeKeys.settings, settings)
  return true
}

async function respondWithIgnoredSignatureRequests(secureStorage: CordovaSecureStorage) {
  const ignoredSignatureRequests = await getValueFromStorage(secureStorage, storeKeys.ignoredSignatureRequests)
  return ignoredSignatureRequests
}

async function updateIgnoredSignatureRequests(
  secureStorage: CordovaSecureStorage,
  keyStore: KeyStore<PrivateKeyData, PublicKeyData>,
  ignoredSignatureRequests: string[]
) {
  if (!Array.isArray(ignoredSignatureRequests)) {
    throw new Error(`Expected signature requests to be an array: ${ignoredSignatureRequests}`)
  }

  await saveValueIntoStorage(secureStorage, storeKeys.ignoredSignatureRequests, ignoredSignatureRequests)
  return true
}

async function getValueFromStorage<T = any>(storage: CordovaSecureStorage, keyName: string) {
  return new Promise<T>((resolve, reject) => {
    storage.get(value => resolve(JSON.parse(value)), reject, keyName)
  })
}

async function saveValueIntoStorage(storage: CordovaSecureStorage, keyName: string, value: object) {
  return new Promise<void>((resolve, reject) => {
    storage.set(
      () => resolve(),
      error => reject(error instanceof Error ? error : new Error(String(error))),
      keyName,
      JSON.stringify(value)
    )
  })
}

async function prepareStorage(secureStorage: CordovaSecureStorage) {
  const keys = await new Promise<string[]>((resolve, reject) => {
    secureStorage.keys(result => resolve(result), reject)
  })

  const initializeKeyValueIfNotSet = async (keyName: string, defaultValue: any) => {
    if (keys.indexOf(keyName) === -1) {
      await saveValueIntoStorage(secureStorage, keyName, defaultValue)
    }
  }

  await Promise.all([
    initializeKeyValueIfNotSet(storeKeys.keystore, {}),
    initializeKeyValueIfNotSet(storeKeys.settings, {}),
    initializeKeyValueIfNotSet(storeKeys.ignoredSignatureRequests, []),
    initializeKeyValueIfNotSet(storeKeys.clientSecret, nanoid(32))
  ])

  currentSettings = await getValueFromStorage(secureStorage, storeKeys.settings)
}

export function initSecureStorage() {
  const secureStoragePromise = new Promise<CordovaSecureStorage>((resolve, reject) => {
    const storage: CordovaSecureStorage = new cordova.plugins.SecureStorage(
      () =>
        prepareStorage(storage)
          .then(() => resolve(storage))
          .catch(reject),
      reject, // might throw error e.g. if no lock screen is set for android
      cordovaSecureStorageName
    )
  })

  return secureStoragePromise
}

export async function initKeyStore(secureStorage: CordovaSecureStorage) {
  let committedKeys = await getValueFromStorage<KeysData<PublicKeyData>>(secureStorage, storeKeys.keystore)
  const openStore = () =>
    createStore<PrivateKeyData, PublicKeyData>(
      async keys => {
        await saveValueIntoStorage(secureStorage, storeKeys.keystore, keys)
        committedKeys = keys
      },
      { ...committedKeys },
      { iterations: 250000 }
    )
  let current = openStore()
  let pending = Promise.resolve()

  // key-store mutates its input before saving. Publish each snapshot only after the native write succeeds.
  type WalletKeyStore = KeyStore<PrivateKeyData, PublicKeyData>
  const write = (mutate: (store: WalletKeyStore) => Promise<void>) => {
    const result = pending.then(async () => {
      const draft = openStore()
      await mutate(draft)
      current = draft
    })
    pending = result.catch(() => undefined)
    return result
  }

  const keyStore: WalletKeyStore = {
    getKeyIDs: () => current.getKeyIDs(),
    getPublicKeyData: id => current.getPublicKeyData(id),
    getPrivateKeyData: (id, password) => current.getPrivateKeyData(id, password),
    saveKey: (...args) => write(store => store.saveKey(...args)),
    saveKeys: data => write(store => store.saveKeys(data)),
    savePublicKeyData: (id, data) => write(store => store.savePublicKeyData(id, data)),
    removeKey: id => write(store => store.removeKey(id))
  }
  registerKeyStoreCommandHandlers()
  return keyStore
}
