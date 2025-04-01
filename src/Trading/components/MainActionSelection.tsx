import React from "react"
import { useTranslation } from "react-i18next"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import MainSelectionButton from "~Generic/components/MainSelectionButton"
import { HorizontalLayout } from "~Layout/components/Box"
import OfferList from "~Account/components/OfferList"
import { Account } from "~App/contexts/accounts"

interface Props {
  account: Account
  onSelectBuy: () => void
  onSelectSell: () => void
  style?: React.CSSProperties
}

const MainActionSelection = React.forwardRef(function MainActionSelection(
  props: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const { t } = useTranslation()

  return (<div style={{ margin: "48px 0 24px", padding: "0 8px" }}>
    <HorizontalLayout ref={ref} justifyContent="space-evenly" wrap="wrap">
      <MainSelectionButton
        label={t("trading.action-selection.buy.label")}
        description={t("trading.action-selection.buy.description")}
        gutterBottom
        onClick={props.onSelectBuy}
        Icon={AddIcon}
      />
      <MainSelectionButton
        label={t("trading.action-selection.sell.label")}
        description={t("trading.action-selection.sell.description")}
        gutterBottom
        onClick={props.onSelectSell}
        Icon={RemoveIcon}
      />
    </HorizontalLayout>
    <OfferList account={props.account} title={t("account.transactions.offer-list.title")} />
  </div>)
})

export default React.memo(MainActionSelection)
