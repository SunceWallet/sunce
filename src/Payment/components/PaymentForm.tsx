import { Box } from "@material-ui/core"
import ButtonBase from "@material-ui/core/ButtonBase"
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "@material-ui/core/TextField"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import CloseIcon from "@material-ui/icons/Close"
import SendIcon from "@material-ui/icons/Send"
import { isStellarUri, parseStellarUri, PayStellarUri, StellarUriType } from "@suncewallet/stellar-uri"
import BigNumber from "big.js"
import { nanoid } from "nanoid"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Asset, Memo, MemoType, Horizon, Transaction } from "@stellar/stellar-sdk"
import { Account } from "~App/contexts/accounts"
import { DialogsContext } from "~App/contexts/dialogs"
import { useSavedAddressesSyncOnMount } from "~App/contexts/savedAddresses"
import { warningColor } from "~App/theme"
import AssetSelector from "~Generic/components/AssetSelector"
import { ActionButton, DialogActionsBox } from "~Generic/components/DialogActions"
import { PriceInput, QRReader } from "~Generic/components/FormFields"
import Portal from "~Generic/components/Portal"
import { useFederationLookup } from "~Generic/hooks/stellar"
import { AccountRecord, useWellKnownAccounts } from "~Generic/hooks/stellar-ecosystem"
import { RefStateObject, useIsMobile } from "~Generic/hooks/userinterface"
import { AccountData } from "~Generic/lib/account"
import { formatBalance } from "~Generic/lib/balances"
import { CustomError } from "~Generic/lib/errors"
import { FormBigNumber, isValidAmount, replaceCommaWithDot } from "~Generic/lib/form"
import { MultisigTransactionResponse, MultisigTransactionStatus } from "~Generic/lib/multisig-service"
import { findMatchingBalanceLine, getAccountMinimumBalance, getSpendableBalance } from "~Generic/lib/stellar"
import { isMuxedAddress, isPublicKey, isStellarAddress } from "~Generic/lib/stellar-address"
import { createPaymentOperation, createTransaction, multisigMinimumFee } from "~Generic/lib/transaction"
import { HorizontalLayout } from "~Layout/components/Box"
import { createPaymentMemo, getPaymentMemoType, getPaymentRequestAsset } from "../lib/payment-request"

export interface PaymentParams {
  amount?: string
  asset?: Asset
  destination?: string
  memo?: string
  memoType?: MemoType
  payStellarUri?: PayStellarUri
}

export interface PaymentFormValues {
  amount: string
  asset: Asset
  destination: string
  memoValue: string
}

type ExtendedPaymentFormValues = PaymentFormValues & { memoType: string }

interface PaymentFormProps {
  accountData: AccountData
  actionsRef: RefStateObject
  onCancel?: () => void
  onSubmit: (
    formValues: ExtendedPaymentFormValues,
    spendableBalance: BigNumber,
    wellknownAccount?: AccountRecord
  ) => void
  preselectedParams?: PaymentParams
  canChangePreselectedParams?: boolean
  testnet: boolean
  trustedAssets: Asset[]
  txCreationPending?: boolean
}

