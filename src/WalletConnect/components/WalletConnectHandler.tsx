import Box from "@material-ui/core/Box"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import CloseIcon from "@material-ui/icons/Close"
import SendIcon from "@material-ui/icons/Send"
import React from "react"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next"
import { Transaction } from "@stellar/stellar-sdk"
import AccountSelectionList from "~Account/components/AccountSelectionList"
import { Account, AccountsContext } from "~App/contexts/accounts"
import { WalletConnectContext, WalletConnectRequest } from "~App/contexts/walletConnect"
import { getErrorTranslation, isWrongPasswordError } from "~Generic/lib/errors"
import { signTransaction } from "~Generic/lib/transaction"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import MainTitle from "~Generic/components/MainTitle"
import TransactionSender from "~Transaction/components/TransactionSender"
import TransactionReviewDialog from "~TransactionReview/components/TransactionReviewDialog"
import TransactionSummary from "~TransactionReview/components/TransactionSummary"
import DialogBody from "~Layout/components/DialogBody"
import {
  getAccountsForChain,
  getChainFromAccount,
  getRequestedPublicKey,
  parseStellarTransactionFromRequest,
  stellarChains,
  stellarMethods
} from "~WalletConnect/lib/stellar"

const useProposalDialogStyles = makeStyles({
  bulletList: {
    margin: "8px 0 0",
    paddingLeft: 24
  },
  bulletListItem: {
    marginBottom: 4,
    "&:last-child": {
      marginBottom: 0
    }
  },
  description: {
    margin: "8px 0 0"
  },
  sectionHeader: {
    marginTop: 24
  }
})

function getDappMetadata(proposal: any) {
  return proposal?.params?.proposer?.metadata || {}
}

function getRequiredChains(proposal: any) {
  return proposal?.params?.requiredNamespaces?.stellar?.chains || []
}

function getRequestedChains(proposal: any) {
  const required = proposal?.params?.requiredNamespaces?.stellar?.chains || []
  const optional = proposal?.params?.optionalNamespaces?.stellar?.chains || []
  return Array.from(new Set([...required, ...optional]))
}

function getRequiredMethods(proposal: any) {
  const required = proposal?.params?.requiredNamespaces?.stellar?.methods || []
  const optional = proposal?.params?.optionalNamespaces?.stellar?.methods || []
  return Array.from(new Set([...required, ...optional]))
}

function getNetworkLabel(chain: string, t: TFunction) {
  if (chain === stellarChains.pubnet) return t("wallet-connect.network.pubnet")
  if (chain === stellarChains.testnet) return t("wallet-connect.network.testnet")
  if (!chain) return t("wallet-connect.network.stellar")

  return t("wallet-connect.network.unknown", { network: chain })
}

function getPermissionLabel(method: string, t: TFunction) {
  if (method === "stellar_signXDR") return t("wallet-connect.permission.sign-xdr")
  if (method === "stellar_signAndSubmitXDR") return t("wallet-connect.permission.sign-and-submit-xdr")

  return t("wallet-connect.permission.unknown", { method })
}

