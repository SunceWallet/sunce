import { i as withStyles, R as React, _ as _objectWithoutProperties, f as _extends, j as clsx, t as useForkRef, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, X as useLiveAccountData, ae as SettingsContext, aL as trackError, a5 as libExports, a8 as useIsMobile, aC as useIsSmallMobile, Z as useTranslation, H as ListItem, aw as ListItemText, a7 as HorizontalLayout, ac as TextField, o as IconButton, bC as theme, aW as CloseIcon, a3 as AccountsContext, ba as useFederationLookup, bu as List, b$ as ButtonListItem, bJ as AddIcon, aN as Address, bf as isPublicKey, bg as isStellarAddress, ak as VerticalLayout, af as Box, $ as DialogActionsBox, a0 as ActionButton, E as Typography, a$ as useDialogActions, a1 as useRouter, b0 as DialogBody, a4 as CustomError, r as reactExports, W as SvgIcon, a9 as MainTitle, bw as DialogContent, a2 as ConfirmDialog, bD as NotificationsContext, c2 as DialogActions, aX as renderFormFieldError, b6 as isWrongPasswordError, ad as InputAdornment } from "./app-DBEXmgIl.js";
import { z as FormGroup, R as RadioGroupContext, c as createTransaction, L as ListItemIcon, G as PersonAddIcon, H as CheckIcon, J as RemoveIcon, l as Divider, K as Radio, P as Portal, N as RightIcon, T as TransactionSender, O as manageAccountSignersDetails, k as matchesRoute, Q as manageAccountSigners, r as Carousel, U as Switch, W as AccountSelectionList, X as WarnIcon, D as DialogContentText, Y as PasswordField, Z as FormControlLabel, _ as exportSecretKey, $ as deleteAccount, a0 as changeAccountPassword, a1 as accountSettings, a2 as GroupIcon, a3 as allAccounts } from "./app-stage2-CwdMAbKU.js";
import { A as AccountSettingsItem, L as LockIcon, a as LockOpenIcon, E as ExportKeyDialog } from "./ExportKeyDialog-C_6OAdGN.js";
var styles = {
  /* Styles applied to the root element. */
  root: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)"
  }
};
var ListItemSecondaryAction = React.forwardRef(function ListItemSecondaryAction2(props, ref) {
  var classes = props.classes, className = props.className, other = _objectWithoutProperties(props, ["classes", "className"]);
  return React.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref
  }, other));
});
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
const ListItemSecondaryAction$1 = withStyles(styles, {
  name: "MuiListItemSecondaryAction"
})(ListItemSecondaryAction);
var RadioGroup = React.forwardRef(function RadioGroup2(props, ref) {
  var actions = props.actions, children = props.children, name = props.name, valueProp = props.value, onChange = props.onChange, other = _objectWithoutProperties(props, ["actions", "children", "name", "value", "onChange"]);
  var rootRef = React.useRef(null);
  var _React$useRef = React.useRef(valueProp != null), isControlled = _React$useRef.current;
  var _React$useState = React.useState(function() {
    if (!isControlled) {
      return props.defaultValue;
    }
    return null;
  }), valueState = _React$useState[0], setValue = _React$useState[1];
  React.useImperativeHandle(actions, function() {
    return {
      focus: function focus() {
        var input = rootRef.current.querySelector("input:not(:disabled):checked");
        if (!input) {
          input = rootRef.current.querySelector("input:not(:disabled)");
        }
        if (input) {
          input.focus();
        }
      }
    };
  }, []);
  var value = isControlled ? valueProp : valueState;
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event, event.target.value);
    }
  };
  var context = {
    name,
    onChange: handleChange,
    value
  };
  var handleRef = useForkRef(ref, rootRef);
  return React.createElement(FormGroup, _extends({
    role: "radiogroup",
    ref: handleRef
  }, other), React.createElement(RadioGroupContext.Provider, {
    value: context
  }, children));
});
var RemoveRedEye = {};
var hasRequiredRemoveRedEye;
function requireRemoveRedEye() {
  if (hasRequiredRemoveRedEye) return RemoveRedEye;
  hasRequiredRemoveRedEye = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(RemoveRedEye, "__esModule", {
    value: true
  });
  RemoveRedEye.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  }), "RemoveRedEye");
  RemoveRedEye.default = _default;
  return RemoveRedEye;
}
var RemoveRedEyeExports = /* @__PURE__ */ requireRemoveRedEye();
const EyeIcon = /* @__PURE__ */ getDefaultExportFromCjs(RemoveRedEyeExports);
var Delete = {};
var hasRequiredDelete;
function requireDelete() {
  if (hasRequiredDelete) return Delete;
  hasRequiredDelete = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Delete, "__esModule", {
    value: true
  });
  Delete.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  Delete.default = _default;
  return Delete;
}
var DeleteExports = /* @__PURE__ */ requireDelete();
const DeleteIcon = /* @__PURE__ */ getDefaultExportFromCjs(DeleteExports);
var VpnKey = {};
var hasRequiredVpnKey;
function requireVpnKey() {
  if (hasRequiredVpnKey) return VpnKey;
  hasRequiredVpnKey = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(VpnKey, "__esModule", {
    value: true
  });
  VpnKey.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  }), "VpnKey");
  VpnKey.default = _default;
  return VpnKey;
}
var VpnKeyExports = /* @__PURE__ */ requireVpnKey();
const KeyIcon = /* @__PURE__ */ getDefaultExportFromCjs(VpnKeyExports);
var MultisigPresets;
((MultisigPresets2) => {
  ((Type2) => {
    Type2["Custom"] = "Custom";
    Type2["OneOutOfN"] = "OneOutOfN";
    Type2["MOutOfN"] = "MOutOfN";
    Type2["SingleSignature"] = "SingleSignature";
  })(MultisigPresets2.Type || (MultisigPresets2.Type = {}));
})(MultisigPresets || (MultisigPresets = {}));
function initializeEditorState(accountData) {
  let preset;
  const keyWeights = accountData.signers.map((signer) => signer.weight);
  const maxKeyWeight = Math.max(...keyWeights);
  const minKeyWeight = Math.min(...keyWeights);
  const equalThresholds = accountData.thresholds.low_threshold === accountData.thresholds.med_threshold && accountData.thresholds.med_threshold === accountData.thresholds.high_threshold;
  const maxThreshold = Math.max(
    accountData.thresholds.low_threshold,
    accountData.thresholds.med_threshold,
    accountData.thresholds.high_threshold
  );
  if (accountData.signers.length <= 1) {
    preset = {
      type: "SingleSignature"
      /* SingleSignature */
    };
  } else if (minKeyWeight >= maxThreshold) {
    preset = {
      type: "OneOutOfN"
      /* OneOutOfN */
    };
  } else if (minKeyWeight === maxKeyWeight && equalThresholds) {
    preset = {
      requiredKeyWeight: Math.ceil(maxThreshold / minKeyWeight),
      type: "MOutOfN"
      /* MOutOfN */
    };
  } else {
    preset = {
      thresholds: accountData.thresholds,
      type: "Custom"
      /* Custom */
    };
  }
  return {
    preset,
    signersToAdd: [],
    signersToRemove: []
  };
}
function getSignatureThreshold(preset) {
  if ("requiredKeyWeight" in preset) {
    return preset.requiredKeyWeight;
  } else if ("thresholds" in preset) {
    return Math.max(preset.thresholds.low_threshold, preset.thresholds.med_threshold, preset.thresholds.high_threshold);
  }
}
function requiresSignatureThreshold(preset) {
  return preset.type === "MOutOfN" || preset.type === "Custom";
}
function createTxOperations(accountData, settings, update) {
  const operations = [
    // signer removals before adding, so you can remove and immediately re-add signer
    ...update.signersToRemove.map((signer) => {
      return signer.key === accountData.account_id ? libExports.Operation.setOptions({
        masterWeight: 0,
        withMuxing: true
      }) : libExports.Operation.setOptions({
        signer: { ed25519PublicKey: signer.key, weight: 0 }
      });
    }),
    ...update.signersToAdd.map(
      (signer) => libExports.Operation.setOptions({
        signer: { ed25519PublicKey: signer.key, weight: signer.weight },
        withMuxing: true
      })
    )
  ];
  if (!accountData.data_attr["config.multisig.coordinator"]) {
    operations.push(
      libExports.Operation.manageData({
        name: "config.multisig.coordinator",
        value: settings.multiSignatureCoordinator,
        withMuxing: true
      })
    );
  }
  if (update.weightThreshold !== accountData.thresholds.low_threshold && update.weightThreshold !== accountData.thresholds.med_threshold && update.weightThreshold !== accountData.thresholds.high_threshold) {
    operations.push(
      libExports.Operation.setOptions({
        lowThreshold: update.weightThreshold,
        medThreshold: update.weightThreshold,
        highThreshold: update.weightThreshold,
        withMuxing: true
      })
    );
  }
  return operations;
}
function useSignersEditor(options) {
  const accountData = useLiveAccountData(options.account.accountID, options.account.testnet);
  const settings = React.useContext(SettingsContext);
  const [txCreationPending, setTxCreationPending] = React.useState(false);
  const [rawEditorState, setRawEditorState] = React.useState();
  const initialEditorState = React.useMemo(() => initializeEditorState(accountData), [accountData]);
  const editorState = rawEditorState || initialEditorState;
  const setEditorState = React.useCallback(
    (update) => {
      if (typeof update === "function") {
        setRawEditorState((prev) => update(prev || initialEditorState));
      } else {
        setRawEditorState(update);
      }
    },
    [setRawEditorState, initialEditorState]
  );
  const applyUpdate = async (update) => {
    try {
      setTxCreationPending(true);
      const operations = createTxOperations(accountData, settings, update);
      const tx = await createTransaction(operations, {
        accountData,
        horizon: options.horizon,
        walletAccount: options.account
      });
      const submissionPromise = options.sendTransaction(tx);
      setTxCreationPending(false);
      await submissionPromise;
    } catch (error) {
      trackError(error);
      setTxCreationPending(false);
    }
  };
  return {
    applyUpdate,
    editorState,
    setEditorState,
    txCreationPending
  };
}
var Step = /* @__PURE__ */ ((Step2) => {
  Step2[Step2["Presets"] = 0] = "Presets";
  Step2[Step2["Signers"] = 1] = "Signers";
  return Step2;
})(Step || {});
const MultisigEditorContext = React.createContext({
  accountID: "",
  applyUpdate() {
    throw Error("MultisigEditorContext has not yet been initialized");
  },
  currentStep: 0,
  editorState: {
    preset: {
      type: MultisigPresets.Type.SingleSignature
    },
    signersToAdd: [],
    signersToRemove: []
  },
  setEditorState() {
    throw Error("MultisigEditorContext has not yet been initialized");
  },
  switchToStep() {
    throw Error("MultisigEditorContext has not yet been initialized");
  },
  testnet: false,
  txCreationPending: false
});
const MultisigEditorProvider = React.memo(function MultisigEditorProvider2(props) {
  const [currentStep, switchToStep] = React.useState(
    0
    /* Presets */
  );
  const editor = useSignersEditor(props);
  const contextValue = {
    ...editor,
    accountID: props.account.accountID,
    currentStep,
    switchToStep,
    testnet: props.account.testnet
  };
  return /* @__PURE__ */ React.createElement(MultisigEditorContext.Provider, { value: contextValue }, props.children);
});
var Person = {};
var hasRequiredPerson;
function requirePerson() {
  if (hasRequiredPerson) return Person;
  hasRequiredPerson = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(Person, "__esModule", {
    value: true
  });
  Person.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  Person.default = _default;
  return Person;
}
var PersonExports = /* @__PURE__ */ requirePerson();
const PersonIcon = /* @__PURE__ */ getDefaultExportFromCjs(PersonExports);
function NewSignerForm(props) {
  const isSmallScreen = useIsMobile();
  const isTinyScreen = useIsSmallMobile();
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(ListItem, { style: props.style }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(PersonAddIcon, { style: { fontSize: "2rem" } })), /* @__PURE__ */ React.createElement(ListItemText, null, /* @__PURE__ */ React.createElement(HorizontalLayout, null, /* @__PURE__ */ React.createElement(
    TextField,
    {
      autoFocus: true,
      error: !!props.errors.publicKey,
      label: props.errors.publicKey ? props.errors.publicKey.message : t("account-settings.manage-signers.signers-editor.new-signer.label"),
      placeholder: isSmallScreen ? t("account-settings.manage-signers.signers-editor.new-signer.placeholder.short") : t("account-settings.manage-signers.signers-editor.new-signer.placeholder.long"),
      onChange: (event) => props.onUpdate({ publicKey: event.target.value.trim() }),
      style: { flexGrow: 1 },
      InputProps: isTinyScreen ? { style: { fontSize: "0.8rem" } } : void 0,
      value: props.values.publicKey
    }
  ))), /* @__PURE__ */ React.createElement(ListItemIcon, { style: { marginLeft: 8, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
    IconButton,
    {
      color: "primary",
      onClick: props.onSubmit,
      style: { borderColor: theme.palette.primary.main, borderStyle: "solid", borderWidth: 1.5, padding: 8 }
    },
    /* @__PURE__ */ React.createElement(CheckIcon, null)
  )), /* @__PURE__ */ React.createElement(ListItemIcon, { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement(IconButton, { onClick: props.onCancel }, /* @__PURE__ */ React.createElement(CloseIcon, null))));
}
function ThresholdInput(props) {
  const { editorState, setEditorState } = React.useContext(MultisigEditorContext);
  const { preset } = editorState;
  const value = String(getSignatureThreshold(preset));
  const setThreshold = React.useCallback(
    (event) => {
      event.persist();
      setEditorState((prev) => {
        const newThreshold = Number.parseInt(event.target.value, 10);
        if ("requiredKeyWeight" in prev.preset) {
          return {
            ...prev,
            preset: {
              ...prev.preset,
              requiredKeyWeight: newThreshold
            }
          };
        } else if ("thresholds" in prev.preset) {
          return {
            ...prev,
            preset: {
              ...prev.preset,
              thresholds: {
                high_threshold: newThreshold,
                med_threshold: newThreshold,
                low_threshold: newThreshold
              }
            }
          };
        } else {
          throw Error(`Cannot update thresholds for multi-sig preset of type "${prev.preset.type}"`);
        }
      });
    },
    [setEditorState]
  );
  return /* @__PURE__ */ React.createElement(
    TextField,
    {
      inputProps: {
        min: 1,
        style: {
          maxWidth: 32,
          padding: "16px 14px",
          textAlign: "center"
        }
      },
      inputRef: props.inputRef,
      onChange: setThreshold,
      type: "number",
      value,
      variant: "outlined"
    }
  );
}
const ThresholdInput$1 = React.memo(ThresholdInput);
function useFormValidation$1() {
  const { t } = useTranslation();
  return function validateNewSignerValues(values, signers) {
    const errors = {};
    if (!isPublicKey(values.publicKey) && !isStellarAddress(values.publicKey)) {
      errors.publicKey = new Error(
        t("account-settings.manage-signers.signers-editor.validation.invalid-stellar-address")
      );
    } else if (signers.find((existingSigner) => existingSigner.key === values.publicKey)) {
      errors.publicKey = new Error(t("account-settings.manage-signers.signers-editor.validation.existing-signer"));
    }
    if (!values.weight.match(/^[0-9]+$/)) {
      errors.weight = new Error(t("account-settings.manage-signers.signers-editor.validation.integer-required"));
    }
    return errors;
  };
}
const listItemStyles = {
  background: "white",
  boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.1)"
};
function SignersEditor(props) {
  const { accounts } = React.useContext(AccountsContext);
  const { editorState, setEditorState, testnet } = React.useContext(MultisigEditorContext);
  const { lookupFederationRecord } = useFederationLookup();
  const isSmallScreen = useIsMobile();
  const validateNewSignerValues = useFormValidation$1();
  const thresholdInputRef = React.createRef();
  const { t } = useTranslation();
  const { preset } = editorState;
  const [isEditingNewSigner, setIsEditingNewSigner] = React.useState(false);
  const [newSignerErrors, setNewSignerErrors] = React.useState({});
  const [newSignerValues, setNewSignerValues] = React.useState({
    publicKey: "",
    weight: "1"
  });
  const editNewSigner = React.useCallback(() => setIsEditingNewSigner(true), [setIsEditingNewSigner]);
  const addSigner = (signer) => setEditorState((prev) => ({
    ...prev,
    signersToAdd: [...prev.signersToAdd, signer]
  }));
  const removeSigner = (signer) => {
    var _a;
    setEditorState((prev) => ({
      ...prev,
      signersToAdd: prev.signersToAdd.filter((someSignerToBeAddd) => someSignerToBeAddd.key !== signer.key),
      signersToRemove: [...prev.signersToRemove, signer]
    }));
    (_a = thresholdInputRef.current) == null ? void 0 : _a.focus();
  };
  const createCosigner = async () => {
    var _a;
    try {
      const federationRecord = newSignerValues.publicKey.indexOf("*") > -1 ? await lookupFederationRecord(newSignerValues.publicKey) : null;
      const cosignerPublicKey = federationRecord ? federationRecord.account_id : newSignerValues.publicKey;
      const errors = validateNewSignerValues(newSignerValues, props.signers);
      if (Object.keys(errors).length > 0) {
        return setNewSignerErrors(errors);
      }
      addSigner({
        key: cosignerPublicKey,
        type: "ed25519_public_key",
        weight: parseInt(newSignerValues.weight, 10)
      });
      setIsEditingNewSigner(false);
      setNewSignerErrors({});
      setNewSignerValues({
        publicKey: "",
        weight: "1"
      });
      (_a = thresholdInputRef.current) == null ? void 0 : _a.focus();
    } catch (error) {
      trackError(error);
    }
  };
  const updateNewSignerValues = (values) => {
    setNewSignerValues((prevValues) => ({
      ...prevValues,
      ...values
    }));
  };
  return /* @__PURE__ */ React.createElement(List, { disablePadding: isSmallScreen }, isEditingNewSigner ? /* @__PURE__ */ React.createElement(
    NewSignerForm,
    {
      errors: newSignerErrors,
      onCancel: () => setIsEditingNewSigner(false),
      onSubmit: createCosigner,
      onUpdate: updateNewSignerValues,
      style: listItemStyles,
      values: newSignerValues
    }
  ) : /* @__PURE__ */ React.createElement(ButtonListItem, { gutterBottom: true, onClick: editNewSigner }, /* @__PURE__ */ React.createElement(AddIcon, null), "  ", t("account-settings.manage-signers.action.add-signer")), props.signers.map((signer) => /* @__PURE__ */ React.createElement(ListItem, { key: signer.key, style: listItemStyles }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(PersonIcon, { style: { fontSize: "2rem" } })), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      primary: /* @__PURE__ */ React.createElement(Address, { address: signer.key, testnet: props.testnet, variant: "full" }),
      secondary: /* @__PURE__ */ React.createElement(React.Fragment, null, props.showKeyWeights ? /* @__PURE__ */ React.createElement("span", { style: { marginRight: 24 } }, t("account-settings.manage-signers.signers-editor.list.item.weight"), ": ", signer.weight) : null, accounts.some((account) => account.publicKey === signer.key && account.testnet === testnet) ? /* @__PURE__ */ React.createElement("span", null, t("account-settings.manage-signers.signers-editor.list.item.local-key")) : null)
    }
  ), /* @__PURE__ */ React.createElement(ListItemSecondaryAction$1, null, /* @__PURE__ */ React.createElement(IconButton, { "aria-label": "Remove", disabled: props.signers.length === 1, onClick: () => removeSigner(signer) }, /* @__PURE__ */ React.createElement(RemoveIcon, null))))), requiresSignatureThreshold(preset) ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListItem, { style: listItemStyles }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      primary: t("account-settings.manage-signers.signers-editor.threshold.primary"),
      secondary: t("account-settings.manage-signers.signers-editor.threshold.secondary"),
      style: { flexGrow: 0, marginRight: 32 }
    }
  ), /* @__PURE__ */ React.createElement(ListItemText, null, /* @__PURE__ */ React.createElement(ThresholdInput$1, { inputRef: thresholdInputRef }))), /* @__PURE__ */ React.createElement(Divider, null)) : null);
}
function SignerSelector(props) {
  var _a;
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(RadioGroup, { value: ((_a = props.selected) == null ? void 0 : _a.key) || "" }, /* @__PURE__ */ React.createElement(List, null, props.signers.map((signer) => /* @__PURE__ */ React.createElement(ListItem, { button: true, key: signer.key, onClick: () => props.onSelect(signer) }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Radio, { edge: "start", value: signer.key })), /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      primary: /* @__PURE__ */ React.createElement(Address, { address: signer.key, variant: "full", testnet: props.testnet }),
      secondary: props.accounts.some(
        (account) => account.publicKey === signer.key && account.testnet === props.testnet
      ) ? /* @__PURE__ */ React.createElement("span", null, t("account-settings.manage-signers.signers-editor.list.item.local-key")) : null
    }
  )))));
}
const SignerSelector$1 = React.memo(SignerSelector);
const PresetDescription = React.memo(function PresetDescription2(props) {
  const { t } = useTranslation();
  let description = "";
  let extraDescription = "";
  if (props.preset.type === MultisigPresets.Type.SingleSignature) {
    description = t("account-settings.manage-signers.preset-description.single-signature");
  } else if (props.preset.type === MultisigPresets.Type.OneOutOfN) {
    description = t("account-settings.manage-signers.preset-description.one-out-of-n");
  } else if (props.preset.type === MultisigPresets.Type.MOutOfN) {
    description = t("account-settings.manage-signers.preset-description.m-out-of-n", {
      count: props.preset.requiredKeyWeight || 0
    });
  }
  if (props.preset.type === MultisigPresets.Type.SingleSignature) ;
  else if (props.preset.type === MultisigPresets.Type.OneOutOfN) {
    extraDescription = t("account-settings.manage-signers.preset-description-extra.one-out-of-n");
  } else if (props.preset.type === MultisigPresets.Type.MOutOfN) {
    extraDescription = t("account-settings.manage-signers.preset-description-extra.m-out-of-n");
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textSecondary", gutterBottom: true }, description), extraDescription ? /* @__PURE__ */ React.createElement(Typography, { align: "center", color: "textSecondary" }, extraDescription) : null);
});
function DetailsEditor(props) {
  var _a;
  const [selectedSigner, setSelectedSigner] = React.useState();
  const { t } = useTranslation();
  const { accounts } = React.useContext(AccountsContext);
  const { accountID, editorState, setEditorState, testnet } = React.useContext(MultisigEditorContext);
  const accountData = useLiveAccountData(accountID, testnet);
  const isSmallScreen = useIsMobile();
  const showSignerSelection = editorState.preset.type === MultisigPresets.Type.SingleSignature && accountData.signers.length > 1;
  const selectSingleSigner = React.useCallback(
    (newlySelectedSigner) => {
      setSelectedSigner(newlySelectedSigner);
      setEditorState((prev) => ({
        ...prev,
        signersToAdd: [],
        signersToRemove: accountData.signers.filter((signer) => signer.key !== newlySelectedSigner.key)
      }));
    },
    [accountData, setEditorState]
  );
  const disabled = props.disabled || showSignerSelection && !selectedSigner;
  return /* @__PURE__ */ React.createElement(VerticalLayout, null, showSignerSelection ? /* @__PURE__ */ React.createElement(
    SignerSelector$1,
    {
      accounts,
      onSelect: selectSingleSigner,
      selected: selectedSigner,
      signers: accountData.signers,
      testnet
    }
  ) : /* @__PURE__ */ React.createElement(SignersEditor, { ...props }), /* @__PURE__ */ React.createElement(Box, { margin: "32px 0 0" }, /* @__PURE__ */ React.createElement(PresetDescription, { preset: editorState.preset })), /* @__PURE__ */ React.createElement(Portal, { target: (_a = props.actionsRef) == null ? void 0 : _a.element }, /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { margin: 0 } }, /* @__PURE__ */ React.createElement(ActionButton, { disabled, icon: /* @__PURE__ */ React.createElement(CheckIcon, null), onClick: props.onSubmit, type: "submit" }, isSmallScreen ? t("account-settings.manage-signers.action.apply.short") : t("account-settings.manage-signers.action.apply.long")))));
}
const DetailsEditor$1 = React.memo(DetailsEditor);
const PresetSelectorItem = React.memo(function PresetSelectorItem2(props) {
  return /* @__PURE__ */ React.createElement(
    AccountSettingsItem,
    {
      icon: /* @__PURE__ */ React.createElement(Radio, { checked: props.selected, color: "primary", onChange: props.onChange }),
      onClick: props.onChange
    },
    /* @__PURE__ */ React.createElement(ListItemText, { primary: props.primary, secondary: props.secondary })
  );
});
function PresetSelector(props) {
  var _a;
  const { accountID, editorState, setEditorState, testnet } = React.useContext(MultisigEditorContext);
  const { t } = useTranslation();
  const accountData = useLiveAccountData(accountID, testnet);
  const minKeyWeight = Math.min(...accountData.signers.map((signer) => signer.weight));
  const canProceed = editorState.preset.type !== MultisigPresets.Type.SingleSignature || accountData.signers.length > 1;
  const setPreset = (preset) => setEditorState((prev) => ({
    ...prev,
    preset
  }));
  return /* @__PURE__ */ React.createElement(VerticalLayout, null, /* @__PURE__ */ React.createElement(Typography, { gutterBottom: true, style: { marginLeft: 8, marginRight: 8 }, variant: "h6" }, t("account-settings.manage-signers.preset-selector.title")), /* @__PURE__ */ React.createElement(RadioGroup, null, /* @__PURE__ */ React.createElement(List, { style: props.style }, /* @__PURE__ */ React.createElement(
    PresetSelectorItem,
    {
      onChange: () => setPreset({ type: MultisigPresets.Type.SingleSignature }),
      primary: t("account-settings.manage-signers.preset-selector.options.single-signature.primary"),
      selected: editorState.preset.type === MultisigPresets.Type.SingleSignature,
      secondary: t("account-settings.manage-signers.preset-selector.options.single-signature.secondary")
    }
  ), /* @__PURE__ */ React.createElement(
    PresetSelectorItem,
    {
      onChange: () => setPreset({
        requiredKeyWeight: accountData.thresholds.high_threshold || minKeyWeight,
        type: MultisigPresets.Type.MOutOfN
      }),
      primary: t("account-settings.manage-signers.preset-selector.options.m-out-of-n.primary"),
      selected: editorState.preset.type === MultisigPresets.Type.MOutOfN,
      secondary: t("account-settings.manage-signers.preset-selector.options.m-out-of-n.secondary")
    }
  ), /* @__PURE__ */ React.createElement(
    PresetSelectorItem,
    {
      onChange: () => setPreset({ type: MultisigPresets.Type.OneOutOfN }),
      primary: t("account-settings.manage-signers.preset-selector.options.one-out-of-n.primary"),
      selected: editorState.preset.type === MultisigPresets.Type.OneOutOfN,
      secondary: t("account-settings.manage-signers.preset-selector.options.one-out-of-n.secondary")
    }
  ))), /* @__PURE__ */ React.createElement(Portal, { target: (_a = props.actionsRef) == null ? void 0 : _a.element }, /* @__PURE__ */ React.createElement(DialogActionsBox, { desktopStyle: { margin: 0 } }, /* @__PURE__ */ React.createElement(ActionButton, { disabled: !canProceed, icon: /* @__PURE__ */ React.createElement(RightIcon, null), onClick: props.onProceed, type: "submit" }, t("account-settings.manage-signers.action.proceed")))));
}
const PresetSelector$1 = React.memo(PresetSelector);
function getUpdatedSigners(accountData, signersToAdd, signersToRemove) {
  const signersPubKeysToAdd = signersToAdd.map((signer) => signer.key);
  const signersPubKeysToRemove = signersToRemove.map((signer) => signer.key);
  const isNotToBeAdded = (signer) => signersPubKeysToAdd.indexOf(signer.key) === -1;
  const isNotToBeRemoved = (signer) => signersPubKeysToRemove.indexOf(signer.key) === -1;
  const updatedSigners = [...accountData.signers.filter(isNotToBeAdded).filter(isNotToBeRemoved), ...signersToAdd];
  return [
    ...updatedSigners.filter((signer) => signer.key !== accountData.id).reverse(),
    ...updatedSigners.filter((signer) => signer.key === accountData.id)
  ];
}
function getWeightThreshold(preset, signers) {
  if (preset.type === MultisigPresets.Type.SingleSignature) {
    return 0;
  } else if (preset.type === MultisigPresets.Type.OneOutOfN) {
    return Math.min(...signers.map((signer) => signer.weight));
  } else if (preset.type === MultisigPresets.Type.MOutOfN) {
    return preset.requiredKeyWeight;
  } else {
    return preset.thresholds.high_threshold;
  }
}
function validate(updatedSigners, weightThreshold) {
  const totalKeyWeight = updatedSigners.reduce((total, signer) => total + signer.weight, 0);
  if (weightThreshold < 0 || weightThreshold < 1 && updatedSigners.length > 1) {
    throw CustomError("MultiSigConfigThresholdTooLowError", `Signature threshold too low.`);
  } else if (weightThreshold > totalKeyWeight) {
    throw CustomError("MultiSigConfigThresholdLockError", `Signature threshold too high. You would lock your account.`);
  }
}
function ManageSignersDialogContent(props) {
  const { accountID, applyUpdate, currentStep, editorState, setEditorState, switchToStep, testnet } = React.useContext(
    MultisigEditorContext
  );
  const accountData = useLiveAccountData(accountID, testnet);
  const dialogActionsRef = useDialogActions();
  const router = useRouter();
  const baseStateRef = React.useRef(editorState);
  const updatedSigners = getUpdatedSigners(accountData, editorState.signersToAdd, editorState.signersToRemove);
  const allDefaultKeyweights = updatedSigners.every((signer) => signer.weight === 1);
  const proceedToSigners = React.useCallback(() => {
    router.history.push(manageAccountSignersDetails(props.account.id));
    switchToStep(Step.Signers);
  }, [props.account.id, router.history, switchToStep]);
  const switchBackToPresets = React.useCallback(() => {
    setEditorState((prev) => ({ ...prev, signersToRemove: [], signersToAdd: [] }));
    switchToStep(Step.Presets);
  }, [switchToStep, setEditorState]);
  React.useEffect(() => {
    if (matchesRoute(router.location.pathname, manageAccountSigners(props.account.id), true)) {
      switchBackToPresets();
    }
  }, [router.location.pathname, props.account.id, switchBackToPresets]);
  const submit = async () => {
    try {
      const weightThreshold = getWeightThreshold(editorState.preset, updatedSigners);
      validate(updatedSigners, weightThreshold);
      await applyUpdate({
        signersToAdd: editorState.signersToAdd,
        signersToRemove: editorState.signersToRemove,
        weightThreshold
      });
      baseStateRef.current = editorState;
      setEditorState((prev) => ({
        ...prev,
        signersToAdd: [],
        signersToRemove: []
      }));
    } catch (error) {
      trackError(error);
    }
  };
  const disabled = React.useMemo(() => {
    const baseState = baseStateRef.current;
    const samePreset = editorState.preset.type === "Custom" && baseState.preset.type === "Custom" ? editorState.preset.thresholds.high_threshold === baseState.preset.thresholds.high_threshold && editorState.preset.thresholds.med_threshold === baseState.preset.thresholds.med_threshold && editorState.preset.thresholds.low_threshold === baseState.preset.thresholds.low_threshold : editorState.preset.type === "MOutOfN" && baseState.preset.type === "MOutOfN" ? editorState.preset.requiredKeyWeight === baseState.preset.requiredKeyWeight : editorState.preset.type === baseState.preset.type;
    if ((editorState.preset.type === "Custom" || editorState.preset.type === "MOutOfN") && accountData.signers.length + editorState.signersToAdd.length < 2) {
      return true;
    }
    return editorState.signersToAdd.length === 0 && editorState.signersToRemove.length === 0 && samePreset;
  }, [accountData, editorState]);
  return /* @__PURE__ */ React.createElement(DialogBody, { actions: dialogActionsRef }, /* @__PURE__ */ React.createElement(Carousel, { current: currentStep === Step.Signers ? 1 : 0 }, /* @__PURE__ */ React.createElement(
    PresetSelector$1,
    {
      actionsRef: currentStep === Step.Presets ? dialogActionsRef : void 0,
      onProceed: proceedToSigners,
      style: { marginBottom: 24 }
    }
  ), /* @__PURE__ */ React.createElement(
    DetailsEditor$1,
    {
      actionsRef: currentStep === Step.Signers ? dialogActionsRef : void 0,
      disabled,
      onSubmit: submit,
      signers: updatedSigners,
      showKeyWeights: !allDefaultKeyweights,
      testnet
    }
  )));
}
function ManageSignersDialog(props) {
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(MultisigEditorProvider, { account: props.account, horizon, sendTransaction }, /* @__PURE__ */ React.createElement(ManageSignersDialogContent, { account: props.account, onCancel: props.onClose })));
}
const ManageSignersDialog$1 = React.memo(ManageSignersDialog);
function MergeIcon(props) {
  return /* @__PURE__ */ reactExports.createElement(SvgIcon, { transform: "rotate(90)", viewBox: "0 0 24 20", ...props }, /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, /* @__PURE__ */ reactExports.createElement("path", { d: "M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" })));
}
const redText = {
  color: "red"
};
const DeletionConfirmationDialog = React.memo(function DeletionConfirmationDialog2(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      cancelButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onCancel }, t("account-settings.account-deletion.action.cancel")),
      confirmButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onConfirm, type: "primary" }, t("account-settings.account-deletion.action.confirm")),
      open: props.open,
      onClose: props.onClose,
      title: t("account-settings.account-deletion.confirm.title")
    },
    t("account-settings.account-deletion.confirm.text.delete"),
    props.merging ? ` ${t("account-settings.account-deletion.confirm.text.merge")}. ` : ". ",
    t("account-settings.account-deletion.confirm.text.confirm")
  );
});
const WarningDialog = React.memo(function WarningDialog2(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    ConfirmDialog,
    {
      cancelButton: null,
      confirmButton: /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onClose, type: "primary" }, t("account-settings.account-deletion.warning-dialog.close.label")),
      onClose: props.onClose,
      open: props.open,
      title: props.title
    },
    props.warning
  );
});
function AccountDeletionDialog(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const horizon = props.horizon;
  const { accounts } = React.useContext(AccountsContext);
  const [mergeAccountEnabled, setMergeAccountEnabled] = React.useState(false);
  const [confirmationPending, setConfirmationPending] = React.useState(false);
  const [selectedMergeAccount, setSelectedMergeAccount] = React.useState(null);
  const [warning, setWarning] = React.useState();
  const { t } = useTranslation();
  const isSmallScreen = useIsMobile();
  const isTinyScreen = useIsSmallMobile();
  const cancelConfirmation = React.useCallback(() => setConfirmationPending(false), [setConfirmationPending]);
  const toggleMergeAccount = React.useCallback(() => setMergeAccountEnabled((enabled) => !enabled), []);
  const closeWarning = React.useCallback(() => {
    setWarning((prev) => prev ? { ...prev, open: false } : void 0);
  }, [setWarning]);
  const onMerge = async () => {
    if (selectedMergeAccount) {
      const transaction = await createTransaction(
        [
          libExports.Operation.accountMerge({
            source: props.account.accountID,
            destination: selectedMergeAccount.publicKey,
            withMuxing: true
          })
        ],
        { accountData, horizon, walletAccount: props.account }
      );
      await props.sendTransaction(transaction);
    }
  };
  const onConfirm = () => {
    setConfirmationPending(false);
    if (mergeAccountEnabled) {
      onMerge();
    } else {
      props.onDelete();
    }
  };
  const requestConfirmation = React.useCallback(() => {
    if (mergeAccountEnabled && accountData.subentry_count > 0) {
      setWarning({
        open: true,
        text: t("account-settings.account-deletion.warnings.cannot-merge.text"),
        title: t("account-settings.account-deletion.warnings.cannot-merge.title")
      });
    } else {
      setConfirmationPending(true);
    }
  }, [accountData, mergeAccountEnabled, setConfirmationPending, setWarning, t]);
  const remainingFundsContent = React.useMemo(
    () => accountData.balances.length > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HorizontalLayout, { alignItems: "center", style: { marginTop: 24, marginLeft: -12, marginBottom: 8 } }, /* @__PURE__ */ React.createElement(Switch, { color: "primary", checked: mergeAccountEnabled, onChange: toggleMergeAccount }), /* @__PURE__ */ React.createElement(
      Typography,
      {
        onClick: toggleMergeAccount,
        variant: "h6",
        style: {
          display: "flex",
          alignItems: "center",
          height: 48,
          cursor: "pointer",
          fontSize: isSmallScreen ? 16 : 20,
          marginLeft: 8
        }
      },
      t("account-settings.account-deletion.remaining-funds.text")
    )), /* @__PURE__ */ React.createElement(
      AccountSelectionList,
      {
        disabled: !mergeAccountEnabled,
        accounts: accounts.filter(
          (account) => account.accountID !== props.account.accountID && account.publicKey !== props.account.publicKey && account.testnet === props.account.testnet
        ),
        testnet: props.account.testnet,
        onChange: setSelectedMergeAccount
      }
    )) : null,
    [
      accountData.balances.length,
      mergeAccountEnabled,
      toggleMergeAccount,
      isSmallScreen,
      t,
      accounts,
      props.account.accountID,
      props.account.publicKey,
      props.account.testnet
    ]
  );
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      background: /* @__PURE__ */ React.createElement(WarnIcon, { style: { fontSize: 160 } }),
      noMaxWidth: true,
      preventNotchSpacing: true,
      top: /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          hideBackButton: true,
          title: /* @__PURE__ */ React.createElement("span", { style: redText }, t("account-settings.account-deletion.title")),
          titleColor: "inherit",
          onBack: props.onClose,
          style: { marginTop: 0, marginLeft: 0 }
        }
      ),
      actions: /* @__PURE__ */ React.createElement(DialogActionsBox, null, mergeAccountEnabled ? /* @__PURE__ */ React.createElement(
        ActionButton,
        {
          autoFocus: true,
          disabled: !selectedMergeAccount,
          icon: /* @__PURE__ */ React.createElement(MergeIcon, null),
          onClick: requestConfirmation,
          type: "primary"
        },
        isTinyScreen ? t("account-settings.account-deletion.action.merge.short") : t("account-settings.account-deletion.action.merge.long")
      ) : /* @__PURE__ */ React.createElement(ActionButton, { autoFocus: true, icon: /* @__PURE__ */ React.createElement(DeleteIcon, null), onClick: requestConfirmation, type: "primary" }, t("account-settings.account-deletion.action.delete")))
    },
    /* @__PURE__ */ React.createElement(DialogContent, { style: { padding: 0 } }, /* @__PURE__ */ React.createElement(DialogContentText, { style: { marginTop: 8 } }, t("account-settings.account-deletion.text.1", { accountName: props.account.name })), /* @__PURE__ */ React.createElement(DialogContentText, { style: { display: accountData.balances.length > 0 ? void 0 : "none", marginTop: 16 } }, t("account-settings.account-deletion.text.2")), remainingFundsContent, /* @__PURE__ */ React.createElement(
      DeletionConfirmationDialog,
      {
        merging: mergeAccountEnabled,
        onCancel: cancelConfirmation,
        onClose: cancelConfirmation,
        onConfirm,
        open: confirmationPending
      }
    ), /* @__PURE__ */ React.createElement(
      WarningDialog,
      {
        onClose: closeWarning,
        open: Boolean(warning == null ? void 0 : warning.open),
        title: (warning == null ? void 0 : warning.title) || "",
        warning: warning == null ? void 0 : warning.text
      }
    ))
  );
}
function AccountDeletionContainer(props) {
  const { deleteAccount: deleteAccount2 } = React.useContext(AccountsContext);
  const onDelete = () => {
    deleteAccount2(props.account.id);
    props.onClose();
    props.onDeleted();
  };
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account, onSubmissionCompleted: onDelete }, (txContext) => /* @__PURE__ */ React.createElement(AccountDeletionDialog, { ...props, ...txContext, onDelete }));
}
const adornmentLock = /* @__PURE__ */ React.createElement(InputAdornment, { position: "start" }, /* @__PURE__ */ React.createElement(LockIcon, { color: "disabled" }));
const adornmentLockOpen = /* @__PURE__ */ React.createElement(InputAdornment, { position: "start" }, /* @__PURE__ */ React.createElement(LockOpenIcon, { color: "disabled" }));
function useFormValidation() {
  const { t } = useTranslation();
  return function validate2(formValues, passwordMode) {
    const errors = {};
    if (!formValues.prevPassword && passwordMode !== "initial") {
      errors.prevPassword = new Error(t("account-settings.set-password.validation.previous-password-missing"));
    }
    if (passwordMode !== "remove") {
      if (!formValues.nextPassword) {
        errors.nextPassword = new Error(t("account-settings.set-password.validation.next-password-missing"));
      }
      if (!formValues.nextPasswordRepeat) {
        errors.nextPasswordRepeat = new Error(
          t("account-settings.set-password.validation.next-password-repeat-missing")
        );
      }
      if (formValues.nextPasswordRepeat && formValues.nextPassword !== formValues.nextPasswordRepeat) {
        errors.nextPasswordRepeat = new Error(t("account-settings.set-password.validation.passwords-no-match"));
      }
    }
    const success = Object.keys(errors).length === 0;
    return { errors, success };
  };
}
function Actions(props) {
  const isSmallScreen = useIsMobile();
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(DialogActionsBox, { smallDialog: true }, props.isPasswordProtected ? isSmallScreen ? /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onToggleRemovePassword, type: "secondary" }, props.removePassword ? t("account-settings.set-password.action.change-password.long") : t("account-settings.set-password.action.remove-password.long")) : /* @__PURE__ */ React.createElement(
    FormControlLabel,
    {
      control: /* @__PURE__ */ React.createElement(Switch, { checked: props.removePassword, color: "primary", onChange: props.onToggleRemovePassword }),
      label: t("account-settings.set-password.action.remove-password.long")
    }
  ) : null, /* @__PURE__ */ React.createElement(ActionButton, { icon: /* @__PURE__ */ React.createElement(LockIcon, null), onClick: props.onSubmit, type: "primary" }, isSmallScreen ? props.removePassword ? t("account-settings.set-password.action.remove-password.long") : t("account-settings.set-password.action.change-password.short") : props.removePassword ? t("account-settings.set-password.action.remove-password.long") : t("account-settings.set-password.action.change-password.long")));
}
function ChangePasswordDialog(props) {
  const Accounts = React.useContext(AccountsContext);
  const { showError, showNotification } = React.useContext(NotificationsContext);
  const [errors, setErrors] = React.useState({});
  const [formValues, setFormValues] = React.useState({
    nextPassword: "",
    nextPasswordRepeat: "",
    prevPassword: ""
  });
  const [removingPassword, setRemovingPassword] = React.useState(false);
  const validate2 = useFormValidation();
  const { t } = useTranslation();
  const changePassword = () => {
    const { id: accountID, requiresPassword } = props.account;
    const { nextPassword, prevPassword } = formValues;
    const passwordMode = requiresPassword ? "change" : "initial";
    const validation = validate2(formValues, passwordMode);
    setErrors(validation.errors);
    if (validation.success) {
      Accounts.changePassword(accountID, prevPassword, nextPassword).then(() => {
        showNotification(
          "success",
          requiresPassword ? t("account-settings.set-password.notification.password-changed") : t("account-settings.set-password.notification.password-set")
        );
        props.onClose();
      }).catch((error) => {
        isWrongPasswordError(error) ? setErrors({ prevPassword: error }) : showError(error);
      });
    }
  };
  const onClose = () => {
    props.onClose();
    setFormValues({
      nextPassword: "",
      nextPasswordRepeat: "",
      prevPassword: ""
    });
  };
  const removePassword = () => {
    const validation = validate2(formValues, "remove");
    setErrors(validation.errors);
    if (validation.success) {
      Accounts.removePassword(props.account.id, formValues.prevPassword).then(() => {
        showNotification("success", t("account-settings.set-password.notification.password-removed"));
        props.onClose();
      }).catch((error) => {
        isWrongPasswordError(error) ? setErrors({ prevPassword: error }) : showError(error);
      });
    }
  };
  const setFormValue = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const toggleRemovePassword = () => setRemovingPassword(!removingPassword);
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      noMaxWidth: true,
      preventNotchSpacing: true,
      top: /* @__PURE__ */ React.createElement(
        MainTitle,
        {
          hideBackButton: true,
          onBack: onClose,
          title: props.account.requiresPassword ? t("account-settings.set-password.title.change-password") : t("account-settings.set-password.title.set-password")
        }
      ),
      actions: /* @__PURE__ */ React.createElement(DialogActions, { style: { margin: "32px 0 0" } }, /* @__PURE__ */ React.createElement(
        Actions,
        {
          isPasswordProtected: props.account.requiresPassword,
          onSubmit: removingPassword ? removePassword : changePassword,
          onToggleRemovePassword: toggleRemovePassword,
          removePassword: removingPassword
        }
      ))
    },
    /* @__PURE__ */ React.createElement(
      HorizontalLayout,
      {
        alignSelf: "center",
        justifyContent: "space-evenly",
        margin: "24px 0 0",
        width: "calc(100% + 16px)",
        wrap: "wrap"
      },
      /* @__PURE__ */ React.createElement(Box, { basis: "400px", grow: 0, hidden: !props.account.requiresPassword, margin: "0 16px", shrink: true }, /* @__PURE__ */ React.createElement(
        PasswordField,
        {
          autoFocus: props.account.requiresPassword && true,
          error: Boolean(errors.prevPassword),
          label: errors.prevPassword ? renderFormFieldError(errors.prevPassword, t) : t("account-settings.set-password.textfield.prev-password.label"),
          fullWidth: true,
          margin: "normal",
          value: formValues.prevPassword,
          onChange: (event) => setFormValue("prevPassword", event.target.value),
          InputProps: { startAdornment: adornmentLockOpen }
        }
      )),
      /* @__PURE__ */ React.createElement(Box, { basis: "400px", grow: 0, hidden: removingPassword, margin: "0 16px", shrink: true }, /* @__PURE__ */ React.createElement(
        PasswordField,
        {
          autoFocus: !props.account.requiresPassword && true,
          error: Boolean(errors.nextPassword),
          label: errors.nextPassword ? renderFormFieldError(errors.nextPassword, t) : t("account-settings.set-password.textfield.next-password.label"),
          fullWidth: true,
          margin: "normal",
          value: formValues.nextPassword,
          onChange: (event) => setFormValue("nextPassword", event.target.value),
          InputProps: { startAdornment: adornmentLock }
        }
      ), /* @__PURE__ */ React.createElement(
        PasswordField,
        {
          error: Boolean(errors.nextPasswordRepeat),
          label: errors.nextPasswordRepeat ? renderFormFieldError(errors.nextPasswordRepeat, t) : t("account-settings.set-password.textfield.next-password-repeat.label"),
          fullWidth: true,
          margin: "normal",
          value: formValues.nextPasswordRepeat,
          onChange: (event) => setFormValue("nextPasswordRepeat", event.target.value),
          InputProps: { startAdornment: adornmentLock }
        }
      ))
    )
  );
}
const ChangePasswordDialog$1 = React.memo(ChangePasswordDialog);
function SettingsDialogs(props) {
  const router = useRouter();
  const showChangePassword = matchesRoute(router.location.pathname, changeAccountPassword("*"));
  const showDeleteAccount = matchesRoute(router.location.pathname, deleteAccount("*"));
  const showExportKey = matchesRoute(router.location.pathname, exportSecretKey("*"));
  const showManageSigners = matchesRoute(router.location.pathname, manageAccountSigners("*"));
  const navigateTo = React.useMemo(
    () => ({
      accountSettings: () => router.history.push(accountSettings(props.account.id)),
      allAccounts: () => router.history.push(allAccounts())
    }),
    [router.history, props.account]
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: showChangePassword ? void 0 : "none", height: "100%" } }, /* @__PURE__ */ React.createElement(ChangePasswordDialog$1, { account: props.account, onClose: navigateTo.accountSettings })), /* @__PURE__ */ React.createElement("div", { style: { display: showDeleteAccount ? void 0 : "none", height: "100%" } }, /* @__PURE__ */ React.createElement(
    AccountDeletionContainer,
    {
      account: props.account,
      onClose: navigateTo.accountSettings,
      onDeleted: navigateTo.allAccounts
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { display: showExportKey ? void 0 : "none", height: "100%" } }, /* @__PURE__ */ React.createElement(ExportKeyDialog, { account: props.account, onClose: navigateTo.accountSettings, variant: "export" })), /* @__PURE__ */ React.createElement("div", { style: { display: showManageSigners ? void 0 : "none", height: "100%" } }, /* @__PURE__ */ React.createElement(ManageSignersDialog$1, { account: props.account, onClose: navigateTo.accountSettings })));
}
function MultiSigItem(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const isSmallScreen = useIsMobile();
  const { t } = useTranslation();
  const disabled = Boolean(
    !accountData.balances.length || !accountData.signers.some((signer) => signer.key === props.account.publicKey)
  );
  const ListItemSecondaryContent = props.account.cosignerOf ? /* @__PURE__ */ React.createElement(React.Fragment, null, t("account-settings.settings.multi-sig.text.secondary.cosigner-of"), " ", /* @__PURE__ */ React.createElement(Address, { address: props.account.cosignerOf, testnet: props.account.testnet })) : isSmallScreen ? t("account-settings.settings.multi-sig.text.secondary.short") : t("account-settings.settings.multi-sig.text.secondary.long");
  return /* @__PURE__ */ React.createElement(
    AccountSettingsItem,
    {
      caret: "right",
      disabled,
      icon: /* @__PURE__ */ React.createElement(GroupIcon, { style: { fontSize: "100%" } }),
      onClick: props.onClick
    },
    /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: t("account-settings.settings.multi-sig.text.primary"),
        secondary: ListItemSecondaryContent,
        style: props.listItemTextStyle
      }
    )
  );
}
function DeleteAccountItem(props) {
  useLiveAccountData(props.account.publicKey, props.account.testnet);
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(AccountSettingsItem, { caret: "right", icon: /* @__PURE__ */ React.createElement(DeleteIcon, { style: { fontSize: "100%" } }), onClick: props.onClick }, /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      primary: t("account-settings.settings.delete-account.text.primary"),
      style: props.listItemTextStyle
    }
  ));
}
function AccountSettings(props) {
  const isSmallScreen = useIsMobile();
  const router = useRouter();
  const { t } = useTranslation();
  const settings = React.useContext(SettingsContext);
  const navigateTo = React.useMemo(
    () => ({
      changePassword: () => router.history.push(changeAccountPassword(props.account.id)),
      deleteAccount: () => router.history.push(deleteAccount(props.account.id)),
      exportSecretKey: () => router.history.push(exportSecretKey(props.account.id)),
      manageSigners: () => router.history.push(manageAccountSigners(props.account.id))
    }),
    [router.history, props.account]
  );
  const showSettingsOverview = matchesRoute(router.location.pathname, accountSettings(props.account.id), true);
  const listItemTextStyle = React.useMemo(
    () => ({
      paddingRight: isSmallScreen ? 0 : void 0
    }),
    [isSmallScreen]
  );
  return /* @__PURE__ */ React.createElement(Carousel, { current: showSettingsOverview ? 0 : 1 }, /* @__PURE__ */ React.createElement(List, { style: { padding: isSmallScreen ? 0 : "24px 16px" } }, /* @__PURE__ */ React.createElement(
    AccountSettingsItem,
    {
      caret: "right",
      icon: /* @__PURE__ */ React.createElement(KeyIcon, { style: { fontSize: "100%" } }),
      onClick: navigateTo.changePassword
    },
    /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: props.account.requiresPassword ? t("account-settings.settings.set-password.text.primary.account-protected") : t("account-settings.settings.set-password.text.primary.account-not-protected"),
        secondary: props.account.requiresPassword ? t("account-settings.settings.set-password.text.secondary.account-protected") : t("account-settings.settings.set-password.text.secondary.account-not-protected"),
        style: listItemTextStyle
      }
    )
  ), settings.multiSignature ? /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(MultiSigItem, { ...props, listItemTextStyle, onClick: navigateTo.manageSigners })) : null, /* @__PURE__ */ React.createElement(
    AccountSettingsItem,
    {
      caret: "right",
      icon: /* @__PURE__ */ React.createElement(EyeIcon, { style: { fontSize: "100%" } }),
      onClick: navigateTo.exportSecretKey
    },
    /* @__PURE__ */ React.createElement(
      ListItemText,
      {
        primary: t("account-settings.settings.export-secret-key.text.primary"),
        secondary: t("account-settings.settings.export-secret-key.text.secondary"),
        style: listItemTextStyle
      }
    )
  ), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: null }, /* @__PURE__ */ React.createElement(DeleteAccountItem, { ...props, listItemTextStyle, onClick: navigateTo.deleteAccount }))), /* @__PURE__ */ React.createElement(SettingsDialogs, { account: props.account }));
}
const AccountSettings$1 = React.memo(AccountSettings);
export {
  AccountSettings$1 as default
};
//# sourceMappingURL=AccountSettings-CGtcRnTW.js.map
