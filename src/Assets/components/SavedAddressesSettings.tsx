import React from "react"
import { useTranslation } from "react-i18next"
import DialogBody from "~Layout/components/DialogBody"
import { SavedAddresses, SavedAddressesContext } from "~App/contexts/savedAddresses"
import { List, ListItem, ListItemText } from "@material-ui/core"
import MainTitle from "~Generic/components/MainTitle"
import { NotificationsContext } from "~App/contexts/notifications"
import { ActionButton, ConfirmDialog } from "~Generic/components/DialogActions"
import { call as ipcCall } from "~Platform/ipc"

interface SavedAddressesSettingsProps {
  onClose: () => void
}

function SavedAddressesSettings(props: SavedAddressesSettingsProps) {
  const { t } = useTranslation()
  const { savedAddresses, bulkUpdate } = React.useContext(SavedAddressesContext)
  const { showNotification } = React.useContext(NotificationsContext)

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = React.useState(false)
  const isAndroid = import.meta.env.VITE_PLATFORM === "android"

  const handleShare = React.useCallback(async () => {
    const jsonContent = JSON.stringify(savedAddresses, null, 2)
    try {
      await ipcCall("ShareFile", {
        message: "My Stellar contacts",
        subject: "stellar-contacts",
        content: jsonContent
      })
      showNotification("success", t("account.saved-addresses.export-success", "File exported successfully"))
    } catch (error) {
      console.error("Error sharing file:", error.message)
      showNotification("error", t("account.saved-addresses.export-error", "Failed to export file"))
    }
  }, [savedAddresses, showNotification, t])

  const handleExportToFile = React.useCallback(async () => {
    const jsonContent = JSON.stringify(savedAddresses, null, 2)
    const isMobile = import.meta.env.VITE_PLATFORM === "android" || import.meta.env.VITE_PLATFORM === "ios"

    if (isMobile) {
      try {
        const platform = import.meta.env.VITE_PLATFORM
        let result = false
        if (platform === "android") {
          // On Android, use SaveFile to save to Downloads folder
          result = await ipcCall("SaveFile", {
            subject: "stellar-contacts",
            content: jsonContent
          })
        } else {
          // On iOS, use ShareFile for social sharing
          await ipcCall("ShareFile", {
            message: "My Stellar contacts",
            subject: "stellar-contacts",
            content: jsonContent
          })
          result = true
        }
        if (result) {
          showNotification("success", t("account.saved-addresses.export-success", "File exported successfully"))
        }
      } catch (error) {
        console.error("Error sharing file:", error.message)
        showNotification("error", t("account.saved-addresses.export-error", "Failed to export file"))
      }
    } else {
      // Use blob download on desktop/web
      const blob = new Blob([jsonContent], { type: "application/json" })

      // Create a download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `stellar-contacts.json`

      // Trigger the download
      document.body.appendChild(link)
      link.click()

      // Clean up
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      showNotification("success", t("account.saved-addresses.export-success", "File exported successfully"))
    }
  }, [savedAddresses, showNotification, t])

  const [fileInputKey, setFileInputKey] = React.useState(0) // To reset the file input
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleImportFromFile = React.useCallback(() => {
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [])

  const handleFileChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const importedData = JSON.parse(content)

        // Validate the imported data structure
        if (!isValidSavedAddressesFormat(importedData)) {
          showNotification("error", t("account.saved-addresses.invalid-format", "Invalid file format"))
          return
        }

        // Always synchronize - merge addresses (existing addresses preserved, conflicts updated)
        const mergedAddresses = { ...savedAddresses, ...importedData }
        bulkUpdate(mergedAddresses)

        // Show success notification and close dialog
        showNotification("success", t("account.saved-addresses.import-success", "Addresses imported successfully"))
        props.onClose()

        // Reset the file input
        setFileInputKey(prev => prev + 1)
      } catch (error) {
        console.error("Error parsing JSON file:", error)
        showNotification("error", t("account.saved-addresses.invalid-json", "Invalid JSON format"))
      }
    }
    reader.readAsText(file)
  }, [savedAddresses, bulkUpdate, showNotification, t, props])

  // Helper function to validate the imported data format
  const isValidSavedAddressesFormat = (data: any): data is SavedAddresses => {
    if (typeof data !== 'object' || data === null) {
      return false
    }

    for (const address in data) {
      const entry = data[address]
      if (!entry || typeof entry.label !== 'string') {
        return false
      }
    }

    return true
  }

  const handleDeleteAll = React.useCallback(() => {
    setDeleteConfirmationOpen(true)
  }, [])

  const handleConfirmDeleteAll = React.useCallback(() => {
    // Clear all saved addresses
    bulkUpdate({})
    showNotification("success", t("account.saved-addresses.delete-all-success", "All saved addresses deleted successfully"))
    props.onClose()
    setDeleteConfirmationOpen(false)
  }, [bulkUpdate, showNotification, t, props])

  const handleCancelDeleteAll = React.useCallback(() => {
    setDeleteConfirmationOpen(false)
  }, [])

  return (
    <DialogBody
      excessWidth={12}
      top={
        <MainTitle
          onBack={props.onClose}
          title={t("account.saved-addresses.settings-title", "Saved Addresses Settings")}
        />
      }
    >
      <List style={{ margin: "0 -8px" }}>
        {isAndroid && (
          <ListItem button onClick={handleShare}>
            <ListItemText
              primary={t("account.saved-addresses.share", "Share")}
              secondary={t("account.saved-addresses.share-description", "Share saved contacts with other apps")}
            />
          </ListItem>
        )}
        <ListItem button onClick={handleExportToFile}>
          <ListItemText
            primary={t("account.saved-addresses.export-to-file", "Export to file")}
            secondary={t("account.saved-addresses.export-description", "Download saved addresses as JSON file")}
          />
        </ListItem>
        <ListItem button onClick={handleImportFromFile}>
          <ListItemText
            primary={t("account.saved-addresses.import-from-file", "Import from file")}
            secondary={t("account.saved-addresses.import-description", "Upload and import saved addresses from JSON file")}
          />
        </ListItem>
        <ListItem button onClick={handleDeleteAll} style={{ color: "red" }}>
          <ListItemText
            primary={t("account.saved-addresses.delete-all", "Delete all")}
            secondary={t("account.saved-addresses.delete-all-description", "Remove all saved addresses")}
          />
        </ListItem>
      </List>
      {/* Hidden file input for import */}
      <input
        key={fileInputKey} // This forces a reset of the input
        type="file"
        accept=".json"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* Confirmation dialog for delete all */}
      <ConfirmDialog
        open={deleteConfirmationOpen}
        title={t("account.saved-addresses.delete-all-confirm.title", "Confirm deletion")}
        onClose={handleCancelDeleteAll}
        cancelButton={
          <ActionButton onClick={handleCancelDeleteAll}>
            {t("account.saved-addresses.delete-all-confirm.cancel", "Cancel")}
          </ActionButton>
        }
        confirmButton={
          <ActionButton onClick={handleConfirmDeleteAll} type="primary">
            {t("account.saved-addresses.delete-all-confirm.delete", "Delete")}
          </ActionButton>
        }
      >
        {t("account.saved-addresses.delete-all-confirm.text", "Are you sure you want to delete all saved addresses? This action cannot be undone.")}
      </ConfirmDialog>
    </DialogBody>
  )
}

export default React.memo(SavedAddressesSettings)