import { Account } from "~App/contexts/accounts"
import { SavedAddresses } from "~App/contexts/savedAddresses"
// @ts-ignore
import { Platform } from "~shared/types/platform"
import getKeyStore from "~Platform/key-store"
// import { Keypair } from "@stellar/stellar-sdk" // Не используется в текущей реализации

export interface ExportData {
  version: string
  exportDate: string
  accounts: ExportedAccount[]
  contacts: SavedAddresses
}

export interface ExportedAccount {
  name: string
  publicKey: string
  privateKey: string | null
  encryptedPrivateKey?: {
    data: string
    nonce: string
    iterations: number
  }
  testnet: boolean
  cosignerOf?: string
  tokenPreferences: Platform.AssetSettingsMap
}

/**
 * Преобразует формат токена с ISSUER:CODE на CODE-ISSUER
 */
function convertTokenFormat(tokenKey: string): string {
  if (tokenKey === "XLM") {
    return "XLM"
  }
  const [issuer, code] = tokenKey.split(":")
  return `${code}-${issuer}`
}

/**
 * Создает данные для экспорта пользователя
 */
export async function createExportData(
  accounts: Account[],
  savedAddresses: SavedAddresses,
  tokenPreferences: Platform.AccountAssetSettingsMap
): Promise<ExportData> {
  const exportedAccounts: ExportedAccount[] = []
  const keyStore = await getKeyStore()

  // Экспортируем данные аккаунтов
  for (const account of accounts) {
    try {
      // Получаем публичные данные аккаунта
      const publicData = await keyStore.getPublicKeyData(account.id)
      
      let privateKey: string | null = null
      let encryptedPrivateKey: { data: string; nonce: string; iterations: number } | undefined = undefined

      if (publicData.password) {
        // Если аккаунт защищен паролем, получаем зашифрованные данные
        try {
          // Пытаемся получить приватный ключ без пароля (это не сработает)
          await keyStore.getPrivateKeyData(account.id, "")
        } catch (error) {
          // Если не получилось, значит нужен пароль - сохраняем зашифрованные данные
          try {
            // Используем более надежный способ получения зашифрованных данных
            const rawKeys = await getEncryptedKeysFromStorage()
            const keyData = rawKeys[account.id]
            if (keyData && keyData.private) {
              // Создаем объект с зашифрованными данными и метаданными
              encryptedPrivateKey = {
                data: btoa(keyData.private), // Конвертируем в base64 для удобства
                nonce: keyData.metadata?.nonce || "default-nonce",
                iterations: keyData.metadata?.iterations || 250000
              }
            } else {
              console.warn(`Не удалось найти зашифрованные данные для аккаунта ${account.name}`)
            }
          } catch (storageError) {
            console.warn(`Не удалось получить зашифрованные данные для аккаунта ${account.name}:`, storageError)
          }
        }
      } else {
        // Если пароля нет, получаем приватный ключ напрямую
        try {
          privateKey = await keyStore.getPrivateKeyData(account.id, "").then(data => data.privateKey)
        } catch (error) {
          console.warn(`Не удалось получить приватный ключ для аккаунта ${account.name}:`, error)
        }
      }

      // Получаем настройки токенов для этого аккаунта
      const accountTokenPreferences = tokenPreferences[account.accountID] || {}
      const convertedTokenPreferences: Platform.AssetSettingsMap = {}
      
      for (const [tokenKey, settings] of Object.entries(accountTokenPreferences)) {
        const convertedKey = convertTokenFormat(tokenKey)
        convertedTokenPreferences[convertedKey] = settings
      }

      exportedAccounts.push({
        name: account.name,
        publicKey: account.accountID, // Используем accountID вместо publicKey для корректной работы с cosigner
        privateKey,
        encryptedPrivateKey,
        testnet: account.testnet,
        cosignerOf: account.cosignerOf,
        tokenPreferences: convertedTokenPreferences
      })

      // Логируем информацию о типе экспортированного ключа
      if (encryptedPrivateKey) {
        console.log(`Экспортирован зашифрованный ключ для аккаунта: ${account.name}`)
      } else if (privateKey) {
        console.log(`Экспортирован обычный ключ для аккаунта: ${account.name}`)
      } else {
        console.warn(`Не удалось экспортировать ключ для аккаунта: ${account.name}`)
      }
    } catch (error) {
      console.warn(`Не удалось экспортировать данные для аккаунта ${account.name}:`, error)
      // Продолжаем с базовыми данными
      exportedAccounts.push({
        name: account.name,
        publicKey: account.publicKey,
        privateKey: null,
        testnet: account.testnet,
        cosignerOf: account.cosignerOf,
        tokenPreferences: {}
      })
    }
  }

  return {
    version: "1.0.0",
    exportDate: new Date().toISOString(),
    accounts: exportedAccounts,
    contacts: savedAddresses
  }
}

