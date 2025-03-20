import { S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, R as React, a8 as useIsMobile, Z as useTranslation, ce as Menu, X as useLiveAccountData, Y as makeStyles, aw as ListItemText } from "./app-DBEXmgIl.js";
import { C as CallReceivedIcon, a as CallMadeIcon } from "./CallReceived-Azk4kvuL.js";
import { a8 as SettingsIcon, l as Divider, M as MenuItem, L as ListItemIcon } from "./app-stage2-CwdMAbKU.js";
import { S as SwapHorizIcon } from "./SwapHoriz-Bpbxs0OS.js";
var List = {};
var hasRequiredList;
function requireList() {
  if (hasRequiredList) return List;
  hasRequiredList = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(List, "__esModule", {
    value: true
  });
  List.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
  }), "List");
  List.default = _default;
  return List;
}
var ListExports = /* @__PURE__ */ requireList();
const ListIcon = /* @__PURE__ */ getDefaultExportFromCjs(ListExports);
var AttachMoney = {};
var hasRequiredAttachMoney;
function requireAttachMoney() {
  if (hasRequiredAttachMoney) return AttachMoney;
  hasRequiredAttachMoney = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(AttachMoney, "__esModule", {
    value: true
  });
  AttachMoney.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
  }), "AttachMoney");
  AttachMoney.default = _default;
  return AttachMoney;
}
var AttachMoneyExports = /* @__PURE__ */ requireAttachMoney();
const MoneyIcon = /* @__PURE__ */ getDefaultExportFromCjs(AttachMoneyExports);
var Contacts = {};
var hasRequiredContacts;
function requireContacts() {
  if (hasRequiredContacts) return Contacts;
  hasRequiredContacts = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Contacts, "__esModule", {
    value: true
  });
  Contacts.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    fill: "none",
    d: ""
  }), _react.default.createElement("path", {
    d: "M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
  })), "Contacts");
  Contacts.default = _default;
  return Contacts;
}
var ContactsExports = /* @__PURE__ */ requireContacts();
const ContactsIcon = /* @__PURE__ */ getDefaultExportFromCjs(ContactsExports);
function ContextMenu({ anchor, menu }) {
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [isOpen, setOpenState] = React.useState(false);
  const show = (event) => {
    setAnchorElement(event.currentTarget);
    setOpenState(true);
  };
  const hide = () => setOpenState(false);
  const closeAndCall = (fn) => {
    return () => {
      hide();
      if (fn) {
        fn();
      }
    };
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, anchor({ onOpen: show }), menu({
    anchorEl: anchorElement,
    open: isOpen,
    onClose: hide,
    closeAndCall
  }));
}
const ContextMenu$1 = React.memo(ContextMenu);
const useContextMenuItemStyles = makeStyles({
  disabled: {
    opacity: "1 !important",
    "& > *": {
      opacity: "0.5 !important"
    }
  },
  icon: {
    flex: "0 0 24px",
    minWidth: 24,
    marginRight: 24
  }
});
const AccountContextMenuItem = React.memo(
  React.forwardRef((props, ref) => {
    const classes = useContextMenuItemStyles();
    if (props.hidden) {
      return null;
    }
    return /* @__PURE__ */ React.createElement(MenuItem, { className: props.disabled ? classes.disabled : "", disabled: props.disabled, onClick: props.onClick }, /* @__PURE__ */ React.createElement(ListItemIcon, { className: classes.icon }, props.icon), /* @__PURE__ */ React.createElement(ListItemText, { ref }, props.label));
  })
);
function LiveAccountContextMenuItems(props) {
  const { closeAndCall } = props;
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const isFunded = accountData.balances.length > 0;
  const isSigner = accountData.signers.some((signer) => signer.key === props.account.publicKey);
  const activated = isFunded && isSigner;
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    AccountContextMenuItem,
    {
      disabled: !activated || !props.onTrade,
      icon: /* @__PURE__ */ React.createElement(SwapHorizIcon, { style: { transform: "scale(1.2)" } }),
      label: t("account.context-menu.trade.label"),
      onClick: closeAndCall(props.onTrade)
    }
  ), /* @__PURE__ */ React.createElement(
    AccountContextMenuItem,
    {
      disabled: !isSigner || !props.onDeposit,
      icon: /* @__PURE__ */ React.createElement(CallReceivedIcon, null),
      label: t("account.context-menu.deposit.label"),
      onClick: closeAndCall(accountData.balances.length > 1 ? props.onDeposit : props.onPurchaseLumens)
    }
  ), /* @__PURE__ */ React.createElement(
    AccountContextMenuItem,
    {
      disabled: !activated || !props.onWithdraw,
      icon: /* @__PURE__ */ React.createElement(CallMadeIcon, null),
      label: t("account.context-menu.withdraw.label"),
      onClick: closeAndCall(props.onWithdraw)
    }
  ), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(
    AccountContextMenuItem,
    {
      disabled: !activated || !props.onManageAssets,
      icon: /* @__PURE__ */ React.createElement(MoneyIcon, null),
      label: t("account.context-menu.assets-and-balances.label"),
      onClick: closeAndCall(props.onManageAssets)
    }
  ), /* @__PURE__ */ React.createElement(
    AccountContextMenuItem,
    {
      disabled: !activated || !props.onSavedAddresses,
      icon: /* @__PURE__ */ React.createElement(ContactsIcon, null),
      label: t("account.context-menu.saved-addresses.label"),
      onClick: closeAndCall(props.onSavedAddresses)
    }
  ));
}
function AccountContextMenu(props) {
  const isSmallScreen = useIsMobile();
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    ContextMenu$1,
    {
      anchor: props.children,
      menu: ({ anchorEl, open, onClose, closeAndCall }) => /* @__PURE__ */ React.createElement(
        Menu,
        {
          anchorEl: isSmallScreen ? document.body : anchorEl || void 0,
          disableAutoFocusItem: isSmallScreen,
          onClose,
          open
        },
        /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(LiveAccountContextMenuItems, { closeAndCall, ...props })),
        props.showingSettings ? /* @__PURE__ */ React.createElement(
          AccountContextMenuItem,
          {
            disabled: !props.onAccountTransactions,
            icon: /* @__PURE__ */ React.createElement(ListIcon, null),
            label: t("account.context-menu.transactions.label"),
            onClick: closeAndCall(props.onAccountTransactions)
          }
        ) : /* @__PURE__ */ React.createElement(
          AccountContextMenuItem,
          {
            disabled: !props.onAccountSettings,
            icon: /* @__PURE__ */ React.createElement(SettingsIcon, null),
            label: t("account.context-menu.account-settings.label"),
            onClick: closeAndCall(props.onAccountSettings)
          }
        )
      )
    }
  );
}
const AccountContextMenu$1 = React.memo(AccountContextMenu);
export {
  AccountContextMenu$1 as default
};
//# sourceMappingURL=AccountContextMenu-D4g5T5nU.js.map
