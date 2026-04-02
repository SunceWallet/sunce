declare interface ReceivePaymentSettings {
  advancedMode: boolean
  amount: string
  assetId?: string
  description: string
}

declare interface PublicKeyData {
  cosignerOf?: string
  name: string
  password: boolean
  publicKey: string
  receivePayment?: ReceivePaymentSettings
  testnet: boolean
}

declare interface PrivateKeyData {
  privateKey: string
}
