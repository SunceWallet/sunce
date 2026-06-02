import React from "react"
import BigNumber from "big.js"
import { useTranslation } from "react-i18next"
import { Asset, Transaction } from "@stellar/stellar-sdk"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import ButtonBase from "@material-ui/core/ButtonBase"
import InputAdornment from "@material-ui/core/InputAdornment"
import Typography from "@material-ui/core/Typography"
import SwapVertIcon from "@material-ui/icons/SwapVert"
import SyncIcon from "@material-ui/icons/Sync"
import { Account } from "~App/contexts/accounts"
import { trackError } from "~App/contexts/notifications"
import { warningColor } from "~App/theme"
import AssetSelector from "~Generic/components/AssetSelector"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import { PriceInput } from "~Generic/components/FormFields"
import Portal from "~Generic/components/Portal"
import { useHorizon } from "~Generic/hooks/stellar"
import { RefStateObject, useIsMobile } from "~Generic/hooks/userinterface"
import { AccountData } from "~Generic/lib/account"
import { formatBalance } from "~Generic/lib/balances"
import { FormBigNumber, isValidAmount, replaceCommaWithDot } from "~Generic/lib/form"
import {
  findMatchingBalanceLine,
  getAccountMinimumBalance,
  getSpendableBalance,
  stringifyAssetToReadableString
} from "~Generic/lib/stellar"
import { createPathPaymentOperation, createTransaction } from "~Generic/lib/transaction"
import { Box, HorizontalLayout, VerticalLayout } from "~Layout/components/Box"
import {
  fetchSwapQuote,
  getAllowedPriceChangeBound,
  isSwapQuoteStale,
  quoteChangedMaterially,
  SwapQuote,
  SwapSide,
  useSwapQuote
} from "../lib/swap"

const allowedPriceChangeOptions = [0.005, 0.01, 0.02, 0.05]

interface Props {
  account: Account
  accountData: AccountData
  dialogActionsRef: RefStateObject
  initialSourceAsset?: Asset
  sendTransaction: (transaction: Transaction) => void
}

function amountIsPositive(value: string) {
  return isValidAmount(value) && value.length > 0 && FormBigNumber(value).gt(0)
}

function normalizeAmount(value: string) {
  return replaceCommaWithDot(value.replace(/^≈\s*/, ""))
}

function assetCode(asset?: Asset) {
  return asset ? stringifyAssetToReadableString(asset) : ""
}

function formatRate(quote: SwapQuote) {
  if (BigNumber(quote.sourceAmount).eq(0)) return "0"
  return formatBalance(BigNumber(quote.destinationAmount).div(quote.sourceAmount).toString(), { groupThousands: false })
}

function getRouteLabel(quote: SwapQuote) {
  if (quote.path.length === 0) return undefined
  if (quote.path.length <= 2) return quote.path.map(assetCode).join(", ")
  return `${quote.path.length} assets`
}

function getReceivingCapacity(accountData: AccountData, asset: Asset) {
  if (asset.isNative()) return undefined
  const balanceLine = findMatchingBalanceLine(accountData.balances, asset)
  if (!balanceLine || balanceLine.asset_type === "native") return BigNumber(0)
  return BigNumber(balanceLine.limit).minus(balanceLine.balance).minus(balanceLine.buying_liabilities)
}

