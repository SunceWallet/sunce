import { bY as _inheritsLoose, bZ as _assertThisInitialized, r as reactExports, f as _extends, R as React, a5 as libExports, Y as makeStyles, au as balancelineToAsset, b8 as useAssetMetadata, Z as useTranslation, H as ListItem, aw as ListItemText, ah as breakpoints, aR as useMediaQuery, b0 as DialogBody, a9 as MainTitle, ac as TextField, $ as DialogActionsBox, a0 as ActionButton, a1 as useRouter, at as stringifyAsset, ak as VerticalLayout, b_ as SearchField, bu as List, b$ as ButtonListItem, bJ as AddIcon, aj as ViewLoading, aY as Dialog, a_ as CompactDialogTransition, aL as trackError, c0 as assetRecordToAsset, X as useLiveAccountData, aD as useLiveAccountOffers, a8 as useIsMobile, aZ as FullscreenDialogTransition, bc as getSpendableBalance, ao as Big, be as getAccountMinimumBalance } from "./app-DBEXmgIl.js";
import { S as SingleBalance, L as ListItemIcon, d as AssetLogo, B as Badge, A as AccountName, V as VerifiedUserIcon, T as TransactionSender, u as useTickerAssets, h as useWellKnownAccounts, i as assetDetails, c as createTransaction, m as manageAccountAssets, j as balanceDetails, k as matchesRoute, s as sortBalances, l as Divider } from "./app-stage2-CwdMAbKU.js";
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey3(index, data) {
  return index;
};
function createListComponent(_ref) {
  var _class, _temp;
  var getItemOffset3 = _ref.getItemOffset, getEstimatedTotalSize4 = _ref.getEstimatedTotalSize, getItemSize3 = _ref.getItemSize, getOffsetForIndexAndAlignment5 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset3 = _ref.getStartIndexForOffset, getStopIndexForStartIndex3 = _ref.getStopIndexForStartIndex, initInstanceProps5 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps5 = _ref.validateProps;
  return _temp = _class = /* @__PURE__ */ function(_PureComponent) {
    _inheritsLoose(List2, _PureComponent);
    function List2(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps5(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_assertThisInitialized(_this)),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoizeOne(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoizeOne(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _style;
          var _offset = getItemOffset3(_this.props, index, _this._instanceProps);
          var size2 = getItemSize3(_this.props, index, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          itemStyleCache[index] = style = (_style = {
            position: "absolute"
          }, _style[direction === "rtl" ? "right" : "left"] = isHorizontal ? _offset : 0, _style.top = !isHorizontal ? _offset : 0, _style.height = !isHorizontal ? size2 : "100%", _style.width = isHorizontal ? size2 : "100%", _style);
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoizeOne(function(_, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps5(nextProps);
      return null;
    };
    var _proto = List2.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment5(this.props, index, align, scrollOffset, this._instanceProps));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props, direction = _this$props2.direction, initialScrollOffset = _this$props2.initialScrollOffset, layout = _this$props2.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props, direction = _this$props3.direction, layout = _this$props3.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props4 = this.props, children = _this$props4.children, className = _this$props4.className, direction = _this$props4.direction, height = _this$props4.height, innerRef = _this$props4.innerRef, innerElementType = _this$props4.innerElementType, innerTagName = _this$props4.innerTagName, itemCount = _this$props4.itemCount, itemData = _this$props4.itemData, _this$props4$itemKey = _this$props4.itemKey, itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey, layout = _this$props4.layout, outerElementType = _this$props4.outerElementType, outerTagName = _this$props4.outerTagName, style = _this$props4.style, useIsScrolling = _this$props4.useIsScrolling, width = _this$props4.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(reactExports.createElement(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize4(this.props, this._instanceProps);
      return reactExports.createElement(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, reactExports.createElement(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props, itemCount = _this$props5.itemCount, overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset3(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex3(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List2;
  }(reactExports.PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
}
var validateSharedProps$1 = function validateSharedProps3(_ref2, _ref3) {
  _ref2.children;
  _ref2.direction;
  _ref2.height;
  _ref2.layout;
  _ref2.innerTagName;
  _ref2.outerTagName;
  _ref2.width;
  _ref3.instance;
};
var FixedSizeList$1 = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset2(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize2(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize3(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment4(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size2 + itemSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset2(_ref5, offset) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex2(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps4(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps4(_ref7) {
    _ref7.itemSize;
  }
});
function FixedSizeList(props) {
  if (!props.container) {
    return null;
  }
  const height = props.container.clientHeight;
  const width = props.container.clientWidth;
  return /* @__PURE__ */ React.createElement(FixedSizeList$1, { height, itemCount: props.itemCount, itemSize: props.itemSize, width }, props.children);
}
const mainnet = [
  new libExports.Asset("EURMTL", "GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V"),
  new libExports.Asset("MTLAP", "GCNVDZIHGX473FEI7IXCUAEXUJ4BGCKEMHF36VYP5EMS7PX2QBLAMTLA"),
  new libExports.Asset("MTL", "GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V"),
  new libExports.Asset("MTLRECT", "GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V"),
  new libExports.Asset("BTCMTL", "GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V"),
  new libExports.Asset("SATSMTL", "GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V"),
  new libExports.Asset("USDM", "GDHDC4GBNPMENZAOBB4NCQ25TGZPDRK6ZGWUGSI22TVFATOLRPSUUSDM"),
  new libExports.Asset("USDC", "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN")
];
const testnet = [
  new libExports.Asset("USD", "GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTGG"),
  new libExports.Asset("SRT", "GCDNJUBQSX7AJWLJACMJ7I4BC3Z47BQUTMHEICZLE6MU4KQBRYG5JY6B")
];
const useBalanceItemStyles = makeStyles({
  clickable: {},
  icon: {
    [breakpoints.down(350)]: {
      minWidth: 48
    }
  },
  logo: {
    [breakpoints.down(350)]: {
      width: 36,
      height: 36
    }
  },
  logoHidden: {
    visibility: "hidden"
  },
  badge: {
    top: 4,
    right: 4,
    boxShadow: "0 0 3px 1px black"
  },
  mainListItemText: {
    flex: "1 1 auto",
    whiteSpace: "nowrap"
  },
  mainListItemTextPrimaryTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    [breakpoints.down(400)]: {
      fontSize: 15
    },
    [breakpoints.down(350)]: {
      fontSize: 13
    }
  },
  mainListItemTextSecondaryTypography: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    [breakpoints.down(400)]: {
      fontSize: 14
    },
    [breakpoints.down(350)]: {
      fontSize: 12
    }
  },
  balanceListItemText: {
    flex: "1 0 auto",
    marginLeft: 8,
    textAlign: "right"
  },
  balanceText: {
    fontSize: "140%",
    [breakpoints.down(350)]: {
      fontSize: "120%"
    }
  },
  actions: {
    flex: "0 0 auto",
    marginLeft: 4,
    marginRight: -16,
    width: 48
  }
});
function BalanceListItem(props) {
  const classes = useBalanceItemStyles();
  const className = `${props.className || ""} ${props.onClick ? classes.clickable : ""}`;
  const asset = React.useMemo(() => balancelineToAsset(props.balance), [props.balance]);
  const assetMetadata = useAssetMetadata(asset, props.testnet);
  const { t } = useTranslation();
  const balance = React.useMemo(
    () => props.hideBalance ? null : /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: "", balance: props.balance.balance }),
    [props.balance.balance, props.hideBalance]
  );
  if (props.balance.asset_type === "native") {
    return /* @__PURE__ */ React.createElement(
      ListItem,
      {
        button: Boolean(props.onClick),
        className,
        onClick: props.onClick,
        style: props.style
      },
      /* @__PURE__ */ React.createElement(ListItemIcon, { className: classes.icon }, /* @__PURE__ */ React.createElement(
        AssetLogo,
        {
          asset,
          className: `${classes.logo} ${props.hideLogo ? classes.logoHidden : ""}`,
          testnet: props.testnet
        }
      )),
      /* @__PURE__ */ React.createElement(
        ListItemText,
        {
          classes: {
            root: classes.mainListItemText,
            primary: classes.mainListItemTextPrimaryTypography,
            secondary: classes.mainListItemTextSecondaryTypography
          },
          primary: props.spendableBalance ? t("account.balance-details.item.spendable-balance.primary") : "Stellar Lumens (XLM)",
          secondary: props.spendableBalance ? void 0 : "stellar.org"
        }
      ),
      /* @__PURE__ */ React.createElement(
        ListItemText,
        {
          classes: {
            root: classes.balanceListItemText,
            primary: classes.balanceText
          },
          primary: balance
        }
      )
    );
  }
  const assetName = assetMetadata && assetMetadata.name || props.balance.asset_code;
  const title = assetName !== props.balance.asset_code ? `${assetName} (${props.balance.asset_code})` : props.balance.asset_code;
  return /* @__PURE__ */ React.createElement(ListItem, { button: Boolean(props.onClick), className, onClick: props.onClick, style: props.style }, /* @__PURE__ */ React.createElement(ListItemIcon, { className: classes.icon }, /* @__PURE__ */ React.createElement(Badge, { badgeContent: props.badgeCount, classes: { badge: classes.badge }, color: "primary" }, /* @__PURE__ */ React.createElement(
    AssetLogo,
    {
      asset,
      className: `${classes.logo} ${props.hideLogo ? classes.logoHidden : ""}`,
      dark: true,
      testnet: props.testnet
    }
  ))), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      className: classes.mainListItemText,
      classes: {
        primary: classes.mainListItemTextPrimaryTypography,
        secondary: classes.mainListItemTextSecondaryTypography
      },
      primary: title,
      secondary: /* @__PURE__ */ React.createElement(AccountName, { publicKey: props.balance.asset_issuer, testnet: props.testnet })
    }
  ), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      className: classes.balanceListItemText,
      primary: balance,
      primaryTypographyProps: { className: classes.balanceText }
    }
  ));
}
const BalanceDetailsListItem = React.memo(BalanceListItem);
function CustomTrustlineDialog(props) {
  const [code, setCode] = React.useState("");
  const [issuerPublicKey, setIssuerPublicKey] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const isWidthMax450 = useMediaQuery("(max-width:450px)");
  const { t } = useTranslation();
  const createTransaction2 = () => props.createAddAssetTransaction(new libExports.Asset(code, issuerPublicKey), { limit: limit || void 0 });
  const addCustomAsset = () => props.sendTransaction(createTransaction2);
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      top: /* @__PURE__ */ React.createElement(MainTitle, { hideBackButton: true, onBack: props.onClose, title: t("account-settings.custom-trustline.title") })
    },
    /* @__PURE__ */ React.createElement("form", { noValidate: true, style: { display: "block", width: "100%" } }, /* @__PURE__ */ React.createElement(
      TextField,
      {
        label: t("account-settings.custom-trustline.textfield.code.label"),
        placeholder: "EURT, USDT, BTC, ...",
        autoFocus: true,
        margin: "dense",
        name: "asset-code",
        value: code,
        onChange: (event) => setCode(event.target.value)
      }
    ), /* @__PURE__ */ React.createElement(
      TextField,
      {
        fullWidth: true,
        label: t("account-settings.custom-trustline.textfield.issuer.label"),
        placeholder: t("account-settings.custom-trustline.textfield.issuer.placeholder"),
        margin: "dense",
        name: "asset-issuer",
        value: issuerPublicKey,
        onChange: (event) => setIssuerPublicKey(event.target.value)
      }
    ), /* @__PURE__ */ React.createElement(
      TextField,
      {
        inputProps: {
          pattern: "^[0-9]*(.[0-9]+)?$",
          inputMode: "decimal"
        },
        fullWidth: true,
        label: t("account-settings.custom-trustline.textfield.limit.label"),
        placeholder: t("account-settings.custom-trustline.textfield.limit.placeholder"),
        margin: "dense",
        name: "trust-limit",
        value: limit,
        type: "number",
        onChange: (event) => setLimit(event.target.value)
      }
    ), /* @__PURE__ */ React.createElement(DialogActionsBox, { preventMobileActionsBox: true }, /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onClose }, t("account-settings.custom-trustline.action.cancel")), /* @__PURE__ */ React.createElement(
      ActionButton,
      {
        icon: /* @__PURE__ */ React.createElement(VerifiedUserIcon, null),
        loading: props.txCreationPending,
        onClick: addCustomAsset,
        type: "primary"
      },
      isWidthMax450 ? t("account-settings.custom-trustline.action.trust.short") : t("account-settings.custom-trustline.action.trust.long")
    )))
  );
}
const CustomTrustlineDialog$1 = React.memo(CustomTrustlineDialog);
function assetRecordMatches(assetRecord, search) {
  search = search.toLowerCase();
  return assetRecord.code.toLowerCase().startsWith(search) || assetRecord.name.toLowerCase().startsWith(search);
}
function issuerMatches(issuerDetails, search) {
  search = search.toLowerCase();
  return issuerDetails.name.toLowerCase().startsWith(search);
}
function assetToBalance(asset) {
  return {
    asset_code: asset.getCode(),
    asset_issuer: asset.getIssuer(),
    asset_type: asset.getAssetType(),
    balance: "0",
    is_authorized: true,
    is_authorized_to_maintain_liabilities: true,
    last_modified_ledger: 0,
    limit: "0",
    buying_liabilities: "0",
    selling_liabilities: "0",
    is_clawback_enabled: false
  };
}
function groupAssets(values, createKey) {
  const map = {};
  for (const value of values) {
    const key = createKey(value);
    const existingValues = map[key];
    existingValues ? existingValues.push(value) : map[key] = [value];
  }
  return map;
}
const PopularAssets = React.memo(function PopularAssets2(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.assets.map((asset) => /* @__PURE__ */ React.createElement(
    BalanceDetailsListItem,
    {
      key: stringifyAsset(asset),
      balance: assetToBalance(asset),
      hideBalance: true,
      onClick: () => props.onOpenAssetDetails(asset),
      testnet: props.testnet
    }
  )));
});
const searchResultRowHeight = 73;
const useSearchResultStyles = makeStyles({
  assetItem: {
    borderRadius: "0 !important",
    height: searchResultRowHeight
  },
  issuerItem: {
    background: "white",
    borderRadius: 8,
    height: searchResultRowHeight
  },
  noResultItem: {
    background: "white",
    borderRadius: 8,
    height: searchResultRowHeight
  }
});
function createSearchResultRow(account, assetsByIssuer, openAssetDetails) {
  const itemRenderMap = [];
  for (const issuer of Object.keys(assetsByIssuer)) {
    itemRenderMap.push({
      type: "issuer",
      issuer
    });
    itemRenderMap.push(
      ...assetsByIssuer[issuer].map(
        (assetRecord) => ({
          type: "asset",
          issuer,
          record: assetRecord
        })
      )
    );
  }
  function SearchResultRow(props) {
    const classes = useSearchResultStyles();
    const item = itemRenderMap[props.index];
    const { t } = useTranslation();
    return /* @__PURE__ */ React.createElement("div", { style: props.style }, /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, item.type === "issuer" ? /* @__PURE__ */ React.createElement(ListItem, { key: item.issuer, className: classes.issuerItem }, /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: item.issuer === "native" ? "stellar.org" : /* @__PURE__ */ React.createElement(AccountName, { publicKey: item.issuer, testnet: account.testnet }),
        secondary: assetsByIssuer[item.issuer].length === 1 ? t("account.add-asset.item.issuer.secondary.one-asset") : t("account.add-asset.item.issuer.secondary.more-than-one-asset", {
          amount: assetsByIssuer[item.issuer].length
        }),
        secondaryTypographyProps: {
          style: { overflow: "hidden", textOverflow: "ellipsis" }
        }
      }
    )) : null, item.type === "asset" ? /* @__PURE__ */ React.createElement(
      BalanceDetailsListItem,
      {
        balance: assetToBalance(assetRecordToAsset(item.record)),
        className: classes.assetItem,
        hideBalance: true,
        onClick: () => openAssetDetails(assetRecordToAsset(item.record)),
        style: { paddingLeft: 32 },
        testnet: account.testnet
      }
    ) : null));
  }
  function NoResultRow() {
    const classes = useSearchResultStyles();
    const { t } = useTranslation();
    return /* @__PURE__ */ React.createElement(ListItem, { key: 0, className: classes.noResultItem }, /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: t("account.add-asset.item.no-result.primary"),
        secondary: t("account.add-asset.item.no-result.secondary")
      }
    ));
  }
  if (itemRenderMap.length > 0) {
    SearchResultRow.count = itemRenderMap.length;
    return SearchResultRow;
  } else {
    NoResultRow.count = 1;
    return NoResultRow;
  }
}
const useAddAssetStyles = makeStyles({
  grow: {
    flexGrow: 1
  },
  list: {
    marginTop: 16,
    padding: 0
  },
  searchField: {
    background: "white",
    flexShrink: 0,
    flexGrow: 0,
    marginBottom: 16
  },
  searchFieldInput: {
    fontSize: 16,
    paddingTop: 14,
    paddingBottom: 14
  }
});
const AddAssetDialog = React.memo(function AddAssetDialog2(props) {
  const assets = props.account.testnet ? testnet : mainnet;
  const classes = useAddAssetStyles();
  const containerRef = React.useRef(null);
  const allAssets = useTickerAssets(props.account.testnet);
  const router = useRouter();
  const { t } = useTranslation();
  const wellKnownAccounts = useWellKnownAccounts(props.account.testnet);
  const [customTrustlineDialogOpen, setCustomTrustlineDialogOpen] = React.useState(false);
  const [searchFieldValue, setSearchFieldValue] = React.useState("");
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const openAssetDetails = React.useCallback(
    (asset) => router.history.push(assetDetails(props.account.id, stringifyAsset(asset))),
    [router.history, props.account.id]
  );
  const openCustomTrustlineDialog = () => setCustomTrustlineDialogOpen(true);
  const closeCustomTrustlineDialog = () => setCustomTrustlineDialogOpen(false);
  const createAddAssetTransaction = async (asset, options = {}) => {
    const operations = [libExports.Operation.changeTrust({ asset, limit: options.limit, withMuxing: true })];
    return createTransaction(operations, {
      accountData: props.accountData,
      horizon: props.horizon,
      walletAccount: props.account
    });
  };
  const sendTransaction = async (createTransactionToSend) => {
    try {
      setTxCreationPending(true);
      const transaction = await createTransactionToSend();
      setTxCreationPending(false);
      await props.sendTransaction(transaction);
    } catch (error) {
      setTxCreationPending(false);
      trackError(error);
    }
  };
  const isAssetAlreadyAdded = (asset) => {
    return props.accountData.balances.some(
      (balance) => balance.asset_code === asset.code && balance.asset_issuer === asset.issuer
    );
  };
  const wellknownAccountMatches = React.useCallback(
    (accountID, search) => {
      const lowerCasedSearch = search.toLowerCase();
      const record = wellKnownAccounts.lookup(accountID);
      if (!record) {
        return false;
      }
      return record.domain.toLowerCase().includes(lowerCasedSearch) || record.name.toLowerCase().includes(lowerCasedSearch);
    },
    [wellKnownAccounts]
  );
  const notYetAddedAssets = assets.filter((asset) => !isAssetAlreadyAdded(asset));
  const onSearchFieldChange = React.useCallback((event) => {
    setSearchFieldValue(event.target.value);
  }, []);
  const assetsByIssuer = React.useMemo(() => {
    const filteredAssets = allAssets.filter(
      (assetRecord) => assetRecordMatches(assetRecord, searchFieldValue) || issuerMatches(assetRecord.issuer_detail, searchFieldValue) || wellknownAccountMatches(assetRecord.issuer, searchFieldValue)
    );
    return groupAssets(filteredAssets, (assetRecord) => assetRecord.issuer);
  }, [allAssets, searchFieldValue, wellknownAccountMatches]);
  const SearchResultRow = React.useMemo(() => createSearchResultRow(props.account, assetsByIssuer, openAssetDetails), [
    props.account,
    assetsByIssuer,
    openAssetDetails
  ]);
  return /* @__PURE__ */ React.createElement(DialogBody, { excessWidth: 24, top: /* @__PURE__ */ React.createElement(MainTitle, { onBack: props.onClose, title: t("account.add-asset.title") }) }, /* @__PURE__ */ React.createElement(VerticalLayout, { grow: true, margin: "16px 0 0" }, /* @__PURE__ */ React.createElement(
    SearchField,
    {
      autoFocus: true,
      className: classes.searchField,
      inputProps: {
        className: classes.searchFieldInput
      },
      onChange: onSearchFieldChange,
      value: searchFieldValue,
      placeholder: t("account.add-asset.search-field.placeholder")
    }
  ), /* @__PURE__ */ React.createElement(List, { className: classes.list }, /* @__PURE__ */ React.createElement(ButtonListItem, { onClick: openCustomTrustlineDialog }, /* @__PURE__ */ React.createElement(AddIcon, null), "  ", t("account.add-asset.button.add-custom-asset.label"))), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, searchFieldValue ? /* @__PURE__ */ React.createElement("ul", { className: `${classes.list} ${classes.grow}`, ref: containerRef }, /* @__PURE__ */ React.createElement(
    FixedSizeList,
    {
      container: containerRef.current,
      itemCount: SearchResultRow.count,
      itemSize: searchResultRowHeight
    },
    SearchResultRow
  )) : /* @__PURE__ */ React.createElement(List, { className: `${classes.list} ${classes.grow}` }, /* @__PURE__ */ React.createElement(
    PopularAssets,
    {
      assets: notYetAddedAssets,
      onOpenAssetDetails: openAssetDetails,
      testnet: props.account.testnet
    }
  )))), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: customTrustlineDialogOpen,
      onClose: closeCustomTrustlineDialog,
      TransitionComponent: CompactDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
      CustomTrustlineDialog$1,
      {
        account: props.account,
        accountData: props.accountData,
        createAddAssetTransaction,
        horizon: props.horizon,
        onClose: closeCustomTrustlineDialog,
        sendTransaction,
        txCreationPending
      }
    ))
  ));
});
function ConnectedAddAssetDialog(props) {
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account, onSubmissionCompleted: props.onClose }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(AddAssetDialog, { ...props, horizon, sendTransaction }));
}
const AddAssetDialog$1 = React.memo(ConnectedAddAssetDialog);
function isAssetMatchingBalance(asset, balance) {
  return balance.asset_type === "native" ? asset.isNative() : balance.asset_code === asset.getCode() && balance.asset_issuer === asset.getIssuer();
}
const TrustedAssets = React.memo(function TrustedAssets2(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.assets.map((asset) => {
    const balance = props.accountData.balances.find((bal) => isAssetMatchingBalance(asset, bal));
    const openOffers = props.openOffers.filter(
      (offer) => offer.buying.asset_code === asset.code && offer.buying.asset_issuer === asset.issuer || offer.selling.asset_code === asset.code && offer.selling.asset_issuer === asset.issuer
    );
    const badgeCount = props.olderOffersAvailable && openOffers.length >= 10 ? "10+" : openOffers.length;
    return /* @__PURE__ */ React.createElement(
      BalanceDetailsListItem,
      {
        key: stringifyAsset(asset),
        badgeCount,
        balance,
        onClick: () => props.onOpenAssetDetails(asset),
        style: {
          paddingLeft: props.hpadding,
          paddingRight: props.hpadding,
          marginLeft: props.hmargin,
          marginRight: props.hmargin
        },
        testnet: props.account.testnet
      }
    );
  }));
});
const NativeBalanceItems = React.memo(function NativeBalanceItems2(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    BalanceDetailsListItem,
    {
      key: "XLM",
      balance: props.balance,
      onClick: () => props.onOpenAssetDetails(libExports.Asset.native()),
      style: {
        paddingLeft: props.hpadding,
        paddingRight: props.hpadding,
        marginLeft: props.hmargin,
        marginRight: props.hmargin
      },
      testnet: props.account.testnet
    }
  ), /* @__PURE__ */ React.createElement(
    BalanceDetailsListItem,
    {
      key: "XLM:spendable",
      balance: {
        ...props.balance,
        balance: Big(props.balance.balance).eq(0) ? "0" : getSpendableBalance(getAccountMinimumBalance(props.accountData), props.balance).toString()
      },
      hideLogo: true,
      onClick: () => props.onOpenAssetDetails(libExports.Asset.native()),
      spendableBalance: true,
      style: {
        marginTop: -8,
        paddingLeft: props.hpadding,
        paddingRight: props.hpadding,
        marginLeft: props.hmargin,
        marginRight: props.hmargin
      },
      testnet: props.account.testnet
    }
  ));
});
function BalanceDetailsDialog(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const { offers: openOrders, olderOffersAvailable } = useLiveAccountOffers(
    props.account.accountID,
    props.account.testnet
  );
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const { t } = useTranslation();
  const openAddAssetDialog = React.useCallback(
    () => router.history.push(manageAccountAssets(props.account.id)),
    [props.account.id, router.history]
  );
  const closeAddAssetDialog = React.useCallback(() => router.history.push(balanceDetails(props.account.id)), [
    props.account.id,
    router.history
  ]);
  const addAssetDialogOpen = matchesRoute(router.location.pathname, manageAccountAssets(props.account.id));
  const assetDetailsDialogOpen = matchesRoute(router.location.pathname, assetDetails("*", "*")) && !matchesRoute(router.location.pathname, assetDetails("*", "manage"));
  const openAssetDetails = (asset) => router.history.push(assetDetails(props.account.id, stringifyAsset(asset)));
  const trustedAssets = sortBalances(accountData.balances).filter((balance) => balance.asset_type !== "native").map((balance) => new libExports.Asset(balance.asset_code, balance.asset_issuer));
  const nativeBalance = accountData.balances.find(
    (balance) => balance.asset_type === "native"
  );
  const hpadding = isSmallScreen ? 0 : 8;
  const itemHPadding = 16;
  const itemHMargin = 0;
  return /* @__PURE__ */ React.createElement(DialogBody, { excessWidth: 12, top: /* @__PURE__ */ React.createElement(MainTitle, { onBack: props.onClose, title: props.account.name }) }, /* @__PURE__ */ React.createElement(List, { style: { paddingLeft: hpadding, paddingRight: hpadding, margin: "0 -8px" } }, /* @__PURE__ */ React.createElement(
    ButtonListItem,
    {
      gutterBottom: true,
      onClick: openAddAssetDialog,
      style: {
        padding: `0 ${itemHPadding}px`,
        marginLeft: itemHMargin,
        marginRight: itemHMargin
      }
    },
    /* @__PURE__ */ React.createElement(AddIcon, null),
    "  ",
    t("account.balance-details.button.add-asset.label")
  ), /* @__PURE__ */ React.createElement(
    TrustedAssets,
    {
      account: props.account,
      accountData,
      assets: trustedAssets,
      hmargin: itemHMargin,
      hpadding: itemHPadding,
      onOpenAssetDetails: openAssetDetails,
      openOffers: openOrders,
      olderOffersAvailable
    }
  )), /* @__PURE__ */ React.createElement(Divider, { style: { margin: "16px 0" } }), /* @__PURE__ */ React.createElement(List, { style: { paddingLeft: hpadding, paddingRight: hpadding, margin: "0 -8px 8px" } }, nativeBalance ? /* @__PURE__ */ React.createElement(
    NativeBalanceItems,
    {
      account: props.account,
      accountData,
      balance: nativeBalance,
      hmargin: itemHMargin,
      hpadding: itemHPadding,
      onOpenAssetDetails: openAssetDetails
    }
  ) : null), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      fullScreen: true,
      open: addAssetDialogOpen || assetDetailsDialogOpen,
      onClose: closeAddAssetDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
      AddAssetDialog$1,
      {
        account: props.account,
        accountData,
        hpadding,
        itemHPadding,
        onClose: closeAddAssetDialog
      }
    ))
  ));
}
const BalanceDetailsDialog$1 = React.memo(BalanceDetailsDialog);
export {
  BalanceDetailsDialog$1 as default
};
//# sourceMappingURL=BalanceDetailsDialog-CzYuVvF6.js.map
