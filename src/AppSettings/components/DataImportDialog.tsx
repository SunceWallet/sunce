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
import { importWalletData, ExportData } from "~Generic/lib/export-data"
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
  },
  success: {
    color: "green",
    marginTop: 8
  },
  fileInput: {
    display: "none"
  }
})

export default function DataImportDialog() {
  const { t } = useTranslation()
  const classes = useStyles()
  const router = useRouter()
  
  const { accounts, renameAccount, refreshAccounts } = React.useContext(AccountsContext)
  const { savedAddresses, bulkUpdate } = React.useContext(SavedAddressesContext)
  const { accountAssetSettings, setAssetSettings } = React.useContext(SettingsContext)
  
  const [isImporting, setIsImporting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState<string | null>(null)
  const [importResults, setImportResults] = React.useState<any>(null)

  const handleBack = () => {
    router.history.push(routes.settings())
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const content = e.target?.result as string
        const importData: ExportData = JSON.parse(content)
        
        // Валидация структуры файла
        if (!importData.version || !importData.accounts || !importData.contacts) {
          throw new Error("Неверный формат файла экспорта")
        }

        setIsImporting(true)
        setError(null)
        setSuccess(null)

        // Убираем ограничение на пустые профили - импорт теперь возможен в любые профили

        const results = await importWalletData(
          importData,
          accounts,
          savedAddresses,
          accountAssetSettings,
          renameAccount,
          bulkUpdate,
          (accountID, tokenKey, settings) => {
            // Обновляем настройки токенов для аккаунта
            setAssetSettings(accountID, tokenKey, settings)
          }
        )

        setImportResults(results)
        
        // Принудительно обновляем список аккаунтов
        await refreshAccounts()
        
        if (results.errors.length > 0) {
          setError(`Импорт завершен с ошибками:\n${results.errors.join('\n')}`)
        } else {
          setSuccess(
            `Импорт успешно завершен!\n` +
            `Импортировано аккаунтов: ${results.importedAccounts}\n` +
            `Обновлено аккаунтов: ${results.updatedAccounts}\n` +
            `Импортировано контактов: ${results.importedContacts}\n` +
            `Обновлено контактов: ${results.updatedContacts}`
          )
        }
      } catch (err) {
        console.error("Ошибка при импорте данных:", err)
        setError(`Не удалось импортировать данные: ${err}`)
      } finally {
        setIsImporting(false)
      }
    }
    
    reader.readAsText(file)
  }

  const handleImportClick = () => {
    const fileInput = document.getElementById('import-file-input') as HTMLInputElement
    fileInput?.click()
  }

  return (
    <DialogBody>
      <DialogContent style={{ flexGrow: 0, padding: 0 }}>
        <DialogContentText align="justify" style={{ marginTop: 8 }}>
          {t("app-settings.import.title", "Импорт данных")}
        </DialogContentText>

        <Typography variant="body1" paragraph style={{ marginLeft: 24, marginRight: 24 }}>
          {t("app-settings.import.description", 
            "Выберите файл экспорта для импорта аккаунтов, контактов и настроек. " +
            "Существующие данные будут аккуратно обновлены.")}
        </Typography>
        
        <Typography variant="body2" color="textSecondary" paragraph style={{ marginLeft: 24, marginRight: 24 }}>
          {t("app-settings.import.warning", 
            "Внимание: Импорт добавит новые данные и обновит существующие. " +
            "Названия существующих аккаунтов не изменятся.")}
        </Typography>

        {isImporting && (
          <div className={classes.progress} style={{ marginLeft: 24, marginRight: 24 }}>
            <CircularProgress size={24} />
            <Typography variant="body2" style={{ marginLeft: 16 }}>
              {t("app-settings.import.importing", "Импорт данных...")}
            </Typography>
          </div>
        )}

        {error && (
          <Typography className={classes.error} variant="body2" style={{ marginLeft: 24, marginRight: 24, whiteSpace: 'pre-line' }}>
            {error}
          </Typography>
        )}

        {success && (
          <Typography className={classes.success} variant="body2" style={{ marginLeft: 24, marginRight: 24, whiteSpace: 'pre-line' }}>
            {success}
          </Typography>
        )}

        <input
          id="import-file-input"
          type="file"
          accept=".json"
          onChange={handleFileSelect}
          className={classes.fileInput}
        />
      </DialogContent>
      
      <DialogActionsBox>
        <ActionButton onClick={handleBack} disabled={isImporting}>
          {t("app-settings.import.cancel", "Назад")}
        </ActionButton>
        <ActionButton 
          onClick={handleImportClick} 
          disabled={isImporting}
        >
          {t("app-settings.import.import", "Выбрать файл")}
        </ActionButton>
      </DialogActionsBox>
    </DialogBody>
  )
}
