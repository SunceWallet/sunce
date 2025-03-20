import { i as withStyles, R as React, _ as _objectWithoutProperties, f as _extends, j as clsx, k as capitalize, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, c3 as useLiveRecentTransactions, c4 as useOlderTransactions, Z as useTranslation, al as CircularProgress, c5 as friendbotTopup, aL as trackError, X as useLiveAccountData, ab as makeStyles, b4 as useHorizon, aD as useLiveAccountOffers, c6 as useLoadingState, c7 as useOlderOffers, bu as List, ah as breakpoints, aE as offerAssetToAsset, a8 as useIsMobile, H as ListItem, aw as ListItemText, ao as Big, a7 as HorizontalLayout, a0 as ActionButton, a5 as libExports, c8 as requireUtil, Y as makeStyles$1, a1 as useRouter, bs as InlineErrorBoundary, ae as SettingsContext, bJ as AddIcon, bt as PublicKey, ay as stringifyAssetToReadableString, c9 as TransactionStellarUri, bM as useHorizonURLs, ak as VerticalLayout, bI as SignatureDelegationContext } from "./app-DBEXmgIl.js";
import { T as TransactionSender, E as ExpandMoreIcon, L as ListItemIcon, a as Trans, S as SingleBalance, c as createTransaction, k as matchesRoute, a4 as showTransaction, b as account, a5 as TransactionReviewDialog, a6 as Collapse, a7 as getPaymentSummary, a8 as SettingsIcon, a9 as useOperationTitle, aa as MemoMessage, n as formatBalance, ab as routeUp, ac as depositAsset, ad as isDustTransaction, ae as UpdateIcon } from "./app-stage2-CwdMAbKU.js";
import { M as MainSelectionButton } from "./MainSelectionButton-DPV1xu8i.js";
import { E as ExpansionPanel, a as ExpansionPanelSummary, b as ExpansionPanelDetails, R as RemoveIcon } from "./Remove-BppeerbV.js";
import { C as CallReceivedIcon, a as CallMadeIcon } from "./CallReceived-Azk4kvuL.js";
import { S as SwapHorizIcon } from "./SwapHoriz-Bpbxs0OS.js";
var styles = function styles2(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: "border-box",
      lineHeight: "48px",
      listStyle: "none",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },
    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },
    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: "inherit"
    }
  };
};
var ListSubheader = React.forwardRef(function ListSubheader2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, Component = _props$component === void 0 ? "li" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$disableSticky = props.disableSticky, disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky, _props$inset = props.inset, inset = _props$inset === void 0 ? false : _props$inset, other = _objectWithoutProperties(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);
  return React.createElement(Component, _extends({
    className: clsx(classes.root, className, color !== "default" && classes["color".concat(capitalize(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref
  }, other));
});
const ListSubheader$1 = withStyles(styles, {
  name: "MuiListSubheader"
})(ListSubheader);
var DoneAll = {};
var hasRequiredDoneAll;
function requireDoneAll() {
  if (hasRequiredDoneAll) return DoneAll;
  hasRequiredDoneAll = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(DoneAll, "__esModule", {
    value: true
  });
  DoneAll.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"
  }), "DoneAll");
  DoneAll.default = _default;
  return DoneAll;
}
var DoneAllExports = /* @__PURE__ */ requireDoneAll();
const DoneAllIcon = /* @__PURE__ */ getDefaultExportFromCjs(DoneAllExports);
var CreditCard = {};
var hasRequiredCreditCard;
function requireCreditCard() {
  if (hasRequiredCreditCard) return CreditCard;
  hasRequiredCreditCard = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(CreditCard, "__esModule", {
    value: true
  });
  CreditCard.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
  }), "CreditCard");
  CreditCard.default = _default;
  return CreditCard;
}
var CreditCardExports = /* @__PURE__ */ requireCreditCard();
const CreditCardIcon = /* @__PURE__ */ getDefaultExportFromCjs(CreditCardExports);
function useFilteredTransactions(accountId, testnet, filter) {
  const [refetchKey, setRefetchKey] = React.useState(Date.now());
  const limit = 15;
  const { transactions, olderTransactionsAvailable } = useLiveRecentTransactions(accountId, testnet, refetchKey);
  const fetchMore = useOlderTransactions(accountId, testnet);
  const txs = React.useMemo(() => filter(transactions), [transactions]);
  const fetchMoreTransactions = async (count = 0) => {
    if (count >= limit) {
      setRefetchKey(Date.now());
      return;
    }
    const unfiltered = await fetchMore();
    const moreTxs = filter(unfiltered);
    return fetchMoreTransactions(count + moreTxs.length);
  };
  React.useEffect(() => {
    if (txs.length < limit) {
      fetchMoreTransactions(txs.length);
    }
  }, [txs]);
  return {
    olderTransactionsAvailable,
    transactions: txs,
    fetchMoreTransactions
  };
}
var ThumbUp = {};
var hasRequiredThumbUp;
function requireThumbUp() {
  if (hasRequiredThumbUp) return ThumbUp;
  hasRequiredThumbUp = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ThumbUp, "__esModule", {
    value: true
  });
  ThumbUp.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
  }), "ThumbUp");
  ThumbUp.default = _default;
  return ThumbUp;
}
var ThumbUpExports = /* @__PURE__ */ requireThumbUp();
const ThumbUpIcon = /* @__PURE__ */ getDefaultExportFromCjs(ThumbUpExports);
function FriendbotButton(props) {
  const [isPending, setPending] = React.useState(false);
  const { t } = useTranslation();
  const topup = async () => {
    try {
      setPending(true);
      await friendbotTopup(props.horizonURL, props.publicKey);
    } catch (error) {
      setPending(false);
      trackError(error);
    }
  };
  return (
    // Extra padding especially for mobile
    /* @__PURE__ */ React.createElement(
      MainSelectionButton,
      {
        Icon: isPending ? CircularProgress : ThumbUpIcon,
        className: props.className,
        description: t("account.transactions.action.friendbot.description"),
        label: t("account.transactions.action.friendbot.label"),
        onClick: topup,
        style: props.style
      }
    )
  );
}
var ArrowRightAlt = {};
var hasRequiredArrowRightAlt;
function requireArrowRightAlt() {
  if (hasRequiredArrowRightAlt) return ArrowRightAlt;
  hasRequiredArrowRightAlt = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ArrowRightAlt, "__esModule", {
    value: true
  });
  ArrowRightAlt.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
  }), "ArrowRightAlt");
  ArrowRightAlt.default = _default;
  return ArrowRightAlt;
}
var ArrowRightAltExports = /* @__PURE__ */ requireArrowRightAlt();
const ArrowRightIcon = /* @__PURE__ */ getDefaultExportFromCjs(ArrowRightAltExports);
var BarChart = {};
var hasRequiredBarChart;
function requireBarChart() {
  if (hasRequiredBarChart) return BarChart;
  hasRequiredBarChart = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(BarChart, "__esModule", {
    value: true
  });
  BarChart.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"
  }), "BarChart");
  BarChart.default = _default;
  return BarChart;
}
var BarChartExports = /* @__PURE__ */ requireBarChart();
const BarChartIcon = /* @__PURE__ */ getDefaultExportFromCjs(BarChartExports);
function createDismissalTransaction(horizon, account2, accountData, offer) {
  const buying = offerAssetToAsset(offer.buying);
  const selling = offerAssetToAsset(offer.selling);
  return selling.isNative() ? createTransaction(
    [
      libExports.Operation.manageBuyOffer({
        offerId: offer.id,
        buyAmount: "0",
        buying,
        price: offer.price,
        selling,
        withMuxing: true
      })
    ],
    { accountData, horizon, walletAccount: account2 }
  ) : createTransaction(
    [
      libExports.Operation.manageSellOffer({
        offerId: offer.id,
        amount: "0",
        buying,
        price: offer.price,
        selling,
        withMuxing: true
      })
    ],
    { accountData, horizon, walletAccount: account2 }
  );
}
const OfferListItem = React.memo(function OfferListItem2(props) {
  const buying = offerAssetToAsset(props.offer.buying);
  const selling = offerAssetToAsset(props.offer.selling);
  const isSmallScreen = useIsMobile();
  return /* @__PURE__ */ React.createElement(
    ListItem,
    {
      button: Boolean(props.onCancel),
      onClick: props.onCancel,
      style: { minHeight: isSmallScreen ? 58 : 72, ...props.style }
    },
    /* @__PURE__ */ React.createElement(ListItemIcon, { style: { marginRight: isSmallScreen ? 0 : void 0 } }, /* @__PURE__ */ React.createElement(BarChartIcon, null)),
    /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: (
          // Horizon seems to always returns open offers in the format of us
          // on the seller side, no matter if we submitted a buy or sell order,
          // so we use the philosophy "i never 'sell XLM', 'i buy the <other asset>'"
          props.offer.seller === props.accountPublicKey && !selling.isNative() ? /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "bold" } }, /* @__PURE__ */ React.createElement(Trans, { i18nKey: "account.transactions.offer-list.text.sell" }, "Sell", /* @__PURE__ */ React.createElement(
            SingleBalance,
            {
              assetCode: selling.getCode(),
              balance: props.offer.amount,
              inline: true,
              style: { marginLeft: "0.35em", marginRight: "0.35em" }
            }
          ), "for", /* @__PURE__ */ React.createElement(
            SingleBalance,
            {
              assetCode: buying.getCode(),
              balance: String(Big(props.offer.amount).mul(props.offer.price)),
              inline: true,
              style: { marginLeft: "0.35em", marginRight: "0.35em" }
            }
          ))) : /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "bold" } }, /* @__PURE__ */ React.createElement(Trans, { i18nKey: "account.transactions.offer-list.text.buy" }, "Buy", /* @__PURE__ */ React.createElement(
            SingleBalance,
            {
              assetCode: buying.getCode(),
              balance: String(Big(props.offer.amount).mul(props.offer.price)),
              inline: true,
              style: { marginLeft: "0.35em", marginRight: "0.35em" }
            }
          ), "for", /* @__PURE__ */ React.createElement(
            SingleBalance,
            {
              assetCode: selling.getCode(),
              balance: props.offer.amount,
              inline: true,
              style: { marginLeft: "0.35em", marginRight: "0.35em" }
            }
          )))
        ),
        primaryTypographyProps: {
          style: { overflow: "hidden", textOverflow: "ellipsis" }
        },
        style: { paddingRight: isSmallScreen ? 0 : void 0 }
      }
    ),
    /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primaryTypographyProps: { align: "right" },
        style: { display: isSmallScreen ? "none" : void 0, flexShrink: 0, paddingRight: 0 }
      },
      /* @__PURE__ */ React.createElement(HorizontalLayout, { alignItems: "center", inline: true, style: { fontSize: "1.4rem" } }, /* @__PURE__ */ React.createElement("b", null, selling.getCode()), " ", /* @__PURE__ */ React.createElement(ArrowRightIcon, { style: { fontSize: "150%" } }), " ", /* @__PURE__ */ React.createElement("b", null, buying.getCode()))
    )
  );
});
const LoadMoreOffersListItem = React.memo(function LoadMoreOffersListItem2(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(ListItem, { style: { borderBottom: "none", height: 75 } }, /* @__PURE__ */ React.createElement(ListItemText, { disableTypography: true, style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement(
    ActionButton,
    {
      onClick: props.onClick,
      loading: props.pending,
      style: { margin: "0 auto", paddingLeft: 16, paddingRight: 16 },
      variant: "text"
    },
    t("account.transactions.transaction-list.load-more.label")
  )));
});
const useStyles = makeStyles({
  expansionPanel: {
    background: "transparent",
    "&:before": {
      background: "transparent"
    }
  },
  expansionPanelSummary: {
    justifyContent: "flex-start",
    minHeight: "48px !important",
    padding: 0
  },
  expansionPanelSummaryContent: {
    flexGrow: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important"
  },
  expansionPanelDetails: {
    display: "block",
    padding: 0
  },
  listItem: {
    padding: "8px 24px",
    [breakpoints.down(600)]: {
      paddingLeft: 24,
      paddingRight: 24
    }
  }
});
function OfferList(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const classes = useStyles();
  const horizon = useHorizon(props.account.testnet);
  const offerHistory = useLiveAccountOffers(props.account.accountID, props.account.testnet);
  const [moreTxsLoadingState, handleMoreTxsFetch] = useLoadingState();
  const fetchMoreOffers = useOlderOffers(props.account.accountID, props.account.testnet);
  const [expanded, setExpanded] = React.useState(true);
  const handleFetchMoreOffers = React.useCallback(() => handleMoreTxsFetch(fetchMoreOffers()), [
    fetchMoreOffers,
    handleMoreTxsFetch
  ]);
  const onCancel = async (offer) => {
    try {
      const tx = await createDismissalTransaction(horizon, props.account, accountData, offer);
      await props.sendTransaction(tx);
    } catch (error) {
      trackError(error);
    }
  };
  return offerHistory.offers.length === 0 ? null : /* @__PURE__ */ React.createElement(List, { style: { background: "transparent" } }, /* @__PURE__ */ React.createElement(
    ExpansionPanel,
    {
      className: classes.expansionPanel,
      elevation: 0,
      expanded,
      onChange: () => setExpanded(!expanded)
    },
    /* @__PURE__ */ React.createElement(
      ExpansionPanelSummary,
      {
        classes: { root: classes.expansionPanelSummary, content: classes.expansionPanelSummaryContent },
        expandIcon: /* @__PURE__ */ React.createElement(ExpandMoreIcon, null)
      },
      /* @__PURE__ */ React.createElement(
        ListSubheader$1,
        {
          className: classes.listItem,
          disableSticky: true,
          style: { background: "transparent", paddingRight: 0 }
        },
        props.title
      )
    ),
    /* @__PURE__ */ React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails }, offerHistory.offers.map((offer) => /* @__PURE__ */ React.createElement(
      OfferListItem,
      {
        key: offer.id,
        accountPublicKey: props.account.accountID,
        offer,
        onCancel: () => onCancel(offer)
      }
    )), offerHistory.olderOffersAvailable ? /* @__PURE__ */ React.createElement(LoadMoreOffersListItem, { pending: moreTxsLoadingState.type === "pending", onClick: handleFetchMoreOffers }) : null)
  ));
}
function OfferListContainer(props) {
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account }, ({ sendTransaction }) => /* @__PURE__ */ React.createElement(OfferList, { ...props, sendTransaction }));
}
var reactHumanTime = {};
var human_1;
var hasRequiredHuman;
function requireHuman() {
  if (hasRequiredHuman) return human_1;
  hasRequiredHuman = 1;
  var util = requireUtil();
  human_1 = human;
  function human(seconds) {
    if (seconds instanceof Date)
      seconds = Math.round((Date.now() - seconds) / 1e3);
    var suffix = seconds < 0 ? "from now" : "ago";
    seconds = Math.abs(seconds);
    var times = [
      seconds / 60 / 60 / 24 / 365,
      // years
      seconds / 60 / 60 / 24 / 30,
      // months
      seconds / 60 / 60 / 24 / 7,
      // weeks
      seconds / 60 / 60 / 24,
      // days
      seconds / 60 / 60,
      // hours
      seconds / 60,
      // minutes
      seconds
      // seconds
    ];
    var names = ["year", "month", "week", "day", "hour", "minute", "second"];
    for (var i = 0; i < names.length; i++) {
      var time = Math.floor(times[i]);
      if (time > 1)
        return util.format("%d %ss %s", time, names[i], suffix);
      else if (time === 1)
        return util.format("%d %s %s", time, names[i], suffix);
    }
    return util.format("0 seconds %s", suffix);
  }
  return human_1;
}
var hasRequiredReactHumanTime;
function requireReactHumanTime() {
  if (hasRequiredReactHumanTime) return reactHumanTime;
  hasRequiredReactHumanTime = 1;
  var __extends = reactHumanTime && reactHumanTime.__extends || function() {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(reactHumanTime, "__esModule", { value: true });
  var react_1 = requireReact();
  var human = requireHuman();
  var HumanTime2 = (
    /** @class */
    function(_super) {
      __extends(HumanTime3, _super);
      function HumanTime3(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getStateFromProps(props);
        return _this;
      }
      HumanTime3.prototype.getStateFromProps = function(props) {
        return {
          formattedTime: human(new Date(props.time)).replace(/minute/, "min").replace(/^.*second.*$/, "now")
        };
      };
      HumanTime3.prototype.componentDidMount = function() {
        var _this = this;
        this._timer = setInterval(function() {
          return _this.setState(_this.getStateFromProps(_this.props));
        }, this.props.period || 3e4);
      };
      HumanTime3.prototype.componentWillUnmount = function() {
        clearInterval(this._timer);
      };
      HumanTime3.prototype.render = function() {
        return this.state.formattedTime;
      };
      return HumanTime3;
    }(react_1.Component)
  );
  reactHumanTime.default = HumanTime2;
  return reactHumanTime;
}
var reactHumanTimeExports = requireReactHumanTime();
const HumanTime = /* @__PURE__ */ getDefaultExportFromCjs(reactHumanTimeExports);
const dedupe = (array) => Array.from(new Set(array));
const doNothing = () => void 0;
function sum(...amounts) {
  return amounts.reduce((total, amount) => total.add(amount), Big(0));
}
function EntryAnimation(props) {
  return props.animate ? /* @__PURE__ */ React.createElement(Collapse, { appear: true, enter: false, in: true, timeout: { enter: 1e3 } }, props.children) : /* @__PURE__ */ React.createElement(React.Fragment, null, props.children);
}
function OfferDescription(props) {
  const { amount, buying, offerId, price, selling } = props;
  const { t } = useTranslation();
  let prefix;
  if (offerId === "0") {
    prefix = `${t("account.transactions.transaction-list.offer-description.prefix.default")}: `;
  } else if (amount.eq(0)) {
    prefix = `${t("account.transactions.transaction-list.offer-description.prefix.cancel")}: `;
  } else {
    prefix = `${t("account.transactions.transaction-list.offer-description.prefix.update")}: `;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, prefix, props.type === "manageBuyOffer" ? t(
    "account.transactions.transaction-list.offer-description.buy",
    `Buy ${amount.eq(0) ? "" : formatBalance(amount.toString())} ${buying.code} for ${amount.eq(0) ? "" : formatBalance(amount.mul(price).toString())} ${selling.code}`,
    {
      buyingAmount: amount.eq(0) ? "" : formatBalance(amount.toString()),
      buyingCode: buying.code,
      sellingAmount: amount.eq(0) ? "" : formatBalance(amount.mul(price).toString()),
      sellingCode: selling.code
    }
  ) : t(
    "account.transactions.transaction-list.offer-description.sell",
    `Sell ${amount.eq(0) ? "" : formatBalance(amount.toString())} ${selling.code} for ${amount.eq(0) ? "" : formatBalance(amount.mul(price).toString())} ${buying.code}`,
    {
      buyingAmount: amount.eq(0) ? "" : formatBalance(amount.mul(price).toString()),
      buyingCode: buying.code,
      sellingAmount: amount.eq(0) ? "" : formatBalance(amount.toString()),
      sellingCode: selling.code
    }
  ));
}
function RemotePublicKeys(props) {
  const { t } = useTranslation();
  if (props.publicKeys.length === 0) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, "-");
  } else if (props.publicKeys.length === 1) {
    return /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.publicKeys[0], testnet: props.testnet, variant: props.short ? "short" : "full" });
  } else {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.publicKeys[0], testnet: props.testnet, variant: "short" }), " ", /* @__PURE__ */ React.createElement("i", null, "+ ", props.publicKeys.length - 1, " ", t("account.transactions.transaction-list.item.remote-public-keys.more")));
  }
}
const Time = React.memo(function Time2(props) {
  const date = new Date(props.time);
  return /* @__PURE__ */ React.createElement("span", { style: { whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement(HumanTime, { time: date.getTime() }));
});
function TransactionIcon(props) {
  if (props.transaction.operations.length === 1 && ["manageBuyOffer", "manageSellOffer"].includes(props.transaction.operations[0].type)) {
    return /* @__PURE__ */ React.createElement(SwapHorizIcon, null);
  } else if (props.transaction.operations.length === 1 && props.transaction.operations[0].type === "changeTrust") {
    return Big(props.transaction.operations[0].limit).eq(0) ? /* @__PURE__ */ React.createElement(RemoveIcon, null) : /* @__PURE__ */ React.createElement(AddIcon, null);
  } else if (props.transaction.operations.every((operation) => operation.type === "accountMerge")) {
    return /* @__PURE__ */ React.createElement(CallReceivedIcon, null);
  } else if (props.paymentSummary.length === 0) {
    return /* @__PURE__ */ React.createElement(SettingsIcon, null);
  } else if (props.paymentSummary.every((summaryItem) => summaryItem.balanceChange.gt(0))) {
    return /* @__PURE__ */ React.createElement(CallReceivedIcon, null);
  } else if (props.paymentSummary.every((summaryItem) => summaryItem.balanceChange.lt(0))) {
    return /* @__PURE__ */ React.createElement(CallMadeIcon, null);
  } else {
    return /* @__PURE__ */ React.createElement(SwapHorizIcon, null);
  }
}
const TransactionItemText = React.memo(function TransactionItemText2(props) {
  const getOperationTitle = useOperationTitle();
  const { t } = useTranslation();
  const remotePublicKeys = props.paymentSummary.reduce(
    (pubKeys, summaryItem) => pubKeys.concat(summaryItem.publicKeys),
    []
  );
  const testnet = props.transaction.networkPassphrase === libExports.Networks.TESTNET;
  const secondary = React.useMemo(
    () => /* @__PURE__ */ React.createElement("span", { style: { display: "block", overflow: "hidden", textOverflow: "ellipsis" } }, /* @__PURE__ */ React.createElement(Time, { time: props.createdAt }), props.showMemo && props.transaction.memo.type !== "none" ? /* @__PURE__ */ React.createElement(React.Fragment, null, "  |  ", /* @__PURE__ */ React.createElement(
      MemoMessage,
      {
        prefix: /* @__PURE__ */ React.createElement(React.Fragment, null, t("account.transactions.transaction-list.item.memo"), ": "),
        memo: props.transaction.memo
      }
    )) : null),
    [props.createdAt, props.showMemo, props.transaction, t]
  );
  if (remotePublicKeys.length > 0 && props.paymentSummary.every((summaryItem) => summaryItem.balanceChange.gt(0))) {
    return /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement("span", null, t("account.transactions.transaction-list.item.from"), " ", /* @__PURE__ */ React.createElement(RemotePublicKeys, { publicKeys: remotePublicKeys, short: true, testnet })),
        primaryTypographyProps: { style: props.style },
        secondary,
        style: props.style
      }
    );
  } else if (remotePublicKeys.length > 0 && props.paymentSummary.every((summaryItem) => summaryItem.balanceChange.lt(0))) {
    return /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement("span", null, t("account.transactions.transaction-list.item.to"), " ", /* @__PURE__ */ React.createElement(RemotePublicKeys, { publicKeys: remotePublicKeys, short: true, testnet }), props.alwaysShowSource ? /* @__PURE__ */ React.createElement("span", null, " ", t("account.transactions.transaction-list.item.from"), " ", /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.accountPublicKey, testnet, variant: "short" }), " ") : null),
        primaryTypographyProps: { style: props.style },
        secondary,
        style: props.style
      }
    );
  } else if (props.transaction.operations.length === 1 && props.transaction.operations[0].type === "changeTrust") {
    const operation = props.transaction.operations[0];
    return Big(operation.limit).eq(0) ? /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement("span", null, t(
          "account.transactions.transaction-list.item.trust.remove-trust",
          `Remove trust in asset ${stringifyAssetToReadableString(operation.line)}`,
          { asset: stringifyAssetToReadableString(operation.line) }
        ), props.alwaysShowSource ? /* @__PURE__ */ React.createElement(React.Fragment, null, " ", "(", /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.accountPublicKey, testnet, variant: "short" }), ")") : null),
        primaryTypographyProps: { style: props.style },
        secondary,
        style: props.style
      }
    ) : /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement("span", null, t(
          "account.transactions.transaction-list.item.trust.add-trust",
          `Trust asset ${stringifyAssetToReadableString(operation.line)}`,
          {
            asset: stringifyAssetToReadableString(operation.line)
          }
        ), props.alwaysShowSource ? /* @__PURE__ */ React.createElement(React.Fragment, null, " ", "(", /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.accountPublicKey, testnet, variant: "short" }), ")") : null),
        primaryTypographyProps: { style: props.style },
        secondary,
        style: props.style
      }
    );
  } else if (props.transaction.operations.length === 1 && ["manageBuyOffer", "manageSellOffer"].includes(props.transaction.operations[0].type)) {
    const operation = props.transaction.operations[0];
    const amount = Big(operation.type === "manageBuyOffer" ? operation.buyAmount : operation.amount);
    if (String(operation.offerId) === "0") {
      return /* @__PURE__ */ React.createElement(
        ListItemText,
        {
          primary: /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(OfferDescription, { ...operation, amount, price: Big(operation.price) }), props.alwaysShowSource ? /* @__PURE__ */ React.createElement(React.Fragment, null, " ", "(", /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.accountPublicKey, testnet, variant: "short" }), ")") : null),
          primaryTypographyProps: { style: props.style },
          secondary,
          style: props.style
        }
      );
    } else if (amount.eq(0)) {
      return /* @__PURE__ */ React.createElement(
        ListItemText,
        {
          primary: /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(OfferDescription, { ...operation, amount: Big(0), price: Big(operation.price) }), props.alwaysShowSource ? /* @__PURE__ */ React.createElement(React.Fragment, null, " ", "(", /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.accountPublicKey, testnet, variant: "short" }), ")") : null),
          primaryTypographyProps: { style: props.style },
          secondary,
          style: props.style
        }
      );
    } else {
      return /* @__PURE__ */ React.createElement(
        ListItemText,
        {
          primary: /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(OfferDescription, { ...operation, amount, price: Big(operation.price) }), props.alwaysShowSource ? /* @__PURE__ */ React.createElement(React.Fragment, null, " ", "(", /* @__PURE__ */ React.createElement(PublicKey, { publicKey: props.accountPublicKey, testnet, variant: "short" }), ")") : null),
          primaryTypographyProps: { style: props.style },
          secondary,
          style: props.style
        }
      );
    }
  } else {
    const formattedOperations = props.transaction.operations.map(getOperationTitle);
    return /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: /* @__PURE__ */ React.createElement("span", null, dedupe(formattedOperations).join(", ")),
        primaryTypographyProps: { style: props.style },
        secondary,
        style: props.style
      }
    );
  }
});
function TransactionListItemBalance(props) {
  const { paymentSummary } = props;
  const isSmallScreen = useIsMobile();
  const creationOps = props.transaction.operations.filter(
    (op) => op.type === "createAccount"
  );
  const paymentOps = props.transaction.operations.filter((op) => op.type === "payment");
  const balanceChange = paymentSummary.every(
    (payment) => payment.publicKeys.every((pubkey) => pubkey === props.accountPublicKey)
  ) ? sum(...creationOps.map((op) => op.startingBalance), ...paymentOps.map((op) => op.amount)) : paymentSummary[0].balanceChange;
  return /* @__PURE__ */ React.createElement(ListItemText, { primaryTypographyProps: { align: "right" }, style: { flexShrink: 0, ...props.style } }, paymentSummary.length === 0 ? null : /* @__PURE__ */ React.createElement(
    SingleBalance,
    {
      assetCode: paymentSummary[0].asset.getCode(),
      balance: balanceChange.toString(),
      style: isSmallScreen ? { fontSize: "1rem" } : { fontSize: "1.4rem" }
    }
  ));
}
const TransactionListItem = React.memo(function TransactionListItem2(props) {
  const { hideMemos } = React.useContext(SettingsContext);
  const isSmallScreen = useIsMobile();
  const { transaction, onOpenTransaction } = props;
  const paymentSummary = getPaymentSummary(props.accountPublicKey, transaction);
  const onOpen = onOpenTransaction ? () => onOpenTransaction(transaction.hash().toString("hex")) : void 0;
  return /* @__PURE__ */ React.createElement(ListItem, { button: Boolean(onOpen), className: props.className || "", onClick: onOpen, style: props.style }, /* @__PURE__ */ React.createElement(ListItemIcon, { style: { marginRight: isSmallScreen ? 0 : void 0 } }, props.icon || /* @__PURE__ */ React.createElement(TransactionIcon, { paymentSummary, transaction })), /* @__PURE__ */ React.createElement(
    TransactionItemText,
    {
      accountPublicKey: props.accountPublicKey,
      alwaysShowSource: props.alwaysShowSource,
      createdAt: props.createdAt,
      paymentSummary,
      showMemo: !hideMemos,
      style: {
        fontSize: isSmallScreen ? "0.8rem" : void 0,
        fontWeight: "bold",
        overflow: "hidden",
        paddingRight: 0,
        textOverflow: "ellipsis"
      },
      transaction
    }
  ), /* @__PURE__ */ React.createElement(
    TransactionListItemBalance,
    {
      accountPublicKey: props.accountPublicKey,
      paymentSummary,
      style: { paddingRight: 0 },
      transaction
    }
  ));
});
const LoadMoreTransactionsListItem = React.memo(function LoadMoreTransactionsListItem2(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(ListItem, { style: { borderBottom: "none", height: 75 } }, /* @__PURE__ */ React.createElement(ListItemText, { disableTypography: true, style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement(
    ActionButton,
    {
      onClick: props.onClick,
      loading: props.pending,
      style: { margin: "0 auto", paddingLeft: 16, paddingRight: 16 },
      variant: "text"
    },
    t("account.transactions.transaction-list.load-more.label")
  )));
});
const useTransactionListStyles = makeStyles$1({
  listItem: {
    padding: "8px 24px",
    [breakpoints.down(600)]: {
      paddingLeft: 24,
      paddingRight: 24
    }
  }
});
function TransactionList(props) {
  const classes = useTransactionListStyles();
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const openedTxHash = matchesRoute(router.location.pathname, showTransaction("*", "*")) ? router.match.params.subaction : null;
  const openedTransaction = React.useMemo(() => {
    if (!openedTxHash) {
      return null;
    }
    const txResponse = props.transactions.find((recentTx) => recentTx.hash === openedTxHash);
    const tx = txResponse ? txResponse.decodedTx : null;
    return tx && txResponse ? Object.assign(tx, { created_at: txResponse.created_at }) : tx;
  }, [openedTxHash, props.transactions]);
  const openTransaction = React.useCallback(
    (transactionHash) => {
      router.history.push(showTransaction(props.account.id, transactionHash));
    },
    [props.account.id, router.history]
  );
  const closeTransaction = React.useCallback(() => {
    router.history.push(account(props.account.id));
    setTimeout(() => {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }, 0);
  }, [props.account.id, router.history]);
  const transactionListItems = React.useMemo(
    () => /* @__PURE__ */ React.createElement(React.Fragment, null, props.transactions.map((transaction) => /* @__PURE__ */ React.createElement(
      EntryAnimation,
      {
        key: transaction.hash,
        animate: Date.now() - new Date(transaction.created_at).getTime() < 1e4
      },
      /* @__PURE__ */ React.createElement(InlineErrorBoundary, { height: 72 }, /* @__PURE__ */ React.createElement(
        TransactionListItem,
        {
          key: transaction.hash,
          accountPublicKey: props.account.publicKey,
          className: classes.listItem,
          createdAt: transaction.created_at,
          onOpenTransaction: openTransaction,
          transaction: transaction.decodedTx
        }
      ))
    ))),
    [props.transactions, props.account.publicKey, classes.listItem, openTransaction]
  );
  if (props.transactions.length === 0 && !props.olderTransactionsAvailable) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(List, { disablePadding: isSmallScreen, style: { background: props.background } }, /* @__PURE__ */ React.createElement(ListSubheader$1, { className: classes.listItem, disableSticky: true, style: { background: props.background } }, props.title), transactionListItems, props.olderTransactionsAvailable ? /* @__PURE__ */ React.createElement(LoadMoreTransactionsListItem, { pending: props.loadingMoreTransactions, onClick: props.onFetchMoreTransactions }) : null, /* @__PURE__ */ React.createElement(
    TransactionReviewDialog,
    {
      open: openedTransaction !== null,
      account: props.account,
      disabled: true,
      showSource: true,
      showSubmissionProgress: false,
      transaction: openedTransaction,
      onClose: closeTransaction,
      onSubmitTransaction: doNothing
    }
  ));
}
const TransactionList$1 = React.memo(TransactionList);
function SignatureRequestListItem(props) {
  const { onOpenTransaction, signatureRequest } = props;
  const tx = React.useMemo(() => new TransactionStellarUri(signatureRequest.req).getTransaction(), [
    signatureRequest.req
  ]);
  const openTransaction = React.useCallback(
    onOpenTransaction ? () => onOpenTransaction(tx, signatureRequest) : () => void 0,
    [onOpenTransaction, signatureRequest, tx]
  );
  return /* @__PURE__ */ React.createElement(
    TransactionListItem,
    {
      alwaysShowSource: true,
      accountPublicKey: tx.source,
      createdAt: signatureRequest.created_at,
      icon: props.icon,
      onOpenTransaction: openTransaction,
      style: props.style,
      transaction: tx
    }
  );
}
const SignatureRequestList = React.memo(function SignatureRequestList2(props) {
  const { sendTransaction } = props;
  const router = useRouter();
  React.useEffect(() => {
    const handleNavigation = (pathname) => {
      if (matchesRoute(pathname, showTransaction("*", "*"))) {
        const [, , , hash] = pathname.replace(/^\//, "").split("/");
        const signatureRequest = props.signatureRequests.find((sr) => sr.hash === hash);
        if (signatureRequest) {
          const stellarUri = new TransactionStellarUri(signatureRequest.req);
          sendTransaction(stellarUri.getTransaction(), signatureRequest);
        }
      }
    };
    handleNavigation(router.location.pathname);
    const unsubscribe = router.history.listen((location) => {
      handleNavigation(location.pathname);
    });
    return unsubscribe;
  }, [router.history, router.location.pathname, sendTransaction, props.signatureRequests]);
  const openSignatureRequest = (tx, signatureRequest) => {
    router.history.push(showTransaction(props.account.id, signatureRequest.hash));
  };
  if (props.signatureRequests.length === 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(List, { style: { background: "transparent" } }, /* @__PURE__ */ React.createElement(ListSubheader$1, { disableSticky: true, style: { background: "transparent" } }, props.title), props.signatureRequests.map((signatureRequest) => /* @__PURE__ */ React.createElement(InlineErrorBoundary, { height: 72, key: signatureRequest.hash }, /* @__PURE__ */ React.createElement(
    SignatureRequestListItem,
    {
      icon: props.icon,
      onOpenTransaction: openSignatureRequest,
      signatureRequest,
      style: {
        minHeight: 72
      }
    }
  )))));
});
const InteractiveSignatureRequestList = React.memo(
  (props) => {
    const router = useRouter();
    const forceClose = !matchesRoute(router.location.pathname, showTransaction("*", "*"));
    const onCloseDialog = React.useCallback(() => {
      router.history.push(routeUp(router.location.pathname));
    }, [router]);
    return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account, forceClose, onCloseTransactionDialog: onCloseDialog }, ({ sendTransaction }) => /* @__PURE__ */ React.createElement(
      SignatureRequestList,
      {
        account: props.account,
        icon: props.icon,
        sendTransaction,
        signatureRequests: props.signatureRequests,
        title: props.title
      }
    ));
  }
);
const excludeClaimableFilter = (account2, tx) => !tx.decodedTx.operations.every(
  (o) => o.type === "createClaimableBalance" || o.type === "claimClaimableBalance" && o.source !== account2.publicKey
);
const excludeDustFilter = (account2, tx) => !isDustTransaction(tx.decodedTx, account2);
function PendingMultisigTransactions(props) {
  const { pendingSignatureRequests } = React.useContext(SignatureDelegationContext);
  const { t } = useTranslation();
  const cosignIcon = React.useMemo(() => /* @__PURE__ */ React.createElement(DoneAllIcon, null), []);
  const waitingIcon = React.useMemo(() => /* @__PURE__ */ React.createElement(UpdateIcon, { style: { opacity: 0.5 } }), []);
  const pendingRequestsToCosign = React.useMemo(() => {
    return pendingSignatureRequests.filter(
      (request) => request.status !== "submitted" && request.signers.some((signer) => signer === props.account.publicKey) && request.signed_by.indexOf(props.account.publicKey) === -1
    );
  }, [props.account, pendingSignatureRequests]);
  const pendingRequestsWaitingForOthers = React.useMemo(() => {
    return pendingSignatureRequests.filter(
      (request) => request.status !== "submitted" && request.signers.some((signer) => signer === props.account.publicKey) && request.signed_by.indexOf(props.account.publicKey) > -1
    );
  }, [props.account, pendingSignatureRequests]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    InteractiveSignatureRequestList,
    {
      account: props.account,
      icon: cosignIcon,
      signatureRequests: pendingRequestsToCosign,
      title: t("account.transactions.signature-request-list.title.requests-to-cosign")
    }
  ), /* @__PURE__ */ React.createElement(
    InteractiveSignatureRequestList,
    {
      account: props.account,
      icon: waitingIcon,
      signatureRequests: pendingRequestsWaitingForOthers,
      title: t("account.transactions.signature-request-list.title.requests-waiting-for-others")
    }
  ));
}
function AccountTransactions(props) {
  const { account: account2 } = props;
  const { showDust, showClaimableBalanceTxs } = React.useContext(SettingsContext);
  const { t } = useTranslation();
  const accountData = useLiveAccountData(account2.accountID, account2.testnet);
  const horizonURLs = useHorizonURLs(account2.testnet);
  const isSmallScreen = useIsMobile();
  const [moreTxsLoadingState, handleMoreTxsFetch] = useLoadingState();
  const txsFilter = React.useCallback(
    (txs) => txs.filter((tx) => {
      return (showClaimableBalanceTxs || excludeClaimableFilter(account2, tx)) && (showDust || excludeDustFilter(account2, tx));
    }),
    []
  );
  const { transactions, olderTransactionsAvailable, fetchMoreTransactions } = useFilteredTransactions(
    account2.accountID,
    account2.testnet,
    txsFilter
  );
  const router = useRouter();
  const settings = React.useContext(SettingsContext);
  const handleFetchMoreTransactions = React.useCallback(() => handleMoreTxsFetch(fetchMoreTransactions()), [
    fetchMoreTransactions,
    handleMoreTxsFetch
  ]);
  const navigateToDeposit = React.useCallback(() => router.history.push(depositAsset(account2.id)), [
    account2,
    router
  ]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, accountData.balances.length > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, settings.multiSignature ? /* @__PURE__ */ React.createElement(PendingMultisigTransactions, { account: account2 }) : null, /* @__PURE__ */ React.createElement(OfferListContainer, { account: account2, title: t("account.transactions.offer-list.title") }), /* @__PURE__ */ React.createElement(
    TransactionList$1,
    {
      account: account2,
      background: "transparent",
      loadingMoreTransactions: moreTxsLoadingState.type === "pending",
      olderTransactionsAvailable,
      onFetchMoreTransactions: handleFetchMoreTransactions,
      title: t("account.transactions.transaction-list.title"),
      transactions
    }
  )) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    VerticalLayout,
    {
      alignItems: "stretch",
      margin: "0 auto",
      style: { padding: isSmallScreen ? "16px 28px" : "32px 28px", width: "fit-content" }
    },
    account2.testnet ? /* @__PURE__ */ React.createElement(
      FriendbotButton,
      {
        horizonURL: horizonURLs[0],
        publicKey: account2.publicKey,
        style: { marginBottom: isSmallScreen ? 16 : 32 }
      }
    ) : null,
    /* @__PURE__ */ React.createElement(
      MainSelectionButton,
      {
        Icon: CreditCardIcon,
        description: t("account.transactions.action.navigate-to-deposit.description"),
        label: t("account.transactions.action.navigate-to-deposit.label"),
        onClick: navigateToDeposit
      }
    )
  )));
}
const AccountTransactions$1 = React.memo(AccountTransactions);
export {
  AccountTransactions$1 as default
};
//# sourceMappingURL=AccountTransactions-DUngX3mh.js.map
