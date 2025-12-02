import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Asset, Horizon, Transaction } from "@stellar/stellar-sdk"
import { Account } from "~App/contexts/accounts"
import { trackError } from "~App/contexts/notifications"
import { useLiveAccountData, useLiveAccountOffers } from "~Generic/hooks/stellar-subscriptions"
import { useDialogActions, useRouter } from "~Generic/hooks/userinterface"
import { AccountData } from "~Generic/lib/account"
import { getAssetsFromBalances, parseAssetID } from "~Generic/lib/stellar"
import DialogBody from "~Layout/components/DialogBody"
import TestnetBadge from "~Generic/components/TestnetBadge"
import { Box } from "~Layout/components/Box"
import ScrollableBalances from "~Generic/components/ScrollableBalances"
import MainTitle from "~Generic/components/MainTitle"
import TransactionSender from "~Transaction/components/TransactionSender"
import PaymentForm from "./PaymentForm"
import { MultisigTransactionResponse } from "~Generic/lib/multisig-service"

interface Props {
  account: Account
  accountData: AccountData
  assetId?: string
  horizon: Horizon.Server
  onClose: () => void
  openOrdersCount: number
  preselectedParams?: any
  sendTransaction: (transaction: Transaction, signatureRequest?: MultisigTransactionResponse) => Promise<any>
}

function PaymentDialog(props: Props) {
  const { sendTransaction } = props
  const dialogActionsRef = useDialogActions()
  const { t } = useTranslation()
  const [txCreationPending, setTxCreationPending] = React.useState(false)

  const preselectedParams = useMemo(
    () => props.preselectedParams || (props.assetId ? { asset: parseAssetID(props.assetId) } : undefined),
    [props.assetId, props.preselectedParams]
  )

  const handleSubmit = React.useCallback(
    async (
      createTx: (
        horizon: Horizon.Server,
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

  const trustedAssets = React.useMemo(
    () => getAssetsFromBalances(props.accountData.balances) || [Asset.native()],
    [props.accountData.balances]
  )

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
        preselectedParams={preselectedParams}
        canChangePreselectedParams={true}
        testnet={props.account.testnet}
        trustedAssets={trustedAssets}
        txCreationPending={txCreationPending}
      />
    </DialogBody>
  )
}

function ConnectedPaymentDialog(
  props: Pick<Props, "account" | "assetId" | "onClose" | "preselectedParams"> & { onSubmissionCompleted?: () => void }
) {
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
          preselectedParams={props.preselectedParams}
        />
      )}
    </TransactionSender>
  )
}

export default ConnectedPaymentDialog
