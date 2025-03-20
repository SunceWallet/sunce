import { R as React, Y as makeStyles, a$ as useDialogActions, a8 as useIsMobile, Z as useTranslation, $ as DialogActionsBox, am as Fade, a0 as ActionButton, aY as Dialog, a_ as CompactDialogTransition, b0 as DialogBody, E as Typography, ah as breakpoints, aL as trackError, bu as List, H as ListItem, aw as ListItemText, a4 as CustomError } from "./app-DBEXmgIl.js";
import { P as Portal, o as openLink, L as ListItemIcon, ao as OpenInNewIcon, a as Trans } from "./app-stage2-CwdMAbKU.js";
const useLegalConfirmationStyles = makeStyles({
  root: {
    [breakpoints.down(600)]: {
      zIndex: 1400
    }
  },
  dialogPaper: {
    [breakpoints.down(600)]: {
      alignSelf: "flex-end",
      background: "rgba(255, 255, 255, 0.9)",
      margin: "0 20px 120px"
    }
  }
});
function LegalConfirmation(props) {
  const classes = useLegalConfirmationStyles();
  const dialogActionsRef = useDialogActions();
  const isSmallScreen = useIsMobile();
  const { t } = useTranslation();
  const actions = React.useMemo(
    () => /* @__PURE__ */ React.createElement(DialogActionsBox, { className: classes.root, smallDialog: true, transparent: true }, /* @__PURE__ */ React.createElement(Fade, { enter: isSmallScreen, exit: isSmallScreen, in: props.open }, /* @__PURE__ */ React.createElement(ActionButton, { onClick: props.onConfirm, type: "primary" }, t("account.purchase-lumens.legal-confirmation.action.confirm")))),
    [classes.root, isSmallScreen, props.onConfirm, props.open, t]
  );
  return /* @__PURE__ */ React.createElement(
    Dialog,
    {
      classes: {
        paper: classes.dialogPaper
      },
      onClose: props.onClose,
      open: props.open,
      TransitionComponent: CompactDialogTransition
    },
    /* @__PURE__ */ React.createElement(DialogBody, { actions: dialogActionsRef, preventActionsPlaceholder: true, preventNotchSpacing: true }, /* @__PURE__ */ React.createElement(Typography, { color: "textSecondary" }, props.message)),
    /* @__PURE__ */ React.createElement(Portal, { target: isSmallScreen ? document.body : dialogActionsRef.element }, actions)
  );
}
const LegalConfirmation$1 = React.memo(LegalConfirmation);
async function fetchSignedMoonpayURL(account) {
  const baseURL = "https://ncy9jaxgqh.execute-api.eu-central-1.amazonaws.com/moonpay";
  const url = `${baseURL}?walletAddress=${account.accountID}&testnet=${account.testnet}`;
  const response = await fetch(url);
  if (!response.ok) {
    const responseText = await response.text();
    throw CustomError("HttpRequestError", `HTTP fetch failed: ${responseText} 
Service: ${url}`, {
      response: responseText,
      service: url
    });
  }
  const result = await response.json();
  return result.url;
}
function LumenDepositOptions(props) {
  const { account, onCloseDialog } = props;
  const [isLegalNoteOpen, setIsLegalNoteOpen] = React.useState(false);
  const { t } = useTranslation();
  const closeLegalNote = React.useCallback(() => setIsLegalNoteOpen(false), []);
  const openLegalNote = React.useCallback(() => setIsLegalNoteOpen(true), []);
  const navigateToMoonPay = React.useCallback(async () => {
    try {
      const signedMoonpayURL = await fetchSignedMoonpayURL(account);
      openLink(signedMoonpayURL);
      onCloseDialog();
    } catch (error) {
      trackError(error);
    }
  }, [account, onCloseDialog]);
  return /* @__PURE__ */ React.createElement(List, { style: { margin: "16px auto", maxWidth: 600 } }, /* @__PURE__ */ React.createElement(ListItem, { button: true, onClick: openLegalNote }, /* @__PURE__ */ React.createElement(
    ListItemText,
    {
      primary: t("account.purchase-lumens.moonpay.text.primary"),
      secondary: t("account.purchase-lumens.moonpay.text.secondary")
    }
  ), /* @__PURE__ */ React.createElement(ListItemIcon, { style: { minWidth: 24, marginLeft: 12 } }, /* @__PURE__ */ React.createElement(OpenInNewIcon, null))), /* @__PURE__ */ React.createElement(
    LegalConfirmation$1,
    {
      message: /* @__PURE__ */ React.createElement(Trans, { i18nKey: "account.purchase-lumens.moonpay.legal-confirmation" }, "You will be redirected to moonpay.io, a third-party service. The depositing process is operated by Moon Pay Ltd, not by Sunce or Montelibero.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "Please contact the moonpay.io support for inquiries related to your deposit."),
      onClose: closeLegalNote,
      open: isLegalNoteOpen,
      onConfirm: navigateToMoonPay
    }
  ));
}
const LumenDepositOptions$1 = React.memo(LumenDepositOptions);
export {
  LumenDepositOptions$1 as L
};
//# sourceMappingURL=LumenPurchaseOptions-BS60gtKd.js.map
