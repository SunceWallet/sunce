import { AllInclusive } from "@material-ui/icons"
import { Horizon } from "@stellar/stellar-sdk"
import BigNumber from "big.js"
import React from "react"
import { useTranslation } from "react-i18next"
import { useLiveAccountData } from "~Generic/hooks/stellar-subscriptions"
import { useClipboard } from "~Generic/hooks/userinterface"
import { useAssetSettings } from "~Generic/hooks/useAssetSettings"
import useVisibleBalances from "~Generic/hooks/useVisibleBalances"
import { BalanceLine } from "~Generic/lib/account"
import { formatBalance, sortBalances, BalanceFormattingOptions } from "~Generic/lib/balances"
import { balancelineToAsset, stringifyAsset } from "~Generic/lib/stellar"

interface SingleBalanceProps {
  assetCode: string
  balance: BigNumber | string
  inline?: boolean
  untrimmed?: boolean
  style?: React.CSSProperties
  showInfinity?: boolean
  allowCopy?: boolean
}

export const SingleBalance = React.memo(function SingleBalance(props: SingleBalanceProps) {
  const clipboard = useClipboard()
  const { t } = useTranslation()
  const balance = BigNumber(props.balance)
  const absoluteBalance = balance.abs()

  const formattingOptions: BalanceFormattingOptions = props.untrimmed
    ? {
        groupThousands: false,
        maximumDecimals: 7,
        maximumSignificants: 100,
        minimumDecimals: 7
      }
    : absoluteBalance.eq(0)
    ? { maximumDecimals: 0, minimumDecimals: 0 }
    : absoluteBalance.gt(0) && absoluteBalance.lt(0.0001)
    ? { maximumDecimals: 7, minimumDecimals: 7 }
    : absoluteBalance.lt(1000)
    ? { maximumDecimals: 4, minimumDecimals: 0 }
    : { maximumDecimals: 0, minimumDecimals: 0 }

  const formattedBalance = formatBalance(absoluteBalance, formattingOptions)
  const exactBalance = `${balance.lt(0) ? "-" : ""}${formatBalance(absoluteBalance, {
    groupThousands: false,
    maximumDecimals: 7,
    maximumSignificants: 100,
    minimumDecimals: 7
  })}`
  const [integerPart, decimalPart = ""] = formattedBalance.split(".")

  const copyHint = t("account-settings.export-key.info.tap-to-copy")
  const isCopyEnabled = props.allowCopy && !props.showInfinity

  const handleBalanceCopy = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      if (!isCopyEnabled) {
        return
      }
      event.stopPropagation()
      clipboard.copyToClipboard(exactBalance)
    },
    [clipboard, exactBalance, isCopyEnabled]
  )

  const handleAssetCodeCopy = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      if (!isCopyEnabled || !props.assetCode) {
        return
      }
      event.stopPropagation()
      clipboard.copyToClipboard(props.assetCode)
    },
    [clipboard, isCopyEnabled, props.assetCode]
  )

  const copyableStyle = isCopyEnabled ? { cursor: "pointer" } : undefined

  return (
    <span style={{ whiteSpace: "nowrap", ...props.style }}>
      <span style={{ display: "inline-block", verticalAlign: 'top' }}>
        {balance.gte(0) ? null : <span>-&nbsp;</span>}
        {!props.showInfinity && (
          <span onClick={handleBalanceCopy} style={{ fontWeight: 300, ...copyableStyle }} title={isCopyEnabled ? copyHint : undefined}>
            {integerPart}
            <span style={{ opacity: 0.8 }}>{decimalPart ? "." + decimalPart : ""}</span>
          </span>
        )}
        {props.showInfinity && <AllInclusive style={{ height: "1.2rem", width: "1.2rem" }} />}
      </span>
      {props.assetCode ? (
        <>
          &nbsp;
          <span
            onClick={handleAssetCodeCopy}
            style={{
              display: "inline-block",
              fontWeight: props.inline ? undefined : "bold",
              marginLeft: props.inline ? undefined : "0.4em",
              ...copyableStyle
            }}
            title={isCopyEnabled ? copyHint : undefined}
          >
            {props.assetCode}
          </span>
        </>
      ) : null}
    </span>
  )
})

interface MultipleBalancesProps {
  balances: BalanceLine[]
  accountId: string
  component?: React.ComponentType<SingleBalanceProps>
  inline?: boolean
  onClick?: () => void
}

const isOwnAsset = (accountId: string, balance: BalanceLine) => {
  if (balance.asset_type === "native") return false
  return accountId === (balance as Horizon.HorizonApi.BalanceLineAsset).asset_issuer
}

// tslint:disable-next-line no-shadowed-variable
export const MultipleBalances = React.memo(function MultipleBalances(props: MultipleBalancesProps) {
  const { assetSettings } = useAssetSettings(props.accountId)

  if (props.balances.length === 0) {
    return <></>
  }
  
  const Balance = props.component || SingleBalance
  const balances = sortBalances(props.balances, assetSettings)

  return (
    <span onClick={props.onClick} style={props.onClick ? { cursor: "pointer" } : undefined}>
      {balances.map((balance: BalanceLine, index) => (
        <React.Fragment key={stringifyAsset(balancelineToAsset(balance))}>
          <Balance
            assetCode={balance.asset_type === "native" ? "XLM" : balance.asset_code}
            balance={balance.balance}
            inline={props.inline}
            style={{ marginRight: index < balances.length - 1 ? "1.2em" : undefined }}
            showInfinity={isOwnAsset(props.accountId, balance)}
          />{" "}
        </React.Fragment>
      ))}
    </span>
  )
})

const zeroXLMBalance = {
  asset_type: "native",
  balance: "0"
}

function AccountBalances(props: {
  component?: React.ComponentType<SingleBalanceProps>
  onClick?: () => void
  publicKey: string
  testnet: boolean,
  showHidden?: boolean
}) {
  const accountData = useLiveAccountData(props.publicKey, props.testnet)
  const balances = useVisibleBalances(accountData, props.showHidden ?? true)

  return accountData.balances.length > 0 ? (
    <MultipleBalances balances={balances} accountId={accountData.account_id} component={props.component} onClick={props.onClick} />
  ) : (
    <MultipleBalances balances={[zeroXLMBalance] as any} accountId={accountData.account_id} component={props.component} onClick={props.onClick} />
  )
}

export default React.memo(AccountBalances)
