import React from "react"
import Async from "react-promise"
import { xdr, Asset, Memo, Networks, Operation, Horizon, TransactionBuilder } from "@stellar/stellar-sdk"
import { TransactionReviewDialogBody } from "../components/TransactionReviewDialog"
import { Account } from "~App/contexts/accounts"
import { useWebAuth } from "~Generic/hooks/stellar"

const eurt = new Asset("EURT", "GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S")
const testnetHorizon = new Horizon.Server("https://horizon-testnet.stellar.org")

const doNothing = () => undefined

const accountStub: Account = {
  accountID: "GDOOMATUOJPLIQMQ4WWXBEWR5UMKJW65CFKJJW3LV7XZYIEQHZPDQCBI",
  id: "1",
  name: "Testnet account",
  publicKey: "GDOOMATUOJPLIQMQ4WWXBEWR5UMKJW65CFKJJW3LV7XZYIEQHZPDQCBI",
  requiresPassword: false,
  testnet: true,
  getPrivateKey() {
    throw Error("Just a mock.")
  },
  signTransaction() {
    throw Error("Just a mock.")
  }
}

function buildTransaction(
  account: Horizon.HorizonApi.AccountResponse,
  operations: xdr.Operation[],
  options?: Partial<TransactionBuilder.TransactionBuilderOptions>
) {
  // TODO: fix me
  const builder = new TransactionBuilder(account, { fee: "100", ...options })

  for (const operation of operations) {
    builder.addOperation(operation)
  }

  builder.setNetworkPassphrase(Networks.TESTNET)
  builder.setTimeout(60)
  return builder.build()
}

interface SampleWebAuthProps {
  accountID: string
  children: (promise: Promise<any>) => React.ReactNode
  issuerID: string
}

function SampleWebAuth(props: SampleWebAuthProps) {
  const horizon = new Horizon.Server("https://horizon.stellar.org")
  const WebAuth = useWebAuth()

  const promise = React.useMemo(
    () =>
      (async () => {
        const account = await horizon.loadAccount(props.accountID)
        const webauthMetadata = await WebAuth.fetchWebAuthData(String(horizon.serverURL), props.issuerID)

        const transaction = await WebAuth.fetchChallenge(
          webauthMetadata!.endpointURL,
          webauthMetadata!.signingKey,
          account.id,
          Networks.PUBLIC
        )
        return transaction
      })(),
    [WebAuth, horizon, props.accountID, props.issuerID]
  )

  return <>{props.children(promise)}</>
}

export default { title: "TransactionReviewDialog" }
export const Payment = () => {
  const promise = (async () => {
    const account = await testnetHorizon.loadAccount("GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W")
    return buildTransaction(account, [
      Operation.payment({
        amount: "1.5",
        asset: Asset.native(),
        destination: "GA2CZKBI2C55WHALSTNPG54FOQCLC6Y4EIATZEIJOXWQPSEGN4CWAXFT",
        withMuxing: true
      })
    ])
  })()

  return (
    <Async
      promise={promise}
      then={transaction => (
        <TransactionReviewDialogBody
          account={accountStub}
          onClose={doNothing}
          onSubmitTransaction={doNothing}
          showSubmissionProgress={false}
          transaction={transaction}
        />
      )}
      catch={error => <>{error.message}</>}
    />
  )
}
export const PaymentWithMemo = () => {
  const promise = (async () => {
    const account = await testnetHorizon.loadAccount("GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W")
    return buildTransaction(
      account,
      [
        Operation.payment({
          amount: "20",
          asset: Asset.native(),
          destination: "GA2CZKBI2C55WHALSTNPG54FOQCLC6Y4EIATZEIJOXWQPSEGN4CWAXFT",
          withMuxing: true
        })
      ],
      { memo: Memo.text("Demo transaction") }
    )
  })()

  return (
    <Async
      promise={promise}
      then={transaction => (
        <TransactionReviewDialogBody
          account={accountStub}
          onClose={doNothing}
          onSubmitTransaction={doNothing}
          showSubmissionProgress={false}
          transaction={transaction}
        />
      )}
      catch={error => <>{error.message}</>}
    />
  )
}
export const AccountCreationInflationDestination = () => {
  const promise = (async () => {
    const account = await testnetHorizon.loadAccount("GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W")
    return buildTransaction(account, [
      Operation.createAccount({
        startingBalance: "1.0",
        destination: "GA2CZKBI2C55WHALSTNPG54FOQCLC6Y4EIATZEIJOXWQPSEGN4CWAXFT",
        withMuxing: true
      }),
      Operation.setOptions({
        inflationDest: "GCCD6AJOYZCUAQLX32ZJF2MKFFAUJ53PVCFQI3RHWKL3V47QYE2BNAUT",
        withMuxing: true
      })
    ])
  })()

  return (
    <Async
      promise={promise}
      then={transaction => (
        <TransactionReviewDialogBody
          account={accountStub}
          onClose={doNothing}
          onSubmitTransaction={doNothing}
          showSubmissionProgress={false}
          transaction={transaction}
        />
      )}
      catch={error => <>{error.message}</>}
    />
  )
}
export const CreateTrustline = () => {
  const promise = (async () => {
    const account = await testnetHorizon.loadAccount("GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W")
    return buildTransaction(account, [
      Operation.changeTrust({
        asset: eurt,
        withMuxing: true
      })
    ])
  })()

  return (
    <Async
      promise={promise}
      then={transaction => (
        <TransactionReviewDialogBody
          account={accountStub}
          onClose={doNothing}
          onSubmitTransaction={doNothing}
          showSubmissionProgress={false}
          transaction={transaction}
        />
      )}
      catch={error => <>{error.message}</>}
    />
  )
}
export const StellarWebAuth = () => {
  return (
    <SampleWebAuth
      accountID="GDOOMATUOJPLIQMQ4WWXBEWR5UMKJW65CFKJJW3LV7XZYIEQHZPDQCBI"
      issuerID="GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5"
    >
      {promise => (
        <Async
          promise={promise}
          then={transaction => (
            <TransactionReviewDialogBody
              account={accountStub}
              onClose={doNothing}
              onSubmitTransaction={doNothing}
              showSubmissionProgress={false}
              transaction={transaction}
            />
          )}
          catch={error => <>{error.message}</>}
        />
      )}
    </SampleWebAuth>
  )
}
export const MergeAccount = () => {
  const promise = (async () => {
    const account = await testnetHorizon.loadAccount("GBPBFWVBADSESGADWEGC7SGTHE3535FWK4BS6UW3WMHX26PHGIH5NF4W")
    return buildTransaction(account, [
      Operation.accountMerge({
        source: "GCCD6AJOYZCUAQLX32ZJF2MKFFAUJ53PVCFQI3RHWKL3V47QYE2BNAUT",
        destination: "GA2CZKBI2C55WHALSTNPG54FOQCLC6Y4EIATZEIJOXWQPSEGN4CWAXFT",
        withMuxing: true
      })
    ])
  })()

  return (
    <Async
      promise={promise}
      then={transaction => (
        <TransactionReviewDialogBody
          account={accountStub}
          onClose={doNothing}
          onSubmitTransaction={doNothing}
          showSubmissionProgress={false}
          transaction={transaction}
        />
      )}
      catch={error => <>{error.message}</>}
    />
  )
}
