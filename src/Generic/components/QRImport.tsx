import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import { QRReader, isFullscreenQRPreview } from "~Platform/components"
import { ActionButton, DialogActionsBox } from "./DialogActions"
import jsQR from "jsqr"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Publish, CameraAlt } from "@material-ui/icons"

interface Props {
  open: boolean
  onClose: () => void
  onError: (error: Error) => void
  onScan: (data: string | null) => void
}

function QRImportDialog(props: Props) {
  const { t } = useTranslation()

  const [scannerRequested, setScannerRequested] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleScan = React.useCallback((data: string | null) => {
    setScannerRequested(false)
    props.onScan(data)
  }, [props.onScan])

  const handleStartScan = React.useCallback(() => {
    setDrawerOpen(false)
    setScannerRequested(true)
    props.onClose()
  }, [props.onClose])

  useEffect(() => {
    if (props.open) {
      setTimeout(() => setDrawerOpen(true), 100)
    } else {
      setDrawerOpen(false)
    }
  }, [props.open])

  const handleCloseDrawer = React.useCallback(() => {
    setDrawerOpen(false)
    setScannerRequested(false)
    props.onClose()
  }, [props.onClose])

  /**
   * Create <input type=file>, simulate click on it.
   * In onclick handler read the data from the file and parse it as QR code
   */
  const handleUpload = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"

    input.onchange = (event: Event) => {
      const eventInput = event.target as HTMLInputElement
      if (!eventInput.files || eventInput.files.length === 0) {
        props.onError(new Error("No file selected"))
        return
      }

      const file = eventInput.files[0]

      // Check if file is an image
      if (!file.type.match("image.*")) {
        props.onError(new Error("Selected file is not an image"))
        return
      }

      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const uploadedImageData = e.target?.result as string
        const img = new Image()
        img.onload = () => {
          // Create a canvas to process the image
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")

          if (!ctx) {
            props.onError(new Error("Could not create canvas context"))
            return
          }

          // Set canvas dimensions to match the image
          canvas.width = img.width
          canvas.height = img.height

          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0, img.width, img.height)

          // Get image data from canvas
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

          // Use jsQR to decode the QR code
          try {
            const code = jsQR(imageData.data, imageData.width, imageData.height)

            if (code) {
              props.onScan(code.data)
            } else {
              props.onError(new Error("No QR code found in the selected image"))
            }
          } catch (error) {
            props.onError(new Error(`Failed to decode QR code: ${error}`))
          }
        }

        img.onerror = () => {
          props.onError(new Error("Failed to load image"))
        }

        img.src = uploadedImageData
      }

      reader.onerror = () => {
        props.onError(new Error("Failed to read file"))
      }

      // Read the file as a data URL
      reader.readAsDataURL(file)
    }

    // Trigger the file selection dialog
    input.click()
  }

  if (isFullscreenQRPreview) {
    return (
      <Dialog open={props.open} onClose={handleCloseDrawer}>
        {scannerRequested ? (
          <QRReader onError={props.onError} onScan={handleScan} style={{ width: 256, height: 256 }} />
        ) : null}
        <Drawer anchor="bottom" open={drawerOpen} onClose={handleCloseDrawer}>
          <List>
            <ListItem button onClick={handleUpload}>
              <ListItemIcon><Publish /></ListItemIcon>
              <ListItemText primary={t("generic.qr-reader.action.upload")} />
            </ListItem>
            <ListItem button onClick={handleStartScan}>
              <ListItemIcon><CameraAlt /></ListItemIcon>
              <ListItemText primary={t("generic.qr-reader.action.scan")} />
            </ListItem>
          </List>
        </Drawer>
      </Dialog>
    )
  }

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent style={{ paddingBottom: 8 }}>
        {props.open ? (
          <QRReader onError={props.onError} onScan={props.onScan} style={{ width: 256, height: 256 }} />
        ) : null}
        <DialogActionsBox>
          <ActionButton onClick={handleUpload}>{t("generic.qr-reader.action.upload")}</ActionButton>
          <ActionButton onClick={props.onClose}>{t("generic.qr-reader.action.cancel")}</ActionButton>
        </DialogActionsBox>
      </DialogContent>
    </Dialog>
  )
}

export default QRImportDialog