function WalletConnectProposalDialog() {
  const walletConnect = React.useContext(WalletConnectContext)
  const { accounts } = React.useContext(AccountsContext)
  const classes = useProposalDialogStyles()
  const proposal = walletConnect.pendingProposal
  const preselectedAccount = walletConnect.preselectedProposalAccount
  const { t } = useTranslation()
  const [pending, setPending] = React.useState(false)
  const [selectedAccount, setSelectedAccount] = React.useState<Account | null>(null)

  React.useEffect(() => {
    setSelectedAccount(null)
  }, [proposal?.id])

  if (!proposal) return null

  const metadata = getDappMetadata(proposal)
  const requiredChains = getRequiredChains(proposal)
  const chains = getRequestedChains(proposal)
  const methods = getRequiredMethods(proposal)
  const selectableAccounts =
    chains.length === 0
      ? accounts
      : accounts.filter(someAccount => chains.indexOf(getChainFromAccount(someAccount)) > -1)
  const defaultAccount =
    preselectedAccount && selectableAccounts.some(someAccount => someAccount.id === preselectedAccount.id)
      ? preselectedAccount
      : null
  const selectedAccountIsSelectable = selectedAccount
    ? selectableAccounts.some(someAccount => someAccount.id === selectedAccount.id)
    : false
  const account = (selectedAccountIsSelectable ? selectedAccount : null) || defaultAccount || selectableAccounts[0] || null
  const selectedAccountChains = account ? [getChainFromAccount(account)] : []
  const networkLabels = (chains.length ? chains : [""]).map(chain => getNetworkLabel(chain as string, t))
  const permissionLabels = [
    t("wallet-connect.permission.account-address"),
    t("wallet-connect.permission.account-balances"),
    ...(methods.length ? methods : stellarMethods).map(method => getPermissionLabel(method as string, t))
  ]
  const selectedAccountSupportsRequiredChains = requiredChains.every(
    (chain: string) => selectedAccountChains.indexOf(chain) > -1
  )
  const canApprove = Boolean(account) && selectedAccountSupportsRequiredChains

  const approve = async () => {
    if (!account) return
    try {
      setPending(true)
      await walletConnect.approveProposal([account])
    } finally {
      setPending(false)
    }
  }

  const reject = async () => {
    try {
      setPending(true)
      await walletConnect.rejectProposal()
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open fullScreen>
      <DialogBody
        top={
          <MainTitle
            hideBackButton
            onBack={reject}
            title={t("wallet-connect.proposal.title")}
          />
        }
      >
        <DialogContent style={{ padding: 0 }}>
          <Box padding="12px 0">
            <Typography variant="h6">
              {metadata.name || t("wallet-connect.proposal.unknown-dapp")}
            </Typography>
            {metadata.url ? <Typography color="textSecondary">{metadata.url}</Typography> : null}
            <Typography className={classes.description} color="textSecondary" component="p">
              {t("wallet-connect.proposal.description")}
            </Typography>
            <Typography className={classes.sectionHeader} variant="h6">
              {t("wallet-connect.proposal.networks")}
            </Typography>
            <ul className={classes.bulletList}>
              {networkLabels.map(label => (
                <Typography className={classes.bulletListItem} component="li" key={label}>
                  {label}
                </Typography>
              ))}
            </ul>
            <Typography className={classes.sectionHeader} variant="h6">
              {t("wallet-connect.proposal.permissions")}
            </Typography>
            <ul className={classes.bulletList}>
              {permissionLabels.map(label => (
                <Typography className={classes.bulletListItem} component="li" key={label}>
                  {label}
                </Typography>
              ))}
            </ul>
            <Box paddingTop={3}>
              <Typography variant="h6">{t("wallet-connect.proposal.account")}</Typography>
              <AccountSelectionList
                accounts={selectableAccounts}
                selectedAccount={account || undefined}
                onChange={setSelectedAccount}
                testnet={account?.testnet || false}
              />
            </Box>
            {!account ? (
              <Typography color="error" style={{ paddingTop: 24 }}>
                {t("wallet-connect.proposal.no-account")}
              </Typography>
            ) : null}
            {account && !selectedAccountSupportsRequiredChains ? (
              <Typography color="error" style={{ paddingTop: 24 }}>
                {t("wallet-connect.proposal.required-networks-error")}
              </Typography>
            ) : null}
          </Box>
          <DialogActionsBox>
            <ActionButton icon={<CloseIcon style={{ fontSize: 16 }} />} loading={pending} onClick={reject}>
              {t("wallet-connect.action.reject")}
            </ActionButton>
            <ActionButton
              disabled={!canApprove}
              icon={<SendIcon style={{ fontSize: 16 }} />}
              loading={pending}
              onClick={approve}
              type="primary"
            >
              {t("wallet-connect.action.approve")}
            </ActionButton>
          </DialogActionsBox>
        </DialogContent>
      </DialogBody>
    </Dialog>
  )
}

function getRequestTransaction(request: WalletConnectRequest) {
  return parseStellarTransactionFromRequest(
    request.params.request.params || [],
    request.params.chainId
  )
}

function getEligibleAccounts(accounts: Account[], request: WalletConnectRequest) {
  const chainAccounts = getAccountsForChain(accounts, request.params.chainId)
  const requestedPublicKey = getRequestedPublicKey(request.params.request.params || [])
  return requestedPublicKey
    ? chainAccounts.filter(account => account.publicKey === requestedPublicKey)
    : chainAccounts
}

function getSessionApprovedAccounts(accounts: Account[], request: WalletConnectRequest, sessions: any[]) {
  const session = sessions.find(item => item.topic === request.topic)
  const approvedAccountIds = session?.namespaces?.stellar?.accounts || []
  const approvedPublicKeys = approvedAccountIds.map((accountId: string) => accountId.split(":")[2]).filter(Boolean)
  const chainAccounts = getEligibleAccounts(accounts, request)

  return approvedPublicKeys.length > 0
    ? chainAccounts.filter(account => approvedPublicKeys.indexOf(account.publicKey) > -1)
    : chainAccounts
}

function RequestIntro(props: {
  accounts: Account[]
  dappName: string
  method: string
  selectedAccount: Account | null
  transaction: Transaction
  onAccountChange: (account: Account) => void
  onClose: () => void
  onConfirm: () => void
}) {
  const { t } = useTranslation()

  return (
    <Dialog open fullScreen>
      <DialogBody top={<MainTitle hideBackButton onBack={props.onClose} title={t("wallet-connect.request.title")} />}>
        <Box padding="12px 0">
          <Typography>
            {t("wallet-connect.request.from")} <b>{props.dappName}</b>
          </Typography>
          <Typography color="textSecondary">{getPermissionLabel(props.method, t)}</Typography>
          <Box paddingTop={3}>
            <TransactionSummary
              account={null}
              fullWidth
              showSource
              canSubmit={false}
              transaction={props.transaction}
              testnet={props.selectedAccount?.testnet || false}
            />
          </Box>
          <Box paddingTop={3}>
            <Typography variant="h6">{t("wallet-connect.request.account")}</Typography>
            <AccountSelectionList
              accounts={props.accounts}
              selectedAccount={props.selectedAccount || undefined}
              onChange={props.onAccountChange}
              testnet={props.selectedAccount?.testnet || false}
            />
          </Box>
          <DialogActionsBox>
            <ActionButton icon={<CloseIcon style={{ fontSize: 16 }} />} onClick={props.onClose}>
              {t("wallet-connect.action.reject")}
            </ActionButton>
            <ActionButton
              disabled={!props.selectedAccount}
              icon={<SendIcon style={{ fontSize: 16 }} />}
              onClick={props.onConfirm}
              type="primary"
            >
              {t("wallet-connect.action.review")}
            </ActionButton>
          </DialogActionsBox>
        </Box>
      </DialogBody>
    </Dialog>
  )
}

function WalletConnectSignOnlyDialog(props: {
  account: Account
  request: WalletConnectRequest
  transaction: Transaction
  onClose: () => void
}) {
  const walletConnect = React.useContext(WalletConnectContext)
  const { t } = useTranslation()
  const [passwordError, setPasswordError] = React.useState<Error | null>(null)
  const [pending, setPending] = React.useState(false)

  const submit = async (transaction: Transaction, formValues: { password: string | null }) => {
    try {
      setPending(true)
      const signedTransaction = await signTransaction(transaction, props.account, formValues.password)
      await walletConnect.respondSuccess(props.request.topic, props.request.id, {
        signedXDR: signedTransaction.toEnvelope().toXDR("base64")
      })
    } catch (error) {
      if (isWrongPasswordError(error) && error instanceof Error) {
        setPasswordError(new Error(getErrorTranslation(error, t)))
      } else {
        await walletConnect.respondError(
          props.request.topic,
          props.request.id,
          error instanceof Error ? error.message : String(error)
        )
      }
    } finally {
      setPending(false)
    }
  }

  return (
    <TransactionReviewDialog
      open
      account={props.account}
      disabled={pending}
      passwordError={passwordError}
      showHash
      showSource={props.account.publicKey !== props.transaction.source}
      showSubmissionProgress={false}
      transaction={props.transaction}
      onClose={props.onClose}
      onSubmitTransaction={submit}
    />
  )
}

function AutoSubmitWalletConnectTransaction(props: {
  transaction: Transaction
  sendTransaction: (transaction: Transaction) => Promise<any>
  onRejected: () => void
}) {
  const { onRejected, sendTransaction, transaction } = props
  const submitted = React.useRef(false)

  React.useEffect(() => {
    if (submitted.current) return
    submitted.current = true
    sendTransaction(transaction).catch(onRejected)
  }, [onRejected, sendTransaction, transaction])

  return null
}

function WalletConnectRequestErrorDialog(props: { message: string; onClose: () => void }) {
  const { t } = useTranslation()
  return (
    <Dialog open fullScreen>
      <DialogBody top={<MainTitle hideBackButton onBack={props.onClose} title={t("wallet-connect.request.title")} />}>
        <Typography color="error">{props.message}</Typography>
        <DialogActionsBox>
          <ActionButton onClick={props.onClose}>{t("generic.dialog-actions.close.label")}</ActionButton>
        </DialogActionsBox>
      </DialogBody>
    </Dialog>
  )
}

function WalletConnectRequestDialog() {
  const walletConnect = React.useContext(WalletConnectContext)
  const { accounts } = React.useContext(AccountsContext)
  const { t } = useTranslation()
  const request = walletConnect.pendingRequest
  const [reviewStarted, setReviewStarted] = React.useState(false)
  const [selectedAccount, setSelectedAccount] = React.useState<Account | null>(null)
  const responded = React.useRef(false)

  React.useEffect(() => {
    setReviewStarted(false)
    setSelectedAccount(null)
    responded.current = false
  }, [request?.id])

  if (!request) return null

  const respondErrorOnce = async (message: string) => {
    if (responded.current) return
    responded.current = true
    await walletConnect.respondError(request.topic, request.id, message)
  }

  const respondSuccessOnce = async (result: any) => {
    if (responded.current) return
    responded.current = true
    await walletConnect.respondSuccess(request.topic, request.id, result)
  }

  const method = request.params.request.method
  let transaction: Transaction
  try {
    transaction = getRequestTransaction(request)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return <WalletConnectRequestErrorDialog message={message} onClose={() => respondErrorOnce(message)} />
  }
  const eligibleAccounts = getSessionApprovedAccounts(accounts, request, walletConnect.sessions)
  const account = selectedAccount || eligibleAccounts[0] || null
  const dappName =
    walletConnect.sessions.find(session => session.topic === request.topic)?.peer?.metadata?.name ||
    t("wallet-connect.request.default-dapp")

  const closeWithRejection = () => {
    respondErrorOnce(t("wallet-connect.request.user-rejected"))
  }

  if (stellarMethods.indexOf(method) === -1) {
    const message = t("wallet-connect.request.unsupported-method", { method })
    return <WalletConnectRequestErrorDialog message={message} onClose={() => respondErrorOnce(message)} />
  }

  if (!account) {
    const message = t("wallet-connect.request.no-account")
    return <WalletConnectRequestErrorDialog message={message} onClose={() => respondErrorOnce(message)} />
  }

  if (reviewStarted && method === "stellar_signXDR") {
    return <WalletConnectSignOnlyDialog account={account} request={request} transaction={transaction} onClose={closeWithRejection} />
  }

  if (reviewStarted && method === "stellar_signAndSubmitXDR") {
    return (
      <TransactionSender
        account={account}
        onSubmissionCompleted={signedTransaction => {
          respondSuccessOnce({
            status: "success",
            signedXDR: signedTransaction.toEnvelope().toXDR("base64")
          })
        }}
        onSubmissionFailure={error => {
          respondErrorOnce(error.message)
        }}
      >
        {({ sendTransaction }) => {
          return (
            <AutoSubmitWalletConnectTransaction
              transaction={transaction}
              sendTransaction={sendTransaction}
              onRejected={() => respondErrorOnce(t("wallet-connect.request.user-rejected"))}
            />
          )
        }}
      </TransactionSender>
    )
  }

  return (
    <RequestIntro
      accounts={eligibleAccounts}
      dappName={dappName}
      method={method}
      selectedAccount={account}
      transaction={transaction}
      onAccountChange={setSelectedAccount}
      onClose={closeWithRejection}
      onConfirm={() => setReviewStarted(true)}
    />
  )
}

function WalletConnectHandler() {
  const walletConnect = React.useContext(WalletConnectContext)

  if (!walletConnect.available) return null

  return (
    <>
      <WalletConnectProposalDialog />
      <WalletConnectRequestDialog />
    </>
  )
}

export default React.memo(WalletConnectHandler)
