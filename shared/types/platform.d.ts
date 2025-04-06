interface TrustedService {
  domain: string
  signingKey?: string
}

declare namespace Platform {
  export type VisibilityMode = undefined | "favorite" | "hidden"
  export interface AssetSettings {
    visibility: VisibilityMode
    order: number
  }
  export type AssetSettingsMap = Record<string, AssetSettings>
  export type AccountAssetSettingsMap = Record<string, AssetSettingsMap>
  export interface SettingsData {
    agreedToTermsAt?: string
    biometricLock: boolean
    hideMemos: boolean
    multisignature: boolean
    testnet: boolean
    trustedServices: TrustedService[]
    showDust: boolean
    showClaimableBalanceTxs: boolean
    accountAssetSettings: AccountAssetSettingsMap
  }
}

declare namespace NodeJS {
  interface Process {
    browser?: boolean
  }
}

interface BiometricAvailability {
  available: boolean
  enrolled: boolean
}
