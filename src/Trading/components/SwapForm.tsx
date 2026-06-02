import React from "react"
import BigNumber from "big.js"
import { useTranslation } from "react-i18next"
import { Asset, Transaction } from "@stellar/stellar-sdk"
import Button from "@material-ui/core/Button"
import ButtonBase from "@material-ui/core/ButtonBase"
import InputAdornment from "@material-ui/core/InputAdornment"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
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

function getReceivingCapacity(accountData: AccountData, asset: Asset) {
  if (asset.isNative()) return undefined
  const balanceLine = findMatchingBalanceLine(accountData.balances, asset)
  if (!balanceLine || balanceLine.asset_type === "native") return BigNumber(0)
  return BigNumber(balanceLine.limit).minus(balanceLine.balance).minus(balanceLine.buying_liabilities)
}

function keepAmountAssetTogether(text: string, pairs: [string, string][]) {
  return pairs.reduce(
    (nextText, [amount, asset]) => nextText.split(`${amount} ${asset}`).join(`${amount}\u00a0${asset}`),
    text
  )
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
  const [allowedPriceChangeMenuAnchor, setAllowedPriceChangeMenuAnchor] = React.useState<HTMLElement | null>(null)
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
  const primaryAmountWasEntered = primaryAmount.length > 0
  const primaryAmountInvalid = primaryAmountWasEntered && !primaryAmountIsValid
  const sameAssetSelected = Boolean(sourceAsset && destinationAsset && sourceAsset.equals(destinationAsset))
  const formComplete = Boolean(sourceAsset && destinationAsset && primaryAmountIsValid)
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

  const invalidAmountError = primaryAmountInvalid ? t<string>("trading.swap.validation.invalid-amount") : undefined
  const sourceAmountForBalanceCheck =
    primarySide === "source" && primaryAmountIsValid ? sourceAmount : quote?.sourceAmount
  const sourceAmountExceedsBalance = Boolean(
    sourceAsset && sourceAmountForBalanceCheck && FormBigNumber(sourceAmountForBalanceCheck).gt(spendableSourceBalance)
  )
  const sourceAmountError =
    primarySide === "source" && invalidAmountError
      ? invalidAmountError
      : sourceAmountExceedsBalance
        ? t<string>("trading.swap.validation.not-enough-balance", { asset: assetCode(sourceAsset) })
        : undefined
  const destinationAmountError = primarySide === "destination" ? invalidAmountError : undefined
  const swapConstraintError = React.useMemo(() => {
    const receivingCapacity = destinationAsset ? getReceivingCapacity(props.accountData, destinationAsset) : undefined
    if (quote && receivingCapacity && BigNumber(quote.destinationAmount).gt(receivingCapacity)) {
      return t<string>("trading.swap.validation.receiving-capacity-exceeded", { asset: assetCode(destinationAsset) })
    }
    return undefined
  }, [destinationAsset, props.accountData, quote, t])
  const formError = Boolean(sameAssetSelected || sourceAmountError || destinationAmountError || swapConstraintError)

  const submitDisabled = Boolean(
    !formComplete || formError || status !== "success" || !quote || isSwapQuoteStale(quote) || pending || priceChanged
  )
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
    if (!quote || !sourceAsset || !destinationAsset || formError) return

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
  }, [allowedPriceChange, destinationAsset, horizon, primaryAmount, primarySide, props, quote, sourceAsset, formError])

  const allowedPriceBound = quote ? getAllowedPriceChangeBound(quote, allowedPriceChange) : undefined
  const quoteSummary =
    quote && allowedPriceBound
      ? keepAmountAssetTogether(
          quote.mode === "strict-send"
            ? t<string>("trading.swap.quote.summary-strict-send", {
                sourceAmount: formatBalance(quote.sourceAmount),
                sourceAsset: assetCode(quote.sourceAsset),
                destinationAmount: formatBalance(quote.destinationAmount),
                destinationAsset: assetCode(quote.destinationAsset),
                minReceived: formatBalance(allowedPriceBound)
              })
            : t<string>("trading.swap.quote.summary-strict-receive", {
                sourceAmount: formatBalance(quote.sourceAmount),
                sourceAsset: assetCode(quote.sourceAsset),
                maxSend: formatBalance(allowedPriceBound),
                destinationAmount: formatBalance(quote.destinationAmount),
                destinationAsset: assetCode(quote.destinationAsset)
              }),
          [
            [formatBalance(quote.sourceAmount), assetCode(quote.sourceAsset)],
            [formatBalance(quote.destinationAmount), assetCode(quote.destinationAsset)],
            [
              formatBalance(allowedPriceBound),
              quote.mode === "strict-send" ? assetCode(quote.destinationAsset) : assetCode(quote.sourceAsset)
            ]
          ]
        )
      : undefined
  const quoteHelper = swapConstraintError
    ? swapConstraintError
    : priceChanged
      ? t("trading.swap.quote.price-changed")
      : status === "loading" && !quote
        ? t("trading.swap.quote.loading")
        : status === "loading" && quote
          ? t("trading.swap.quote.updating")
          : status === "unavailable"
            ? t("trading.swap.quote.unavailable")
            : status === "failed"
              ? t("trading.swap.quote.failed")
              : quote
                ? keepAmountAssetTogether(
                    t<string>("trading.swap.quote.rate", {
                      sourceAsset: assetCode(quote.sourceAsset),
                      rate: formatRate(quote),
                      destinationAsset: assetCode(quote.destinationAsset)
                    }),
                    [
                      ["1", assetCode(quote.sourceAsset)],
                      [formatRate(quote), assetCode(quote.destinationAsset)]
                    ]
                  )
                : undefined
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
  const allowedPriceChangeLabel = `${(allowedPriceChange * 100).toLocaleString(undefined, {
    maximumFractionDigits: 1
  })}%`

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
          error={Boolean(sourceAmountError)}
          helperText={sourceAmountHelperText}
          label={
            sourceAmountError ||
            (primarySide === "source"
              ? t("trading.swap.inputs.source.label")
              : t("trading.swap.inputs.source.estimated"))
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
          <Button size="small" aria-label={t("trading.swap.swap-direction.label")} onClick={switchAssets}>
            <SwapVertIcon />
          </Button>
        </HorizontalLayout>
        <PriceInput
          assetCode={destinationSelector}
          error={Boolean(destinationAmountError)}
          label={
            destinationAmountError ||
            (primarySide === "destination"
              ? t("trading.swap.inputs.destination.label")
              : t("trading.swap.inputs.destination.estimated"))
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
          <Typography
            color={swapConstraintError ? "error" : undefined}
            variant="body2"
            style={{ visibility: quoteHelper ? undefined : "hidden" }}
          >
            {quoteHelper || t("trading.swap.quote.loading")}
          </Typography>
        </Box>

        <Box margin="24px 0 0">
          <Typography variant="body2">
            {t("trading.swap.allowed-price-change.label")}:{" "}
            <ButtonBase
              onClick={(event) => setAllowedPriceChangeMenuAnchor(event.currentTarget)}
              style={{ color: "inherit", fontSize: "inherit", fontWeight: 600, textDecoration: "underline" }}
            >
              {allowedPriceChangeLabel}
            </ButtonBase>
          </Typography>
          <Menu
            anchorEl={allowedPriceChangeMenuAnchor}
            open={Boolean(allowedPriceChangeMenuAnchor)}
            onClose={() => setAllowedPriceChangeMenuAnchor(null)}
          >
            {allowedPriceChangeOptions.map((option) => (
              <MenuItem
                key={option}
                selected={option === allowedPriceChange}
                onClick={() => {
                  setAllowedPriceChange(option)
                  setAllowedPriceChangeMenuAnchor(null)
                }}
              >
                {(option * 100).toLocaleString(undefined, { maximumFractionDigits: 1 })}%
              </MenuItem>
            ))}
            <MenuItem disabled style={{ whiteSpace: "normal", maxWidth: isMobile ? undefined : 280 }}>
              {t<string>("trading.swap.allowed-price-change.helper")}
            </MenuItem>
          </Menu>
          {allowedPriceChange === 0.05 ? (
            <Box margin="8px 0 0" padding="8px 12px" style={{ background: warningColor }}>
              {t("trading.swap.allowed-price-change.high-warning")}
            </Box>
          ) : null}
        </Box>
        <Portal target={props.dialogActionsRef.element}>
          <DialogActionsBox
            expandedHeight
            desktopStyle={{ alignItems: "center", justifyContent: "center", marginTop: 0 }}
          >
            {isMobile ? (
              <VerticalLayout alignItems="center" width="100%">
                <Typography align="center" variant="body2" style={{ visibility: quoteSummary ? undefined : "hidden" }}>
                  {quoteSummary ||
                    t("trading.swap.quote.summary-strict-send", {
                      sourceAmount: "-",
                      sourceAsset: "-",
                      destinationAmount: "-",
                      destinationAsset: "-",
                      minReceived: "-"
                    })}
                </Typography>
                <ActionButton
                  disabled={submitDisabled}
                  loading={pending}
                  icon={<SyncIcon />}
                  onClick={submitForm}
                  type="primary"
                >
                  {t("trading.swap.action.submit")}
                </ActionButton>
              </VerticalLayout>
            ) : (
              <HorizontalLayout
                alignItems="center"
                justifyContent="space-between"
                style={{ maxWidth: 500 }}
                width="100%"
              >
                <VerticalLayout grow={1} padding="0 24px 0 0" style={{ minWidth: 0 }}>
                  <Typography variant="body2" style={{ visibility: quoteSummary ? undefined : "hidden" }}>
                    {quoteSummary ||
                      t("trading.swap.quote.summary-strict-send", {
                        sourceAmount: "-",
                        sourceAsset: "-",
                        destinationAmount: "-",
                        destinationAsset: "-",
                        minReceived: "-"
                      })}
                  </Typography>
                </VerticalLayout>
                <ActionButton
                  disabled={submitDisabled}
                  loading={pending}
                  icon={<SyncIcon />}
                  onClick={submitForm}
                  style={{ flexShrink: 0 }}
                  type="primary"
                >
                  {t("trading.swap.action.submit")}
                </ActionButton>
              </HorizontalLayout>
            )}
          </DialogActionsBox>
        </Portal>
      </VerticalLayout>
    </VerticalLayout>
  )
}

export default React.memo(SwapForm)
