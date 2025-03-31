import BigNumber from "big.js"
import React from "react"
import { useTranslation } from "react-i18next"
import { Asset, Horizon } from "@stellar/stellar-sdk"
import Dialog from "@material-ui/core/Dialog"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from "@material-ui/icons/Add"
import EditIcon from "@material-ui/icons/Edit"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import { Account } from "~App/contexts/accounts"
import * as routes from "~App/routes"
import { FullscreenDialogTransition } from "~App/theme"
import ButtonListItem from "~Generic/components/ButtonListItem"
import MainTitle from "~Generic/components/MainTitle"
import ViewLoading from "~Generic/components/ViewLoading"
import { useLiveAccountData, useLiveAccountOffers } from "~Generic/hooks/stellar-subscriptions"
import { useIsMobile, useRouter } from "~Generic/hooks/userinterface"
import { AccountData, BalanceLine } from "~Generic/lib/account"
import { sortBalances } from "~Generic/lib/balances"
import { matchesRoute } from "~Generic/lib/routes"
import { getAccountMinimumBalance, getSpendableBalance, stringifyAsset } from "~Generic/lib/stellar"
import DialogBody from "~Layout/components/DialogBody"
import AddAssetDialog from "./AddAssetDialog"
import BalanceDetailsListItem from "./BalanceDetailsListItem"
import { useAssetVisibility } from "~Generic/hooks/useAssetVisibility"

function isAssetMatchingBalance(asset: Asset, balance: BalanceLine): boolean {
  return balance.asset_type === "native"
    ? asset.isNative()
    : balance.asset_code === asset.getCode() && balance.asset_issuer === asset.getIssuer()
}

interface TrustedAssetsProps {
  account: Account
  accountData: AccountData
  assets: Asset[]
  hmargin: string | number
  hpadding: string | number
  onOpenAssetDetails: (asset: Asset) => void
  openOffers: Horizon.ServerApi.OfferRecord[]
  olderOffersAvailable?: boolean
  isEditMode: boolean
  assetVisibilityModes: Record<string, "default" | "favorite" | "hidden">
  onToggleAssetVisibility: (asset: Asset) => void
}

const TrustedAssets = React.memo(function TrustedAssets(props: TrustedAssetsProps) {
  return (
    <>
      {props.assets.map(asset => {
        const balance = props.accountData.balances.find(bal => isAssetMatchingBalance(asset, bal))
        const openOffers = props.openOffers.filter(
          offer =>
            (offer.buying.asset_code === asset.code && offer.buying.asset_issuer === asset.issuer) ||
            (offer.selling.asset_code === asset.code && offer.selling.asset_issuer === asset.issuer)
        )
        const badgeCount = props.olderOffersAvailable && openOffers.length >= 10 ? "10+" : openOffers.length
        const visibilityMode = props.assetVisibilityModes[stringifyAsset(asset)] || "default"
        
        return (
          <BalanceDetailsListItem
            key={stringifyAsset(asset)}
            badgeCount={badgeCount}
            balance={balance!}
            onClick={() => props.onOpenAssetDetails(asset)}
            style={{
              paddingLeft: props.hpadding,
              paddingRight: props.hpadding,
              marginLeft: props.hmargin,
              marginRight: props.hmargin
            }}
            testnet={props.account.testnet}
            isOwnAsset={props.account.accountID === asset.getIssuer()}
            isEditMode={props.isEditMode}
            visibilityMode={visibilityMode}
            onToggleVisibility={() => props.onToggleAssetVisibility(asset)}
          />
        )
      })}
    </>
  )
})

interface NativeBalanceItemsProps {
  account: Account
  accountData: AccountData
  balance: Horizon.HorizonApi.BalanceLineNative
  hmargin: string | number
  hpadding: string | number
  onOpenAssetDetails: (asset: Asset) => void
}

const NativeBalanceItems = React.memo(function NativeBalanceItems(props: NativeBalanceItemsProps) {
  return (
    <>
      <BalanceDetailsListItem
        key="XLM"
        balance={props.balance}
        onClick={() => props.onOpenAssetDetails(Asset.native())}
        style={{
          paddingLeft: props.hpadding,
          paddingRight: props.hpadding,
          marginLeft: props.hmargin,
          marginRight: props.hmargin
        }}
        testnet={props.account.testnet}
      />
      <BalanceDetailsListItem
        key="XLM:spendable"
        balance={{
          ...props.balance,
          balance: BigNumber(props.balance.balance).eq(0)
            ? "0"
            : getSpendableBalance(getAccountMinimumBalance(props.accountData), props.balance).toString()
        }}
        hideLogo
        onClick={() => props.onOpenAssetDetails(Asset.native())}
        spendableBalance
        style={{
          marginTop: -8,
          paddingLeft: props.hpadding,
          paddingRight: props.hpadding,
          marginLeft: props.hmargin,
          marginRight: props.hmargin
        }}
        testnet={props.account.testnet}
      />
    </>
  )
})

interface BalanceDetailsProps {
  account: Account
  onClose: () => void
}

