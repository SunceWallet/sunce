import { Operation } from "@stellar/stellar-sdk"
import type { Account } from "~App/contexts/accounts"

export function getAccountMergeDestinations(source: Account, accounts: Account[]) {
  return accounts.filter(account => account.testnet === source.testnet && account.accountID !== source.accountID)
}

export function buildAccountMergeOperation(source: Account, destination: Account) {
  return Operation.accountMerge({ source: source.accountID, destination: destination.accountID })
}
