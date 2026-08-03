import Box from "@material-ui/core/Box"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import DialogContent from "@material-ui/core/DialogContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import LinkIcon from "@material-ui/icons/Link"
import QrCodeIcon from "@material-ui/icons/CameraAlt"
import RemoveIcon from "@material-ui/icons/RemoveCircle"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { useTranslation } from "react-i18next"
import { Account, AccountsContext } from "~App/contexts/accounts"
import { WalletConnectContext } from "~App/contexts/walletConnect"
import { trackError } from "~App/contexts/notifications"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import QRImportDialog from "~Generic/components/QRImport"
import DialogBody from "~Layout/components/DialogBody"

const useWalletConnectListItemStyles = makeStyles({
  list: {
    background: "transparent",
    paddingBottom: 16
  },
  listItem: {
    background: "#FFFFFF",
    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.1)",
    "&:first-child": {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    "&:last-child": {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    }
  },
  avatar: {
    backgroundColor: "rgba(0, 0, 0, 0.54)"
  }
})

function getSessionName(session: any) {
  return session?.peer?.metadata?.name || session?.peer?.metadata?.url || session?.topic
}

function getSessionPublicKey(session: any) {
  const approvedAccount = session?.namespaces?.stellar?.accounts?.[0]
  return typeof approvedAccount === "string" ? approvedAccount.split(":")[2] : undefined
}

function getSessionAccountLabel(session: any, accounts: Account[], unknownAccountLabel: string) {
  const publicKey = getSessionPublicKey(session)
  const account = accounts.find(someAccount => someAccount.publicKey === publicKey)
  const suffix = publicKey ? publicKey.slice(-4) : "----"
  const name = account?.name || unknownAccountLabel
  return `${name} *${suffix}`
}

function ManageWalletConnectDialog() {
  const walletConnect = React.useContext(WalletConnectContext)
  const { accounts } = React.useContext(AccountsContext)
  const { t } = useTranslation()
  const classes = useWalletConnectListItemStyles()
  const [uri, setURI] = React.useState("")
  const [qrOpen, setQROpen] = React.useState(false)
  const [pairing, setPairing] = React.useState(false)

  const pair = React.useCallback(async (pairingURI: string) => {
    try {
      setPairing(true)
      await walletConnect.pair(pairingURI)
      setURI("")
      setQROpen(false)
    } catch (error) {
      trackError(error)
    } finally {
      setPairing(false)
    }
  }, [walletConnect])

  return (
    <DialogBody>
      <DialogContent style={{ flexGrow: 0, padding: 0 }}>
        {!walletConnect.available ? (
          <Typography color="error">
            {t("app-settings.wallet-connect.missing-project-id")}
          </Typography>
        ) : (
          <>
            <Box marginTop={1}>
              <TextField
                fullWidth
                label={t("app-settings.wallet-connect.uri.label")}
                onChange={event => setURI(event.target.value)}
                value={uri}
              />
              <DialogActionsBox preventMobileActionsBox desktopStyle={{ marginTop: 16 }}>
                <ActionButton icon={<QrCodeIcon style={{ fontSize: 16 }} />} onClick={() => setQROpen(true)}>
                  {t("app-settings.wallet-connect.action.scan")}
                </ActionButton>
                <ActionButton
                  disabled={!uri}
                  icon={<LinkIcon style={{ fontSize: 16 }} />}
                  loading={pairing}
                  onClick={() => pair(uri)}
                  type="primary"
                >
                  {t("app-settings.wallet-connect.action.connect")}
                </ActionButton>
              </DialogActionsBox>
            </Box>

            <Box marginTop={3}>
              <Typography variant="h6">
                {t("app-settings.wallet-connect.sessions.title")}
              </Typography>
              {walletConnect.sessions.length > 0 ? (
                <List className={classes.list}>
                  {walletConnect.sessions.map(session => (
                    <ListItem className={classes.listItem} key={session.topic}>
                      <ListItemIcon style={{ marginRight: 0 }}>
                        <Avatar className={classes.avatar}>
                          <LinkIcon />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={getSessionName(session)}
                        secondary={getSessionAccountLabel(
                          session,
                          accounts,
                          t("app-settings.wallet-connect.sessions.unknown-account")
                        )}
                      />
                      <ListItemIcon style={{ marginRight: 0 }}>
                        <IconButton onClick={() => walletConnect.disconnectSession(session.topic)}>
                          <RemoveIcon />
                        </IconButton>
                      </ListItemIcon>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography color="textSecondary">
                  {t("app-settings.wallet-connect.sessions.empty")}
                </Typography>
              )}
            </Box>
            <QRImportDialog
              open={qrOpen}
              onClose={() => setQROpen(false)}
              onError={trackError}
              onScan={data => {
                if (data) pair(data)
              }}
            />
          </>
        )}
      </DialogContent>
    </DialogBody>
  )
}

export default React.memo(ManageWalletConnectDialog)
