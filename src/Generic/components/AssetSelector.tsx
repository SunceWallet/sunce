import React from "react"
import { Asset } from "@stellar/stellar-sdk"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MenuItem from "@material-ui/core/MenuItem"
import TextField, { TextFieldProps } from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import AssetLogo from "~Assets/components/AssetLogo"
import { BalanceLine } from "~Generic/lib/account"
import { balancelineToAsset, stringifyAsset } from "../lib/stellar"
import { sortBalances } from "~Generic/lib/balances"
import { useAssetSettings } from "~Generic/hooks/useAssetSettings"
import { ListSubheader } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const useAssetItemStyles = makeStyles(theme => ({
  icon: {
    [theme.breakpoints.up(600)]: {
      minWidth: 48
    }
  },
  logo: {
    width: 32,
    height: 32,

    [theme.breakpoints.up(600)]: {
      width: 28,
      height: 28
    }
  }
}))

interface AssetItemProps {
  asset: Asset
  disabled?: boolean
  testnet: boolean
  // key + value props are expected here from React/Material-ui validation mechanisms
  key: string
  value: string
  style?: React.CSSProperties
}

const AssetItem = React.memo(
  React.forwardRef(function AssetItem(props: AssetItemProps, ref: React.Ref<HTMLLIElement>) {
    const classes = useAssetItemStyles()
    const { testnet, ...reducedProps } = props

    return (
      <MenuItem {...reducedProps} key={props.key} ref={ref} value={props.value}>
        <ListItemIcon className={classes.icon}>
          <AssetLogo asset={props.asset} className={classes.logo} testnet={props.testnet} />
        </ListItemIcon>
        <ListItemText>{props.asset.getCode()}</ListItemText>
      </MenuItem>
    )
  })
)

const useAssetSelectorStyles = makeStyles({
  helperText: {
    maxWidth: 100,
    whiteSpace: "nowrap"
  },
  input: {
    minWidth: 72
  },
  select: {
    fontSize: 18,
    fontWeight: 400
  },
  unselected: {
    opacity: 0.5
  }
})

interface AssetSelectorProps {
  autoFocus?: TextFieldProps["autoFocus"]
  assets: (Asset | BalanceLine)[]
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  disabledAssets?: Asset[]
  disableUnderline?: boolean
  helperText?: TextFieldProps["helperText"]
  inputError?: string
  label?: TextFieldProps["label"]
  margin?: TextFieldProps["margin"]
  minWidth?: number | string
  name?: string
  onChange?: (asset: Asset) => void
  showXLM?: boolean
  style?: React.CSSProperties
  accountId: string
  testnet: boolean
  value?: Asset
}

function AssetSelector(props: AssetSelectorProps) {
  const { onChange } = props
  const classes = useAssetSelectorStyles()
  const { assetSettings } = useAssetSettings(props.accountId)

  const assets = React.useMemo(
    () => sortBalances(props.assets, assetSettings).map(asset =>
        "code" in asset && "issuer" in asset ? (asset as Asset) : balancelineToAsset(asset)
      ),
    [props.assets]
  )

  const { t } = useTranslation()

  const [showHidden, setShowHidden] = React.useState(false)

  const visibleAssets = React.useMemo(() => {
    return assets.filter(asset => assetSettings[stringifyAsset(asset)]?.visibility !== "hidden")
  }, [props.assets, assetSettings])

  const hiddenAssets = React.useMemo(() => {
    return assets.filter(asset => assetSettings[stringifyAsset(asset)]?.visibility === "hidden")
  }, [props.assets, assetSettings])

  const [open, setOpen] = React.useState(false)
  const handleOpen = React.useCallback(() => setOpen(true), [])
  const handleClose = React.useCallback(() => setOpen(false), [])

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<{ name?: any; value: any }>, child: React.ComponentElement<AssetItemProps, any>) => {
      if (child.props.value === "showHidden") {
        setShowHidden(true)
        requestAnimationFrame(() => setOpen(true))
        return
      }
      const matchingAsset = assets.find(asset => asset.equals(child.props.asset))

      if (matchingAsset) {
        if (onChange) {
          onChange(matchingAsset)
        }
      } else {
        // tslint:disable-next-line no-console
        console.error(
          `Invariant violation: Trustline ${child.props.asset.getCode()} selected, but no matching asset found.`
        )
      }
    },
    [assets, onChange]
  )

  return (
    <TextField
      autoFocus={props.autoFocus}
      className={props.className}
      disabled={props.disabled}
      error={Boolean(props.inputError)}
      helperText={props.helperText}
      label={props.inputError ? props.inputError : props.label}
      margin={props.margin}
      onChange={handleChange as any}
      name={props.name}
      placeholder="Select an asset"
      select
      style={{ flexShrink: 0, ...props.style }}
      value={props.value ? props.value.getCode() : ""}
      FormHelperTextProps={{
        className: classes.helperText
      }}
      InputProps={{
        classes: {
          root: classes.input
        },
        style: {
          minWidth: props.minWidth
        }
      }}
      SelectProps={{
        classes: {
          root: props.value ? undefined : classes.unselected,
          select: classes.select
        },
        open,
        onOpen: handleOpen,
        onClose: handleClose,
        displayEmpty: !props.value,
        disableUnderline: props.disableUnderline,
        renderValue: () => (props.value ? props.value.getCode() : t("generic.assets.select-an-asset-short"))
      }}
    >
      {props.value ? null : (
        <MenuItem disabled value="">
          {t("generic.assets.select-an-asset")}
        </MenuItem>
      )}
      {visibleAssets
        .filter(asset => !asset.isNative())
        .map(asset => (
          <AssetItem
            asset={asset}
            disabled={props.disabledAssets && props.disabledAssets.some(someAsset => someAsset.equals(asset))}
            key={stringifyAsset(asset)}
            testnet={props.testnet}
            value={asset.getCode()}
          />
      ))}
      {props.showXLM ? (
        <AssetItem
          asset={Asset.native()}
          disabled={props.disabledAssets && props.disabledAssets.some(someAsset => someAsset.isNative())}
          key={stringifyAsset(Asset.native())}
          testnet={props.testnet}
          value={Asset.native().getCode()}
        />
      ) : null}
      {hiddenAssets && !showHidden && (
        <MenuItem value="showHidden">{t("generic.assets.show-hidden")}</MenuItem>
      )}
      {hiddenAssets && showHidden && <ListSubheader>{t("generic.assets.hidden-assets")}</ListSubheader>}
      {hiddenAssets && (
        hiddenAssets.map(asset => (
            <AssetItem
              asset={asset}
              disabled={props.disabledAssets && props.disabledAssets.some(someAsset => someAsset.equals(asset))}
              key={stringifyAsset(asset)}
              testnet={props.testnet}
              value={asset.getCode()}
              style={{ display: showHidden ? "" : "none" }}
            />
          ))
      )}
    </TextField>
  )
}

export default React.memo(AssetSelector)
