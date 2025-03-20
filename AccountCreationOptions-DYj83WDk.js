import { S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, R as React, Z as useTranslation, ad as InputAdornment, bk as QRReader, aw as ListItemText, ac as TextField, a8 as useIsMobile, E as Typography, bu as List, a1 as useRouter, ak as VerticalLayout } from "./app-DBEXmgIl.js";
import { a2 as GroupIcon, U as Switch, a6 as Collapse, Y as PasswordField, k as matchesRoute, af as newAccount, r as Carousel, ag as createAccount, ah as importAccount, ai as joinSharedAccount, l as Divider } from "./app-stage2-CwdMAbKU.js";
import { A as AccountSettingsItem, E as ExportKeyDialog } from "./ExportKeyDialog-C_6OAdGN.js";
import { M as MainSelectionButton } from "./MainSelectionButton-DPV1xu8i.js";
var SettingsBackupRestore = {};
var hasRequiredSettingsBackupRestore;
function requireSettingsBackupRestore() {
  if (hasRequiredSettingsBackupRestore) return SettingsBackupRestore;
  hasRequiredSettingsBackupRestore = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(SettingsBackupRestore, "__esModule", {
    value: true
  });
  SettingsBackupRestore.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"
  }), "SettingsBackupRestore");
  SettingsBackupRestore.default = _default;
  return SettingsBackupRestore;
}
var SettingsBackupRestoreExports = /* @__PURE__ */ requireSettingsBackupRestore();
const RestoreIcon = /* @__PURE__ */ getDefaultExportFromCjs(SettingsBackupRestoreExports);
var AccountBalanceWallet = {};
var hasRequiredAccountBalanceWallet;
function requireAccountBalanceWallet() {
  if (hasRequiredAccountBalanceWallet) return AccountBalanceWallet;
  hasRequiredAccountBalanceWallet = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(AccountBalanceWallet, "__esModule", {
    value: true
  });
  AccountBalanceWallet.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  }), "AccountBalanceWallet");
  AccountBalanceWallet.default = _default;
  return AccountBalanceWallet;
}
var AccountBalanceWalletExports = /* @__PURE__ */ requireAccountBalanceWallet();
const WalletIcon = /* @__PURE__ */ getDefaultExportFromCjs(AccountBalanceWalletExports);
var InfoOutlined = {};
var hasRequiredInfoOutlined;
function requireInfoOutlined() {
  if (hasRequiredInfoOutlined) return InfoOutlined;
  hasRequiredInfoOutlined = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(InfoOutlined, "__esModule", {
    value: true
  });
  InfoOutlined.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }), "InfoOutlined");
  InfoOutlined.default = _default;
  return InfoOutlined;
}
var InfoOutlinedExports = /* @__PURE__ */ requireInfoOutlined();
const InfoIcon = /* @__PURE__ */ getDefaultExportFromCjs(InfoOutlinedExports);
const FundingNote = React.memo(function FundingNote2() {
  const isSmallScreen = useIsMobile();
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(Typography, { color: "textSecondary", style: { alignItems: "center", display: "flex", marginTop: 8 }, variant: "body2" }, /* @__PURE__ */ React.createElement(InfoIcon, { style: { fontSize: "1.3em", marginLeft: "-1.4em", marginRight: "0.4em" } }), isSmallScreen ? t("create-account.inputs.multisig-account.explanation-short") : t("create-account.inputs.multisig-account.explanation-long"));
});
function MultisigAccountPubKey(props) {
  const { onEnter } = props;
  const { t } = useTranslation();
  const inputProps = React.useMemo(
    () => ({
      style: { textOverflow: "ellipsis" }
    }),
    []
  );
  const InputProps = React.useMemo(
    () => ({
      endAdornment: /* @__PURE__ */ React.createElement(InputAdornment, { disableTypography: true, position: "end" }, /* @__PURE__ */ React.createElement(QRReader, { onScan: onEnter }))
    }),
    [onEnter]
  );
  const handleInput = React.useCallback(
    (event) => {
      onEnter(event.target.value.trim());
    },
    [onEnter]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    AccountSettingsItem,
    {
      icon: !props.onToggle ? /* @__PURE__ */ React.createElement(GroupIcon, null) : /* @__PURE__ */ React.createElement(Switch, { checked: props.enabled, color: "primary", onChange: props.onToggle }),
      onClick: props.onToggle
    },
    props.import ? /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: t("create-account.options.cosigner-import.label"),
        secondary: t("create-account.options.cosigner-import.description"),
        style: { marginLeft: 8 }
      }
    ) : /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: t("create-account.options.cosigner.label"),
        secondary: t("create-account.options.cosigner.description"),
        style: { marginLeft: 8 }
      }
    )
  ), /* @__PURE__ */ React.createElement(Collapse, { in: props.enabled }, /* @__PURE__ */ React.createElement(AccountSettingsItem, { icon: null, subItem: true }, /* @__PURE__ */ React.createElement(ListItemText, { style: { marginLeft: 12, marginRight: 56, marginTop: -8 } }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      error: Boolean(props.error),
      helperText: props.error ? t("create-account.inputs.multisig-account.helper-text") : "",
      label: props.error || t("create-account.inputs.multisig-account.label"),
      placeholder: t("create-account.inputs.multisig-account.placeholder"),
      fullWidth: true,
      margin: "normal",
      value: props.value,
      onChange: handleInput,
      inputProps,
      InputProps
    }
  ), props.import ? null : /* @__PURE__ */ React.createElement(FundingNote, null)))));
}
const MultisigAccountPubKey$1 = React.memo(MultisigAccountPubKey);
function PasswordSetting(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    AccountSettingsItem,
    {
      caret: props.requiresPassword ? "down" : "right",
      icon: /* @__PURE__ */ React.createElement(Switch, { checked: props.requiresPassword, color: "primary", onChange: props.onTogglePassword }),
      onClick: props.onTogglePassword
    },
    /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: t("create-account.options.password.label"),
        secondary: props.requiresPassword ? t("create-account.options.password.protected") : t("create-account.options.password.unprotected"),
        style: { marginLeft: 8 }
      }
    )
  ), /* @__PURE__ */ React.createElement(Collapse, { in: props.requiresPassword }, /* @__PURE__ */ React.createElement(AccountSettingsItem, { icon: null, subItem: true }, /* @__PURE__ */ React.createElement(ListItemText, { style: { marginLeft: 12, marginRight: 56, marginTop: -8 } }, /* @__PURE__ */ React.createElement(
    PasswordField,
    {
      error: Boolean(props.error),
      fullWidth: true,
      label: t("create-account.inputs.password.label"),
      margin: "normal",
      onChange: (event) => props.onEnterPassword(event.target.value),
      placeholder: t("create-account.inputs.password.placeholder"),
      value: props.password
    }
  ), /* @__PURE__ */ React.createElement(
    PasswordField,
    {
      error: Boolean(props.error),
      fullWidth: true,
      helperText: props.error,
      label: t("create-account.inputs.password-repeat.label"),
      margin: "normal",
      onChange: (event) => props.onRepeatPassword(event.target.value),
      placeholder: t("create-account.inputs.password-repeat.placeholder"),
      value: props.repeatedPassword
    }
  )))));
}
const PasswordSetting$1 = React.memo(PasswordSetting);
function SecretKeyImport(props) {
  const { onEnterSecretKey } = props;
  const { t } = useTranslation();
  const inputProps = React.useMemo(
    () => ({
      style: { textOverflow: "ellipsis" }
    }),
    []
  );
  const InputProps = React.useMemo(
    () => ({
      endAdornment: /* @__PURE__ */ React.createElement(InputAdornment, { disableTypography: true, position: "end" }, /* @__PURE__ */ React.createElement(QRReader, { onScan: onEnterSecretKey }))
    }),
    [onEnterSecretKey]
  );
  const handleInput = React.useCallback(
    (event) => {
      onEnterSecretKey(event.target.value.trim());
    },
    [onEnterSecretKey]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AccountSettingsItem, { icon: /* @__PURE__ */ React.createElement(RestoreIcon, null) }, /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      primary: t("create-account.options.import.label"),
      secondary: t("create-account.options.import.description"),
      style: { marginLeft: 8 }
    }
  )), /* @__PURE__ */ React.createElement(AccountSettingsItem, { icon: null, subItem: true }, /* @__PURE__ */ React.createElement(ListItemText, { style: { marginLeft: 12, marginRight: 56, marginTop: -8 } }, /* @__PURE__ */ React.createElement(
    TextField,
    {
      error: Boolean(props.error),
      helperText: props.error ? t("create-account.inputs.import.helper-text") : "",
      label: props.error || t("create-account.inputs.import.label"),
      placeholder: t("create-account.inputs.import.placeholder"),
      fullWidth: true,
      margin: "normal",
      value: props.secretKey,
      onChange: handleInput,
      inputProps,
      InputProps
    }
  ))));
}
const SecretKeyImport$1 = React.memo(SecretKeyImport);
function NewAccountSettings(props) {
  const { onUpdateAccountCreation } = props;
  const isSmallScreen = useIsMobile();
  const toggleMultisigImport = React.useCallback(() => {
    onUpdateAccountCreation({ cosigner: !props.accountCreation.cosigner });
  }, [props.accountCreation.cosigner, onUpdateAccountCreation]);
  const togglePasswordProtection = React.useCallback(() => {
    onUpdateAccountCreation({ requiresPassword: !props.accountCreation.requiresPassword });
  }, [props.accountCreation.requiresPassword, onUpdateAccountCreation]);
  const updateMultisigAccount = React.useCallback(
    (accountPubKey) => {
      onUpdateAccountCreation({ cosignerOf: accountPubKey });
    },
    [onUpdateAccountCreation]
  );
  const updatePassword = React.useCallback(
    (password) => {
      onUpdateAccountCreation({ password });
    },
    [onUpdateAccountCreation]
  );
  const updateRepeatedPassword = React.useCallback(
    (repeatedPassword) => {
      onUpdateAccountCreation({ repeatedPassword });
    },
    [onUpdateAccountCreation]
  );
  const updateSecretKey = React.useCallback(
    (secretKey) => {
      onUpdateAccountCreation({ secretKey });
    },
    [onUpdateAccountCreation]
  );
  return /* @__PURE__ */ React.createElement(List, { style: { padding: isSmallScreen ? 0 : "24px 16px" } }, props.accountCreation.import ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    SecretKeyImport$1,
    {
      error: props.errors.secretKey,
      onEnterSecretKey: updateSecretKey,
      secretKey: props.accountCreation.secretKey || ""
    }
  ), /* @__PURE__ */ React.createElement(
    MultisigAccountPubKey$1,
    {
      enabled: props.accountCreation.cosigner,
      import: true,
      onEnter: updateMultisigAccount,
      onToggle: toggleMultisigImport,
      value: props.accountCreation.cosignerOf || ""
    }
  )) : null, props.accountCreation.cosigner && !props.accountCreation.import ? /* @__PURE__ */ React.createElement(MultisigAccountPubKey$1, { enabled: true, onEnter: updateMultisigAccount, value: props.accountCreation.cosignerOf || "" }) : null, /* @__PURE__ */ React.createElement(
    PasswordSetting$1,
    {
      error: props.errors.password,
      password: props.accountCreation.password,
      onEnterPassword: updatePassword,
      onRepeatPassword: updateRepeatedPassword,
      onTogglePassword: togglePasswordProtection,
      repeatedPassword: props.accountCreation.repeatedPassword,
      requiresPassword: props.accountCreation.requiresPassword
    }
  ));
}
const NewAccountSettings$1 = React.memo(NewAccountSettings);
const InitialSelection = React.memo(
  React.forwardRef(function InitialSelection2(props, ref) {
    const { onUpdateAccountCreation } = props;
    const router = useRouter();
    const { t } = useTranslation();
    const createAccount$1 = React.useCallback(() => {
      onUpdateAccountCreation({ cosigner: false, import: false });
      router.history.push(createAccount(props.testnet));
    }, [onUpdateAccountCreation, props.testnet, router.history]);
    const importAccount$1 = React.useCallback(() => {
      onUpdateAccountCreation({ import: true });
      router.history.push(importAccount(props.testnet));
    }, [onUpdateAccountCreation, props.testnet, router.history]);
    const joinSharedAccount$1 = React.useCallback(() => {
      onUpdateAccountCreation({ cosigner: true, import: false });
      router.history.push(joinSharedAccount(props.testnet));
    }, [onUpdateAccountCreation, props.testnet, router.history]);
    return /* @__PURE__ */ React.createElement(VerticalLayout, { ref, alignItems: "center", margin: "48px 0 24px", padding: "0 8px" }, /* @__PURE__ */ React.createElement(VerticalLayout, { alignItems: "stretch", margin: "0 auto" }, /* @__PURE__ */ React.createElement(
      MainSelectionButton,
      {
        dense: true,
        label: t("create-account.action-selection.create.label"),
        description: t("create-account.action-selection.create.description"),
        gutterBottom: true,
        onClick: createAccount$1,
        variant: "primary",
        Icon: WalletIcon
      }
    ), /* @__PURE__ */ React.createElement(
      MainSelectionButton,
      {
        dense: true,
        label: t("create-account.action-selection.import.label"),
        description: t("create-account.action-selection.import.description"),
        gutterBottom: true,
        onClick: importAccount$1,
        Icon: RestoreIcon
      }
    ), /* @__PURE__ */ React.createElement(Divider, { style: { marginBottom: 16 } }), /* @__PURE__ */ React.createElement(
      MainSelectionButton,
      {
        dense: true,
        label: t("create-account.action-selection.join-shared.label"),
        description: t("create-account.action-selection.join-shared.description"),
        gutterBottom: true,
        onClick: joinSharedAccount$1,
        Icon: GroupIcon
      }
    )));
  })
);
function AccountCreationOptions(props) {
  const router = useRouter();
  const testnet = Boolean(router.location.pathname.match(/\/testnet/));
  const currentStep = matchesRoute(router.location.pathname, newAccount(testnet), false) ? 0 : !props.accountToBackup ? 1 : 2;
  return /* @__PURE__ */ React.createElement(Carousel, { current: currentStep }, /* @__PURE__ */ React.createElement(InitialSelection, { onUpdateAccountCreation: props.onUpdateAccountCreation, testnet }), /* @__PURE__ */ React.createElement(NewAccountSettings$1, { ...props }), /* @__PURE__ */ React.createElement(ExportKeyDialog, { account: props.accountToBackup, onConfirm: props.onFinishBackup, variant: "initial-backup" }));
}
const AccountCreationOptions$1 = React.memo(AccountCreationOptions);
export {
  AccountCreationOptions$1 as default
};
//# sourceMappingURL=AccountCreationOptions-DYj83WDk.js.map
