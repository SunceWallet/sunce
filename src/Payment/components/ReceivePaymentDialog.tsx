import { Asset } from "@stellar/stellar-sdk"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import QRCode from "qrcode.react"
import { makeStyles } from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { PayStellarUri } from "@suncewallet/stellar-uri"
import React from "react"
import { useTranslation } from "react-i18next"
import { Account } from "~App/contexts/accounts"
import { brandColor } from "~App/theme"
import AssetSelector from "~Generic/components/AssetSelector"
import { Address } from "~Generic/components/PublicKey"
import { useReceivePaymentSettings } from "~Generic/hooks/useReceivePaymentSettings"
import { useLiveAccountData } from "~Generic/hooks/stellar-subscriptions"
import { useClipboard, useIsMobile } from "~Generic/hooks/userinterface"
import { isValidAmount, replaceCommaWithDot } from "~Generic/lib/form"
import { stringifyAsset } from "~Generic/lib/stellar"
import { Box } from "~Layout/components/Box"
import DialogBody from "~Layout/components/DialogBody"
import MainTitle from "~Generic/components/MainTitle"
import { useReceivePaymentAsset } from "~Payment/hooks/useReceivePaymentAsset"

interface Props {
  account: Account
  onClose: () => void
}

const useStyles = makeStyles({
  advancedModeSwitchBase: {
    "&$advancedModeChecked + $advancedModeTrack": {
      backgroundColor: brandColor.main,
      opacity: 1
    }
  },
  advancedModeChecked: {},
  advancedModeTrack: {
    opacity: 1
  }
})

function buildReceivePaymentUri(
  destination: string,
  asset: Asset,
  amount: string,
  description: string,
  testnet: boolean
) {
  const payUri = PayStellarUri.forDestination(destination)

  if (testnet) {
    payUri.useTestNetwork()
  }

  if (!asset.isNative()) {
    payUri.assetCode = asset.getCode()
    payUri.assetIssuer = asset.getIssuer()
  }

  const normalizedDescription = description.trim()
  if (normalizedDescription) {
    payUri.memoType = "text"
    payUri.memo = normalizedDescription
  }

  const url = new URL(payUri.toString())
  const normalizedAmount = replaceCommaWithDot(amount).trim()
  if (normalizedAmount && isValidAmount(normalizedAmount)) {
    // Work around a bug in this package version where `amount=` writes into `destination`.
    url.searchParams.set("amount", normalizedAmount)
  }

  return url.toString()
}

function buildReceivePaymentWebLink(stellarUri: string) {
  const { search } = new URL(stellarUri)
  return `https://pay.sunce.app/${search || ""}`
}

