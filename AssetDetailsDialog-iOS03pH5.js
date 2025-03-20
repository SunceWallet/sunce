import { R as React, Z as useTranslation, bU as DialogTitle, bw as DialogContent, $ as DialogActionsBox, a0 as ActionButton, aW as CloseIcon, a5 as libExports, aL as trackError, a1 as useRouter, X as useLiveAccountData, at as stringifyAsset, aY as Dialog, a_ as CompactDialogTransition, ao as Big, bu as List, Y as makeStyles, H as ListItem, aw as ListItemText, ah as breakpoints, bV as useAccountData, bW as parseAssetID, a8 as useIsMobile, b8 as useAssetMetadata, b0 as DialogBody, a9 as MainTitle, E as Typography, ak as VerticalLayout, av as ReadOnlyTextfield, bX as BASE_RESERVE, bv as useStellarToml, bq as useClipboard } from "./app-DBEXmgIl.js";
import { T as TransactionSender, D as DialogContentText, a as Trans, c as createTransaction, b as account, t as tradeAsset, C as ClearIcon, S as SingleBalance, A as AccountName, d as AssetLogo, e as Card, f as CardContent, g as Avatar, o as openLink } from "./app-stage2-CwdMAbKU.js";
import { S as SwapHorizIcon } from "./SwapHoriz-Bpbxs0OS.js";
const RemoveTrustlineDialog = React.memo(function RemoveTrustlineDialog2(props) {
  const { t } = useTranslation();
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const removeAsset = async () => {
    try {
      setTxCreationPending(true);
      const operations = [libExports.Operation.changeTrust({ asset: props.asset, limit: "0", withMuxing: true })];
      const transaction = await createTransaction(operations, {
        accountData: props.accountData,
        horizon: props.horizon,
        walletAccount: props.account
      });
      setTxCreationPending(false);
      await props.sendTransaction(transaction);
      props.onRemoved();
    } catch (error) {
      setTxCreationPending(false);
      trackError(error);
    }
  };
  const assetBalance = props.accountData.balances.find(
    (balance) => balance.asset_code === props.asset.getCode() && balance.asset_issuer === props.asset.getIssuer()
  );
  const stillOwnsTokens = assetBalance && parseFloat(assetBalance.balance) > 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DialogTitle, null, t("account.remove-trustline.title")), /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement(DialogContentText, null, stillOwnsTokens ? /* @__PURE__ */ React.createElement(React.Fragment, null, t("account.remove-trustline.text.warning")) : /* @__PURE__ */ React.createElement(Trans, { i18nKey: "account.remove-trustline.text.info" }, "You are about to remove ", /* @__PURE__ */ React.createElement("b", null, { asset: props.asset.code }), ' from account "', { accountName: props.account.name }, '".')), /* @__PURE__ */ React.createElement(DialogActionsBox, { preventMobileActionsBox: true }, /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onClose, style: { maxWidth: "none" } }, t("account.remove-trustline.action.cancel")), stillOwnsTokens ? null : /* @__PURE__ */ React.createElement(
    ActionButton,
    {
      autoFocus: true,
      disabled: stillOwnsTokens,
      loading: txCreationPending,
      icon: /* @__PURE__ */ React.createElement(CloseIcon, null),
      onClick: removeAsset,
      style: { maxWidth: "none" },
      type: "primary"
    },
    t("account.remove-trustline.action.remove")
  ))));
});
function ConnectedRemoveTrustlineDialog(props) {
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account, onSubmissionCompleted: props.onClose }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(
    RemoveTrustlineDialog,
    {
      ...props,
      accountData: props.accountData,
      horizon,
      sendTransaction
    }
  ));
}
const RemoveTrustlineDialog$1 = React.memo(ConnectedRemoveTrustlineDialog);
const dialogActionsBoxStyle = {
  marginTop: 8
};
function AssetDetailsActions(props) {
  const { account: account$1, asset } = props;
  const [removalDialogOpen, setRemovalDialogOpen] = React.useState(false);
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const accountData = useLiveAccountData(account$1.accountID, account$1.testnet);
  const balance = accountData.balances.find(
    (bal) => bal.asset_type !== "native" && bal.asset_issuer === asset.issuer && bal.asset_code === asset.code
  );
  const createAddAssetTransaction = async (options = {}) => {
    const operations = [libExports.Operation.changeTrust({ asset, limit: options.limit, withMuxing: true })];
    return createTransaction(operations, {
      accountData,
      horizon: props.horizon,
      walletAccount: props.account
    });
  };
  const navigateBackDelayed = React.useCallback(() => {
    setTimeout(() => router.history.push(account(props.account.id)), 1300);
  }, [props.account, router.history]);
  const sendTransaction = async (createTransactionToSend) => {
    try {
      setTxCreationPending(true);
      const transaction = await createTransactionToSend();
      setTxCreationPending(false);
      await props.sendTransaction(transaction);
      closeRemovalDialog();
      navigateBackDelayed();
    } catch (error) {
      setTxCreationPending(false);
      trackError(error);
    }
  };
  const addThisAsset = () => sendTransaction(() => createAddAssetTransaction());
  const closeRemovalDialog = React.useCallback(() => setRemovalDialogOpen(false), []);
  const removeThisAsset = React.useCallback(() => setRemovalDialogOpen(true), []);
  const tradeThisAsset = React.useCallback(
    () => router.history.push(tradeAsset(props.account.id, void 0, stringifyAsset(asset))),
    [asset, props.account.id, router.history]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: dialogActionsBoxStyle, smallDialog: true }, balance ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(ClearIcon, null), onClick: removeThisAsset, type: "secondary" }, t("account.add-asset.action.remove")), /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(SwapHorizIcon, null), onClick: tradeThisAsset, type: "primary" }, t("account.add-asset.action.trade"))) : /* @__PURE__ */ React.createElement(ActionButton, { loading: txCreationPending, onClick: addThisAsset, type: "primary" }, t("account.add-asset.action.add-asset"))), /* @__PURE__ */ React.createElement(Dialog, { open: removalDialogOpen, onClose: closeRemovalDialog, TransitionComponent: CompactDialogTransition }, /* @__PURE__ */ React.createElement(
    RemoveTrustlineDialog$1,
    {
      account: props.account,
      accountData,
      asset,
      onClose: closeRemovalDialog,
      onRemoved: navigateBackDelayed
    }
  )));
}
function ConnectedAssetDetailsActions(props) {
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(AssetDetailsActions, { ...props, horizon, sendTransaction }));
}
const AssetDetailsActions$1 = React.memo(ConnectedAssetDetailsActions);
const useBreakdownItemStyles = makeStyles({
  root: {
    padding: 0
  },
  mainListItemText: {
    flexShrink: 5
  },
  mainListItemTextIndent: {
    marginLeft: 24,
    [breakpoints.down(600)]: {
      marginLeft: 12
    }
  },
  mainListItemTextPrimaryTypography: {
    fontSize: 18,
    fontWeight: 300,
    overflow: "hidden",
    textOverflow: "ellipsis",
    [breakpoints.down(400)]: {
      fontSize: 16,
      lineHeight: "20px"
    }
  },
  mainListItemTextSecondaryTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    [breakpoints.down(400)]: {
      fontSize: 14
    },
    [breakpoints.down(350)]: {
      fontSize: 12
    }
  },
  balanceListItem: {
    marginLeft: 8,
    textAlign: "right"
  }
});
function BreakdownItem(props) {
  const { variant = "deduction" } = props;
  const classes = useBreakdownItemStyles();
  if (props.hide) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(ListItem, { className: classes.root, style: props.style }, /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      classes: {
        root: `${classes.mainListItemText} ${props.indent ? classes.mainListItemTextIndent : ""}`,
        primary: classes.mainListItemTextPrimaryTypography,
        secondary: classes.mainListItemTextSecondaryTypography
      },
      primary: props.primary,
      secondary: props.secondary
    }
  ), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      className: classes.balanceListItem,
      primaryTypographyProps: {
        style: { fontSize: "150%" }
      }
    },
    variant === "deduction" ? "-" : variant === "gross" ? "" : "=",
    " ",
    /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: "", balance: props.amount })
  ));
}
const BreakdownHeadline = React.memo(function BreakdownHeadline2(props) {
  const classes = useBreakdownItemStyles();
  return /* @__PURE__ */ React.createElement(ListItem, { className: classes.root, style: { borderBottom: "none" } }, /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      classes: {
        root: classes.mainListItemText,
        primary: classes.mainListItemTextPrimaryTypography,
        secondary: classes.mainListItemTextSecondaryTypography
      },
      primary: props.left
    }
  ), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      className: classes.balanceListItem,
      primaryTypographyProps: {
        style: {
          fontSize: "120%",
          fontWeight: 300
        }
      },
      style: {
        marginTop: 0,
        marginBottom: 0
      }
    },
    props.right
  ));
});
function SpendableBalanceBreakdown(props) {
  const { t } = useTranslation();
  const nativeBalance = props.accountData.balances.find((balance) => balance.asset_type === "native");
  const trustedAssetBalances = props.accountData.balances.filter((balance) => balance.asset_type !== "native");
  const dataReserve = props.baseReserve * Object.keys(props.accountData.data_attr).length;
  const signersReserve = props.baseReserve * props.accountData.signers.length;
  const trustlinesReserve = props.baseReserve * trustedAssetBalances.length;
  const sellingLiabilities = nativeBalance ? Big(nativeBalance.selling_liabilities) : Big(0);
  const openOrdersReserve = Big(props.accountData.subentry_count * props.baseReserve).minus(props.baseReserve * (props.accountData.signers.length - 1)).minus(dataReserve).minus(trustlinesReserve);
  const rawBalance = nativeBalance ? Big(nativeBalance.balance) : Big(0);
  const spendableBalance = rawBalance.minus(props.baseReserve).minus(dataReserve).minus(openOrdersReserve).minus(signersReserve).minus(trustlinesReserve).minus(sellingLiabilities);
  return /* @__PURE__ */ React.createElement(List, { style: { padding: 0 } }, /* @__PURE__ */ React.createElement(BreakdownHeadline, { right: t("account.balance-details.spendable-balances.headline") }), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: rawBalance.toFixed(4),
      primary: t("account.balance-details.spendable-balances.total-balance.primary"),
      secondary: t("account.balance-details.spendable-balances.total-balance.secondary"),
      style: props.style,
      variant: "gross"
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: props.baseReserve.toFixed(1),
      indent: true,
      primary: t("account.balance-details.spendable-balances.base-reserve.primary"),
      secondary: t("account.balance-details.spendable-balances.base-reserve.secondary"),
      style: props.style
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: signersReserve.toFixed(1),
      indent: true,
      primary: t("account.balance-details.spendable-balances.signers-reserve.primary"),
      secondary: props.accountData.signers.length === 1 ? t("account.balance-details.spendable-balances.signers-reserve.secondary.single-key") : t("account.balance-details.spendable-balances.signers-reserve.secondary.multiple-keys"),
      style: props.style
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: trustlinesReserve.toFixed(1),
      hide: trustlinesReserve === 0,
      indent: true,
      primary: t("account.balance-details.spendable-balances.trustline-reserve.primary"),
      secondary: t("account.balance-details.spendable-balances.trustline-reserve.secondary"),
      style: props.style
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: openOrdersReserve.toFixed(1),
      hide: openOrdersReserve.cmp(0) === 0,
      indent: true,
      primary: t("account.balance-details.spendable-balances.open-orders-reserve.primary"),
      secondary: t("account.balance-details.spendable-balances.open-orders-reserve.secondary"),
      style: props.style
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: dataReserve.toFixed(1),
      hide: dataReserve === 0,
      indent: true,
      primary: t("account.balance-details.spendable-balances.data-reserve.primary"),
      secondary: t("account.balance-details.spendable-balances.data-reserve.secondary"),
      style: props.style
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: sellingLiabilities.toString(),
      hide: sellingLiabilities.eq(0),
      indent: true,
      primary: t("account.balance-details.spendable-balances.selling-liabilities.primary"),
      secondary: t("account.balance-details.spendable-balances.selling-liabilities.secondary"),
      style: props.style
    }
  ), /* @__PURE__ */ React.createElement(
    BreakdownItem,
    {
      amount: spendableBalance.toString(),
      primary: t("account.balance-details.spendable-balances.spendable-balance.primary"),
      secondary: t("account.balance-details.spendable-balances.spendable-balance.secondary"),
      style: props.style,
      variant: "total"
    }
  ));
}
const SpendableBalanceBreakdown$1 = React.memo(SpendableBalanceBreakdown);
const capitalize = (text) => text[0].toUpperCase() + text.substr(1);
const useDetailContentStyles = makeStyles({
  card: {
    backgroundColor: "#fbfbfb",
    borderRadius: 8,
    margin: "12px -8px",
    overflowY: "auto"
  },
  cardContent: {
    position: "relative",
    padding: "8px 16px !important"
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 8
  },
  cardLogo: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 72,
    height: 72,
    backgroundColor: "white",
    boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)"
  },
  cardLogoImage: {
    width: "100%",
    height: "100%"
  }
});
const LumenDetails = React.memo(function LumenDetails2(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const classes = useDetailContentStyles();
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Card, { className: classes.card }, /* @__PURE__ */ React.createElement(CardContent, { className: classes.cardContent }, /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.lumen.description.label"),
      multiline: true,
      value: t("account.asset-details.lumen.description.text")
    }
  ))), /* @__PURE__ */ React.createElement(Card, { className: classes.card }, /* @__PURE__ */ React.createElement(CardContent, { className: classes.cardContent }, /* @__PURE__ */ React.createElement(SpendableBalanceBreakdown$1, { account: props.account, accountData, baseReserve: BASE_RESERVE }))));
});
const AssetDetails = React.memo(function AssetDetails2({ account: account2, asset, metadata }) {
  const issuingAccountData = useAccountData(asset.issuer, account2.testnet);
  const stellarToml = useStellarToml(issuingAccountData.home_domain);
  const classes = useDetailContentStyles();
  const clipboard = useClipboard();
  const { t } = useTranslation();
  const copyIssuerToClipboard = React.useCallback(() => clipboard.copyToClipboard(asset.getIssuer()), [
    asset,
    clipboard
  ]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Card, { className: classes.card }, /* @__PURE__ */ React.createElement(CardContent, { className: classes.cardContent }, metadata && metadata.desc ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.description.label"),
      margin: "dense",
      multiline: true,
      value: metadata.desc
    }
  ) : null, /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.issuing-account.label"),
      margin: "dense",
      onClick: copyIssuerToClipboard,
      value: asset.getIssuer(),
      inputProps: {
        style: {
          cursor: "pointer",
          textOverflow: "ellipsis"
        }
      }
    }
  ), /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.account-flags.label"),
      margin: "dense",
      multiline: true,
      value: capitalize(
        [
          issuingAccountData.flags.auth_required ? `• ${t("account.asset-details.general.account-flags.auth-required")}` : `• ${t("account.asset-details.general.account-flags.auth-not-required")}`,
          issuingAccountData.flags.auth_revocable ? `• ${t("account.asset-details.general.account-flags.auth-revocable")}` : `• ${t("account.asset-details.general.account-flags.auth-not-revocable")}`,
          issuingAccountData.flags.auth_immutable ? `• ${t("account.asset-details.general.account-flags.auth-immutable")}` : `• ${t("account.asset-details.general.account-flags.auth-mutable")}`
        ].join("\n")
      )
    }
  ), metadata && metadata.conditions ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.conditions.label"),
      margin: "dense",
      multiline: true,
      value: metadata.conditions
    }
  ) : null, metadata && metadata.anchor_asset_type ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.anchor-asset.label"),
      margin: "dense",
      multiline: true,
      value: metadata.anchor_asset ? `${capitalize(metadata.anchor_asset)} (${capitalize(metadata.anchor_asset_type)})` : capitalize(metadata.anchor_asset_type)
    }
  ) : null, metadata && metadata.redemption_instructions ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.redemption-instructions.label"),
      margin: "dense",
      multiline: true,
      value: metadata.redemption_instructions
    }
  ) : null)), stellarToml && stellarToml.DOCUMENTATION ? /* @__PURE__ */ React.createElement(Card, { className: classes.card }, /* @__PURE__ */ React.createElement(CardContent, { className: classes.cardContent }, stellarToml.DOCUMENTATION.ORG_LOGO ? /* @__PURE__ */ React.createElement(Avatar, { className: classes.cardLogo }, /* @__PURE__ */ React.createElement(
    "img",
    {
      alt: "Organization logo",
      className: classes.cardLogoImage,
      src: stellarToml.DOCUMENTATION.ORG_LOGO
    }
  )) : null, stellarToml.DOCUMENTATION.ORG_NAME ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.name.label"),
      margin: "dense",
      value: stellarToml.DOCUMENTATION.ORG_NAME
    }
  ) : null, stellarToml.DOCUMENTATION.ORG_DBA ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.dba.label"),
      margin: "dense",
      value: stellarToml.DOCUMENTATION.ORG_DBA
    }
  ) : null, stellarToml.DOCUMENTATION.ORG_URL ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.website.label"),
      margin: "dense",
      onClick: () => openLink(stellarToml.DOCUMENTATION.ORG_URL),
      value: stellarToml.DOCUMENTATION.ORG_URL,
      inputProps: {
        style: {
          cursor: "pointer",
          textDecoration: "underline"
        }
      }
    }
  ) : null, stellarToml.DOCUMENTATION.ORG_DESCRIPTION ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.description.label"),
      margin: "dense",
      multiline: true,
      value: stellarToml.DOCUMENTATION.ORG_DESCRIPTION
    }
  ) : null, stellarToml.DOCUMENTATION.ORG_PHYSICAL_ADDRESS ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.address.label"),
      margin: "dense",
      multiline: true,
      value: stellarToml.DOCUMENTATION.ORG_PHYSICAL_ADDRESS,
      inputProps: {
        style: {
          whiteSpace: "pre"
        }
      }
    }
  ) : null, stellarToml.DOCUMENTATION.ORG_OFFICIAL_EMAIL ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.email.label"),
      margin: "dense",
      multiline: true,
      onClick: () => openLink("mailto:" + stellarToml.DOCUMENTATION.ORG_OFFICIAL_EMAIL),
      value: stellarToml.DOCUMENTATION.ORG_OFFICIAL_EMAIL,
      inputProps: {
        style: {
          cursor: "pointer",
          textDecoration: "underline"
        }
      }
    }
  ) : null, stellarToml.DOCUMENTATION.ORG_PHONE_NUMBER ? /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      fullWidth: true,
      label: t("account.asset-details.general.organisation.phone-number.label"),
      margin: "dense",
      multiline: true,
      value: stellarToml.DOCUMENTATION.ORG_PHONE_NUMBER
    }
  ) : null)) : null);
});
const useAssetDetailStyles = makeStyles({
  logo: {
    position: "absolute",
    top: 4,
    right: -4,
    width: 96,
    height: 96,
    boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.2)",
    fontSize: 24,
    [breakpoints.down(600)]: {
      width: 64,
      height: 64,
      fontSize: 18
    }
  },
  domain: {
    marginTop: -4,
    marginLeft: 47,
    // should be 46, but somehow 47 looks correct
    marginBottom: 16,
    [breakpoints.down(600)]: {
      marginLeft: 39
    }
  }
});
function AssetDetailsDialog(props) {
  const accountData = useAccountData(props.account.accountID, props.account.testnet);
  const asset = React.useMemo(() => parseAssetID(props.assetID), [props.assetID]);
  const classes = useAssetDetailStyles();
  const isSmallScreen = useIsMobile();
  const balance = accountData.balances.find(
    asset.isNative() ? (bal) => bal.asset_type === "native" : (bal) => bal.asset_type !== "native" && bal.asset_issuer === asset.issuer && bal.asset_code === asset.code
  );
  const metadata = useAssetMetadata(asset, props.account.testnet);
  const dialogActions = React.useMemo(
    () => asset.isNative() ? null : /* @__PURE__ */ React.createElement(AssetDetailsActions$1, { account: props.account, asset }),
    [props.account, asset]
  );
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      excessWidth: 8,
      top: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          nowrap: true,
          onBack: props.onClose,
          style: { position: "relative", zIndex: 1 },
          title: asset.isNative() ? "Stellar Lumens (XLM)" : metadata && metadata.name ? `${metadata.name} (${asset.getCode()})` : asset.getCode(),
          titleStyle: {
            maxWidth: isSmallScreen ? "calc(100% - 75px)" : "calc(100% - 100px)",
            textShadow: "0 0 5px white, 0 0 5px white, 0 0 5px white"
          }
        }
      ), /* @__PURE__ */ React.createElement(Typography, { className: classes.domain, variant: "subtitle1" }, balance ? /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: asset.getCode(), balance: balance.balance }) : asset.isNative() ? "stellar.org" : /* @__PURE__ */ React.createElement(AccountName, { publicKey: asset.getIssuer(), testnet: props.account.testnet })), /* @__PURE__ */ React.createElement(AssetLogo, { asset, className: classes.logo, testnet: props.account.testnet })),
      actions: dialogActions,
      actionsPosition: "bottom",
      fitToShrink: true
    },
    /* @__PURE__ */ React.createElement(VerticalLayout, { margin: "0 4px", padding: `0 0 ${isSmallScreen ? 68 : 0}px`, shrink: 0 }, asset.isNative() ? /* @__PURE__ */ React.createElement(LumenDetails, { account: props.account }) : /* @__PURE__ */ React.createElement(AssetDetails, { account: props.account, asset, metadata }))
  );
}
export {
  AssetDetailsDialog as default
};
//# sourceMappingURL=AssetDetailsDialog-iOS03pH5.js.map
