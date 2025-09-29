import { Account } from "~App/contexts/accounts"
import { SavedAddresses } from "~App/contexts/savedAddresses"
// @ts-ignore
import { Platform } from "~shared/types/platform"
import getKeyStore from "~Platform/key-store"

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
  encryptedPrivateKey?: string
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
      let encryptedPrivateKey: string | undefined = undefined

      if (publicData.password) {
        // Если аккаунт защищен паролем, получаем зашифрованные данные
        try {
          // Пытаемся получить приватный ключ без пароля (это не сработает)
          await keyStore.getPrivateKeyData(account.id, "")
        } catch (error) {
          // Если не получилось, значит нужен пароль - сохраняем зашифрованные данные
          // Получаем сырые данные из localStorage для зашифрованного приватного ключа
          const rawKeys = localStorage.getItem("sunce:keys")
          if (rawKeys) {
            const keysData = JSON.parse(rawKeys)
            const keyData = keysData[account.id]
            if (keyData && keyData.private) {
              // Конвертируем в base64 для удобства
              encryptedPrivateKey = btoa(keyData.private)
            }
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
        publicKey: account.publicKey,
        privateKey,
        encryptedPrivateKey,
        testnet: account.testnet,
        cosignerOf: account.cosignerOf,
        tokenPreferences: convertedTokenPreferences
      })
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
