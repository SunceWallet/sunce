import React from "react"
import { useTranslation } from "react-i18next"
import { Asset, Server, Transaction } from "stellar-sdk"
import { Account } from "~/src/App/contexts/accounts"
import { trackError } from "~/src/App/contexts/notifications"
import { useLiveAccountData, useLiveAccountOffers } from "~/src/Generic/hooks/stellar-subscriptions"
import { useDialogActions } from "~/src/Generic/hooks/userinterface"
import { AccountData } from "~/src/Generic/lib/account"
import { getAssetsFromBalances } from "~/src/Generic/lib/stellar"
import DialogBody from "~/src/Layout/components/DialogBody"
import TestnetBadge from "~/src/Generic/components/TestnetBadge"
import { Box } from "~/src/Layout/components/Box"
import ScrollableBalances from "~/src/Generic/components/ScrollableBalances"
import MainTitle from "~/src/Generic/components/MainTitle"
import TransactionSender from "~/src/Transaction/components/TransactionSender"
import PaymentForm from "./PaymentForm"
import { MultisigTransactionResponse } from "~/src/Generic/lib/multisig-service"

interface Props {
  account: Account
  accountData: AccountData
  horizon: Server
  onClose: () => void
  openOrdersCount: number
  sendTransaction: (transaction: Transaction, signatureRequest?: MultisigTransactionResponse) => Promise<any>
}

function PaymentDialog(props: Props) {
  const { sendTransaction } = props
  const dialogActionsRef = useDialogActions()
  const { t } = useTranslation()
  const [txCreationPending, setTxCreationPending] = React.useState(false)

  const handleSubmit = React.useCallback(
    async (
      createTx: (
        horizon: Server,
        account: Account
      ) => Promise<{ tx: Transaction; signatureRequest?: MultisigTransactionResponse }>
    ) => {
      try {
        setTxCreationPending(true)
        const { tx, signatureRequest } = await createTx(props.horizon, props.account)
        setTxCreationPending(false)
        await sendTransaction(tx, signatureRequest)
      } catch (error) {
        trackError(error)
      } finally {
        setTxCreationPending(false)
      }
    },
    [props.account, props.horizon, sendTransaction]
  )

  const trustedAssets = React.useMemo(() => getAssetsFromBalances(props.accountData.balances) || [Asset.native()], [
    props.accountData.balances
  ])

  return (
    <DialogBody
      top={
        <>
          <MainTitle
            title={
              <span>
                {t("payment.title.send")}
                {props.account.testnet ? <TestnetBadge style={{ marginLeft: 8 }} /> : null}
              </span>
            }
            onBack={props.onClose}
          />
          <ScrollableBalances account={props.account} compact />
        </>
      }
      actions={dialogActionsRef}
    >
      <Box margin="24px 0 0">{null}</Box>
      <PaymentForm
        accountData={props.accountData}
        actionsRef={dialogActionsRef}
        onSubmit={handleSubmit}
        openOrdersCount={props.openOrdersCount}
        testnet={props.account.testnet}
        trustedAssets={trustedAssets}
        txCreationPending={txCreationPending}
      />
    </DialogBody>
  )
}

function ConnectedPaymentDialog(props: Pick<Props, "account" | "onClose"> & { onSubmissionCompleted?: () => void }) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet)
  const { offers: openOrders } = useLiveAccountOffers(props.account.accountID, props.account.testnet)

  return (
    <TransactionSender account={props.account} onSubmissionCompleted={props.onSubmissionCompleted || props.onClose}>
      {({ horizon, sendTransaction }) => (
        <PaymentDialog
          {...props}
          accountData={accountData}
          horizon={horizon}
          openOrdersCount={openOrders.length}
          sendTransaction={sendTransaction}
        />
      )}
    </TransactionSender>
  )
}

export default ConnectedPaymentDialog
