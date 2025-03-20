const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["TransferDialog-DaDEV4fk.js","app-DBEXmgIl.js","app-IuAF7eHC.css","app-stage2-CwdMAbKU.js","app-stage2-v69G8-5r.css","LumenPurchaseOptions-BS60gtKd.js","ScrollableBalances-C4xYilZB.js"])))=>i.map(i=>d[i]);
import { R as React, a8 as useIsMobile, b0 as DialogBody, ak as VerticalLayout, Z as useTranslation, a9 as MainTitle, X as useLiveAccountData, aj as ViewLoading, ai as __vitePreload } from "./app-DBEXmgIl.js";
import { I as InlineLoader, w as TestnetBadge, T as TransactionSender } from "./app-stage2-CwdMAbKU.js";
import ScrollableBalances from "./ScrollableBalances-C4xYilZB.js";
const Title = React.memo(function Title2(props) {
  const { t } = useTranslation();
  return /* @__PURE__ */ React.createElement(
    MainTitle,
    {
      title: /* @__PURE__ */ React.createElement("span", null, props.type === "deposit" ? t("transfer-service.title.deposit") : t("transfer-service.title.withdrawal"), " ", props.account.testnet ? /* @__PURE__ */ React.createElement(TestnetBadge, { style: { marginLeft: 8 } }) : null),
      onBack: props.onNavigateBack
    }
  );
});
function TransferDialogLayout(props) {
  const isSmallScreen = useIsMobile();
  return /* @__PURE__ */ React.createElement(
    DialogBody,
    {
      top: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Title, { account: props.account, onNavigateBack: props.onNavigateBack, type: props.type }), /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(InlineLoader, null) }, /* @__PURE__ */ React.createElement(ScrollableBalances, { account: props.account, compact: true }))),
      actions: props.dialogActionsRef
    },
    /* @__PURE__ */ React.createElement(VerticalLayout, { height: "100%", padding: isSmallScreen ? "16px 0px" : "16px 8px" }, props.children)
  );
}
const TransferDialogLayout$1 = React.memo(TransferDialogLayout);
const TransferDialog = React.lazy(() => __vitePreload(() => import("./TransferDialog-DaDEV4fk.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
function ConnectedTransferDialog(props) {
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  return /* @__PURE__ */ React.createElement(TransactionSender, { account: props.account }, ({ horizon, sendTransaction }) => /* @__PURE__ */ React.createElement(
    React.Suspense,
    {
      fallback: /* @__PURE__ */ React.createElement(
        TransferDialogLayout$1,
        {
          account: props.account,
          dialogActionsRef: void 0,
          onNavigateBack: props.onClose,
          type: props.type
        },
        /* @__PURE__ */ React.createElement(ViewLoading, { height: 300 })
      )
    },
    /* @__PURE__ */ React.createElement(TransferDialog, { ...props, accountData, horizon, sendTransaction })
  ));
}
const ConnectedTransferDialog$1 = React.memo(ConnectedTransferDialog);
const ConnectedTransferDialog$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConnectedTransferDialog$1
}, Symbol.toStringTag, { value: "Module" }));
export {
  ConnectedTransferDialog$2 as C,
  TransferDialogLayout$1 as T
};
//# sourceMappingURL=ConnectedTransferDialog-Bi_V8awo.js.map
