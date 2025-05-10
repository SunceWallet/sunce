import { TextField } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { nanoid } from "nanoid"
import QRCode from "qrcode.react"
import React, { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import MainTitle from "~Generic/components/MainTitle"
import { useClipboard } from "~Generic/hooks/userinterface"
import { isMuxedAddress, isPublicKey, isStellarAddress } from "~Generic/lib/stellar-address"
import { Box } from "~Layout/components/Box"
import DialogBody from "~Layout/components/DialogBody"

export interface SavedAddressDetailsDialogProps {
  address?: string
  label?: string
  onClose: () => void
  onSave: (address: string, label: string) => void
  onRemove: (address: string) => void
}

export interface SavedAddressValues {
  address: string
  label: string
}

const isValidAddress = (value: string) => isPublicKey(value) || isMuxedAddress(value) || isStellarAddress(value)

function SavedAddressDetailsDialog(props: SavedAddressDetailsDialogProps) {
  const { t } = useTranslation()

  const clipboard = useClipboard()
  const copyToClipboard = React.useCallback(() =>
    clipboard.copyToClipboard(props.address || ""), [clipboard, props.address]
  )

  const form = useForm<SavedAddressValues>({
    defaultValues: {
      address: props.address || "",
      label: props.label || ""
    }
  })

  const [qrCodeAddress, setQRCodeAddress] = useState<string | undefined>(props.address)

  const formID = React.useMemo(() => nanoid(), [])

  const handleFormSubmission = useCallback(() => {
    const values = form.getValues()
    if (!values.address) return
    props.onSave(values.address, values.label)
  }, [form, props.onSave])

  const handleFormChange = useCallback(() => {
    console.log(isValidAddress(form.getValues().address))
    if (isValidAddress(form.getValues().address)) {
      setQRCodeAddress(form.getValues().address)
    } else {
      setQRCodeAddress(undefined)
    }
  }, [props.address, form.getValues().address])

  return (
    <DialogBody excessWidth={12} top={<MainTitle onBack={props.onClose} title={props.label} />}>
      <form id={formID} noValidate onChange={handleFormChange} onSubmit={form.handleSubmit(handleFormSubmission)}>
        <TextField
          error={Boolean(form.errors.address)}
          fullWidth
          inputProps={{
            style: { textOverflow: "ellipsis" }
          }}
          inputRef={form.register({
            required: t<string>("account.saved-address-details.validation.no-address"),
            validate: value =>
              isValidAddress(value) ||
              t<string>("account.saved-address-details.validation.invalid-address")
          })}
          label={form.errors.address ? form.errors.address.message : t("account.saved-address-details.address.label")}
          margin="normal"
          name="address"
          onChange={event => form.setValue("address", event.target.value.trim())}
          placeholder={t("account.saved-address-details.address.placeholder")}
        />
        <TextField
          error={Boolean(form.errors.label)}
          fullWidth
          label={form.errors.label ? form.errors.label.message : t("account.saved-address-details.label.label")}
          margin="normal"
          name="label"
          inputRef={form.register({
            validate: {
              length: value =>
                value.length <= 1024 ||
                t<string>("account.saved-address-details.validation.label-too-long", { max: 1024 })
            }
          })}
          onChange={event => {
            form.setValue("label", event.target.value)
          }}
          placeholder={t("account.saved-address-details.label.label")}
        />
        {qrCodeAddress && (
          <Box onClick={copyToClipboard} textAlign="center" width="100%" margin="32px auto" style={{ cursor: "pointer" }}>
            <QRCode value={qrCodeAddress} size={192} />
          </Box>
        )}
        <DialogActionsBox desktopStyle={{ marginTop: 64 }}>
          {props.address && (
            <ActionButton
              icon={<CloseIcon />}
              onClick={() => props.onRemove(props.address || "")}
              style={{ maxWidth: "none" }}
              type="secondary"
            >
              {t("account.saved-address-details.button.remove.label")}
            </ActionButton>
          )}

          <ActionButton form={formID} onClick={() => undefined} type="submit">
            {t("account.saved-address-details.button.add.label")}
          </ActionButton>
        </DialogActionsBox>
      </form>
    </DialogBody>
  )
}

export default React.memo(SavedAddressDetailsDialog)
