import { R as React, ab as makeStyles, H as ListItem, ah as breakpoints, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, Z as useTranslation, b6 as isWrongPasswordError, aL as trackError, a9 as MainTitle, af as Box, E as Typography, b2 as getErrorTranslation, b0 as DialogBody, $ as DialogActionsBox, a0 as ActionButton, a8 as useIsMobile, ad as InputAdornment } from "./app-DBEXmgIl.js";
import { L as ListItemIcon, N as RightIcon, aj as KeyExportBox, X as WarnIcon, Y as PasswordField } from "./app-stage2-CwdMAbKU.js";
const useAccountSettingsItemStyles = makeStyles({
  caret: {
    color: "rgba(0, 0, 0, 0.35)",
    fontSize: 48,
    justifyContent: "center",
    marginRight: -8,
    transition: "transform .3s",
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
    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.1)",
    [breakpoints.down(600)]: {
      padding: "16px 12px"
    },
    "&:focus": {
      backgroundColor: "#FFFFFF"
    },
    "&$button:hover": {
      backgroundColor: "rgb(232, 232, 232)"
    },
    "&:not(:first-child):not($subItem)": {
      borderTop: "1px solid rgba(230, 230, 230, 1.0)"
    }
  },
  button: {
    // only used in conjunction with settingsItem
  },
  rotateRight: {
    transform: "rotate(90deg)"
  },
  subItem: {
    // only used in conjunction with settingsItem
  }
});
const AccountSettingsItem = React.forwardRef(function AccountSettingsItem2(props, ref) {
  const classes = useAccountSettingsItemStyles();
  const isButton = Boolean(props.onClick);
  const className = [classes.settingsItem, isButton ? classes.button : "", props.subItem ? classes.subItem : ""].join(
    " "
  );
  return /* @__PURE__ */ React.createElement(
    ListItem,
    {
      button: isButton,
      className,
      disabled: props.disabled,
      onClick: props.onClick,
      ref
    },
    /* @__PURE__ */ React.createElement(ListItemIcon, { className: classes.icon }, props.icon || /* @__PURE__ */ React.createElement("div", null)),
    props.children,
    props.caret && props.caret !== "hide" ? /* @__PURE__ */ React.createElement(ListItemIcon, { className: `${classes.caret} ${props.caret === "down" ? classes.rotateRight : ""}` }, /* @__PURE__ */ React.createElement(RightIcon, { className: classes.caret })) : null
  );
});
const AccountSettingsItem$1 = React.memo(AccountSettingsItem);
var LockOutlined = {};
var hasRequiredLockOutlined;
function requireLockOutlined() {
  if (hasRequiredLockOutlined) return LockOutlined;
  hasRequiredLockOutlined = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(LockOutlined, "__esModule", {
    value: true
  });
  LockOutlined.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  })), _react.default.createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  })), "LockOutlined");
  LockOutlined.default = _default;
  return LockOutlined;
}
var LockOutlinedExports = /* @__PURE__ */ requireLockOutlined();
const LockIcon = /* @__PURE__ */ getDefaultExportFromCjs(LockOutlinedExports);
var LockOpenOutlined = {};
var hasRequiredLockOpenOutlined;
function requireLockOpenOutlined() {
  if (hasRequiredLockOpenOutlined) return LockOpenOutlined;
  hasRequiredLockOpenOutlined = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(LockOpenOutlined, "__esModule", {
    value: true
  });
  LockOpenOutlined.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  }), "LockOpenOutlined");
  LockOpenOutlined.default = _default;
  return LockOpenOutlined;
}
var LockOpenOutlinedExports = /* @__PURE__ */ requireLockOpenOutlined();
const LockOpenIcon = /* @__PURE__ */ getDefaultExportFromCjs(LockOpenOutlinedExports);
var Lock = {};
var hasRequiredLock;
function requireLock() {
  if (hasRequiredLock) return Lock;
  hasRequiredLock = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Lock, "__esModule", {
    value: true
  });
  Lock.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
  }), "Lock");
  Lock.default = _default;
  return Lock;
}
var LockExports = /* @__PURE__ */ requireLock();
const LockFilledIcon = /* @__PURE__ */ getDefaultExportFromCjs(LockExports);
function PromptToReveal(props) {
  const isSmallScreen = useIsMobile();
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      background: /* @__PURE__ */ React.createElement(WarnIcon, { style: { fontSize: 220 } }),
      noMaxWidth: true,
      preventNotchSpacing: true,
      top: props.title,
      actions: /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 32 }, smallDialog: true }, /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(LockOpenIcon, null), onClick: props.onReveal, type: "primary" }, isSmallScreen ? t("account-settings.export-key.action.reveal.short") : t("account-settings.export-key.action.reveal.long")))
    },
    props.children,
    /* @__PURE__ */ React.createElement("form", { noValidate: true, onSubmit: props.onReveal }, props.requiresPassword ? /* @__PURE__ */ React.createElement(
      PasswordField,
      {
        fullWidth: true,
        error: props.passwordError !== null,
        label: props.passwordError ? props.passwordError.message : t("account-settings.export-key.textfield.password.label"),
        margin: "dense",
        value: props.password,
        onChange: props.updatePassword,
        style: { marginTop: 8 },
        InputProps: {
          startAdornment: /* @__PURE__ */ React.createElement(InputAdornment, { position: "start" }, /* @__PURE__ */ React.createElement(LockIcon, { color: "disabled" }))
        }
      }
    ) : null)
  );
}
function ShowSecretKey(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      background: /* @__PURE__ */ React.createElement(LockFilledIcon, { style: { fontSize: 220 } }),
      noMaxWidth: true,
      preventNotchSpacing: true,
      top: props.title,
      actions: props.onConfirm ? /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { marginTop: 32 }, smallDialog: true }, /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onConfirm, type: "primary" }, t("account-settings.export-key.action.confirm"))) : null
    },
    props.variant === "initial-backup" ? /* @__PURE__ */ React.createElement(Typography, { align: "center", component: "p", variant: "h6", style: { marginTop: -8, marginBottom: 16 } }, t("account-settings.export-key.info.secret-key")) : null,
    /* @__PURE__ */ React.createElement(Box, { padding: "32px 0 0" }, /* @__PURE__ */ React.createElement(KeyExportBox, { export: props.export, hideTapToCopy: props.variant === "initial-backup", size: 192 }))
  );
}
function ExportKeyDialog(props) {
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(null);
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [secretKey, setSecretKey] = React.useState(null);
  const { t } = useTranslation();
  const onBackButtonClick = React.useCallback(props.onClose || (() => void 0), [props.onClose]);
  const reveal = props.account ? (event) => {
    event.preventDefault();
    const passwordToUse = props.account.requiresPassword ? password : null;
    props.account.getPrivateKey(passwordToUse).then((decryptedSecretKey) => {
      setPasswordError(null);
      setIsRevealed(true);
      setSecretKey(decryptedSecretKey);
    }).catch((error) => {
      if (isWrongPasswordError(error)) {
        setPasswordError(error);
      } else {
        trackError(error);
      }
    });
  } : () => void 0;
  const updatePassword = React.useCallback(
    (event) => setPassword(event.currentTarget.value),
    []
  );
  const titleContent = React.useMemo(
    () => props.variant === "initial-backup" ? null : /* @__PURE__ */ React.createElement(
      MainTitle,
      {
        hideBackButton: true,
        onBack: onBackButtonClick,
        style: { marginBottom: 24 },
        title: t("account-settings.export-key.title.default")
      }
    ),
    [props.variant, onBackButtonClick, t]
  );
  const backupInfoContent = React.useMemo(
    () => /* @__PURE__ */ React.createElement(Box, { fontSize: "18px", margin: "24px 0 0" }, /* @__PURE__ */ React.createElement(Typography, { component: "p", variant: "h5" }, t("account-settings.export-key.info.backup.title")), /* @__PURE__ */ React.createElement(Typography, { component: "p", variant: "body1", style: { fontSize: "inherit", margin: "24px 0" } }, t("account-settings.export-key.info.backup.paragraph-1")), /* @__PURE__ */ React.createElement(Typography, { component: "p", variant: "body1", style: { fontSize: "inherit", margin: "24px 0" } }, t("account-settings.export-key.info.backup.paragraph-2"))),
    [t]
  );
  const exportInfoContent = React.useMemo(
    () => /* @__PURE__ */ React.createElement(Box, { margin: "24px 0 0" }, /* @__PURE__ */ React.createElement(Typography, { component: "p", variant: "body1" }, t("account-settings.export-key.info.export.paragraph-1")), /* @__PURE__ */ React.createElement(Typography, { component: "p", variant: "body1", style: { margin: "24px 0" } }, t("account-settings.export-key.info.export.paragraph-2"))),
    [t]
  );
  return isRevealed && secretKey ? /* @__PURE__ */ React.createElement(ShowSecretKey, { export: secretKey, onConfirm: props.onConfirm, title: titleContent, variant: props.variant }) : /* @__PURE__ */ React.createElement(
    PromptToReveal,
    {
      onReveal: reveal,
      password,
      passwordError: passwordError ? new Error(getErrorTranslation(passwordError, t)) : null,
      requiresPassword: Boolean(props.account && props.account.requiresPassword),
      title: titleContent,
      updatePassword
    },
    props.variant === "initial-backup" ? backupInfoContent : exportInfoContent
  );
}
const ExportKeyDialog$1 = React.memo(ExportKeyDialog);
export {
  AccountSettingsItem$1 as A,
  ExportKeyDialog$1 as E,
  LockIcon as L,
  LockOpenIcon as a
};
//# sourceMappingURL=ExportKeyDialog-C_6OAdGN.js.map
