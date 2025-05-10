import AccountSettings from "./locales/sr-Cyrl/account-settings.json"
import Account from "./locales/sr-Cyrl/account.json"
import App from "./locales/sr-Cyrl/app.json"
import AppSettings from "./locales/sr-Cyrl/app-settings.json"
import CreateAccount from "./locales/sr-Cyrl/create-account.json"
import Generic from "./locales/sr-Cyrl/generic.json"
import Operations from "./locales/sr-Cyrl/operations.json"
import Payment from "./locales/sr-Cyrl/payment.json"
import Trading from "./locales/sr-Cyrl/trading.json"
import TransactionRequest from "./locales/sr-Cyrl/transaction-request.json"
import TransferService from "./locales/sr-Cyrl/transfer-service.json"

const translations = {
  "account-settings": AccountSettings,
  account: Account,
  app: App,
  "app-settings": AppSettings,
  "create-account": CreateAccount,
  generic: Generic,
  operations: Operations,
  payment: Payment,
  trading: Trading,
  "transaction-request": TransactionRequest,
  "transfer-service": TransferService
} as const

export default translations
