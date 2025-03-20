import { R as React, Z as useTranslation, b0 as DialogBody, a9 as MainTitle } from "./app-DBEXmgIl.js";
import { L as LumenDepositOptions } from "./LumenPurchaseOptions-BS60gtKd.js";
import "./app-stage2-CwdMAbKU.js";
function LumenPurchaseDialog(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(DialogBody, { top: /* @__PURE__ */ React.createElement(MainTitle, { onBack: props.onClose, title: t("account.purchase-lumens.title") }) }, /* @__PURE__ */ React.createElement(LumenDepositOptions, { account: props.account, onCloseDialog: props.onClose }));
}
const LumenPurchaseDialog$1 = React.memo(LumenPurchaseDialog);
export {
  LumenPurchaseDialog$1 as default
};
//# sourceMappingURL=LumenPurchaseDialog-DoyEd-GJ.js.map
