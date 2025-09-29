import { Account } from "~App/contexts/accounts"
import { SavedAddresses } from "~App/contexts/savedAddresses"
// @ts-ignore
import { Platform } from "~shared/types/platform"
import getKeyStore from "~Platform/key-store"
import { Keypair } from "@stellar/stellar-sdk"

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
 * Converts token format from ISSUER:CODE to CODE-ISSUER
 */
function convertTokenFormat(tokenKey: string): string {
  if (tokenKey === "XLM") {
    return "XLM"
  }
  const [issuer, code] = tokenKey.split(":")
  return `${code}-${issuer}`
}

/**
 * Creates user export data
 */
export async function createExportData(
  accounts: Account[],
  savedAddresses: SavedAddresses,
  tokenPreferences: Platform.AccountAssetSettingsMap
): Promise<ExportData> {
  const exportedAccounts: ExportedAccount[] = []
  const keyStore = await getKeyStore()

  // Export account data
  for (const account of accounts) {
    try {
      // Get account public data
      const publicData = await keyStore.getPublicKeyData(account.id)
      
      let privateKey: string | null = null
      let encryptedPrivateKey: { data: string; nonce: string; iterations: number } | undefined = undefined

      if (publicData.password) {
        // If account is password protected, get encrypted data
        try {
          // Try to get private key without password (this will fail)
          await keyStore.getPrivateKeyData(account.id, "")
        } catch (error) {
          // If it failed, password is needed - save encrypted data
          try {
            // Use more reliable method to get encrypted data
            const rawKeys = await getEncryptedKeysFromStorage()
            const keyData = rawKeys[account.id]
            if (keyData && keyData.private) {
              // Create object with encrypted data and metadata
              encryptedPrivateKey = {
                data: btoa(keyData.private), // Convert to base64 for convenience
                nonce: keyData.metadata?.nonce || "default-nonce",
                iterations: keyData.metadata?.iterations || 250000
              }
            } else {
              console.warn(`Failed to find encrypted data for account ${account.name}`)
            }
          } catch (storageError) {
            console.warn(`Failed to get encrypted data for account ${account.name}:`, storageError)
          }
        }
      } else {
        // If no password, get private key directly
        try {
          privateKey = await keyStore.getPrivateKeyData(account.id, "").then(data => data.privateKey)
        } catch (error) {
            console.warn(`Failed to get private key for account ${account.name}:`, error)
        }
      }

      // Get token settings for this account
      const accountTokenPreferences = tokenPreferences[account.accountID] || {}
      const convertedTokenPreferences: Platform.AssetSettingsMap = {}
      
      for (const [tokenKey, settings] of Object.entries(accountTokenPreferences)) {
        const convertedKey = convertTokenFormat(tokenKey)
        convertedTokenPreferences[convertedKey] = settings
      }

      exportedAccounts.push({
        name: account.name,
        publicKey: account.accountID, // Use accountID instead of publicKey for correct cosigner support
        privateKey,
        encryptedPrivateKey,
        testnet: account.testnet,
        cosignerOf: account.cosignerOf,
        tokenPreferences: convertedTokenPreferences
      })

      // Log information about exported key type
      if (encryptedPrivateKey) {
        console.log(`Exported encrypted key for account: ${account.name}`)
      } else if (privateKey) {
        console.log(`Exported regular key for account: ${account.name}`)
      } else {
        console.warn(`Failed to export key for account: ${account.name}`)
      }
    } catch (error) {
      console.warn(`Failed to export data for account ${account.name}:`, error)
      // Continue with basic data
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
 * Downloads JSON file with export data
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
 * Reverse conversion of token format from CODE-ISSUER to ISSUER:CODE
 */
function parseTokenFormat(tokenKey: string): string {
  if (tokenKey === "XLM") {
    return "XLM"
  }
  const [code, issuer] = tokenKey.split("-")
  return `${issuer}:${code}`
}

/**
 * Gets encrypted data from storage
 * Works in different environments (web, Electron, Cordova)
 */
async function getEncryptedKeysFromStorage(): Promise<any> {
  // In web environment use localStorage
  if (typeof localStorage !== 'undefined') {
    const rawKeys = localStorage.getItem("sunce:keys")
    return rawKeys ? JSON.parse(rawKeys) : {}
  }
  
  // In other environments specific logic can be added
  // For example, through IPC for Electron or Cordova
  console.warn("localStorage unavailable, encrypted keys cannot be exported")
  return {}
}

/**
 * Generates next available ID for account
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
 * Directly saves account to localStorage, bypassing standard procedures
 */
async function saveAccountDirectly(
  accountData: ExportedAccount,
  keyStore: any
): Promise<string> {
  const accountId = getNextAccountId()
  
  // Prepare public data
  const publicData: PublicKeyData = {
    name: accountData.name,
    publicKey: accountData.cosignerOf || accountData.publicKey, // For cosigner use cosignerOf, otherwise publicKey
    password: Boolean(accountData.encryptedPrivateKey),
    testnet: accountData.testnet,
    cosignerOf: accountData.cosignerOf
  }

  if (accountData.privateKey) {
    // Regular private key - use standard API
    const privateData: PrivateKeyData = { privateKey: accountData.privateKey }
    await keyStore.saveKey(accountId, "", privateData, publicData)
  } else if (accountData.encryptedPrivateKey) {
    // Encrypted private key - save directly to localStorage
    try {
      const rawKeys = localStorage.getItem("sunce:keys")
      const keysData = rawKeys ? JSON.parse(rawKeys) : {}
      
      // Restore data structure with metadata
      keysData[accountId] = {
        metadata: {
          nonce: accountData.encryptedPrivateKey.nonce,
          iterations: accountData.encryptedPrivateKey.iterations
        },
        public: publicData,
        private: atob(accountData.encryptedPrivateKey.data) // Decode from base64
      }
      
      // Save back to localStorage
      localStorage.setItem("sunce:keys", JSON.stringify(keysData))
      
      console.log(`Restored encrypted account: ${accountData.name}`)
    } catch (error) {
      throw new Error(`Failed to restore encrypted account ${accountData.name}: ${error}`)
    }
  } else {
    throw new Error("Private key missing")
  }
  
  return accountId
}

/**
 * Imports user data
 */
export async function importWalletData(
  importData: ExportData,
  existingAccounts: Account[],
  existingContacts: SavedAddresses,
  existingTokenPreferences: Platform.AccountAssetSettingsMap,
  createAccount: (accountData: any) => Promise<Account>,
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

  // Get key store
  const keyStore = await getKeyStore()

  // Create map of existing accounts by accountID (publicKey or cosignerOf)
  const existingAccountsMap = new Map<string, Account>()
  existingAccounts.forEach(account => {
    existingAccountsMap.set(account.accountID, account)
  })

  // Import accounts
  for (const accountData of importData.accounts) {
    try {
      // Look for existing account by accountID (which is now in publicKey)
      const existingAccount = existingAccountsMap.get(accountData.publicKey)
      
      if (existingAccount) {
        // Account already exists - do NOT touch name, only add/update token settings
        try {
          // Convert token settings back to ISSUER:CODE format
          const convertedTokenPreferences: Platform.AssetSettingsMap = {}
          for (const [tokenKey, settings] of Object.entries(accountData.tokenPreferences)) {
            const originalKey = parseTokenFormat(tokenKey)
            convertedTokenPreferences[originalKey] = settings
          }
          
          // Add/update token settings (replace matches)
          // Get existing settings and merge with new ones
          const existingPreferences = existingTokenPreferences[existingAccount.accountID] || {}
          const mergedPreferences = { ...existingPreferences, ...convertedTokenPreferences }
          
          // Update each token separately
          Object.entries(mergedPreferences).forEach(([tokenKey, settings]) => {
            updateTokenPreferences(existingAccount.accountID, tokenKey, settings)
          })
          results.updatedAccounts++
        } catch (error) {
          results.errors.push(`Failed to update token settings for account ${existingAccount.name}: ${error}`)
        }
      } else {
        // New account - create completely
        if (!accountData.privateKey && !accountData.encryptedPrivateKey) {
          results.errors.push(`Failed to create account ${accountData.name}: private key missing`)
          continue
        }

        try {
          // Create account through standard API, like regular creation
          let keypair: Keypair
          
          if (accountData.privateKey) {
            // Regular private key
            keypair = Keypair.fromSecret(accountData.privateKey)
          } else if (accountData.encryptedPrivateKey) {
            // Encrypted private key - use direct saving
            await saveAccountDirectly(accountData, keyStore)
            
            // Add token settings for new account
            const convertedTokenPreferences: Platform.AssetSettingsMap = {}
            for (const [tokenKey, settings] of Object.entries(accountData.tokenPreferences)) {
              const originalKey = parseTokenFormat(tokenKey)
              convertedTokenPreferences[originalKey] = settings
            }

            // Update token settings for new account
            const accountID = accountData.cosignerOf || accountData.publicKey
            Object.entries(convertedTokenPreferences).forEach(([tokenKey, settings]) => {
              updateTokenPreferences(accountID, tokenKey, settings)
            })

            results.importedAccounts++
            continue
          } else {
            results.errors.push(`Failed to create account ${accountData.name}: private key missing`)
            continue
          }

          // Create account through standard API
          const newAccount = await createAccount({
            name: accountData.name,
            keypair,
            password: null, // Import without password
            testnet: accountData.testnet,
            cosignerOf: accountData.cosignerOf
          })

          // Add token settings for new account
          const convertedTokenPreferences: Platform.AssetSettingsMap = {}
          for (const [tokenKey, settings] of Object.entries(accountData.tokenPreferences)) {
            const originalKey = parseTokenFormat(tokenKey)
            convertedTokenPreferences[originalKey] = settings
          }

          // Update token settings for new account
          Object.entries(convertedTokenPreferences).forEach(([tokenKey, settings]) => {
            updateTokenPreferences(newAccount.accountID, tokenKey, settings)
          })

          results.importedAccounts++
        } catch (error) {
          results.errors.push(`Failed to create account ${accountData.name}: ${error}`)
        }
      }
    } catch (error) {
      results.errors.push(`Error processing account ${accountData.name}: ${error}`)
    }
  }

  // Import contacts
  const newContacts = { ...existingContacts }
  let contactsChanged = false

  for (const [address, contactData] of Object.entries(importData.contacts)) {
    if (newContacts[address]) {
      // Contact exists - update label
      if (newContacts[address].label !== contactData.label) {
        newContacts[address] = contactData
        contactsChanged = true
        results.updatedContacts++
      }
    } else {
      // New contact
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
