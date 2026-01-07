import { ListItem, ListItemText } from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import List from "@material-ui/core/List"
import AddIcon from "@material-ui/icons/Add"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { FullscreenDialogTransition } from "~App/theme"
import ButtonListItem from "~Generic/components/ButtonListItem"
import MainTitle from "~Generic/components/MainTitle"
import { PublicKey } from "~Generic/components/PublicKey"
import ViewLoading from "~Generic/components/ViewLoading"
import { useIsMobile } from "~Generic/hooks/userinterface"
import DialogBody from "~Layout/components/DialogBody"
import HiddenSendersDetailsDialog from "./HiddenSendersDetailsDialog"
import { HiddenSenders, HiddenSendersContext } from "~App/contexts/hiddenSenders"
import { SearchField } from "~Generic/components/FormFields"

interface HiddenSendersListProps {
  addresses: HiddenSenders
  filterValue?: string
  onClick: (address: string) => void
}

export interface HiddenSendersDialogProps {
  address?: string
  readonly?: boolean
  onSelect?: (address: string) => void
  onClose: () => void
}

const HiddenSendersList = React.memo(function HiddenSendersList(props: HiddenSendersListProps) {
  const isSmallScreen = useIsMobile()

  const sortedList = React.useMemo(
    () =>
      Object.keys(props.addresses)
        .map(address => ({ address, label: props.addresses[address].label || "" }))
        .sort((a, b) => {
          // Sort by label if available, otherwise by address
          const aSort = a.label || a.address
          const bSort = b.label || b.address
          return aSort.localeCompare(bSort)
        }),
    [props.addresses]
  )

  const filterSubstr = React.useMemo(() => (props.filterValue || "").toLocaleLowerCase(), [props.filterValue])

  const filteredList = React.useMemo(
    () =>
      sortedList.filter(
        ({ address, label }) =>
          address.toLowerCase().includes(filterSubstr) || label.toLocaleLowerCase().includes(filterSubstr)
      ),
    [sortedList, filterSubstr]
  )

  const { t } = useTranslation()

  return (
    <>
      {filteredList.map(({ address, label }) => {
        return (
          <ListItem
            key={`hidden-sender-${address}`}
            button={Boolean(props.onClick) as any}
            onClick={() => {
              return props.onClick(address)
            }}
          >
            <ListItemText
              primary={label || address}
              secondary={
                label ? (
                  <PublicKey
                    publicKey={address}
                    testnet={false}
                    showRaw={true}
                    variant={isSmallScreen ? "short" : "full"}
                  />
                ) : (
                  <PublicKey
                    publicKey={address}
                    testnet={false}
                    showRaw={true}
                    variant={isSmallScreen ? "short" : "full"}
                  />
                )
              }
            />
          </ListItem>
        )
      })}
      {filteredList.length === 0 && (
        <ListItemText
          primary={t("account.hidden-senders.item.no-result.primary")}
          secondary={t("account.hidden-senders.item.no-result.secondary")}
        />
      )}
    </>
  )
})

function HiddenSendersDialog(props: HiddenSendersDialogProps) {
  const { t } = useTranslation()

  const [editingAddress, setEditingAddress] = useState<{ label?: string; address: string } | null>(
    props.address ? { address: props.address, label: "" } : null
  )

  const { hiddenSenders, add, remove } = React.useContext(HiddenSendersContext)

  const openAddAddressDialog = () => {
    setEditingAddress({ address: "", label: "" })
  }

  const closeAddAddressDialog = () => {
    if (props.address) {
      props.onClose()
    }
    setEditingAddress(null)
  }

  const openAddressDetails = (address: string) => {
    const entry = hiddenSenders[address]
    setEditingAddress({ address, label: entry?.label || "" })
  }

  const handleSaveAddress = (address: string, label?: string) => {
    add(address, label)
    closeAddAddressDialog()
  }

  const handleRemoveAddress = (address: string) => {
    remove(address)
    closeAddAddressDialog()
  }

  const [searchFieldValue, setSearchFieldValue] = React.useState("")
  const onSearchFieldChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchFieldValue(event.target.value)
  }, [])

  const handleAddressClick = (address: string) => {
    if (props.onSelect) return props.onSelect(address)
    if (!props.readonly) return openAddressDetails(address)
  }

  return (
    <DialogBody excessWidth={12} top={<MainTitle onBack={props.onClose} title={t("account.hidden-senders.title")} />}>
      <SearchField
        autoFocus
        onChange={onSearchFieldChange}
        value={searchFieldValue}
        placeholder={t("account.hidden-senders.search-field.placeholder")}
      />
      <List style={{ margin: "0 -8px" }}>
        {!props.readonly && (
          <ButtonListItem gutterBottom onClick={openAddAddressDialog}>
            <AddIcon />
            &nbsp;&nbsp;{t("account.hidden-senders.button.add.label")}
          </ButtonListItem>
        )}
        <HiddenSendersList addresses={hiddenSenders} onClick={handleAddressClick} filterValue={searchFieldValue} />
      </List>
      <Dialog
        fullScreen
        open={!!editingAddress}
        onClose={closeAddAddressDialog}
        TransitionComponent={FullscreenDialogTransition}
      >
        <React.Suspense fallback={<ViewLoading />}>
          <HiddenSendersDetailsDialog
            address={editingAddress?.address}
            label={editingAddress?.label}
            onSave={handleSaveAddress}
            onRemove={handleRemoveAddress}
            onClose={closeAddAddressDialog}
          />
        </React.Suspense>
      </Dialog>
    </DialogBody>
  )
}

export default React.memo(HiddenSendersDialog)

