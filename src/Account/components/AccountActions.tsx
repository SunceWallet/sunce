import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"
import { Account } from "~App/contexts/accounts"
import { useLiveAccountData } from "~Generic/hooks/stellar-subscriptions"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import QRCodeIcon from "~Icons/components/QRCode"
import QRReaderIcon from "~Icons/components/QRReader"

export const useButtonStyles = makeStyles((theme) => ({
  desktop: {
    margin: "0",
    padding: "24px 0 0",
    gap: "20px"
  },
  hidden: {
    paddingTop: 0
  },
  collapse: {
    width: "100%",
    zIndex: 1
  },
  button: {
    border: "none",
    borderRadius: 8,
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
    fontSize: "1rem",
    flexBasis: 1,
    flexGrow: 1,
    padding: "20px !important"
  },
  secondaryButton: {
    background: "white",
    color: theme.palette.primary.dark
  }
}))

interface AccountActionsProps {
  account: Account
  bottomOfScreen?: boolean
  hidden?: boolean
  onCreatePayment: () => void
  onReceivePayment: () => void
  onScanQRCode?: () => void
}

function AccountActions(props: AccountActionsProps) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet)
  const classes = useButtonStyles()
  const className = `${props.bottomOfScreen ? classes.mobile : classes.desktop} ${props.hidden ? classes.hidden : ""}`
  const isDisabled =
    accountData.balances.length === 0 || !accountData.signers.some((signer) => signer.key === props.account.publicKey)
  const { t } = useTranslation()

  const showScanButton = Boolean(props.onScanQRCode)

  return (
    <DialogActionsBox className={className} hidden={props.hidden}>
      <ActionButton
        className={classes.button}
        disabled={isDisabled}
        icon={<SendIcon style={{ fontSize: "110%" }} />}
        onClick={props.onCreatePayment}
        type="primary"
      >
        {t("account.action.send")}
      </ActionButton>
      {showScanButton && (
        <ActionButton
          className={`${classes.button} ${classes.secondaryButton}`}
          icon={<QRReaderIcon style={{ fontSize: "140%" }} />}
          onClick={props.onScanQRCode}
          variant="contained"
        >
          {t("account.action.scan")}
        </ActionButton>
      )}
    </DialogActionsBox>
  )
}

export default React.memo(AccountActions)
