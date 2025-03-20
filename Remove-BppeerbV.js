import { ca as _arrayWithHoles, cb as _iterableToArray, cc as _unsupportedIterableToArray, cd as _nonIterableRest, i as withStyles, R as React, _ as _objectWithoutProperties, P as Paper, f as _extends, j as clsx, B as ButtonBase, o as IconButton, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs } from "./app-DBEXmgIl.js";
import { a6 as Collapse } from "./app-stage2-CwdMAbKU.js";
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
var styles$2 = function styles2(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      transition: theme.transitions.create(["margin"], transition),
      "&:before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(["opacity", "background-color"], transition)
      },
      "&:first-child": {
        "&:before": {
          display: "none"
        }
      },
      "&$expanded": {
        margin: "16px 0",
        "&:first-child": {
          marginTop: 0
        },
        "&:last-child": {
          marginBottom: 0
        },
        "&:before": {
          opacity: 0
        }
      },
      "&$expanded + &": {
        "&:before": {
          display: "none"
        }
      },
      "&$disabled": {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      "&:first-child": {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      "&:last-child": {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        "@supports (-ms-ime-align: auto)": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },
    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var ExpansionPanel = React.forwardRef(function ExpansionPanel2(props, ref) {
  var childrenProp = props.children, classes = props.classes, className = props.className, _props$defaultExpande = props.defaultExpanded, defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, expandedProp = props.expanded, onChange = props.onChange, _props$square = props.square, square = _props$square === void 0 ? false : _props$square, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Collapse : _props$TransitionComp, TransitionProps = props.TransitionProps, other = _objectWithoutProperties(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);
  var _React$useRef = React.useRef(expandedProp != null), isControlled = _React$useRef.current;
  var _React$useState = React.useState(defaultExpanded), expandedState = _React$useState[0], setExpandedState = _React$useState[1];
  var expanded = isControlled ? expandedProp : expandedState;
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      setExpandedState(!expanded);
    }
    if (onChange) {
      onChange(event, !expanded);
    }
  };
  var _React$Children$toArr = React.Children.toArray(childrenProp), _React$Children$toArr2 = _toArray(_React$Children$toArr), summary = _React$Children$toArr2[0], children = _React$Children$toArr2.slice(1);
  return React.createElement(Paper, _extends({
    className: clsx(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref,
    square
  }, other), React.cloneElement(summary, {
    disabled,
    expanded,
    onChange: handleChange
  }), React.createElement(TransitionComponent, _extends({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), React.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props["aria-controls"],
    role: "region"
  }, children)));
});
const ExpansionPanel$1 = withStyles(styles$2, {
  name: "MuiExpansionPanel"
})(ExpansionPanel);
var styles$1 = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    padding: "8px 24px 24px"
  }
};
var ExpansionPanelDetails = React.forwardRef(function ExpansionPanelDetails2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  return React.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref
  }, other));
});
const ExpansionPanelDetails$1 = withStyles(styles$1, {
  name: "MuiExpansionPanelDetails"
})(ExpansionPanelDetails);
var styles = function styles22(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      minHeight: 8 * 6,
      transition: theme.transitions.create(["min-height", "background-color"], transition),
      padding: "0 24px 0 24px",
      "&:hover:not($disabled)": {
        cursor: "pointer"
      },
      "&$expanded": {
        minHeight: 64
      },
      "&$focused": {
        backgroundColor: theme.palette.grey[300]
      },
      "&$disabled": {
        opacity: 0.38
      }
    },
    /* Styles applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},
    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the children wrapper element. */
    content: {
      display: "flex",
      flexGrow: 1,
      transition: theme.transitions.create(["margin"], transition),
      margin: "12px 0",
      "&$expanded": {
        margin: "20px 0"
      }
    },
    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", transition),
      "&:hover": {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: "transparent"
      },
      "&$expanded": {
        transform: "rotate(180deg)"
      }
    }
  };
};
var ExpansionPanelSummary = React.forwardRef(function ExpansionPanelSummary2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, expanded = props.expanded, expandIcon = props.expandIcon, IconButtonProps = props.IconButtonProps, onBlur = props.onBlur, onChange = props.onChange, onClick = props.onClick, onFocusVisible = props.onFocusVisible, other = _objectWithoutProperties(props, ["children", "classes", "className", "disabled", "expanded", "expandIcon", "IconButtonProps", "onBlur", "onChange", "onClick", "onFocusVisible"]);
  var _React$useState = React.useState(false), focusedState = _React$useState[0], setFocusedState = _React$useState[1];
  var handleFocusVisible = function handleFocusVisible2(event) {
    setFocusedState(true);
    if (onFocusVisible) {
      onFocusVisible(event);
    }
  };
  var handleBlur = function handleBlur2(event) {
    setFocusedState(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  var handleChange = function handleChange2(event) {
    if (onChange) {
      onChange(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return React.createElement(ButtonBase, _extends({
    focusRipple: false,
    disableRipple: true,
    disabled,
    component: "div",
    "aria-expanded": expanded,
    className: clsx(classes.root, className, disabled && classes.disabled, expanded && classes.expanded, focusedState && classes.focused),
    onFocusVisible: handleFocusVisible,
    onBlur: handleBlur,
    onClick: handleChange,
    ref
  }, other), React.createElement("div", {
    className: clsx(classes.content, expanded && classes.expanded)
  }, children), expandIcon && React.createElement(IconButton, _extends({
    disabled,
    className: clsx(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: -1,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
const ExpansionPanelSummary$1 = withStyles(styles, {
  name: "MuiExpansionPanelSummary"
})(ExpansionPanelSummary);
var Remove = {};
var hasRequiredRemove;
function requireRemove() {
  if (hasRequiredRemove) return Remove;
  hasRequiredRemove = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Remove, "__esModule", {
    value: true
  });
  Remove.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M19 13H5v-2h14v2z"
  }), "Remove");
  Remove.default = _default;
  return Remove;
}
var RemoveExports = /* @__PURE__ */ requireRemove();
const RemoveIcon = /* @__PURE__ */ getDefaultExportFromCjs(RemoveExports);
export {
  ExpansionPanel$1 as E,
  RemoveIcon as R,
  ExpansionPanelSummary$1 as a,
  ExpansionPanelDetails$1 as b
};
//# sourceMappingURL=Remove-BppeerbV.js.map
