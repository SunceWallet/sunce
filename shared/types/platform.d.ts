interface TrustedService {
  domain: string
  signingKey?: string
}

declare namespace Platform {
  export type VisibilityMode = "default" | "favorite" | "hidden"
  export type AssetVisibilityModes = Record<string, VisibilityMode>
  export type AccountAssetVisibilityModes = Record<string, AssetVisibilityModes>
  export interface SettingsData {
    agreedToTermsAt?: string
    biometricLock: boolean
    hideMemos: boolean
    multisignature: boolean
    testnet: boolean
    trustedServices: TrustedService[]
    showDust: boolean
    showClaimableBalanceTxs: boolean
    accountAssetVisibilityModes: AccountAssetVisibilityModes
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