function BalanceDetailsDialog(props: BalanceDetailsProps) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet)
  const { offers: openOrders, olderOffersAvailable } = useLiveAccountOffers(
    props.account.accountID,
    props.account.testnet
  )
  const isSmallScreen = useIsMobile()
  const router = useRouter()
  const { t } = useTranslation()
  const [isEditMode, setIsEditMode] = React.useState(false)
  const { visibilityModes, toggleVisibilityMode } = useAssetVisibility(props.account.accountID)

  // Sort assets by visibility mode and balance
  const sortAssetsByVisibility = React.useCallback((assets: Asset[]) => {
    // Filter assets by visibility mode
    const favoriteAssets = assets.filter(asset => visibilityModes[stringifyAsset(asset)] === "favorite")
    const defaultAssets = assets.filter(asset => visibilityModes[stringifyAsset(asset)] === "default" || visibilityModes[stringifyAsset(asset)] === undefined)
    const hiddenAssets = assets.filter(asset => visibilityModes[stringifyAsset(asset)] === "hidden")

    return [...favoriteAssets, ...defaultAssets, ...hiddenAssets]
  }, [visibilityModes])

  // Get sorted assets
  const trustedAssets = React.useMemo(() => {
    const assets = sortBalances(accountData.balances)
      .filter((balance): balance is Horizon.HorizonApi.BalanceLineAsset => balance.asset_type !== "native")
      .map(balance => new Asset(balance.asset_code, balance.asset_issuer))
    return sortAssetsByVisibility(assets)
  }, [accountData.balances, sortAssetsByVisibility])

  const openAddAssetDialog = React.useCallback(
    () => router.history.push(routes.manageAccountAssets(props.account.id)),
    [props.account.id, router.history]
  )
  const closeAddAssetDialog = React.useCallback(() => router.history.push(routes.balanceDetails(props.account.id)), [
    props.account.id,
    router.history
  ])

  const addAssetDialogOpen = matchesRoute(router.location.pathname, routes.manageAccountAssets(props.account.id))
  const assetDetailsDialogOpen =
    matchesRoute(router.location.pathname, routes.assetDetails("*", "*")) &&
    !matchesRoute(router.location.pathname, routes.assetDetails("*", "manage"))

  const openAssetDetails = (asset: Asset) =>
    router.history.push(routes.assetDetails(props.account.id, stringifyAsset(asset)))

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const nativeBalance = accountData.balances.find(
    (balance): balance is Horizon.HorizonApi.BalanceLineNative => balance.asset_type === "native"
  )

  const hpadding = isSmallScreen ? 0 : 8
  const itemHPadding = 16
  const itemHMargin = 0

  return (
    <DialogBody 
      excessWidth={12} 
      top={
        <MainTitle 
          onBack={props.onClose} 
          title={props.account.name}
          actions={
            <IconButton onClick={toggleEditMode} color={isEditMode ? "primary" : "default"}>
              <EditIcon />
            </IconButton>
          }
        />
      }
    >
      <List style={{ paddingLeft: hpadding, paddingRight: hpadding, margin: "0 -8px" }}>
        <ButtonListItem
          gutterBottom
          onClick={openAddAssetDialog}
          style={{
            padding: `0 ${itemHPadding}px`,
            marginLeft: itemHMargin,
            marginRight: itemHMargin
          }}
        >
          <AddIcon />
          &nbsp;&nbsp;{t("account.balance-details.button.add-asset.label")}
        </ButtonListItem>
        <TrustedAssets
          account={props.account}
          accountData={accountData}
          assets={trustedAssets}
          hmargin={itemHMargin}
          hpadding={itemHPadding}
          onOpenAssetDetails={openAssetDetails}
          openOffers={openOrders}
          olderOffersAvailable={olderOffersAvailable}
          isEditMode={isEditMode}
          assetVisibilityModes={visibilityModes}
          onToggleAssetVisibility={toggleVisibilityMode}
        />
      </List>
      <Divider style={{ margin: "16px 0" }} />
      <List style={{ paddingLeft: hpadding, paddingRight: hpadding, margin: "0 -8px 8px" }}>
        {nativeBalance ? (
          <NativeBalanceItems
            account={props.account}
            accountData={accountData}
            balance={nativeBalance}
            hmargin={itemHMargin}
            hpadding={itemHPadding}
            onOpenAssetDetails={openAssetDetails}
          />
        ) : null}
      </List>
      <Dialog
        fullScreen
        open={addAssetDialogOpen || assetDetailsDialogOpen}
        onClose={closeAddAssetDialog}
        TransitionComponent={FullscreenDialogTransition}
      >
        <React.Suspense fallback={<ViewLoading />}>
          <AddAssetDialog
            account={props.account}
            accountData={accountData}
            hpadding={hpadding}
            itemHPadding={itemHPadding}
            onClose={closeAddAssetDialog}
          />
        </React.Suspense>
      </Dialog>
    </DialogBody>
  )
}

export default React.memo(BalanceDetailsDialog)
