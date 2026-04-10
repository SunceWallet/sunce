import React from "react"
import { useTranslation } from "react-i18next"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Switch from "@material-ui/core/Switch"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { SettingsContext } from "~App/contexts/settings"
import { useNetWorker } from "~Generic/hooks/workers"
import { normalizeHorizonServerURL } from "~Generic/lib/horizon-servers"
import DialogBody from "~Layout/components/DialogBody"

const useStyles = makeStyles({
  field: {
    marginTop: 12
  },
  note: {
    marginTop: 6
  },
  switchControl: {
    flexShrink: 0,
    marginLeft: 16
  },
  switchDescription: {
    flex: 1,
    minWidth: 0
  },
  switchNote: {
    marginTop: 4
  },
  switchRow: {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12
  },
  status: {
    marginTop: 12
  }
})

type ProbeState =
  | { type: "idle" }
  | { probedURL: string; type: "loading" }
  | { probedURL: string; type: "success" }
  | { message: string; probedURL?: string; type: "error" }

function ManageApiServerDialog() {
  const classes = useStyles()
  const { t } = useTranslation()
  const netWorker = useNetWorker()
  const { customMainnetHorizonURL, onlyCustomMainnetHorizon, setSetting, useCustomMainnetHorizon } =
    React.useContext(SettingsContext)

  const [useCustomServer, setUseCustomServer] = React.useState(useCustomMainnetHorizon)
  const [serverURL, setServerURL] = React.useState(customMainnetHorizonURL || "")
  const [onlyThisServer, setOnlyThisServer] = React.useState(Boolean(customMainnetHorizonURL) && onlyCustomMainnetHorizon)
  const [probeState, setProbeState] = React.useState<ProbeState>({ type: "idle" })
  const [showCheckingState, setShowCheckingState] = React.useState(false)
  const latestServerURL = React.useRef(serverURL)
  const latestUseCustomServer = React.useRef(useCustomServer)

  React.useEffect(() => {
    latestServerURL.current = serverURL
  }, [serverURL])

  React.useEffect(() => {
    latestUseCustomServer.current = useCustomServer
  }, [useCustomServer])

  const getCurrentNormalizedURL = React.useCallback(() => {
    if (!latestUseCustomServer.current) {
      return undefined
    }

    const trimmedURL = latestServerURL.current.trim()
    if (!trimmedURL) {
      return undefined
    }

    try {
      return normalizeHorizonServerURL(trimmedURL)
    } catch (error) {
      return undefined
    }
  }, [])

  React.useEffect(() => {
    if (!useCustomServer) {
      setProbeState({ type: "idle" })
      setShowCheckingState(false)
      return
    }

    const trimmedURL = serverURL.trim()

    if (!trimmedURL) {
      setProbeState({ type: "idle" })
      setShowCheckingState(false)
      return
    }

    let normalizedURL: string
    try {
      normalizedURL = normalizeHorizonServerURL(trimmedURL)
    } catch (error) {
      setProbeState({ type: "error", message: t("app-settings.api-server.validation.invalid-url") })
      setShowCheckingState(false)
      return
    }

    let isCancelled = false
    const timeoutHandle = window.setTimeout(() => {
      setProbeState({ type: "loading", probedURL: normalizedURL })
      const showCheckingTimeoutHandle = window.setTimeout(() => {
        if (!isCancelled) {
          setShowCheckingState(true)
        }
      }, 500)

      netWorker
        .probeHorizonServer(normalizedURL)
        .then(probe => {
          window.clearTimeout(showCheckingTimeoutHandle)
          setShowCheckingState(false)
          if (getCurrentNormalizedURL() !== normalizedURL) {
            return
          }
          setProbeState(
            probe.ok
              ? { type: "success", probedURL: normalizedURL }
              : {
                  type: "error",
                  probedURL: normalizedURL,
                  message: probe.message || t("app-settings.api-server.validation.probe-failed")
                }
          )
        })
        .catch(error => {
          window.clearTimeout(showCheckingTimeoutHandle)
          setShowCheckingState(false)
          if (getCurrentNormalizedURL() !== normalizedURL) {
            return
          }
          setProbeState({
            type: "error",
            probedURL: normalizedURL,
            message: error instanceof Error ? error.message : String(error)
          })
        })
    }, 350)

    return () => {
      isCancelled = true
      setShowCheckingState(false)
      window.clearTimeout(timeoutHandle)
    }
  }, [getCurrentNormalizedURL, netWorker, serverURL, t, useCustomServer])

  React.useEffect(() => {
    if (useCustomMainnetHorizon !== useCustomServer) {
      setSetting("useCustomMainnetHorizon", useCustomServer)
    }
  }, [setSetting, useCustomMainnetHorizon, useCustomServer])

  React.useEffect(() => {
    if (!useCustomServer) {
      return
    }

    const trimmedURL = serverURL.trim()

    if (!trimmedURL) {
      if (customMainnetHorizonURL !== undefined) {
        setSetting("customMainnetHorizonURL", undefined)
      }
      if (onlyCustomMainnetHorizon) {
        setSetting("onlyCustomMainnetHorizon", false)
      }
      return
    }

    if (probeState.type !== "success") {
      return
    }

    let normalizedURL: string
    try {
      normalizedURL = normalizeHorizonServerURL(trimmedURL)
    } catch (error) {
      return
    }

    if (probeState.probedURL !== normalizedURL) {
      return
    }

    if (customMainnetHorizonURL !== normalizedURL) {
      setSetting("customMainnetHorizonURL", normalizedURL)
    }

    if (onlyCustomMainnetHorizon !== onlyThisServer) {
      setSetting("onlyCustomMainnetHorizon", onlyThisServer)
    }
  }, [
    customMainnetHorizonURL,
    onlyCustomMainnetHorizon,
    onlyThisServer,
    probeState,
    serverURL,
    setSetting,
    useCustomServer
  ])

  return (
    <DialogBody>
      <DialogContent style={{ flexGrow: 0, padding: 0 }}>
        <DialogContentText align="justify" style={{ marginTop: 8 }}>
          {t("app-settings.api-server.info.primary")}
        </DialogContentText>
        <div className={classes.switchRow}>
          <div className={classes.switchDescription}>
            <Typography variant="body1">{t("app-settings.api-server.enabled.label")}</Typography>
          </div>
          <Switch
            className={classes.switchControl}
            color="primary"
            checked={useCustomServer}
            onChange={event => setUseCustomServer(event.target.checked)}
          />
        </div>
        {useCustomServer ? (
          <>
            <TextField
              className={classes.field}
              fullWidth
              label={t("app-settings.api-server.field.label")}
              onChange={event => {
                setServerURL(event.target.value)
              }}
              value={serverURL}
            />
            {probeState.type === "error" || (probeState.type === "loading" && showCheckingState) ? (
              <Typography
                className={classes.status}
                color={probeState.type === "error" ? "error" : "textSecondary"}
                variant="body2"
              >
                {probeState.type === "loading" ? t("app-settings.api-server.validation.checking") : probeState.message}
              </Typography>
            ) : null}

            <div className={classes.switchRow}>
              <div className={classes.switchDescription}>
                <Typography variant="body1">{t("app-settings.api-server.only.label")}</Typography>
                <Typography className={classes.switchNote} color="textSecondary" variant="body2">
                  {t("app-settings.api-server.only.note")}
                </Typography>
              </div>
              <Switch
                className={classes.switchControl}
                color="primary"
                checked={onlyThisServer}
                onChange={event => setOnlyThisServer(event.target.checked)}
              />
            </div>
          </>
        ) : null}
      </DialogContent>
    </DialogBody>
  )
}

export default React.memo(ManageApiServerDialog)