function ReceivePaymentDialog(props: Props) {
  const classes = useStyles()
  const isSmallScreen = useIsMobile()
  const clipboard = useClipboard()
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet)
  const { receivePaymentSettings, setReceivePaymentSettings } = useReceivePaymentSettings(props.account.id)
  const { t } = useTranslation()

  const { advancedMode, amount, description, assetId: selectedAssetId = "" } = receivePaymentSettings
  const { resolvedAssetId, selectedAsset } = useReceivePaymentAsset({
    accountId: props.account.accountID,
    balances: accountData.balances,
    selectedAssetId
  })

  const qrValue = React.useMemo(
    () =>
      advancedMode
        ? buildReceivePaymentUri(props.account.accountID, selectedAsset, amount, description, props.account.testnet)
        : props.account.accountID,
    [advancedMode, amount, description, props.account.accountID, props.account.testnet, selectedAsset]
  )
  const webLink = React.useMemo(() => (advancedMode ? buildReceivePaymentWebLink(qrValue) : null), [advancedMode, qrValue])

  const copyAddressToClipboard = React.useCallback(() => clipboard.copyToClipboard(props.account.accountID), [
    clipboard,
    props.account.accountID
  ])
  const copyQrToClipboard = React.useCallback(() => clipboard.copyToClipboard(qrValue), [clipboard, qrValue])
  const copyWebLinkToClipboard = React.useCallback(() => {
    if (webLink) {
      clipboard.copyToClipboard(webLink)
    }
  }, [clipboard, webLink])

  React.useEffect(() => {
    if (!resolvedAssetId || resolvedAssetId === selectedAssetId) {
      return
    }

    setReceivePaymentSettings({
      ...receivePaymentSettings,
      assetId: resolvedAssetId
    })
  }, [receivePaymentSettings, resolvedAssetId, selectedAssetId, setReceivePaymentSettings])

  return (
    <DialogBody top={<MainTitle onBack={props.onClose} title={t("payment.title.receive")} />}>
      <Box width="100%" margin="16px auto">
        <Box
          margin="0 auto 12px"
          onClick={copyAddressToClipboard}
          style={{ cursor: "pointer", maxWidth: isSmallScreen ? 240 : 320 }}
        >
          <Typography align="center">
            {t("account-settings.export-key.info.tap-to-copy")}:
          </Typography>
          <Typography align="center" component="p" role="button" style={{ cursor: "pointer" }} variant="subtitle1">
            <b>
              <Address address={props.account.accountID} showRaw testnet={props.account.testnet} variant="short" />
            </b>
          </Typography>
        </Box>
        <Box onClick={copyQrToClipboard} margin="0 auto" style={{ cursor: "pointer", textAlign: "center" }}>
          <QRCode size={isSmallScreen ? 192 : 256} value={qrValue} />
        </Box>
        <Box margin="12px auto 0" style={{ display: "flex", justifyContent: "center" }}>
          <FormControlLabel
            control={
              <Switch
                checked={advancedMode}
                classes={{
                  switchBase: classes.advancedModeSwitchBase,
                  checked: classes.advancedModeChecked,
                  track: classes.advancedModeTrack
                }}
                color="secondary"
                onChange={() =>
                  setReceivePaymentSettings({
                    ...receivePaymentSettings,
                    advancedMode: !advancedMode
                  })
                }
              />
            }
            label={t("payment.receive-form.request-payment")}
            style={{ marginRight: 0 }}
          />
        </Box>
        {advancedMode ? (
          <Box margin="8px auto 0" style={{ maxWidth: isSmallScreen ? 320 : 360 }}>
            <AssetSelector
              assets={accountData.balances}
              label={t("payment.receive-form.inputs.asset.label")}
              margin="normal"
              onChange={(asset) =>
                setReceivePaymentSettings({
                  ...receivePaymentSettings,
                  assetId: stringifyAsset(asset)
                })
              }
              showXLM
              style={{ width: "100%" }}
              testnet={props.account.testnet}
              value={selectedAsset}
              accountId={props.account.accountID}
            />
            <TextField
              fullWidth
              inputProps={{
                inputMode: "decimal",
                pattern: "^[0-9]*(.[0-9]+)?$"
              }}
              label={t("payment.inputs.price.label")}
              margin="normal"
              onChange={(event) =>
                setReceivePaymentSettings({
                  ...receivePaymentSettings,
                  amount: replaceCommaWithDot(event.target.value)
                })
              }
              value={amount}
            />
            <TextField
              fullWidth
              inputProps={{ maxLength: 28 }}
              label={t("payment.receive-form.inputs.description.label")}
              margin="normal"
              onChange={(event) =>
                setReceivePaymentSettings({
                  ...receivePaymentSettings,
                  description: event.target.value
                })
              }
              value={description}
            />
            <Typography
              align="center"
              component="p"
              onClick={copyWebLinkToClipboard}
              role="button"
              style={{
                cursor: "pointer",
                marginTop: 20,
                wordBreak: "break-all"
              }}
              variant="body2"
            >
              {t("payment.receive-form.web-link.label")}{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationStyle: "dotted",
                  textUnderlineOffset: 3
                }}
              >
                https://pay.sunce.app/...
              </span>
            </Typography>
          </Box>
        ) : null}
      </Box>
    </DialogBody>
  )
}

export default React.memo(ReceivePaymentDialog)
