const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["AccountContextMenu-D4g5T5nU.js","app-DBEXmgIl.js","app-IuAF7eHC.css","CallReceived-Azk4kvuL.js","SwapHoriz-Bpbxs0OS.js","ScrollableBalances-C4xYilZB.js","AssetDetailsDialog-iOS03pH5.js","BalanceDetailsDialog-CzYuVvF6.js","LumenPurchaseDialog-DoyEd-GJ.js","LumenPurchaseOptions-BS60gtKd.js","TradingDialog-NmOY-ccy.js","Remove-BppeerbV.js","MainSelectionButton-DPV1xu8i.js","ConnectedTransferDialog-Bi_V8awo.js","AccountSettings-CGtcRnTW.js","ExportKeyDialog-C_6OAdGN.js","AccountTransactions-DUngX3mh.js","AccountCreationOptions-DYj83WDk.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as getDefaultExportFromCjs, _ as _objectWithoutProperties, r as reactExports, I as I18nContext, w as warnOnce, a as getI18n, b as getDefaults, R as React, c as _defineProperty, d as warn, e as _typeof, s as styled$1, f as _extends$1, h as defaultTheme, i as withStyles, j as clsx, k as capitalize, l as deepmerge, m as _toConsumableArray, n as _slicedToArray, P as Paper, B as ButtonBase, u as useFormControl, o as IconButton, p as createSvgIcon, q as fade, t as useForkRef, v as setRef, x as ReactDOM, y as useEventCallback, z as ownerDocument, A as duration, C as useTheme, T as Transition$2, D as getTransitionProps, E as Typography, F as lighten, G as darken, L as ListContext, H as ListItem, J as createChainedFunction, K as Portal$2, M as emphasize, N as Grow, O as useIsFocusVisible, Q as reflow, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, W as SvgIcon, X as useLiveAccountData, Y as makeStyles, Z as useTranslation, $ as DialogActionsBox, a0 as ActionButton, a1 as useRouter, a2 as ConfirmDialog, a3 as AccountsContext, a4 as CustomError, a5 as libExports$1, a6 as workers, a7 as HorizontalLayout, a8 as useIsMobile, a9 as MainTitle, aa as primaryBackgroundColor, ab as makeStyles$1, ac as TextField, ad as InputAdornment, ae as SettingsContext, af as Box$1, ag as HideOnError, ah as breakpoints, ai as __vitePreload, aj as ViewLoading, ak as VerticalLayout, al as CircularProgress, am as Fade, an as grey, ao as Big, ap as WrongPasswordError, aq as getAllSources, ar as isNotFoundError, as as isMuxedAddress, at as stringifyAsset, au as balancelineToAsset, av as ReadOnlyTextfield, aw as ListItemText, ax as useAccountHomeDomainSafe, ay as stringifyAssetToReadableString, az as CopyableAddress, aA as trustlineLimitEqualsUnlimited, aB as SavedAddressesContext, aC as useIsSmallMobile, aD as useLiveAccountOffers, aE as offerAssetToAsset, aF as DialogsContext, aG as call, aH as Messages, aI as createPersistentCache, aJ as useForceRerender, aK as wellKnownAccountsCache$1, aL as trackError, aM as tickerAssetsCache, aN as Address, aO as Buffer2, aP as warningColor, aQ as useLiveAccountDataSet, aR as useMediaQuery, aS as SigningKeyCacheContext, aT as useDeferredState, aU as ClickableAddress, aV as nanoid, aW as CloseIcon, aX as renderFormFieldError, aY as Dialog, aZ as FullscreenDialogTransition, a_ as CompactDialogTransition, a$ as useDialogActions, b0 as DialogBody, b1 as t$1, b2 as getErrorTranslation, b3 as CloseButton, b4 as useHorizon, b5 as Translation, b6 as isWrongPasswordError, b7 as resolveMultiSignatureCoordinator, b8 as useAssetMetadata, b9 as brandColor, ba as useFederationLookup, bb as useForm, bc as getSpendableBalance, bd as findMatchingBalanceLine, be as getAccountMinimumBalance, bf as isPublicKey, bg as isStellarAddress, bh as isStellarUri, bi as parseStellarUri, bj as StellarUriType, bk as QRReader, bl as Controller, bm as PriceInput, bn as MultisigTransactionStatus, bo as getAssetsFromBalances, bp as requirePropTypes, bq as useClipboard, br as Section, bs as InlineErrorBoundary, bt as PublicKey, bu as List, bv as useStellarToml, bw as DialogContent, bx as ErrorIcon, by as Select, bz as isDefaultProtocolClient, bA as setAsDefaultProtocolClient, bB as pkg, bC as theme, bD as NotificationsContext, bE as useOnlineStatus, bF as useNetWorker, bG as TransactionRequestContext, bH as isDifferentHandlerInstalled, bI as SignatureDelegationContext, bJ as AddIcon, bK as Button, bL as getUpdater, bM as useHorizonURLs, bN as useSingleton, bO as useLiveAccountEffects, bP as MainErrorBoundary, bQ as Switch$2, bR as Route } from "./app-DBEXmgIl.js";
const hideSplashScreenDelay = 500;
function hideSplashScreen() {
  const splash = document.getElementById("splash");
  if (!splash) {
    return;
  }
  splash.style.opacity = "0";
  splash.style.pointerEvents = "none";
  setTimeout(() => {
    splash.style.display = "none";
  }, 1e3);
}
function appIsLoaded() {
  {
    setTimeout(() => hideSplashScreen(), hideSplashScreenDelay);
  }
}
var voidElements;
var hasRequiredVoidElements;
function requireVoidElements() {
  if (hasRequiredVoidElements) return voidElements;
  hasRequiredVoidElements = 1;
  voidElements = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
  };
  return voidElements;
}
var voidElementsExports = requireVoidElements();
const e = /* @__PURE__ */ getDefaultExportFromCjs(voidElementsExports);
var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function n$1(n2) {
  var r2 = { type: "tag", name: "", voidElement: false, attrs: {}, children: [] }, i = n2.match(/<\/?([^\s]+?)[/\s>]/);
  if (i && (r2.name = i[1], (e[i[1]] || "/" === n2.charAt(n2.length - 2)) && (r2.voidElement = true), r2.name.startsWith("!--"))) {
    var s2 = n2.indexOf("-->");
    return { type: "comment", comment: -1 !== s2 ? n2.slice(4, s2) : "" };
  }
  for (var a2 = new RegExp(t), c2 = null; null !== (c2 = a2.exec(n2)); ) if (c2[0].trim()) if (c2[1]) {
    var o2 = c2[1].trim(), l = [o2, ""];
    o2.indexOf("=") > -1 && (l = o2.split("=")), r2.attrs[l[0]] = l[1], a2.lastIndex--;
  } else c2[2] && (r2.attrs[c2[2]] = c2[3].trim().substring(1, c2[3].length - 1));
  return r2;
}
var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, i$1 = /^\s*$/, s = /* @__PURE__ */ Object.create(null);
function a(e2, t2) {
  switch (t2.type) {
    case "text":
      return e2 + t2.content;
    case "tag":
      return e2 += "<" + t2.name + (t2.attrs ? function(e3) {
        var t3 = [];
        for (var n2 in e3) t3.push(n2 + '="' + e3[n2] + '"');
        return t3.length ? " " + t3.join(" ") : "";
      }(t2.attrs) : "") + (t2.voidElement ? "/>" : ">"), t2.voidElement ? e2 : e2 + t2.children.reduce(a, "") + "</" + t2.name + ">";
    case "comment":
      return e2 + "<!--" + t2.comment + "-->";
  }
}
var c = { parse: function(e2, t2) {
  t2 || (t2 = {}), t2.components || (t2.components = s);
  var a2, c2 = [], o2 = [], l = -1, m = false;
  if (0 !== e2.indexOf("<")) {
    var u = e2.indexOf("<");
    c2.push({ type: "text", content: -1 === u ? e2 : e2.substring(0, u) });
  }
  return e2.replace(r, function(r2, s2) {
    if (m) {
      if (r2 !== "</" + a2.name + ">") return;
      m = false;
    }
    var u2, f = "/" !== r2.charAt(1), h = r2.startsWith("<!--"), p = s2 + r2.length, d = e2.charAt(p);
    if (h) {
      var v = n$1(r2);
      return l < 0 ? (c2.push(v), c2) : ((u2 = o2[l]).children.push(v), c2);
    }
    if (f && (l++, "tag" === (a2 = n$1(r2)).type && t2.components[a2.name] && (a2.type = "component", m = true), a2.voidElement || m || !d || "<" === d || a2.children.push({ type: "text", content: e2.slice(p, e2.indexOf("<", p)) }), 0 === l && c2.push(a2), (u2 = o2[l - 1]) && u2.children.push(a2), o2[l] = a2), (!f || a2.voidElement) && (l > -1 && (a2.voidElement || a2.name === r2.slice(2, -1)) && (l--, a2 = -1 === l ? c2 : o2[l]), !m && "<" !== d && d)) {
      u2 = -1 === l ? c2 : o2[l].children;
      var x = e2.indexOf("<", p), g = e2.slice(p, -1 === x ? void 0 : x);
      i$1.test(g) && (g = " "), (x > -1 && l + u2.length >= 0 || " " !== g) && u2.push({ type: "text", content: g });
    }
  }), c2;
}, stringify: function(e2) {
  return e2.reduce(function(e3, t2) {
    return e3 + a("", t2);
  }, "");
} };
var _excluded = ["format"], _excluded2 = ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}
function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}
function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== "[object Array]") return false;
  return children.every(function(child) {
    return React.isValidElement(child);
  });
}
function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}
function mergeProps(source, target) {
  var newTarget = _objectSpread({}, target);
  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}
function nodesToString(children, i18nOptions) {
  if (!children) return "";
  var stringNode = "";
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  childrenArray.forEach(function(child, childIndex) {
    if (typeof child === "string") {
      stringNode += "".concat(child);
    } else if (React.isValidElement(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;
      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === "string") {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      warn("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if (_typeof(child) === "object") {
      var format = child.format, clone = _objectWithoutProperties(child, _excluded);
      var keys = Object.keys(clone);
      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        warn("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      warn("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}
function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts) {
  if (targetString === "") return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join("|")).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};
  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function(child) {
      if (typeof child === "string") return;
      if (hasChildren(child)) getData(getChildren(child));
      else if (_typeof(child) === "object" && !React.isValidElement(child)) Object.assign(data, child);
    });
  }
  getData(children);
  var ast = c.parse("<0>".concat(targetString, "</0>"));
  var opts = _objectSpread(_objectSpread({}, data), combinedTOpts);
  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }
  function pushTranslatedJSX(child, inner2, mem, i, isVoid) {
    if (child.dummy) child.children = inner2;
    mem.push(React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? void 0 : inner2));
  }
  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function(mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
      if (node.type === "tag") {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = React.isValidElement(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && _typeof(child) === "object" && child.dummy && !isElement;
        var isKnownComponent = _typeof(children) === "object" && children !== null && Object.hasOwnProperty.call(children, node.name);
        if (typeof child === "string") {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
          var inner2 = renderInner(child, node, rootReactNode);
          pushTranslatedJSX(child, inner2, mem, i);
        } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);
          mem.push(React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(React.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);
              mem.push(React.createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);
            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if (_typeof(child) === "object" && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push(React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push(React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === "text") {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;
        var _content = i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
        if (wrapTextNodes) {
          mem.push(React.createElement(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }
      return mem;
    }, []);
  }
  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}
function Trans(_ref2) {
  var children = _ref2.children, count = _ref2.count, parent = _ref2.parent, i18nKey = _ref2.i18nKey, _ref$tOptions = _ref2.tOptions, tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions, values2 = _ref2.values, defaults = _ref2.defaults, components = _ref2.components, ns = _ref2.ns, i18nFromProps = _ref2.i18n, tFromProps = _ref2.t, additionalProps = _objectWithoutProperties(_ref2, _excluded2);
  var _ref22 = reactExports.useContext(I18nContext) || {}, i18nFromContext = _ref22.i18n, defaultNSFromContext = _ref22.defaultNS;
  var i18n = i18nFromProps || i18nFromContext || getI18n();
  if (!i18n) {
    warnOnce("You will need to pass in an i18next instance by using i18nextReactModule");
    return children;
  }
  var t2 = tFromProps || i18n.t.bind(i18n) || function(k) {
    return k;
  };
  var reactI18nextOptions = _objectSpread(_objectSpread({}, getDefaults()), i18n.options && i18n.options.react);
  var namespaces = ns || t2.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === "string" ? [namespaces] : namespaces || ["translation"];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values2 ? tOptions.interpolation : {
    interpolation: _objectSpread(_objectSpread({}, tOptions.interpolation), {}, {
      prefix: "#$?",
      suffix: "?$#"
    })
  };
  var combinedTOpts = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, tOptions), {}, {
    count
  }, values2), interpolationOverride), {}, {
    defaultValue,
    ns: namespaces
  });
  var translation = key ? t2(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts);
  var useAsParent = parent !== void 0 ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? React.createElement(useAsParent, additionalProps, content) : content;
}
var styled = function styled2(Component) {
  var componentCreator = styled$1(Component);
  return function(style2, options) {
    return componentCreator(style2, _extends$1({
      defaultTheme
    }, options));
  };
};
var styles$l = function styles2(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme2.typography.fontFamily,
      fontSize: theme2.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none"
    },
    /* Styles applied to the root element if there are children and not `src` or `srcSet`. */
    colorDefault: {
      color: theme2.palette.background.default,
      backgroundColor: theme2.palette.type === "light" ? theme2.palette.grey[400] : theme2.palette.grey[600]
    },
    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: "100%",
      height: "100%",
      textAlign: "center",
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: "cover"
    }
  };
};
var Avatar = React.forwardRef(function Avatar2(props, ref) {
  var alt = props.alt, childrenProp = props.children, classes = props.classes, classNameProp = props.className, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, imgProps = props.imgProps, sizes = props.sizes, src = props.src, srcSet = props.srcSet, other = _objectWithoutProperties(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet"]);
  var children = childrenProp;
  var img = src || srcSet;
  if (img) {
    children = React.createElement(React.Fragment, null, React.createElement("img", _extends$1({
      alt,
      src,
      srcSet,
      sizes,
      className: classes.img
    }, imgProps)), children);
  }
  return React.createElement(Component, _extends$1({
    className: clsx(classes.root, classes.system, classNameProp, !img && classes.colorDefault),
    ref
  }, other), children);
});
const Avatar$1 = withStyles(styles$l, {
  name: "MuiAvatar"
})(Avatar);
var RADIUS_STANDARD = 10;
var RADIUS_DOT = 3;
var styles$k = function styles22(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      display: "inline-flex",
      // For correct alignment with the text.
      verticalAlign: "middle",
      flexShrink: 0
    },
    /* Styles applied to the badge `span` element. */
    badge: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      position: "absolute",
      boxSizing: "border-box",
      fontFamily: theme2.typography.fontFamily,
      fontWeight: theme2.typography.fontWeightMedium,
      fontSize: theme2.typography.pxToRem(12),
      minWidth: RADIUS_STANDARD * 2,
      lineHeight: 1,
      padding: "0 6px",
      height: RADIUS_STANDARD * 2,
      borderRadius: RADIUS_STANDARD,
      backgroundColor: theme2.palette.color,
      color: theme2.palette.textColor,
      zIndex: 1,
      // Render the badge on top of potential ripples.
      transition: theme2.transitions.create("transform", {
        easing: theme2.transitions.easing.easeInOut,
        duration: theme2.transitions.duration.enteringScreen
      })
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme2.palette.primary.main,
      color: theme2.palette.primary.contrastText
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme2.palette.secondary.main,
      color: theme2.palette.secondary.contrastText
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      backgroundColor: theme2.palette.error.main,
      color: theme2.palette.error.contrastText
    },
    /* Styles applied to the root element if `variant="dot"`. */
    dot: {
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
      padding: 0
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="rectangle"`. */
    anchorOriginTopRightRectangle: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      "&$invisible": {
        transform: "scale(0) translate(50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="rectangle"`. */
    anchorOriginBottomRightRectangle: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      "&$invisible": {
        transform: "scale(0) translate(50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="rectangle"`. */
    anchorOriginTopLeftRectangle: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="rectangle"`. */
    anchorOriginBottomLeftRectangle: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }} overlap="circle"`. */
    anchorOriginTopRightCircle: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      "&$invisible": {
        transform: "scale(0) translate(50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }} overlap="circle"`. */
    anchorOriginBottomRightCircle: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      "&$invisible": {
        transform: "scale(0) translate(50%, 50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }} overlap="circle"`. */
    anchorOriginTopLeftCircle: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, -50%)"
      }
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }} overlap="circle"`. */
    anchorOriginBottomLeftCircle: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      "&$invisible": {
        transform: "scale(0) translate(-50%, 50%)"
      }
    },
    /* Pseudo-class to the badge `span` element if `invisible={true}`. */
    invisible: {
      transition: theme2.transitions.create("transform", {
        easing: theme2.transitions.easing.easeInOut,
        duration: theme2.transitions.duration.leavingScreen
      })
    }
  };
};
var Badge = React.forwardRef(function Badge2(props, ref) {
  var _props$anchorOrigin = props.anchorOrigin, anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "top",
    horizontal: "right"
  } : _props$anchorOrigin, badgeContent = props.badgeContent, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, ComponentProp = _props$component === void 0 ? "span" : _props$component, invisibleProp = props.invisible, _props$max = props.max, max = _props$max === void 0 ? 99 : _props$max, _props$overlap = props.overlap, overlap = _props$overlap === void 0 ? "rectangle" : _props$overlap, _props$showZero = props.showZero, showZero = _props$showZero === void 0 ? false : _props$showZero, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["anchorOrigin", "badgeContent", "children", "classes", "className", "color", "component", "invisible", "max", "overlap", "showZero", "variant"]);
  var invisible = invisibleProp;
  if (invisibleProp == null && (badgeContent === 0 && !showZero || badgeContent == null && variant !== "dot")) {
    invisible = true;
  }
  var displayValue = "";
  if (variant !== "dot") {
    displayValue = badgeContent > max ? "".concat(max, "+") : badgeContent;
  }
  return React.createElement(ComponentProp, _extends$1({
    className: clsx(classes.root, className),
    ref
  }, other), children, React.createElement("span", {
    className: clsx(classes.badge, classes["".concat(anchorOrigin.horizontal).concat(capitalize(anchorOrigin.vertical), "}")], classes["anchorOrigin".concat(capitalize(anchorOrigin.vertical)).concat(capitalize(anchorOrigin.horizontal)).concat(capitalize(overlap))], color2 !== "default" && classes["color".concat(capitalize(color2))], invisible && classes.invisible, {
      dot: classes.dot
    }[variant])
  }, displayValue));
});
const Badge$1 = withStyles(styles$k, {
  name: "MuiBadge"
})(Badge);
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function(acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (_typeof(propValue) === "object") {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce(function(acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }
  var output = styleFromPropValue(propValue);
  return output;
}
function getPath(obj, path) {
  if (!path || typeof path !== "string") {
    return null;
  }
  return path.split(".").reduce(function(acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}
function style(options) {
  var prop = options.prop, _options$cssProperty = options.cssProperty, cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty, themeKey = options.themeKey, transform3 = options.transform;
  var fn = function fn2(props) {
    if (props[prop] == null) {
      return null;
    }
    var propValue = props[prop];
    var theme2 = props.theme;
    var themeMapping = getPath(theme2, themeKey) || {};
    var styleFromPropValue = function styleFromPropValue2(propValueFinal) {
      var value;
      if (typeof themeMapping === "function") {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;
        if (transform3) {
          value = transform3(value);
        }
      }
      if (cssProperty === false) {
        return value;
      }
      return _defineProperty({}, cssProperty, value);
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}
function compose() {
  for (var _len = arguments.length, styles3 = new Array(_len), _key = 0; _key < _len; _key++) {
    styles3[_key] = arguments[_key];
  }
  var fn = function fn2(props) {
    return styles3.reduce(function(acc, style2) {
      var output = style2(props);
      if (output) {
        return merge(acc, output);
      }
      return acc;
    }, {});
  };
  fn.propTypes = {};
  fn.filterProps = styles3.reduce(function(acc, style2) {
    return acc.concat(style2.filterProps);
  }, []);
  return fn;
}
function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }
  return "".concat(value, "px solid");
}
var border = style({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
});
var borderTop = style({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
});
var borderRight = style({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
});
var borderBottom = style({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
});
var borderLeft = style({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
});
var borderColor = style({
  prop: "borderColor",
  themeKey: "palette"
});
var borderRadius = style({
  prop: "borderRadius",
  themeKey: "shape"
});
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function(prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}
function css(styleFunction2) {
  var newStyleFunction = function newStyleFunction2(props) {
    var output = styleFunction2(props);
    if (props.css) {
      return _extends$1({}, merge(output, styleFunction2(_extends$1({
        theme: props.theme
      }, props.css))), {}, omit(props.css, [styleFunction2.filterProps]));
    }
    return output;
  };
  newStyleFunction.propTypes = {};
  newStyleFunction.filterProps = ["css"].concat(_toConsumableArray(styleFunction2.filterProps));
  return newStyleFunction;
}
var displayPrint = style({
  prop: "displayPrint",
  cssProperty: false,
  transform: function transform(value) {
    return {
      "@media print": {
        display: value
      }
    };
  }
});
var displayRaw = style({
  prop: "display"
});
var overflow = style({
  prop: "overflow"
});
var textOverflow = style({
  prop: "textOverflow"
});
var visibility = style({
  prop: "visibility"
});
var whiteSpace = style({
  prop: "whiteSpace"
});
const display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);
var flexBasis = style({
  prop: "flexBasis"
});
var flexDirection = style({
  prop: "flexDirection"
});
var flexWrap = style({
  prop: "flexWrap"
});
var justifyContent = style({
  prop: "justifyContent"
});
var alignItems = style({
  prop: "alignItems"
});
var alignContent = style({
  prop: "alignContent"
});
var order = style({
  prop: "order"
});
var flex = style({
  prop: "flex"
});
var flexGrow = style({
  prop: "flexGrow"
});
var flexShrink = style({
  prop: "flexShrink"
});
var alignSelf = style({
  prop: "alignSelf"
});
var justifyItems = style({
  prop: "justifyItems"
});
var justifySelf = style({
  prop: "justifySelf"
});
var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var color = style({
  prop: "color",
  themeKey: "palette"
});
var bgcolor = style({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
});
var palette = compose(color, bgcolor);
var position = style({
  prop: "position"
});
var zIndex = style({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top = style({
  prop: "top"
});
var right = style({
  prop: "right"
});
var bottom = style({
  prop: "bottom"
});
var left = style({
  prop: "left"
});
const positions = compose(position, zIndex, top, right, bottom, left);
var boxShadow = style({
  prop: "boxShadow",
  themeKey: "shadows"
});
function transform2(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}
var width = style({
  prop: "width",
  transform: transform2
});
var maxWidth = style({
  prop: "maxWidth",
  transform: transform2
});
var minWidth = style({
  prop: "minWidth",
  transform: transform2
});
var height = style({
  prop: "height",
  transform: transform2
});
var maxHeight = style({
  prop: "maxHeight",
  transform: transform2
});
var minHeight = style({
  prop: "minHeight",
  transform: transform2
});
style({
  prop: "size",
  cssProperty: "width",
  transform: transform2
});
style({
  prop: "size",
  cssProperty: "height",
  transform: transform2
});
var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight);
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize(function(prop) {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  var _prop$split = prop.split(""), _prop$split2 = _slicedToArray(_prop$split, 2), a2 = _prop$split2[0], b = _prop$split2[1];
  var property = properties[a2];
  var direction = directions[b] || "";
  return Array.isArray(direction) ? direction.map(function(dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
function getTransformer(theme2) {
  var themeSpacing = theme2.spacing || 8;
  if (typeof themeSpacing === "number") {
    return function(abs) {
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function(abs) {
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  return function() {
    return void 0;
  };
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string") {
    return propValue;
  }
  var abs = Math.abs(propValue);
  var transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return "-".concat(transformed);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return function(propValue) {
    return cssProperties.reduce(function(acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}
function spacing(props) {
  var theme2 = props.theme;
  var transformer = getTransformer(theme2);
  return Object.keys(props).map(function(prop) {
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }
    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }).reduce(merge, {});
}
spacing.propTypes = {};
spacing.filterProps = spacingKeys;
var fontFamily = style({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style({
  prop: "letterSpacing"
});
var lineHeight = style({
  prop: "lineHeight"
});
var textAlign = style({
  prop: "textAlign"
});
var typography = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
var styleFunction = css(compose(borders, display, flexbox, positions, palette, boxShadow, sizing, spacing, typography));
var Box = styled("div")(styleFunction, {
  name: "MuiBox"
});
var styles$j = {
  /* Styles applied to the root element. */
  root: {
    overflow: "hidden"
  }
};
var Card = React.forwardRef(function Card2(props, ref) {
  var classes = props.classes, className = props.className, _props$raised = props.raised, raised = _props$raised === void 0 ? false : _props$raised, other = _objectWithoutProperties(props, ["classes", "className", "raised"]);
  return React.createElement(Paper, _extends$1({
    className: clsx(classes.root, className),
    elevation: raised ? 8 : 1,
    ref
  }, other));
});
const Card$1 = withStyles(styles$j, {
  name: "MuiCard"
})(Card);
var styles$i = function styles23(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      textAlign: "inherit",
      width: "100%",
      "&:hover $focusHighlight": {
        opacity: theme2.palette.action.hoverOpacity
      },
      "&$focusVisible $focusHighlight": {
        opacity: 0.12
      }
    },
    /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
    focusVisible: {},
    /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
    focusHighlight: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
      opacity: 0,
      backgroundColor: "currentcolor",
      transition: theme2.transitions.create("opacity", {
        duration: theme2.transitions.duration.short
      })
    }
  };
};
var CardActionArea = React.forwardRef(function CardActionArea2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, focusVisibleClassName = props.focusVisibleClassName, other = _objectWithoutProperties(props, ["children", "classes", "className", "focusVisibleClassName"]);
  return React.createElement(ButtonBase, _extends$1({
    className: clsx(classes.root, className),
    focusVisibleClassName: clsx(focusVisibleClassName, classes.focusVisible),
    ref
  }, other), children, React.createElement("span", {
    className: classes.focusHighlight
  }));
});
const CardActionArea$1 = withStyles(styles$i, {
  name: "MuiCardActionArea"
})(CardActionArea);
var styles$h = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    "&:last-child": {
      paddingBottom: 24
    }
  }
};
var CardContent = React.forwardRef(function CardContent2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, other = _objectWithoutProperties(props, ["classes", "className", "component"]);
  return React.createElement(Component, _extends$1({
    className: clsx(classes.root, className),
    ref
  }, other));
});
const CardContent$1 = withStyles(styles$h, {
  name: "MuiCardContent"
})(CardContent);
var styles$g = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
var SwitchBase = React.forwardRef(function SwitchBase2(props, ref) {
  var autoFocus = props.autoFocus, checkedProp = props.checked, checkedIcon = props.checkedIcon, classes = props.classes, classNameProp = props.className, defaultChecked = props.defaultChecked, disabledProp = props.disabled, icon = props.icon, id = props.id, inputProps = props.inputProps, inputRef = props.inputRef, name2 = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, readOnly = props.readOnly, required = props.required, tabIndex = props.tabIndex, type = props.type, value = props.value, other = _objectWithoutProperties(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);
  var _React$useRef = React.useRef(checkedProp != null), isControlled = _React$useRef.current;
  var _React$useState = React.useState(Boolean(defaultChecked)), checkedState = _React$useState[0], setCheckedState = _React$useState[1];
  var muiFormControl = useFormControl();
  var handleFocus = function handleFocus2(event) {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  var handleInputChange = function handleInputChange2(event) {
    var checked2 = event.target.checked;
    if (!isControlled) {
      setCheckedState(checked2);
    }
    if (onChange) {
      onChange(event, checked2);
    }
  };
  var disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  var checked = isControlled ? checkedProp : checkedState;
  var hasLabelFor = type === "checkbox" || type === "radio";
  return React.createElement(IconButton, _extends$1({
    component: "span",
    className: clsx(classes.root, classNameProp, checked && classes.checked, disabled && classes.disabled),
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref
  }, other), React.createElement("input", _extends$1({
    autoFocus,
    checked: checkedProp,
    defaultChecked,
    className: classes.input,
    disabled,
    id: hasLabelFor && id,
    name: name2,
    onChange: handleInputChange,
    readOnly,
    ref: inputRef,
    required,
    tabIndex,
    type,
    value
  }, inputProps)), checked ? checkedIcon : icon);
});
const SwitchBase$1 = withStyles(styles$g, {
  name: "PrivateSwitchBase"
})(SwitchBase);
const CheckBoxOutlineBlankIcon = createSvgIcon(React.createElement("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}));
const CheckBoxIcon = createSvgIcon(React.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}));
const IndeterminateCheckBoxIcon = createSvgIcon(React.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}));
var styles$f = function styles24(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme2.palette.text.secondary
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      "&$checked": {
        color: theme2.palette.primary.main,
        "&:hover": {
          backgroundColor: fade(theme2.palette.primary.main, theme2.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme2.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      "&$checked": {
        color: theme2.palette.secondary.main,
        "&:hover": {
          backgroundColor: fade(theme2.palette.secondary.main, theme2.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme2.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon$1 = React.createElement(CheckBoxIcon, null);
var defaultIcon$1 = React.createElement(CheckBoxOutlineBlankIcon, null);
var defaultIndeterminateIcon = React.createElement(IndeterminateCheckBoxIcon, null);
var Checkbox = React.forwardRef(function Checkbox2(props, ref) {
  var _props$checkedIcon = props.checkedIcon, checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon$1 : _props$checkedIcon, classes = props.classes, _props$color = props.color, color2 = _props$color === void 0 ? "secondary" : _props$color, _props$icon = props.icon, icon = _props$icon === void 0 ? defaultIcon$1 : _props$icon, _props$indeterminate = props.indeterminate, indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate, _props$indeterminateI = props.indeterminateIcon, indeterminateIcon = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI, inputProps = props.inputProps, other = _objectWithoutProperties(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps"]);
  return React.createElement(SwitchBase$1, _extends$1({
    type: "checkbox",
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      root: clsx(classes.root, classes["color".concat(capitalize(color2))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color2,
    inputProps: _extends$1({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: indeterminate ? indeterminateIcon : icon,
    ref
  }, other));
});
const Checkbox$1 = withStyles(styles$f, {
  name: "MuiCheckbox"
})(Checkbox);
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
var ClickAwayListener = React.forwardRef(function ClickAwayListener2(props, ref) {
  var children = props.children, _props$mouseEvent = props.mouseEvent, mouseEvent = _props$mouseEvent === void 0 ? "onClick" : _props$mouseEvent, _props$touchEvent = props.touchEvent, touchEvent = _props$touchEvent === void 0 ? "onTouchEnd" : _props$touchEvent, onClickAway = props.onClickAway;
  var movedRef = React.useRef(false);
  var nodeRef = React.useRef(null);
  var mountedRef = React.useRef(false);
  React.useEffect(function() {
    mountedRef.current = true;
    return function() {
      mountedRef.current = false;
    };
  }, []);
  var handleNodeRef = useForkRef(nodeRef, ref);
  var handleOwnRef = React.useCallback(function(instance) {
    setRef(handleNodeRef, ReactDOM.findDOMNode(instance));
  }, [handleNodeRef]);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var handleClickAway = useEventCallback(function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (!mountedRef.current) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    if (!nodeRef.current) {
      return;
    }
    var doc = ownerDocument(nodeRef.current);
    if (doc.documentElement && doc.documentElement.contains(event.target) && !nodeRef.current.contains(event.target)) {
      onClickAway(event);
    }
  });
  var handleTouchMove = React.useCallback(function() {
    movedRef.current = true;
  }, []);
  React.useEffect(function() {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      document.addEventListener(mappedTouchEvent, handleClickAway);
      document.addEventListener("touchmove", handleTouchMove);
      return function() {
        document.removeEventListener(mappedTouchEvent, handleClickAway);
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, handleTouchMove, touchEvent]);
  React.useEffect(function() {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      document.addEventListener(mappedMouseEvent, handleClickAway);
      return function() {
        document.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return React.createElement(React.Fragment, null, React.cloneElement(children, {
    ref: handleRef
  }));
});
var styles$e = function styles25(theme2) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: "hidden",
      transition: theme2.transitions.create("height")
    },
    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: "auto",
      overflow: "visible"
    },
    /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
    hidden: {
      visibility: "hidden"
    },
    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: "flex"
    },
    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: "100%"
    }
  };
};
var Collapse = React.forwardRef(function Collapse2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$collapsedHeigh = props.collapsedHeight, collapsedHeight = _props$collapsedHeigh === void 0 ? "0px" : _props$collapsedHeigh, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExiting = props.onExiting, style2 = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? duration.standard : _props$timeout, other = _objectWithoutProperties(props, ["children", "classes", "className", "collapsedHeight", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "timeout"]);
  var theme2 = useTheme();
  var timer = React.useRef();
  var wrapperRef = React.useRef(null);
  var autoTransitionDuration = React.useRef();
  React.useEffect(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  var handleEnter = function handleEnter2(node, isAppearing) {
    node.style.height = collapsedHeight;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  var handleEntering = function handleEntering2(node, isAppearing) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    var _getTransitionProps = getTransitionProps({
      style: style2,
      timeout
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration;
    if (timeout === "auto") {
      var duration2 = theme2.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style.height = "".concat(wrapperHeight, "px");
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };
  var handleEntered = function handleEntered2(node, isAppearing) {
    node.style.height = "auto";
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  };
  var handleExit = function handleExit2(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");
    if (onExit) {
      onExit(node);
    }
  };
  var handleExiting = function handleExiting2(node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    var _getTransitionProps2 = getTransitionProps({
      style: style2,
      timeout
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration;
    if (timeout === "auto") {
      var duration2 = theme2.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style.height = collapsedHeight;
    if (onExiting) {
      onExiting(node);
    }
  };
  var addEndListener = function addEndListener2(_, next) {
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };
  return React.createElement(Transition$2, _extends$1({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExiting: handleExiting,
    addEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other), function(state, childProps) {
    return React.createElement(Component, _extends$1({
      className: clsx(classes.container, className, {
        entered: classes.entered,
        exited: !inProp && collapsedHeight === "0px" && classes.hidden
      }[state]),
      style: _extends$1({
        minHeight: collapsedHeight
      }, style2),
      ref
    }, childProps), React.createElement("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, React.createElement("div", {
      className: classes.wrapperInner
    }, children)));
  });
});
Collapse.muiSupportAuto = true;
const Collapse$1 = withStyles(styles$e, {
  name: "MuiCollapse"
})(Collapse);
var styles$d = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = React.forwardRef(function DialogContentText2(props, ref) {
  return React.createElement(Typography, _extends$1({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref
  }, props));
});
const DialogContentText$1 = withStyles(styles$d, {
  name: "MuiDialogContentText"
})(DialogContentText);
var styles$c = function styles26(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: "none",
      flexShrink: 0,
      backgroundColor: theme2.palette.divider
    },
    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    },
    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },
    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: fade(theme2.palette.divider, 0.08)
    },
    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme2.spacing(2),
      marginRight: theme2.spacing(2)
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: "100%",
      width: 1
    }
  };
};
var Divider = React.forwardRef(function Divider2(props, ref) {
  var _props$absolute = props.absolute, absolute = _props$absolute === void 0 ? false : _props$absolute, classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "hr" : _props$component, _props$light = props.light, light = _props$light === void 0 ? false : _props$light, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$role = props.role, role = _props$role === void 0 ? Component !== "hr" ? "separator" : void 0 : _props$role, _props$variant = props.variant, variant = _props$variant === void 0 ? "fullWidth" : _props$variant, other = _objectWithoutProperties(props, ["absolute", "classes", "className", "component", "light", "orientation", "role", "variant"]);
  return React.createElement(Component, _extends$1({
    className: clsx(classes.root, className, variant !== "fullWidth" && classes[variant], absolute && classes.absolute, light && classes.light, {
      vertical: classes.vertical
    }[orientation]),
    role,
    ref
  }, other));
});
const Divider$1 = withStyles(styles$c, {
  name: "MuiDivider"
})(Divider);
var styles$b = function styles27(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      // For correct alignment with the text.
      verticalAlign: "middle",
      // Remove grey highlight
      WebkitTapHighlightColor: "transparent",
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      "&$disabled": {
        cursor: "default"
      }
    },
    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: "row-reverse",
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },
    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: "column-reverse",
      marginLeft: 16
    },
    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: "column",
      marginLeft: 16
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the label's Typography component. */
    label: {
      "&$disabled": {
        color: theme2.palette.text.disabled
      }
    }
  };
};
var FormControlLabel = React.forwardRef(function FormControlLabel2(props, ref) {
  props.checked;
  var classes = props.classes, classNameProp = props.className, control = props.control, disabledProp = props.disabled;
  props.inputRef;
  var label = props.label, _props$labelPlacement = props.labelPlacement, labelPlacement = _props$labelPlacement === void 0 ? "end" : _props$labelPlacement;
  props.name;
  props.onChange;
  props.value;
  var other = _objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);
  var muiFormControl = useFormControl();
  var disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  var controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach(function(key) {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  return React.createElement("label", _extends$1({
    className: clsx(classes.root, classNameProp, labelPlacement !== "end" && classes["labelPlacement".concat(capitalize(labelPlacement))], disabled && classes.disabled),
    ref
  }, other), React.cloneElement(control, controlProps), React.createElement(Typography, {
    component: "span",
    className: clsx(classes.label, disabled && classes.disabled)
  }, label));
});
const FormControlLabel$1 = withStyles(styles$b, {
  name: "MuiFormControlLabel"
})(FormControlLabel);
var styles$a = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: "row"
  }
};
var FormGroup = React.forwardRef(function FormGroup2(props, ref) {
  var classes = props.classes, className = props.className, _props$row = props.row, row = _props$row === void 0 ? false : _props$row, other = _objectWithoutProperties(props, ["classes", "className", "row"]);
  return React.createElement("div", _extends$1({
    className: clsx(classes.root, className, row && classes.row),
    ref
  }, other));
});
const FormGroup$1 = withStyles(styles$a, {
  name: "MuiFormGroup"
})(FormGroup);
var TRANSITION_DURATION = 4;
var styles$9 = function styles28(theme2) {
  var getColor = function getColor2(color2) {
    return theme2.palette.type === "light" ? lighten(color2, 0.62) : darken(color2, 0.5);
  };
  var backgroundPrimary = getColor(theme2.palette.primary.main);
  var backgroundSecondary = getColor(theme2.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      overflow: "hidden",
      height: 4
    },
    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant-"buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },
    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },
    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},
    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},
    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: "transparent"
    },
    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: "rotate(180deg)"
    },
    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%",
      animation: "$buffer 3s infinite linear"
    },
    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat(backgroundPrimary, " 0%, ").concat(backgroundPrimary, " 16%, transparent 42%)"),
      backgroundSize: "10px 10px",
      backgroundPosition: "0px -23px"
    },
    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat(backgroundSecondary, " 0%, ").concat(backgroundSecondary, " 16%, transparent 42%)"),
      backgroundSize: "10px 10px",
      backgroundPosition: "0px -23px"
    },
    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left"
    },
    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme2.palette.primary.main
    },
    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme2.palette.secondary.main
    },
    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: "auto",
      animation: "$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"
    },
    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: "auto",
      animation: "$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
      animationDelay: "1.15s"
    },
    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    "@keyframes indeterminate1": {
      //  |-----|---x-||-----||-----|
      "0%": {
        left: "-35%",
        right: "100%"
      },
      //  |-----|-----||-----||xxxx-|
      "60%": {
        left: "100%",
        right: "-90%"
      },
      "100%": {
        left: "100%",
        right: "-90%"
      }
    },
    "@keyframes indeterminate2": {
      //  |xxxxx|xxxxx||-----||-----|
      "0%": {
        left: "-200%",
        right: "100%"
      },
      //  |-----|-----||-----||-x----|
      "60%": {
        left: "107%",
        right: "-8%"
      },
      "100%": {
        left: "107%",
        right: "-8%"
      }
    },
    "@keyframes buffer": {
      "0%": {
        opacity: 1,
        backgroundPosition: "0px -23px"
      },
      "50%": {
        opacity: 0,
        backgroundPosition: "0px -23px"
      },
      "100%": {
        opacity: 1,
        backgroundPosition: "-200px -23px"
      }
    }
  };
};
var LinearProgress = React.forwardRef(function LinearProgress2(props, ref) {
  var classes = props.classes, classNameProp = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "primary" : _props$color, value = props.value, valueBuffer = props.valueBuffer, _props$variant = props.variant, variant = _props$variant === void 0 ? "indeterminate" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);
  var theme2 = useTheme();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };
  if (variant === "determinate" || variant === "buffer") {
    if (value !== void 0) {
      rootProps["aria-valuenow"] = Math.round(value);
      var transform3 = value - 100;
      if (theme2.direction === "rtl") {
        transform3 = -transform3;
      }
      inlineStyles.bar1.transform = "translateX(".concat(transform3, "%)");
    }
  }
  if (variant === "buffer") {
    if (valueBuffer !== void 0) {
      var _transform = (valueBuffer || 0) - 100;
      if (theme2.direction === "rtl") {
        _transform = -_transform;
      }
      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    }
  }
  return React.createElement("div", _extends$1({
    className: clsx(classes.root, classes["color".concat(capitalize(color2))], classNameProp, {
      determinate: classes.determinate,
      indeterminate: classes.indeterminate,
      buffer: classes.buffer,
      query: classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref
  }, other), variant === "buffer" ? React.createElement("div", {
    className: clsx(classes.dashed, classes["dashedColor".concat(capitalize(color2))])
  }) : null, React.createElement("div", {
    className: clsx(classes.bar, classes["barColor".concat(capitalize(color2))], (variant === "indeterminate" || variant === "query") && classes.bar1Indeterminate, {
      determinate: classes.bar1Determinate,
      buffer: classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === "determinate" ? null : React.createElement("div", {
    className: clsx(classes.bar, (variant === "indeterminate" || variant === "query") && classes.bar2Indeterminate, variant === "buffer" ? [classes["color".concat(capitalize(color2))], classes.bar2Buffer] : classes["barColor".concat(capitalize(color2))]),
    style: inlineStyles.bar2
  }));
});
const LinearProgress$1 = withStyles(styles$9, {
  name: "MuiLinearProgress"
})(LinearProgress);
var styles$8 = function styles29(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme2.palette.action.active,
      flexShrink: 0,
      display: "inline-flex"
    },
    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
var ListItemIcon = React.forwardRef(function ListItemIcon2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  var context = React.useContext(ListContext);
  return React.createElement("div", _extends$1({
    className: clsx(classes.root, className, context.alignItems === "flex-start" && classes.alignItemsFlexStart),
    ref
  }, other));
});
const ListItemIcon$1 = withStyles(styles$8, {
  name: "MuiListItemIcon"
})(ListItemIcon);
var styles$7 = function styles210(theme2) {
  return {
    /* Styles applied to the root element. */
    root: _extends$1({}, theme2.typography.body1, _defineProperty({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      width: "auto",
      overflow: "hidden",
      whiteSpace: "nowrap"
    }, theme2.breakpoints.up("sm"), {
      minHeight: "auto"
    })),
    // TODO To remove in v5?
    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},
    /* Styles applied to the root element if `selected={true}`. */
    selected: {},
    /* Styles applied to the root element if dense. */
    dense: _extends$1({}, theme2.typography.body2, {
      minHeight: "auto"
    })
  };
};
var MenuItem = React.forwardRef(function MenuItem2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, component = _props$component === void 0 ? "li" : _props$component, _props$disableGutters = props.disableGutters, disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters, _props$role = props.role, role = _props$role === void 0 ? "menuitem" : _props$role, selected = props.selected, tabIndexProp = props.tabIndex, other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "role", "selected", "tabIndex"]);
  var tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return React.createElement(ListItem, _extends$1({
    button: true,
    role,
    tabIndex,
    component,
    selected,
    disableGutters,
    classes: {
      dense: classes.dense
    },
    className: clsx(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref
  }, other));
});
const MenuItem$1 = withStyles(styles$7, {
  name: "MuiMenuItem"
})(MenuItem);
const global = globalThis || void 0 || self;
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css2 = window2.getComputedStyle(element, null);
  return property ? css2[property] : css2;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow2 = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow2 + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order2 = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order2 ? element1 : element2;
  var end = order2 ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles3, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles3["border" + sideA + "Width"], 10) + parseFloat(styles3["border" + sideB + "Width"], 10);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body = document2.body;
  var html = document2.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e2) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width2 = sizes.width || element.clientWidth || result.right - result.left;
  var height2 = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width2;
  var vertScrollbar = element.offsetHeight - height2;
  if (horizScrollbar || vertScrollbar) {
    var styles3 = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles3, "x");
    vertScrollbar -= getBordersSize(styles3, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles3 = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles3.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles3.borderLeftWidth, 10);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles3.marginTop, 10);
    var marginLeft = parseFloat(styles3.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width2 = Math.max(html.clientWidth, window.innerWidth || 0);
  var height2 = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width2,
    height: height2
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height2 = _getWindowSizes.height, width2 = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height2 + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width2 + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref2) {
  var width2 = _ref2.width, height2 = _ref2.height;
  return width2 * height2;
}
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a2, b) {
    return b.area - a2.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width2 = _ref2.width, height2 = _ref2.height;
    return width2 >= popper.clientWidth && height2 >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles3 = window2.getComputedStyle(element);
  var x = parseFloat(styles3.marginTop || 0) + parseFloat(styles3.marginBottom || 0);
  var y = parseFloat(styles3.marginLeft || 0) + parseFloat(styles3.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function update() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref2) {
    var name2 = _ref2.name, enabled = _ref2.enabled;
    return enabled && name2 === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? "" + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument2 = element.ownerDocument;
  return ownerDocument2 ? ownerDocument2.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}
function setupEventListeners(reference, options, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state) {
  getWindow(reference).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n2) {
  return n2 !== "" && !isNaN(parseFloat(n2)) && isFinite(n2);
}
function setStyles(element, styles3) {
  Object.keys(styles3).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles3[prop])) {
      unit = "px";
    }
    element.style[prop] = styles3[prop] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement);
  setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
  return options;
}
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var round2 = Math.round, floor = Math.floor;
  var noRound = function noRound2(v) {
    return v;
  };
  var referenceWidth = round2(reference.width);
  var popperWidth = round2(popper.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round2 : floor;
  var verticalToInteger = !shouldRound ? noRound : round2;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
function computeStyle(data, options) {
  var x = options.x, y = options.y;
  var popper = data.offsets.popper;
  var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles3 = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left2 = void 0, top2 = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top2 = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top2 = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top2 = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left2 = -offsetParent.clientWidth + offsets.right;
    } else {
      left2 = -offsetParentRect.width + offsets.right;
    }
  } else {
    left2 = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles3[prefixedProperty] = "translate3d(" + left2 + "px, " + top2 + "px, 0)";
    styles3[sideA] = 0;
    styles3[sideB] = 0;
    styles3.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles3[sideA] = top2 * invertTop;
    styles3[sideB] = left2 * invertLeft;
    styles3.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles3, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find(modifiers2, function(_ref2) {
    var name2 = _ref2.name;
    return name2 === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css2 = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css2["margin" + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css2["border" + sideCapitalized + "Width"], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data, options) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function(step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor = Math.floor;
    var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index) {
    var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a2, b) {
      if (a2[a2.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a2[a2.length - 1] = b;
        mergeWithPrevious = true;
        return a2;
      } else if (mergeWithPrevious) {
        a2[a2.length - 1] += b;
        mergeWithPrevious = false;
        return a2;
      } else {
        return a2.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index) {
    op.forEach(function(frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref2) {
  var offset2 = _ref2.offset;
  var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style;
  var top2 = popperStyles.top, left2 = popperStyles.left, transform3 = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top2;
  popperStyles.left = left2;
  popperStyles[transformProp] = transform3;
  options.boundaries = boundaries;
  var order2 = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };
  order2.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
};
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers
};
var Popper$1 = function() {
  function Popper3(reference, popper) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper3);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce(this.update.bind(this));
    this.options = _extends({}, Popper3.Defaults, options);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper3.Defaults.modifiers, options.modifiers)).forEach(function(name2) {
      _this.options.modifiers[name2] = _extends({}, Popper3.Defaults.modifiers[name2] || {}, options.modifiers ? options.modifiers[name2] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name2) {
      return _extends({
        name: name2
      }, _this.options.modifiers[name2]);
    }).sort(function(a2, b) {
      return a2.order - b.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper3, [{
    key: "update",
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]);
  return Popper3;
}();
Popper$1.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper$1.placements = placements;
Popper$1.Defaults = Defaults;
function flipPlacement(placement) {
  var direction = typeof window !== "undefined" && document.body.getAttribute("dir") || "ltr";
  if (direction !== "rtl") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useEnhancedEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var defaultPopperOptions = {};
var Popper = React.forwardRef(function Popper2(props, ref) {
  var anchorEl = props.anchorEl, children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, modifiers2 = props.modifiers, open = props.open, _props$placement = props.placement, initialPlacement = _props$placement === void 0 ? "bottom" : _props$placement, _props$popperOptions = props.popperOptions, popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions, popperRefProp = props.popperRef, _props$transition = props.transition, transition = _props$transition === void 0 ? false : _props$transition, other = _objectWithoutProperties(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition"]);
  var tooltipRef = React.useRef(null);
  var ownRef = useForkRef(tooltipRef, ref);
  var popperRef = React.useRef(null);
  var handlePopperRef = useForkRef(popperRef, popperRefProp);
  var handlePopperRefRef = React.useRef(handlePopperRef);
  useEnhancedEffect(function() {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React.useImperativeHandle(popperRefProp, function() {
    return popperRef.current;
  }, []);
  var _React$useState = React.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var rtlPlacement = flipPlacement(initialPlacement);
  var _React$useState2 = React.useState(rtlPlacement), placement = _React$useState2[0], setPlacement = _React$useState2[1];
  var handleOpen = React.useCallback(function() {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }
    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }
    var handlePopperUpdate = function handlePopperUpdate2(data) {
      setPlacement(data.placement);
    };
    getAnchorEl(anchorEl);
    var popper = new Popper$1(getAnchorEl(anchorEl), tooltipRef.current, _extends$1({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: _extends$1({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: "window"
        }
      }, {}, modifiers2, {}, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: createChainedFunction(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: createChainedFunction(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers2, open, rtlPlacement, popperOptions]);
  var handleRef = React.useCallback(function(node) {
    setRef(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleClose = function handleClose2() {
    if (!popperRef.current) {
      return;
    }
    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    handleClose();
  };
  React.useEffect(function() {
    handleOpen();
  }, [handleOpen]);
  React.useEffect(function() {
    return function() {
      handleClose();
    };
  }, []);
  React.useEffect(function() {
    if (!open && !transition) {
      handleClose();
    }
  }, [open, transition]);
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  var childProps = {
    placement
  };
  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }
  return React.createElement(Portal$2, {
    disablePortal,
    container
  }, React.createElement("div", _extends$1({
    ref: handleRef,
    role: "tooltip",
    style: {
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: "fixed"
    }
  }, other), typeof children === "function" ? children(childProps) : children));
});
const RadioButtonUncheckedIcon = createSvgIcon(React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}));
const RadioButtonCheckedIcon = createSvgIcon(React.createElement("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}));
var styles$6 = function styles211(theme2) {
  return {
    root: {
      position: "relative",
      display: "flex",
      "&$checked $layer": {
        transform: "scale(1)",
        transition: theme2.transitions.create("transform", {
          easing: theme2.transitions.easing.easeOut,
          duration: theme2.transitions.duration.shortest
        })
      }
    },
    layer: {
      left: 0,
      position: "absolute",
      transform: "scale(0)",
      transition: theme2.transitions.create("transform", {
        easing: theme2.transitions.easing.easeIn,
        duration: theme2.transitions.duration.shortest
      })
    },
    checked: {}
  };
};
var _ref = React.createElement(RadioButtonUncheckedIcon, null);
function RadioButtonIcon(props) {
  var checked = props.checked, classes = props.classes;
  return React.createElement("div", {
    className: clsx(classes.root, checked && classes.checked)
  }, _ref, React.createElement(RadioButtonCheckedIcon, {
    className: classes.layer
  }));
}
const RadioButtonIcon$1 = withStyles(styles$6, {
  name: "PrivateRadioButtonIcon"
})(RadioButtonIcon);
var RadioGroupContext = React.createContext();
var styles$5 = function styles212(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme2.palette.text.secondary
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      "&$checked": {
        color: theme2.palette.primary.main,
        "&:hover": {
          backgroundColor: fade(theme2.palette.primary.main, theme2.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme2.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      "&$checked": {
        color: theme2.palette.secondary.main,
        "&:hover": {
          backgroundColor: fade(theme2.palette.secondary.main, theme2.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      },
      "&$disabled": {
        color: theme2.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = React.createElement(RadioButtonIcon$1, {
  checked: true
});
var defaultIcon = React.createElement(RadioButtonIcon$1, null);
var Radio = React.forwardRef(function Radio2(props, ref) {
  var checkedProp = props.checked, classes = props.classes, _props$color = props.color, color2 = _props$color === void 0 ? "secondary" : _props$color, nameProp = props.name, onChangeProp = props.onChange, other = _objectWithoutProperties(props, ["checked", "classes", "color", "name", "onChange"]);
  var radioGroup = React.useContext(RadioGroupContext);
  var checked = checkedProp;
  var onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  var name2 = nameProp;
  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = radioGroup.value === props.value;
    }
    if (typeof name2 === "undefined") {
      name2 = radioGroup.name;
    }
  }
  return React.createElement(SwitchBase$1, _extends$1({
    color: color2,
    type: "radio",
    icon: defaultIcon,
    checkedIcon: defaultCheckedIcon,
    classes: {
      root: clsx(classes.root, classes["color".concat(capitalize(color2))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    name: name2,
    checked,
    onChange,
    ref
  }, other));
});
const Radio$1 = withStyles(styles$5, {
  name: "MuiRadio"
})(Radio);
var styles$4 = function styles213(theme2) {
  var emphasis = theme2.palette.type === "light" ? 0.8 : 0.98;
  var backgroundColor = emphasize(theme2.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: _defineProperty({
      color: theme2.palette.getContrastText(backgroundColor),
      backgroundColor,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: theme2.shape.borderRadius,
      flexGrow: 1
    }, theme2.breakpoints.up("sm"), {
      flexGrow: "initial",
      minWidth: 288
    }),
    /* Styles applied to the message wrapper element. */
    message: {
      padding: "8px 0"
    },
    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var SnackbarContent = React.forwardRef(function SnackbarContent2(props, ref) {
  var action = props.action, classes = props.classes, className = props.className, message = props.message, other = _objectWithoutProperties(props, ["action", "classes", "className", "message"]);
  return React.createElement(Paper, _extends$1({
    component: Typography,
    variant: "body2",
    variantMapping: {
      body1: "div",
      body2: "div"
    },
    role: "alertdialog",
    square: true,
    elevation: 6,
    className: clsx(classes.root, className),
    ref
  }, other), React.createElement("div", {
    className: classes.message
  }, message), action ? React.createElement("div", {
    className: classes.action
  }, action) : null);
});
const SnackbarContent$1 = withStyles(styles$4, {
  name: "MuiSnackbarContent"
})(SnackbarContent);
var styles$3 = function styles214(theme2) {
  var top1 = {
    top: 8
  };
  var bottom1 = {
    bottom: 8
  };
  var right2 = {
    justifyContent: "flex-end"
  };
  var left2 = {
    justifyContent: "flex-start"
  };
  var top3 = {
    top: 24
  };
  var bottom3 = {
    bottom: 24
  };
  var right3 = {
    right: 24
  };
  var left3 = {
    left: 24
  };
  var center = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme2.zIndex.snackbar,
      position: "fixed",
      display: "flex",
      left: 8,
      right: 8,
      justifyContent: "center",
      alignItems: "center"
    },
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: _extends$1({}, top1, _defineProperty({}, theme2.breakpoints.up("sm"), _extends$1({}, top3, {}, center))),
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: _extends$1({}, bottom1, _defineProperty({}, theme2.breakpoints.up("sm"), _extends$1({}, bottom3, {}, center))),
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: _extends$1({}, top1, {}, right2, _defineProperty({}, theme2.breakpoints.up("sm"), _extends$1({
      left: "auto"
    }, top3, {}, right3))),
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: _extends$1({}, bottom1, {}, right2, _defineProperty({}, theme2.breakpoints.up("sm"), _extends$1({
      left: "auto"
    }, bottom3, {}, right3))),
    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: _extends$1({}, top1, {}, left2, _defineProperty({}, theme2.breakpoints.up("sm"), _extends$1({
      right: "auto"
    }, top3, {}, left3))),
    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: _extends$1({}, bottom1, {}, left2, _defineProperty({}, theme2.breakpoints.up("sm"), _extends$1({
      right: "auto"
    }, bottom3, {}, left3)))
  };
};
var Snackbar = React.forwardRef(function Snackbar2(props, ref) {
  var action = props.action, _props$anchorOrigin = props.anchorOrigin;
  _props$anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "bottom",
    horizontal: "center"
  } : _props$anchorOrigin;
  var vertical = _props$anchorOrigin.vertical, horizontal = _props$anchorOrigin.horizontal, autoHideDuration2 = props.autoHideDuration, children = props.children, classes = props.classes, className = props.className, ClickAwayListenerProps = props.ClickAwayListenerProps, ContentProps = props.ContentProps, _props$disableWindowB = props.disableWindowBlurListener, disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB, message = props.message, onClose = props.onClose, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, open = props.open, resumeHideDuration = props.resumeHideDuration, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  } : _props$transitionDura, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  var timerAutoHide = React.useRef();
  var _React$useState = React.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var setAutoHideTimer = React.useCallback(function(autoHideDurationParam) {
    var autoHideDurationBefore = autoHideDurationParam != null ? autoHideDurationParam : autoHideDuration2;
    if (!onClose || autoHideDurationBefore == null) {
      return;
    }
    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function() {
      var autoHideDurationAfter = autoHideDurationParam != null ? autoHideDurationParam : autoHideDuration2;
      if (!onClose || autoHideDurationAfter == null) {
        return;
      }
      onClose(null, "timeout");
    }, autoHideDurationBefore);
  }, [autoHideDuration2, onClose]);
  React.useEffect(function() {
    if (open) {
      setAutoHideTimer();
    }
    return function() {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, setAutoHideTimer]);
  var handlePause = function handlePause2() {
    clearTimeout(timerAutoHide.current);
  };
  var handleResume = React.useCallback(function() {
    if (autoHideDuration2 != null) {
      if (resumeHideDuration != null) {
        setAutoHideTimer(resumeHideDuration);
        return;
      }
      setAutoHideTimer(autoHideDuration2 * 0.5);
    }
  }, [autoHideDuration2, resumeHideDuration, setAutoHideTimer]);
  var handleMouseEnter = function handleMouseEnter2(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }
    handlePause();
  };
  var handleMouseLeave = function handleMouseLeave2(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }
    handleResume();
  };
  var handleClickAway = function handleClickAway2(event) {
    if (onClose) {
      onClose(event, "clickaway");
    }
  };
  var handleExited = function handleExited2() {
    setExited(true);
  };
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  React.useEffect(function() {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return function() {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, handleResume, open]);
  if (!open && exited) {
    return null;
  }
  return React.createElement(ClickAwayListener, _extends$1({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), React.createElement("div", _extends$1({
    className: clsx(classes.root, classes["anchorOrigin".concat(capitalize(vertical)).concat(capitalize(horizontal))], className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref
  }, other), React.createElement(TransitionComponent, _extends$1({
    appear: true,
    in: open,
    onEnter: createChainedFunction(handleEnter, onEnter),
    onEntered,
    onEntering,
    onExit,
    onExited: createChainedFunction(handleExited, onExited),
    onExiting,
    timeout: transitionDuration,
    direction: vertical === "top" ? "down" : "up"
  }, TransitionProps), children || React.createElement(SnackbarContent$1, _extends$1({
    message,
    action
  }, ContentProps)))));
});
const Snackbar$1 = withStyles(styles$3, {
  flip: false,
  name: "MuiSnackbar"
})(Snackbar);
var styles$2 = function styles215(theme2) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "inline-flex",
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: "hidden",
      padding: 12,
      boxSizing: "border-box",
      position: "relative",
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: "middle"
      // For correct alignment with the text.
    },
    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },
    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },
    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme2.palette.type === "light" ? theme2.palette.grey[50] : theme2.palette.grey[400],
      transition: theme2.transitions.create(["left", "transform"], {
        duration: theme2.transitions.duration.shortest
      }),
      "&$checked": {
        transform: "translateX(50%)"
      },
      "&$disabled": {
        color: theme2.palette.type === "light" ? theme2.palette.grey[400] : theme2.palette.grey[800]
      },
      "&$checked + $track": {
        opacity: 0.5
      },
      "&$disabled + $track": {
        opacity: theme2.palette.type === "light" ? 0.12 : 0.1
      }
    },
    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      "&$checked": {
        color: theme2.palette.primary.main,
        "&:hover": {
          backgroundColor: fade(theme2.palette.primary.main, theme2.palette.action.hoverOpacity)
        }
      },
      "&$disabled": {
        color: theme2.palette.type === "light" ? theme2.palette.grey[400] : theme2.palette.grey[800]
      },
      "&$checked + $track": {
        backgroundColor: theme2.palette.primary.main
      },
      "&$disabled + $track": {
        backgroundColor: theme2.palette.type === "light" ? theme2.palette.common.black : theme2.palette.common.white
      }
    },
    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      "&$checked": {
        color: theme2.palette.secondary.main,
        "&:hover": {
          backgroundColor: fade(theme2.palette.secondary.main, theme2.palette.action.hoverOpacity)
        }
      },
      "&$disabled": {
        color: theme2.palette.type === "light" ? theme2.palette.grey[400] : theme2.palette.grey[800]
      },
      "&$checked + $track": {
        backgroundColor: theme2.palette.secondary.main
      },
      "&$disabled + $track": {
        backgroundColor: theme2.palette.type === "light" ? theme2.palette.common.black : theme2.palette.common.white
      }
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      "& $thumb": {
        width: 16,
        height: 16
      },
      "& $switchBase": {
        padding: 4
      }
    },
    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},
    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},
    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: "-100%",
      width: "300%"
    },
    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme2.shadows[1],
      backgroundColor: "currentColor",
      width: 20,
      height: 20,
      borderRadius: "50%"
    },
    /* Styles applied to the track element. */
    track: {
      height: "100%",
      width: "100%",
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme2.transitions.create(["opacity", "background-color"], {
        duration: theme2.transitions.duration.shortest
      }),
      backgroundColor: theme2.palette.type === "light" ? theme2.palette.common.black : theme2.palette.common.white,
      opacity: theme2.palette.type === "light" ? 0.38 : 0.3
    }
  };
};
var Switch = React.forwardRef(function Switch2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color2 = _props$color === void 0 ? "secondary" : _props$color, _props$edge = props.edge, edge = _props$edge === void 0 ? false : _props$edge, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, other = _objectWithoutProperties(props, ["classes", "className", "color", "edge", "size"]);
  var icon = React.createElement("span", {
    className: classes.thumb
  });
  return React.createElement("span", {
    className: clsx(classes.root, className, {
      start: classes.edgeStart,
      end: classes.edgeEnd
    }[edge], {
      small: classes["size".concat(capitalize(size))]
    }[size])
  }, React.createElement(SwitchBase$1, _extends$1({
    type: "checkbox",
    icon,
    checkedIcon: icon,
    classes: {
      root: clsx(classes.switchBase, classes["color".concat(capitalize(color2))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref
  }, other)), React.createElement("span", {
    className: classes.track
  }));
});
const Switch$1 = withStyles(styles$2, {
  name: "MuiSwitch"
})(Switch);
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var styles$1 = function styles216(theme2) {
  return {
    /* Styles applied to the Popper component. */
    popper: {
      zIndex: theme2.zIndex.tooltip,
      pointerEvents: "none",
      flip: false
      // disable jss-rtl plugin
    },
    /* Styles applied to the Popper component if `interactive={true}`. */
    popperInteractive: {
      pointerEvents: "auto"
    },
    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
      backgroundColor: fade(theme2.palette.grey[700], 0.9),
      borderRadius: theme2.shape.borderRadius,
      color: theme2.palette.common.white,
      fontFamily: theme2.typography.fontFamily,
      padding: "4px 8px",
      fontSize: theme2.typography.pxToRem(10),
      lineHeight: "".concat(round(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: "break-word",
      fontWeight: theme2.typography.fontWeightMedium
    },
    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
      padding: "8px 16px",
      fontSize: theme2.typography.pxToRem(14),
      lineHeight: "".concat(round(16 / 14), "em"),
      fontWeight: theme2.typography.fontWeightRegular
    },
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: "right center",
      margin: "0 24px "
    }, theme2.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: _defineProperty({
      transformOrigin: "left center",
      margin: "0 24px"
    }, theme2.breakpoints.up("sm"), {
      margin: "0 14px"
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: _defineProperty({
      transformOrigin: "center bottom",
      margin: "24px 0"
    }, theme2.breakpoints.up("sm"), {
      margin: "14px 0"
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: _defineProperty({
      transformOrigin: "center top",
      margin: "24px 0"
    }, theme2.breakpoints.up("sm"), {
      margin: "14px 0"
    })
  };
};
var Tooltip = React.forwardRef(function Tooltip2(props, ref) {
  var children = props.children, classes = props.classes, _props$disableFocusLi = props.disableFocusListener, disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi, _props$disableHoverLi = props.disableHoverListener, disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi, _props$disableTouchLi = props.disableTouchListener, disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi, _props$enterDelay = props.enterDelay, enterDelay = _props$enterDelay === void 0 ? 0 : _props$enterDelay, _props$enterTouchDela = props.enterTouchDelay, enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela, id = props.id, _props$interactive = props.interactive, interactive = _props$interactive === void 0 ? false : _props$interactive, _props$leaveDelay = props.leaveDelay, leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay, _props$leaveTouchDela = props.leaveTouchDelay, leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela, onClose = props.onClose, onOpen = props.onOpen, openProp = props.open, _props$placement = props.placement, placement = _props$placement === void 0 ? "bottom" : _props$placement, PopperProps = props.PopperProps, title = props.title, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);
  var theme2 = useTheme();
  var _React$useState = React.useState(false), openState = _React$useState[0], setOpenState = _React$useState[1];
  var _React$useState2 = React.useState(0), forceUpdate = _React$useState2[1];
  var _React$useState3 = React.useState(), childNode = _React$useState3[0], setChildNode = _React$useState3[1];
  var ignoreNonTouchEvents = React.useRef(false);
  var _React$useRef = React.useRef(openProp != null), isControlled = _React$useRef.current;
  var defaultId = React.useRef();
  var closeTimer = React.useRef();
  var enterTimer = React.useRef();
  var leaveTimer = React.useRef();
  var touchTimer = React.useRef();
  React.useEffect(function() {
    if (!defaultId.current) {
      defaultId.current = "mui-tooltip-".concat(Math.round(Math.random() * 1e5));
    }
    if (openProp) {
      forceUpdate(function(n2) {
        return !n2;
      });
    }
  }, [openProp]);
  React.useEffect(function() {
    return function() {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);
  var handleOpen = function handleOpen2(event) {
    if (!isControlled && !openState) {
      setOpenState(true);
    }
    if (onOpen) {
      onOpen(event);
    }
  };
  var handleEnter = function handleEnter2(event) {
    var childrenProps2 = children.props;
    if (event.type === "mouseover" && childrenProps2.onMouseOver) {
      childrenProps2.onMouseOver(event);
    }
    if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
      return;
    }
    if (childNode) {
      childNode.removeAttribute("title");
    }
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    if (enterDelay) {
      event.persist();
      enterTimer.current = setTimeout(function() {
        handleOpen(event);
      }, enterDelay);
    } else {
      handleOpen(event);
    }
  };
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState4 = React.useState(false), childIsFocusVisible = _React$useState4[0], setChildIsFocusVisible = _React$useState4[1];
  var handleBlur = function handleBlur2() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };
  var handleFocus = function handleFocus2(event) {
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    if (isFocusVisible(event)) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
    var childrenProps2 = children.props;
    if (childrenProps2.onFocus) {
      childrenProps2.onFocus(event);
    }
  };
  var handleClose = function handleClose2(event) {
    if (!isControlled) {
      setOpenState(false);
    }
    if (onClose) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function() {
      ignoreNonTouchEvents.current = false;
    }, theme2.transitions.duration.shortest);
  };
  var handleLeave = function handleLeave2(event) {
    var childrenProps2 = children.props;
    if (event.type === "blur") {
      if (childrenProps2.onBlur) {
        childrenProps2.onBlur(event);
      }
      handleBlur();
    }
    if (event.type === "mouseleave" && childrenProps2.onMouseLeave) {
      childrenProps2.onMouseLeave(event);
    }
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function() {
      handleClose(event);
    }, leaveDelay);
  };
  var handleTouchStart = function handleTouchStart2(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function() {
      handleEnter(event);
    }, enterTouchDelay);
  };
  var handleTouchEnd = function handleTouchEnd2(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function() {
      handleClose(event);
    }, leaveTouchDelay);
  };
  var handleUseRef = useForkRef(setChildNode, ref);
  var handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  var handleOwnRef = React.useCallback(function(instance) {
    setRef(handleFocusRef, ReactDOM.findDOMNode(instance));
  }, [handleFocusRef]);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var open = isControlled ? openProp : openState;
  if (title === "") {
    open = false;
  }
  var shouldShowNativeTitle = !open && !disableHoverListener;
  var childrenProps = _extends$1({
    "aria-describedby": open ? id || defaultId.current : null,
    title: shouldShowNativeTitle && typeof title === "string" ? title : null
  }, other, {}, children.props, {
    className: clsx(other.className, children.props.className)
  });
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus;
    childrenProps.onBlur = handleLeave;
  }
  var interactiveWrapperListeners = interactive ? {
    onMouseOver: childrenProps.onMouseOver,
    onMouseLeave: childrenProps.onMouseLeave,
    onFocus: childrenProps.onFocus,
    onBlur: childrenProps.onBlur
  } : {};
  return React.createElement(React.Fragment, null, React.cloneElement(children, _extends$1({
    ref: handleRef
  }, childrenProps)), React.createElement(Popper, _extends$1({
    className: clsx(classes.popper, interactive && classes.popperInteractive),
    placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps["aria-describedby"],
    transition: true
  }, interactiveWrapperListeners, PopperProps), function(_ref2) {
    var placementInner = _ref2.placement, TransitionPropsInner = _ref2.TransitionProps;
    return React.createElement(TransitionComponent, _extends$1({
      timeout: theme2.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), React.createElement("div", {
      className: clsx(classes.tooltip, classes["tooltipPlacement".concat(capitalize(placementInner.split("-")[0]))], ignoreNonTouchEvents.current && classes.touch)
    }, title));
  }));
});
const Tooltip$1 = withStyles(styles$1, {
  name: "MuiTooltip"
})(Tooltip);
var styles = {
  entering: {
    transform: "none"
  },
  entered: {
    transform: "none"
  }
};
var defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
var Zoom = React.forwardRef(function Zoom2(props, ref) {
  var children = props.children, inProp = props.in, onEnter = props.onEnter, onExit = props.onExit, style2 = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout, other = _objectWithoutProperties(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);
  var theme2 = useTheme();
  var handleRef = useForkRef(children.ref, ref);
  var handleEnter = function handleEnter2(node, isAppearing) {
    reflow(node);
    var transitionProps = getTransitionProps({
      style: style2,
      timeout
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme2.transitions.create("transform", transitionProps);
    node.style.transition = theme2.transitions.create("transform", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  var handleExit = function handleExit2(node) {
    var transitionProps = getTransitionProps({
      style: style2,
      timeout
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme2.transitions.create("transform", transitionProps);
    node.style.transition = theme2.transitions.create("transform", transitionProps);
    if (onExit) {
      onExit(node);
    }
  };
  return React.createElement(Transition$2, _extends$1({
    appear: true,
    in: inProp,
    onEnter: handleEnter,
    onExit: handleExit,
    timeout
  }, other), function(state, childProps) {
    return React.cloneElement(children, _extends$1({
      style: _extends$1({
        transform: "scale(0)",
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles[state], {}, style2, {}, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
var Send = {};
var hasRequiredSend;
function requireSend() {
  if (hasRequiredSend) return Send;
  hasRequiredSend = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Send, "__esModule", {
    value: true
  });
  Send.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
  }), "Send");
  Send.default = _default;
  return Send;
}
var SendExports = /* @__PURE__ */ requireSend();
const SendIcon = /* @__PURE__ */ getDefaultExportFromCjs(SendExports);
const QRCodeIcon = (props) => /* @__PURE__ */ reactExports.createElement(SvgIcon, { viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ reactExports.createElement("g", { fill: "currentColor", fillRule: "nonzero" }, /* @__PURE__ */ reactExports.createElement("path", { d: "M24 24H10.8V13.2H0v-2.4h13.2v10.8H24z" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M15.84 10.8h2.4v5.107h3.293V10.8h2.4v7.507H15.84zM8.093 8.093H0V0h8.093v8.093zM2.4 5.693h3.293V2.4H2.4v3.293zM24 8.093h-8.093V0H24v8.093zm-5.693-2.4H21.6V2.4h-3.293v3.293zM8.093 24H0v-8.093h8.093V24zM2.4 21.6h3.293v-3.293H2.4V21.6zM10.8 0h2.4v8.093h-2.4z" })));
const useButtonStyles = makeStyles((theme2) => ({
  desktop: {
    margin: "0",
    padding: "24px 0 0",
    "& $button:last-child:not(:first-child)": {
      marginLeft: 40
    }
  },
  mobile: {},
  hidden: {
    paddingTop: 0
  },
  collapse: {
    width: "100%",
    zIndex: 1
  },
  button: {
    border: "none",
    borderRadius: 8,
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
    fontSize: "1rem",
    flexBasis: 1,
    flexGrow: 1,
    padding: "20px !important"
  },
  secondaryButton: {
    background: "white",
    color: theme2.palette.primary.dark
  }
}));
function AccountActions(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const classes = useButtonStyles();
  const className = `${props.bottomOfScreen ? classes.mobile : classes.desktop} ${props.hidden ? classes.hidden : ""}`;
  const isDisabled = accountData.balances.length === 0 || !accountData.signers.some((signer) => signer.key === props.account.publicKey);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(DialogActionsBox, { className, hidden: props.hidden }, /* @__PURE__ */ React.createElement(
    ActionButton,
    {
      className: `${classes.button} ${classes.secondaryButton}`,
      icon: /* @__PURE__ */ React.createElement(QRCodeIcon, { style: { fontSize: "110%" } }),
      onClick: props.onReceivePayment,
      variant: "contained"
    },
    t2("account.action.receive")
  ), /* @__PURE__ */ React.createElement(
    ActionButton,
    {
      className: classes.button,
      disabled: isDisabled,
      icon: /* @__PURE__ */ React.createElement(SendIcon, { style: { fontSize: "110%" } }),
      onClick: props.onCreatePayment,
      type: "primary"
    },
    t2("account.action.send")
  ));
}
const AccountActions$1 = React.memo(AccountActions);
var Check = {};
var hasRequiredCheck;
function requireCheck() {
  if (hasRequiredCheck) return Check;
  hasRequiredCheck = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Check, "__esModule", {
    value: true
  });
  Check.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check");
  Check.default = _default;
  return Check;
}
var CheckExports = /* @__PURE__ */ requireCheck();
const CheckIcon$1 = /* @__PURE__ */ getDefaultExportFromCjs(CheckExports);
const normalizePath = (pathname) => pathname.replace(/\/+/, "/").replace(/^\//, "").replace(/\/$/, "");
function matchesRoute(pathname, routepath, exactMatch) {
  const pathFragments = normalizePath(pathname).split("/");
  const routeFragments = normalizePath(routepath).split("/");
  if (exactMatch && pathFragments.length !== routeFragments.length) {
    return false;
  } else if (pathFragments.length < routeFragments.length) {
    return false;
  }
  for (let index = 0; index < routeFragments.length; index++) {
    const routeFragment = routeFragments[index];
    const pathFragment = pathFragments[index];
    if (routeFragment === "*" || routeFragment.charAt(0) === ":") {
      continue;
    } else if (pathFragment !== routeFragment) {
      return false;
    }
  }
  return true;
}
const allAccounts = () => "/";
const account = (accountID) => `/account/${accountID}`;
const accountSettings = (accountID) => `/account/${accountID}/settings`;
const assetDetails = (accountID, assetID) => `/account/${accountID}/balances/${assetID}`;
const balanceDetails = (accountID) => `/account/${accountID}/balances`;
const changeAccountPassword = (accountID) => `/account/${accountID}/settings/password`;
const createAccount = (testnet) => `/account/create/${testnet ? "testnet" : "mainnet"}`;
const createPayment = (accountID) => `/account/${accountID}/send`;
const deleteAccount = (accountID) => `/account/${accountID}/settings/delete`;
const depositAsset = (accountID) => `/account/${accountID}/deposit`;
const exportSecretKey = (accountID) => `/account/${accountID}/settings/export`;
const importAccount = (testnet) => `/account/import/${testnet ? "testnet" : "mainnet"}`;
const joinSharedAccount = (testnet) => `/account/join/${testnet ? "testnet" : "mainnet"}`;
const manageAccountAssets = (accountID) => `/account/${accountID}/balances/manage`;
const manageAccountSigners = (accountID) => `/account/${accountID}/settings/signers`;
const manageAccountSignersDetails = (accountID) => `/account/${accountID}/settings/signers/details`;
const manageTrustedServices = () => "/settings/trusted-services";
const savedAddressesExport = () => "/settings/saved-addresses";
const newAccount = (testnet) => `/account/new/${testnet ? "testnet" : "mainnet"}`;
const purchaseLumens = (accountID) => `/account/${accountID}/purchase`;
const receivePayment = (accountID) => `/account/${accountID}/receive`;
const settings = () => "/settings";
const withdrawAsset = (accountID) => `/account/${accountID}/withdraw`;
const showTransaction = (accountID, transactionHash) => `/account/${accountID}/tx/${transactionHash}`;
const tradeAsset = (accountID, method, preselectedAsset) => {
  return [`/account/${accountID}/trade`, method || "", preselectedAsset || ""].filter((fragment) => !!fragment).join("/");
};
function routeUp(currentPath) {
  const match = currentPath.match(/^\/account\/([^\/]+)\/.+/);
  const accountID = match ? match[1] : void 0;
  if (currentPath === "/") {
    return "/";
  } else if (currentPath.match(/^\/account\/new\//)) {
    return "/";
  } else if (currentPath.match(/^\/account\/(create|import|join)\//)) {
    const testnet = Boolean(currentPath.match(/\/testnet/));
    return newAccount(testnet);
  } else if (accountID && matchesRoute(currentPath, "/account/*/settings/*", false)) {
    return accountSettings(accountID);
  } else if (accountID && matchesRoute(currentPath, "/account/*/*", false)) {
    return account(accountID);
  } else if (accountID && matchesRoute(currentPath, "/account/*/tx/*", false)) {
    return account(accountID);
  } else if (accountID && currentPath === manageAccountAssets(accountID)) {
    return balanceDetails(accountID);
  } else {
    return "/";
  }
}
const useAccountCreationStyles = makeStyles({
  desktopBox: {
    margin: "16px 0",
    padding: "0 40px"
  },
  inlineButton: {
    flexBasis: "auto",
    flexGrow: 0,
    padding: "10px 20px !important"
  }
});
function AccountCreationActions(props) {
  const defaultClasses = useButtonStyles();
  const customClasses = useAccountCreationStyles();
  const { t: t2 } = useTranslation();
  const classes = { ...defaultClasses, ...customClasses };
  const router = useRouter();
  const boxClassName = `${props.bottomOfScreen ? classes.mobile : `${classes.desktop} ${classes.desktopBox}`}`;
  const buttonClassName = `${classes.button} ${props.bottomOfScreen ? "" : classes.inlineButton}`;
  return /* @__PURE__ */ React.createElement(DialogActionsBox, { className: boxClassName }, (() => {
    if (matchesRoute(router.location.pathname, createAccount(props.testnet))) {
      return /* @__PURE__ */ React.createElement(
        ActionButton,
        {
          className: buttonClassName,
          icon: /* @__PURE__ */ React.createElement(CheckIcon$1, { style: { fontSize: "120%" } }),
          onClick: props.onActionButtonClick,
          type: "primary"
        },
        t2("create-account.action.create")
      );
    } else if (matchesRoute(router.location.pathname, importAccount(props.testnet))) {
      return /* @__PURE__ */ React.createElement(
        ActionButton,
        {
          className: buttonClassName,
          icon: /* @__PURE__ */ React.createElement(CheckIcon$1, { style: { fontSize: "120%" } }),
          onClick: props.onActionButtonClick,
          type: "primary"
        },
        t2("create-account.action.import")
      );
    } else if (matchesRoute(router.location.pathname, joinSharedAccount(props.testnet))) {
      return /* @__PURE__ */ React.createElement(
        ActionButton,
        {
          className: buttonClassName,
          icon: /* @__PURE__ */ React.createElement(CheckIcon$1, { style: { fontSize: "120%" } }),
          onClick: props.onActionButtonClick,
          type: "primary"
        },
        t2("create-account.action.join-shared")
      );
    } else {
      return null;
    }
  })());
}
const AccountCreationActions$1 = React.memo(AccountCreationActions);
function NoPasswordConfirmation(props) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      cancelButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onClose }, t2("create-account.action.cancel")),
      confirmButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onConfirm, type: "primary" }, t2("create-account.action.confirm")),
      onClose: props.onClose,
      open: props.open,
      title: t2("create-account.confirm.title")
    },
    /* @__PURE__ */ React.createElement(Trans, { i18nKey: "create-account.confirm.text" }, "You are about to create an account without password protection. Anyone that has access to your device will have access to your account funds. ", /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("br", null), " Are you sure you want to continue without setting up a password?")
  );
}
const NoPasswordConfirmation$1 = React.memo(NoPasswordConfirmation);
function isAccountAlreadyImported(creatingAccount, accounts, testnet) {
  const publicKey = libExports$1.Keypair.fromSecret(creatingAccount.secretKey).publicKey();
  const simpleDuplicate = !creatingAccount.cosigner && accounts.some((account2) => account2.publicKey === publicKey && account2.testnet === testnet && !account2.cosignerOf);
  const cosignerDuplicate = creatingAccount.cosigner && accounts.some(
    (account2) => account2.publicKey === publicKey && account2.testnet === testnet && account2.cosignerOf === creatingAccount.cosignerOf
  );
  const cosigningMyself = creatingAccount.cosigner && publicKey === creatingAccount.cosignerOf;
  return simpleDuplicate || cosigningMyself || cosignerDuplicate;
}
function isValidSecretKey(privateKey) {
  try {
    libExports$1.Keypair.fromSecret(privateKey);
    return true;
  } catch (error) {
    return false;
  }
}
function getNewAccountName(t2, accounts, testnet) {
  const baseName = testnet ? t2("create-account.base-name.testnet") : t2("create-account.base-name.mainnet");
  const deriveName = (idx) => idx === 0 ? baseName : `${baseName} ${idx + 1}`;
  let index = 0;
  while (accounts.some((account2) => account2.name === deriveName(index))) {
    index++;
  }
  return deriveName(index);
}
function validateAccountCreation(t2, accounts, accountCreation) {
  const errors = {};
  if (!accountCreation.name) {
    errors.name = t2("create-account.validation.no-account-name");
  }
  if (accountCreation.requiresPassword && !accountCreation.password) {
    errors.password = t2("create-account.validation.no-password");
  } else if (accountCreation.requiresPassword && accountCreation.repeatedPassword !== accountCreation.password) {
    errors.password = t2("create-account.validation.password-no-match");
  }
  if (accountCreation.import && !isValidSecretKey(accountCreation.secretKey)) {
    errors.secretKey = t2("create-account.validation.invalid-key");
  } else if (accountCreation.import && isAccountAlreadyImported(accountCreation, accounts, accountCreation.testnet)) {
    errors.secretKey = t2("create-account.validation.same-account");
  }
  return {
    errors,
    success: Object.keys(errors).length === 0
  };
}
function useAccountCreation(options) {
  const { t: t2 } = useTranslation();
  const { accounts, createAccount: createAccount2 } = React.useContext(AccountsContext);
  const [accountCreationErrors, setAccountCreationErrors] = React.useState({});
  const [currentAccountCreation, setAccountCreation] = React.useState(() => ({
    cosigner: options.cosigner,
    import: options.import,
    name: getNewAccountName(t2, accounts, options.testnet),
    password: "",
    repeatedPassword: "",
    requiresPassword: true,
    testnet: options.testnet
  }));
  const createNewAccount = async (accountCreation) => {
    if (accountCreation.cosigner && !accountCreation.cosignerOf) {
      throw CustomError(
        "CosignerLackingKeyError",
        "Cannot add key pair as co-signer of an account, since no public key for the account to co-sign has been provided"
      );
    }
    const keypair = accountCreation.import ? libExports$1.Keypair.fromSecret(accountCreation.secretKey) : libExports$1.Keypair.random();
    const account2 = await createAccount2({
      cosignerOf: accountCreation.cosignerOf,
      name: accountCreation.name,
      keypair,
      password: accountCreation.requiresPassword ? accountCreation.password : null,
      testnet: options.testnet
    });
    return account2;
  };
  return {
    accountCreation: currentAccountCreation,
    accountCreationErrors,
    createAccount(blueprint) {
      return createNewAccount(blueprint);
    },
    setAccountCreation,
    validateAccountCreation(accountCreation) {
      const validationResult = validateAccountCreation(t2, accounts, accountCreation);
      setAccountCreationErrors(validationResult.errors);
      return validationResult.success;
    }
  };
}
var Menu = {};
var hasRequiredMenu;
function requireMenu() {
  if (hasRequiredMenu) return Menu;
  hasRequiredMenu = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Menu, "__esModule", {
    value: true
  });
  Menu.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu");
  Menu.default = _default;
  return Menu;
}
var MenuExports = /* @__PURE__ */ requireMenu();
const MenuIcon = /* @__PURE__ */ getDefaultExportFromCjs(MenuExports);
function setDisplayName(Component, name2) {
  Component.displayName = name2;
}
function withFallback(Component, fallback) {
  const AugmentedComponent = (props) => {
    return /* @__PURE__ */ React.createElement(React.Suspense, { fallback: fallback || null }, /* @__PURE__ */ React.createElement(Component, { ...props }));
  };
  setDisplayName(AugmentedComponent, `withFallback(${Component.displayName || Component.name})`);
  return AugmentedComponent;
}
var Clear = {};
var hasRequiredClear;
function requireClear() {
  if (hasRequiredClear) return Clear;
  hasRequiredClear = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Clear, "__esModule", {
    value: true
  });
  Clear.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  Clear.default = _default;
  return Clear;
}
var ClearExports = /* @__PURE__ */ requireClear();
const ClearIcon = /* @__PURE__ */ getDefaultExportFromCjs(ClearExports);
var Edit = {};
var hasRequiredEdit;
function requireEdit() {
  if (hasRequiredEdit) return Edit;
  hasRequiredEdit = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Edit, "__esModule", {
    value: true
  });
  Edit.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
  }), "Edit");
  Edit.default = _default;
  return Edit;
}
var EditExports = /* @__PURE__ */ requireEdit();
const EditIcon = /* @__PURE__ */ getDefaultExportFromCjs(EditExports);
var Group = {};
var hasRequiredGroup;
function requireGroup() {
  if (hasRequiredGroup) return Group;
  hasRequiredGroup = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Group, "__esModule", {
    value: true
  });
  Group.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
  }), "Group");
  Group.default = _default;
  return Group;
}
var GroupExports = /* @__PURE__ */ requireGroup();
const GroupIcon = /* @__PURE__ */ getDefaultExportFromCjs(GroupExports);
var VerifiedUser = {};
var hasRequiredVerifiedUser;
function requireVerifiedUser() {
  if (hasRequiredVerifiedUser) return VerifiedUser;
  hasRequiredVerifiedUser = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(VerifiedUser, "__esModule", {
    value: true
  });
  VerifiedUser.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
  }), "VerifiedUser");
  VerifiedUser.default = _default;
  return VerifiedUser;
}
var VerifiedUserExports = /* @__PURE__ */ requireVerifiedUser();
const VerifiedUserIcon = /* @__PURE__ */ getDefaultExportFromCjs(VerifiedUserExports);
const StellarGuardIcon = (props) => /* @__PURE__ */ reactExports.createElement(SvgIcon, { viewBox: "0 0 1257 1257", ...props }, /* @__PURE__ */ reactExports.createElement("g", { fill: "currentColor", fillRule: "nonzero", transform: "matrix(1,0,0,1,-395.533,-395.6)" }, /* @__PURE__ */ reactExports.createElement("path", { d: "M1471.18,920.382L395.533,1468.3L395.533,1399.7L1652.47,759.433L1652.47,828.035L1541.76,884.429C1541.74,911.765 1541.72,939.101 1541.7,966.437C1541.37,1132.66 1481,1296.73 1376.63,1425.74C1300.05,1520.4 1198.96,1596.22 1085.17,1637.32C1073.52,1641.53 1061.73,1645.37 1049.84,1648.86C1032.09,1653.99 1013.33,1653.37 995.664,1648.13C924.86,1627.01 858.139,1592.72 798.836,1548.59C754.541,1515.62 714.349,1477.32 678.919,1434.95L743.564,1402.02C760.65,1421.44 778.884,1439.85 798.19,1457.1C859.577,1511.95 932.405,1554.84 1010.65,1578.98C1017,1580.94 1023.36,1583.07 1030.02,1581.18C1086.16,1564.94 1140.52,1538.38 1189.46,1504.63C1353.85,1391.25 1460.17,1197.74 1470.37,997.262C1470.91,986.683 1471.17,976.091 1471.18,965.504L1471.18,920.382ZM531.152,1151.02C520.97,1113.31 513.797,1074.8 509.865,1035.93C507.526,1012.81 506.346,989.505 506.301,966.437C506.231,860.57 505.723,754.701 506.302,648.836C506.351,643.533 507.148,638.003 510.908,634.135C515.023,629.902 521.131,628.593 526.684,627.205C587.643,611.917 647.387,591.649 705.654,568.26C804.248,528.684 898.894,479.234 985.98,418.135C994.486,412.167 1002.91,406.029 1011.26,399.899C1012.26,399.179 1012.43,399.084 1013.01,398.737C1016.37,396.707 1020.29,395.588 1024.21,395.6C1029.73,395.673 1034.7,398.394 1039.32,401.802C1151.1,484.15 1278.3,547.702 1408.54,593.084L1323.16,636.578C1304.34,629.106 1285.66,621.278 1267.13,613.113C1184.85,576.873 1105.49,533.632 1031.62,482.877C1027.08,479.754 1021.03,479.734 1016.47,482.817C910.146,555.85 793.805,612.978 672.743,656.124C644.3,666.261 615.544,675.609 586.548,684.025C580.959,685.647 576.858,690.788 576.823,696.889C576.819,786.708 576.764,876.526 576.824,966.345C576.924,1017.59 583.363,1068.61 595.542,1118.22L1652.47,579.831L1652.47,648.433L395.533,1288.7L395.533,1220.1L531.152,1151.02Z" })));
function LobstrVaultIcon(props) {
  return /* @__PURE__ */ reactExports.createElement(SvgIcon, { viewBox: "0 0 67 96", ...props }, /* @__PURE__ */ reactExports.createElement("defs", null, /* @__PURE__ */ reactExports.createElement("linearGradient", { id: "linearGradient-1", x1: "74.917%", x2: "0%", y1: "62.329%", y2: "37.418%" }, /* @__PURE__ */ reactExports.createElement("stop", { offset: "0%" }), /* @__PURE__ */ reactExports.createElement("stop", { offset: "100%", stopColor: "#090114", stopOpacity: "0" })), /* @__PURE__ */ reactExports.createElement("linearGradient", { id: "linearGradient-2", x1: "74.917%", x2: "0%", y1: "88.177%", y2: "11.038%" }, /* @__PURE__ */ reactExports.createElement("stop", { offset: "0%" }), /* @__PURE__ */ reactExports.createElement("stop", { offset: "100%", stopColor: "#090114", stopOpacity: "0" }))), /* @__PURE__ */ reactExports.createElement("g", { fill: "none", fillRule: "evenodd", stroke: "none", strokeWidth: "1" }, /* @__PURE__ */ reactExports.createElement("g", { transform: "translate(-28 -13)" }, /* @__PURE__ */ reactExports.createElement("g", { transform: "translate(28.467 13.217)" }, /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "url(#linearGradient-1)",
      fillOpacity: "0.31",
      d: "M49.081 26.925C48.876 14.83 43.518 8.783 33.008 8.783c-10.51 0-15.846 6.047-16.006 18.142 1.795-10.747 7.13-16.12 16.006-16.12 8.875 0 14.233 5.373 16.073 16.12z",
      opacity: "0.8"
    }
  ), /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M7.822 37.256c-.069-.847.03-.139 0-.71C6.562 12.183 14.968 0 33.042 0c17.906 0 26.323 11.958 25.252 35.875-.063 1.391-.157-.092-.284 1.38m-41.102 0c-.115-1.876-.185-.345-.21-1.234-.502-17.976 4.946-26.964 16.344-26.964 11.436 0 16.882 9.048 16.338 27.145-.038 1.277-.107-.315-.205 1.054",
      opacity: "0.9"
    }
  ), /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "url(#linearGradient-2)",
      fillOpacity: "0.31",
      d: "M7.566 81.078C4.074 77.425.873 73.968.265 65.39c-.353-4.985-.353-14.36 0-28.128l32.777-7.457 32.776 7.457c.354 13.767.354 23.143 0 28.128-.608 8.58-3.809 12.036-7.3 15.69-4.573 4.784-13.065 9.613-25.476 14.488-12.411-4.875-20.903-9.704-25.476-14.489z",
      opacity: "0.8"
    }
  ), /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M7.566 78.552C4.074 75.08.873 71.793.265 63.636c-.353-4.739-.353-13.653 0-26.742l32.777-7.09 32.776 7.09c.354 13.089.354 22.003 0 26.742-.584 7.844-3.566 11.183-6.899 14.516l-.401.4c-4.573 4.55-13.065 9.14-25.476 13.775-12.411-4.634-20.903-9.226-25.476-13.775z",
      opacity: "0.8"
    }
  ), /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M33.042 29.804l32.776 7.09c.354 13.089.354 22.003 0 26.742-.608 8.157-3.809 11.443-7.3 14.916-4.573 4.55-13.065 9.14-25.476 13.775V29.804z",
      opacity: "0.5"
    }
  ), /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M33.0416667 29.8038418L33.0416667 34.9796962 -4.97379915e-14 41.6836021 0.0925333327 36.881422z",
      opacity: "0.9"
    }
  ), /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M65.9334084 29.8038418L65.9334084 34.9796962 33.0416667 41.6836021 33.148808 36.8893969z",
      opacity: "0.9",
      transform: "matrix(-1 0 0 1 98.975 0)"
    }
  )))));
}
const services = [
  {
    endpoints: {
      mainnet: "https://stellarguard.me/api/transactions",
      testnet: "https://test.stellarguard.me/api/transactions"
    },
    icon: StellarGuardIcon,
    name: "StellarGuard",
    publicKey: "GCVHEKSRASJBD6O2Z532LWH4N2ZLCBVDLLTLKSYCSMBLOYTNMEEGUARD"
  },
  {
    endpoints: {
      mainnet: "https://vault.lobstr.co/api/transactions/"
    },
    icon: LobstrVaultIcon,
    name: "LOBSTR Vault",
    publicKey: "GA2T6GR7VXXXBETTERSAFETHANSORRYXXXPROTECTEDBYLOBSTRVAULT"
  }
];
async function isThirdPartyProtected(horizon, accountPubKey) {
  const { netWorker } = await workers;
  const horizonURL = horizon.serverURL.toString();
  const account2 = await netWorker.fetchAccountData(horizonURL, accountPubKey);
  const signerKeys = ((account2 == null ? void 0 : account2.signers) || []).map((signer) => signer.key);
  const enabledService = services.find((service) => signerKeys.includes(service.publicKey));
  return enabledService;
}
function containsThirdPartySigner(signers) {
  const signerKeys = signers.map((signer) => signer.key);
  const enabledService = services.find((service) => signerKeys.includes(service.publicKey));
  return enabledService;
}
async function submitTransactionToThirdPartyService(signedTransaction, service, testnet) {
  const signedTransactionXDR = signedTransaction.toEnvelope().toXDR().toString("base64");
  const body = { xdr: signedTransactionXDR };
  if (testnet && !service.endpoints.testnet) {
    throw CustomError("TestnetEndpointNotAvailableError", `${service.name} does not provide a testnet endpoint.`, {
      service: service.name
    });
  }
  const endpoint = testnet ? service.endpoints.testnet : service.endpoints.mainnet;
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    const contentType = response.headers.get("Content-Type");
    const responseBodyObject = (contentType == null ? void 0 : contentType.startsWith("application/json")) ? await response.json() : await response.text();
    const message = typeof responseBodyObject === "string" ? responseBodyObject : responseBodyObject.detail || responseBodyObject.message || responseBodyObject.error;
    throw CustomError(
      "SubmissionFailedError",
      `Submitting transaction to ${service.name} failed with status ${response.status}: ${message}`,
      {
        endpoint: service.name,
        message,
        status: String(response.status)
      }
    );
  }
  return response;
}
function clearTextSelection() {
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
  }
}
function PasswordStatus(props) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    Tooltip$1,
    {
      title: props.safe ? t2("account.title.password-status.protected") : t2("account.title.password-status.unprotected")
    },
    /* @__PURE__ */ React.createElement(VerifiedUserIcon, { style: { opacity: props.safe ? 1 : 0.5, ...props.style } })
  );
}
function TestnetBadge$1(props) {
  const { t: t2 } = useTranslation();
  const style2 = {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px",
    background: "white",
    borderRadius: 3,
    color: primaryBackgroundColor,
    fontSize: "50%",
    fontWeight: "bold",
    lineHeight: "100%",
    textTransform: "uppercase",
    ...props.style
  };
  return /* @__PURE__ */ React.createElement("span", { style: style2 }, t2("account.title.testnet"));
}
const StaticBadges = React.memo(function StaticBadges2(props) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(HorizontalLayout, { display: "inline-flex", alignItems: "center", width: "auto", fontSize: "1.5rem" }, props.testnet ? /* @__PURE__ */ React.createElement(TestnetBadge$1, { style: { marginRight: 16 } }) : null, (() => {
    if (props.multisig === "generic") {
      return /* @__PURE__ */ React.createElement(Tooltip$1, { title: t2("account.title.tooltip.multi-sig-account") }, /* @__PURE__ */ React.createElement(GroupIcon, { style: { fontSize: "120%", marginRight: 8 } }));
    } else if (props.multisig) {
      return /* @__PURE__ */ React.createElement(
        Tooltip$1,
        {
          title: t2("account.title.tooltip.security-service", `${props.multisig.name} Protection`, {
            service: props.multisig.name
          })
        },
        props.multisig.icon({ style: { fontSize: "80%", marginRight: 8 } })
      );
    } else {
      return null;
    }
  })(), /* @__PURE__ */ React.createElement(PasswordStatus, { safe: props.password, style: { fontSize: "90%", marginTop: "-0.05em" } }));
});
const Badges$1 = React.memo(function Badges2(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const securityService = containsThirdPartySigner(accountData.signers);
  const multisig = accountData.signers.length > 1 ? securityService ? securityService : "generic" : void 0;
  return /* @__PURE__ */ React.createElement(StaticBadges, { multisig, password: props.account.requiresPassword, testnet: props.account.testnet });
});
const useTitleTextfieldStyles = makeStyles$1({
  input: {
    borderRadius: 0,
    caretColor: "white",
    "&::selection": {
      background: "rgba(255, 255, 255, 0.2)",
      color: "white"
    }
  },
  underlined: {
    "&:before": {
      borderBottomColor: "rgba(255, 255, 255, 0.7)"
    },
    "&:hover:before": {
      borderBottomColor: "rgba(255, 255, 255, 0.87) !important"
    }
  }
});
function TitleTextField(props) {
  var _a;
  const classes = useTitleTextfieldStyles();
  const length = props.value.length || ((_a = props.placeholder) == null ? void 0 : _a.length) || 0;
  return /* @__PURE__ */ React.createElement(
    TextField,
    {
      error: Boolean(props.error),
      inputProps: {
        className: classes.input,
        onClick: props.onClick,
        size: Math.max(length + 1, 4),
        style: {
          cursor: props.mode === "editing" ? "text" : "default",
          height: 48,
          padding: 0,
          textOverflow: "ellipsis"
        }
      },
      inputRef: props.inputRef,
      InputProps: {
        className: props.mode === "editing" ? classes.underlined : "",
        disableUnderline: props.mode === "readonly",
        endAdornment: !props.showEdit ? null : /* @__PURE__ */ React.createElement(InputAdornment, { position: "end", style: { height: "auto" } }, props.actions),
        readOnly: props.mode === "readonly",
        style: {
          color: "inherit",
          font: "inherit",
          height: 48,
          // Will otherwise jump when edit icon button appears
          pointerEvents: props.preventClicks ? "none" : void 0
        }
      },
      onChange: props.onChange,
      onKeyDown: props.onKeyDown,
      placeholder: props.placeholder,
      style: {
        color: "inherit",
        ...props.style
      },
      value: props.value
    }
  );
}
function AccountTitle(props) {
  const { onRename } = props;
  const router = useRouter();
  const isSmallScreen = useIsMobile();
  const { t: t2 } = useTranslation();
  const [rawMode, setMode] = React.useState(
    props.permanentlyEditing ? "editing" : "readonly"
  );
  const [rawName, setName] = React.useState(props.name);
  const mode2 = props.permanentlyEditing ? "editing" : rawMode;
  const name2 = props.permanentlyEditing ? props.name : rawName;
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    return router.history.listen(() => {
      setMode("readonly");
      clearTextSelection();
    });
  }, [router.history]);
  const handleNameEditing = React.useCallback(
    (event) => {
      setName(event.target.value);
      if (props.permanentlyEditing) {
        onRename(event.target.value);
      }
    },
    [onRename, props.permanentlyEditing]
  );
  const cancelRenaming = React.useCallback(() => {
    setName(props.name);
    setMode("readonly");
    clearTextSelection();
  }, [props.name]);
  const applyRenaming = React.useCallback(() => {
    if (!name2) {
      cancelRenaming();
    } else {
      onRename(name2);
      setMode("readonly");
      clearTextSelection();
    }
  }, [cancelRenaming, onRename, name2]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "Enter") {
        applyRenaming();
      } else if (event.key === "Escape") {
        cancelRenaming();
      }
    },
    [applyRenaming, cancelRenaming]
  );
  const focusInput = React.useCallback(() => {
    if (inputRef.current && true) {
      inputRef.current.select();
      inputRef.current.focus();
    }
  }, [inputRef]);
  const switchToEditMode = React.useCallback(() => {
    if (props.editable) {
      setMode("editing");
    }
  }, [props.editable]);
  const toggleMode = React.useCallback(() => {
    setMode((prevMode) => prevMode === "editing" ? "readonly" : "editing");
    focusInput();
  }, [focusInput]);
  const editActions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, { onClick: applyRenaming, style: { color: "inherit" } }, /* @__PURE__ */ React.createElement(CheckIcon$1, null)), /* @__PURE__ */ React.createElement(IconButton, { onClick: cancelRenaming, style: { color: "inherit", marginLeft: isSmallScreen ? -12 : 0 } }, /* @__PURE__ */ React.createElement(ClearIcon, null))),
    [applyRenaming, cancelRenaming, isSmallScreen]
  );
  const permanentEditActions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(IconButton, { onClick: focusInput, style: { color: "inherit" } }, /* @__PURE__ */ React.createElement(EditIcon, null)),
    [focusInput]
  );
  const readonlyActions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(IconButton, { onClick: toggleMode, style: { color: "inherit" } }, /* @__PURE__ */ React.createElement(EditIcon, null)),
    [toggleMode]
  );
  return /* @__PURE__ */ React.createElement(
    MainTitle,
    {
      actions: props.actions,
      badges: props.editable && !isSmallScreen ? null : props.badges,
      onBack: props.onNavigateBack,
      style: { marginTop: -12, marginLeft: 0 },
      title: /* @__PURE__ */ React.createElement(
        TitleTextField,
        {
          actions: props.permanentlyEditing ? permanentEditActions : mode2 === "readonly" ? readonlyActions : editActions,
          error: props.error,
          inputRef,
          onChange: handleNameEditing,
          onClick: props.editable ? switchToEditMode : void 0,
          onKeyDown: handleKeyDown,
          placeholder: t2("account.title.placeholder"),
          preventClicks: !props.editable,
          mode: mode2,
          showEdit: props.editable || false,
          value: name2
        }
      ),
      titleColor: "inherit",
      titleStyle: {
        overflowY: "visible"
      }
    }
  );
}
const AccountTitle$1 = React.memo(AccountTitle);
const AccountContextMenu = withFallback(
  React.lazy(() => __vitePreload(() => import("./AccountContextMenu-D4g5T5nU.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0)),
  /* @__PURE__ */ React.createElement(ViewLoading, { style: { justifyContent: "flex-end" } })
);
const useAccountHeaderStyles = makeStyles$1({
  button: {
    fontSize: 32,
    marginRight: -4,
    padding: 6,
    [breakpoints.down(600)]: {
      marginRight: -12
    }
  },
  closeButton: {
    boxSizing: "content-box",
    width: 32,
    height: 32
  },
  menuButton: {}
});
function AccountHeaderCard(props) {
  var _a, _b, _c;
  const classes = useAccountHeaderStyles();
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const settings2 = React.useContext(SettingsContext);
  const meta = "publicKey" in props.account ? { account: props.account } : { accountCreation: props.account };
  const name2 = ((_a = meta.account) == null ? void 0 : _a.name) || ((_b = meta.accountCreation) == null ? void 0 : _b.name) || "";
  const showingSettings = matchesRoute(router.location.pathname, accountSettings("*"));
  const actions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(Box$1, { alignItems: "center", display: "flex", height: 44, justifyContent: "flex-end" }, meta.account ? /* @__PURE__ */ React.createElement(
      AccountContextMenu,
      {
        account: meta.account,
        onAccountSettings: props.onAccountSettings,
        onAccountTransactions: props.onAccountTransactions,
        onDeposit: props.onDeposit,
        onManageAssets: props.onManageAssets,
        onPurchaseLumens: props.onPurchaseLumens,
        onSavedAddresses: props.onSavedAddresses,
        onTrade: props.onTrade,
        onWithdraw: props.onWithdraw,
        settings: settings2,
        showingSettings
      },
      ({ onOpen }) => /* @__PURE__ */ React.createElement(IconButton, { className: `${classes.button} ${classes.menuButton}`, color: "inherit", onClick: onOpen }, /* @__PURE__ */ React.createElement(MenuIcon, { style: { fontSize: "inherit" } }))
    ) : null),
    [
      classes.button,
      classes.menuButton,
      meta.account,
      props.onAccountSettings,
      props.onAccountTransactions,
      props.onDeposit,
      props.onManageAssets,
      props.onPurchaseLumens,
      props.onTrade,
      props.onWithdraw,
      settings2,
      showingSettings
    ]
  );
  const badges = React.useMemo(
    () => /* @__PURE__ */ React.createElement(HideOnError, null, /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, meta.account ? /* @__PURE__ */ React.createElement(Badges$1, { account: meta.account }) : /* @__PURE__ */ React.createElement(
      StaticBadges,
      {
        multisig: meta.accountCreation.cosigner ? "generic" : void 0,
        password: meta.accountCreation.requiresPassword,
        testnet: meta.accountCreation.testnet
      }
    ))),
    [meta.account, meta.accountCreation]
  );
  return /* @__PURE__ */ React.createElement(
    Card$1,
    {
      style: {
        color: "black",
        position: "relative",
        background: "transparent",
        boxShadow: "none",
        overflow: "visible"
      }
    },
    /* @__PURE__ */ React.createElement(CardContent$1, { style: isSmallScreen ? { padding: 8 } : void 0 }, /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(
      AccountTitle$1,
      {
        key: (_c = meta.account) == null ? void 0 : _c.id,
        actions,
        badges: meta.account || props.editableAccountName ? badges : null,
        editable: props.editableAccountName,
        error: props.error,
        permanentlyEditing: props.editableAccountName && !meta.account,
        name: name2,
        onNavigateBack: props.onClose,
        onRename: props.onRename
      }
    )), props.children)
  );
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t2[p] = s2[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
    t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) if (e2.indexOf(p[i]) < 0)
      t2[p[i]] = s2[p[i]];
  }
  return t2;
}
var uid = function() {
  return Math.random().toString(36).substring(2);
};
var Svg = function(_a) {
  var rtl = _a.rtl, speed = _a.speed, interval = _a.interval, style2 = _a.style, width2 = _a.width, height2 = _a.height, baseUrl = _a.baseUrl, gradientRatio = _a.gradientRatio, animate = _a.animate, ariaLabel = _a.ariaLabel, children = _a.children, className = _a.className, uniquekey = _a.uniquekey, primaryColor = _a.primaryColor, primaryOpacity = _a.primaryOpacity, secondaryColor = _a.secondaryColor, secondaryOpacity = _a.secondaryOpacity, preserveAspectRatio = _a.preserveAspectRatio, props = __rest(_a, ["rtl", "speed", "interval", "style", "width", "height", "baseUrl", "gradientRatio", "animate", "ariaLabel", "children", "className", "uniquekey", "primaryColor", "primaryOpacity", "secondaryColor", "secondaryOpacity", "preserveAspectRatio"]);
  var idClip = uniquekey ? uniquekey + "-idClip" : uid();
  var idGradient = uniquekey ? uniquekey + "-idGradient" : uid();
  var rtlStyle = rtl ? { transform: "scaleX(-1)" } : {};
  var keyTimes = "0; " + interval + "; 1";
  var dur = speed + "s";
  return reactExports.createElement(
    "svg",
    __assign({ role: "img", style: __assign({}, style2, rtlStyle), className, "aria-label": ariaLabel ? ariaLabel : null, viewBox: "0 0 " + width2 + " " + height2, preserveAspectRatio }, props),
    ariaLabel ? reactExports.createElement("title", null, ariaLabel) : null,
    reactExports.createElement("rect", { x: "0", y: "0", width: width2, height: height2, clipPath: "url(" + baseUrl + "#" + idClip + ")", style: { fill: "url(" + baseUrl + "#" + idGradient + ")" } }),
    reactExports.createElement(
      "defs",
      null,
      reactExports.createElement("clipPath", { id: idClip }, children),
      reactExports.createElement(
        "linearGradient",
        { id: idGradient },
        reactExports.createElement("stop", { offset: "0%", stopColor: primaryColor, stopOpacity: primaryOpacity }, animate && reactExports.createElement("animate", { attributeName: "offset", values: -gradientRatio + "; " + -gradientRatio + "; 1", keyTimes, dur, repeatCount: "indefinite" })),
        reactExports.createElement("stop", { offset: "50%", stopColor: secondaryColor, stopOpacity: secondaryOpacity }, animate && reactExports.createElement("animate", { attributeName: "offset", values: -gradientRatio / 2 + "; " + -gradientRatio / 2 + "; " + (1 + gradientRatio / 2), keyTimes, dur, repeatCount: "indefinite" })),
        reactExports.createElement("stop", { offset: "100%", stopColor: primaryColor, stopOpacity: primaryOpacity }, animate && reactExports.createElement("animate", { attributeName: "offset", values: "0; 0; " + (1 + gradientRatio), keyTimes, dur, repeatCount: "indefinite" }))
      )
    )
  );
};
var defaultProps = {
  animate: true,
  ariaLabel: "Loading interface...",
  baseUrl: "",
  gradientRatio: 2,
  height: 130,
  interval: 0.25,
  preserveAspectRatio: "none",
  primaryColor: "#f0f0f0",
  primaryOpacity: 1,
  rtl: false,
  secondaryColor: "#e0e0e0",
  secondaryOpacity: 1,
  speed: 2,
  style: {},
  width: 400
};
var InitialComponent = function(props) {
  return reactExports.createElement("rect", { x: "0", y: "0", rx: "5", ry: "5", width: props.width, height: props.height });
};
var ContentLoader = function(props) {
  var mergedProps = __assign({}, defaultProps, props);
  var children = props.children ? props.children : reactExports.createElement(InitialComponent, __assign({}, mergedProps));
  return reactExports.createElement(Svg, __assign({}, mergedProps), children);
};
function SubtitlePlaceholder() {
  const width2 = window.innerWidth - 48;
  return /* @__PURE__ */ React.createElement(
    ContentLoader,
    {
      height: 54,
      width: width2,
      speed: 2,
      primaryColor: "#e8e8e8",
      secondaryColor: "#e0e0e0",
      style: { flex: "0 0 54px" }
    },
    /* @__PURE__ */ React.createElement("rect", { x: "16", y: "22", rx: "5", ry: "5", width: "140", height: "16" })
  );
}
function TransactionLoadingPlaceholder() {
  const balanceWidth = window.innerWidth < 400 ? 70 : 140;
  const width2 = window.innerWidth - 48;
  return /* @__PURE__ */ React.createElement(
    ContentLoader,
    {
      height: 60,
      width: width2,
      speed: 2,
      primaryColor: "#e8e8e8",
      secondaryColor: "#e0e0e0",
      style: { flex: "0 0 60px" }
    },
    /* @__PURE__ */ React.createElement("circle", { cx: "32", cy: "32", r: "14" }),
    /* @__PURE__ */ React.createElement("rect", { x: "72", y: "10", rx: "5", ry: "5", width: width2 - balanceWidth - 64 - 52, height: "24" }),
    /* @__PURE__ */ React.createElement("rect", { x: "72", y: "40", rx: "5", ry: "5", width: Math.min(width2 - balanceWidth - 64 - 52, 300), height: "12" }),
    /* @__PURE__ */ React.createElement("rect", { x: width2 - balanceWidth - 16, y: "15", rx: "5", ry: "5", width: balanceWidth, height: "32" })
  );
}
function TransactionListPlaceholder() {
  return /* @__PURE__ */ React.createElement(VerticalLayout, { alignItems: "center", height: "100%", overflow: "hidden", padding: "0 12px", width: "100%" }, /* @__PURE__ */ React.createElement(SubtitlePlaceholder, null), /* @__PURE__ */ React.createElement(
    VerticalLayout,
    {
      width: "100%",
      overflow: "hidden",
      style: { background: "white", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.1)", position: "relative" }
    },
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null),
    /* @__PURE__ */ React.createElement(TransactionLoadingPlaceholder, null)
  ), /* @__PURE__ */ React.createElement(
    CircularProgress,
    {
      size: 32,
      style: { position: "absolute", top: "50%", left: "50%", marginLeft: -16, marginTop: -26 }
    }
  ));
}
const InlineLoader = () => {
  return /* @__PURE__ */ React.createElement(Fade, { appear: true, in: true, timeout: 1500 }, /* @__PURE__ */ React.createElement(LinearProgress$1, { style: { display: "inline-block", width: 250, margin: "8px 0" } }));
};
const ScrollableBalances = React.lazy(() => __vitePreload(() => import("./ScrollableBalances-C4xYilZB.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const LazyScrollableBalances = withFallback(ScrollableBalances, /* @__PURE__ */ React.createElement(InlineLoader, null));
const TestnetBadge = (props) => {
  const { t: t2 } = useTranslation();
  const style2 = {
    position: "relative",
    display: "inline-block",
    top: -4,
    padding: "0.1rem 0.3rem",
    background: grey[500],
    borderRadius: 3,
    color: "black",
    fontSize: "10px",
    lineHeight: "14px",
    textTransform: "uppercase",
    ...props.style
  };
  return /* @__PURE__ */ React.createElement("div", { style: style2 }, t2("generic.testnet-badge.label"));
};
function explainSubmissionErrorResponse(response, t2) {
  if (!response) {
    return CustomError("UnknownError", t2("generic.error.unknown-error"));
  }
  const augment = (error) => Object.assign(error, { response });
  if (response.status === 400 && response.data && response.data.extras && response.data.extras.result_codes) {
    const resultCodes = response.data.extras.result_codes;
    if (resultCodes.operations && resultCodes.operations.length > 0) {
      const errorCodes = resultCodes.operations.filter((code) => code !== "op_success");
      return augment(
        Error(
          t2(
            `generic.error.submission-error.op-result-code.${errorCodes[0]}`,
            t2("generic.error.submission-error.default", {
              codes: errorCodes.join(", ")
            })
          )
        )
      );
    } else if (resultCodes.transaction) {
      return augment(
        Error(
          t2(
            `generic.error.submission-error.tx-result-code.${resultCodes.transaction}`,
            t2("generic.error.submission-error.default", {
              codes: resultCodes.transaction
            })
          )
        )
      );
    }
  } else if (response.status === 500) {
    return augment(Error(t2("generic.error.submission-error.internal-server-error")));
  } else if (response.status === 504) {
    return augment(Error(t2("generic.error.submission-error.timeout")));
  }
  return CustomError("UnknownError", t2("generic.error.unknown-error"));
}
const delay = (timeoutMs) => new Promise((resolve) => setTimeout(resolve, timeoutMs));
async function applyTimeout(promise, timeoutMs, getTimeoutResult = () => {
  throw CustomError("PromiseTimeoutError", `Promise timed out after ${timeoutMs}ms`, { timeout: timeoutMs });
}) {
  return Promise.race([promise, delay(timeoutMs).then(() => getTimeoutResult())]);
}
function getPaymentSummary(accountPublicKey, transaction) {
  const balanceChanges = [];
  const paymentOps = transaction.operations.filter(
    (op) => op.type === "payment" || op.type === "createAccount"
  );
  for (const operation of paymentOps) {
    const amount = operation.amount || operation.startingBalance;
    const asset = operation.asset || libExports$1.Asset.native();
    const summaryItem = balanceChanges.find((assetBalanceChange) => assetBalanceChange.asset.equals(asset));
    let balanceChange = summaryItem ? summaryItem.balanceChange : Big(0);
    let remotePublicKey = null;
    if (operation.destination === (operation.source || transaction.source)) ;
    else if (operation.destination === accountPublicKey) {
      balanceChange = balanceChange.add(amount);
      remotePublicKey = operation.source || transaction.source;
    } else if (operation.source === accountPublicKey || !operation.source && transaction.source === accountPublicKey) {
      balanceChange = balanceChange.sub(amount);
      remotePublicKey = operation.destination;
    }
    if (summaryItem) {
      summaryItem.balanceChange = balanceChange;
      summaryItem.publicKeys = remotePublicKey ? summaryItem.publicKeys.concat(remotePublicKey) : summaryItem.publicKeys;
    } else {
      balanceChanges.push({
        asset,
        balanceChange,
        publicKeys: remotePublicKey ? [remotePublicKey] : []
        // TODO: this doesn't work okay for incloming multisig txs?
      });
    }
  }
  return balanceChanges;
}
const maximumFeeToSpend = 1e6;
const multisigMinimumFee = 1e4;
function fail(message) {
  throw Error(message);
}
function hasSigned(transaction, publicKey, signatureRequest) {
  const signedAdditionallyBy = (signatureRequest == null ? void 0 : signatureRequest.signed_by) || [];
  return signedAdditionallyBy.indexOf(publicKey) > -1 || transaction.signatures.some((signature) => {
    const hint = signature.hint();
    const keypair = libExports$1.Keypair.fromPublicKey(publicKey);
    return hint.equals(keypair.rawPublicKey().slice(-hint.byteLength));
  });
}
function getBaseAccountId(key) {
  return isMuxedAddress(key) ? libExports$1.MuxedAccount.fromAddress(key, "0").baseAccount().accountId() : key;
}
async function accountExists(horizon, publicKey) {
  try {
    const accountId = getBaseAccountId(publicKey);
    const account2 = await horizon.accounts().accountId(accountId).call();
    return Object.keys(account2).length > 0;
  } catch (error) {
    if (isNotFoundError(error)) {
      return false;
    } else {
      throw error;
    }
  }
}
function selectTransactionTimeout(accountData) {
  return accountData.signers.length > 1 ? 30 * 24 * 60 * 60 : 90;
}
async function createTransaction(operations, options) {
  const { horizon, walletAccount } = options;
  const { netWorker } = await workers;
  const horizonURL = horizon.serverURL.toString();
  const timeout = selectTransactionTimeout(options.accountData);
  const [accountMetadata, timebounds] = await Promise.all([
    applyTimeout(
      netWorker.fetchAccountData(horizonURL, walletAccount.accountID, 10),
      1e4,
      () => fail(`Fetching source account data timed out`)
    ),
    applyTimeout(
      netWorker.fetchTimebounds(horizonURL, timeout),
      1e4,
      () => fail(`Syncing time bounds with horizon timed out`)
    )
  ]);
  if (!accountMetadata) {
    throw Error(`Failed to query account from horizon server: ${walletAccount.publicKey}`);
  }
  const account2 = new libExports$1.Account(accountMetadata.id, accountMetadata.sequence);
  const networkPassphrase = walletAccount.testnet ? libExports$1.Networks.TESTNET : libExports$1.Networks.PUBLIC;
  const txFee = Math.max(options.minTransactionFee || 0, maximumFeeToSpend);
  const builder = new libExports$1.TransactionBuilder(account2, {
    fee: String(txFee),
    memo: options.memo || void 0,
    timebounds,
    networkPassphrase
  });
  for (const operation of operations) {
    builder.addOperation(operation);
  }
  const tx = builder.build();
  return tx;
}
async function createPaymentOperation(options) {
  const { amount, asset, destination, horizon } = options;
  const destinationAccountExists = await accountExists(horizon, destination);
  if (!destinationAccountExists && !libExports$1.Asset.native().equals(options.asset)) {
    throw CustomError(
      "NonExistentDestinationError",
      `Cannot pay in ${asset.code}$, since the destination account does not exist yet. Account creations always need to be done via XLM.`,
      { assetCode: asset.code }
    );
  }
  const operation = destinationAccountExists ? libExports$1.Operation.payment({ destination, amount, asset, withMuxing: true }) : libExports$1.Operation.createAccount({ destination: getBaseAccountId(destination), startingBalance: amount, withMuxing: true });
  return operation;
}
async function signTransaction(transaction, walletAccount, password) {
  if (walletAccount.requiresPassword && !password) {
    throw WrongPasswordError();
  }
  const signedTransaction = walletAccount.signTransaction(transaction, password);
  return signedTransaction;
}
async function requiresRemoteSignatures(horizon, transaction, walletPublicKey) {
  const { netWorker } = await workers;
  const horizonURL = horizon.serverURL.toString();
  const sources = getAllSources(transaction);
  if (sources.length > 1) {
    return true;
  }
  const accounts = await Promise.all(
    sources.map(async (sourcePublicKey) => {
      const account2 = await netWorker.fetchAccountData(horizonURL, sourcePublicKey);
      if (!account2) {
        throw Error(`Could not fetch account metadata from horizon server: ${sourcePublicKey}`);
      }
      return account2;
    })
  );
  return accounts.some((account2) => {
    const thisWalletSigner = account2.signers.find((signer) => signer.key === walletPublicKey);
    return thisWalletSigner ? thisWalletSigner.weight === 0 || thisWalletSigner.weight < account2.thresholds.high_threshold : true;
  });
}
function isPotentiallyDangerousTransaction(transaction, trustedPublicKeys) {
  const dangerous = getAllSources(transaction).some((source) => trustedPublicKeys.indexOf(source) === -1);
  return dangerous;
}
function isStellarWebAuthTransaction(transaction) {
  const firstOperation = transaction.operations[0];
  return String(transaction.sequence) === "0" && firstOperation && firstOperation.type === "manageData" && firstOperation.name.match(/ auth$/i);
}
const DUST_THRESHOLD = Big(0.01);
function isDustTransaction(tx, account2) {
  const paymentSummary = getPaymentSummary(account2.publicKey, tx);
  if (paymentSummary.length === 0) return false;
  if (paymentSummary.every((payment) => payment.publicKeys.every((pubkey) => pubkey === account2.publicKey))) return false;
  return paymentSummary[0].asset.getCode() === "XLM" && paymentSummary[0].balanceChange.abs().lte(DUST_THRESHOLD);
}
function addThousandsSeparators(digits, thousandsSeparator) {
  const digitGroups = [];
  while (digits.length > 0) {
    digitGroups.push(digits.substr(-3));
    digits = digits.substr(0, digits.length - 3);
  }
  return digitGroups.reverse().join(thousandsSeparator);
}
function trimBalance(balance) {
  if (balance.eq(0)) {
    return "0";
  } else if (balance.round().eq(balance)) {
    return balance.toFixed(2);
  } else {
    return balance.toFixed(7);
  }
}
function formatBalance(input, options = {}) {
  if (typeof input === "string" && Number.isNaN(Number.parseFloat(input))) {
    return "-";
  }
  const balance = Big(input);
  const thousandsSeparator = ",";
  const {
    groupThousands = true,
    maximumDecimals = 7,
    maximumSignificants = 13,
    minimumDecimals = 0,
    minimumSignificants = 0
  } = options;
  const trimmedUnformattedBalance = trimBalance(balance.abs());
  let [integerPart, decimalPart = ""] = trimmedUnformattedBalance.split(".");
  if (decimalPart.length < minimumDecimals) {
    decimalPart += "0".repeat(minimumDecimals - decimalPart.length);
  } else if (decimalPart.length > maximumDecimals) {
    decimalPart = decimalPart.substr(0, maximumDecimals);
  }
  if (integerPart.length + decimalPart.length < minimumSignificants) {
    decimalPart += "0".repeat(minimumSignificants - integerPart.length - decimalPart.length);
  }
  if (integerPart.length + decimalPart.length > maximumSignificants && decimalPart.length > 0) {
    decimalPart = decimalPart.substr(0, maximumSignificants - integerPart.length);
  }
  return (groupThousands ? addThousandsSeparators(integerPart, thousandsSeparator) : integerPart) + (decimalPart ? "." + decimalPart : "");
}
function sortBalances(balances) {
  const sorter = (balance1, balance2) => {
    if (Number.parseFloat(balance1.balance) === 0 && Number.parseFloat(balance2.balance) !== 0) {
      return 1;
    } else if (Number.parseFloat(balance1.balance) !== 0 && Number.parseFloat(balance2.balance) === 0) {
      return -1;
    }
    return balance1.asset_code === balance2.asset_code ? 0 : balance1.asset_code < balance2.asset_code ? -1 : 1;
  };
  const nativeBalance = balances.find((balance) => balance.asset_type === "native");
  return [
    ...balances.filter((balance) => balance.asset_type !== "native").sort(sorter),
    ...nativeBalance ? [nativeBalance] : []
  ];
}
const SingleBalance = React.memo(function SingleBalance2(props) {
  const balance = Big(props.balance).abs();
  const formattingOptions = props.untrimmed ? { minimumSignificants: 7 } : balance.eq(0) ? { maximumDecimals: 0, minimumDecimals: 0 } : balance.gt(0) && balance.lt(1e-4) ? { maximumDecimals: 7, minimumDecimals: 7 } : balance.lt(1e3) ? { maximumDecimals: 4, minimumDecimals: 0 } : { maximumDecimals: 0, minimumDecimals: 0 };
  const formattedBalance = formatBalance(balance, formattingOptions);
  const [integerPart, decimalPart = ""] = formattedBalance.split(".");
  return /* @__PURE__ */ React.createElement("span", { style: { whiteSpace: "nowrap", ...props.style } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block" } }, balance.gte(0) ? null : /* @__PURE__ */ React.createElement("span", null, "- "), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 300 } }, integerPart, /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.8 } }, decimalPart ? "." + decimalPart : ""))), props.assetCode ? /* @__PURE__ */ React.createElement(React.Fragment, null, " ", /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        display: "inline-block",
        fontWeight: props.inline ? void 0 : "bold",
        marginLeft: props.inline ? void 0 : "0.4em"
      }
    },
    props.assetCode
  )) : null);
});
const MultipleBalances = React.memo(function MultipleBalances2(props) {
  if (props.balances.length === 0) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  const Balance = props.component || SingleBalance;
  const balances = sortBalances(props.balances);
  return /* @__PURE__ */ React.createElement("span", { onClick: props.onClick, style: props.onClick ? { cursor: "pointer" } : void 0 }, balances.map((balance, index) => /* @__PURE__ */ React.createElement(React.Fragment, { key: stringifyAsset(balancelineToAsset(balance)) }, /* @__PURE__ */ React.createElement(
    Balance,
    {
      assetCode: balance.asset_type === "native" ? "XLM" : balance.asset_code,
      balance: balance.balance,
      inline: props.inline,
      style: { marginRight: index < balances.length - 1 ? "1.2em" : void 0 }
    }
  ), " ")));
});
const zeroXLMBalance = {
  asset_type: "native",
  balance: "0"
};
function AccountBalances(props) {
  const accountData = useLiveAccountData(props.publicKey, props.testnet);
  return accountData.balances.length > 0 ? /* @__PURE__ */ React.createElement(MultipleBalances, { balances: accountData.balances, component: props.component, onClick: props.onClick }) : /* @__PURE__ */ React.createElement(MultipleBalances, { balances: [zeroXLMBalance], component: props.component, onClick: props.onClick });
}
const AccountBalances$1 = React.memo(AccountBalances);
var ExpandMore = {};
var hasRequiredExpandMore;
function requireExpandMore() {
  if (hasRequiredExpandMore) return ExpandMore;
  hasRequiredExpandMore = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ExpandMore, "__esModule", {
    value: true
  });
  ExpandMore.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore");
  ExpandMore.default = _default;
  return ExpandMore;
}
var ExpandMoreExports = /* @__PURE__ */ requireExpandMore();
const ExpandMoreIcon = /* @__PURE__ */ getDefaultExportFromCjs(ExpandMoreExports);
const SummaryDetailsField = React.memo(function SummaryDetailsField2(props) {
  const InputComponent = React.useCallback(() => /* @__PURE__ */ React.createElement(React.Fragment, null, props.value), [props.value]);
  return /* @__PURE__ */ React.createElement(
    ReadOnlyTextfield,
    {
      disableUnderline: true,
      helperText: props.helperText,
      label: props.label,
      style: { flex: props.fullWidth ? "0 0 100%" : "0 0 48%", marginBottom: "10px" },
      InputProps: {
        inputComponent: InputComponent,
        style: {
          maxWidth: "100%",
          overflow: "hidden",
          wordBreak: "break-word",
          ...props.style
        }
      },
      InputLabelProps: {
        style: {
          whiteSpace: "nowrap"
        }
      }
    }
  );
});
const summaryDetailsLineStyle = {
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: 8,
  width: "100%"
};
function SummaryDetailsLine(props) {
  return /* @__PURE__ */ React.createElement(HorizontalLayout, { style: summaryDetailsLineStyle }, props.children);
}
const useSummaryItemStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    borderBottom: "none",
    flexDirection: "column",
    padding: "1px 0"
  },
  heading: {
    display: "block",
    padding: "16px 0",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "18px",
    textAlign: "left"
  },
  noButton: {
    background: "transparent",
    boxShadow: "none !important"
  }
});
function SummaryItem(props) {
  const classes = useSummaryItemStyles();
  return /* @__PURE__ */ React.createElement(ListItem, { className: classes.root, component: "div", disableGutters: true }, props.heading ? /* @__PURE__ */ React.createElement(Typography, { color: "textSecondary", className: classes.heading, variant: "subtitle1" }, props.heading) : null, /* @__PURE__ */ React.createElement(SummaryDetailsLine, null, props.children));
}
const useShowMoreItemStyles = makeStyles({
  root: {
    border: "none",
    margin: "-8px 0",
    padding: "8px 0"
  },
  button: {
    boxShadow: "none !important",
    display: "flex",
    margin: 0,
    "&:not(:hover)": {
      background: "transparent"
    }
  }
});
const ShowMoreItem = React.memo(function ShowMoreItem2(props) {
  const classes = useShowMoreItemStyles();
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    ListItem,
    {
      button: true,
      classes: { root: classes.root, button: classes.button },
      component: "div",
      disableGutters: true,
      onClick: props.onClick,
      style: props.style
    },
    /* @__PURE__ */ React.createElement(ListItemText, { disableTypography: true }, /* @__PURE__ */ React.createElement(Typography, { style: { display: "flex", alignItems: "center", justifyContent: "center" }, variant: "button" }, t2("account.transaction-review.action.show-more"), " ", /* @__PURE__ */ React.createElement(ExpandMoreIcon, null)))
  );
});
var PersonAdd = {};
var hasRequiredPersonAdd;
function requirePersonAdd() {
  if (hasRequiredPersonAdd) return PersonAdd;
  hasRequiredPersonAdd = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(PersonAdd, "__esModule", {
    value: true
  });
  PersonAdd.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "PersonAdd");
  PersonAdd.default = _default;
  return PersonAdd;
}
var PersonAddExports = /* @__PURE__ */ requirePersonAdd();
const PersonAddIcon = /* @__PURE__ */ getDefaultExportFromCjs(PersonAddExports);
const isUTF8 = (buffer) => !buffer.toString("utf8").match(/[\x00-\x1F]/);
function someThresholdSet(operation) {
  return typeof operation.lowThreshold === "number" || typeof operation.medThreshold === "number" || typeof operation.highThreshold === "number";
}
function prettifyCamelcase(identifier) {
  const prettified = identifier.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`);
  return prettified.charAt(0).toUpperCase() + prettified.substr(1);
}
function prettifyOperationObject(operation) {
  const operationPropNames = Object.keys(operation).filter((key) => key !== "type").filter((propName) => Boolean(operation[propName]));
  const operationDetailLines = operationPropNames.map(
    (propName) => `${prettifyCamelcase(propName)}: ${JSON.stringify(operation[propName], null, 2)}`
  );
  return operationDetailLines.join("\n");
}
function useOperationTitle() {
  const { t: t2 } = useTranslation();
  return function getOperationTitle(operation) {
    if (operation.type === "payment") {
      return t2("operations.payment.title");
    } else if (operation.type === "createAccount") {
      return t2("operations.create-account.title");
    } else if (operation.type === "manageBuyOffer") {
      const amount = Big(operation.buyAmount);
      const offerId = operation.offerId;
      return offerId === "0" ? t2("operations.manage-buy-offer.title.create") : amount.eq(0) ? t2("operations.manage-buy-offer.title.delete") : t2("operations.manage-buy-offer.title.update");
    } else if (operation.type === "manageSellOffer") {
      const amount = Big(operation.amount);
      const offerId = operation.offerId;
      return offerId === "0" ? t2("operations.manage-sell-offer.title.create") : amount.eq(0) ? t2("operations.manage-sell-offer.title.delete") : t2("operations.manage-sell-offer.title.update");
    } else if (operation.type === "accountMerge") {
      return t2("operations.account-merge.title");
    } else if (operation.type === "changeTrust") {
      return Big(operation.limit).eq(0) ? t2("operations.change-trust.title.remove-asset") : t2("operations.change-trust.title.add-asset");
    } else if (operation.type === "manageData") {
      return t2("operations.manage-data.title");
    } else if (operation.type === "setOptions" && operation.signer && typeof operation.signer.weight === "number") {
      return operation.signer.weight > 0 ? t2("operations.set-options.add-signer.title") : t2("operations.set-options.remove-signer.title");
    } else if (operation.type === "setOptions" && operation.signer && operation.signer.weight !== void 0 && operation.signer.weight > 0) {
      return t2("operations.set-options.add-signer.title");
    } else if (operation.type === "setOptions" && operation.signer && operation.signer.weight !== void 0 && operation.signer.weight === 0) {
      return t2("operations.set-options.remove-signer.title");
    } else if (operation.type === "setOptions" && someThresholdSet(operation)) {
      return t2("operations.set-options.change-signature-setup.title");
    } else if (operation.type === "setOptions" && operation.masterWeight !== void 0) {
      return t2("operations.set-options.set-master-key-weight.title");
    } else if (operation.type === "setOptions" && operation.homeDomain) {
      return t2("operations.set-options.set-home-domain.title");
    } else if (operation.type === "setOptions" && operation.inflationDest) {
      return t2("operations.set-options.set-inflation-destination.title");
    } else if (operation.type === "setOptions") {
      return t2("operations.set-options.set-account-options.title");
    } else {
      return prettifyCamelcase(operation.type);
    }
  };
}
function Pre(props) {
  return /* @__PURE__ */ React.createElement("pre", { style: { width: "100%", overflow: "hidden", fontFamily: "inherit", fontSize: 14 } }, props.children);
}
const isLocalAccount = (address, testnet, accounts) => !!accounts.find((account2) => account2.publicKey === address && account2.testnet === testnet);
const AddAddressButton = React.memo((props) => {
  const { openSavedAddresses } = React.useContext(DialogsContext);
  return /* @__PURE__ */ React.createElement(
    PersonAddIcon,
    {
      style: { transform: "scale(-0.6, 0.6)", cursor: "pointer" },
      onClick: () => openSavedAddresses({ address: props.address })
    }
  );
});
function PaymentOperation(props) {
  const { amount, asset, destination, source } = props.operation;
  const { accounts } = React.useContext(AccountsContext);
  const { savedAddresses } = React.useContext(SavedAddressesContext);
  const { t: t2 } = useTranslation();
  const canBeAdded = React.useCallback(
    (address) => !isLocalAccount(address, props.testnet, accounts) && !savedAddresses[address],
    [accounts, props.testnet, savedAddresses]
  );
  return /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.payment.title") }, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.payment.summary.amount"),
      value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: asset.code, balance: String(amount), untrimmed: true })
    }
  ), /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.payment.summary.destination"),
      value: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CopyableAddress, { address: destination, testnet: props.testnet, variant: "short" }), canBeAdded(destination) && /* @__PURE__ */ React.createElement(AddAddressButton, { address: destination }))
    }
  ), source ? /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.payment.summary.source"),
      value: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CopyableAddress, { address: source, testnet: props.testnet, variant: "short" }), canBeAdded(source) && /* @__PURE__ */ React.createElement(AddAddressButton, { address: source }))
    }
  ) : null);
}
function CreateAccountOperation(props) {
  const { startingBalance, destination, source } = props.operation;
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.create-account.title") }, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.create-account.summary.account"),
      value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: destination, testnet: props.testnet, variant: "short" })
    }
  ), /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.create-account.summary.funding-amount"),
      value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: "XLM", balance: String(startingBalance), untrimmed: true })
    }
  ), source ? /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.create-account.summary.funding-account"),
      value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: source, testnet: props.testnet, variant: "short" })
    }
  ) : null);
}
function ChangeTrustOperation(props) {
  const { t: t2 } = useTranslation();
  const homeDomain = useAccountHomeDomainSafe(
    props.operation.line.getAssetType() !== "liquidity_pool_shares" ? props.operation.line.issuer : void 0,
    props.testnet
  );
  return Big(props.operation.limit).eq(0) ? /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.change-trust.title.remove-asset") }, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.change-trust.summary.asset"),
      value: stringifyAssetToReadableString(props.operation.line)
    }
  ), props.operation.line instanceof libExports$1.Asset && /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.change-trust.summary.issued-by"),
      value: /* @__PURE__ */ React.createElement(
        CopyableAddress,
        {
          address: homeDomain || props.operation.line.issuer,
          testnet: props.testnet,
          variant: "short"
        }
      )
    }
  )) : /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.change-trust.title.add-asset") }, /* @__PURE__ */ React.createElement(SummaryDetailsField, { label: "Asset", value: stringifyAssetToReadableString(props.operation.line) }), props.operation.line instanceof libExports$1.Asset && /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.change-trust.summary.issued-by"),
      value: /* @__PURE__ */ React.createElement(
        CopyableAddress,
        {
          address: homeDomain || props.operation.line.issuer,
          testnet: props.testnet,
          variant: "short"
        }
      )
    }
  ), Big(props.operation.limit).gt(9e11) ? null : /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.change-trust.summary.limit.label"),
      value: trustlineLimitEqualsUnlimited(props.operation.limit) ? t2("operations.change-trust.summary.limit.value.unlimited") : t2("operations.change-trust.summary.limit.value.limited-to", {
        limit: props.operation.limit,
        code: stringifyAssetToReadableString(props.operation.line)
      })
    }
  ));
}
function OfferDetailsString(props, t2) {
  const { amount, buying, price, selling } = props;
  return t2("operations.offer-details.string", {
    amount: formatBalance(amount.toString()),
    buyingCode: buying.code,
    sellingCode: selling.code,
    price: formatBalance(amount.mul(price).toString())
  });
}
function ManageDataOperation(props) {
  const { t: t2 } = useTranslation();
  const value = props.operation.value ? isUTF8(props.operation.value) ? props.operation.value.toString("utf8") : props.operation.value.toString("base64") : void 0;
  return /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.manage-data.title") }, /* @__PURE__ */ React.createElement(SummaryDetailsField, { fullWidth: true, label: props.operation.name, value }));
}
function ManageOfferOperation(props) {
  const { buying, offerId, selling } = props.operation;
  const isTinyScreen = useIsSmallMobile();
  const { t: t2 } = useTranslation();
  const buyAmount = props.operation.type === "manageBuyOffer" ? Big(props.operation.buyAmount) : Big(props.operation.amount).mul(props.operation.price);
  const sellAmount = props.operation.type === "manageBuyOffer" ? Big(props.operation.buyAmount).mul(props.operation.price) : Big(props.operation.amount);
  const { offers } = useLiveAccountOffers(props.accountData.id, props.testnet);
  if (offerId === "0") {
    return props.operation.type === "manageBuyOffer" ? /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.manage-buy-offer.title.create") }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        fullWidth: isTinyScreen,
        label: t2("operations.manage-offer.summary.buy"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: buying.code, balance: String(buyAmount), untrimmed: true })
      }
    ), /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        fullWidth: isTinyScreen,
        label: t2("operations.manage-offer.summary.sell"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: selling.code, balance: String(sellAmount), untrimmed: true })
      }
    )) : /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.manage-sell-offer.title.create") }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        fullWidth: isTinyScreen,
        label: t2("operations.manage-offer.summary.sell"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: selling.code, balance: String(sellAmount), untrimmed: true })
      }
    ), /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        fullWidth: isTinyScreen,
        label: t2("operations.manage-offer.summary.buy"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: buying.code, balance: String(buyAmount), untrimmed: true })
      }
    ));
  } else {
    const offer = offers.find((someOffer) => String(someOffer.id) === String(offerId));
    const heading = props.operation.type === "manageBuyOffer" ? buyAmount.eq(0) ? t2("operations.manage-buy-offer.title.delete") : t2("operations.manage-buy-offer.title.update") : buyAmount.eq(0) ? t2("operations.manage-sell-offer.title.delete") : t2("operations.manage-sell-offer.title.update");
    return offer ? props.operation.type === "manageBuyOffer" ? /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : heading }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.buy"),
        value: /* @__PURE__ */ React.createElement(
          SingleBalance,
          {
            assetCode: offerAssetToAsset(offer.buying).getCode(),
            balance: String(Big(offer.amount).mul(offer.price))
          }
        )
      }
    ), /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.sell"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: offerAssetToAsset(offer.selling).getCode(), balance: offer.amount })
      }
    )) : /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : heading }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.sell"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: offerAssetToAsset(offer.selling).getCode(), balance: offer.amount })
      }
    ), /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.buy"),
        value: /* @__PURE__ */ React.createElement(
          SingleBalance,
          {
            assetCode: offerAssetToAsset(offer.buying).getCode(),
            balance: String(Big(offer.amount).mul(offer.price))
          }
        )
      }
    )) : props.operation.type === "manageBuyOffer" ? /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : heading }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.buy"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: buying.code, balance: String(buyAmount) })
      }
    ), /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.sell"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: selling.code, balance: String(sellAmount) })
      }
    )) : /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : heading }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.sell"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: selling.code, balance: String(sellAmount) })
      }
    ), /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        label: t2("operations.manage-offer.summary.buy"),
        value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: buying.code, balance: String(buyAmount) })
      }
    ));
  }
}
function SetOptionsOperation(props) {
  const { t: t2 } = useTranslation();
  const testnet = props.transaction.networkPassphrase === libExports$1.Networks.TESTNET;
  if (props.operation.signer && "ed25519PublicKey" in props.operation.signer && typeof props.operation.signer.weight === "number") {
    const signerPublicKey = String(props.operation.signer.ed25519PublicKey);
    if (props.operation.signer.weight > 0) {
      return /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.set-options.add-signer.title") }, /* @__PURE__ */ React.createElement(
        SummaryDetailsField,
        {
          label: t2("operations.set-options.add-signer.summary.new-signer"),
          value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: signerPublicKey, testnet, variant: "short" })
        }
      ), /* @__PURE__ */ React.createElement(
        SummaryDetailsField,
        {
          label: t2("operations.set-options.add-signer.summary.key-weight"),
          value: props.operation.signer.weight
        }
      ), /* @__PURE__ */ React.createElement(
        SummaryDetailsField,
        {
          label: t2("operations.set-options.add-signer.summary.account"),
          value: /* @__PURE__ */ React.createElement(
            CopyableAddress,
            {
              address: props.operation.source || props.transaction.source,
              testnet,
              variant: "short"
            }
          )
        }
      ));
    } else if (props.operation.signer.weight === 0) {
      return /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.set-options.remove-signer.title") }, /* @__PURE__ */ React.createElement(
        SummaryDetailsField,
        {
          label: t2("operations.set-options.remove-signer.summary.signer"),
          value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: signerPublicKey, testnet, variant: "short" })
        }
      ), /* @__PURE__ */ React.createElement(
        SummaryDetailsField,
        {
          label: t2("operations.set-options.remove-signer.summary.account"),
          value: /* @__PURE__ */ React.createElement(
            CopyableAddress,
            {
              address: props.operation.source || props.transaction.source,
              testnet,
              variant: "short"
            }
          )
        }
      ));
    }
  } else if (someThresholdSet(props.operation)) {
    const { highThreshold, lowThreshold, medThreshold } = props.operation;
    return lowThreshold === medThreshold && medThreshold === highThreshold ? /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.set-options.change-signature-setup.title") }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        fullWidth: true,
        label: t2("operations.set-options.change-signature-setup.summary.required-signatures"),
        value: props.operation.lowThreshold
      }
    )) : /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.set-options.change-signature-setup.title") }, /* @__PURE__ */ React.createElement(
      SummaryDetailsField,
      {
        fullWidth: true,
        label: t2("operations.set-options.change-signature-setup.summary..key-thresholds.label"),
        value: /* @__PURE__ */ React.createElement(Pre, null, [
          t2("operations.set-options.change-signature-setup.summary.key-thresholds.value.low", {
            threshold: props.operation.lowThreshold
          }),
          t2("operations.set-options.change-signature-setup.summary.key-thresholds.value.medium", {
            threshold: props.operation.medThreshold
          }),
          t2("operations.set-options.change-signature-setup.summary.key-thresholds.value.high", {
            threshold: props.operation.highThreshold
          })
        ].join("\n"))
      }
    ));
  } else if (props.operation.inflationDest) {
    return /* @__PURE__ */ React.createElement(
      SummaryItem,
      {
        heading: props.hideHeading ? void 0 : t2("operations.set-options.set-inflation-destination.title")
      },
      /* @__PURE__ */ React.createElement(
        SummaryDetailsField,
        {
          fullWidth: true,
          label: t2("operations.set-options.set-inflation-destination.summary.new-destination"),
          value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: props.operation.inflationDest, testnet, variant: "short" })
        }
      )
    );
  }
  return /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      fullWidth: true,
      label: t2("operations.set-options.set-account-options.title"),
      value: /* @__PURE__ */ React.createElement(Pre, null, prettifyOperationObject(props.operation))
    }
  ));
}
function AccountMergeOperation(props) {
  const { destination, source } = props.operation;
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(SummaryItem, { heading: props.hideHeading ? void 0 : t2("operations.account-merge.title") }, source ? /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.account-merge.summary.account"),
      value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: source, testnet: props.testnet, variant: "short" })
    }
  ) : null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("operations.account-merge.summary.merge-into"),
      value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: destination, testnet: props.testnet, variant: "short" })
    }
  ));
}
function GenericOperation(props) {
  const getOperationTitle = useOperationTitle();
  return /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      fullWidth: true,
      label: getOperationTitle(props.operation),
      value: /* @__PURE__ */ React.createElement(Pre, null, prettifyOperationObject(props.operation))
    }
  ));
}
function OperationListItem(props) {
  const hideHeading = props.transaction.operations.length === 1;
  if (props.operation.type === "changeTrust") {
    return /* @__PURE__ */ React.createElement(
      ChangeTrustOperation,
      {
        hideHeading,
        operation: props.operation,
        style: props.style,
        testnet: props.testnet
      }
    );
  } else if (props.operation.type === "createAccount") {
    return /* @__PURE__ */ React.createElement(
      CreateAccountOperation,
      {
        hideHeading,
        operation: props.operation,
        style: props.style,
        testnet: props.testnet
      }
    );
  } else if (props.operation.type === "payment") {
    return /* @__PURE__ */ React.createElement(
      PaymentOperation,
      {
        hideHeading,
        operation: props.operation,
        style: props.style,
        testnet: props.testnet
      }
    );
  } else if (props.operation.type === "manageData") {
    return /* @__PURE__ */ React.createElement(
      ManageDataOperation,
      {
        hideHeading,
        operation: props.operation,
        style: props.style,
        testnet: props.testnet,
        transaction: props.transaction
      }
    );
  } else if (props.operation.type === "manageBuyOffer" || props.operation.type === "manageSellOffer") {
    return /* @__PURE__ */ React.createElement(
      ManageOfferOperation,
      {
        accountData: props.accountData,
        hideHeading,
        operation: props.operation,
        style: props.style,
        testnet: props.testnet
      }
    );
  } else if (props.operation.type === "setOptions") {
    return /* @__PURE__ */ React.createElement(
      SetOptionsOperation,
      {
        hideHeading,
        operation: props.operation,
        style: props.style,
        transaction: props.transaction
      }
    );
  } else if (props.operation.type === "accountMerge") {
    return /* @__PURE__ */ React.createElement(
      AccountMergeOperation,
      {
        hideHeading,
        operation: props.operation,
        style: props.style,
        testnet: props.testnet
      }
    );
  } else {
    return /* @__PURE__ */ React.createElement(GenericOperation, { operation: props.operation, style: props.style });
  }
}
const OperationListItem$1 = React.memo(OperationListItem);
var OpenInNew = {};
var hasRequiredOpenInNew;
function requireOpenInNew() {
  if (hasRequiredOpenInNew) return OpenInNew;
  hasRequiredOpenInNew = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(OpenInNew, "__esModule", {
    value: true
  });
  OpenInNew.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
  }), "OpenInNew");
  OpenInNew.default = _default;
  return OpenInNew;
}
var OpenInNewExports = /* @__PURE__ */ requireOpenInNew();
const OpenInNewIcon = /* @__PURE__ */ getDefaultExportFromCjs(OpenInNewExports);
function openLink(href) {
  return call(Messages.OpenLink, href);
}
function Portal(props) {
  const isSmallScreen = useIsMobile();
  if (!isSmallScreen && props.desktop === "inline") {
    return props.children || null;
  } else {
    return props.target ? ReactDOM.createPortal(props.children, props.target) : null;
  }
}
const Portal$1 = React.memo(Portal);
function DismissalConfirmationDialog(props) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      cancelButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onCancel }, t2("account.transaction-review.dismissal.action.cancel")),
      confirmButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onConfirm, type: "primary" }, t2("account.transaction-review.dismissal.action.confirm")),
      onClose: props.onCancel,
      open: props.open,
      title: t2("account.transaction-review.dismissal.title")
    },
    t2("account.transaction-review.dismissal.header")
  );
}
const wellKnownAccountsCache = createPersistentCache("known-accounts", { expiresIn: 24 * 60 * 6e4 });
async function fetchWellknownAccounts(testnet) {
  const cacheKey = testnet ? "testnet" : "pubnet";
  const cachedAccounts = wellKnownAccountsCache.read(cacheKey);
  const { netWorker } = await workers;
  if (cachedAccounts) {
    return cachedAccounts;
  } else {
    const knownAccounts = await netWorker.fetchWellknownAccounts(testnet);
    wellKnownAccountsCache.save(cacheKey, knownAccounts);
    return knownAccounts;
  }
}
const assetsCache = createPersistentCache("known-assets", { expiresIn: 60 * 6e4 });
async function fetchAllAssets(testnet) {
  const cacheKey = testnet ? "testnet" : "mainnet";
  const tickerURL = testnet ? "https://ticker-testnet.kamni.io" : "https://ticker.kamni.io";
  const cachedAssets = assetsCache.read(cacheKey);
  if (cachedAssets) {
    return cachedAssets;
  }
  try {
    const { netWorker } = await workers;
    const allAssets = await netWorker.fetchAllAssets(tickerURL);
    assetsCache.save(cacheKey, allAssets);
    return allAssets;
  } catch (e2) {
    return [];
  }
}
function useTickerAssets(testnet) {
  const fetchAssets = () => fetchAllAssets(testnet);
  return tickerAssetsCache.get(testnet) || tickerAssetsCache.suspend(testnet, fetchAssets);
}
function useWellKnownAccounts(testnet) {
  let accounts;
  const forceRerender = useForceRerender();
  const fetchAccounts = () => fetchWellknownAccounts(testnet);
  try {
    accounts = wellKnownAccountsCache$1.get(testnet) || wellKnownAccountsCache$1.suspend(testnet, fetchAccounts);
  } catch (thrown) {
    if (thrown && typeof thrown.then === "function") {
      accounts = [];
      thrown.then(forceRerender, trackError);
    } else {
      throw thrown;
    }
  }
  const wellknownAccounts = React.useMemo(() => {
    return {
      accounts,
      lookup(publicKey) {
        return accounts.find((account2) => account2.address === publicKey);
      }
    };
  }, [accounts]);
  return wellknownAccounts;
}
const AccountName = React.memo(function AccountName2(props) {
  const wellknownAccounts = useWellKnownAccounts(props.testnet);
  const homeDomain = useAccountHomeDomainSafe(props.publicKey, props.testnet, true);
  const record = wellknownAccounts.lookup(props.publicKey);
  if (record && record.domain) {
    return /* @__PURE__ */ React.createElement("span", { style: { userSelect: "text" } }, record.domain);
  } else if (homeDomain) {
    return /* @__PURE__ */ React.createElement("span", { style: { userSelect: "text" } }, homeDomain);
  } else {
    return /* @__PURE__ */ React.createElement(Address, { address: props.publicKey, testnet: props.testnet, variant: "short" });
  }
});
var Update = {};
var hasRequiredUpdate;
function requireUpdate() {
  if (hasRequiredUpdate) return Update;
  hasRequiredUpdate = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Update, "__esModule", {
    value: true
  });
  Update.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.875 6.875 0 000 9.79c2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"
  })), "Update");
  Update.default = _default;
  return Update;
}
var UpdateExports = /* @__PURE__ */ requireUpdate();
const UpdateIcon$1 = /* @__PURE__ */ getDefaultExportFromCjs(UpdateExports);
function MemoMessage({ memo, prefix = null }) {
  if (!memo.value) {
    return null;
  } else if (Buffer2.isBuffer(memo.value)) {
    const text = memo.type === "text" ? memo.value.toString("utf8") : memo.value.toString("hex");
    return /* @__PURE__ */ React.createElement("span", { style: { userSelect: "text" } }, prefix, text);
  } else {
    return /* @__PURE__ */ React.createElement("span", { style: { userSelect: "text" } }, prefix, memo.value);
  }
}
const MemoMessage$1 = React.memo(MemoMessage);
function SignerStatus(props) {
  const { t: t2 } = useTranslation();
  const Icon = props.hasSigned ? CheckIcon$1 : UpdateIcon$1;
  return /* @__PURE__ */ React.createElement(
    Tooltip$1,
    {
      title: props.hasSigned ? t2("account.transaction-review.signer-status.tooltip.has-signed") : t2("account.transaction-review.signer-status.tooltip.has-not-signed")
    },
    /* @__PURE__ */ React.createElement(Icon, { style: { opacity: props.hasSigned ? 1 : 0.5, ...props.style } })
  );
}
const Signer = React.memo(function Signer2(props) {
  const isSmallScreen = useIsMobile();
  const testnet = props.transaction.networkPassphrase === libExports$1.Networks.TESTNET;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", ...props.style } }, /* @__PURE__ */ React.createElement(SignerStatus, { hasSigned: props.hasSigned, style: { fontSize: "100%", marginRight: 8 } }), /* @__PURE__ */ React.createElement("div", { style: { whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement(
    Address,
    {
      address: props.signer.key,
      style: { display: "inline-block", fontWeight: "normal", minWidth: 480 },
      testnet,
      variant: isSmallScreen ? "short" : "full"
    }
  )));
});
function Signers(props) {
  const threshold = props.accountData.thresholds.high_threshold || 1;
  const { t: t2 } = useTranslation();
  const headingDetails = props.accountData.signers.length === 1 ? t2("account.transaction-review.signers.heading-details.single-signature") : props.accountData.signers.every((signer) => signer.weight === 1) ? t2(
    "account.transaction-review.signers.heading-details.default-signatures",
    `${threshold} of ${props.accountData.signers.length} multi-signature`,
    { threshold, length: props.accountData.signers.length }
  ) : t2("account.transaction-review.signers.heading-details.custom-consensus");
  return /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("account.transaction-review.signers.label", `Signers (${headingDetails})`, {
        details: headingDetails
      }),
      style: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column"
      },
      value: props.accountData.signers.map((signer, index) => /* @__PURE__ */ React.createElement(
        Signer,
        {
          hasSigned: hasSigned(props.transaction, signer.key, props.signatureRequest),
          key: index,
          signer,
          transaction: props.transaction
        }
      ))
    }
  ));
}
function TransactionMemo(props) {
  const { t: t2 } = useTranslation();
  if (props.memo.type === "none" || !props.memo.value) return null;
  const typeLabel = props.memo.type.substr(0, 1).toUpperCase() + props.memo.type.substr(1);
  return /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      fullWidth: true,
      label: t2("account.transaction-review.transaction-memo.label", `${typeLabel} Memo`, { type: typeLabel }),
      value: /* @__PURE__ */ React.createElement(MemoMessage$1, { memo: props.memo })
    }
  ));
}
var Warning$1 = {};
var hasRequiredWarning;
function requireWarning() {
  if (hasRequiredWarning) return Warning$1;
  hasRequiredWarning = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Warning$1, "__esModule", {
    value: true
  });
  Warning$1.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
  }), "Warning");
  Warning$1.default = _default;
  return Warning$1;
}
var WarningExports = /* @__PURE__ */ requireWarning();
const WarnIcon = /* @__PURE__ */ getDefaultExportFromCjs(WarningExports);
const Warning = React.memo(function Warning2(props) {
  return /* @__PURE__ */ React.createElement(ListItem, { component: "div", style: { background: warningColor, marginBottom: 16, ...props.style } }, /* @__PURE__ */ React.createElement(ListItemIcon$1, { style: { minWidth: 40 } }, /* @__PURE__ */ React.createElement(WarnIcon, null)), /* @__PURE__ */ React.createElement(ListItemText, { primary: props.primary, secondary: props.secondary }));
});
function AccountCreationWarning() {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    Warning,
    {
      primary: t2("account.transaction-review.account-creation-warning.primary"),
      secondary: t2("account.transaction-review.account-creation-warning.secondary")
    }
  );
}
function AddingSignerWarning() {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    Warning,
    {
      primary: t2("account.transaction-review.add-signer-warning.primary"),
      secondary: t2("account.transaction-review.add-signer-warning.secondary")
    }
  );
}
function DangerousTransactionWarning() {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    Warning,
    {
      primary: t2("account.transaction-review.dangerous-transaction-warning.primary"),
      secondary: t2("account.transaction-review.dangerous-transaction-warning.secondary")
    }
  );
}
function getTime(time) {
  const date = new Date(time);
  return date.toLocaleString();
}
function makeOperationSourceExplicit(operation, transaction, localAccountPubKey) {
  const effectiveSource = operation.source || transaction.source;
  return effectiveSource === transaction.source && (effectiveSource === localAccountPubKey || !localAccountPubKey) ? operation : { ...operation, source: effectiveSource };
}
const noHPaddingStyle = {
  paddingLeft: 0,
  paddingRight: 0
};
function DefaultTransactionSummary(props) {
  const { accounts } = React.useContext(AccountsContext);
  const { t: t2 } = useTranslation();
  const theme2 = useTheme();
  const [showingAllMetadataDeferred, showingAllMetadata, setShowingAllMetadata] = useDeferredState(
    false,
    theme2.transitions.duration.shortest
  );
  const localAccountPublicKey = props.account ? props.account.publicKey : void 0;
  const showAllMetadata = React.useCallback(() => setShowingAllMetadata(true), [setShowingAllMetadata]);
  const fee = Big(props.transaction.fee).mul(props.transaction.operations.length).div(1e7);
  const isDangerousSignatureRequest = React.useMemo(() => {
    const trustedKeys = accounts.reduce(
      (trusted, account2) => account2.accountID !== account2.publicKey ? [...trusted, account2.accountID, account2.publicKey] : [...trusted, account2.accountID],
      []
    );
    return props.signatureRequest && isPotentiallyDangerousTransaction(props.transaction, trustedKeys);
  }, [accounts, props.signatureRequest, props.transaction]);
  const isAccountCreation = props.transaction.operations.some((op) => op.type === "createAccount");
  const isAddingSigner = props.transaction.operations.some(
    (op) => {
      var _a;
      return op.type === "setOptions" && (((_a = op.signer) == null ? void 0 : _a.weight) || 0) > 0;
    }
  );
  const isWideScreen = useMediaQuery("(min-width:900px)");
  const widthStyling = isWideScreen ? { maxWidth: props.fullWidth ? "unset" : 700, minWidth: 400 } : { minWidth: "66vw" };
  const transaction = props.transaction;
  const transactionHash = React.useMemo(() => {
    return transaction.hash().toString("hex");
  }, [transaction]);
  return /* @__PURE__ */ React.createElement(VerticalLayout, { style: widthStyling }, isDangerousSignatureRequest ? /* @__PURE__ */ React.createElement(DangerousTransactionWarning, null) : null, isAccountCreation && props.canSubmit ? /* @__PURE__ */ React.createElement(AccountCreationWarning, null) : null, isAddingSigner && props.canSubmit ? /* @__PURE__ */ React.createElement(AddingSignerWarning, null) : null, props.transaction.operations.map((operation, index) => /* @__PURE__ */ React.createElement(
    OperationListItem$1,
    {
      key: index,
      accountData: props.accountData,
      operation: props.showSource ? makeOperationSourceExplicit(operation, props.transaction, localAccountPublicKey) : operation,
      style: noHPaddingStyle,
      testnet: props.testnet,
      transaction: props.transaction
    }
  )), /* @__PURE__ */ React.createElement(Divider$1, { style: { marginTop: 11, marginBottom: 11 } }), /* @__PURE__ */ React.createElement(TransactionMemo, { memo: props.transaction.memo, style: noHPaddingStyle }), props.showSigners ? /* @__PURE__ */ React.createElement(
    Signers,
    {
      accounts,
      accountData: props.accountData,
      signatureRequest: props.signatureRequest,
      style: noHPaddingStyle,
      transaction: props.transaction
    }
  ) : null, /* @__PURE__ */ React.createElement(Collapse$1, { in: !showingAllMetadata }, /* @__PURE__ */ React.createElement(ShowMoreItem, { onClick: showAllMetadata })), /* @__PURE__ */ React.createElement(Collapse$1, { in: showingAllMetadataDeferred }, /* @__PURE__ */ React.createElement(VerticalLayout, { grow: true }, props.showSource ? /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      fullWidth: true,
      label: t2("account.transaction-review.summary.item.account.label"),
      value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: props.transaction.source, testnet: props.testnet, variant: "short" })
    }
  )) : null, props.showHash ? /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      fullWidth: true,
      label: t2("account.transaction-review.summary.item.tx-hash.label"),
      value: /* @__PURE__ */ React.createElement(ClickableAddress, { address: transactionHash, testnet: props.testnet, variant: "shorter" })
    }
  )) : null, /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("account.transaction-review.summary.item.max-fee.label"),
      value: /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: "XLM", balance: fee.toString(), inline: true })
    }
  ), transaction.created_at ? /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      fullWidth: true,
      label: t2("account.transaction-review.summary.item.submission.label"),
      value: getTime(transaction.created_at)
    }
  ) : null))));
}
function WebAuthTransactionSummary(props) {
  const signingKeyCache = React.useContext(SigningKeyCacheContext).cache;
  const { t: t2 } = useTranslation();
  const { timeBounds } = props.transaction;
  const domain = signingKeyCache.get(props.transaction.source);
  const manageDataOperation = props.transaction.operations.find((op) => op.type === "manageData");
  const maxTime = timeBounds ? Math.round(Number.parseInt(timeBounds.maxTime, 10) * 1e3) : 0;
  if (!manageDataOperation) {
    throw Error(t2("account.transaction-review.validation.no-manage-data-operation"));
  }
  return /* @__PURE__ */ React.createElement(VerticalLayout, null, /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("account.transaction-review.summary.item.service.label"),
      value: domain ? domain : /* @__PURE__ */ React.createElement(AccountName, { publicKey: props.transaction.source, testnet: props.testnet })
    }
  ), /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("account.transaction-review.summary.item.authenticating-account.label"),
      value: /* @__PURE__ */ React.createElement(CopyableAddress, { address: manageDataOperation.source || "", testnet: props.testnet, variant: "short" })
    }
  )), maxTime ? /* @__PURE__ */ React.createElement(SummaryItem, null, /* @__PURE__ */ React.createElement(
    SummaryDetailsField,
    {
      label: t2("account.transaction-review.summary.item.expiry.label"),
      value: getTime(maxTime)
    }
  )) : null);
}
function TransactionSummary(props) {
  const allTxSources = getAllSources(props.transaction);
  const { accounts } = React.useContext(AccountsContext);
  const accountDataSet = useLiveAccountDataSet(allTxSources, props.testnet);
  const { t: t2 } = useTranslation();
  const accountData = accountDataSet.find((someAccountData) => someAccountData.id === props.transaction.source);
  const showSigners = accountDataSet.some((someAccountData) => someAccountData.signers.length > 1);
  if (!accountData) {
    throw new Error(t2("account.transaction-review.validation.no-account-data"));
  }
  const isDangerousSignatureRequest = React.useMemo(() => {
    const trustedKeys = accounts.reduce(
      (trusted, account2) => account2.accountID !== account2.publicKey ? [...trusted, account2.accountID, account2.publicKey] : [...trusted, account2.accountID],
      []
    );
    return props.signatureRequest && isPotentiallyDangerousTransaction(props.transaction, trustedKeys);
  }, [accounts, props.signatureRequest, props.transaction]);
  const wideScreen = useMediaQuery("(min-width:900px)");
  const widthStyling = wideScreen ? { maxWidth: 700, minWidth: 320 } : { minWidth: "66vw" };
  return isStellarWebAuthTransaction(props.transaction) ? /* @__PURE__ */ React.createElement(WebAuthTransactionSummary, { style: widthStyling, testnet: props.testnet, transaction: props.transaction }) : /* @__PURE__ */ React.createElement(
    DefaultTransactionSummary,
    {
      ...props,
      accountData,
      isDangerousSignatureRequest,
      showHash: props.showHash,
      showSigners
    }
  );
}
const TransactionSummary$1 = React.memo(TransactionSummary);
var Visibility$1 = {};
var hasRequiredVisibility;
function requireVisibility() {
  if (hasRequiredVisibility) return Visibility$1;
  hasRequiredVisibility = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Visibility$1, "__esModule", {
    value: true
  });
  Visibility$1.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  }), "Visibility");
  Visibility$1.default = _default;
  return Visibility$1;
}
var VisibilityExports = /* @__PURE__ */ requireVisibility();
const Visibility = /* @__PURE__ */ getDefaultExportFromCjs(VisibilityExports);
var VisibilityOff$1 = {};
var hasRequiredVisibilityOff;
function requireVisibilityOff() {
  if (hasRequiredVisibilityOff) return VisibilityOff$1;
  hasRequiredVisibilityOff = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(VisibilityOff$1, "__esModule", {
    value: true
  });
  VisibilityOff$1.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    fill: "none",
    d: "m0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  })), "VisibilityOff");
  VisibilityOff$1.default = _default;
  return VisibilityOff$1;
}
var VisibilityOffExports = /* @__PURE__ */ requireVisibilityOff();
const VisibilityOff = /* @__PURE__ */ getDefaultExportFromCjs(VisibilityOffExports);
function PasswordField(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  return /* @__PURE__ */ React.createElement(
    TextField,
    {
      ...props,
      InputProps: {
        ...props.InputProps,
        endAdornment: /* @__PURE__ */ React.createElement(InputAdornment, { position: "end" }, /* @__PURE__ */ React.createElement(IconButton, { onClick: handleClickShowPassword }, showPassword ? /* @__PURE__ */ React.createElement(Visibility, null) : /* @__PURE__ */ React.createElement(VisibilityOff, null)))
      },
      type: showPassword ? "text" : "password"
    }
  );
}
function TxConfirmationForm(props) {
  const { onConfirm = () => void 0, onClose } = props;
  const settings2 = React.useContext(SettingsContext);
  const formID = React.useMemo(() => nanoid(), []);
  const [dismissalConfirmationPending, setDismissalConfirmationPending] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formValues, setFormValues] = React.useState({ password: null });
  const [loading, setLoading] = React.useState(false);
  const { t: t2 } = useTranslation();
  const passwordError = props.passwordError || errors.password;
  const cancelDismissal = React.useCallback(() => setDismissalConfirmationPending(false), []);
  const requestDismissalConfirmation = React.useCallback(() => setDismissalConfirmationPending(true), []);
  const dismissSignatureRequest = React.useCallback(() => {
    if (!props.signatureRequest) return;
    settings2.ignoreSignatureRequest(props.signatureRequest.hash);
    setDismissalConfirmationPending(false);
    if (onClose) {
      onClose();
    }
  }, [onClose, props.signatureRequest, settings2]);
  const setFormValue = (key, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: value
    }));
  };
  const openInStellarExpert = React.useCallback(() => {
    openLink(
      `https://stellar.expert/explorer/${props.account.testnet ? "testnet" : "public"}/tx/${props.transaction.hash().toString("hex")}`
    );
  }, [props.account.testnet, props.transaction]);
  const handleTextFieldChange = React.useCallback((event) => setFormValue("password", event.target.value), []);
  const handleFormSubmission = React.useCallback(
    async (event) => {
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      if (props.account.requiresPassword && !formValues.password) {
        setLoading(false);
        return setErrors({
          ...errors,
          password: new Error(t2("account.transaction-review.validation.password-required"))
        });
      }
      setErrors({});
      try {
        await onConfirm(formValues);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [props.disabled, props.account.requiresPassword, formValues, errors, t2, onConfirm]
  );
  const DismissIcon = React.useMemo(() => /* @__PURE__ */ React.createElement(CloseIcon, { style: { fontSize: "140%" } }), []);
  const ConfirmIcon = React.useMemo(() => /* @__PURE__ */ React.createElement(CheckIcon$1, null), []);
  const isOrderCancellation = props.transaction.operations.every(
    (op) => op.type === "manageBuyOffer" && Big(op.buyAmount).eq(0) || op.type === "manageSellOffer" && Big(op.amount).eq(0)
  );
  const showLoadingIndicator = React.useCallback(() => {
    setTimeout(() => {
      setLoading(true);
    }, 0);
  }, []);
  return /* @__PURE__ */ React.createElement("form", { id: formID, noValidate: true, onSubmit: handleFormSubmission }, /* @__PURE__ */ React.createElement(VerticalLayout, null, /* @__PURE__ */ React.createElement(
    TransactionSummary$1,
    {
      account: props.account,
      canSubmit: !props.disabled,
      showHash: props.showHash === void 0 ? props.disabled : props.showHash,
      showSource: props.showSource,
      signatureRequest: props.signatureRequest,
      testnet: props.account.testnet,
      transaction: props.transaction
    }
  ), props.account.requiresPassword && !props.disabled ? /* @__PURE__ */ React.createElement(
    PasswordField,
    {
      autoFocus: true,
      error: Boolean(passwordError),
      label: passwordError ? renderFormFieldError(passwordError, t2) : t2("account.transaction-review.textfield.password.label"),
      fullWidth: true,
      margin: "dense",
      value: formValues.password || "",
      onChange: handleTextFieldChange,
      style: { margin: "32px auto 0", maxWidth: 300 }
    }
  ) : null), /* @__PURE__ */ React.createElement(Portal$1, { desktop: "inline", target: props.actionsRef && props.actionsRef.element }, /* @__PURE__ */ React.createElement(DialogActionsBox, { smallDialog: props.disabled && !props.signatureRequest }, props.signatureRequest ? /* @__PURE__ */ React.createElement(ActionButton, { icon: DismissIcon, onClick: requestDismissalConfirmation }, t2("account.transaction-review.action.dismiss")) : null, props.disabled ? null : /* @__PURE__ */ React.createElement(
    ActionButton,
    {
      icon: ConfirmIcon,
      form: formID,
      loading: props.loading || loading,
      onClick: showLoadingIndicator,
      type: "submit"
    },
    isOrderCancellation ? t2("account.transaction-review.action.cancel-order") : t2("account.transaction-review.action.confirm")
  ), props.disabled && !props.signatureRequest ? /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(OpenInNewIcon, null), onClick: openInStellarExpert, type: "secondary" }, t2("account.transaction-review.action.inspect")) : null)), /* @__PURE__ */ React.createElement(
    DismissalConfirmationDialog,
    {
      onCancel: cancelDismissal,
      onConfirm: dismissSignatureRequest,
      open: dismissalConfirmationPending
    }
  ));
}
const ReviewForm = React.memo(TxConfirmationForm);
function isPaymentOperation(operation) {
  return ["createAccount", "payment"].indexOf(operation.type) > -1;
}
function isOfferDeletionOperation(operation) {
  return operation.type === "manageBuyOffer" && Big(operation.buyAmount).eq(0) || operation.type === "manageSellOffer" && Big(operation.amount).eq(0);
}
function useTransactionTitle() {
  const getOperationTitle = useOperationTitle();
  const { t: t2 } = useTranslation();
  return function getTitle(transaction) {
    if (!transaction) {
      return t2("account.transaction-review.title.transaction");
    } else if (transaction.operations.length === 1) {
      return getOperationTitle(transaction.operations[0]);
    } else if (transaction.operations.every(isPaymentOperation)) {
      return t2("account.transaction-review.title.payment");
    } else if (transaction.operations.every(isOfferDeletionOperation)) {
      return t2("account.transaction-review.title.delete-orders-operation");
    } else if (isStellarWebAuthTransaction(transaction)) {
      return t2("account.transaction-review.title.web-auth");
    } else {
      return t2("account.transaction-review.title.transaction");
    }
  };
}
function TransactionReviewDialogBody(props) {
  const dialogActionsRef = useDialogActions();
  const isSmallScreen = useIsMobile();
  const getTitle = useTransactionTitle();
  const titleContent = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      MainTitle,
      {
        title: /* @__PURE__ */ React.createElement(React.Fragment, null, getTitle(props.transaction) + " ", props.account.testnet ? /* @__PURE__ */ React.createElement(TestnetBadge, { style: { marginLeft: 8 } }) : null),
        onBack: props.onClose
      }
    ),
    [getTitle, props.account.testnet, props.onClose, props.transaction]
  );
  return /* @__PURE__ */ React.createElement(DialogBody, { top: titleContent, actions: props.showSubmissionProgress ? null : dialogActionsRef }, props.transaction && !props.showSubmissionProgress ? /* @__PURE__ */ React.createElement(Box$1, { margin: `12px ${isSmallScreen ? "4px" : "0"} 0`, textAlign: "center" }, /* @__PURE__ */ React.createElement(
    ReviewForm,
    {
      account: props.account,
      actionsRef: dialogActionsRef,
      disabled: props.disabled,
      onClose: props.onClose,
      onConfirm: (formValues) => props.onSubmitTransaction(props.transaction, formValues),
      passwordError: props.passwordError,
      showHash: props.showHash,
      showSource: props.showSource,
      signatureRequest: props.signatureRequest,
      transaction: props.transaction
    }
  )) : null, props.submissionProgress);
}
function TransactionReviewDialog(props) {
  const isScreen600pxWide = useMediaQuery("(min-width:600px)");
  const isSmallScreen = useIsMobile();
  return /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: props.open,
      fullScreen: isSmallScreen,
      onClose: props.onClose,
      maxWidth: "lg",
      TransitionComponent: isSmallScreen ? FullscreenDialogTransition : CompactDialogTransition,
      PaperProps: {
        style: { minWidth: isScreen600pxWide ? 500 : void 0 }
      }
    },
    /* @__PURE__ */ React.createElement(TransactionReviewDialogBody, { ...props })
  );
}
const TransactionReviewDialog$1 = React.memo(TransactionReviewDialog);
var n = { none: "none", pending: "pending", rejected: "rejected", resolved: "resolved" }, o = function(e2) {
  function t2(t3) {
    e2.call(this, t3), this.state = { status: n.none };
  }
  return e2 && (t2.__proto__ = e2), (t2.prototype = Object.create(e2 && e2.prototype)).constructor = t2, t2.prototype.componentWillReceiveProps = function(e3) {
    e3.promise !== this.props.promise && (this.setState({ status: n.none }), this.handlePromise(e3.promise));
  }, t2.prototype.handlePromise = function(e3) {
    var t3 = this;
    this.promise = e3, this.setState({ status: n.pending }), e3.then(function(o2) {
      t3.promise === e3 && (t3.unmounted || t3.setState({ status: n.resolved, value: o2 }));
    }, function(o2) {
      t3.promise === e3 && (t3.unmounted || t3.setState({ status: n.rejected, value: o2 }));
    });
  }, t2.prototype.componentWillMount = function() {
    this.props.promise && this.handlePromise(this.props.promise);
  }, t2.prototype.componentWillUnmount = function() {
    this.unmounted = true;
  }, t2.prototype.render = function() {
    var e3 = this.props, o2 = this.state;
    switch (o2.status) {
      case n.none:
        if (e3.before) return e3.before(this.handlePromise.bind(this));
        break;
      case n.pending:
        if (e3.pending) return "function" == typeof e3.pending ? e3.pending() : e3.pending;
        if (t2.defaultPending) return "function" == typeof t2.defaultPending ? t2.defaultPending() : t2.defaultPending;
        break;
      case n.resolved:
        if (e3.then) return e3.then(o2.value);
        break;
      case n.rejected:
        if (e3.catch) return e3.catch(o2.value);
    }
    return null;
  }, t2;
}(React.Component);
o.propTypes = { before: t$1.func, then: t$1.func, catch: t$1.func, pending: t$1.oneOfType([t$1.node, t$1.func]), promise: t$1.object }, o.Async = o;
const AnimatedErrorIcon = ({ size = 100 }) => /* @__PURE__ */ React.createElement("div", { className: "svg-box-u5GqHV", style: { width: size, height: size } }, /* @__PURE__ */ React.createElement("svg", { className: "red-stroke-u5GqHV", viewBox: "0 0 150 150" }, /* @__PURE__ */ React.createElement("circle", { className: "circular-u5GqHV", cx: "75", cy: "75", r: "50", fill: "none", strokeWidth: "5", strokeMiterlimit: "10" })), /* @__PURE__ */ React.createElement("svg", { className: "cross-u5GqHV red-stroke-u5GqHV", viewBox: "0 0 150 150" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(54, 54)" }, /* @__PURE__ */ React.createElement("g", { transform: "matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)" }, /* @__PURE__ */ React.createElement("path", { className: "cross-first-line-u5GqHV", d: "M634.087,300.805L673.361,261.53", fill: "none" })), /* @__PURE__ */ React.createElement("g", { transform: "matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)" }, /* @__PURE__ */ React.createElement("path", { className: "cross-second-line-u5GqHV", d: "M634.087,300.805L673.361,261.53" })))));
var Replay = {};
var hasRequiredReplay;
function requireReplay() {
  if (hasRequiredReplay) return Replay;
  hasRequiredReplay = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Replay, "__esModule", {
    value: true
  });
  Replay.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
  }), "Replay");
  Replay.default = _default;
  return Replay;
}
var ReplayExports = /* @__PURE__ */ requireReplay();
const RetryIcon = /* @__PURE__ */ getDefaultExportFromCjs(ReplayExports);
const AnimatedSuccessIcon = ({ size = 100 }) => /* @__PURE__ */ React.createElement("div", { className: "svg-box-u5GqHV", style: { width: size, height: size } }, /* @__PURE__ */ React.createElement("svg", { className: "green-stroke-u5GqHV", viewBox: "0 0 150 150" }, /* @__PURE__ */ React.createElement("circle", { className: "circular-u5GqHV", cx: "75", cy: "75", r: "50", fill: "none", strokeWidth: "5", strokeMiterlimit: "10" })), /* @__PURE__ */ React.createElement("svg", { className: "checkmark-u5GqHV green-stroke-u5GqHV", viewBox: "0 0 150 150" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(49, 56)" }, /* @__PURE__ */ React.createElement("g", { transform: "matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)" }, /* @__PURE__ */ React.createElement("path", { className: "checkmark-check-u5GqHV", fill: "none", d: "M616.306,283.025L634.087,300.805L673.361,261.53" })))));
function Container(props) {
  const isSmallScreen = useIsMobile();
  return /* @__PURE__ */ React.createElement(Box$1, { width: "100%", maxWidth: isSmallScreen ? void 0 : "40vw", height: "100%" }, /* @__PURE__ */ React.createElement(VerticalLayout, { padding: 10, height: "100%", alignItems: "center", justifyContent: "center" }, props.children));
}
function Heading(props) {
  return /* @__PURE__ */ React.createElement(Typography, { align: "center", variant: "subtitle1", style: { wordBreak: "break-word" } }, props.children);
}
var SubmissionType = /* @__PURE__ */ ((SubmissionType2) => {
  SubmissionType2[SubmissionType2["default"] = 0] = "default";
  SubmissionType2[SubmissionType2["multisig"] = 1] = "multisig";
  SubmissionType2[SubmissionType2["thirdParty"] = 2] = "thirdParty";
  return SubmissionType2;
})(SubmissionType || {});
const successMessages = {
  [
    0
    /* default */
  ]: "generic.submission-progress.success.default",
  [
    1
    /* multisig */
  ]: "generic.submission-progress.success.multisig",
  [
    2
    /* thirdParty */
  ]: "generic.submission-progress.success.third-party"
};
function SubmissionProgress(props) {
  const { onRetry } = props;
  const { t: t2 } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const retry = React.useCallback(() => {
    if (onRetry) {
      setLoading(true);
      onRetry().finally(() => setLoading(false));
    }
  }, [onRetry, setLoading]);
  return /* @__PURE__ */ React.createElement(
    o,
    {
      promise: props.promise,
      pending: /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(CircularProgress, { size: 70, style: { marginBottom: 24 } }), /* @__PURE__ */ React.createElement(Heading, null, t2("generic.submission-progress.pending"))),
      then: () => /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(AnimatedSuccessIcon, { size: 100 }), /* @__PURE__ */ React.createElement(Heading, null, t2(successMessages[props.type]))),
      catch: (error) => /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(AnimatedErrorIcon, { size: 100 }), /* @__PURE__ */ React.createElement(Heading, null, error.response ? explainSubmissionErrorResponse(error.response, t2).message || JSON.stringify(error) : getErrorTranslation(error, t2)), /* @__PURE__ */ React.createElement(DialogActionsBox, null, props.onRetry && /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(RetryIcon, null), loading, onClick: retry, type: "primary" }, t2("generic.dialog-actions.retry.label")), /* @__PURE__ */ React.createElement(CloseButton, { onClick: props.onClose })))
    }
  );
}
function ConditionalSubmissionProgress(props) {
  const isSmallScreen = useIsMobile();
  const outerStyle = {
    position: "relative",
    display: props.promise ? "flex" : "none",
    width: "100%",
    height: "100%",
    alignItems: "center",
    background: "#fcfcfc",
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: isSmallScreen ? void 0 : 24,
    marginTop: isSmallScreen ? void 0 : 24
  };
  const innerStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  };
  return /* @__PURE__ */ React.createElement("div", { style: outerStyle }, /* @__PURE__ */ React.createElement(Zoom, { in: Boolean(props.promise) }, /* @__PURE__ */ React.createElement("div", { style: innerStyle }, props.promise ? /* @__PURE__ */ React.createElement(
    SubmissionProgress,
    {
      onClose: props.onClose,
      onRetry: props.onRetry,
      promise: props.promise,
      type: props.type
    }
  ) : null)));
}
class TransactionSender extends React.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      confirmationDialogOpen: false,
      passwordError: null,
      signatureRequest: null,
      submissionStatus: "before",
      submissionType: SubmissionType.default,
      submissionPromise: null,
      submissionSuccessCallbacks: [],
      submissionClosedCallbacks: [],
      signedTransaction: null,
      unsignedTransaction: null
    });
    __publicField(this, "submissionTimeouts", []);
    __publicField(this, "setTransaction", (transaction, signatureRequest = null) => {
      this.setState({ confirmationDialogOpen: true, signatureRequest, unsignedTransaction: transaction });
      return new Promise((resolve, reject) => {
        this.setState((state) => ({
          submissionSuccessCallbacks: [...state.submissionSuccessCallbacks, resolve],
          submissionClosedCallbacks: [...state.submissionClosedCallbacks, reject]
        }));
      });
    });
    __publicField(this, "triggerSubmissionSuccessCallbacks", () => {
      const callbacks = this.state.submissionSuccessCallbacks;
      this.setState({ submissionSuccessCallbacks: [] });
      for (const callback of callbacks) {
        callback();
      }
    });
    __publicField(this, "triggerSubmissionClosedCallbacks", () => {
      const callbacks = this.state.submissionClosedCallbacks;
      this.setState({ submissionClosedCallbacks: [] });
      for (const callback of callbacks) {
        callback();
      }
    });
    __publicField(this, "onConfirmationDrawerCloseRequest", () => {
      if (!this.state.submissionPromise || this.state.submissionStatus !== "pending") {
        this.clearSubmissionPromise();
      }
      if (this.props.onCloseTransactionDialog) {
        this.props.onCloseTransactionDialog();
      }
      this.triggerSubmissionClosedCallbacks();
    });
    __publicField(this, "clearSubmissionPromise", () => {
      this.setState({
        confirmationDialogOpen: false,
        submissionPromise: null
      });
    });
    __publicField(this, "setSubmissionPromise", (submissionPromise) => {
      this.setState({ submissionPromise, submissionStatus: "pending" });
      submissionPromise.then(() => {
        this.setState({ submissionStatus: "fulfilled" });
        this.triggerSubmissionSuccessCallbacks();
        this.submissionTimeouts.push(
          setTimeout(() => {
            this.setState({ confirmationDialogOpen: false });
          }, 1200)
        );
      });
      submissionPromise.catch(() => {
        this.setState({ submissionStatus: "rejected" });
      });
    });
    __publicField(this, "submitTransaction", async (transaction, formValues) => {
      const unsignedTx = transaction;
      let signedTx;
      try {
        signedTx = await signTransaction(transaction, this.props.account, formValues.password);
        this.setState({ passwordError: null, signedTransaction: signedTx, unsignedTransaction: unsignedTx });
        return this.submitSignedTransaction(signedTx, unsignedTx);
      } catch (error) {
        if (isWrongPasswordError(error)) {
          this.setState({ passwordError: error });
          return;
        } else {
          throw error;
        }
      }
    });
    __publicField(this, "submitSignedTransaction", async (signedTx, unsignedTx) => {
      var _a;
      const {
        account: account2,
        completionCallbackDelay = 1e3,
        horizon,
        onSubmissionCompleted = () => void 0,
        onSubmissionFailure
      } = this.props;
      try {
        const thirdPartySecurityService = await isThirdPartyProtected(horizon, account2.accountID);
        if (thirdPartySecurityService) {
          await this.submitTransactionToThirdPartyService(signedTx, thirdPartySecurityService);
        } else if (this.state.signatureRequest && (this.state.signatureRequest.status === "ready" || this.state.signatureRequest.status === "failed") && !this.state.signatureRequest.external) {
          await this.submitMultisigTransactionToStellarNetwork(this.state.signatureRequest);
        } else if (
          // handle edge case where a signature request was created from a source account
          // with master weight set to 0 --> request should be submitted to multisig service
          // although it does not require remote signatures
          ((_a = this.state.signatureRequest) == null ? void 0 : _a.status) === "pending" || await requiresRemoteSignatures(horizon, signedTx, account2.publicKey)
        ) {
          await this.submitTransactionToMultisigService(signedTx, unsignedTx);
        } else if (!this.state.signatureRequest || !this.state.signatureRequest.external) {
          await this.submitTransactionToHorizon(signedTx);
        }
        setTimeout(() => {
          this.clearSubmissionPromise();
        }, 1e3);
        setTimeout(() => {
          this.setState({ signedTransaction: null });
          onSubmissionCompleted(signedTx);
        }, completionCallbackDelay);
      } catch (error) {
        if (onSubmissionFailure) {
          onSubmissionFailure(error, signedTx);
        }
      }
    });
    __publicField(this, "submitMultisigTransactionToStellarNetwork", async (signatureRequest) => {
      const { netWorker } = await workers;
      const promise = netWorker.submitMultisigTransactionToStellarNetwork(signatureRequest).then((response) => {
        if (response.status !== 200) {
          throw explainSubmissionErrorResponse(response, this.props.t);
        }
        return response;
      });
      this.setSubmissionPromise(promise);
      this.setState({ submissionType: SubmissionType.default });
      return promise;
    });
    __publicField(this, "submitTransactionToHorizon", async (signedTransaction) => {
      const { netWorker } = await workers;
      const network = this.props.account.testnet ? libExports$1.Networks.TESTNET : libExports$1.Networks.PUBLIC;
      const txEnvelopeXdr = signedTransaction.toEnvelope().toXDR().toString("base64");
      const promise = netWorker.submitTransaction(String(this.props.horizon.serverURL), txEnvelopeXdr, network).then((response) => {
        if (response.status !== 200) {
          throw explainSubmissionErrorResponse(response, this.props.t);
        }
        return response;
      });
      this.setSubmissionPromise(promise);
      this.setState({ submissionType: SubmissionType.default });
      return promise;
    });
    __publicField(this, "submitTransactionToMultisigService", async (signedTransaction, unsignedTransaction) => {
      const { netWorker } = await workers;
      try {
        let promise;
        const multiSignatureServiceURL = await resolveMultiSignatureCoordinator(
          this.props.settings.multiSignatureCoordinator
        );
        if (this.state.signatureRequest) {
          promise = netWorker.submitSignature(this.state.signatureRequest, signedTransaction.toEnvelope().toXDR("base64"));
        } else {
          if (signedTransaction.signatures.length !== 1) {
            throw Error(
              `Internal error: Expected exactly one signature on new multi-sig transaction. Got ${signedTransaction.signatures.length}.`
            );
          }
          const signatureXDR = signedTransaction.signatures[0].signature().toString("base64");
          promise = netWorker.shareTransaction(
            multiSignatureServiceURL,
            this.props.account.publicKey,
            this.props.account.testnet,
            unsignedTransaction.toEnvelope().toXDR("base64"),
            signatureXDR
          );
        }
        this.setSubmissionPromise(promise);
        this.setState({ submissionType: SubmissionType.multisig });
        const result = await promise;
        if (result.submittedToStellarNetwork) {
          this.setState({ submissionType: SubmissionType.default });
        }
        return result;
      } catch (error) {
        throw explainSubmissionErrorResponse(error, this.props.t);
      }
    });
    __publicField(this, "submitTransactionToThirdPartyService", async (signedTransaction, service) => {
      try {
        const promise = submitTransactionToThirdPartyService(signedTransaction, service, this.props.account.testnet);
        this.setSubmissionPromise(promise);
        this.setState({ submissionType: SubmissionType.thirdParty });
        return await promise;
      } catch (error) {
        throw explainSubmissionErrorResponse(error, this.props.t);
      }
    });
    __publicField(this, "retrySubmission", async () => {
      if (this.state.signedTransaction && this.state.unsignedTransaction) {
        return this.submitSignedTransaction(this.state.signedTransaction, this.state.unsignedTransaction);
      }
    });
  }
  componentWillUnmount() {
    for (const timeout of this.submissionTimeouts) {
      clearTimeout(timeout);
    }
  }
  render() {
    const {
      confirmationDialogOpen,
      passwordError,
      signatureRequest,
      submissionPromise,
      unsignedTransaction: transaction
    } = this.state;
    const content = this.props.children({
      horizon: this.props.horizon,
      sendTransaction: this.setTransaction
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, content, /* @__PURE__ */ React.createElement(
      TransactionReviewDialog$1,
      {
        open: confirmationDialogOpen && !this.props.forceClose,
        account: this.props.account,
        disabled: !transaction || hasSigned(transaction, this.props.account.publicKey, signatureRequest) && (signatureRequest == null ? void 0 : signatureRequest.status) !== "ready" && (signatureRequest == null ? void 0 : signatureRequest.status) !== "failed",
        passwordError: passwordError ? new Error(getErrorTranslation(passwordError, this.props.t)) : void 0,
        showHash: false,
        showSource: transaction ? this.props.account.publicKey !== transaction.source : void 0,
        showSubmissionProgress: Boolean(submissionPromise),
        signatureRequest: signatureRequest || void 0,
        transaction,
        onClose: this.onConfirmationDrawerCloseRequest,
        onSubmitTransaction: this.submitTransaction,
        submissionProgress: /* @__PURE__ */ React.createElement(
          ConditionalSubmissionProgress,
          {
            onClose: this.onConfirmationDrawerCloseRequest,
            onRetry: this.retrySubmission,
            promise: submissionPromise,
            type: this.state.submissionType
          }
        )
      }
    ));
  }
}
function TransactionSenderWithHorizon(props) {
  const horizon = useHorizon(props.account.testnet);
  const settings2 = React.useContext(SettingsContext);
  return /* @__PURE__ */ React.createElement(Translation, null, (t2) => /* @__PURE__ */ React.createElement(TransactionSender, { ...props, horizon, settings: settings2, t: t2 }));
}
const TransactionSender$1 = React.memo(TransactionSenderWithHorizon);
var AccountBox = {};
var hasRequiredAccountBox;
function requireAccountBox() {
  if (hasRequiredAccountBox) return AccountBox;
  hasRequiredAccountBox = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(AccountBox, "__esModule", {
    value: true
  });
  AccountBox.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"
  }), "AccountBox");
  AccountBox.default = _default;
  return AccountBox;
}
var AccountBoxExports = /* @__PURE__ */ requireAccountBox();
const AccountBoxIcon = /* @__PURE__ */ getDefaultExportFromCjs(AccountBoxExports);
function LumenIcon(props) {
  return /* @__PURE__ */ reactExports.createElement(SvgIcon, { viewBox: "0 0 236.36 200", ...props }, /* @__PURE__ */ reactExports.createElement("path", { d: "M203 26.16l-28.46 14.5-137.43 70a82.49 82.49 0 01-.7-10.69A81.87 81.87 0 01158.2 28.6l16.29-8.3 2.43-1.24A100 100 0 0018.18 100q0 3.82.29 7.61a18.19 18.19 0 01-9.88 17.58L0 129.57V150l25.29-12.89 8.19-4.18 8.07-4.11L186.43 55l16.28-8.29 33.65-17.15V9.14zM236.36 50L49.78 145l-16.28 8.31L0 170.38v20.41l33.27-16.95 28.46-14.5 137.57-70.1A83.45 83.45 0 01200 100a81.87 81.87 0 01-121.91 71.36l-1 .53-17.66 9A100 100 0 00218.18 100c0-2.57-.1-5.14-.29-7.68a18.2 18.2 0 019.87-17.58l8.6-4.38z" }));
}
const paddedAssetIconsRegex = /bitbondsto\.com/;
const useAssetLogoStyles = makeStyles$1({
  imageAvatar: {
    backgroundColor: "white",
    boxShadow: "0px 0px 2px 1px #888888"
  },
  textAvatar: {
    background: `linear-gradient(145deg, ${brandColor.main} 0%, ${brandColor.dark} 35%, ${brandColor.dark} 75%, ${brandColor.main} 100%)`,
    border: "1px solid rgba(0, 0, 0, 0.66)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: 500
  },
  longCodeTextAvatar: {
    justifyContent: "flex-start",
    padding: "0 2px"
  },
  darkTextAvatar: {
    background: brandColor.dark,
    border: `1px solid ${brandColor.main15}`
  },
  xlmAvatar: {
    background: "white",
    boxSizing: "border-box",
    color: "black",
    fontSize: 12,
    padding: "0.5em"
  },
  icon: {
    width: "100%",
    height: "100%"
  },
  padding: {
    width: "75%",
    height: "75%"
  }
});
function AssetLogo(props) {
  const className = props.className || "";
  const classes = useAssetLogoStyles();
  if (props.asset.isNative()) {
    return /* @__PURE__ */ React.createElement(Avatar$1, { alt: "Stellar Lumens (XLM)", className: `${className} ${classes.xlmAvatar}`, style: props.style }, /* @__PURE__ */ React.createElement(LumenIcon, { className: classes.icon }));
  } else {
    const applyPadding = props.imageURL && props.imageURL.match(paddedAssetIconsRegex);
    const assetCode = props.asset.code.length < 5 ? props.asset.code : props.asset.code.substr(0, 2) + props.asset.code.substr(-2);
    const avatarClassName = [
      className,
      props.imageURL ? classes.imageAvatar : classes.textAvatar,
      props.dark && !props.imageURL ? classes.darkTextAvatar : ""
    ].join(" ");
    const iconClassName = [classes.icon, applyPadding ? classes.padding : ""].join(" ");
    return /* @__PURE__ */ React.createElement(Avatar$1, { alt: name, className: avatarClassName, style: props.style }, props.imageURL ? /* @__PURE__ */ React.createElement("img", { className: iconClassName, src: props.imageURL }) : assetCode);
  }
}
function SuspendingAssetLogo(props) {
  const metadata = useAssetMetadata(props.asset, props.testnet);
  return /* @__PURE__ */ React.createElement(AssetLogo, { ...props, imageURL: metadata ? metadata.image : void 0 });
}
function AssetLogoWithFallback(props) {
  return /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(AssetLogo, { ...props }) }, /* @__PURE__ */ React.createElement(SuspendingAssetLogo, { ...props }));
}
const AssetLogo$1 = React.memo(AssetLogoWithFallback);
const useAssetItemStyles = makeStyles((theme2) => ({
  icon: {
    [theme2.breakpoints.up(600)]: {
      minWidth: 48
    }
  },
  logo: {
    width: 32,
    height: 32,
    [theme2.breakpoints.up(600)]: {
      width: 28,
      height: 28
    }
  }
}));
const AssetItem = React.memo(
  React.forwardRef(function AssetItem2(props, ref) {
    const classes = useAssetItemStyles();
    const { testnet, ...reducedProps } = props;
    return /* @__PURE__ */ React.createElement(MenuItem$1, { ...reducedProps, key: props.key, ref, value: props.value }, /* @__PURE__ */ React.createElement(ListItemIcon$1, { className: classes.icon }, /* @__PURE__ */ React.createElement(AssetLogo$1, { asset: props.asset, className: classes.logo, testnet: props.testnet })), /* @__PURE__ */ React.createElement(ListItemText, null, props.asset.getCode()));
  })
);
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
});
function AssetSelector(props) {
  const { onChange } = props;
  const classes = useAssetSelectorStyles();
  const assets = React.useMemo(
    () => [
      libExports$1.Asset.native(),
      ...props.assets.map(
        (asset) => "code" in asset && "issuer" in asset ? asset : balancelineToAsset(asset)
      )
    ],
    [props.assets]
  );
  const handleChange = React.useCallback(
    (event, child) => {
      const matchingAsset = assets.find((asset) => asset.equals(child.props.asset));
      if (matchingAsset) {
        if (onChange) {
          onChange(matchingAsset);
        }
      } else {
        console.error(
          `Invariant violation: Trustline ${child.props.asset.getCode()} selected, but no matching asset found.`
        );
      }
    },
    [assets, onChange]
  );
  return /* @__PURE__ */ React.createElement(
    TextField,
    {
      autoFocus: props.autoFocus,
      className: props.className,
      disabled: props.disabled,
      error: Boolean(props.inputError),
      helperText: props.helperText,
      label: props.inputError ? props.inputError : props.label,
      margin: props.margin,
      onChange: handleChange,
      name: props.name,
      placeholder: "Select an asset",
      select: true,
      style: { flexShrink: 0, ...props.style },
      value: props.value ? props.value.getCode() : "",
      FormHelperTextProps: {
        className: classes.helperText
      },
      InputProps: {
        classes: {
          root: classes.input
        },
        style: {
          minWidth: props.minWidth
        }
      },
      SelectProps: {
        classes: {
          root: props.value ? void 0 : classes.unselected,
          select: classes.select
        },
        displayEmpty: !props.value,
        disableUnderline: props.disableUnderline,
        renderValue: () => props.value ? props.value.getCode() : "Select"
      }
    },
    props.value ? null : /* @__PURE__ */ React.createElement(MenuItem$1, { disabled: true, value: "" }, "Select an asset"),
    props.showXLM ? /* @__PURE__ */ React.createElement(
      AssetItem,
      {
        asset: libExports$1.Asset.native(),
        disabled: props.disabledAssets && props.disabledAssets.some((someAsset) => someAsset.isNative()),
        key: stringifyAsset(libExports$1.Asset.native()),
        testnet: props.testnet,
        value: libExports$1.Asset.native().getCode()
      }
    ) : null,
    assets.filter((asset) => !asset.isNative()).map((asset) => /* @__PURE__ */ React.createElement(
      AssetItem,
      {
        asset,
        disabled: props.disabledAssets && props.disabledAssets.some((someAsset) => someAsset.equals(asset)),
        key: stringifyAsset(asset),
        testnet: props.testnet,
        value: asset.getCode()
      }
    ))
  );
}
const AssetSelector$1 = React.memo(AssetSelector);
const isValidAmount = (amount) => /^[0-9]*([\.,][0-9]+)?$/.test(amount);
function replaceCommaWithDot(input) {
  return input.replace(/,/g, ".");
}
function FormBigNumber(value) {
  return typeof value === "string" ? Big(replaceCommaWithDot(value)) : Big(value);
}
function createMemo(memoType, memoValue) {
  switch (memoType) {
    case "id":
      return libExports$1.Memo.id(memoValue);
    case "text":
      return libExports$1.Memo.text(memoValue);
    default:
      return libExports$1.Memo.none();
  }
}
const PaymentForm = React.memo(function PaymentForm2(props) {
  const isSmallScreen = useIsMobile();
  const formID = React.useMemo(() => nanoid(), []);
  const { t: t2 } = useTranslation();
  const wellknownAccounts = useWellKnownAccounts(props.testnet);
  const [matchingWellknownAccount, setMatchingWellknownAccount] = React.useState(void 0);
  const [memoType, setMemoType] = React.useState("none");
  const [memoMetadata, setMemoMetadata] = React.useState({
    label: t2("payment.memo-metadata.label.default"),
    placeholder: t2("payment.memo-metadata.placeholder.optional"),
    requiredType: void 0
  });
  const [callback, setCallback] = React.useState("");
  const [payStellarUri, setPayStellarUri] = React.useState();
  const form = useForm({
    defaultValues: {
      amount: "",
      asset: void 0,
      destination: "",
      memoValue: ""
    }
  });
  const formValues = form.watch();
  const { preselectedParams } = props;
  const { setValue } = form;
  const spendableBalance = getSpendableBalance(
    getAccountMinimumBalance(props.accountData),
    findMatchingBalanceLine(props.accountData.balances, formValues.asset)
  );
  React.useEffect(() => {
    if (!preselectedParams) return;
    if (preselectedParams.amount) setValue("amount", preselectedParams.amount);
    if (preselectedParams.asset) setValue("asset", preselectedParams.asset);
    if (preselectedParams.destination) setValue("destination", preselectedParams.destination);
    if (preselectedParams.memo) setValue("memoValue", preselectedParams.memo);
  }, [preselectedParams, setValue]);
  React.useEffect(() => {
    if (!isPublicKey(formValues.destination) && !isStellarAddress(formValues.destination)) {
      if (matchingWellknownAccount) {
        setMatchingWellknownAccount(void 0);
      }
      return;
    }
    const knownAccount = wellknownAccounts.lookup(formValues.destination);
    setMatchingWellknownAccount(knownAccount);
    if (preselectedParams && preselectedParams.memo && preselectedParams.memoType) {
      setMemoType(preselectedParams.memoType);
      setMemoMetadata({
        label: preselectedParams.memoType === "id" ? t2("payment.memo-metadata.label.id") : t2("payment.memo-metadata.label.text"),
        placeholder: t2("payment.memo-metadata.placeholder.mandatory"),
        requiredType: preselectedParams.memoType
      });
    } else if (knownAccount && knownAccount.tags.indexOf("exchange") !== -1) {
      const acceptedMemoType = knownAccount.accepts && knownAccount.accepts.memo;
      const requiredType = acceptedMemoType === "MEMO_ID" ? "id" : "text";
      setMemoType(requiredType);
      setMemoMetadata({
        label: acceptedMemoType === "MEMO_ID" ? t2("payment.memo-metadata.label.id") : t2("payment.memo-metadata.label.text"),
        placeholder: t2("payment.memo-metadata.placeholder.mandatory"),
        requiredType
      });
    } else {
      setMemoType(formValues.memoValue.length === 0 ? "none" : "text");
      setMemoMetadata({
        label: t2("payment.memo-metadata.label.default"),
        placeholder: t2("payment.memo-metadata.placeholder.optional"),
        requiredType: void 0
      });
    }
  }, [
    formValues.destination,
    formValues.memoValue,
    matchingWellknownAccount,
    memoType,
    preselectedParams,
    t2,
    wellknownAccounts
  ]);
  const handleFormSubmission = () => {
    props.onSubmit({ memoType, ...form.getValues() }, spendableBalance, matchingWellknownAccount);
  };
  const handlePaymentLink = React.useCallback((uri) => {
    setValue("destination", uri.destination);
    setPayStellarUri(uri);
    if (uri.amount) {
      setValue("amount", uri.amount);
    }
    if (uri.assetCode && uri.assetIssuer) {
      setValue("asset", new libExports$1.Asset(uri.assetCode, uri.assetIssuer));
    }
    if (uri.memo) {
      setMemoType(uri.memoType || "text");
      setValue("memoValue", uri.memo);
    }
    if (uri.callback) {
      setCallback(uri.callback);
    }
  }, []);
  const handleQRScan = React.useCallback(
    (scanResult) => {
      if (isStellarUri(scanResult)) {
        const stellarUri = parseStellarUri(scanResult);
        if (stellarUri.operation === StellarUriType.Pay) {
          handlePaymentLink(stellarUri);
        }
        form.triggerValidation();
        return;
      }
      const [destination, query] = scanResult.split("?");
      if (isStellarAddress(destination)) {
        setValue("destination", destination);
        if (!query) {
          return;
        }
        const searchParams = new URLSearchParams(query);
        const memoValue = searchParams.get("dt");
        if (memoValue) {
          setMemoType("id");
          setValue("memoValue", memoValue);
        }
      }
    },
    [setValue, form]
  );
  const { openSavedAddresses } = React.useContext(DialogsContext);
  const handleOnSavedAddressClick = React.useCallback(
    (address) => {
      form.setValue("destination", address);
      form.triggerValidation("destination");
      openSavedAddresses(null);
    },
    [form]
  );
  const handleContractListClick = React.useCallback(() => {
    openSavedAddresses({
      onSelect: handleOnSavedAddressClick
    });
  }, []);
  const qrReaderAdornment = React.useMemo(
    () => /* @__PURE__ */ React.createElement(InputAdornment, { disableTypography: true, position: "end" }, /* @__PURE__ */ React.createElement(QRReader, { onScan: handleQRScan }), /* @__PURE__ */ React.createElement(AccountBoxIcon, { onClick: handleContractListClick, style: { cursor: "pointer" } })),
    [handleQRScan, handleContractListClick]
  );
  const destinationInput = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      TextField,
      {
        autoFocus: true,
        disabled: Boolean(preselectedParams == null ? void 0 : preselectedParams.destination),
        error: Boolean(form.errors.destination),
        fullWidth: true,
        inputProps: {
          style: { textOverflow: "ellipsis" }
        },
        InputProps: {
          endAdornment: !Boolean(preselectedParams == null ? void 0 : preselectedParams.destination) ? qrReaderAdornment : void 0
        },
        inputRef: form.register({
          required: t2("payment.validation.no-destination"),
          validate: (value) => isPublicKey(value) || isMuxedAddress(value) || isStellarAddress(value) || t2("payment.validation.invalid-destination")
        }),
        label: form.errors.destination ? form.errors.destination.message : t2("payment.inputs.destination.label"),
        margin: "normal",
        name: "destination",
        onChange: (event) => setValue("destination", event.target.value.trim()),
        placeholder: t2("payment.inputs.destination.placeholder")
      }
    ),
    [form, qrReaderAdornment, preselectedParams, setValue, t2]
  );
  const assetSelector = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      Controller,
      {
        as: /* @__PURE__ */ React.createElement(
          AssetSelector$1,
          {
            assets: props.accountData.balances,
            disableUnderline: true,
            disabled: Boolean(preselectedParams == null ? void 0 : preselectedParams.asset),
            showXLM: true,
            style: { alignSelf: "center" },
            testnet: props.testnet,
            value: formValues.asset
          }
        ),
        control: form.control,
        name: "asset"
      }
    ),
    [form, formValues.asset, preselectedParams, props.accountData.balances, props.testnet]
  );
  const maxSendButton = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      ButtonBase,
      {
        onClick: () => {
          form.setValue("amount", spendableBalance.toString());
          form.triggerValidation("amount");
        },
        style: { fontSize: "inherit", fontWeight: "inherit", textAlign: "inherit" }
      },
      t2("payment.inputs.price.placeholder"),
      " ",
      formatBalance(spendableBalance.toString())
    ),
    [form, spendableBalance, t2]
  );
  const priceInput = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      PriceInput,
      {
        assetCode: assetSelector,
        disabled: Boolean(preselectedParams == null ? void 0 : preselectedParams.amount),
        error: Boolean(form.errors.amount),
        inputRef: form.register({
          required: t2("payment.validation.no-price"),
          validate: (value) => {
            if (!form.getValues()["asset"]) {
              return t2("payment.validation.asset-missing");
            }
            if (!isValidAmount(value) || FormBigNumber(value).eq(0)) {
              return t2("payment.validation.invalid-price");
            } else if (FormBigNumber(value).gt(spendableBalance)) {
              return t2("payment.validation.not-enough-funds");
            } else {
              return void 0;
            }
          }
        }),
        label: form.errors.amount ? form.errors.amount.message : t2("payment.inputs.price.label"),
        margin: "normal",
        name: "amount",
        placeholder: t2("payment.inputs.price.label"),
        helperText: form.getValues()["asset"] ? maxSendButton : null,
        style: {
          flexGrow: isSmallScreen ? 1 : void 0,
          marginLeft: 24,
          marginRight: 24,
          minWidth: 230,
          maxWidth: isSmallScreen ? void 0 : "60%"
        }
      }
    ),
    [assetSelector, form, isSmallScreen, preselectedParams, spendableBalance, t2]
  );
  const memoInput = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      TextField,
      {
        disabled: Boolean(preselectedParams == null ? void 0 : preselectedParams.memo),
        error: Boolean(form.errors.memoValue),
        inputProps: { maxLength: 28 },
        label: form.errors.memoValue ? form.errors.memoValue.message : memoMetadata.label,
        margin: "normal",
        name: "memoValue",
        inputRef: form.register({
          validate: {
            length: (value) => value.length <= 28 || t2("payment.validation.memo-too-long"),
            memoRequired: (value) => !memoMetadata.requiredType || !matchingWellknownAccount || value.length > 0 || t2(
              "payment.validation.memo-required",
              `Set a memo when sending funds to ${matchingWellknownAccount.name}`,
              {
                destination: matchingWellknownAccount.name
              }
            ),
            idPattern: (value) => memoType !== "id" || value.match(/^[0-9]+$/) || t2("payment.validation.integer-memo-required")
          }
        }),
        onChange: (event) => {
          const { value } = event.target;
          if (!memoMetadata.requiredType) {
            const newMemoType = value.length === 0 ? "none" : "text";
            setMemoType(newMemoType);
          }
          setValue("memoValue", value);
        },
        placeholder: memoMetadata.placeholder,
        style: {
          flexGrow: 1,
          marginLeft: 24,
          marginRight: 24,
          minWidth: 230
        }
      }
    ),
    [
      form,
      memoType,
      matchingWellknownAccount,
      memoMetadata.label,
      memoMetadata.placeholder,
      memoMetadata.requiredType,
      preselectedParams,
      setValue,
      t2
    ]
  );
  const dialogActions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 64 } }, props.onCancel && /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(CloseIcon, { style: { fontSize: 16 } }), onClick: props.onCancel }, t2("payment.actions.dismiss")), /* @__PURE__ */ React.createElement(
      ActionButton,
      {
        form: formID,
        icon: /* @__PURE__ */ React.createElement(SendIcon, { style: { fontSize: 16 } }),
        loading: props.txCreationPending,
        onClick: () => void 0,
        type: "submit"
      },
      t2("payment.actions.submit")
    )),
    [formID, props.onCancel, props.txCreationPending, t2]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { id: formID, noValidate: true, onSubmit: form.handleSubmit(handleFormSubmission) }, destinationInput, /* @__PURE__ */ React.createElement(HorizontalLayout, { justifyContent: "space-between", alignItems: "top", margin: "0 -24px", wrap: "wrap" }, priceInput, memoInput), callback && /* @__PURE__ */ React.createElement(Typography, null, "callback: ", callback), /* @__PURE__ */ React.createElement(Portal$1, { target: props.actionsRef.element }, dialogActions)));
});
function PaymentFormContainer(props) {
  const { lookupFederationRecord } = useFederationLookup();
  const createPaymentTx = async (horizon, account2, formValues) => {
    const asset = props.trustedAssets.find((trustedAsset) => trustedAsset.equals(formValues.asset));
    const federationRecord = formValues.destination.indexOf("*") > -1 ? await lookupFederationRecord(formValues.destination) : null;
    const destination = federationRecord ? federationRecord.account_id : formValues.destination;
    const userMemo = createMemo(formValues.memoType, formValues.memoValue);
    const federationMemo = federationRecord && federationRecord.memo && federationRecord.memo_type ? new libExports$1.Memo(federationRecord.memo_type, federationRecord.memo) : libExports$1.Memo.none();
    if (userMemo.type !== "none" && federationMemo.type !== "none") {
      throw CustomError(
        "MemoAlreadySpecifiedError",
        `Cannot set a custom memo. Federation record of ${formValues.destination} already specifies memo.`,
        { destination: formValues.destination }
      );
    }
    const isMultisigTx = props.accountData.signers.length > 1;
    const payment = await createPaymentOperation({
      asset: asset || libExports$1.Asset.native(),
      amount: replaceCommaWithDot(formValues.amount),
      destination,
      horizon
    });
    const tx = await createTransaction([payment], {
      accountData: props.accountData,
      memo: federationMemo.type !== "none" ? federationMemo : userMemo,
      minTransactionFee: isMultisigTx ? multisigMinimumFee : 0,
      horizon,
      walletAccount: account2
    });
    return tx;
  };
  const submitForm = (formValues) => {
    props.onSubmit(async (horizon, account2) => {
      var _a, _b, _c;
      const tx = await createPaymentTx(horizon, account2, formValues);
      if ((_b = (_a = props.preselectedParams) == null ? void 0 : _a.payStellarUri) == null ? void 0 : _b.callback) {
        const signatureRequest = {
          created_at: Date.now().toString(),
          cursor: "",
          hash: tx.toXDR(),
          req: (_c = props.preselectedParams) == null ? void 0 : _c.payStellarUri.toString(),
          status: MultisigTransactionStatus.pending,
          signed_by: [],
          signers: [],
          updated_at: Date.now().toString(),
          external: true
        };
        return {
          tx,
          signatureRequest
        };
      } else {
        return { tx };
      }
    });
  };
  return /* @__PURE__ */ React.createElement(PaymentForm, { ...props, onSubmit: submitForm });
}
const PaymentForm$1 = React.memo(PaymentFormContainer);
function PaymentDialog(props) {
  const { sendTransaction } = props;
  const dialogActionsRef = useDialogActions();
  const { t: t2 } = useTranslation();
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const handleSubmit = React.useCallback(
    async (createTx) => {
      try {
        setTxCreationPending(true);
        const { tx, signatureRequest } = await createTx(props.horizon, props.account);
        setTxCreationPending(false);
        await sendTransaction(tx, signatureRequest);
      } catch (error) {
        trackError(error);
      } finally {
        setTxCreationPending(false);
      }
    },
    [props.account, props.horizon, sendTransaction]
  );
  const trustedAssets = React.useMemo(() => getAssetsFromBalances(props.accountData.balances) || [libExports$1.Asset.native()], [
    props.accountData.balances
  ]);
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      top: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          title: /* @__PURE__ */ React.createElement("span", null, t2("payment.title.send"), props.account.testnet ? /* @__PURE__ */ React.createElement(TestnetBadge, { style: { marginLeft: 8 } }) : null),
          onBack: props.onClose
        }
      ), /* @__PURE__ */ React.createElement(LazyScrollableBalances, { account: props.account, compact: true })),
      actions: dialogActionsRef
    },
    /* @__PURE__ */ React.createElement(Box$1, { margin: "24px 0 0" }, null),
    /* @__PURE__ */ React.createElement(
      PaymentForm$1,
      {
        accountData: props.accountData,
        actionsRef: dialogActionsRef,
        onSubmit: handleSubmit,
        openOrdersCount: props.openOrdersCount,
        testnet: props.account.testnet,
        trustedAssets,
        txCreationPending
      }
    )
  );
}
function ConnectedPaymentDialog(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const { offers: openOrders } = useLiveAccountOffers(props.account.accountID, props.account.testnet);
  return /* @__PURE__ */ React.createElement(TransactionSender$1, { account: props.account, onSubmissionCompleted: props.onSubmissionCompleted || props.onClose }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(
    PaymentDialog,
    {
      ...props,
      accountData,
      horizon,
      openOrdersCount: openOrders.length,
      sendTransaction
    }
  ));
}
var mode;
var hasRequiredMode;
function requireMode() {
  if (hasRequiredMode) return mode;
  hasRequiredMode = 1;
  mode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
  };
  return mode;
}
var _8BitByte;
var hasRequired_8BitByte;
function require_8BitByte() {
  if (hasRequired_8BitByte) return _8BitByte;
  hasRequired_8BitByte = 1;
  var mode2 = requireMode();
  function QR8bitByte(data) {
    this.mode = mode2.MODE_8BIT_BYTE;
    this.data = data;
  }
  QR8bitByte.prototype = {
    getLength: function(buffer) {
      return this.data.length;
    },
    write: function(buffer) {
      for (var i = 0; i < this.data.length; i++) {
        buffer.put(this.data.charCodeAt(i), 8);
      }
    }
  };
  _8BitByte = QR8bitByte;
  return _8BitByte;
}
var ErrorCorrectLevel;
var hasRequiredErrorCorrectLevel;
function requireErrorCorrectLevel() {
  if (hasRequiredErrorCorrectLevel) return ErrorCorrectLevel;
  hasRequiredErrorCorrectLevel = 1;
  ErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  };
  return ErrorCorrectLevel;
}
var RSBlock;
var hasRequiredRSBlock;
function requireRSBlock() {
  if (hasRequiredRSBlock) return RSBlock;
  hasRequiredRSBlock = 1;
  var ECL = requireErrorCorrectLevel();
  function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  QRRSBlock.RS_BLOCK_TABLE = [
    // L
    // M
    // Q
    // H
    // 1
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    // 4		
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    // 7		
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    // 10		
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ];
  QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == void 0) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var list = new Array();
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var totalCount = rsBlock[i * 3 + 1];
      var dataCount = rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }
    return list;
  };
  QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case ECL.L:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case ECL.M:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case ECL.Q:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case ECL.H:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return void 0;
    }
  };
  RSBlock = QRRSBlock;
  return RSBlock;
}
var BitBuffer;
var hasRequiredBitBuffer;
function requireBitBuffer() {
  if (hasRequiredBitBuffer) return BitBuffer;
  hasRequiredBitBuffer = 1;
  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function(index) {
      var bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit((num >>> length - i - 1 & 1) == 1);
      }
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  BitBuffer = QRBitBuffer;
  return BitBuffer;
}
var math;
var hasRequiredMath;
function requireMath() {
  if (hasRequiredMath) return math;
  hasRequiredMath = 1;
  var QRMath = {
    glog: function(n2) {
      if (n2 < 1) {
        throw new Error("glog(" + n2 + ")");
      }
      return QRMath.LOG_TABLE[n2];
    },
    gexp: function(n2) {
      while (n2 < 0) {
        n2 += 255;
      }
      while (n2 >= 256) {
        n2 -= 255;
      }
      return QRMath.EXP_TABLE[n2];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  };
  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
  math = QRMath;
  return math;
}
var Polynomial;
var hasRequiredPolynomial;
function requirePolynomial() {
  if (hasRequiredPolynomial) return Polynomial;
  hasRequiredPolynomial = 1;
  var math2 = requireMath();
  function QRPolynomial(num, shift2) {
    if (num.length == void 0) {
      throw new Error(num.length + "/" + shift2);
    }
    var offset2 = 0;
    while (offset2 < num.length && num[offset2] == 0) {
      offset2++;
    }
    this.num = new Array(num.length - offset2 + shift2);
    for (var i = 0; i < num.length - offset2; i++) {
      this.num[i] = num[i + offset2];
    }
  }
  QRPolynomial.prototype = {
    get: function(index) {
      return this.num[index];
    },
    getLength: function() {
      return this.num.length;
    },
    multiply: function(e2) {
      var num = new Array(this.getLength() + e2.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e2.getLength(); j++) {
          num[i + j] ^= math2.gexp(math2.glog(this.get(i)) + math2.glog(e2.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    mod: function(e2) {
      if (this.getLength() - e2.getLength() < 0) {
        return this;
      }
      var ratio = math2.glog(this.get(0)) - math2.glog(e2.get(0));
      var num = new Array(this.getLength());
      for (var i = 0; i < this.getLength(); i++) {
        num[i] = this.get(i);
      }
      for (var i = 0; i < e2.getLength(); i++) {
        num[i] ^= math2.gexp(math2.glog(e2.get(i)) + ratio);
      }
      return new QRPolynomial(num, 0).mod(e2);
    }
  };
  Polynomial = QRPolynomial;
  return Polynomial;
}
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  var Mode = requireMode();
  var Polynomial2 = requirePolynomial();
  var math2 = requireMath();
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var QRUtil = {
    PATTERN_POSITION_TABLE: [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ],
    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    getBCHTypeInfo: function(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    getBCHDigit: function(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    getPatternPosition: function(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    },
    getErrorCorrectPolynomial: function(errorCorrectLength) {
      var a2 = new Polynomial2([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a2 = a2.multiply(new Polynomial2([1, math2.gexp(i)], 0));
      }
      return a2;
    },
    getLengthInBits: function(mode2, type) {
      if (1 <= type && type < 10) {
        switch (mode2) {
          case Mode.MODE_NUMBER:
            return 10;
          case Mode.MODE_ALPHA_NUM:
            return 9;
          case Mode.MODE_8BIT_BYTE:
            return 8;
          case Mode.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + mode2);
        }
      } else if (type < 27) {
        switch (mode2) {
          case Mode.MODE_NUMBER:
            return 12;
          case Mode.MODE_ALPHA_NUM:
            return 11;
          case Mode.MODE_8BIT_BYTE:
            return 16;
          case Mode.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + mode2);
        }
      } else if (type < 41) {
        switch (mode2) {
          case Mode.MODE_NUMBER:
            return 14;
          case Mode.MODE_ALPHA_NUM:
            return 13;
          case Mode.MODE_8BIT_BYTE:
            return 16;
          case Mode.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + mode2);
        }
      } else {
        throw new Error("type:" + type);
      }
    },
    getLostPoint: function(qrCode) {
      var moduleCount = qrCode.getModuleCount();
      var lostPoint = 0;
      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);
          for (var r2 = -1; r2 <= 1; r2++) {
            if (row + r2 < 0 || moduleCount <= row + r2) {
              continue;
            }
            for (var c2 = -1; c2 <= 1; c2++) {
              if (col + c2 < 0 || moduleCount <= col + c2) {
                continue;
              }
              if (r2 == 0 && c2 == 0) {
                continue;
              }
              if (dark == qrCode.isDark(row + r2, col + c2)) {
                sameCount++;
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }
      for (var row = 0; row < moduleCount - 1; row++) {
        for (var col = 0; col < moduleCount - 1; col++) {
          var count = 0;
          if (qrCode.isDark(row, col)) count++;
          if (qrCode.isDark(row + 1, col)) count++;
          if (qrCode.isDark(row, col + 1)) count++;
          if (qrCode.isDark(row + 1, col + 1)) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }
      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount - 6; col++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount - 6; row++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      }
      var darkCount = 0;
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount; row++) {
          if (qrCode.isDark(row, col)) {
            darkCount++;
          }
        }
      }
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    }
  };
  util = QRUtil;
  return util;
}
var QRCode_1;
var hasRequiredQRCode;
function requireQRCode() {
  if (hasRequiredQRCode) return QRCode_1;
  hasRequiredQRCode = 1;
  var BitByte = require_8BitByte();
  var RSBlock2 = requireRSBlock();
  var BitBuffer2 = requireBitBuffer();
  var util2 = requireUtil();
  var Polynomial2 = requirePolynomial();
  function QRCode2(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
  }
  var proto = QRCode2.prototype;
  proto.addData = function(data) {
    var newData = new BitByte(data);
    this.dataList.push(newData);
    this.dataCache = null;
  };
  proto.isDark = function(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + "," + col);
    }
    return this.modules[row][col];
  };
  proto.getModuleCount = function() {
    return this.moduleCount;
  };
  proto.make = function() {
    if (this.typeNumber < 1) {
      var typeNumber = 1;
      for (typeNumber = 1; typeNumber < 40; typeNumber++) {
        var rsBlocks = RSBlock2.getRSBlocks(typeNumber, this.errorCorrectLevel);
        var buffer = new BitBuffer2();
        var totalDataCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) {
          totalDataCount += rsBlocks[i].dataCount;
        }
        for (var i = 0; i < this.dataList.length; i++) {
          var data = this.dataList[i];
          buffer.put(data.mode, 4);
          buffer.put(data.getLength(), util2.getLengthInBits(data.mode, typeNumber));
          data.write(buffer);
        }
        if (buffer.getLengthInBits() <= totalDataCount * 8)
          break;
      }
      this.typeNumber = typeNumber;
    }
    this.makeImpl(false, this.getBestMaskPattern());
  };
  proto.makeImpl = function(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
      for (var col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null;
      }
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }
    if (this.dataCache == null) {
      this.dataCache = QRCode2.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }
    this.mapData(this.dataCache, maskPattern);
  };
  proto.setupPositionProbePattern = function(row, col) {
    for (var r2 = -1; r2 <= 7; r2++) {
      if (row + r2 <= -1 || this.moduleCount <= row + r2) continue;
      for (var c2 = -1; c2 <= 7; c2++) {
        if (col + c2 <= -1 || this.moduleCount <= col + c2) continue;
        if (0 <= r2 && r2 <= 6 && (c2 == 0 || c2 == 6) || 0 <= c2 && c2 <= 6 && (r2 == 0 || r2 == 6) || 2 <= r2 && r2 <= 4 && 2 <= c2 && c2 <= 4) {
          this.modules[row + r2][col + c2] = true;
        } else {
          this.modules[row + r2][col + c2] = false;
        }
      }
    }
  };
  proto.getBestMaskPattern = function() {
    var minLostPoint = 0;
    var pattern = 0;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      var lostPoint = util2.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }
    return pattern;
  };
  proto.createMovieClip = function(target_mc, instance_name, depth) {
    var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
    var cs = 1;
    this.make();
    for (var row = 0; row < this.modules.length; row++) {
      var y = row * cs;
      for (var col = 0; col < this.modules[row].length; col++) {
        var x = col * cs;
        var dark = this.modules[row][col];
        if (dark) {
          qr_mc.beginFill(0, 100);
          qr_mc.moveTo(x, y);
          qr_mc.lineTo(x + cs, y);
          qr_mc.lineTo(x + cs, y + cs);
          qr_mc.lineTo(x, y + cs);
          qr_mc.endFill();
        }
      }
    }
    return qr_mc;
  };
  proto.setupTimingPattern = function() {
    for (var r2 = 8; r2 < this.moduleCount - 8; r2++) {
      if (this.modules[r2][6] != null) {
        continue;
      }
      this.modules[r2][6] = r2 % 2 == 0;
    }
    for (var c2 = 8; c2 < this.moduleCount - 8; c2++) {
      if (this.modules[6][c2] != null) {
        continue;
      }
      this.modules[6][c2] = c2 % 2 == 0;
    }
  };
  proto.setupPositionAdjustPattern = function() {
    var pos = util2.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r2 = -2; r2 <= 2; r2++) {
          for (var c2 = -2; c2 <= 2; c2++) {
            if (r2 == -2 || r2 == 2 || c2 == -2 || c2 == 2 || r2 == 0 && c2 == 0) {
              this.modules[row + r2][col + c2] = true;
            } else {
              this.modules[row + r2][col + c2] = false;
            }
          }
        }
      }
    }
  };
  proto.setupTypeNumber = function(test) {
    var bits = util2.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    }
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  };
  proto.setupTypeInfo = function(test, maskPattern) {
    var data = this.errorCorrectLevel << 3 | maskPattern;
    var bits = util2.getBCHTypeInfo(data);
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
    }
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    this.modules[this.moduleCount - 8][8] = !test;
  };
  proto.mapData = function(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c2 = 0; c2 < 2; c2++) {
          if (this.modules[row][col - c2] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask = util2.getMask(maskPattern, row, col - c2);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c2] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  };
  QRCode2.PAD0 = 236;
  QRCode2.PAD1 = 17;
  QRCode2.createData = function(typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = RSBlock2.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new BitBuffer2();
    for (var i = 0; i < dataList.length; i++) {
      var data = dataList[i];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), util2.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    }
    var totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalDataCount += rsBlocks[i].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCode2.PAD0, 8);
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCode2.PAD1, 8);
    }
    return QRCode2.createBytes(buffer, rsBlocks);
  };
  QRCode2.createBytes = function(buffer, rsBlocks) {
    var offset2 = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r2 = 0; r2 < rsBlocks.length; r2++) {
      var dcCount = rsBlocks[r2].dataCount;
      var ecCount = rsBlocks[r2].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r2] = new Array(dcCount);
      for (var i = 0; i < dcdata[r2].length; i++) {
        dcdata[r2][i] = 255 & buffer.buffer[i + offset2];
      }
      offset2 += dcCount;
      var rsPoly = util2.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new Polynomial2(dcdata[r2], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r2] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r2].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r2].length;
        ecdata[r2][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalCodeCount += rsBlocks[i].totalCount;
    }
    var data = new Array(totalCodeCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r2 = 0; r2 < rsBlocks.length; r2++) {
        if (i < dcdata[r2].length) {
          data[index++] = dcdata[r2][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r2 = 0; r2 < rsBlocks.length; r2++) {
        if (i < ecdata[r2].length) {
          data[index++] = ecdata[r2][i];
        }
      }
    }
    return data;
  };
  QRCode_1 = QRCode2;
  return QRCode_1;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function _extends2() {
    _extends2 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys2 = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys2.forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    }
    return target;
  }
  function _objectWithoutProperties2(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _possibleConstructorReturn(self2, call2) {
    if (call2 && (_typeof2(call2) === "object" || typeof call2 === "function")) {
      return call2;
    }
    return _assertThisInitialized(self2);
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o2, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p2) {
      o3.__proto__ = p2;
      return o3;
    };
    return _setPrototypeOf(o2, p);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var React2 = requireReact();
  var PropTypes = /* @__PURE__ */ requirePropTypes();
  var QRCodeImpl = requireQRCode();
  var ErrorCorrectLevel2 = requireErrorCorrectLevel();
  function convertStr(str) {
    var out = "";
    for (var i = 0; i < str.length; i++) {
      var charcode = str.charCodeAt(i);
      if (charcode < 128) {
        out += String.fromCharCode(charcode);
      } else if (charcode < 2048) {
        out += String.fromCharCode(192 | charcode >> 6);
        out += String.fromCharCode(128 | charcode & 63);
      } else if (charcode < 55296 || charcode >= 57344) {
        out += String.fromCharCode(224 | charcode >> 12);
        out += String.fromCharCode(128 | charcode >> 6 & 63);
        out += String.fromCharCode(128 | charcode & 63);
      } else {
        i++;
        charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
        out += String.fromCharCode(240 | charcode >> 18);
        out += String.fromCharCode(128 | charcode >> 12 & 63);
        out += String.fromCharCode(128 | charcode >> 6 & 63);
        out += String.fromCharCode(128 | charcode & 63);
      }
    }
    return out;
  }
  var DEFAULT_PROPS = {
    size: 128,
    level: "L",
    bgColor: "#FFFFFF",
    fgColor: "#000000",
    includeMargin: false
  };
  var PROP_TYPES = {
    value: PropTypes.string.isRequired,
    size: PropTypes.number,
    level: PropTypes.oneOf(["L", "M", "Q", "H"]),
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    includeMargin: PropTypes.bool
  };
  var MARGIN_SIZE = 4;
  function generatePath(modules2) {
    var margin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var ops = [];
    modules2.forEach(function(row, y) {
      var start = null;
      row.forEach(function(cell, x) {
        if (!cell && start !== null) {
          ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
          start = null;
          return;
        }
        if (x === row.length - 1) {
          if (!cell) {
            return;
          }
          if (start === null) {
            ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
          } else {
            ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
          }
          return;
        }
        if (cell && start === null) {
          start = x;
        }
      });
    });
    return ops.join("");
  }
  var SUPPORTS_PATH2D = function() {
    try {
      new Path2D().addPath(new Path2D());
    } catch (e2) {
      return false;
    }
    return true;
  }();
  var QRCodeCanvas = /* @__PURE__ */ function(_React$PureComponent) {
    _inherits(QRCodeCanvas2, _React$PureComponent);
    function QRCodeCanvas2() {
      var _getPrototypeOf2;
      var _this;
      _classCallCheck(this, QRCodeCanvas2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QRCodeCanvas2)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _defineProperty2(_assertThisInitialized(_assertThisInitialized(_this)), "_canvas", void 0);
      return _this;
    }
    _createClass(QRCodeCanvas2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.update();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.update();
      }
    }, {
      key: "update",
      value: function update2() {
        var _this$props = this.props, value = _this$props.value, size = _this$props.size, level = _this$props.level, bgColor = _this$props.bgColor, fgColor = _this$props.fgColor, includeMargin = _this$props.includeMargin;
        var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel2[level]);
        qrcode.addData(convertStr(value));
        qrcode.make();
        if (this._canvas != null) {
          var canvas = this._canvas;
          var ctx = canvas.getContext("2d");
          if (!ctx) {
            return;
          }
          var cells = qrcode.modules;
          if (cells === null) {
            return;
          }
          var margin = includeMargin ? MARGIN_SIZE : 0;
          var numCells = cells.length + margin * 2;
          var pixelRatio = window.devicePixelRatio || 1;
          canvas.height = canvas.width = size * pixelRatio;
          var scale = size / numCells * pixelRatio;
          ctx.scale(scale, scale);
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, numCells, numCells);
          ctx.fillStyle = fgColor;
          if (SUPPORTS_PATH2D) {
            ctx.fill(new Path2D(generatePath(cells, margin)));
          } else {
            cells.forEach(function(row, rdx) {
              row.forEach(function(cell, cdx) {
                if (cell) {
                  ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
                }
              });
            });
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props;
        _this$props2.value;
        var size = _this$props2.size;
        _this$props2.level;
        _this$props2.bgColor;
        _this$props2.fgColor;
        var style2 = _this$props2.style;
        _this$props2.includeMargin;
        var otherProps = _objectWithoutProperties2(_this$props2, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin"]);
        var canvasStyle = _objectSpread2({
          height: size,
          width: size
        }, style2);
        return React2.createElement("canvas", _extends2({
          style: canvasStyle,
          height: size,
          width: size,
          ref: function ref(_ref2) {
            return _this2._canvas = _ref2;
          }
        }, otherProps));
      }
    }]);
    return QRCodeCanvas2;
  }(React2.PureComponent);
  _defineProperty2(QRCodeCanvas, "defaultProps", DEFAULT_PROPS);
  _defineProperty2(QRCodeCanvas, "propTypes", PROP_TYPES);
  var QRCodeSVG = /* @__PURE__ */ function(_React$PureComponent2) {
    _inherits(QRCodeSVG2, _React$PureComponent2);
    function QRCodeSVG2() {
      _classCallCheck(this, QRCodeSVG2);
      return _possibleConstructorReturn(this, _getPrototypeOf(QRCodeSVG2).apply(this, arguments));
    }
    _createClass(QRCodeSVG2, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props, value = _this$props3.value, size = _this$props3.size, level = _this$props3.level, bgColor = _this$props3.bgColor, fgColor = _this$props3.fgColor, includeMargin = _this$props3.includeMargin, otherProps = _objectWithoutProperties2(_this$props3, ["value", "size", "level", "bgColor", "fgColor", "includeMargin"]);
        var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel2[level]);
        qrcode.addData(convertStr(value));
        qrcode.make();
        var cells = qrcode.modules;
        if (cells === null) {
          return null;
        }
        var margin = includeMargin ? MARGIN_SIZE : 0;
        var fgPath = generatePath(cells, margin);
        var numCells = cells.length + margin * 2;
        return React2.createElement("svg", _extends2({
          shapeRendering: "crispEdges",
          height: size,
          width: size,
          viewBox: "0 0 ".concat(numCells, " ").concat(numCells)
        }, otherProps), React2.createElement("path", {
          fill: bgColor,
          d: "M0,0 h".concat(numCells, "v").concat(numCells, "H0z")
        }), React2.createElement("path", {
          fill: fgColor,
          d: fgPath
        }));
      }
    }]);
    return QRCodeSVG2;
  }(React2.PureComponent);
  _defineProperty2(QRCodeSVG, "defaultProps", DEFAULT_PROPS);
  _defineProperty2(QRCodeSVG, "propTypes", PROP_TYPES);
  var QRCode2 = function QRCode3(props) {
    var renderAs = props.renderAs, otherProps = _objectWithoutProperties2(props, ["renderAs"]);
    var Component = renderAs === "svg" ? QRCodeSVG : QRCodeCanvas;
    return React2.createElement(Component, otherProps);
  };
  QRCode2.defaultProps = _objectSpread2({
    renderAs: "canvas"
  }, DEFAULT_PROPS);
  lib = QRCode2;
  return lib;
}
var libExports = requireLib();
const QRCode = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
function KeyExportBox(props) {
  const clipboard = useClipboard();
  const copyToClipboard = React.useCallback(() => clipboard.copyToClipboard(props.export), [clipboard, props.export]);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(VerticalLayout, { alignItems: "center", justifyContent: "center" }, /* @__PURE__ */ React.createElement(VerticalLayout, null, /* @__PURE__ */ React.createElement(Box$1, { onClick: copyToClipboard, margin: "0 auto", style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement(QRCode, { size: props.size, value: props.export })), /* @__PURE__ */ React.createElement(Box$1, { margin: "16px auto" }, /* @__PURE__ */ React.createElement(Typography, { align: "center", style: { display: props.hideTapToCopy ? "none" : void 0, marginBottom: 12 } }, t2("account-settings.export-key.info.tap-to-copy"), ":"), /* @__PURE__ */ React.createElement(
    Typography,
    {
      align: "center",
      component: "p",
      onClick: copyToClipboard,
      role: "button",
      style: { cursor: "pointer", wordWrap: "break-word", maxWidth: window.innerWidth - 75 },
      variant: "subtitle1"
    },
    /* @__PURE__ */ React.createElement("b", { style: { wordBreak: "break-all" } }, props.export)
  ))));
}
const KeyExportBox$1 = React.memo(KeyExportBox);
function ReceivePaymentDialog(props) {
  const isSmallScreen = useIsMobile();
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(DialogBody, { top: /* @__PURE__ */ React.createElement(MainTitle, { onBack: props.onClose, title: t2("payment.title.receive") }) }, /* @__PURE__ */ React.createElement(Box$1, { width: "100%", margin: "32px auto" }, /* @__PURE__ */ React.createElement(KeyExportBox$1, { export: props.account.accountID, size: isSmallScreen ? 192 : 256 })), props.account.accountID === props.account.publicKey ? null : /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textSecondary" }, t2("payment.note.multisig-pubkey")));
}
const ReceivePaymentDialog$1 = React.memo(ReceivePaymentDialog);
function getLastArgumentFromURL(url) {
  return url.replace(/^.*\/([^\/]+)/, "$1");
}
const modules = {
  AssetDetailsDialog: __vitePreload(() => import("./AssetDetailsDialog-iOS03pH5.js"), true ? __vite__mapDeps([6,1,2,4]) : void 0),
  BalanceDetailsDialog: __vitePreload(() => import("./BalanceDetailsDialog-CzYuVvF6.js"), true ? __vite__mapDeps([7,1,2]) : void 0),
  LumenPurchaseDialog: __vitePreload(() => import("./LumenPurchaseDialog-DoyEd-GJ.js"), true ? __vite__mapDeps([8,1,2,9]) : void 0),
  TradeAssetDialog: __vitePreload(() => import("./TradingDialog-NmOY-ccy.js"), true ? __vite__mapDeps([10,1,2,11,12]) : void 0),
  TransferDialog: __vitePreload(() => import("./ConnectedTransferDialog-Bi_V8awo.js").then((n2) => n2.C), true ? __vite__mapDeps([13,1,2,5]) : void 0)
};
const AccountSettings = withFallback(
  React.lazy(() => __vitePreload(() => import("./AccountSettings-CGtcRnTW.js"), true ? __vite__mapDeps([14,1,2,15]) : void 0)),
  /* @__PURE__ */ React.createElement(TransactionListPlaceholder, null)
);
const AccountTransactions = withFallback(
  React.lazy(() => __vitePreload(() => import("./AccountTransactions-DUngX3mh.js"), true ? __vite__mapDeps([16,1,2,12,11,3,4]) : void 0)),
  /* @__PURE__ */ React.createElement(TransactionListPlaceholder, null)
);
const AccountCreationOptions = withFallback(
  React.lazy(() => __vitePreload(() => import("./AccountCreationOptions-DYj83WDk.js"), true ? __vite__mapDeps([17,1,2,15,12]) : void 0)),
  /* @__PURE__ */ React.createElement(ViewLoading, null)
);
const AssetDetailsDialog = withFallback(
  React.lazy(() => modules.AssetDetailsDialog),
  /* @__PURE__ */ React.createElement(ViewLoading, null)
);
const BalanceDetailsDialog = withFallback(
  React.lazy(() => modules.BalanceDetailsDialog),
  /* @__PURE__ */ React.createElement(ViewLoading, null)
);
const LumenPurchaseDialog = withFallback(
  React.lazy(() => modules.LumenPurchaseDialog),
  /* @__PURE__ */ React.createElement(ViewLoading, null)
);
const TradeAssetDialog = withFallback(
  React.lazy(() => modules.TradeAssetDialog),
  /* @__PURE__ */ React.createElement(ViewLoading, null)
);
const TransferDialog = withFallback(
  React.lazy(() => modules.TransferDialog),
  /* @__PURE__ */ React.createElement(ViewLoading, null)
);
const NotCosignerOnLedgerWarning = React.memo(function NotCosignerOnLedgerWarning2(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const clipboard = useClipboard();
  const { t: t2 } = useTranslation();
  const handleClick = React.useCallback(() => {
    clipboard.copyToClipboard(props.account.publicKey);
  }, [clipboard, props.account.publicKey]);
  if (!props.account || !accountData || accountData.signers.some((signer) => {
    var _a;
    return signer.key === ((_a = props.account) == null ? void 0 : _a.publicKey);
  })) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(VerticalLayout, { padding: "16px", style: { backgroundColor: warningColor, textAlign: "center" } }, /* @__PURE__ */ React.createElement(Typography, { gutterBottom: true }, t2("account.cosigner.not-cosigner-yet.note")), /* @__PURE__ */ React.createElement(Typography, { gutterBottom: true }, t2("account.cosigner.not-cosigner-yet.label")), /* @__PURE__ */ React.createElement(ButtonBase, { onClick: handleClick, style: { alignSelf: "center", width: "fit-content" } }, /* @__PURE__ */ React.createElement(Typography, { align: "center", style: { textDecoration: "underline" } }, /* @__PURE__ */ React.createElement(
    PublicKey,
    {
      publicKey: props.account.publicKey,
      showRaw: true,
      style: { wordBreak: "break-word" },
      testnet: props.account.testnet
    }
  ))));
});
const AccountPageContent = React.memo(function AccountPageContent2(props) {
  var _a;
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const { t: t2 } = useTranslation();
  const { renameAccount } = React.useContext(AccountsContext);
  const [accountToBackup, setAccountToBackup] = React.useState(null);
  const [noPasswordDialogOpen, setNoPasswordDialogOpen] = React.useState(false);
  const { openSavedAddresses } = React.useContext(DialogsContext);
  const showAccountCreation = matchesRoute(router.location.pathname, createAccount(props.testnet), false) || matchesRoute(router.location.pathname, importAccount(props.testnet), false) || matchesRoute(router.location.pathname, joinSharedAccount(props.testnet), false) || matchesRoute(router.location.pathname, newAccount(props.testnet), false);
  const showAccountCreationOptions = matchesRoute(router.location.pathname, newAccount(props.testnet), false);
  const showAccountSettings = matchesRoute(router.location.pathname, accountSettings("*"), false);
  const showAssetDetails = matchesRoute(router.location.pathname, assetDetails("*", "*")) && !matchesRoute(router.location.pathname, manageAccountAssets("*"));
  const showAssetTrading = matchesRoute(router.location.pathname, tradeAsset("*"));
  const showBalanceDetails = matchesRoute(router.location.pathname, balanceDetails("*"));
  const showCreatePayment = matchesRoute(router.location.pathname, createPayment("*"));
  const showDeposit = matchesRoute(router.location.pathname, depositAsset("*"));
  const showLumenPurchase = matchesRoute(router.location.pathname, purchaseLumens("*"));
  const showReceivePayment = matchesRoute(router.location.pathname, receivePayment("*"));
  const showWithdrawal = matchesRoute(router.location.pathname, withdrawAsset("*"));
  const showSendReceiveButtons = !matchesRoute(router.location.pathname, accountSettings("*"), false);
  const {
    accountCreation,
    accountCreationErrors,
    createAccount: createAccount$1,
    setAccountCreation,
    validateAccountCreation: validateAccountCreation2
  } = useAccountCreation({
    cosigner: matchesRoute(router.location.pathname, joinSharedAccount(props.testnet), false),
    import: matchesRoute(router.location.pathname, importAccount(props.testnet), false),
    testnet: props.testnet
  });
  const headerHeight = showAccountCreation ? isSmallScreen ? 128 : 120 : isSmallScreen ? 188 : showSendReceiveButtons ? 272 : 184;
  const navigateTo = React.useMemo(() => {
    var _a2;
    const accountID = (_a2 = props.account) == null ? void 0 : _a2.id;
    return {
      accountSettings: accountID ? () => router.history.push(accountSettings(accountID)) : void 0,
      addAssets: accountID ? () => router.history.push(manageAccountAssets(accountID)) : void 0,
      deposit: accountID ? () => router.history.push(depositAsset(accountID)) : void 0,
      balanceDetails: accountID ? () => router.history.push(balanceDetails(accountID)) : void 0,
      savedAddresses: accountID ? () => openSavedAddresses({}) : void 0,
      createPayment: accountID ? () => router.history.push(createPayment(accountID)) : void 0,
      purchaseLumens: accountID ? () => router.history.push(purchaseLumens(accountID)) : void 0,
      receivePayment: accountID ? () => router.history.push(receivePayment(accountID)) : void 0,
      tradeAssets: accountID ? () => router.history.push(tradeAsset(accountID)) : void 0,
      transactions: accountID ? () => router.history.push(account(accountID)) : void 0,
      withdraw: accountID ? () => router.history.push(withdrawAsset(accountID)) : void 0
    };
  }, [openSavedAddresses, router.history, props.account]);
  const closeAssetDetails = React.useCallback(() => {
    router.history.goBack();
  }, [router.history]);
  const closeDialog = navigateTo.transactions || (() => void 0);
  const performRenaming = React.useCallback(
    (newName) => {
      if (props.account) {
        renameAccount(props.account.id, newName).catch(trackError);
      } else {
        setAccountCreation((creation) => ({
          ...creation,
          name: newName
        }));
      }
    },
    [props.account, renameAccount, setAccountCreation]
  );
  const updateAccountCreation = React.useCallback(
    (update2) => {
      setAccountCreation((prev) => ({
        ...prev,
        ...update2
      }));
    },
    [setAccountCreation]
  );
  const createNewAccount = React.useCallback(() => {
    (async () => {
      const account$1 = await createAccount$1(accountCreation);
      if (!accountCreation.import && !props.testnet) {
        setAccountToBackup(account$1);
      } else {
        router.history.push(account(account$1.id));
      }
    })().catch(trackError);
  }, [accountCreation, createAccount$1, props.testnet, router.history]);
  const onCreateAccount = React.useCallback(() => {
    if (!validateAccountCreation2(accountCreation)) {
      return;
    }
    if (!accountCreation.requiresPassword && !props.testnet) {
      setNoPasswordDialogOpen(true);
    } else {
      createNewAccount();
    }
  }, [accountCreation, createNewAccount, props.testnet, validateAccountCreation2]);
  const closeNoPasswordDialog = React.useCallback(() => {
    setNoPasswordDialogOpen(false);
  }, []);
  const confirmNoPasswordDialog = React.useCallback(() => {
    setNoPasswordDialogOpen(false);
    createNewAccount();
  }, [createNewAccount]);
  const closeBackupDialog = React.useCallback(() => {
    if (accountToBackup) {
      router.history.push(account(accountToBackup.id));
    }
  }, [accountToBackup, router.history]);
  const handleBackNavigation = React.useCallback(() => {
    if (props.account && matchesRoute(router.location.pathname, accountSettings(props.account.id))) {
      if (matchesRoute(router.location.pathname, manageAccountSigners(props.account.id) + "/*")) {
        router.history.push(manageAccountSigners(props.account.id));
      } else if (matchesRoute(router.location.pathname, accountSettings(props.account.id) + "/*")) {
        router.history.push(accountSettings(props.account.id));
      } else {
        router.history.push(account(props.account.id));
      }
    } else if (showAccountCreation && accountToBackup) {
      setAccountToBackup(null);
    } else if (showAccountCreation) {
      router.history.push(routeUp(router.location.pathname));
    } else {
      router.history.push(allAccounts());
    }
  }, [accountToBackup, props.account, router.history, router.location, showAccountCreation]);
  const creationTitle = props.testnet ? t2("create-account.header.placeholder.testnet") : t2("create-account.header.placeholder.mainnet");
  const headerCard = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      AccountHeaderCard,
      {
        account: showAccountCreationOptions ? { ...accountCreation, name: creationTitle } : props.account || accountCreation,
        editableAccountName: showAccountSettings || showAccountCreation && !showAccountCreationOptions && !accountToBackup,
        error: accountCreationErrors.name,
        onAccountSettings: navigateTo.accountSettings,
        onAccountTransactions: navigateTo.transactions,
        onClose: handleBackNavigation,
        onDeposit: navigateTo.deposit,
        onManageAssets: navigateTo.balanceDetails,
        onSavedAddresses: navigateTo.savedAddresses,
        onPurchaseLumens: navigateTo.purchaseLumens,
        onRename: performRenaming,
        onTrade: navigateTo.tradeAssets,
        onWithdraw: navigateTo.withdraw
      },
      /* @__PURE__ */ React.createElement(HideOnError, null, props.account ? /* @__PURE__ */ React.createElement(LazyScrollableBalances, { account: props.account, onClick: navigateTo.balanceDetails, style: { marginTop: 8 } }) : null, isSmallScreen || !props.account ? null : /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(InlineLoader, null) }, /* @__PURE__ */ React.createElement(
        AccountActions$1,
        {
          account: props.account,
          hidden: !showSendReceiveButtons,
          onCreatePayment: navigateTo.createPayment,
          onReceivePayment: navigateTo.receivePayment
        }
      )))
    ),
    [
      accountCreation,
      accountCreationErrors.name,
      accountToBackup,
      creationTitle,
      handleBackNavigation,
      isSmallScreen,
      navigateTo,
      performRenaming,
      props.account,
      showAccountCreation,
      showAccountCreationOptions,
      showAccountSettings,
      showSendReceiveButtons
    ]
  );
  return /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100%" }, /* @__PURE__ */ React.createElement(Section, { top: true, brandColored: true, grow: 0, minHeight: headerHeight, shrink: 0 }, /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, headerCard)), ((_a = props.account) == null ? void 0 : _a.cosignerOf) ? /* @__PURE__ */ React.createElement(NotCosignerOnLedgerWarning, { account: props.account }) : null, /* @__PURE__ */ React.createElement(
    Section,
    {
      bottom: !isSmallScreen,
      style: {
        backgroundColor: "#fcfcfc",
        flexGrow: 1,
        flexShrink: 1,
        height: "100%",
        padding: isSmallScreen ? 0 : "0 24px",
        overflowY: "auto"
      }
    },
    /* @__PURE__ */ React.createElement(InlineErrorBoundary, null, showAccountCreation ? /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
      AccountCreationOptions,
      {
        accountCreation,
        accountToBackup,
        errors: accountCreationErrors,
        onFinishBackup: closeBackupDialog,
        onUpdateAccountCreation: updateAccountCreation
      }
    )) : showAccountSettings ? /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(TransactionListPlaceholder, null) }, /* @__PURE__ */ React.createElement(AccountSettings, { account: props.account })) : /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(TransactionListPlaceholder, null) }, /* @__PURE__ */ React.createElement(AccountTransactions, { account: props.account })))
  ), isSmallScreen && props.account ? /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
    AccountActions$1,
    {
      account: props.account,
      bottomOfScreen: true,
      hidden: !showSendReceiveButtons,
      onCreatePayment: navigateTo.createPayment,
      onReceivePayment: navigateTo.receivePayment
    }
  )) : !props.account && !accountToBackup ? /* @__PURE__ */ React.createElement(
    AccountCreationActions$1,
    {
      bottomOfScreen: isSmallScreen,
      onActionButtonClick: onCreateAccount,
      testnet: props.testnet
    }
  ) : null, props.account ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showBalanceDetails || showAssetDetails,
      fullScreen: true,
      onClose: closeDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(BalanceDetailsDialog, { account: props.account, onClose: closeDialog }))
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showAssetDetails,
      fullScreen: true,
      onClose: navigateTo.balanceDetails,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
      AssetDetailsDialog,
      {
        account: props.account,
        assetID: showAssetDetails ? getLastArgumentFromURL(router.location.pathname) : "XLM",
        onClose: closeAssetDetails
      }
    ))
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showCreatePayment,
      fullScreen: true,
      onClose: closeDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(ConnectedPaymentDialog, { account: props.account, onClose: closeDialog }))
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showReceivePayment,
      fullScreen: true,
      onClose: closeDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(ReceivePaymentDialog$1, { account: props.account, onClose: closeDialog }))
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showAssetTrading,
      fullScreen: true,
      onClose: closeDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(TradeAssetDialog, { account: props.account, onClose: closeDialog }))
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showDeposit || showWithdrawal,
      fullScreen: true,
      onClose: closeDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(
      TransferDialog,
      {
        account: props.account,
        onClose: closeDialog,
        type: showDeposit ? "deposit" : "withdrawal"
      }
    ))
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: showLumenPurchase,
      fullScreen: true,
      onClose: closeDialog,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, null) }, /* @__PURE__ */ React.createElement(LumenPurchaseDialog, { account: props.account, onClose: closeDialog }))
  )) : null, props.account ? null : /* @__PURE__ */ React.createElement(
    NoPasswordConfirmation$1,
    {
      onClose: closeNoPasswordDialog,
      onConfirm: confirmNoPasswordDialog,
      open: noPasswordDialogOpen
    }
  ));
});
function AccountPage(props) {
  const { accounts } = React.useContext(AccountsContext);
  const account2 = props.accountID ? accounts.find((someAccount) => someAccount.id === props.accountID) : void 0;
  if (props.accountID && !account2) {
    return /* @__PURE__ */ React.createElement("div", null, "Wallet account not found. ID: ", props.accountID);
  }
  return /* @__PURE__ */ React.createElement(AccountPageContent, { account: account2, testnet: account2 ? account2.testnet : props.accountCreation === "testnet" });
}
const AccountPage$1 = React.memo(AccountPage);
const useCarouselStyles = makeStyles({
  root: {
    display: "block",
    height: "100%",
    overflow: "auto",
    width: "100%"
  },
  sledge: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-start",
    overflowX: "hidden",
    overflowY: "auto"
  },
  slide: {
    flex: "0 0 100%",
    opacity: 0.5,
    overflow: "auto",
    transition: "opacity .3s, transform .3s",
    willChange: "opacity, transform",
    "&$active": {
      opacity: 1
    }
  },
  active: {
    // Only used in conjunction with `slide`
  }
});
function Carousel(props) {
  const classes = useCarouselStyles(props);
  return /* @__PURE__ */ React.createElement("div", { className: classes.root }, /* @__PURE__ */ React.createElement("div", { className: classes.sledge }, props.children.map((content, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: index,
      className: [classes.slide, index === props.current ? classes.active : ""].join(" "),
      style: {
        transform: `translateX(${-100 * props.current}%)`
      }
    },
    content
  ))));
}
const Carousel$1 = React.memo(Carousel);
const languageNames = {
  ["en"]: "English",
  ["ru"]: "Русский",
  ["it"]: "Italiano",
  ["es"]: "Español"
};
const availableLanguages = Object.keys(languageNames);
var Cloud = {};
var hasRequiredCloud;
function requireCloud() {
  if (hasRequiredCloud) return Cloud;
  hasRequiredCloud = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Cloud, "__esModule", {
    value: true
  });
  Cloud.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
  }), "Cloud");
  Cloud.default = _default;
  return Cloud;
}
var CloudExports = /* @__PURE__ */ requireCloud();
const CloudIcon = /* @__PURE__ */ getDefaultExportFromCjs(CloudExports);
var RemoveCircle = {};
var hasRequiredRemoveCircle;
function requireRemoveCircle() {
  if (hasRequiredRemoveCircle) return RemoveCircle;
  hasRequiredRemoveCircle = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(RemoveCircle, "__esModule", {
    value: true
  });
  RemoveCircle.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
  }), "RemoveCircle");
  RemoveCircle.default = _default;
  return RemoveCircle;
}
var RemoveCircleExports = /* @__PURE__ */ requireRemoveCircle();
const RemoveIcon = /* @__PURE__ */ getDefaultExportFromCjs(RemoveCircleExports);
const useTrustedServiceListItemStyles = makeStyles({
  listItem: {
    background: "#FFFFFF",
    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.1)",
    "&:first-child": {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    "&:last-child": {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    }
  },
  cloudAvatar: {
    backgroundColor: "rgba(0, 0, 0, 0.54)"
  },
  logoAvatar: {
    backgroundColor: "white"
  }
});
const TrustedServiceListItem = React.memo(function TrustedServiceListItem2(props) {
  const classes = useTrustedServiceListItemStyles();
  const stellarToml = useStellarToml(props.trustedService.domain);
  const imageURL = stellarToml && stellarToml.DOCUMENTATION && stellarToml.DOCUMENTATION.ORG_LOGO;
  const orgName = stellarToml && stellarToml.DOCUMENTATION && stellarToml.DOCUMENTATION.ORG_NAME;
  return /* @__PURE__ */ React.createElement(ListItem, { className: classes.listItem }, /* @__PURE__ */ React.createElement(ListItemIcon$1, { style: { marginRight: 0 } }, imageURL ? /* @__PURE__ */ React.createElement(Avatar$1, { alt: name, className: classes.logoAvatar, src: imageURL }) : /* @__PURE__ */ React.createElement(Avatar$1, { alt: name, className: classes.cloudAvatar }, /* @__PURE__ */ React.createElement(CloudIcon, null))), /* @__PURE__ */ React.createElement(ListItemText, { primary: orgName ? orgName : props.trustedService.domain, secondary: props.trustedService.domain }), /* @__PURE__ */ React.createElement(ListItemIcon$1, { style: { marginRight: 0 } }, /* @__PURE__ */ React.createElement(IconButton, { onClick: (event) => props.onDeleteClick && props.onDeleteClick(event, props.index) }, /* @__PURE__ */ React.createElement(RemoveIcon, null))));
});
const useTrustedServiceListStyles = makeStyles({
  list: {
    background: "transparent",
    paddingBottom: 16
  }
});
const TrustedServiceList = React.memo(function TrustedServiceList2() {
  const classes = useTrustedServiceListStyles();
  const { t: t2 } = useTranslation();
  const { setSetting, trustedServices } = React.useContext(SettingsContext);
  const [confirmationPending, setConfirmationPending] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const onDelete = () => {
    const selectedService = trustedServices[selectedIndex];
    if (!selectedService) {
      return;
    }
    const newTrustedServices = trustedServices.filter((service) => service.domain !== selectedService.domain);
    setSetting("trustedServices", newTrustedServices);
  };
  const onConfirm = () => {
    setConfirmationPending(false);
    setSelectedIndex(-1);
    onDelete();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(List, { className: classes.list }, trustedServices.sort((a2, b) => a2.domain.localeCompare(b.domain)).map((service, index) => /* @__PURE__ */ React.createElement(
    TrustedServiceListItem,
    {
      index,
      key: service.domain,
      onDeleteClick: () => {
        setSelectedIndex(index);
        setConfirmationPending(true);
      },
      trustedService: service
    }
  ))), trustedServices.length === 0 ? /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textSecondary" }, "(", t2("app-settings.trusted-services.service-selection.no-services"), ")") : null, /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      cancelButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: () => setConfirmationPending(false) }, t2("app-settings.trusted-services.service-selection.action.cancel")),
      confirmButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: onConfirm, type: "primary" }, t2("app-settings.trusted-services.service-selection.action.confirm")),
      open: confirmationPending,
      onClose: () => setConfirmationPending(false),
      title: t2("app-settings.trusted-services.service-selection.confirm.title")
    },
    t2("app-settings.trusted-services.service-selection.confirm.text")
  ));
});
const TrustedServiceSelectionList = React.memo(TrustedServiceList);
function ManageTrustedServicesDialog() {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(DialogBody, null, /* @__PURE__ */ React.createElement(DialogContent, { style: { flexGrow: 0, padding: 0 } }, /* @__PURE__ */ React.createElement(DialogContentText$1, { align: "justify", style: { marginTop: 8 } }, t2("app-settings.trusted-services.info")), /* @__PURE__ */ React.createElement(TrustedServiceSelectionList, null)));
}
const ManageTrustedServicesDialog$1 = React.memo(ManageTrustedServicesDialog);
function SavedAddressesExportDialog() {
  const theme2 = useTheme();
  const { savedAddresses, bulkUpdate } = React.useContext(SavedAddressesContext);
  const [rawContents, setRawContents] = React.useState(() => JSON.stringify(savedAddresses, null, 2));
  const [error, setError] = React.useState();
  const handleSaveChanges = React.useCallback(() => {
    setError("");
    try {
      bulkUpdate(JSON.parse(rawContents));
    } catch (e2) {
      setError("Cannot parse JSON");
    }
  }, [rawContents]);
  return /* @__PURE__ */ React.createElement(DialogBody, null, /* @__PURE__ */ React.createElement(DialogContent, { style: { flexGrow: 0, padding: 0 } }, /* @__PURE__ */ React.createElement(DialogContentText$1, { align: "justify", style: { marginTop: 8 } }, "Saved Addresses"), /* @__PURE__ */ React.createElement(
    TextField,
    {
      fullWidth: true,
      multiline: true,
      margin: "normal",
      value: rawContents,
      onChange: (e2) => setRawContents(e2.target.value),
      style: {
        flexGrow: 1,
        marginLeft: 24,
        marginRight: 24,
        minWidth: 230,
        height: "100%",
        paddingBottom: "45px"
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: 0, right: 0 } }, error && /* @__PURE__ */ React.createElement(
    HorizontalLayout,
    {
      alignItems: "center",
      style: {
        background: fade(theme2.palette.error.main, 0.2),
        borderRadius: 8,
        color: theme2.palette.error.main,
        fontWeight: 600,
        padding: "8px 12px"
      }
    },
    /* @__PURE__ */ React.createElement(ErrorIcon, null),
    /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 8 } }, error)
  ), /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 64 } }, /* @__PURE__ */ React.createElement(ActionButton, { onClick: handleSaveChanges, type: "primary" }, "Save")))));
}
const SavedAddressesExportDialog$1 = React.memo(SavedAddressesExportDialog);
var KeyboardArrowRight = {};
var hasRequiredKeyboardArrowRight;
function requireKeyboardArrowRight() {
  if (hasRequiredKeyboardArrowRight) return KeyboardArrowRight;
  hasRequiredKeyboardArrowRight = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(KeyboardArrowRight, "__esModule", {
    value: true
  });
  KeyboardArrowRight.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "KeyboardArrowRight");
  KeyboardArrowRight.default = _default;
  return KeyboardArrowRight;
}
var KeyboardArrowRightExports = /* @__PURE__ */ requireKeyboardArrowRight();
const RightIcon = /* @__PURE__ */ getDefaultExportFromCjs(KeyboardArrowRightExports);
var Fingerprint = {};
var hasRequiredFingerprint;
function requireFingerprint() {
  if (hasRequiredFingerprint) return Fingerprint;
  hasRequiredFingerprint = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Fingerprint, "__esModule", {
    value: true
  });
  Fingerprint.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"
  }), "Fingerprint");
  Fingerprint.default = _default;
  return Fingerprint;
}
var FingerprintExports = /* @__PURE__ */ requireFingerprint();
const FingerprintIcon = /* @__PURE__ */ getDefaultExportFromCjs(FingerprintExports);
var BlurOff = {};
var hasRequiredBlurOff;
function requireBlurOff() {
  if (hasRequiredBlurOff) return BlurOff;
  hasRequiredBlurOff = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(BlurOff, "__esModule", {
    value: true
  });
  BlurOff.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"
  }), "BlurOff");
  BlurOff.default = _default;
  return BlurOff;
}
var BlurOffExports = /* @__PURE__ */ requireBlurOff();
const BlurOffIcon = /* @__PURE__ */ getDefaultExportFromCjs(BlurOffExports);
var ReportOff = {};
var hasRequiredReportOff;
function requireReportOff() {
  if (hasRequiredReportOff) return ReportOff;
  hasRequiredReportOff = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ReportOff, "__esModule", {
    value: true
  });
  ReportOff.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M11 7h2v2.92l6.91 6.91 1.09-1.1V8.27L15.73 3H8.27L7.18 4.1 11 7.92zm11.27 14.73l-20-20.01L1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.63L21 23l1.27-1.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3z"
  }), "ReportOff");
  ReportOff.default = _default;
  return ReportOff;
}
var ReportOffExports = /* @__PURE__ */ requireReportOff();
const ReportOffIcon = /* @__PURE__ */ getDefaultExportFromCjs(ReportOffExports);
var AddCircleOutline = {};
var hasRequiredAddCircleOutline;
function requireAddCircleOutline() {
  if (hasRequiredAddCircleOutline) return AddCircleOutline;
  hasRequiredAddCircleOutline = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(AddCircleOutline, "__esModule", {
    value: true
  });
  AddCircleOutline.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }), "AddCircleOutline");
  AddCircleOutline.default = _default;
  return AddCircleOutline;
}
var AddCircleOutlineExports = /* @__PURE__ */ requireAddCircleOutline();
const ProtocolHandlerIcon = /* @__PURE__ */ getDefaultExportFromCjs(AddCircleOutlineExports);
var Language = {};
var hasRequiredLanguage;
function requireLanguage() {
  if (hasRequiredLanguage) return Language;
  hasRequiredLanguage = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Language, "__esModule", {
    value: true
  });
  Language.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
  }), "Language");
  Language.default = _default;
  return Language;
}
var LanguageExports = /* @__PURE__ */ requireLanguage();
const LanguageIcon = /* @__PURE__ */ getDefaultExportFromCjs(LanguageExports);
var Message = {};
var hasRequiredMessage;
function requireMessage() {
  if (hasRequiredMessage) return Message;
  hasRequiredMessage = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Message, "__esModule", {
    value: true
  });
  Message.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
  }), "Message");
  Message.default = _default;
  return Message;
}
var MessageExports = /* @__PURE__ */ requireMessage();
const MessageIcon = /* @__PURE__ */ getDefaultExportFromCjs(MessageExports);
var MoneyOff = {};
var hasRequiredMoneyOff;
function requireMoneyOff() {
  if (hasRequiredMoneyOff) return MoneyOff;
  hasRequiredMoneyOff = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(MoneyOff, "__esModule", {
    value: true
  });
  MoneyOff.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"
  }), "MoneyOff");
  MoneyOff.default = _default;
  return MoneyOff;
}
var MoneyOffExports = /* @__PURE__ */ requireMoneyOff();
const TestnetIcon = /* @__PURE__ */ getDefaultExportFromCjs(MoneyOffExports);
var ImportContacts$1 = {};
var hasRequiredImportContacts;
function requireImportContacts() {
  if (hasRequiredImportContacts) return ImportContacts$1;
  hasRequiredImportContacts = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ImportContacts$1, "__esModule", {
    value: true
  });
  ImportContacts$1.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
  })), "ImportContacts");
  ImportContacts$1.default = _default;
  return ImportContacts$1;
}
var ImportContactsExports = /* @__PURE__ */ requireImportContacts();
const ImportContacts = /* @__PURE__ */ getDefaultExportFromCjs(ImportContactsExports);
const useAppSettingsItemStyles = makeStyles$1({
  caret: {
    color: "rgba(0, 0, 0, 0.35)",
    fontSize: 48,
    justifyContent: "center",
    marginRight: -8,
    width: 48
  },
  icon: {
    fontSize: 28,
    justifyContent: "center",
    marginRight: 4,
    width: 28
  },
  settingsItem: {
    position: "relative",
    padding: "16px 24px",
    background: "#FFFFFF",
    [breakpoints.down(600)]: {
      padding: "16px 12px"
    },
    "&:focus": {
      backgroundColor: "#FFFFFF"
    },
    "&$actionable:hover": {
      backgroundColor: "rgb(232, 232, 232)"
    },
    "&:not(:first-child)": {
      borderTop: "1px solid rgba(230, 230, 230, 1.0)"
    }
  },
  actionable: {}
});
function AppSettingsItem(props) {
  const classes = useAppSettingsItemStyles();
  const isSmallScreen = useIsMobile();
  const { actions, primaryText, secondaryText, style: style2 } = props;
  const listItemTextStyle = React.useMemo(
    () => ({
      paddingRight: isSmallScreen ? 0 : void 0
    }),
    [isSmallScreen]
  );
  const className = `${classes.settingsItem} ${props.onClick ? classes.actionable : ""}`;
  return /* @__PURE__ */ React.createElement(
    ListItem,
    {
      button: Boolean(props.onClick),
      className,
      disabled: props.disabled,
      onClick: props.onClick,
      style: style2
    },
    /* @__PURE__ */ React.createElement(ListItemIcon$1, { className: classes.icon }, props.icon),
    /* @__PURE__ */ React.createElement(ListItemText, { primary: primaryText, secondary: secondaryText, style: listItemTextStyle }),
    actions
  );
}
function SettingsToggle(props) {
  const { checked, disabled, onChange } = props;
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  return /* @__PURE__ */ React.createElement(Switch$1, { checked, color: "primary", disabled, onChange: handleChange });
}
const useSettingsStyles = makeStyles({
  caret: {
    color: "rgba(0, 0, 0, 0.35)",
    fontSize: 48,
    justifyContent: "center",
    marginRight: -8,
    width: 48
  },
  icon: {
    fontSize: 28,
    justifyContent: "center",
    marginRight: 4,
    width: 28
  }
});
const BiometricLockSetting = React.memo(function BiometricLockSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: (
        // pass empty onChange handler to prevent calling onToggle twice
        /* @__PURE__ */ React.createElement(SettingsToggle, { checked: props.enrolled && props.value, disabled: !props.enrolled, onChange: () => void 0 })
      ),
      icon: /* @__PURE__ */ React.createElement(FingerprintIcon, { className: classes.icon }),
      onClick: props.enrolled ? props.onToggle : void 0,
      primaryText: t2("app-settings.settings.biometric-lock.text.primary.default"),
      secondaryText: !props.enrolled ? t2("app-settings.settings.biometric-lock.text.secondary.not-enrolled") : props.value ? t2("app-settings.settings.biometric-lock.text.secondary.enabled") : t2("app-settings.settings.biometric-lock.text.secondary.disabled")
    }
  );
});
const HideMemoSetting = React.memo(function HideMemoSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(SettingsToggle, { checked: !props.value, onChange: props.onToggle }),
      icon: /* @__PURE__ */ React.createElement(MessageIcon, { className: classes.icon }),
      onClick: props.onToggle,
      primaryText: t2("app-settings.settings.memo.text.primary"),
      secondaryText: props.value ? t2("app-settings.settings.memo.text.secondary.hidden") : t2("app-settings.settings.memo.text.secondary.shown")
    }
  );
});
const LanguageSetting = React.memo(function LanguageSetting2(props) {
  const { onSelect } = props;
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  const browserLanguage = navigator.language.substr(0, 2);
  const handleChange = React.useCallback(
    (event) => {
      onSelect(event.target.value);
    },
    [onSelect]
  );
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(
        Select,
        {
          onChange: handleChange,
          style: { marginLeft: 8 },
          value: props.value,
          SelectDisplayProps: { style: { paddingLeft: 8 } }
        },
        [...availableLanguages].sort().map((lang) => /* @__PURE__ */ React.createElement(MenuItem$1, { key: lang, value: lang }, languageNames[lang], " ", lang === browserLanguage && "(Auto)"))
      ),
      icon: /* @__PURE__ */ React.createElement(LanguageIcon, { className: classes.icon }),
      primaryText: t2("app-settings.settings.language.text.primary"),
      secondaryText: t2("app-settings.settings.language.text.secondary")
    }
  );
});
const MultiSigSetting = React.memo(function MultiSigSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(SettingsToggle, { checked: props.value, onChange: props.onToggle }),
      icon: /* @__PURE__ */ React.createElement(GroupIcon, { className: classes.icon }),
      onClick: props.onToggle,
      primaryText: t2("app-settings.settings.multi-sig.text.primary"),
      secondaryText: props.value ? t2("app-settings.settings.multi-sig.text.secondary.enabled") : t2("app-settings.settings.multi-sig.text.secondary.disabled")
    }
  );
});
const ShowDustSetting = React.memo(function ShowDustSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(SettingsToggle, { checked: props.value, onChange: props.onToggle }),
      icon: /* @__PURE__ */ React.createElement(BlurOffIcon, { className: classes.icon }),
      onClick: props.onToggle,
      primaryText: t2("app-settings.settings.dust.text.primary"),
      secondaryText: props.value ? t2("app-settings.settings.dust.text.secondary.shown") : t2("app-settings.settings.dust.text.secondary.hidden")
    }
  );
});
const ShowClaimableBalanceSetting = React.memo(function ShowClaimableBalanceSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(SettingsToggle, { checked: props.value, onChange: props.onToggle }),
      icon: /* @__PURE__ */ React.createElement(ReportOffIcon, { className: classes.icon }),
      onClick: props.onToggle,
      primaryText: t2("app-settings.settings.create-claimable-balance.text.primary"),
      secondaryText: props.value ? t2("app-settings.settings.create-claimable-balance.text.secondary.shown") : t2("app-settings.settings.create-claimable-balance.text.secondary.hidden")
    }
  );
});
const TestnetSetting = React.memo(function TestnetSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(SettingsToggle, { checked: props.value, disabled: props.hasTestnetAccount, onChange: props.onToggle }),
      icon: /* @__PURE__ */ React.createElement(TestnetIcon, { className: classes.icon }),
      onClick: props.hasTestnetAccount ? void 0 : props.onToggle,
      primaryText: t2("app-settings.settings.testnet.text.primary"),
      secondaryText: props.hasTestnetAccount ? t2("app-settings.settings.testnet.text.secondary.cannot-disable") : props.value ? t2("app-settings.settings.testnet.text.secondary.shown") : t2("app-settings.settings.testnet.text.secondary.hidden")
    }
  );
});
const TrustedServicesSetting = React.memo(function TrustedServicesSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(ListItemIcon$1, { className: classes.caret }, /* @__PURE__ */ React.createElement(RightIcon, { className: classes.caret })),
      icon: /* @__PURE__ */ React.createElement(VerifiedUserIcon, { className: classes.icon }),
      onClick: props.onClick,
      primaryText: t2("app-settings.settings.trusted-services.text.primary"),
      secondaryText: t2("app-settings.settings.trusted-services.text.secondary")
    }
  );
});
const SavedAddressesExportSetting = React.memo(function SavedAddressesExportSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      actions: /* @__PURE__ */ React.createElement(ListItemIcon$1, { className: classes.caret }, /* @__PURE__ */ React.createElement(RightIcon, { className: classes.caret })),
      icon: /* @__PURE__ */ React.createElement(ImportContacts, { className: classes.icon }),
      onClick: props.onClick,
      primaryText: t2("app-settings.settings.saved-addresses-export.text.primary"),
      secondaryText: t2("app-settings.settings.saved-addresses-export.text.secondary")
    }
  );
});
const ProtocolHandlerSetting = React.memo(function ProtocolHandlerSetting2(props) {
  const classes = useSettingsStyles(props);
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    AppSettingsItem,
    {
      disabled: props.isDefaultHandler,
      icon: /* @__PURE__ */ React.createElement(ProtocolHandlerIcon, { className: classes.icon }),
      onClick: props.onClick,
      primaryText: t2("app-settings.settings.protocol-handler.text.primary"),
      secondaryText: props.isDefaultHandler ? t2("app-settings.settings.protocol-handler.text.secondary.default") : t2("app-settings.settings.protocol-handler.text.secondary.non-default")
    }
  );
});
const SettingsDialogs = React.memo(function SettingsDialogs2() {
  const router = useRouter();
  const showManageTrustedServices = matchesRoute(router.location.pathname, manageTrustedServices());
  const showSavedAddressesExport = matchesRoute(router.location.pathname, savedAddressesExport());
  if (showSavedAddressesExport) {
    return /* @__PURE__ */ React.createElement(SavedAddressesExportDialog$1, null);
  }
  return showManageTrustedServices ? /* @__PURE__ */ React.createElement(ManageTrustedServicesDialog$1, null) : /* @__PURE__ */ React.createElement(React.Fragment, null);
});
function AppSettings() {
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const { i18n } = useTranslation();
  const [isDefaultHandler, setIsDefaultHandler] = React.useState(false);
  const showSettingsOverview = matchesRoute(router.location.pathname, settings(), true);
  const { accounts } = React.useContext(AccountsContext);
  const settings$1 = React.useContext(SettingsContext);
  const getEffectiveLanguage = (lang, fallback) => {
    return availableLanguages.indexOf(lang) > -1 ? lang : fallback;
  };
  const hasTestnetAccount = accounts.some((account2) => account2.testnet);
  const navigateToTrustedServices = React.useCallback(() => router.history.push(manageTrustedServices()), [
    router.history
  ]);
  const navigateToSavedAddressesExport = React.useCallback(() => router.history.push(savedAddressesExport()), [
    router.history
  ]);
  const switchLanguage = React.useCallback(
    (lang) => {
      i18n.changeLanguage(getEffectiveLanguage(lang, "en"));
      settings$1.setLanguage(lang);
    },
    [i18n, settings$1]
  );
  isDefaultProtocolClient().then(setIsDefaultHandler);
  const setDefaultClient = React.useCallback(() => {
    setAsDefaultProtocolClient().then((success) => setIsDefaultHandler(success));
  }, [setIsDefaultHandler]);
  return /* @__PURE__ */ React.createElement(Carousel$1, { current: showSettingsOverview ? 0 : 1 }, /* @__PURE__ */ React.createElement(List, { style: { padding: isSmallScreen ? 0 : "24px 16px" } }, availableLanguages.length > 1 ? /* @__PURE__ */ React.createElement(LanguageSetting, { onSelect: switchLanguage, value: getEffectiveLanguage(settings$1.language, "en") }) : null, settings$1.biometricAvailability.available ? /* @__PURE__ */ React.createElement(
    BiometricLockSetting,
    {
      enrolled: settings$1.biometricAvailability.enrolled,
      onToggle: settings$1.toggleBiometricLock,
      value: settings$1.biometricLock
    }
  ) : null, /* @__PURE__ */ React.createElement(
    TestnetSetting,
    {
      hasTestnetAccount,
      onToggle: settings$1.toggleTestnet,
      value: settings$1.showTestnet || hasTestnetAccount
    }
  ), /* @__PURE__ */ React.createElement(HideMemoSetting, { onToggle: settings$1.toggleHideMemos, value: settings$1.hideMemos }), /* @__PURE__ */ React.createElement(MultiSigSetting, { onToggle: settings$1.toggleMultiSignature, value: settings$1.multiSignature }), /* @__PURE__ */ React.createElement(ShowDustSetting, { onToggle: settings$1.toggleShowDust, value: settings$1.showDust }), /* @__PURE__ */ React.createElement(
    ShowClaimableBalanceSetting,
    {
      onToggle: settings$1.toggleShowClaimableBalanceTxs,
      value: settings$1.showClaimableBalanceTxs
    }
  ), /* @__PURE__ */ React.createElement(ProtocolHandlerSetting, { isDefaultHandler, onClick: setDefaultClient }), /* @__PURE__ */ React.createElement(TrustedServicesSetting, { onClick: navigateToTrustedServices }), /* @__PURE__ */ React.createElement(SavedAddressesExportSetting, { onClick: navigateToSavedAddressesExport })), /* @__PURE__ */ React.createElement(SettingsDialogs, null));
}
const AppSettings$1 = React.memo(AppSettings);
function SettingsPage() {
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const { t: t2 } = useTranslation();
  const showSettingsOverview = matchesRoute(router.location.pathname, settings(), true);
  const navigateToAllAccounts = React.useCallback(() => {
    router.history.push(allAccounts());
  }, [router.history]);
  const navigateToSettingsOverview = React.useCallback(() => router.history.push(settings()), [router.history]);
  const headerCard = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      Card$1,
      {
        style: {
          color: "black",
          position: "relative",
          background: "transparent",
          boxShadow: "none"
        }
      },
      /* @__PURE__ */ React.createElement(CardContent$1, { style: { padding: isSmallScreen ? 8 : void 0, paddingBottom: 8 } }, /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          onBack: showSettingsOverview ? navigateToAllAccounts : navigateToSettingsOverview,
          title: t2("app-settings.settings.title"),
          titleColor: "inherit",
          style: { marginTop: -12, marginLeft: 0 }
        }
      ))
    ),
    [isSmallScreen, navigateToAllAccounts, navigateToSettingsOverview, showSettingsOverview, t2]
  );
  return /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100%" }, /* @__PURE__ */ React.createElement(Section, { top: true, brandColored: true, grow: 0, shrink: 0 }, headerCard), /* @__PURE__ */ React.createElement(
    Section,
    {
      bottom: isSmallScreen,
      style: {
        backgroundColor: "#fcfcfc",
        height: "100%",
        flexGrow: 1,
        flexShrink: 1,
        padding: isSmallScreen ? void 0 : "0 24px",
        overflowY: "auto"
      }
    },
    /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100%", grow: true }, /* @__PURE__ */ React.createElement(Box$1, { grow: true, overflowY: "auto" }, /* @__PURE__ */ React.createElement(AppSettings$1, null)), /* @__PURE__ */ React.createElement(Box$1, { grow: 0, margin: "16px 0" }, /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textSecondary" }, "v", pkg.version)))
  ));
}
var CheckCircle = {};
var hasRequiredCheckCircle;
function requireCheckCircle() {
  if (hasRequiredCheckCircle) return CheckCircle;
  hasRequiredCheckCircle = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(CheckCircle, "__esModule", {
    value: true
  });
  CheckCircle.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckCircle");
  CheckCircle.default = _default;
  return CheckCircle;
}
var CheckCircleExports = /* @__PURE__ */ requireCheckCircle();
const CheckIcon = /* @__PURE__ */ getDefaultExportFromCjs(CheckCircleExports);
var Info = {};
var hasRequiredInfo;
function requireInfo() {
  if (hasRequiredInfo) return Info;
  hasRequiredInfo = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Info, "__esModule", {
    value: true
  });
  Info.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
  }), "Info");
  Info.default = _default;
  return Info;
}
var InfoExports = /* @__PURE__ */ requireInfo();
const InfoIcon = /* @__PURE__ */ getDefaultExportFromCjs(InfoExports);
var OfflineBolt = {};
var hasRequiredOfflineBolt;
function requireOfflineBolt() {
  if (hasRequiredOfflineBolt) return OfflineBolt;
  hasRequiredOfflineBolt = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(OfflineBolt, "__esModule", {
    value: true
  });
  OfflineBolt.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"
  }), "OfflineBolt");
  OfflineBolt.default = _default;
  return OfflineBolt;
}
var OfflineBoltExports = /* @__PURE__ */ requireOfflineBolt();
const OfflineBoltIcon = /* @__PURE__ */ getDefaultExportFromCjs(OfflineBoltExports);
var blue$1 = {};
var hasRequiredBlue;
function requireBlue() {
  if (hasRequiredBlue) return blue$1;
  hasRequiredBlue = 1;
  Object.defineProperty(blue$1, "__esModule", {
    value: true
  });
  blue$1.default = void 0;
  var blue2 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  var _default = blue2;
  blue$1.default = _default;
  return blue$1;
}
var blueExports = /* @__PURE__ */ requireBlue();
const blue = /* @__PURE__ */ getDefaultExportFromCjs(blueExports);
var green$1 = {};
var hasRequiredGreen;
function requireGreen() {
  if (hasRequiredGreen) return green$1;
  hasRequiredGreen = 1;
  Object.defineProperty(green$1, "__esModule", {
    value: true
  });
  green$1.default = void 0;
  var green2 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  var _default = green2;
  green$1.default = _default;
  return green$1;
}
var greenExports = /* @__PURE__ */ requireGreen();
const green = /* @__PURE__ */ getDefaultExportFromCjs(greenExports);
const icons = {
  connection: OfflineBoltIcon,
  error: ErrorIcon,
  info: InfoIcon,
  success: CheckIcon
};
const useNotificationStyles = makeStyles$1({
  clickable: {
    cursor: "pointer"
  },
  connection: {
    backgroundColor: grey["500"]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: blue["500"]
  },
  success: {
    backgroundColor: green["500"]
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    [theme.breakpoints.down(600)]: {
      width: "90vw"
    }
  },
  messageText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
});
function Notification(props) {
  const { open = true } = props;
  const classes = useNotificationStyles(props);
  const Icon = props.icon || icons[props.type];
  const contentClassnames = {
    connection: classes.connection,
    error: classes.error,
    info: classes.info,
    success: classes.success
  };
  return /* @__PURE__ */ React.createElement(
    Snackbar$1,
    {
      anchorOrigin: props.anchorOrigin,
      autoHideDuration: props.autoHideDuration,
      className: props.onClick ? classes.clickable : void 0,
      open,
      onClick: props.onClick,
      onClose: props.onClose,
      style: props.style
    },
    /* @__PURE__ */ React.createElement(
      SnackbarContent$1,
      {
        classes: {
          root: contentClassnames[props.type],
          message: classes.message
        },
        message: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { className: classes.icon }), /* @__PURE__ */ React.createElement("span", { className: classes.messageText }, props.message)),
        style: props.contentStyle
      }
    )
  );
}
const Notification$1 = React.memo(Notification);
const autoHideDuration = 5e3;
const NotificationDetails = React.memo(function NotificationDetails2(props) {
  const { message = "" } = props.notification || {};
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      top: /* @__PURE__ */ React.createElement(MainTitle, { onBack: props.onClose, title: t2("app.notification.details.title") }),
      actions: /* @__PURE__ */ React.createElement(DialogActionsBox, null, /* @__PURE__ */ React.createElement(ActionButton, { autoFocus: true, onClick: props.onClose, type: "primary" }, t2("app.notification.details.action.dismiss")))
    },
    /* @__PURE__ */ React.createElement(Box$1, { alignSelf: "center", margin: "24px auto 0", width: "100%" }, /* @__PURE__ */ React.createElement(Typography, { style: { whiteSpace: "pre-wrap" } }, message)),
    props.showSupportEmail ? /* @__PURE__ */ React.createElement(Box$1, { alignSelf: "center", margin: "36px auto 0", width: "100%" }, /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textSecondary" }, /* @__PURE__ */ React.createElement(Trans, { i18nKey: "app.notification.details.support" }, "Having an issue with the app?", /* @__PURE__ */ React.createElement("br", null), "Contact us via"), " ", /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "mailto:sunce@montelibero.org",
        style: { color: "inherit" },
        target: "_blank",
        rel: "noopener noreferrer"
      },
      "sunce@montelibero.org"
    ))) : null
  );
});
const OfflineNotification = React.memo(function OfflineNotification2(props) {
  const anchorOrigin = React.useMemo(
    () => ({
      horizontal: "left",
      vertical: "bottom"
    }),
    []
  );
  const contentStyle = React.useMemo(
    () => ({
      minWidth: 0
    }),
    []
  );
  return /* @__PURE__ */ React.createElement(Notification$1, { anchorOrigin, contentStyle, type: "connection", ...props });
});
function NotificationsContainer() {
  const { notifications } = React.useContext(NotificationsContext);
  const { isOnline } = useOnlineStatus();
  const [lastClosedNotificationID, setLastClosedNotificationID] = React.useState(0);
  const [notificationInDialog, setNotificationInDialog] = React.useState();
  const lastShownNotification = React.useRef(null);
  const { t: t2 } = useTranslation();
  const latestNotificationItem = notifications[notifications.length - 1] || null;
  const open = latestNotificationItem && latestNotificationItem.id !== lastClosedNotificationID;
  const visibleNotification = latestNotificationItem || lastShownNotification.current;
  const closeNotification = React.useCallback(() => setLastClosedNotificationID(visibleNotification.id), [
    visibleNotification
  ]);
  if (latestNotificationItem && latestNotificationItem !== lastShownNotification.current) {
    lastShownNotification.current = latestNotificationItem;
  }
  const showNotificationDetails = React.useCallback(
    (notification) => setNotificationInDialog(notification),
    []
  );
  const closeNotificationDetails = React.useCallback(() => {
    closeNotification();
    setNotificationInDialog(void 0);
  }, [closeNotification]);
  const onNotificationClick = React.useCallback(() => {
    if (visibleNotification && visibleNotification.onClick) {
      visibleNotification.onClick();
    } else if (visibleNotification && visibleNotification.type === "error") {
      showNotificationDetails(visibleNotification);
    }
  }, [visibleNotification, showNotificationDetails]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Notification$1,
    {
      autoHideDuration,
      message: visibleNotification ? visibleNotification.message : "",
      type: visibleNotification ? visibleNotification.type : "error",
      open: open && (!notificationInDialog || notificationInDialog !== visibleNotification),
      onClick: onNotificationClick,
      onClose: closeNotification
    }
  ), /* @__PURE__ */ React.createElement(OfflineNotification, { message: t2("app.notification.details.offline"), open: !isOnline }), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      fullScreen: true,
      open: Boolean(notificationInDialog),
      onClose: closeNotificationDetails,
      TransitionComponent: FullscreenDialogTransition
    },
    /* @__PURE__ */ React.createElement(
      NotificationDetails,
      {
        notification: latestNotificationItem,
        onClose: closeNotificationDetails,
        showSupportEmail: true
      }
    )
  ));
}
const NotificationContainer = React.memo(NotificationsContainer);
const connectionErrorMessages = {
  HorizonPublic: "Stellar connection issue",
  HorizonTestnet: "Stellar testnet connection issue",
  MultiSignature: "Multi-signature connection issue"
};
const connectionErrorPriorities = {
  HorizonTestnet: 1,
  MultiSignature: 2,
  HorizonPublic: 3
};
const removeFromErrors = (error) => (recentErrors) => {
  return recentErrors.filter((someError) => someError !== error);
};
function useRecentConnectionErrors() {
  const recentConnectionErrorsRef = React.useRef([]);
  const setRecentConnectionErrors = (setter) => {
    recentConnectionErrorsRef.current = setter(recentConnectionErrorsRef.current);
  };
  const trackConnectionError = React.useCallback((error) => {
    const timestampedError = { error, timestamp: Date.now() };
    setRecentConnectionErrors((recentErrors) => [...recentErrors, timestampedError]);
    setTimeout(() => setRecentConnectionErrors(removeFromErrors(timestampedError)), autoHideDuration);
  }, []);
  const beatsExistingErrors = (error) => {
    const errorPrio = connectionErrorPriorities[error.service];
    const recentConnectionErrors = recentConnectionErrorsRef.current;
    return recentConnectionErrors.length === 0 || recentConnectionErrors.every((prevError) => connectionErrorPriorities[prevError.error.service] <= errorPrio);
  };
  return {
    beatsExisting: beatsExistingErrors,
    track: trackConnectionError
  };
}
function ConnectionErrorListener() {
  const Notifications2 = React.useContext(NotificationsContext);
  const netWorker = useNetWorker();
  const recentErrors = useRecentConnectionErrors();
  React.useEffect(() => {
    const subscription = netWorker.connectionErrors().filter(recentErrors.beatsExisting).subscribe((error) => {
      Notifications2.showConnectionError({
        message: connectionErrorMessages[error.service]
      });
      recentErrors.track(error);
    });
    return () => subscription.unsubscribe();
  }, [Notifications2, netWorker, recentErrors]);
  return null;
}
const ConnectionErrorListener$1 = React.memo(ConnectionErrorListener);
function NoAccountsDialog(props) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      preventNotchSpacing: true,
      top: /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          hideBackButton: true,
          onBack: props.onClose,
          title: /* @__PURE__ */ React.createElement("span", null, t2("transaction-request.no-accounts.title"), props.testnet ? /* @__PURE__ */ React.createElement(TestnetBadge, { style: { marginLeft: 8 } }) : null)
        }
      ),
      actions: /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 32 }, smallDialog: true }, /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(CloseIcon, null), onClick: props.onClose, type: "secondary" }, t2("transaction-request.no-accounts.action.dismiss")))
    },
    /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, null, t2("transaction-request.no-accounts.info.1")), /* @__PURE__ */ React.createElement(Typography, null, t2("transaction-request.no-accounts.info.2")))
  );
}
function AccountSelectionList(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  function handleListItemClick(event, index) {
    setSelectedIndex(index);
    if (props.onChange) {
      props.onChange(props.accounts[index]);
    }
  }
  return /* @__PURE__ */ React.createElement(List, { style: { background: "transparent" } }, props.accounts.map((account2, index) => /* @__PURE__ */ React.createElement(
    AccountSelectionListItem,
    {
      account: account2,
      disabled: props.disabled,
      index,
      key: account2.id,
      onClick: handleListItemClick,
      selected: props.selectedAccount ? account2 === props.selectedAccount : index === selectedIndex
    }
  )), props.accounts.length === 0 ? /* @__PURE__ */ React.createElement(Typography, { style: { opacity: 0.7, textAlign: "center" } }, "(No accounts)") : null);
}
const useAccountListItemStyles = makeStyles$1({
  listItem: {
    background: "#FFFFFF",
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
    "&:focus": {
      backgroundColor: "#FFFFFF"
    },
    "&:hover": {
      backgroundColor: "rgb(232, 232, 232)"
    }
  }
});
const AccountSelectionListItem = React.memo(
  // tslint:disable-next-line no-shadowed-variable
  function AccountSelectionListItem2(props) {
    const classes = useAccountListItemStyles();
    return /* @__PURE__ */ React.createElement(
      ListItem,
      {
        button: true,
        className: classes.listItem,
        disabled: props.disabled,
        selected: props.selected,
        onClick: (event) => props.onClick(event, props.index)
      },
      /* @__PURE__ */ React.createElement(ListItemIcon$1, { style: { marginRight: 0 } }, /* @__PURE__ */ React.createElement(Radio$1, { checked: props.selected && !props.disabled, color: "default" })),
      /* @__PURE__ */ React.createElement(
        ListItemText,
        {
          primary: props.account.name,
          secondary: /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(InlineLoader, null) }, /* @__PURE__ */ React.createElement(AccountBalances$1, { publicKey: props.account.accountID, testnet: props.account.testnet }))
        }
      )
    );
  }
);
function ConnectedPaymentForm(props) {
  const { sendTransaction } = props;
  const testnet = props.selectedAccount.testnet;
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const { offers: openOrders } = useLiveAccountOffers(props.selectedAccount.publicKey, testnet);
  const trustedAssets = React.useMemo(() => getAssetsFromBalances(props.accountData.balances) || [libExports$1.Asset.native()], [
    props.accountData.balances
  ]);
  const handleSubmit = React.useCallback(
    async (createTx) => {
      try {
        setTxCreationPending(true);
        const { tx, signatureRequest } = await createTx(props.horizon, props.selectedAccount);
        setTxCreationPending(false);
        await sendTransaction(tx, signatureRequest);
      } catch (error) {
        trackError(error);
      } finally {
        setTxCreationPending(false);
      }
    },
    [props.selectedAccount, props.horizon, sendTransaction]
  );
  return /* @__PURE__ */ React.createElement(
    PaymentForm$1,
    {
      accountData: props.accountData,
      actionsRef: props.actionsRef,
      onCancel: props.onClose,
      onSubmit: handleSubmit,
      openOrdersCount: openOrders.length,
      preselectedParams: props.preselectedParams,
      testnet,
      trustedAssets,
      txCreationPending
    }
  );
}
function PaymentRequestContent(props) {
  const {
    amount,
    assetCode,
    assetIssuer,
    destination,
    memo,
    memoType,
    msg,
    isTestNetwork: testnet
  } = props.payStellarUri;
  const { t: t2 } = useTranslation();
  const accountDataSet = useLiveAccountDataSet(
    props.accounts.map((acc) => acc.publicKey),
    testnet
  );
  const accountData = accountDataSet.find((acc) => {
    var _a;
    return acc.account_id === ((_a = props.selectedAccount) == null ? void 0 : _a.publicKey);
  });
  const asset = React.useMemo(() => assetCode && assetIssuer ? new libExports$1.Asset(assetCode, assetIssuer) : libExports$1.Asset.native(), [
    assetCode,
    assetIssuer
  ]);
  const paymentParams = React.useMemo(() => {
    return {
      amount,
      asset,
      destination,
      memo,
      memoType,
      payStellarUri: props.payStellarUri
    };
  }, [amount, asset, destination, memo, memoType, props.payStellarUri]);
  return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(ViewLoading, { height: 200 }) }, props.selectedAccount && accountData && /* @__PURE__ */ React.createElement(React.Fragment, null, msg && /* @__PURE__ */ React.createElement(Typography, { style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement("b", null, t2("transaction-request.payment.uri-content.message"), ":"), " ", msg), /* @__PURE__ */ React.createElement(
    ConnectedPaymentForm,
    {
      accountData,
      actionsRef: props.actionsRef,
      horizon: props.horizon,
      onClose: props.onClose,
      selectedAccount: props.selectedAccount,
      sendTransaction: props.sendTransaction,
      preselectedParams: paymentParams
    }
  ))), /* @__PURE__ */ React.createElement(Typography, { component: "h6", variant: "h6", style: { marginTop: 8 } }, t2("transaction-request.payment.account-selector")), props.accounts.length > 0 ? /* @__PURE__ */ React.createElement(
    AccountSelectionList,
    {
      accounts: props.accounts,
      onChange: props.onAccountChange,
      selectedAccount: props.selectedAccount || void 0,
      testnet
    }
  ) : /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "error", variant: "h6", style: { paddingTop: 16 } }, asset.code === "XLM" ? t2("transaction-request.payment.error.no-activated-accounts") : t2("transaction-request.payment.error.no-accounts-with-trustline")));
}
const useStyles$2 = makeStyles$1(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "12px 0 0"
  },
  uriContainer: {
    paddingTop: 32,
    paddingBottom: 32
  }
}));
function TransactionRequestContent(props) {
  const { onAccountChange, onClose, sendTransaction } = props;
  const { msg, pubkey, isTestNetwork: testnet } = props.txStellarUri;
  const transaction = React.useMemo(() => props.txStellarUri.getTransaction(), [props.txStellarUri]);
  const replacements = React.useMemo(() => props.txStellarUri.getReplacements(), [props.txStellarUri]);
  const sourceAccountReplacement = React.useMemo(
    () => replacements.find((replacement) => replacement.path === "sourceAccount"),
    [replacements]
  );
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const classes = useStyles$2();
  const { t: t2 } = useTranslation();
  const getTitle = useTransactionTitle();
  const selectableAccounts = React.useMemo(() => {
    if (pubkey) {
      const requiredAccount = props.accounts.find((acc) => acc.publicKey === pubkey);
      return requiredAccount ? [requiredAccount] : [];
    } else {
      return props.accounts;
    }
  }, [props.accounts, pubkey]);
  const getNewSeqNumber = React.useCallback(
    async (account2) => {
      const fetchedSeqNum = await props.horizon.loadAccount(account2).then((acc) => acc.sequence);
      const newSeqNum = Big(fetchedSeqNum).add(1).toString();
      return newSeqNum;
    },
    [props.horizon]
  );
  const onSelect = React.useCallback(async () => {
    try {
      setTxCreationPending(true);
      const filledReplacements = {};
      const seqNumReplacement = replacements.find((replacement) => replacement.id === "seqNum");
      if (seqNumReplacement) {
        const sourceAccount = sourceAccountReplacement && props.selectedAccount ? props.selectedAccount.publicKey : transaction.source;
        const newSeqNum = await getNewSeqNumber(sourceAccount);
        filledReplacements[seqNumReplacement.id] = newSeqNum;
      }
      if (sourceAccountReplacement && props.selectedAccount) {
        const sourceAccount = sourceAccountReplacement && props.selectedAccount ? props.selectedAccount.publicKey : transaction.source;
        filledReplacements[sourceAccountReplacement.id] = props.selectedAccount.publicKey;
        if (!seqNumReplacement) {
          const artificialSeqNumReplacement = { id: "SEQ", path: "seqNum", hint: "sequence number" };
          props.txStellarUri.addReplacement(artificialSeqNumReplacement);
          const newSeqNum = await getNewSeqNumber(sourceAccount);
          filledReplacements[artificialSeqNumReplacement.id] = newSeqNum;
        }
      }
      const newTx = Object.keys(filledReplacements).length > 0 ? props.txStellarUri.replace(filledReplacements).getTransaction() : props.txStellarUri.getTransaction();
      if (props.txStellarUri.callback) {
        const signatureRequest = {
          created_at: Date.now().toString(),
          cursor: "",
          hash: props.txStellarUri.getTransaction().toXDR(),
          req: props.txStellarUri.toString(),
          status: MultisigTransactionStatus.pending,
          signed_by: [],
          signers: [],
          updated_at: Date.now().toString(),
          external: true
        };
        sendTransaction(newTx, signatureRequest);
      } else {
        sendTransaction(newTx);
      }
    } catch (error) {
      trackError(error);
    } finally {
      setTxCreationPending(false);
    }
  }, [
    getNewSeqNumber,
    props.txStellarUri,
    props.selectedAccount,
    replacements,
    sourceAccountReplacement,
    sendTransaction,
    transaction.source
  ]);
  const dialogActions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 64 } }, /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(CloseIcon, { style: { fontSize: 16 } }), onClick: onClose }, t2("transaction-request.transaction.action.dismiss")), /* @__PURE__ */ React.createElement(
      ActionButton,
      {
        icon: /* @__PURE__ */ React.createElement(SendIcon, { style: { fontSize: 16 } }),
        disabled: !props.selectedAccount,
        loading: txCreationPending,
        onClick: onSelect,
        type: "primary"
      },
      t2("transaction-request.transaction.action.select")
    )),
    [onSelect, onClose, props.selectedAccount, t2, txCreationPending]
  );
  return /* @__PURE__ */ React.createElement(Box, null, msg && /* @__PURE__ */ React.createElement(Typography, null, /* @__PURE__ */ React.createElement("b", null, t2("transaction-request.transaction.uri-content.message"), ":"), " ", msg), /* @__PURE__ */ React.createElement(Typography, { className: classes.uriContainer, variant: "h6" }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, getTitle(transaction)), /* @__PURE__ */ React.createElement(
    TransactionSummary$1,
    {
      account: null,
      fullWidth: true,
      showSource: !sourceAccountReplacement,
      canSubmit: false,
      transaction,
      testnet
    }
  )), sourceAccountReplacement ? selectableAccounts.length > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, t2("transaction-request.transaction.account-selector.source-account"), " ", /* @__PURE__ */ React.createElement("br", null)), sourceAccountReplacement.hint && /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, /* @__PURE__ */ React.createElement("b", null, t2("transaction-request.transaction.hint"), ":"), " ", sourceAccountReplacement.hint), /* @__PURE__ */ React.createElement(
    AccountSelectionList,
    {
      accounts: selectableAccounts,
      selectedAccount: props.selectedAccount || void 0,
      onChange: onAccountChange,
      testnet
    }
  )) : pubkey ? /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "error", variant: "h6", style: { paddingTop: 16 } }, t2("transaction-request.transaction.error.signer-not-imported", { signer: pubkey })) : /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "error", variant: "h6", style: { paddingTop: 16 } }, t2("transaction-request.transaction.error.no-eligible-account")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, t2("transaction-request.transaction.account-selector.signing-account"), " ", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement(AccountSelectionList, { accounts: selectableAccounts, onChange: onAccountChange, testnet })), /* @__PURE__ */ React.createElement(Portal$1, { target: props.actionsRef.element }, dialogActions));
}
const useStyles$1 = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "12px 0 0"
  },
  warningContainer: {
    alignItems: "center",
    alignSelf: "center",
    background: warningColor,
    display: "flex",
    justifyContent: "center",
    padding: "6px 16px",
    width: "fit-content",
    [breakpoints.up(600)]: {
      width: "100%"
    }
  }
}));
function StellarRequestReviewDialog(props) {
  const { onClose } = props;
  const classes = useStyles$1();
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      top: /* @__PURE__ */ React.createElement(MainTitle, { hideBackButton: true, onBack: onClose, title: t2("transaction-request.stellar-uri.title") }),
      actions: props.actionsRef
    },
    /* @__PURE__ */ React.createElement(Box, { className: classes.root }, props.stellarUri.signature ? /* @__PURE__ */ React.createElement(Typography, null, /* @__PURE__ */ React.createElement(Trans, { i18nKey: "transaction-request.stellar-uri.header.origin-domain" }, "The following transaction has been proposed by ", /* @__PURE__ */ React.createElement("b", null, { originDomain: props.stellarUri.originDomain }), ".")) : /* @__PURE__ */ React.createElement(Box, { className: classes.warningContainer }, /* @__PURE__ */ React.createElement(WarnIcon, null), /* @__PURE__ */ React.createElement(Typography, { style: { padding: 8 } }, t2("transaction-request.stellar-uri.header.warning")), /* @__PURE__ */ React.createElement(WarnIcon, null)), props.children)
  );
}
function ConnectedStellarRequestReviewDialog(props) {
  const { accounts } = React.useContext(AccountsContext);
  const testnet = props.stellarUri.isTestNetwork;
  const accountsForNetwork = React.useMemo(() => accounts.filter((acc) => acc.testnet === testnet), [accounts, testnet]);
  const [selectedAccount, setSelectedAccount] = React.useState(
    accountsForNetwork.length > 0 ? accountsForNetwork[0] : null
  );
  const dialogActionsRef = useDialogActions();
  return accountsForNetwork.length > 0 ? /* @__PURE__ */ React.createElement(TransactionSender$1, { account: selectedAccount || accountsForNetwork[0], onSubmissionCompleted: props.onClose }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(StellarRequestReviewDialog, { ...props, actionsRef: dialogActionsRef }, props.stellarUri.operation === StellarUriType.Pay ? /* @__PURE__ */ React.createElement(
    PaymentRequestContent,
    {
      accounts: accountsForNetwork,
      actionsRef: dialogActionsRef,
      horizon,
      selectedAccount,
      onAccountChange: setSelectedAccount,
      sendTransaction,
      onClose: props.onClose,
      payStellarUri: props.stellarUri
    }
  ) : /* @__PURE__ */ React.createElement(
    TransactionRequestContent,
    {
      accounts: accountsForNetwork,
      actionsRef: dialogActionsRef,
      horizon,
      selectedAccount,
      onAccountChange: setSelectedAccount,
      sendTransaction,
      onClose: props.onClose,
      txStellarUri: props.stellarUri
    }
  ))) : /* @__PURE__ */ React.createElement(NoAccountsDialog, { onClose: props.onClose, testnet });
}
var Cancel = {};
var hasRequiredCancel;
function requireCancel() {
  if (hasRequiredCancel) return Cancel;
  hasRequiredCancel = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Cancel, "__esModule", {
    value: true
  });
  Cancel.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  Cancel.default = _default;
  return Cancel;
}
var CancelExports = /* @__PURE__ */ requireCancel();
const DenyIcon = /* @__PURE__ */ getDefaultExportFromCjs(CancelExports);
function VerifyTrustedServiceDialog(props) {
  const { t: t2 } = useTranslation();
  const { onTrust, onCancel } = props;
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      background: /* @__PURE__ */ React.createElement(WarnIcon, { style: { fontSize: 220 } }),
      top: /* @__PURE__ */ React.createElement(MainTitle, { hideBackButton: true, onBack: onCancel, title: t2("transaction-request.verify-trusted-service.title") }),
      actions: /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 32 }, smallDialog: true }, /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(CheckIcon$1, null), onClick: onTrust, type: "secondary" }, t2("transaction-request.verify-trusted-service.action.trust")), /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(DenyIcon, null), onClick: onCancel, type: "primary" }, t2("transaction-request.verify-trusted-service.action.cancel")))
    },
    /* @__PURE__ */ React.createElement(Box, { padding: "24px 0 0" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, t2("transaction-request.verify-trusted-service.info.1"), ":"), /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textPrimary", variant: "h6", style: { paddingTop: 32, paddingBottom: 32 } }, props.domain), /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, t2("transaction-request.verify-trusted-service.info.2")), /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, t2("transaction-request.verify-trusted-service.info.3")))
  );
}
const Transition$1 = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Fade, { ref, ...props }));
function StellarUriHandler() {
  const { uri, clearURI } = React.useContext(TransactionRequestContext);
  const { trustedServices, setSetting } = React.useContext(SettingsContext);
  const [closedStellarURI, setClosedStellarURI] = React.useState(null);
  const renderedURI = uri || closedStellarURI;
  const closeDialog = React.useCallback(() => {
    setClosedStellarURI(uri);
    clearURI();
    window.history.pushState({}, "Sunce Wallet", window.location.href.replace(window.location.search, ""));
  }, [clearURI, uri]);
  if (!renderedURI) {
    return null;
  }
  const trustedService = trustedServices.find((service) => renderedURI.originDomain === service.domain);
  if (renderedURI.originDomain && !trustedService) {
    const onTrust = () => {
      const newTrustedServices = [
        ...trustedServices,
        { domain: renderedURI.originDomain, signingKey: renderedURI.pubkey }
      ];
      setSetting("trustedServices", newTrustedServices);
    };
    const onDeny = () => {
      closeDialog();
    };
    return /* @__PURE__ */ React.createElement(Dialog, { open: Boolean(uri), fullScreen: true, TransitionComponent: Transition$1 }, /* @__PURE__ */ React.createElement(VerifyTrustedServiceDialog, { onTrust, onCancel: onDeny, domain: renderedURI.originDomain }));
  }
  return /* @__PURE__ */ React.createElement(Dialog, { open: Boolean(uri), fullScreen: true, TransitionComponent: Transition$1 }, /* @__PURE__ */ React.createElement(ConnectedStellarRequestReviewDialog, { stellarUri: renderedURI, onClose: closeDialog }));
}
const StellarUriHandler$1 = React.memo(StellarUriHandler);
var Settings = {};
var hasRequiredSettings;
function requireSettings() {
  if (hasRequiredSettings) return Settings;
  hasRequiredSettings = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Settings, "__esModule", {
    value: true
  });
  Settings.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    transform: "scale(1.2, 1.2)",
    fill: "none",
    d: "M0 0h20v20H0V0z"
  }), _react.default.createElement("path", {
    transform: "scale(1.2, 1.2)",
    d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
  })), "Settings");
  Settings.default = _default;
  return Settings;
}
var SettingsExports = /* @__PURE__ */ requireSettings();
const SettingsIcon = /* @__PURE__ */ getDefaultExportFromCjs(SettingsExports);
var SystemUpdateAlt = {};
var hasRequiredSystemUpdateAlt;
function requireSystemUpdateAlt() {
  if (hasRequiredSystemUpdateAlt) return SystemUpdateAlt;
  hasRequiredSystemUpdateAlt = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(SystemUpdateAlt, "__esModule", {
    value: true
  });
  SystemUpdateAlt.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    fill: "none",
    d: "M0 .5h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"
  })), "SystemUpdateAlt");
  SystemUpdateAlt.default = _default;
  return SystemUpdateAlt;
}
var SystemUpdateAltExports = /* @__PURE__ */ requireSystemUpdateAlt();
const UpdateIcon = /* @__PURE__ */ getDefaultExportFromCjs(SystemUpdateAltExports);
var Notifications = {};
var hasRequiredNotifications;
function requireNotifications() {
  if (hasRequiredNotifications) return Notifications;
  hasRequiredNotifications = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Notifications, "__esModule", {
    value: true
  });
  Notifications.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
  }), "Notifications");
  Notifications.default = _default;
  return Notifications;
}
var NotificationsExports = /* @__PURE__ */ requireNotifications();
const NotificationsIcon = /* @__PURE__ */ getDefaultExportFromCjs(NotificationsExports);
async function hasPermission() {
  return await call(Messages.NotificationPermission) === "granted";
}
function requestPermission() {
  return call(Messages.RequestNotificationPermission);
}
async function showNotification(notification, onClick) {
  const canNotify = await hasPermission();
  if (canNotify) {
    call(Messages.ShowNotification, notification).then(onClick);
  } else {
    const granted = await requestPermission();
    if (granted) {
      call(Messages.ShowNotification, notification).then(onClick);
    }
  }
}
const PermissionNotification$1 = React.memo(function PermissionNotification2(props) {
  const { onHide } = props;
  const Notifications2 = React.useContext(NotificationsContext);
  const theme2 = useTheme();
  const { t: t2 } = useTranslation();
  const requestPermission$1 = React.useCallback(() => {
    (async () => {
      const granted = await requestPermission();
      onHide();
      if (granted) {
        showNotification({
          title: t2("app.notification.permission.app-notification.granted.title"),
          text: t2("app.notification.permission.app-notification.granted.text")
        });
      } else {
        Notifications2.showNotification("error", t2("app.notification.permission.app-notification.error"));
      }
    })().catch(trackError);
  }, [Notifications2, onHide, t2]);
  return /* @__PURE__ */ React.createElement(Grow, { in: props.open }, /* @__PURE__ */ React.createElement(
    SnackbarContent$1,
    {
      message: /* @__PURE__ */ React.createElement(HorizontalLayout, { alignItems: "center" }, /* @__PURE__ */ React.createElement(NotificationsIcon, null), /* @__PURE__ */ React.createElement("span", { style: { ...theme2.typography.button, marginLeft: 8 } }, t2("app.notification.permission.app-notification.message"))),
      onClick: requestPermission$1,
      style: {
        display: "flex",
        alignItems: "center",
        background: "white",
        color: theme2.palette.text.primary,
        cursor: "pointer",
        flexGrow: 0,
        justifyContent: "center"
      }
    }
  ));
});
function AppNotificationPermission() {
  const [showPermissionNotification, setShowPermissionNotification] = React.useState(false);
  React.useEffect(() => {
    hasPermission().then((canNotify) => setShowPermissionNotification(!canNotify));
  }, []);
  const hidePermissionNotification = React.useCallback(() => setShowPermissionNotification(false), []);
  return /* @__PURE__ */ React.createElement(PermissionNotification$1, { onHide: hidePermissionNotification, open: showPermissionNotification });
}
const AppNotificationPermission$1 = React.memo(AppNotificationPermission);
function isNotificationDismissed() {
  return localStorage.getItem("protocol-handler-notification-dismissed") !== null;
}
function setNotificationDismissed() {
  localStorage.setItem("protocol-handler-notification-dismissed", "true");
}
const PermissionNotification = React.memo(function PermissionNotification22(props) {
  const { onHide } = props;
  const { showNotification: showNotification2 } = React.useContext(NotificationsContext);
  const theme2 = useTheme();
  const { t: t2 } = useTranslation();
  const requestPermission2 = React.useCallback(() => {
    setAsDefaultProtocolClient().then((success) => {
      if (success) {
        showNotification2("success", t2("app.notification.permission.protocol-handler.success"));
      } else {
        showNotification2("error", t2("app.notification.permission.protocol-handler.error"));
      }
      onHide();
    });
  }, [onHide, showNotification2, t2]);
  const dismiss = React.useCallback(() => {
    setNotificationDismissed();
    onHide();
  }, [onHide]);
  return /* @__PURE__ */ React.createElement(Grow, { in: props.open }, /* @__PURE__ */ React.createElement(
    SnackbarContent$1,
    {
      message: /* @__PURE__ */ React.createElement(HorizontalLayout, { alignItems: "center" }, /* @__PURE__ */ React.createElement("span", { style: { ...theme2.typography.button, marginLeft: 8 } }, t2("app.notification.permission.protocol-handler.message")), /* @__PURE__ */ React.createElement(Tooltip$1, { title: t2("app.notification.permission.protocol-handler.tooltip.install") }, /* @__PURE__ */ React.createElement(IconButton, { onClick: requestPermission2, style: { color: "inherit" } }, /* @__PURE__ */ React.createElement(CheckIcon$1, null))), /* @__PURE__ */ React.createElement(Tooltip$1, { title: t2("app.notification.permission.protocol-handler.tooltip.dismiss") }, /* @__PURE__ */ React.createElement(IconButton, { onClick: dismiss, style: { color: "inherit" } }, /* @__PURE__ */ React.createElement(CloseIcon, null)))),
      style: {
        display: "flex",
        alignItems: "center",
        background: "white",
        color: theme2.palette.text.primary,
        cursor: "pointer",
        flexGrow: 0,
        justifyContent: "center"
      }
    }
  ));
});
function ProtocolHandlerPermission() {
  const [showPermissionNotification, setShowPermissionNotification] = React.useState(false);
  React.useEffect(() => {
    if (isNotificationDismissed()) {
      return;
    }
    isDefaultProtocolClient().then((isDefault) => {
      if (isDefault) {
        setShowPermissionNotification(false);
      } else {
        isDifferentHandlerInstalled().then((isDifferentInstalled) => {
          if (!isDifferentInstalled) {
            setAsDefaultProtocolClient();
            setShowPermissionNotification(false);
          } else {
            setShowPermissionNotification(true);
          }
        });
      }
    });
  }, []);
  const hidePermissionNotification = React.useCallback(() => setShowPermissionNotification(false), []);
  return /* @__PURE__ */ React.createElement(PermissionNotification, { onHide: hidePermissionNotification, open: showPermissionNotification });
}
const ProtocolHandlerPermission$1 = React.memo(ProtocolHandlerPermission);
const useCardStyles$1 = makeStyles$1({
  root: {
    width: "47%",
    minWidth: 250,
    maxWidth: 500,
    flexGrow: 1,
    margin: "12px 1%",
    borderRadius: 8
  }
});
function CardListCard(props) {
  const classes = useCardStyles$1();
  return /* @__PURE__ */ React.createElement(Card$1, { classes, ...props });
}
function CardList(props) {
  const { margin = "0 -1%", width: width2 = "102%" } = props;
  return /* @__PURE__ */ React.createElement(HorizontalLayout, { justifyContent: "space-evenly", wrap: "wrap", margin, width: width2 }, props.children, props.addInvisibleCard ? /* @__PURE__ */ React.createElement(CardListCard, { style: { visibility: "hidden" } }) : null);
}
const useCardStyles = makeStyles$1({
  cardActionArea: {
    width: "100%",
    height: "100%"
  },
  content: {
    boxSizing: "border-box",
    width: "100%",
    padding: "16px 24px",
    textOverflow: "ellipsis"
  }
});
const StyledCard = (props) => {
  const classes = useCardStyles();
  return /* @__PURE__ */ React.createElement(CardListCard, { elevation: props.elevation, onClick: props.onClick, style: props.style }, /* @__PURE__ */ React.createElement(CardActionArea$1, { className: classes.cardActionArea, centerRipple: true }, /* @__PURE__ */ React.createElement(CardContent$1, { className: classes.content }, props.children)));
};
const useBadgeStyles = makeStyles$1({
  badge: {
    marginTop: 4,
    marginRight: -2
  }
});
const StyledBadge = (props) => {
  const classes = useBadgeStyles();
  return props.badgeContent ? /* @__PURE__ */ React.createElement(Badge$1, { ...props }) : /* @__PURE__ */ React.createElement("div", { className: classes.badge, style: props.style }, props.children);
};
function Badges(props) {
  const { t: t2 } = useTranslation();
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const securityService = containsThirdPartySigner(accountData.signers);
  const multiSigIcon = securityService ? /* @__PURE__ */ React.createElement(
    Tooltip$1,
    {
      title: t2("app.account-list.badges.tooltip.security-service", `${securityService.name} Protection`, {
        service: securityService.name
      })
    },
    securityService.icon({ style: { marginTop: 6 } })
  ) : /* @__PURE__ */ React.createElement(Tooltip$1, { title: t2("app.account-list.badges.tooltip.multi-sig") }, /* @__PURE__ */ React.createElement(GroupIcon, { style: { marginTop: 6 } }));
  return /* @__PURE__ */ React.createElement(Box$1, null, accountData.signers.length > 1 || props.account.cosignerOf ? multiSigIcon : null);
}
function AccountCard(props) {
  const router = useRouter();
  const onClick = () => router.history.push(account(props.account.id));
  const pendingSignatureRequests = props.pendingSignatureRequests.filter(
    (req) => req.signers.some((signer) => signer === props.account.publicKey) && !req.signed_by.find((signer) => signer === props.account.publicKey)
  );
  const badgeContent = pendingSignatureRequests.length > 0 ? pendingSignatureRequests.length : null;
  return /* @__PURE__ */ React.createElement(StyledCard, { elevation: 5, onClick, style: { background: "white", color: "black" } }, /* @__PURE__ */ React.createElement(StyledBadge, { badgeContent, color: "secondary", style: { width: "100%" } }, /* @__PURE__ */ React.createElement(VerticalLayout, { minHeight: "100px", justifyContent: "space-evenly", textAlign: "left", width: "100%" }, /* @__PURE__ */ React.createElement(InlineErrorBoundary, null, /* @__PURE__ */ React.createElement(HorizontalLayout, { margin: "0 0 12px" }, /* @__PURE__ */ React.createElement(Typography, { variant: "h5", style: { flexGrow: 1, fontSize: 20 } }, props.account.name), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(Badges, { account: props.account }))), /* @__PURE__ */ React.createElement(Box$1, { fontSize: "120%" }, /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(InlineLoader, null) }, /* @__PURE__ */ React.createElement(
    AccountBalances$1,
    {
      publicKey: props.account.cosignerOf || props.account.publicKey,
      testnet: props.account.testnet
    }
  )))))));
}
function AddAccountCard(props) {
  const style2 = {
    ...props.style,
    background: "transparent",
    border: "2px solid black",
    boxShadow: "none",
    color: "black"
  };
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ React.createElement(StyledCard, { onClick: props.onClick, style: style2 }, /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100px", justifyContent: "center", fontSize: "1.3rem", textAlign: "center" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(AddIcon, { style: { fontSize: "200%" } })), /* @__PURE__ */ React.createElement("div", null, t2("app.account-list.add-account-card.label"))));
}
function AccountList(props) {
  const accounts = props.accounts.filter((account2) => account2.testnet === props.testnet);
  const { pendingSignatureRequests } = React.useContext(SignatureDelegationContext);
  return /* @__PURE__ */ React.createElement(CardList, { addInvisibleCard: accounts.length % 2 === 0 }, accounts.map((account2) => /* @__PURE__ */ React.createElement(AccountCard, { key: account2.id, account: account2, pendingSignatureRequests })), /* @__PURE__ */ React.createElement(AddAccountCard, { onClick: props.testnet ? props.onCreateTestnetAccount : props.onCreatePubnetAccount }));
}
const AccountList$1 = React.memo(AccountList);
const Transition = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Fade, { ref, ...props, appear: false }));
function CheckboxLabel(props) {
  return /* @__PURE__ */ React.createElement(Typography, { variant: "body1", style: { color: "black" } }, props.children);
}
function ExternalLink(props) {
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: props.href,
      style: { color: "inherit", fontWeight: "bold", textDecoration: "underline" },
      target: "_blank",
      rel: "noopener noreferrer"
    },
    props.children
  );
}
function TermsAndConditions(props) {
  const [checkedNotes, setCheckedNotes] = React.useState([false, false]);
  const allConfirmed = checkedNotes.every((isChecked) => isChecked);
  const { t: t2 } = useTranslation();
  const toggleNoteChecked = (index) => {
    const updatedNoteChecks = [...checkedNotes];
    updatedNoteChecks[index] = !updatedNoteChecks[index];
    setCheckedNotes(updatedNoteChecks);
  };
  return /* @__PURE__ */ React.createElement(Section, { brandColored: true, top: true, bottom: true, style: { display: "flex", flexDirection: "column", overflowY: "auto" } }, /* @__PURE__ */ React.createElement(VerticalLayout, { grow: 1, justifyContent: "center", margin: "0 auto", padding: "3vh 4vw", maxWidth: 800 }, /* @__PURE__ */ React.createElement(Typography, { color: "inherit", variant: "h5" }, t2("app.terms-and-conditions.header")), /* @__PURE__ */ React.createElement(FormGroup$1, { style: { marginTop: "5vh", marginBottom: "5vh" } }, /* @__PURE__ */ React.createElement(
    FormControlLabel$1,
    {
      control: /* @__PURE__ */ React.createElement(
        Checkbox$1,
        {
          checked: checkedNotes[0],
          onChange: () => toggleNoteChecked(0),
          style: { alignSelf: "flex-start", color: "inherit", marginTop: -7 }
        }
      ),
      label: /* @__PURE__ */ React.createElement(CheckboxLabel, null, t2("app.terms-and-conditions.checkbox.1.label"))
    }
  ), /* @__PURE__ */ React.createElement(
    FormControlLabel$1,
    {
      control: /* @__PURE__ */ React.createElement(
        Checkbox$1,
        {
          checked: checkedNotes[1],
          onChange: () => toggleNoteChecked(1),
          style: { alignSelf: "flex-start", color: "inherit", marginTop: -7 }
        }
      ),
      label: /* @__PURE__ */ React.createElement(CheckboxLabel, null, /* @__PURE__ */ React.createElement(Trans, { i18nKey: "app.terms-and-conditions.checkbox.2.label" }, "I have read, understood and agree to the", /* @__PURE__ */ React.createElement(ExternalLink, { href: "https://sunce.montelibero.org/terms.html" }, "Terms and Conditions"), "&", /* @__PURE__ */ React.createElement(ExternalLink, { href: "https://sunce.montelibero.org/privacy.html" }, "Privacy policy"), " of Sunce.")),
      style: {
        marginTop: 16
      }
    }
  )), /* @__PURE__ */ React.createElement(
    Button,
    {
      disabled: !allConfirmed,
      onClick: props.onConfirm,
      size: "large",
      style: { alignSelf: "center" },
      variant: "contained"
    },
    t2("app.terms-and-conditions.action.confirm")
  )));
}
function TermsAndConditionsDialog(props) {
  return /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: props.open,
      fullScreen: true,
      PaperProps: {
        // let the <Section> set the padding, so it will color the iPhone X top notch
        style: { padding: 0 }
      },
      TransitionComponent: Transition,
      TransitionProps: { unmountOnExit: true }
    },
    /* @__PURE__ */ React.createElement(TermsAndConditions, { ...props })
  );
}
const TermsAndConditions$1 = React.memo(TermsAndConditionsDialog);
const useStyles = makeStyles$1({
  "@keyframes glowing": {
    "0%": { filter: "drop-shadow(0 0 30px #ffffff)" },
    "50%": { filter: "drop-shadow(0 0 0px #ffffff)" },
    "100%": { filter: "drop-shadow(0 0 30px #ffffff)" }
  },
  icon: {
    animation: "$glowing 5000ms infinite"
  }
});
function AllAccountsPage() {
  const { accounts, networkSwitch, toggleNetwork } = React.useContext(AccountsContext);
  const router = useRouter();
  const settings$1 = React.useContext(SettingsContext);
  const { showNotification: showNotification2 } = React.useContext(NotificationsContext);
  const testnetAccounts = React.useMemo(() => accounts.filter((account2) => account2.testnet), [accounts]);
  const [isUpdateInProgress, setUpdateInProgress] = React.useState(false);
  const { t: t2 } = useTranslation();
  const styles3 = useStyles();
  const isWidthMax450 = useMediaQuery("(max-width:450px)");
  const updater = getUpdater();
  const startUpdate = React.useCallback(async () => {
    if (settings$1.updateAvailable && !updater.isUpdateStarted() && !updater.isUpdateDownloaded()) {
      try {
        showNotification2("info", t2("app.all-accounts.update.notification.start"));
        setUpdateInProgress(true);
        await updater.startUpdate();
        showNotification2("success", t2("app.all-accounts.update.notification.success"));
      } catch (error) {
        trackError(error);
      } finally {
        setUpdateInProgress(false);
      }
    }
  }, [settings$1.updateAvailable, showNotification2, updater, t2]);
  const updateButton = /* @__PURE__ */ React.createElement(Tooltip$1, { title: t2("app.all-accounts.update.tooltip") }, /* @__PURE__ */ React.createElement(
    IconButton,
    {
      onClick: startUpdate,
      color: "secondary",
      style: { marginLeft: isWidthMax450 ? 0 : 8, marginRight: -12, color: "inherit" }
    },
    /* @__PURE__ */ React.createElement(UpdateIcon, { className: styles3.icon })
  ));
  const networkSwitchButton = /* @__PURE__ */ React.createElement(
    FormControlLabel$1,
    {
      control: /* @__PURE__ */ React.createElement(Switch$1, { checked: networkSwitch === "testnet", color: "secondary", onChange: toggleNetwork }),
      label: t2("app.all-accounts.switch.label"),
      style: { marginRight: 0 }
    }
  );
  const headerContent = React.useMemo(
    () => /* @__PURE__ */ React.createElement(
      MainTitle,
      {
        title: networkSwitch === "testnet" ? t2("app.all-accounts.title.testnet") : t2("app.all-accounts.title.mainnet"),
        titleColor: "inherit",
        titleStyle: isWidthMax450 ? { marginRight: 0 } : {},
        hideBackButton: true,
        onBack: () => void 0,
        actions: /* @__PURE__ */ React.createElement(Box$1, { style: { marginLeft: "auto" } }, settings$1.showTestnet || networkSwitch === "testnet" || testnetAccounts.length > 0 ? networkSwitchButton : null, settings$1.updateAvailable && !isUpdateInProgress && !updater.isUpdateStarted() && !updater.isUpdateDownloaded() ? updateButton : null, /* @__PURE__ */ React.createElement(
          IconButton,
          {
            onClick: () => router.history.push(settings()),
            style: { marginLeft: isWidthMax450 ? 0 : 8, marginRight: -12, color: "inherit" }
          },
          /* @__PURE__ */ React.createElement(SettingsIcon, null)
        ))
      }
    ),
    [
      isUpdateInProgress,
      isWidthMax450,
      networkSwitch,
      networkSwitchButton,
      router.history,
      settings$1.showTestnet,
      settings$1.updateAvailable,
      testnetAccounts.length,
      updater,
      updateButton,
      t2
    ]
  );
  return /* @__PURE__ */ React.createElement(Section, { bottom: true, brandColored: true, noPadding: true, style: { height: "100vh" } }, /* @__PURE__ */ React.createElement(DialogBody, { backgroundColor: "unset", top: headerContent }, /* @__PURE__ */ React.createElement(VerticalLayout, { justifyContent: "space-between", grow: true, margin: "16px 0 0" }, /* @__PURE__ */ React.createElement(
    AccountList$1,
    {
      accounts,
      testnet: networkSwitch === "testnet",
      onCreatePubnetAccount: () => router.history.push(newAccount(false)),
      onCreateTestnetAccount: () => router.history.push(newAccount(true))
    }
  ), /* @__PURE__ */ React.createElement(AppNotificationPermission$1, null), /* @__PURE__ */ React.createElement(ProtocolHandlerPermission$1, null))), /* @__PURE__ */ React.createElement(
    TermsAndConditions$1,
    {
      open: settings$1.initialized && !settings$1.agreedToTermsAt,
      onConfirm: settings$1.confirmToC
    }
  ));
}
const AllAccountsPage$1 = React.memo(AllAccountsPage);
const isTradeEffect = (effect) => effect.type === "trade";
const isPaymentEffect = (effect) => effect.type === "account_credited" || effect.type === "account_debited";
function createEffectHandlers(router, netWorker, mainnetHorizonURLs, testnetHorizonURLs, t2) {
  return {
    async handleTradeEffect(account$1, effect) {
      const buying = effect.bought_asset_code && effect.bought_asset_issuer ? new libExports$1.Asset(effect.bought_asset_code, effect.bought_asset_issuer) : libExports$1.Asset.native();
      const selling = effect.sold_asset_code && effect.sold_asset_issuer ? new libExports$1.Asset(effect.sold_asset_code, effect.sold_asset_issuer) : libExports$1.Asset.native();
      const horizonURL = account$1.testnet ? testnetHorizonURLs : mainnetHorizonURLs;
      const openOffers = await netWorker.fetchAccountOpenOrders(horizonURL, account$1.accountID);
      const orderOnlyPartiallyExecuted = openOffers._embedded.records.find(
        (offer) => String(offer.id) === String(effect.offer_id)
      );
      if (orderOnlyPartiallyExecuted) {
        return;
      }
      const title = t2("app.notification.desktop.trade-completed.title", `Trade completed | ${account$1.name}`, {
        account: account$1.name
      });
      const notificationBody = OfferDetailsString(
        {
          amount: Big(effect.sold_amount),
          price: Big(effect.bought_amount).div(effect.sold_amount),
          buying,
          selling
        },
        t2
      );
      showNotification({ title, text: notificationBody }, () => router.history.push(account(account$1.id)));
    },
    async handlePaymentEffect(account$1, effect) {
      if (effect.type === "account_credited" && effect.account === account$1.accountID) {
        const paymentEffect = effect;
        const title = t2("app.notification.desktop.received-payment.title", `Received payment | ${account$1.name}`, {
          account: account$1.name
        });
        const notificationBody = t2(
          "app.notification.desktop.received-payment.body",
          `Received ${formatBalance(paymentEffect.amount)} ${paymentEffect.asset_code || "XLM"}`,
          {
            amount: formatBalance(paymentEffect.amount),
            assetCode: paymentEffect.asset_code || "XLM"
          }
        );
        showNotification({ title, text: notificationBody }, () => router.history.push(account(account$1.id)));
      }
    }
  };
}
function DesktopNotifications() {
  const { accounts } = React.useContext(AccountsContext);
  const { subscribeToNewSignatureRequests } = React.useContext(SignatureDelegationContext);
  const mainnetHorizonURLs = useHorizonURLs(false);
  const testnetHorizonURLs = useHorizonURLs(true);
  const netWorker = useNetWorker();
  const router = useRouter();
  const { t: t2 } = useTranslation();
  const effectHandlers = useSingleton(
    () => createEffectHandlers(router, netWorker, mainnetHorizonURLs, testnetHorizonURLs, t2)
  );
  const handleNewSignatureRequest = React.useCallback(
    (signatureRequest) => {
      const signersNotHavingSigned = signatureRequest.signers.filter(
        (signer) => signatureRequest.signed_by.indexOf(signer) === -1
      );
      const accountPublicKeys = accounts.map((account2) => account2.publicKey);
      if (signersNotHavingSigned.some((signer) => accountPublicKeys.includes(signer))) {
        showNotification(
          {
            title: t2("app.notification.desktop.new-signature-request.title"),
            text: t2(
              "app.notification.desktop.new-signature-request.title",
              `From ${signatureRequest.signed_by.join(", ")}`,
              { signersHavingSigned: signatureRequest.signed_by.join(", ") }
            )
          },
          () => router.history.push(allAccounts())
        );
      }
    },
    [accounts, router.history, t2]
  );
  React.useEffect(() => {
    const unsubscribeFromNewSignatureRequests = subscribeToNewSignatureRequests(handleNewSignatureRequest);
    return unsubscribeFromNewSignatureRequests;
  }, [handleNewSignatureRequest, subscribeToNewSignatureRequests]);
  useLiveAccountEffects(accounts, (account2, effect) => {
    if (isTradeEffect(effect)) {
      effectHandlers.handleTradeEffect(account2, effect).catch(trackError);
    } else if (isPaymentEffect(effect)) {
      effectHandlers.handlePaymentEffect(account2, effect).catch(trackError);
    }
  });
  return null;
}
const DesktopNotifications$1 = React.memo(DesktopNotifications);
const CreateMainnetAccount = () => /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(AccountPage$1, { accountCreation: "pubnet" }));
const CreateTestnetAccount = () => /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(AccountPage$1, { accountCreation: "testnet" }));
function Stage2() {
  React.useEffect(() => {
    appIsLoaded();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100%", style: { WebkitOverflowScrolling: "touch" } }, /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100%", grow: true, overflowY: "hidden" }, /* @__PURE__ */ React.createElement(MainErrorBoundary, null, /* @__PURE__ */ React.createElement(Switch$2, null, /* @__PURE__ */ React.createElement(Route, { exact: true, path: "/", component: AllAccountsPage$1 }), /* @__PURE__ */ React.createElement(
    Route,
    {
      exact: true,
      path: [
        "/account/create/mainnet",
        "/account/import/mainnet",
        "/account/join/mainnet",
        "/account/new/mainnet"
      ],
      component: CreateMainnetAccount
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      exact: true,
      path: [
        "/account/create/testnet",
        "/account/import/testnet",
        "/account/join/testnet",
        "/account/new/testnet"
      ],
      component: CreateTestnetAccount
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: ["/account/:id/:action/:subaction", "/account/:id/:action", "/account/:id"],
      render: (props) => /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(AccountPage$1, { accountID: props.match.params.id }))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: ["/settings/:action", "/settings"],
      render: () => /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(SettingsPage, null))
    }
  ))))), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(NotificationContainer, null), /* @__PURE__ */ React.createElement(ConnectionErrorListener$1, null)), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(DesktopNotifications$1, null), /* @__PURE__ */ React.createElement(StellarUriHandler$1, null)), null, null);
}
const appStage2 = React.memo(Stage2);
const appStage2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: appStage2
}, Symbol.toStringTag, { value: "Module" }));
export {
  deleteAccount as $,
  AccountName as A,
  Badge$1 as B,
  ClearIcon as C,
  DialogContentText$1 as D,
  ExpandMoreIcon as E,
  FormBigNumber as F,
  PersonAddIcon as G,
  CheckIcon$1 as H,
  InlineLoader as I,
  RemoveIcon as J,
  Radio$1 as K,
  ListItemIcon$1 as L,
  MenuItem$1 as M,
  RightIcon as N,
  manageAccountSignersDetails as O,
  Portal$1 as P,
  manageAccountSigners as Q,
  RadioGroupContext as R,
  SingleBalance as S,
  TransactionSender$1 as T,
  Switch$1 as U,
  VerifiedUserIcon as V,
  AccountSelectionList as W,
  WarnIcon as X,
  PasswordField as Y,
  FormControlLabel$1 as Z,
  exportSecretKey as _,
  Trans as a,
  changeAccountPassword as a0,
  accountSettings as a1,
  GroupIcon as a2,
  allAccounts as a3,
  showTransaction as a4,
  TransactionReviewDialog$1 as a5,
  Collapse$1 as a6,
  getPaymentSummary as a7,
  SettingsIcon as a8,
  useOperationTitle as a9,
  MemoMessage$1 as aa,
  routeUp as ab,
  depositAsset as ac,
  isDustTransaction as ad,
  UpdateIcon$1 as ae,
  newAccount as af,
  createAccount as ag,
  importAccount as ah,
  joinSharedAccount as ai,
  KeyExportBox$1 as aj,
  signTransaction as ak,
  ReviewForm as al,
  SendIcon as am,
  withFallback as an,
  OpenInNewIcon as ao,
  appStage2$1 as ap,
  account as b,
  createTransaction as c,
  AssetLogo$1 as d,
  Card$1 as e,
  CardContent$1 as f,
  Avatar$1 as g,
  useWellKnownAccounts as h,
  assetDetails as i,
  balanceDetails as j,
  matchesRoute as k,
  Divider$1 as l,
  manageAccountAssets as m,
  formatBalance as n,
  openLink as o,
  isValidAmount as p,
  AssetSelector$1 as q,
  Carousel$1 as r,
  sortBalances as s,
  tradeAsset as t,
  useTickerAssets as u,
  Box as v,
  TestnetBadge as w,
  LazyScrollableBalances as x,
  getLastArgumentFromURL as y,
  FormGroup$1 as z
};
//# sourceMappingURL=app-stage2-CwdMAbKU.js.map
