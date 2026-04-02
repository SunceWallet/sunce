import React from "react"
import { useTranslation } from "react-i18next"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Typography from "@material-ui/core/Typography"
import DialogBody from "~Layout/components/DialogBody"
import ApiServerSelectionList from "./ApiServerSelectionList"

function ManageApiServersDialog() {
  const { t } = useTranslation()

  return (
    <DialogBody>
      <DialogContent style={{ flexGrow: 0, padding: 0 }}>
        <DialogContentText align="justify" style={{ marginTop: 8 }}>
          {t("app-settings.api-servers.info.primary")}
        </DialogContentText>
        <DialogContentText align="justify">
          {t("app-settings.api-servers.info.secondary")}
        </DialogContentText>
        <Typography color="textSecondary" variant="body2">
          {t("app-settings.api-servers.info.note")}
        </Typography>

        <ApiServerSelectionList />
      </DialogContent>
    </DialogBody>
  )
}

export default React.memo(ManageApiServersDialog)
