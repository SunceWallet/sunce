import React from "react"
import { useTranslation } from "react-i18next"
import { Account } from "~/src/App/contexts/accounts"
import MainTitle from "~/src/Generic/components/MainTitle"
import DialogBody from "~/src/Layout/components/DialogBody"
import LumenPurchaseOptions from "./LumenPurchaseOptions"

interface Props {
  account: Account
  onClose: () => void
}

function LumenPurchaseDialog(props: Props) {
  const { t } = useTranslation()
  return (
    <DialogBody top={<MainTitle onBack={props.onClose} title={t("account.purchase-lumens.title")} />}>
      <LumenPurchaseOptions account={props.account} onCloseDialog={props.onClose} />
    </DialogBody>
  )
}

export default React.memo(LumenPurchaseDialog)
