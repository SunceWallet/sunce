import React from "react"
import { useTranslation } from "react-i18next"
import Typography from "@material-ui/core/Typography"
import { Account } from "~/src/App/contexts/accounts"
import * as routes from "~/src/App/routes"
import { useRouter, RefStateObject } from "~/src/Generic/hooks/userinterface"
import { ActionButton, DialogActionsBox } from "~/src/Generic/components/DialogActions"
import { Box } from "~/src/Layout/components/Box"
import Portal from "~/src/Generic/components/Portal"

interface Props {
  account: Account
  actionsRef: RefStateObject
  margin?: string
}

function NoWithdrawableAssets(props: Props) {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <Box margin={props.margin} textAlign="center">
      <Typography>{t("transfer-service.no-withdrawable-assets.body.no-withdrawable-assets")}</Typography>
      <Portal desktop="inline" target={props.actionsRef.element}>
        <DialogActionsBox>
          <ActionButton
            onClick={() => router.history.push(routes.manageAccountAssets(props.account.id))}
            type="primary"
          >
            {t("transfer-service.no-withdrawable-assets.action.add-asset")}
          </ActionButton>
        </DialogActionsBox>
      </Portal>
    </Box>
  )
}

export default React.memo(NoWithdrawableAssets)
