import AccountSettings from "./locales/de/account-settings.json"
import Account from "./locales/de/account.json"
import App from "./locales/de/app.json"
import AppSettings from "./locales/de/app-settings.json"
import CreateAccount from "./locales/de/create-account.json"
import Generic from "./locales/de/generic.json"
import Operations from "./locales/de/operations.json"
import Payment from "./locales/de/payment.json"
import Trading from "./locales/de/trading.json"
import TransactionRequest from "./locales/de/transaction-request.json"
import TransferService from "./locales/de/transfer-service.json"

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
