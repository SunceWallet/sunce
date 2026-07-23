import React from "react"
import ButtonBase from "@material-ui/core/ButtonBase"
import CircularProgress from "@material-ui/core/CircularProgress"
import Typography from "@material-ui/core/Typography"
import CloudDoneIcon from "@material-ui/icons/CloudDone"
import CloudOffIcon from "@material-ui/icons/CloudOff"
import CloudQueueIcon from "@material-ui/icons/CloudQueue"
import { useTranslation } from "react-i18next"
import { SavedAddressesSyncStatus as SyncStatus } from "~App/contexts/savedAddresses"

const successColor = "#47a66a"
const errorColor = "#d65f5f"
const staleColor = "#c77d00"
const freshSyncDurationMs = 5 * 60 * 1000

interface Props {
  compact?: boolean
  lastSyncAt: number | undefined
  onClick: () => void
  status: SyncStatus
}

function SavedAddressesSyncStatus(props: Props) {
  const { t } = useTranslation()
  const [, updateRelativeTime] = React.useState(0)

  React.useEffect(() => {
    if (!props.lastSyncAt) return

    const interval = window.setInterval(() => updateRelativeTime((value) => value + 1), 30 * 1000)
    return () => window.clearInterval(interval)
  }, [props.lastSyncAt])

  const minutesAgo = props.lastSyncAt
    ? Math.max(0, Math.floor((Date.now() - props.lastSyncAt) / (60 * 1000)))
    : undefined
  const isStale = props.lastSyncAt ? Date.now() - props.lastSyncAt >= freshSyncDurationMs : false
  const textStyle: React.CSSProperties = { whiteSpace: "nowrap" }

  let content: React.ReactNode = null
  if (props.compact && props.status === "syncing") {
    content = <CircularProgress size={17} style={{ color: successColor }} />
  } else if (props.compact && props.status === "error") {
    content = <CloudOffIcon style={{ color: errorColor, fontSize: 22 }} />
  } else if (props.compact && props.lastSyncAt) {
    content = isStale ? (
      <CloudQueueIcon style={{ color: staleColor, fontSize: 22 }} />
    ) : (
      <CloudDoneIcon style={{ color: "black", fontSize: 22 }} />
    )
  } else if (props.status === "syncing") {
    content = (
      <>
        <CircularProgress size={16} style={{ color: successColor, marginRight: 8 }} />
        <Typography color="textSecondary" style={textStyle} variant="body2">
          {t("account.saved-addresses.sync.status.syncing")}
        </Typography>
      </>
    )
  } else if (props.status === "error") {
    content = (
      <Typography style={{ ...textStyle, color: errorColor }} variant="body2">
        {t("account.saved-addresses.sync.status.failed")}
      </Typography>
    )
  } else if (props.lastSyncAt) {
    content = (
      <Typography style={{ ...textStyle, color: isStale ? staleColor : successColor }} variant="body2">
        {t(
          minutesAgo === 1
            ? "account.saved-addresses.sync.status.minute-ago"
            : "account.saved-addresses.sync.status.minutes-ago",
          { count: minutesAgo }
        )}
      </Typography>
    )
  } else if (!props.compact) {
    content = (
      <Typography color="textSecondary" style={textStyle} variant="body2">
        {t("account.saved-addresses.sync.status.never-synced")}
      </Typography>
    )
  }

  if (!content) return null

  return (
    <ButtonBase
      aria-label={t(
        props.compact ? "account.saved-addresses.sync.title" : "account.saved-addresses.sync.status.sync-now"
      )}
      disabled={!props.compact && props.status === "syncing"}
      onClick={props.onClick}
      style={{ alignItems: "center", display: "flex" }}
      title={t(props.compact ? "account.saved-addresses.sync.title" : "account.saved-addresses.sync.status.sync-now")}
    >
      {content}
    </ButtonBase>
  )
}

export default React.memo(SavedAddressesSyncStatus)
