import assert from "node:assert/strict"
import test from "node:test"
import { AccountIdentity, getLastOpenedAccountAction } from "./LastOpenedAccountManager.logic"

const accountA: AccountIdentity = {
  id: "1",
  publicKey: "GA",
  testnet: false
}

const accountB: AccountIdentity = {
  id: "2",
  publicKey: "GB",
  testnet: true
}

const accounts = [accountA, accountB]

test("restores a valid saved account at startup", () => {
  assert.deepEqual(
    getLastOpenedAccountAction({
      accounts,
      lastOpenedAccount: accountB,
      pathname: "/",
      startup: true
    }),
    { accountID: accountB.id, type: "restore" }
  )
})

test("clears a stale saved account at startup", () => {
  assert.deepEqual(
    getLastOpenedAccountAction({
      accounts,
      lastOpenedAccount: { id: accountA.id, publicKey: "GC", testnet: accountA.testnet },
      pathname: "/",
      startup: true
    }),
    { type: "clear" }
  )
})

test("saves the account for an account subroute", () => {
  assert.deepEqual(
    getLastOpenedAccountAction({
      accounts,
      lastOpenedAccount: accountA,
      pathname: "/account/2/settings",
      startup: false
    }),
    { account: accountB, type: "save" }
  )
})

test("clears the saved account when returning to the account list", () => {
  assert.deepEqual(
    getLastOpenedAccountAction({
      accounts,
      lastOpenedAccount: accountA,
      pathname: "/",
      startup: false
    }),
    { type: "clear" }
  )
})

test("does not change the saved account for unrelated routes", () => {
  for (const pathname of ["/account/create/mainnet", "/settings"]) {
    assert.equal(
      getLastOpenedAccountAction({ accounts, lastOpenedAccount: accountA, pathname, startup: false }),
      undefined
    )
  }
})
