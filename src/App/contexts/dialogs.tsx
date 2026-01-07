import { Dialog } from "@material-ui/core"
import React from "react"
import { FullscreenDialogTransition } from "~App/theme"
import ViewLoading from "~Generic/components/ViewLoading"
import SavedAddressesDialog, { SavedAddressesDialogProps } from "../../Assets/components/SavedAddressesDialog"
import HiddenSendersDialog, { HiddenSendersDialogProps } from "../../Account/components/HiddenSendersDialog"

interface Props {
  children: React.ReactNode
}

interface ContextType {
  isSavedAddressesOpened: boolean
  openSavedAddresses: (params: Partial<SavedAddressesDialogProps> | null) => void
  isHiddenSendersOpened: boolean
  openHiddenSenders: (params: Partial<HiddenSendersDialogProps> | null) => void
}

const initialValues: ContextType = {
  isSavedAddressesOpened: false,
  openSavedAddresses: () => undefined,
  isHiddenSendersOpened: false,
  openHiddenSenders: () => undefined
}

const DialogsContext = React.createContext<ContextType>(initialValues)

export function DialogsProvider(props: Props) {
  const [savedAddressesDialog, setSavedAddressesDialog] = React.useState<Partial<SavedAddressesDialogProps> | null>(
    null
  )
  const [hiddenSendersDialog, setHiddenSendersDialog] = React.useState<Partial<HiddenSendersDialogProps> | null>(
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

  const context = {
    isSavedAddressesOpened: !!savedAddressesDialog,
    openSavedAddresses: setSavedAddressesDialog,
    isHiddenSendersOpened: !!hiddenSendersDialog,
    openHiddenSenders: setHiddenSendersDialog
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
      </React.Suspense>
    </DialogsContext.Provider>
  )
}

export { ContextType as DialogsContextType, DialogsContext }