/**
 * Скачивает JSON файл с данными экспорта
 */
export function downloadExportFile(data: ExportData, filename: string = "sunce-wallet-export.json") {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  URL.revokeObjectURL(url)
}

/**
 * Обратное преобразование формата токена с CODE-ISSUER на ISSUER:CODE
 */
function parseTokenFormat(tokenKey: string): string {
  if (tokenKey === "XLM") {
    return "XLM"
  }
  const [code, issuer] = tokenKey.split("-")
  return `${issuer}:${code}`
}

/**
 * Получает зашифрованные данные из хранилища
 * Работает в разных окружениях (web, Electron, Cordova)
 */
async function getEncryptedKeysFromStorage(): Promise<any> {
  // В веб-окружении используем localStorage
  if (typeof localStorage !== 'undefined') {
    const rawKeys = localStorage.getItem("sunce:keys")
    return rawKeys ? JSON.parse(rawKeys) : {}
  }
  
  // В других окружениях можно добавить специфичную логику
  // Например, через IPC для Electron или Cordova
  console.warn("localStorage недоступен, зашифрованные ключи не могут быть экспортированы")
  return {}
}

/**
 * Генерирует следующий доступный ID для аккаунта
 */
function getNextAccountId(): string {
  const keys = localStorage.getItem("sunce:keys")
  if (!keys) return "1"
  
  const keysData = JSON.parse(keys)
  const existingIds = Object.keys(keysData).map(id => parseInt(id, 10)).filter(id => !isNaN(id))
  const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0
  return String(maxId + 1)
}

/**
 * Прямо сохраняет аккаунт в localStorage, обходя стандартные процедуры
 */
async function saveAccountDirectly(
  accountData: ExportedAccount,
  keyStore: any
): Promise<string> {
  const accountId = getNextAccountId()
  
  // Подготавливаем публичные данные
  const publicData: PublicKeyData = {
    name: accountData.name,
    publicKey: accountData.cosignerOf || accountData.publicKey, // Для cosigner используем cosignerOf, иначе publicKey
    password: Boolean(accountData.encryptedPrivateKey),
    testnet: accountData.testnet,
    cosignerOf: accountData.cosignerOf
  }

  if (accountData.privateKey) {
    // Обычный приватный ключ - используем стандартный API
    const privateData: PrivateKeyData = { privateKey: accountData.privateKey }
    await keyStore.saveKey(accountId, "", privateData, publicData)
  } else if (accountData.encryptedPrivateKey) {
    // Зашифрованный приватный ключ - сохраняем напрямую в localStorage
    try {
      const rawKeys = localStorage.getItem("sunce:keys")
      const keysData = rawKeys ? JSON.parse(rawKeys) : {}
      
      // Восстанавливаем структуру данных с метаданными
      keysData[accountId] = {
        metadata: {
          nonce: accountData.encryptedPrivateKey.nonce,
          iterations: accountData.encryptedPrivateKey.iterations
        },
        public: publicData,
        private: atob(accountData.encryptedPrivateKey.data) // Декодируем из base64
      }
      
      // Сохраняем обратно в localStorage
      localStorage.setItem("sunce:keys", JSON.stringify(keysData))
      
      console.log(`Восстановлен зашифрованный аккаунт: ${accountData.name}`)
    } catch (error) {
      throw new Error(`Не удалось восстановить зашифрованный аккаунт ${accountData.name}: ${error}`)
    }
  } else {
    throw new Error("Отсутствует приватный ключ")
  }
  
  return accountId
}

/**
 * Импортирует данные пользователя
 */
