import React from "react"
import { useTranslation } from "react-i18next"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Account } from "~App/contexts/accounts"
import { useLiveAccountOffers } from "~Generic/hooks/stellar-subscriptions"
import { useRouter } from "~Generic/hooks/userinterface"
import * as routes from "~App/routes"
import SwapHorizIcon from "@material-ui/icons/SwapHoriz"
import { List } from "@material-ui/core"



interface Props {
  account: Account
}

function OfferOverview(props: Props) {
  const router = useRouter()
  const offerHistory = useLiveAccountOffers(props.account.accountID, props.account.testnet)
  const { t } = useTranslation()

  console.log(routes.tradeAsset(props.account.id))
  const openTrading = () => {
    router.history.push(routes.tradeAsset(props.account.id))
  }

  if (!offerHistory.offers.length) {
    return null
  }

  return (
    <List>
      <ListItem
        button={true}
        onClick={openTrading}
      >
        <ListItemText primary={t("account.transactions.offer-list.title")} />
      </ListItem>
    </List>
  )
}

export default OfferOverview
