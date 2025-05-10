import AccountSettings from "./locales/sr-Latn/account-settings.json"
import Account from "./locales/sr-Latn/account.json"
import App from "./locales/sr-Latn/app.json"
import AppSettings from "./locales/sr-Latn/app-settings.json"
import CreateAccount from "./locales/sr-Latn/create-account.json"
import Generic from "./locales/sr-Latn/generic.json"
import Operations from "./locales/sr-Latn/operations.json"
import Payment from "./locales/sr-Latn/payment.json"
import Trading from "./locales/sr-Latn/trading.json"
import TransactionRequest from "./locales/sr-Latn/transaction-request.json"
import TransferService from "./locales/sr-Latn/transfer-service.json"

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
