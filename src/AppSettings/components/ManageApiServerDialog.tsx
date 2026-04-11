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
  | { type: "loading" }
  | { probedURL: string; type: "success" }
  | { message: string; type: "error" }

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
  const latestProbeID = React.useRef(0)

  const normalizedURL = React.useMemo(() => {
    if (!useCustomServer) {
      return undefined
    }

    const trimmedURL = serverURL.trim()
    if (!trimmedURL) {
      return undefined
    }

    try {
      return normalizeHorizonServerURL(trimmedURL)
    } catch (error) {
      return null
    }
  }, [serverURL, useCustomServer])

  React.useEffect(() => {
    if (!useCustomServer) {
      setProbeState({ type: "idle" })
      return
    }

    if (normalizedURL === undefined) {
      setProbeState({ type: "idle" })
      return
    }

    if (normalizedURL === null) {
      setProbeState({ type: "error", message: t("app-settings.api-server.validation.invalid-url") })
      return
    }

    const probeID = latestProbeID.current + 1
    latestProbeID.current = probeID

    const timeoutHandle = window.setTimeout(() => {
      setProbeState({ type: "loading" })

      netWorker
        .probeHorizonServer(normalizedURL)
        .then(probe => {
          if (latestProbeID.current !== probeID) {
            return
          }
          setProbeState(
            probe.ok
              ? { type: "success", probedURL: normalizedURL }
              : {
                  type: "error",
                  message: t("app-settings.api-server.validation.probe-failed")
                }
          )
        })
        .catch(error => {
          if (latestProbeID.current !== probeID) {
            return
          }
          setProbeState({
            type: "error",
            message: error instanceof Error ? error.message : String(error)
          })
        })
    }, 350)

    return () => {
      window.clearTimeout(timeoutHandle)
    }
  }, [netWorker, normalizedURL, t, useCustomServer])

  React.useEffect(() => {
    if (useCustomMainnetHorizon !== useCustomServer) {
      setSetting("useCustomMainnetHorizon", useCustomServer)
    }
  }, [setSetting, useCustomMainnetHorizon, useCustomServer])

  React.useEffect(() => {
    if (!useCustomServer) {
      return
    }

    if (normalizedURL === undefined) {
      if (customMainnetHorizonURL !== undefined) {
        setSetting("customMainnetHorizonURL", undefined)
      }
      if (onlyCustomMainnetHorizon) {
        setSetting("onlyCustomMainnetHorizon", false)
      }
      return
    }

    if (normalizedURL === null) {
      return
    }

    if (probeState.type !== "success") {
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
    normalizedURL,
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
            {probeState.type === "error" || probeState.type === "loading" ? (
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
