import React from "react"
import { useTranslation } from "react-i18next"
import { Asset, Operation, Server, Transaction } from "stellar-sdk"
import Dialog from "@material-ui/core/Dialog"
import ClearIcon from "@material-ui/icons/Clear"
import SwapHorizIcon from "@material-ui/icons/SwapHoriz"
import { Account } from "~/src/App/contexts/accounts"
import { trackError } from "~/src/App/contexts/notifications"
import * as routes from "~/src/App/routes"
import { CompactDialogTransition } from "~/src/App/theme"
import { useLiveAccountData } from "~/src/Generic/hooks/stellar-subscriptions"
import { useRouter } from "~/src/Generic/hooks/userinterface"
import { createTransaction } from "~/src/Generic/lib/transaction"
import { stringifyAsset } from "~/src/Generic/lib/stellar"
import { DialogActionsBox, ActionButton } from "~/src/Generic/components/DialogActions"
import TransactionSender, { SendTransaction } from "~/src/Transaction/components/TransactionSender"
import RemoveTrustlineDialog from "./RemoveTrustline"

const dialogActionsBoxStyle: React.CSSProperties = {
  marginTop: 8
}

interface Props {
  account: Account
  asset: Asset
  horizon: Server
  sendTransaction: SendTransaction
}

function AssetDetailsActions(props: Props) {
  const { account, asset } = props
  const [removalDialogOpen, setRemovalDialogOpen] = React.useState(false)
  const [txCreationPending, setTxCreationPending] = React.useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const accountData = useLiveAccountData(account.accountID, account.testnet)

  const balance = accountData.balances.find(
    bal => bal.asset_type !== "native" && bal.asset_issuer === asset.issuer && bal.asset_code === asset.code
  )

  const createAddAssetTransaction = async (options: { limit?: string } = {}) => {
    const operations = [Operation.changeTrust({ asset, limit: options.limit, withMuxing: true })]
    return createTransaction(operations, {
      accountData,
      horizon: props.horizon,
      walletAccount: props.account
    })
  }

  const navigateBackDelayed = React.useCallback(() => {
    setTimeout(() => router.history.push(routes.account(props.account.id)), 1300)
  }, [props.account, router.history])

  const sendTransaction = async (createTransactionToSend: () => Promise<Transaction>) => {
    try {
      setTxCreationPending(true)
      const transaction = await createTransactionToSend()
      setTxCreationPending(false)
      await props.sendTransaction(transaction)
      closeRemovalDialog()
      navigateBackDelayed()
    } catch (error) {
      setTxCreationPending(false)
      trackError(error)
    }
  }

  const addThisAsset = () => sendTransaction(() => createAddAssetTransaction())
  const closeRemovalDialog = React.useCallback(() => setRemovalDialogOpen(false), [])
  const removeThisAsset = React.useCallback(() => setRemovalDialogOpen(true), [])

  const tradeThisAsset = React.useCallback(
    () => router.history.push(routes.tradeAsset(props.account.id, undefined, stringifyAsset(asset))),
    [asset, props.account.id, router.history]
  )

  return (
    <>
      <DialogActionsBox desktopStyle={dialogActionsBoxStyle} smallDialog>
        {balance ? (
          <>
            <ActionButton icon={<ClearIcon />} onClick={removeThisAsset} type="secondary">
              {t("account.add-asset.action.remove")}
            </ActionButton>
            <ActionButton icon={<SwapHorizIcon />} onClick={tradeThisAsset} type="primary">
              {t("account.add-asset.action.trade")}
            </ActionButton>
          </>
        ) : (
          <ActionButton loading={txCreationPending} onClick={addThisAsset} type="primary">
            {t("account.add-asset.action.add-asset")}
          </ActionButton>
        )}
      </DialogActionsBox>
      <Dialog open={removalDialogOpen} onClose={closeRemovalDialog} TransitionComponent={CompactDialogTransition}>
        <RemoveTrustlineDialog
          account={props.account}
          accountData={accountData}
          asset={asset}
          onClose={closeRemovalDialog}
          onRemoved={navigateBackDelayed}
        />
      </Dialog>
    </>
  )
}

function ConnectedAssetDetailsActions(props: Omit<Props, "horizon" | "sendTransaction">) {
  return (
    <TransactionSender account={props.account}>
      {({ horizon, sendTransaction }) => (
        <AssetDetailsActions {...props} horizon={horizon} sendTransaction={sendTransaction} />
      )}
    </TransactionSender>
  )
}

export default React.memo(ConnectedAssetDetailsActions)