export async function importWalletData(
  importData: ExportData,
  existingAccounts: Account[],
  existingContacts: SavedAddresses,
  existingTokenPreferences: Platform.AccountAssetSettingsMap,
  updateAccountName: (accountID: string, newName: string) => Promise<void>,
  updateContacts: (contacts: SavedAddresses) => void,
  updateTokenPreferences: (accountID: string, tokenKey: string, settings: Platform.AssetSettings) => void
): Promise<{
  importedAccounts: number
  updatedAccounts: number
  importedContacts: number
  updatedContacts: number
  errors: string[]
}> {
  const results = {
    importedAccounts: 0,
    updatedAccounts: 0,
    importedContacts: 0,
    updatedContacts: 0,
    errors: [] as string[]
  }

  // Получаем key store
  const keyStore = await getKeyStore()

  // Создаем карту существующих аккаунтов по accountID (publicKey или cosignerOf)
  const existingAccountsMap = new Map<string, Account>()
  existingAccounts.forEach(account => {
    existingAccountsMap.set(account.accountID, account)
  })

  // Импортируем аккаунты
  for (const accountData of importData.accounts) {
    try {
      // Ищем существующий аккаунт по accountID (который теперь в publicKey)
      const existingAccount = existingAccountsMap.get(accountData.publicKey)
      
      if (existingAccount) {
        // Аккаунт уже существует - НЕ трогаем название, только добавляем/обновляем настройки токенов
        try {
          // Конвертируем настройки токенов обратно в формат ISSUER:CODE
          const convertedTokenPreferences: Platform.AssetSettingsMap = {}
          for (const [tokenKey, settings] of Object.entries(accountData.tokenPreferences)) {
            const originalKey = parseTokenFormat(tokenKey)
            convertedTokenPreferences[originalKey] = settings
          }
          
          // Добавляем/обновляем настройки токенов (заменяем совпадения)
          // Получаем существующие настройки и объединяем с новыми
          const existingPreferences = existingTokenPreferences[existingAccount.accountID] || {}
          const mergedPreferences = { ...existingPreferences, ...convertedTokenPreferences }
          
          // Обновляем каждый токен отдельно
          Object.entries(mergedPreferences).forEach(([tokenKey, settings]) => {
            updateTokenPreferences(existingAccount.accountID, tokenKey, settings)
          })
          results.updatedAccounts++
        } catch (error) {
          results.errors.push(`Не удалось обновить настройки токенов для аккаунта ${existingAccount.name}: ${error}`)
        }
      } else {
        // Новый аккаунт - создаем полностью
        if (!accountData.privateKey && !accountData.encryptedPrivateKey) {
          results.errors.push(`Не удалось создать аккаунт ${accountData.name}: отсутствует приватный ключ`)
          continue
        }

        try {
          // Создаем аккаунт напрямую через key store
          await saveAccountDirectly(accountData, keyStore)
          
          // Добавляем настройки токенов для нового аккаунта
          const convertedTokenPreferences: Platform.AssetSettingsMap = {}
          for (const [tokenKey, settings] of Object.entries(accountData.tokenPreferences)) {
            const originalKey = parseTokenFormat(tokenKey)
            convertedTokenPreferences[originalKey] = settings
          }

          // Обновляем настройки токенов для нового аккаунта
          // Используем правильный accountID для cosigner аккаунтов
          const accountID = accountData.cosignerOf || accountData.publicKey
          Object.entries(convertedTokenPreferences).forEach(([tokenKey, settings]) => {
            updateTokenPreferences(accountID, tokenKey, settings)
          })

          results.importedAccounts++
        } catch (error) {
          results.errors.push(`Не удалось создать аккаунт ${accountData.name}: ${error}`)
        }
      }
    } catch (error) {
      results.errors.push(`Ошибка при обработке аккаунта ${accountData.name}: ${error}`)
    }
  }

  // Импортируем контакты
  const newContacts = { ...existingContacts }
  let contactsChanged = false

  for (const [address, contactData] of Object.entries(importData.contacts)) {
    if (newContacts[address]) {
      // Контакт существует - обновляем label
      if (newContacts[address].label !== contactData.label) {
        newContacts[address] = contactData
        contactsChanged = true
        results.updatedContacts++
      }
    } else {
      // Новый контакт
      newContacts[address] = contactData
      contactsChanged = true
      results.importedContacts++
    }
  }

  if (contactsChanged) {
    updateContacts(newContacts)
  }

  return results
}