function SwapForm(props: Props) {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const horizon = useHorizon(props.account.testnet)
  const [sourceAsset, setSourceAsset] = React.useState<Asset | undefined>(props.initialSourceAsset)
  const [destinationAsset, setDestinationAsset] = React.useState<Asset | undefined>()
  const [sourceAmount, setSourceAmount] = React.useState("")
  const [destinationAmount, setDestinationAmount] = React.useState("")
  const [primarySide, setPrimarySide] = React.useState<SwapSide>("source")
  const [allowedPriceChange, setAllowedPriceChange] = React.useState(0.01)
  const [pending, setPending] = React.useState(false)
  const [priceChanged, setPriceChanged] = React.useState(false)

  React.useEffect(() => {
    if (!sourceAsset && props.initialSourceAsset) {
      setSourceAsset(props.initialSourceAsset)
    }
  }, [props.initialSourceAsset, sourceAsset])

  const sourceBalanceLine = React.useMemo(
    () => findMatchingBalanceLine(props.accountData.balances, sourceAsset),
    [props.accountData.balances, sourceAsset]
  )
  const spendableSourceBalance = React.useMemo(
    () => getSpendableBalance(getAccountMinimumBalance(props.accountData), sourceBalanceLine),
    [props.accountData, sourceBalanceLine]
  )

  const primaryAmount = primarySide === "source" ? sourceAmount : destinationAmount
  const primaryAmountIsValid = amountIsPositive(primaryAmount)
  const { quote, status } = useSwapQuote({
    amount: normalizeAmount(primaryAmount),
    amountIsValid: primaryAmountIsValid,
    destinationAsset,
    horizon,
    primarySide,
    sourceAsset
  })

  React.useEffect(() => {
    if (!quote) {
      if (primarySide === "source") {
        setDestinationAmount("")
      } else {
        setSourceAmount("")
      }
      return
    }

    if (quote.mode === "strict-send") {
      setDestinationAmount(quote.destinationAmount)
    } else {
      setSourceAmount(quote.sourceAmount)
    }
  }, [primarySide, quote])

  const validationMessage = React.useMemo(() => {
    if (!sourceAsset) return t<string>("trading.swap.validation.source-asset-missing")
    if (!destinationAsset) return t<string>("trading.swap.validation.destination-asset-missing")
    if (sourceAsset.equals(destinationAsset)) return t<string>("trading.swap.validation.same-asset")
    if (!primaryAmountIsValid) return t<string>("trading.swap.validation.invalid-amount")
    if (quote && FormBigNumber(quote.sourceAmount).gt(spendableSourceBalance)) {
      return t<string>("trading.swap.validation.not-enough-balance", { asset: assetCode(sourceAsset) })
    }
    const receivingCapacity = destinationAsset ? getReceivingCapacity(props.accountData, destinationAsset) : undefined
    if (quote && receivingCapacity && BigNumber(quote.destinationAmount).gt(receivingCapacity)) {
      return t<string>("trading.swap.validation.receiving-capacity-exceeded", { asset: assetCode(destinationAsset) })
    }
    if (!quote && status === "success") return t<string>("trading.swap.validation.no-quote")
    if (quote && status !== "loading" && isSwapQuoteStale(quote)) {
      return t<string>("trading.swap.validation.stale-quote")
    }
    return undefined
  }, [destinationAsset, primaryAmountIsValid, props.accountData, quote, sourceAsset, spendableSourceBalance, status, t])

  const submitLabel = React.useMemo(() => {
    if (!primaryAmountIsValid) return t("trading.swap.action.enter-amount")
    if (status === "loading") return t("trading.swap.action.finding-price")
    return t("trading.swap.action.submit")
  }, [primaryAmountIsValid, status, t])

  const submitDisabled = Boolean(validationMessage || status !== "success" || !quote || pending || priceChanged)
  const assets = props.accountData.balances

  const sourceSelector = (
    <AssetSelector
      assets={assets}
      disableUnderline
      showXLM
      testnet={props.account.testnet}
      value={sourceAsset}
      onChange={(asset) => {
        setSourceAsset(asset)
        setPriceChanged(false)
      }}
      accountId={props.accountData.account_id}
    />
  )
  const destinationSelector = (
    <AssetSelector
      assets={assets}
      disableUnderline
      showXLM
      testnet={props.account.testnet}
      value={destinationAsset}
      onChange={(asset) => {
        setDestinationAsset(asset)
        setPriceChanged(false)
      }}
      accountId={props.accountData.account_id}
    />
  )

  const setMaxSourceAmount = React.useCallback(() => {
    setPrimarySide("source")
    setSourceAmount(spendableSourceBalance.gt(0) ? spendableSourceBalance.toFixed(7) : "0")
    setPriceChanged(false)
  }, [spendableSourceBalance])

  const switchAssets = React.useCallback(() => {
    setSourceAsset(destinationAsset)
    setDestinationAsset(sourceAsset)
    setSourceAmount(destinationAmount)
    setDestinationAmount(sourceAmount)
    setPrimarySide("source")
    setPriceChanged(false)
  }, [destinationAmount, destinationAsset, sourceAmount, sourceAsset])

  const submitForm = React.useCallback(async () => {
    if (!quote || !sourceAsset || !destinationAsset || validationMessage) return

    try {
      setPending(true)
      const freshQuote = isSwapQuoteStale(quote)
        ? await fetchSwapQuote({
            amount: normalizeAmount(primaryAmount),
            destinationAsset,
            horizon,
            primarySide,
            sourceAsset
          })
        : quote

      if (!freshQuote) return
      if (freshQuote !== quote && quoteChangedMaterially(quote, freshQuote)) {
        setPriceChanged(true)
        return
      }

      const bound = getAllowedPriceChangeBound(freshQuote, allowedPriceChange)
      const operation = createPathPaymentOperation({
        mode: freshQuote.mode,
        sourceAsset: freshQuote.sourceAsset,
        sourceAmount: freshQuote.sourceAmount,
        destinationAsset: freshQuote.destinationAsset,
        destinationAmount: freshQuote.destinationAmount,
        destination: props.account.accountID,
        path: freshQuote.path,
        destMin: freshQuote.mode === "strict-send" ? bound : undefined,
        sendMax: freshQuote.mode === "strict-receive" ? bound : undefined
      })
      const tx = await createTransaction([operation], {
        accountData: props.accountData,
        horizon,
        walletAccount: props.account
      })
      props.sendTransaction(tx)
    } catch (error) {
      trackError(error)
    } finally {
      setPending(false)
    }
  }, [
    allowedPriceChange,
    destinationAsset,
    horizon,
    primaryAmount,
    primarySide,
    props,
    quote,
    sourceAsset,
    validationMessage
  ])

  const allowedPriceBound = quote ? getAllowedPriceChangeBound(quote, allowedPriceChange) : undefined
  const routeLabel = quote ? getRouteLabel(quote) : undefined
  const isRefreshingQuote = status === "loading" && Boolean(quote)
  const sourceAmountHelperText = (
    <ButtonBase
      disabled={!sourceAsset}
      onClick={setMaxSourceAmount}
      style={{
        fontSize: "inherit",
        fontWeight: "inherit",
        textAlign: "inherit",
        visibility: sourceAsset ? undefined : "hidden"
      }}
      tabIndex={sourceAsset ? undefined : -1}
    >
      {t("trading.inputs.primary-amount.placeholder", {
        amount: sourceAsset ? `${formatBalance(spendableSourceBalance.toString())} ${assetCode(sourceAsset)}` : "0 XLM"
      })}
    </ButtonBase>
  )

  return (
    <VerticalLayout
      alignItems="stretch"
      alignSelf={isMobile ? undefined : "center"}
      grow={1}
      margin={isMobile ? undefined : "24px 0 0"}
      padding="16px 0"
      width="100%"
    >
      <VerticalLayout alignSelf={isMobile ? "stretch" : "center"} maxWidth={500} padding="0 2px" width="100%">
        <PriceInput
          assetCode={sourceSelector}
          error={Boolean(validationMessage && (!sourceAsset || !primaryAmountIsValid))}
          helperText={sourceAmountHelperText}
          label={
            primarySide === "source" ? t("trading.swap.inputs.source.label") : t("trading.swap.inputs.source.estimated")
          }
          margin="normal"
          onChange={(event) => {
            setPrimarySide("source")
            setSourceAmount(normalizeAmount(event.target.value))
            setPriceChanged(false)
          }}
          onFocus={() => setPrimarySide("source")}
          placeholder="0.00"
          value={sourceAmount}
          InputProps={
            primarySide === "source"
              ? undefined
              : { startAdornment: <InputAdornment position="start">≈</InputAdornment> }
          }
        />
        <HorizontalLayout justifyContent="center" margin="4px 0">
          <Button
            size="small"
            aria-label={t("trading.swap.swap-direction.label")}
            onClick={switchAssets}
            variant="outlined"
          >
            <SwapVertIcon />
          </Button>
        </HorizontalLayout>
        <PriceInput
          assetCode={destinationSelector}
          error={Boolean(validationMessage && !destinationAsset)}
          label={
            primarySide === "destination"
              ? t("trading.swap.inputs.destination.label")
              : t("trading.swap.inputs.destination.estimated")
          }
          margin="normal"
          onChange={(event) => {
            setPrimarySide("destination")
            setDestinationAmount(normalizeAmount(event.target.value))
            setPriceChanged(false)
          }}
          onFocus={() => setPrimarySide("destination")}
          placeholder="0.00"
          value={destinationAmount}
          InputProps={
            primarySide === "destination"
              ? undefined
              : { startAdornment: <InputAdornment position="start">≈</InputAdornment> }
          }
        />

        <Box margin="16px 0 0">
          {status === "loading" && !quote ? <Typography>{t("trading.swap.quote.loading")}</Typography> : null}
          {status === "unavailable" ? <Typography>{t("trading.swap.quote.unavailable")}</Typography> : null}
          {status === "failed" ? <Typography>{t("trading.swap.quote.failed")}</Typography> : null}
          {priceChanged ? <Typography>{t("trading.swap.quote.price-changed")}</Typography> : null}
          {quote ? (
            <Box style={{ position: "relative" }}>
              {isRefreshingQuote ? (
                <Typography
                  variant="caption"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 12,
                    padding: "2px 8px",
                    position: "absolute",
                    right: 0,
                    top: -2,
                    zIndex: 1
                  }}
                >
                  {t("trading.swap.quote.updating")}
                </Typography>
              ) : null}
              <Box style={{ opacity: isRefreshingQuote ? 0.6 : 1 }}>
                <Typography>
                  {t("trading.swap.quote.summary", {
                    sourceAmount: formatBalance(quote.sourceAmount),
                    sourceAsset: assetCode(quote.sourceAsset),
                    destinationAmount: formatBalance(quote.destinationAmount),
                    destinationAsset: assetCode(quote.destinationAsset)
                  })}
                </Typography>
                <Typography variant="body2">
                  {t("trading.swap.quote.rate", {
                    sourceAsset: assetCode(quote.sourceAsset),
                    rate: formatRate(quote),
                    destinationAsset: assetCode(quote.destinationAsset)
                  })}
                </Typography>
                {routeLabel ? (
                  <Typography variant="body2">{t("trading.swap.quote.route", { route: routeLabel })}</Typography>
                ) : null}
              </Box>
            </Box>
          ) : null}
          {validationMessage ? <Typography color="error">{validationMessage}</Typography> : null}
        </Box>

        <Box margin="24px 0 0">
          <Typography variant="body2">{t("trading.swap.allowed-price-change.label")}</Typography>
          <ButtonGroup size="small" style={{ marginTop: 8 }}>
            {allowedPriceChangeOptions.map((option) => (
              <Button
                color={option === allowedPriceChange ? "primary" : undefined}
                key={option}
                onClick={() => setAllowedPriceChange(option)}
                variant={option === allowedPriceChange ? "contained" : "outlined"}
              >
                {(option * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%
              </Button>
            ))}
          </ButtonGroup>
          <Typography variant="body2" style={{ marginTop: 8 }}>
            {t("trading.swap.allowed-price-change.helper")}
          </Typography>
          {allowedPriceBound && quote ? (
            <Typography variant="body2" style={{ marginTop: 8 }}>
              {quote.mode === "strict-send"
                ? t("trading.swap.allowed-price-change.minimum-received", {
                    amount: formatBalance(allowedPriceBound),
                    asset: assetCode(quote.destinationAsset)
                  })
                : t("trading.swap.allowed-price-change.maximum-paid", {
                    amount: formatBalance(allowedPriceBound),
                    asset: assetCode(quote.sourceAsset)
                  })}
            </Typography>
          ) : null}
          {allowedPriceChange === 0.05 ? (
            <Box margin="8px 0 0" padding="8px 12px" style={{ background: warningColor }}>
              {t("trading.swap.allowed-price-change.high-warning")}
            </Box>
          ) : null}
        </Box>
        <Portal target={props.dialogActionsRef.element}>
          <DialogActionsBox desktopStyle={{ marginTop: 32 }}>
            <ActionButton
              disabled={submitDisabled}
              loading={pending}
              icon={<SyncIcon />}
              onClick={submitForm}
              type="primary"
            >
              {submitLabel}
            </ActionButton>
          </DialogActionsBox>
        </Portal>
      </VerticalLayout>
    </VerticalLayout>
  )
}

export default React.memo(SwapForm)
