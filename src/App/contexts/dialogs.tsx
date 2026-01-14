import { Dialog } from "@material-ui/core"
import React from "react"
import { FullscreenDialogTransition } from "~App/theme"
import ViewLoading from "~Generic/components/ViewLoading"
import SavedAddressesDialog, { SavedAddressesDialogProps } from "../../Assets/components/SavedAddressesDialog"
import SavedAddressesSettings from "../../Assets/components/SavedAddressesSettings"
import HiddenSendersDialog, { HiddenSendersDialogProps } from "../../Account/components/HiddenSendersDialog"

interface Props {
  children: React.ReactNode
}

interface SavedAddressesSettingsDialogProps {
  onClose?: () => void
}

interface ContextType {
  isSavedAddressesOpened: boolean
  openSavedAddresses: (params: Partial<SavedAddressesDialogProps> | null) => void
  isHiddenSendersOpened: boolean
  openHiddenSenders: (params: Partial<HiddenSendersDialogProps> | null) => void
  isSavedAddressesSettingsOpened: boolean
  openSavedAddressesSettings: (params: Partial<SavedAddressesSettingsDialogProps> | null) => void
}

const initialValues: ContextType = {
  isSavedAddressesOpened: false,
  openSavedAddresses: () => undefined,
  isHiddenSendersOpened: false,
  openHiddenSenders: () => undefined,
  isSavedAddressesSettingsOpened: false,
  openSavedAddressesSettings: () => undefined
}

const DialogsContext = React.createContext<ContextType>(initialValues)

export function DialogsProvider(props: Props) {
  const [savedAddressesDialog, setSavedAddressesDialog] = React.useState<Partial<SavedAddressesDialogProps> | null>(
    null
  )
  const [hiddenSendersDialog, setHiddenSendersDialog] = React.useState<Partial<HiddenSendersDialogProps> | null>(
    null
  )
  const [savedAddressesSettingsDialog, setSavedAddressesSettingsDialog] = React.useState<Partial<SavedAddressesSettingsDialogProps> | null>(
    null
  )

  const closeSavedAddressesDialog = React.useCallback(() => {
    savedAddressesDialog?.onClose?.()
    setSavedAddressesDialog(null)
  }, [savedAddressesDialog])

  const closeHiddenSendersDialog = React.useCallback(() => {
    hiddenSendersDialog?.onClose?.()
    setHiddenSendersDialog(null)
  }, [hiddenSendersDialog])

  const closeSavedAddressesSettingsDialog = React.useCallback(() => {
    savedAddressesSettingsDialog?.onClose?.()
    setSavedAddressesSettingsDialog(null)
  }, [savedAddressesSettingsDialog])

  const context = {
    isSavedAddressesOpened: !!savedAddressesDialog,
    openSavedAddresses: setSavedAddressesDialog,
    isHiddenSendersOpened: !!hiddenSendersDialog,
    openHiddenSenders: setHiddenSendersDialog,
    isSavedAddressesSettingsOpened: savedAddressesSettingsDialog,
    openSavedAddressesSettings: setSavedAddressesSettingsDialog
  }

  return (
    <DialogsContext.Provider value={context}>
      {props.children}
      <React.Suspense fallback={null}>
        <Dialog
          open={!!savedAddressesDialog}
          fullScreen
          onClose={closeSavedAddressesDialog}
          TransitionComponent={FullscreenDialogTransition}
        >
          <React.Suspense fallback={<ViewLoading />}>
            <SavedAddressesDialog {...(savedAddressesDialog || {})} onClose={closeSavedAddressesDialog} />
          </React.Suspense>
        </Dialog>
        <Dialog
          open={!!hiddenSendersDialog}
          fullScreen
          onClose={closeHiddenSendersDialog}
          TransitionComponent={FullscreenDialogTransition}
        >
          <React.Suspense fallback={<ViewLoading />}>
            <HiddenSendersDialog {...(hiddenSendersDialog || {})} onClose={closeHiddenSendersDialog} />
          </React.Suspense>
        </Dialog>
        <Dialog
          open={!!savedAddressesSettingsDialog}
          fullScreen
          onClose={closeSavedAddressesSettingsDialog}
          TransitionComponent={FullscreenDialogTransition}
        >
          <React.Suspense fallback={<ViewLoading />}>
            <SavedAddressesSettings {...(savedAddressesSettingsDialog || {})} onClose={closeSavedAddressesSettingsDialog} />
          </React.Suspense>
        </Dialog>
      </React.Suspense>
    </DialogsContext.Provider>
  )
}

export { ContextType as DialogsContextType, DialogsContext }