const PaymentForm = React.memo(function PaymentForm(props: PaymentFormProps) {
  const isSmallScreen = useIsMobile()
  const formID = React.useMemo(() => nanoid(), [])
  const { t } = useTranslation()
  const wellknownAccounts = useWellKnownAccounts(props.testnet)
  useSavedAddressesSyncOnMount()

  const [requestedMemo, setRequestedMemo] = React.useState<{ destination: string; type: string }>()
  const form = useForm<PaymentFormValues>({
    defaultValues: {
      amount: "",
      asset: undefined,
      destination: "",
      memoValue: ""
    }
  })

  const formValues = form.watch()
  const { preselectedParams } = props
  const { setValue } = form

  const spendableBalance = getSpendableBalance(
    getAccountMinimumBalance(props.accountData),
    findMatchingBalanceLine(props.accountData.balances, formValues.asset)
  )

  const {
    amount,
    asset,
    destination: presetDestination,
    memo,
    memoType: presetMemoType,
    payStellarUri
  } = preselectedParams || {}

  React.useEffect(() => {
    if (amount !== undefined || payStellarUri) setValue("amount", amount || "")
    if (asset || payStellarUri) setValue("asset", asset)
    if (presetDestination) {
      setValue("destination", presetDestination)
      setValue("memoValue", memo || "")
      setRequestedMemo(
        presetMemoType || memo ? { destination: presetDestination, type: presetMemoType || "text" } : undefined
      )
    }
  }, [amount, asset, presetDestination, memo, presetMemoType, payStellarUri, setValue])

  const matchingWellknownAccount = wellknownAccounts.lookup(formValues.destination)
  const exchangeMemoType = matchingWellknownAccount?.tags.includes("exchange")
    ? matchingWellknownAccount.accepts?.memo === "MEMO_ID"
      ? "id"
      : "text"
    : undefined
  const requiredMemoType =
    (requestedMemo?.destination === formValues.destination ? requestedMemo?.type : undefined) || exchangeMemoType
  const memoType = getPaymentMemoType(requiredMemoType, formValues.memoValue)
  const memoLabel =
    requiredMemoType && (memoType === "id" || memoType === "text")
      ? t(`payment.memo-metadata.label.${memoType}`)
      : t("payment.memo-metadata.label.default")

  const changeDestination = React.useCallback(
    (next: string) => {
      if (requestedMemo && next !== requestedMemo.destination) {
        setValue("memoValue", "")
        setRequestedMemo(undefined)
      }
      setValue("destination", next)
    },
    [requestedMemo, setValue]
  )

  const handleFormSubmission = () => {
    props.onSubmit({ memoType, ...form.getValues() }, spendableBalance, matchingWellknownAccount)
  }

  const handlePaymentLink = React.useCallback(
    (uri: PayStellarUri) => {
      setValue("destination", uri.destination)
      setValue("amount", uri.amount || "")
      setValue("asset", getPaymentRequestAsset(uri))
      setValue("memoValue", uri.memo || "")
      setRequestedMemo(
        uri.memoType || uri.memo ? { destination: uri.destination, type: uri.memoType || "text" } : undefined
      )
    },
    [setValue]
  )

  const handleQRScan = React.useCallback(
    (scanResult: string) => {
      // handle SEP-07 Pay uri
      if (isStellarUri(scanResult)) {
        const stellarUri = parseStellarUri(scanResult)
        if (stellarUri.operation === StellarUriType.Pay) {
          handlePaymentLink(stellarUri as PayStellarUri)
        }
        form.triggerValidation()
        return
      }

      const [destination, query] = scanResult.split("?")

      // handle plain address or Kraken-style uri (<destination>?dt=<memoid>)
      if (isPublicKey(destination) || isMuxedAddress(destination) || isStellarAddress(destination)) {
        changeDestination(destination)

        if (!query) {
          return
        }

        const searchParams = new URLSearchParams(query)
        const memoValue = searchParams.get("dt")

        if (memoValue) {
          setRequestedMemo({ destination, type: "id" })
          setValue("memoValue", memoValue)
        }
      }
    },
    [changeDestination, handlePaymentLink, setValue, form]
  )

  const { openSavedAddresses } = React.useContext(DialogsContext)

  const handleOnSavedAddressClick = React.useCallback(
    (address: string) => {
      changeDestination(address)
      form.triggerValidation("destination")
      openSavedAddresses(null)
    },
    [changeDestination, form, openSavedAddresses]
  )

  const handleContractListClick = React.useCallback(() => {
    openSavedAddresses({
      onSelect: handleOnSavedAddressClick
    })
  }, [openSavedAddresses, handleOnSavedAddressClick])

  const qrReaderAdornment = React.useMemo(
    () => (
      <InputAdornment disableTypography position="end">
        <QRReader onScan={handleQRScan} />
        <AccountBoxIcon onClick={handleContractListClick} style={{ cursor: "pointer" }} />
      </InputAdornment>
    ),
    [handleQRScan, handleContractListClick]
  )

  const focused = React.useMemo(() => {
    if (!preselectedParams || !preselectedParams.destination) return "destination"
    if (!preselectedParams.amount) return "amount"
    if (!preselectedParams.asset) return "asset"
    if (!preselectedParams.memo) return "memo"
    return "destination"
  }, [preselectedParams])

  const destinationInput = React.useMemo(
    () => (
      <TextField
        autoFocus={import.meta.env.VITE_PLATFORM !== "ios" && focused === "destination"}
        disabled={!props.canChangePreselectedParams}
        error={Boolean(form.errors.destination)}
        fullWidth
        inputProps={{
          style: { textOverflow: "ellipsis" }
        }}
        InputProps={{
          endAdornment: !Boolean(preselectedParams?.destination) ? qrReaderAdornment : undefined
        }}
        inputRef={form.register({
          required: t<string>("payment.validation.no-destination"),
          validate: (value) =>
            isPublicKey(value) ||
            isMuxedAddress(value) ||
            isStellarAddress(value) ||
            t<string>("payment.validation.invalid-destination")
        })}
        label={form.errors.destination ? form.errors.destination.message : t("payment.inputs.destination.label")}
        margin="normal"
        name="destination"
        onChange={(event) => changeDestination(event.target.value.trim())}
        placeholder={t("payment.inputs.destination.placeholder")}
      />
    ),
    [changeDestination, form, focused, qrReaderAdornment, preselectedParams, props.canChangePreselectedParams, t]
  )

  const assetSelector = React.useMemo(
    () => (
      <Controller
        as={
          <AssetSelector
            autoFocus={import.meta.env.VITE_PLATFORM !== "ios" && focused === "asset"}
            assets={props.accountData.balances}
            disableUnderline
            disabled={!props.canChangePreselectedParams && Boolean(asset || payStellarUri)}
            showXLM
            style={{ alignSelf: "center" }}
            testnet={props.testnet}
            value={formValues.asset || undefined}
            accountId={props.accountData.account_id}
          />
        }
        control={form.control}
        name="asset"
      />
    ),
    [
      form,
      focused,
      formValues.asset,
      payStellarUri,
      asset,
      props.accountData.balances,
      props.accountData.account_id,
      props.canChangePreselectedParams,
      props.testnet
    ]
  )

  const maxSendButton = React.useMemo(
    () => (
      <ButtonBase
        onClick={() => {
          form.setValue("amount", spendableBalance.toString())
          form.triggerValidation("amount")
        }}
        style={{ fontSize: "inherit", fontWeight: "inherit", textAlign: "inherit" }}
      >
        {t("payment.inputs.price.placeholder", { amount: formatBalance(spendableBalance.toString()) })}
      </ButtonBase>
    ),
    [form, spendableBalance, t]
  )

  const isOwnAsset = formValues.asset?.getIssuer() === props.accountData.account_id

  const priceInputHelperText = React.useMemo(() => {
    if (!form.getValues()["asset"] || isOwnAsset) return <span></span>
    return maxSendButton
  }, [form, isOwnAsset, maxSendButton])

  const priceInput = React.useMemo(
    () => (
      <PriceInput
        autoFocus={import.meta.env.VITE_PLATFORM !== "ios" && focused === "amount"}
        assetCode={assetSelector}
        disabled={!props.canChangePreselectedParams && !!preselectedParams?.amount}
        error={Boolean(form.errors.amount)}
        inputRef={form.register({
          required: t<string>("payment.validation.no-price"),
          validate: (value) => {
            if (!form.getValues()["asset"]) {
              return t<string>("payment.validation.asset-missing")
            }
            if (!isValidAmount(value) || FormBigNumber(value).eq(0)) {
              return t<string>("payment.validation.invalid-price")
            } else if (!isOwnAsset && FormBigNumber(value).gt(spendableBalance)) {
              return t<string>("payment.validation.not-enough-funds")
            } else {
              return undefined
            }
          }
        })}
        label={form.errors.amount ? form.errors.amount.message : t("payment.inputs.price.label")}
        margin="normal"
        name="amount"
        placeholder={t("payment.inputs.price.label")}
        helperText={priceInputHelperText}
        style={{
          flexGrow: isSmallScreen ? 1 : undefined,
          marginLeft: 24,
          marginRight: 24,
          minWidth: 230,
          maxWidth: isSmallScreen ? undefined : "60%"
        }}
      />
    ),
    [
      assetSelector,
      focused,
      form,
      isOwnAsset,
      isSmallScreen,
      preselectedParams,
      priceInputHelperText,
      props.canChangePreselectedParams,
      spendableBalance,
      t
    ]
  )

  const memoInput = React.useMemo(
    () => (
      <TextField
        autoFocus={import.meta.env.VITE_PLATFORM !== "ios" && focused === "memo"}
        disabled={!props.canChangePreselectedParams && !!preselectedParams?.memo}
        error={Boolean(form.errors.memoValue)}
        inputProps={{ maxLength: memoType === "hash" || memoType === "return" ? 44 : 28 }}
        label={
          form.errors.memoValue?.message ||
          (memoType === "hash" || memoType === "return" ? `${memoLabel} (${memoType.toUpperCase()})` : memoLabel)
        }
        margin="normal"
        name="memoValue"
        inputRef={form.register({
          validate: (value) => {
            if (!value && requiredMemoType && memoType !== "none") {
              return t<string>("payment.validation.memo-required", {
                destination: matchingWellknownAccount?.name || formValues.destination
              })
            }
            if (memoType === "id" && !/^\d+$/.test(value)) return t<string>("payment.validation.integer-memo-required")
            try {
              createPaymentMemo(memoType, value)
              return true
            } catch (error) {
              return memoType === "text"
                ? t<string>("payment.validation.memo-too-long")
                : String(error instanceof Error ? error.message : error)
            }
          }
        })}
        onChange={(event) => setValue("memoValue", event.target.value)}
        placeholder={t(
          requiredMemoType
            ? "payment.memo-metadata.placeholder.mandatory"
            : "payment.memo-metadata.placeholder.optional"
        )}
        style={{
          flexGrow: 1,
          marginLeft: 24,
          marginRight: 24,
          minWidth: 230
        }}
      />
    ),
    [
      form,
      memoType,
      matchingWellknownAccount,
      memoLabel,
      focused,
      requiredMemoType,
      formValues.destination,
      props.canChangePreselectedParams,
      preselectedParams,
      setValue,
      t
    ]
  )

  const dialogActions = React.useMemo(
    () => (
      <DialogActionsBox desktopStyle={{ marginTop: 64 }}>
        {props.onCancel && (
          <ActionButton icon={<CloseIcon style={{ fontSize: 16 }} />} onClick={props.onCancel}>
            {t("payment.actions.dismiss")}
          </ActionButton>
        )}
        <ActionButton
          form={formID}
          icon={<SendIcon style={{ fontSize: 16 }} />}
          loading={props.txCreationPending}
          onClick={() => undefined}
          type="submit"
        >
          {t("payment.actions.submit")}
        </ActionButton>
      </DialogActionsBox>
    ),
    [formID, props.onCancel, props.txCreationPending, t]
  )

  return (
    <>
      <form id={formID} onSubmit={form.handleSubmit(handleFormSubmission)}>
        {destinationInput}
        <HorizontalLayout justifyContent="space-between" alignItems="top" margin="0 -24px" wrap="wrap">
          {priceInput}
          {memoInput}
        </HorizontalLayout>
        {isOwnAsset && (
          <Box margin="32px 0 0" padding="8px 12px" style={{ background: warningColor }}>
            {t("payment.note.issuance")}
          </Box>
        )}
        <Portal target={props.actionsRef.element}>{dialogActions}</Portal>
      </form>
    </>
  )
})

