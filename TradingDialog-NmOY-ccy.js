import { R as React, Z as useTranslation, a7 as HorizontalLayout, bJ as AddIcon, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, ao as Big, bd as findMatchingBalanceLine, be as getAccountMinimumBalance, bc as getSpendableBalance, bX as BASE_RESERVE, ad as InputAdornment, by as Select, ac as TextField, ab as makeStyles, a8 as useIsMobile, aR as useMediaQuery, bb as useForm, a5 as libExports, b4 as useHorizon, c1 as useLiveOrderbook, au as balancelineToAsset, a4 as CustomError, aL as trackError, ak as VerticalLayout, bl as Controller, bK as Button, av as ReadOnlyTextfield, E as Typography, af as Box, aP as warningColor, $ as DialogActionsBox, a0 as ActionButton, a1 as useRouter, X as useLiveAccountData, a$ as useDialogActions, at as stringifyAsset, aj as ViewLoading, b0 as DialogBody, a9 as MainTitle, bs as InlineErrorBoundary, bW as parseAssetID } from "./app-DBEXmgIl.js";
import { n as formatBalance, p as isValidAmount, F as FormBigNumber, M as MenuItem, c as createTransaction, q as AssetSelector, E as ExpandMoreIcon, P as Portal, T as TransactionSender, b as account, k as matchesRoute, t as tradeAsset, r as Carousel, v as Box$1, m as manageAccountAssets, w as TestnetBadge, x as LazyScrollableBalances, y as getLastArgumentFromURL } from "./app-stage2-CwdMAbKU.js";
import { R as RemoveIcon, E as ExpansionPanel, a as ExpansionPanelSummary, b as ExpansionPanelDetails } from "./Remove-BppeerbV.js";
import { M as MainSelectionButton } from "./MainSelectionButton-DPV1xu8i.js";
const MainActionSelection = React.forwardRef(function MainActionSelection2(props, ref) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(HorizontalLayout, { ref, justifyContent: "space-evenly", margin: "48px 0 24px", padding: "0 8px", wrap: "wrap" }, /* @__PURE__ */ React.createElement(
    MainSelectionButton,
    {
      label: t("trading.action-selection.buy.label"),
      description: t("trading.action-selection.buy.description"),
      gutterBottom: true,
      onClick: props.onSelectBuy,
      Icon: AddIcon
    }
  ), /* @__PURE__ */ React.createElement(
    MainSelectionButton,
    {
      label: t("trading.action-selection.sell.label"),
      description: t("trading.action-selection.sell.description"),
      gutterBottom: true,
      onClick: props.onSelectSell,
      Icon: RemoveIcon
    }
  ));
});
const MainActionSelection$1 = React.memo(MainActionSelection);
var Gavel = {};
var hasRequiredGavel;
function requireGavel() {
  if (hasRequiredGavel) return Gavel;
  hasRequiredGavel = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Gavel, "__esModule", {
    value: true
  });
  Gavel.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"
  })), "Gavel");
  Gavel.default = _default;
  return Gavel;
}
var GavelExports = /* @__PURE__ */ requireGavel();
const GavelIcon = /* @__PURE__ */ getDefaultExportFromCjs(GavelExports);
function calculateSpread(asks, bids) {
  if (asks.length === 0 || bids.length === 0) {
    return {
      absoluteSpread: 0,
      relativeSpread: 0
    };
  }
  const absoluteSpread = Number.parseFloat(asks[0].price) - Number.parseFloat(bids[0].price);
  const relativeSpread = absoluteSpread / Math.min(Number.parseFloat(asks[0].price), Number.parseFloat(bids[0].price));
  return {
    absoluteSpread,
    relativeSpread
  };
}
const sum = (numbers) => numbers.reduce((total, no) => total.add(no), Big(0));
function useConversionOffers(offers, amount, invertOfferAmounts = false) {
  const bestOffers = invertOfferAmounts ? offers.map((offer) => ({
    ...offer,
    amount: Big(offer.price).eq(0) ? Big(0).toFixed(7) : Big(offer.amount).div(offer.price).toFixed(7)
  })) : offers;
  const bestMatches = React.useMemo(() => {
    const offersToCover = [];
    let volume = Big(0);
    for (const matchingOffer of bestOffers) {
      if (volume.gte(amount)) {
        break;
      }
      if (!Big(matchingOffer.price).eq(0)) {
        offersToCover.push(matchingOffer);
        volume = volume.add(matchingOffer.amount);
      }
    }
    return {
      offers: offersToCover,
      volume
    };
  }, [bestOffers, amount]);
  const bestPrices = bestMatches.offers.map((offer) => Big(offer.price));
  const worstPriceOfBestMatches = bestPrices.length > 0 ? bestPrices[bestPrices.length - 1] : void 0;
  const firstBestOffers = bestMatches.offers.slice(0, -1);
  const lastBestOffer = bestMatches.offers[bestMatches.offers.length - 1];
  const estimatedReturn = sum([
    ...firstBestOffers.slice(0, -1).map((offer) => Big(offer.amount).mul(offer.price)),
    lastBestOffer ? Big(lastBestOffer.price).mul(Big(lastBestOffer.amount).sub(bestMatches.volume.sub(amount))) : Big(0)
  ]);
  return {
    estimatedReturn,
    worstPriceOfBestMatches
  };
}
const bigNumberToInputValue = (bignum, overrides) => formatBalance(bignum, { minimumSignificants: 3, maximumSignificants: 9, groupThousands: false, ...overrides });
function getSpendableBalanceWithoutBaseReserve(accountMinimumBalance, balanceLine) {
  const spendableBalance = getSpendableBalance(accountMinimumBalance, balanceLine).minus(
    // subtract base-reserve when asset_type is native because placing a new order requires 1 * base-reserve XLM
    Big(balanceLine.asset_type === "native" ? BASE_RESERVE : Big(0))
  );
  return spendableBalance.cmp(Big(0)) < 0 ? Big(0) : spendableBalance;
}
function useCalculation(parameters) {
  const { accountData, priceMode, primaryAction, tradePair } = parameters;
  const { manualPrice, primaryAmountString, primaryAsset, secondaryAsset } = parameters.values;
  const price = manualPrice && isValidAmount(manualPrice) ? priceMode === "secondary" ? FormBigNumber(manualPrice) : FormBigNumber(manualPrice).eq(0) ? Big(0) : Big(1).div(FormBigNumber(manualPrice)) : Big(0);
  const primaryAmount = primaryAmountString && isValidAmount(primaryAmountString) ? FormBigNumber(primaryAmountString) : Big(0);
  const primaryBalance = primaryAsset ? findMatchingBalanceLine(accountData.balances, primaryAsset) : void 0;
  const secondaryBalance = secondaryAsset ? findMatchingBalanceLine(accountData.balances, secondaryAsset) : void 0;
  const { worstPriceOfBestMatches } = useConversionOffers(
    primaryAction === "buy" ? tradePair.asks : tradePair.bids,
    primaryAmount.gt(0) ? primaryAmount : Big(0.01),
    primaryAction === "sell"
  );
  const { relativeSpread } = calculateSpread(tradePair.asks, tradePair.bids);
  const bestPrice = worstPriceOfBestMatches && worstPriceOfBestMatches.gt(0) ? worstPriceOfBestMatches : void 0;
  const effectivePrice = price.gt(0) ? price : bestPrice || Big(0);
  const secondaryAmount = primaryAmount.mul(effectivePrice);
  const inversePrice = effectivePrice.eq(0) ? Big(0) : Big(1).div(effectivePrice);
  const defaultPrice = bigNumberToInputValue(priceMode === "secondary" ? effectivePrice : inversePrice);
  const minAccountBalance = getAccountMinimumBalance(accountData);
  const spendablePrimaryBalance = primaryBalance ? primaryAction === "sell" ? getSpendableBalanceWithoutBaseReserve(minAccountBalance, primaryBalance) : getSpendableBalance(minAccountBalance, primaryBalance) : Big(0);
  const spendableSecondaryBalance = secondaryBalance ? primaryAction === "buy" ? getSpendableBalanceWithoutBaseReserve(minAccountBalance, secondaryBalance) : getSpendableBalance(minAccountBalance, secondaryBalance) : Big(0);
  const maxPrimaryAmount = primaryAction === "buy" ? spendableSecondaryBalance.gt(0) && effectivePrice.gt(0) ? Big(spendableSecondaryBalance).div(effectivePrice) : Big(0) : spendablePrimaryBalance.gt(0) ? Big(spendablePrimaryBalance) : Big(0);
  return {
    defaultPrice,
    effectivePrice,
    maxPrimaryAmount,
    minAccountBalance,
    primaryAmount,
    primaryBalance,
    relativeSpread,
    secondaryAmount,
    secondaryBalance,
    spendablePrimaryBalance,
    spendableSecondaryBalance
  };
}
const TradingPrice = React.forwardRef(function TradingPrice2(props, ref) {
  var _a, _b;
  const isDisabled = !props.primaryAsset || !props.secondaryAsset;
  const { t } = useTranslation();
  const priceUnit = props.priceDenotedIn === "primary" ? (_a = props.secondaryAsset) == null ? void 0 : _a.getCode() : (_b = props.primaryAsset) == null ? void 0 : _b.getCode();
  const label = priceUnit ? t("trading.trading-price.label", { unit: priceUnit }) : t("trading.trading-price.default-label");
  const endAdornment = /* @__PURE__ */ React.createElement(InputAdornment, { position: "end" }, /* @__PURE__ */ React.createElement(
    Select,
    {
      disabled: isDisabled,
      disableUnderline: true,
      onChange: (event) => props.onSetPriceDenotedIn(event.target.value),
      style: { fontWeight: 400 },
      value: props.priceDenotedIn
    },
    /* @__PURE__ */ React.createElement(MenuItem, { selected: props.priceDenotedIn === "secondary", value: "secondary" }, props.secondaryAsset ? props.secondaryAsset.getCode() : ""),
    /* @__PURE__ */ React.createElement(MenuItem, { selected: props.priceDenotedIn === "primary", value: "primary" }, props.primaryAsset ? props.primaryAsset.getCode() : "")
  ));
  return /* @__PURE__ */ React.createElement(
    TextField,
    {
      inputProps: {
        pattern: "^[0-9]*(.[0-9]+)?$",
        inputMode: "decimal",
        min: "0.0000001"
      },
      InputProps: { endAdornment },
      inputRef: ref,
      error: Boolean(props.inputError),
      label: props.inputError || label,
      onBlur: props.onBlur,
      onChange: props.onChange,
      onFocus: props.selectOnFocus ? (event) => event.target.select() : void 0,
      style: props.style,
      value: props.defaultPrice ? props.defaultPrice : props.manualPrice
    }
  );
});
const TradingPrice$1 = React.memo(TradingPrice);
const useStyles = makeStyles({
  expansionPanel: {
    background: "transparent",
    margin: "8px 0 !important",
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
    justifyContent: "flex-start",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 12
  }
});
function TradingForm(props) {
  var _a;
  const classes = useStyles();
  const isSmallScreen = useIsMobile();
  const isSmallHeightScreen = useMediaQuery("(max-height: 500px)");
  const isSmallScreenXY = isSmallScreen || isSmallHeightScreen;
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);
  const [priceMode, setPriceMode] = React.useState("secondary");
  const [pending, setPending] = React.useState(false);
  const form = useForm({
    defaultValues: {
      primaryAsset: props.initialPrimaryAsset,
      primaryAmountString: "",
      secondaryAsset: libExports.Asset.native(),
      manualPrice: "0"
    }
  });
  const sendTransaction = props.sendTransaction;
  const { primaryAsset, secondaryAsset, manualPrice } = form.watch();
  React.useEffect(() => {
    if (!primaryAsset && props.initialPrimaryAsset) {
      form.setValue("primaryAsset", props.initialPrimaryAsset);
    }
  }, [form, primaryAsset, props.initialPrimaryAsset]);
  const horizon = useHorizon(props.account.testnet);
  const tradePair = useLiveOrderbook(primaryAsset || libExports.Asset.native(), secondaryAsset, props.account.testnet);
  const assets = React.useMemo(() => props.trustlines.map(balancelineToAsset), [props.trustlines]);
  const calculation = useCalculation({
    accountData: props.accountData,
    priceMode,
    primaryAction: props.primaryAction,
    tradePair,
    values: form.getValues()
  });
  const {
    maxPrimaryAmount,
    primaryBalance,
    defaultPrice,
    effectivePrice,
    primaryAmount,
    relativeSpread,
    secondaryAmount,
    secondaryBalance,
    spendablePrimaryBalance,
    spendableSecondaryBalance
  } = calculation;
  if (form.formState.touched.primaryAmountString) {
    setTimeout(() => form.triggerValidation("primaryAmountString"), 0);
  }
  const setPrimaryAmountToMax = () => {
    form.setValue("primaryAmountString", maxPrimaryAmount.toFixed(7));
  };
  const validateManualPrice = React.useCallback(() => {
    const value = FormBigNumber(manualPrice).gt(0) ? manualPrice : defaultPrice;
    const valid = isValidAmount(value) && FormBigNumber(value).gt(0);
    if (!valid) {
      if (!expanded) {
        setExpanded(true);
      }
      return t("trading.validation.invalid-price");
    }
  }, [defaultPrice, expanded, manualPrice, t]);
  const submitForm = React.useCallback(async () => {
    try {
      setPending(true);
      const error = validateManualPrice();
      if (error) {
        form.setError("manualPrice", "invalid-amount", error);
        return;
      }
      if (!primaryAsset) {
        throw CustomError(
          "InvariantViolationError",
          "Invariant violation: Should not be able to submit form without having selected the primary asset.",
          { message: "Should not be able to submit form without having selected the primary asset." }
        );
      }
      const spendableXLMBalance = getSpendableBalance(
        getAccountMinimumBalance(props.accountData),
        findMatchingBalanceLine(props.accountData.balances, libExports.Asset.native())
      );
      if (spendableXLMBalance.minus(0.5).cmp(0) <= 0) {
        throw CustomError("LowReserveOrderError", "Cannot place order because spendable XLM balance is too low.");
      }
      const tx = await createTransaction(
        [
          props.primaryAction === "buy" ? libExports.Operation.manageBuyOffer({
            buyAmount: primaryAmount.toFixed(7),
            buying: primaryAsset,
            offerId: 0,
            price: effectivePrice.toFixed(7),
            selling: secondaryAsset,
            withMuxing: true
          }) : libExports.Operation.manageSellOffer({
            amount: primaryAmount.toFixed(7),
            buying: secondaryAsset,
            offerId: 0,
            price: effectivePrice.toFixed(7),
            selling: primaryAsset,
            withMuxing: true
          })
        ],
        {
          accountData: props.accountData,
          horizon,
          walletAccount: props.account
        }
      );
      await sendTransaction(tx);
    } catch (error) {
      trackError(error);
    } finally {
      setPending(false);
    }
  }, [
    form,
    effectivePrice,
    horizon,
    primaryAsset,
    props.account,
    props.accountData,
    props.primaryAction,
    primaryAmount,
    secondaryAsset,
    sendTransaction,
    validateManualPrice
  ]);
  return (
    // set minHeight to prevent wrapping of layout when keyboard is shown
    /* @__PURE__ */ React.createElement(
      VerticalLayout,
      {
        alignItems: "stretch",
        alignSelf: isSmallScreenXY ? void 0 : "center",
        grow: 1,
        minHeight: 300,
        maxHeight: "100%",
        margin: isSmallScreen ? void 0 : "32px 0 0",
        padding: "16px 0",
        shrink: 1,
        width: "100%"
      },
      /* @__PURE__ */ React.createElement(
        VerticalLayout,
        {
          alignItems: "stretch",
          alignSelf: isSmallScreen ? "stretch" : "center",
          minWidth: isSmallScreen ? "75%" : 450,
          maxWidth: isSmallScreen ? "100%" : 500,
          padding: "0 2px",
          shrink: 0,
          width: "100%"
        },
        /* @__PURE__ */ React.createElement(HorizontalLayout, { margin: "8px 0" }, /* @__PURE__ */ React.createElement(
          Controller,
          {
            as: /* @__PURE__ */ React.createElement(
              AssetSelector,
              {
                assets,
                inputError: form.errors.primaryAsset && form.errors.primaryAsset.message,
                label: props.primaryAction === "buy" ? t("trading.inputs.primary-asset-selector.label.buy") : t("trading.inputs.primary-asset-selector.label.sell"),
                minWidth: 75,
                showXLM: true,
                style: { flexGrow: 1, marginRight: 24, maxWidth: 150, width: "25%" },
                testnet: props.account.testnet,
                value: primaryAsset
              }
            ),
            control: form.control,
            name: "primaryAsset",
            rules: {
              required: t("trading.validation.primary-asset-missing")
            }
          }
        ), /* @__PURE__ */ React.createElement(
          TextField,
          {
            name: "primaryAmountString",
            inputRef: form.register({
              required: t("trading.validation.primary-amount-missing"),
              validate: (value) => {
                const amountInvalid = primaryAmount.lt(0) || value.length > 0 && primaryAmount.eq(0);
                const exceedsBalance = props.primaryAction === "sell" && primaryBalance && primaryAmount.gt(spendablePrimaryBalance) || props.primaryAction === "buy" && secondaryBalance && secondaryAmount.gt(spendableSecondaryBalance);
                if (amountInvalid) {
                  return t("trading.validation.invalid-amount");
                } else if (exceedsBalance) {
                  return t("trading.validation.not-enough-balance");
                } else {
                  return true;
                }
              }
            }),
            error: Boolean(form.errors.primaryAmountString),
            inputProps: {
              pattern: "^[0-9]*(.[0-9]+)?$",
              inputMode: "decimal",
              min: "0.0000001",
              max: maxPrimaryAmount.toFixed(7),
              style: { height: 27 }
            },
            InputProps: {
              endAdornment: props.primaryAction === "buy" ? void 0 : /* @__PURE__ */ React.createElement(InputAdornment, { position: "end" }, /* @__PURE__ */ React.createElement(
                Button,
                {
                  disabled: !primaryAsset || !primaryBalance,
                  onClick: setPrimaryAmountToMax,
                  style: { boxShadow: "none", fontWeight: 400 }
                },
                t("trading.inputs.primary-amount.max-button.label")
              ))
            },
            label: form.errors.primaryAmountString && form.errors.primaryAmountString.message ? form.errors.primaryAmountString.message : props.primaryAction === "buy" ? t("trading.inputs.primary-amount.label.buy") : t("trading.inputs.primary-amount.label.sell"),
            placeholder: t(
              "trading.inputs.primary-amount.placeholder",
              `Max. ${bigNumberToInputValue(maxPrimaryAmount)}`,
              {
                amount: bigNumberToInputValue(maxPrimaryAmount)
              }
            ),
            required: true,
            style: { flexGrow: 1, flexShrink: 1, width: "55%" }
          }
        )),
        /* @__PURE__ */ React.createElement(HorizontalLayout, { margin: "8px 0 32px" }, /* @__PURE__ */ React.createElement(
          Controller,
          {
            as: /* @__PURE__ */ React.createElement(
              AssetSelector,
              {
                assets,
                label: props.primaryAction === "buy" ? t("trading.inputs.secondary-asset-selector.label.buy") : t("trading.inputs.secondary-asset-selector.label.sell"),
                minWidth: 75,
                showXLM: true,
                style: { flexGrow: 1, marginRight: 24, maxWidth: 150, width: "25%" },
                testnet: props.account.testnet,
                value: secondaryAsset
              }
            ),
            control: form.control,
            name: "secondaryAsset",
            rules: { required: t("trading.validation.secondary-asset-missing") }
          }
        ), /* @__PURE__ */ React.createElement(
          ReadOnlyTextfield,
          {
            disableUnderline: true,
            inputProps: {
              style: { height: 27 }
            },
            label: props.primaryAction === "buy" ? t("trading.inputs.estimated-costs.label.buy") : t("trading.inputs.estimated-costs.label.sell"),
            placeholder: `Max. ${secondaryBalance ? secondaryBalance.balance : "0"}`,
            style: { flexGrow: 1, flexShrink: 1, width: "55%" },
            inputMode: "decimal",
            type: "number",
            value: (
              // Format amount without thousands grouping, since it may lead to illegal number input values (#831)
              bigNumberToInputValue(secondaryAmount, { groupThousands: false })
            )
          }
        )),
        /* @__PURE__ */ React.createElement(
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
            /* @__PURE__ */ React.createElement(Typography, { align: "center", style: { flexGrow: 1 } }, t("trading.advanced.header"))
          ),
          /* @__PURE__ */ React.createElement(ExpansionPanelDetails, { className: classes.expansionPanelDetails }, /* @__PURE__ */ React.createElement(
            Controller,
            {
              as: /* @__PURE__ */ React.createElement(
                TradingPrice$1,
                {
                  defaultPrice: !form.formState.touched.manualPrice ? defaultPrice : void 0,
                  inputError: form.errors.manualPrice && form.errors.manualPrice.message,
                  onSetPriceDenotedIn: setPriceMode,
                  priceDenotedIn: priceMode,
                  primaryAsset,
                  secondaryAsset,
                  selectOnFocus: true,
                  style: { flexGrow: 1, maxWidth: 250, width: "55%" }
                }
              ),
              control: form.control,
              name: "manualPrice",
              rules: {
                validate: (value) => {
                  const valid = isValidAmount(value);
                  return valid || t("trading.validation.invalid-price");
                }
              },
              valueName: "manualPrice"
            }
          ))
        ),
        relativeSpread >= 0.015 ? /* @__PURE__ */ React.createElement(Box, { margin: "32px 0 0", padding: "8px 12px", style: { background: warningColor } }, /* @__PURE__ */ React.createElement("b", null, t("trading.warning.title")), /* @__PURE__ */ React.createElement("br", null), t(
          "trading.warning.message",
          `The spread between buying and selling price is about ${(relativeSpread * 100).toFixed(1)}%.`,
          { spread: (relativeSpread * 100).toFixed(1) }
        )) : null,
        /* @__PURE__ */ React.createElement(Portal, { target: (_a = props.dialogActionsRef) == null ? void 0 : _a.element }, /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 32 } }, /* @__PURE__ */ React.createElement(ActionButton, { loading: pending, icon: /* @__PURE__ */ React.createElement(GavelIcon, null), onClick: form.handleSubmit(submitForm), type: "primary" }, t("trading.action.submit"))))
      )
    )
  );
}
const TradingForm$1 = React.memo(TradingForm);
function getAssetFromPath(pathname) {
  if (matchesRoute(pathname, tradeAsset("*", void 0, "*"))) {
    const lastArgument = getLastArgumentFromURL(pathname);
    if (lastArgument !== "buy" && lastArgument !== "sell") {
      return parseAssetID(lastArgument);
    }
  }
  return void 0;
}
function TradingDialog(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const dialogActionsRef = useDialogActions();
  const router = useRouter();
  const [preselectedAsset, setPreselectedAsset] = React.useState();
  const { t } = useTranslation();
  React.useEffect(() => {
    const asset = getAssetFromPath(router.location.pathname);
    setPreselectedAsset(asset);
  }, [router.location.pathname]);
  const trustlines = React.useMemo(
    () => accountData.balances.filter((balance) => balance.asset_type !== "native"),
    [accountData.balances]
  );
  const primaryAction = matchesRoute(
    router.location.pathname,
    tradeAsset("*", "buy")
  ) ? "buy" : matchesRoute(router.location.pathname, tradeAsset("*", "sell")) ? "sell" : void 0;
  const clearPrimaryAction = React.useCallback(() => {
    router.history.push(
      tradeAsset(props.account.id, void 0, preselectedAsset ? stringifyAsset(preselectedAsset) : void 0)
    );
  }, [preselectedAsset, props.account, router.history]);
  const selectPrimaryAction = React.useCallback(
    (mainAction) => {
      router.history.push(
        tradeAsset(props.account.id, mainAction, preselectedAsset ? stringifyAsset(preselectedAsset) : void 0)
      );
    },
    [preselectedAsset, props.account, router.history]
  );
  const MainContent = React.useMemo(
    () => /* @__PURE__ */ React.createElement(Carousel, { current: primaryAction ? 1 : 0 }, /* @__PURE__ */ React.createElement(
      MainActionSelection$1,
      {
        onSelectBuy: () => selectPrimaryAction("buy"),
        onSelectSell: () => selectPrimaryAction("sell")
      }
    ), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
      TradingForm$1,
      {
        account: props.account,
        accountData,
        dialogActionsRef: primaryAction ? dialogActionsRef : null,
        initialPrimaryAsset: preselectedAsset,
        primaryAction: primaryAction || "buy",
        sendTransaction: props.sendTransaction,
        trustlines
      }
    ))),
    [
      accountData,
      dialogActionsRef,
      preselectedAsset,
      primaryAction,
      props.account,
      props.sendTransaction,
      selectPrimaryAction,
      trustlines
    ]
  );
  const LinkToManageAssets = React.useMemo(
    () => /* @__PURE__ */ React.createElement(Box$1, { margin: "32px 0 0", textAlign: "center" }, /* @__PURE__ */ React.createElement(Typography, null, t("trading.no-assets-info")), /* @__PURE__ */ React.createElement(Portal, { target: dialogActionsRef.element }, /* @__PURE__ */ React.createElement(DialogActionsBox, null, /* @__PURE__ */ React.createElement(
      ActionButton,
      {
        autoFocus: true,
        onClick: () => router.history.push(manageAccountAssets(props.account.id)),
        type: "primary"
      },
      t("trading.action.add-asset")
    )))),
    [dialogActionsRef, props.account, router, t]
  );
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      top: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          title: /* @__PURE__ */ React.createElement("span", null, t("trading.title"), props.account.testnet ? /* @__PURE__ */ React.createElement(TestnetBadge, { style: { marginLeft: 8 } }) : null),
          onBack: primaryAction ? clearPrimaryAction : props.onClose
        }
      ), /* @__PURE__ */ React.createElement(LazyScrollableBalances, { account: props.account, compact: true })),
      actions: dialogActionsRef
    },
    /* @__PURE__ */ React.createElement(InlineErrorBoundary, null, trustlines.length > 0 ? MainContent : LinkToManageAssets)
  );
}
function TradingDialogContainer(props) {
  const router = useRouter();
  const navigateToAccount = () => router.history.push(account(props.account.id));
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account, onSubmissionCompleted: navigateToAccount }, (txContext) => /* @__PURE__ */ React.createElement(TradingDialog, { ...props, ...txContext }));
}
export {
  TradingDialogContainer as default
};
//# sourceMappingURL=TradingDialog-NmOY-ccy.js.map
