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
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { List, ListSubheader, makeStyles } from "@material-ui/core"
import { breakpoints } from "~App/theme"


const useOfferOverviewStyles = makeStyles({
  list: {
    paddingBottom: 0,
  },
  header: {
    padding: "8px 24px 0px 24px",
    lineHeight: 1,
    alignItems: "center",
    display: "flex",
    cursor: "pointer",

    [breakpoints.down(600)]: {
      paddingLeft: 24,
      paddingRight: 24
    }
  }
})

interface Props {
  account: Account
}

function OfferOverview(props: Props) {
  const classes = useOfferOverviewStyles()
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
    <List className={classes.list}>
      <ListSubheader className={classes.header} disableSticky onClick={openTrading}>
        {t("account.transactions.offer-list.title")} ({offerHistory.offers.length}{offerHistory.olderOffersAvailable ? '+' : ''}) <KeyboardArrowRightIcon />
      </ListSubheader>
    </List>
  )
}

export default OfferOverview
