import React from "react"
import { useTranslation } from "react-i18next"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"
import { AccountsContext } from "~App/contexts/accounts"
import { SavedAddressesContext } from "~App/contexts/savedAddresses"
import { SettingsContext } from "~App/contexts/settings"
import { createExportData, downloadExportFile } from "~Generic/lib/export-data"
import DialogBody from "~Layout/components/DialogBody"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import { useRouter } from "~Generic/hooks/userinterface"
import * as routes from "~App/routes"

const useStyles = makeStyles({
  progress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0"
  },
  error: {
    color: "red",
    marginTop: 8
  }
})

export default function DataExportDialog() {
  const { t } = useTranslation()
  const classes = useStyles()
  const router = useRouter()
  
  const { accounts } = React.useContext(AccountsContext)
  const { savedAddresses } = React.useContext(SavedAddressesContext)
  const { accountAssetSettings } = React.useContext(SettingsContext)
  
  const [isExporting, setIsExporting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleBack = () => {
    router.history.push(routes.settings())
  }

  const handleExport = async () => {
    setIsExporting(true)
    setError(null)
    
    try {
      const exportData = await createExportData(
        accounts,
        savedAddresses,
        accountAssetSettings
      )
      
      downloadExportFile(exportData)
    } catch (err) {
      console.error("Ошибка при экспорте данных:", err)
      setError("Не удалось экспортировать данные. Попробуйте еще раз.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <DialogBody>
      <DialogContent style={{ flexGrow: 0, padding: 0 }}>
        <DialogContentText align="justify" style={{ marginTop: 8 }}>
          {t("app-settings.export.title", "Экспорт данных")}
        </DialogContentText>

        <Typography variant="body1" paragraph style={{ marginLeft: 24, marginRight: 24 }}>
          {t("app-settings.export.description", 
            "Будет создан файл с вашими аккаунтами, контактами и настройками токенов. " +
            "Приватные ключи будут включены в экспорт.")}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" paragraph style={{ marginLeft: 24, marginRight: 24 }}>
          {t("app-settings.export.warning", 
            "Внимание: Файл экспорта содержит конфиденциальную информацию. " +
            "Храните его в безопасном месте и не передавайте третьим лицам.")}
        </Typography>

        {isExporting && (
          <div className={classes.progress} style={{ marginLeft: 24, marginRight: 24 }}>
            <CircularProgress size={24} />
            <Typography variant="body2" style={{ marginLeft: 16 }}>
              {t("app-settings.export.exporting", "Создание файла экспорта...")}
            </Typography>
          </div>
        )}

        {error && (
          <Typography className={classes.error} variant="body2" style={{ marginLeft: 24, marginRight: 24 }}>
            {error}
          </Typography>
        )}
      </DialogContent>
      
      <DialogActionsBox>
        <ActionButton onClick={handleBack} disabled={isExporting}>
          {t("app-settings.export.cancel", "Назад")}
        </ActionButton>
        <ActionButton onClick={handleExport} disabled={isExporting || accounts.length === 0}>
          {t("app-settings.export.export", "Экспортировать")}
        </ActionButton>
      </DialogActionsBox>
    </DialogBody>
  )
}