interface Props {
  accountData: AccountData
  actionsRef: RefStateObject
  preselectedParams?: PaymentParams
  canChangePreselectedParams?: boolean
  testnet: boolean
  trustedAssets: Asset[]
  txCreationPending?: boolean
  onCancel?: () => void
  onSubmit: (
    createTx: (
      horizon: Horizon.Server,
      account: Account
    ) => Promise<{
      tx: Transaction
      signatureRequest?: MultisigTransactionResponse
    }>
  ) => any
}

function PaymentFormContainer(props: Props) {
  const { lookupFederationRecord } = useFederationLookup()

  const createPaymentTx = async (horizon: Horizon.Server, account: Account, formValues: ExtendedPaymentFormValues) => {
    const { asset } = formValues
    if (
      !asset ||
      (asset.getIssuer() !== account.accountID && !props.trustedAssets.some((trusted) => trusted.equals(asset)))
    ) {
      throw new Error("The selected account cannot send the requested asset")
    }
    const federationRecord =
      formValues.destination.indexOf("*") > -1 ? await lookupFederationRecord(formValues.destination) : null
    const destination = federationRecord ? federationRecord.account_id : formValues.destination

    const userMemo = createPaymentMemo(formValues.memoType, formValues.memoValue)
    const federationMemo =
      federationRecord && federationRecord.memo && federationRecord.memo_type
        ? new Memo(federationRecord.memo_type as MemoType, federationRecord.memo)
        : Memo.none()

    if (userMemo.type !== "none" && federationMemo.type !== "none") {
      throw CustomError(
        "MemoAlreadySpecifiedError",
        `Cannot set a custom memo. Federation record of ${formValues.destination} already specifies memo.`,
        { destination: formValues.destination }
      )
    }

    const isMultisigTx = props.accountData.signers.length > 1

    const payment = await createPaymentOperation({
      asset,
      amount: replaceCommaWithDot(formValues.amount),
      destination,
      horizon
    })
    const tx = await createTransaction([payment], {
      accountData: props.accountData,
      memo: federationMemo.type !== "none" ? federationMemo : userMemo,
      minTransactionFee: isMultisigTx ? multisigMinimumFee : 0,
      horizon,
      walletAccount: account
    })
    return tx
  }

  const submitForm = (formValues: ExtendedPaymentFormValues) => {
    props.onSubmit(async (horizon, account) => {
      const tx = await createPaymentTx(horizon, account, formValues)
      if (props.preselectedParams?.payStellarUri?.callback) {
        const signatureRequest: MultisigTransactionResponse = {
          created_at: Date.now().toString(),
          cursor: "",
          hash: tx.toXDR(),
          req: props.preselectedParams?.payStellarUri.toString(),
          status: MultisigTransactionStatus.pending,
          signed_by: [],
          signers: [],
          updated_at: Date.now().toString(),
          external: true
        }
        return {
          tx,
          signatureRequest
        }
      } else {
        return { tx }
      }
    })
  }

  return <PaymentForm {...props} onSubmit={submitForm} />
}

export default React.memo(PaymentFormContainer)
