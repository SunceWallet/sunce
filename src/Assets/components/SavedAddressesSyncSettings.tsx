import React from "react"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Switch from "@material-ui/core/Switch"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import WarningIcon from "@material-ui/icons/Warning"
import { useTranslation } from "react-i18next"
import { SavedAddressesContext } from "~App/contexts/savedAddresses"
import { SettingsContext } from "~App/contexts/settings"
import { warningColor } from "~App/theme"
import PasswordField from "~Generic/components/PasswordField"
import MainTitle from "~Generic/components/MainTitle"
import DialogBody from "~Layout/components/DialogBody"
import SavedAddressesSyncStatus from "./SavedAddressesSyncStatus"

const useStyles = makeStyles({
  field: {
    marginTop: 12
  },
  switchControl: {
    flexShrink: 0,
    marginLeft: 16
  },
  switchDescription: {
    flex: 1,
    minWidth: 0
  },
  statusRow: {
    alignItems: "center",
    display: "flex",
    marginTop: 20,
    minHeight: 20
  },
  switchRow: {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12
  }
})

interface Props {
  onClose: () => void
}

function SavedAddressesSyncSettings(props: Props) {
  const classes = useStyles()
  const { t } = useTranslation()
  const settings = React.useContext(SettingsContext)
  const { lastSyncAt, synchronize, syncStatus } = React.useContext(SavedAddressesContext)
  const [syncApiKey, setSyncApiKey] = React.useState(settings.savedAddressesSyncApiKey || "")
  const syncApiKeyRef = React.useRef(syncApiKey)
  const syncApiKeyDirtyRef = React.useRef(false)
  const persistedSyncApiKeyRef = React.useRef(syncApiKey)
  const setSettingRef = React.useRef(settings.setSetting)

  setSettingRef.current = settings.setSetting

  const saveSyncApiKey = React.useCallback(() => {
    if (syncApiKeyRef.current !== persistedSyncApiKeyRef.current) {
      persistedSyncApiKeyRef.current = syncApiKeyRef.current
      setSettingRef.current("savedAddressesSyncApiKey", syncApiKeyRef.current)
    }
    syncApiKeyDirtyRef.current = false
  }, [])

  React.useEffect(() => {
    if (syncApiKeyDirtyRef.current) return

    const apiKey = settings.savedAddressesSyncApiKey || ""
    syncApiKeyRef.current = apiKey
    persistedSyncApiKeyRef.current = apiKey
    setSyncApiKey(apiKey)
  }, [settings.initialized, settings.savedAddressesSyncApiKey])

  React.useEffect(() => {
    return () => saveSyncApiKey()
  }, [saveSyncApiKey])

  return (
    <DialogBody
      excessWidth={12}
      top={<MainTitle onBack={props.onClose} title={t("account.saved-addresses.sync.title")} />}
    >
      <DialogContent style={{ flexGrow: 0, padding: 0 }}>
        <DialogContentText align="justify" style={{ marginTop: 8, whiteSpace: "pre-line" }}>
          {t("account.saved-addresses.sync.description")}
        </DialogContentText>
        <ListItem component="div" style={{ background: warningColor, marginBottom: 16 }}>
          <ListItemIcon style={{ minWidth: 40 }}>
            <WarningIcon />
          </ListItemIcon>
          <ListItemText primary={t("account.saved-addresses.sync.privacy-warning")} />
        </ListItem>
        <div className={classes.switchRow}>
          <div className={classes.switchDescription}>
            <Typography variant="body1">{t("account.saved-addresses.sync.enabled")}</Typography>
          </div>
          <Switch
            className={classes.switchControl}
            checked={settings.savedAddressesSyncEnabled}
            color="primary"
            onChange={event => settings.setSetting("savedAddressesSyncEnabled", event.target.checked)}
          />
        </div>
        {settings.savedAddressesSyncEnabled && (
          <PasswordField
            className={classes.field}
            fullWidth
            helperText={
              <span>
                {t("account.saved-addresses.sync.api-key.help")} {" "}
                <a href="https://bsn.expert/preferences/api" target="_blank" rel="noopener noreferrer">
                  https://bsn.expert
                </a>
              </span>
            }
            label={t("account.saved-addresses.sync.api-key.label")}
            onBlur={saveSyncApiKey}
            onChange={event => {
              syncApiKeyDirtyRef.current = true
              syncApiKeyRef.current = event.target.value
              setSyncApiKey(event.target.value)
            }}
            value={syncApiKey}
          />
        )}
        {settings.savedAddressesSyncEnabled && (
          <div className={classes.statusRow}>
            <SavedAddressesSyncStatus
              lastSyncAt={lastSyncAt}
              onClick={synchronize}
              status={syncStatus}
            />
          </div>
        )}
      </DialogContent>
    </DialogBody>
  )
}

export default React.memo(SavedAddressesSyncSettings)
