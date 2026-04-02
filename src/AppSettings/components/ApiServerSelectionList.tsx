import React from "react"
import { useTranslation } from "react-i18next"
import { TFunction } from "i18next"
import CircularProgress from "@material-ui/core/CircularProgress"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TextField from "@material-ui/core/TextField"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"
import DragIndicatorIcon from "@material-ui/icons/DragIndicator"
import EditIcon from "@material-ui/icons/Edit"
import PublicIcon from "@material-ui/icons/Public"
import WarningIcon from "@material-ui/icons/Warning"
import { SettingsContext } from "~App/contexts/settings"
import { ActionButton } from "~Generic/components/DialogActions"
import { useNetWorker } from "~Generic/hooks/workers"
import { deduplicateHorizonServerURLs, normalizeHorizonServerURL } from "~Generic/lib/horizon-servers"

const useStyles = makeStyles({
  addButton: {
    marginTop: 12
  },
  dragHandle: {
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.35)",
    cursor: "grab",
    display: "flex",
    justifyContent: "center",
    width: 32
  },
  dragging: {
    opacity: 0.55
  },
  emptyState: {
    padding: "24px 0 8px"
  },
  list: {
    background: "transparent",
    paddingBottom: 0
  },
  listItem: {
    background: "#FFFFFF",
    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.1)",
    marginBottom: 10,
    transition: "border-color 120ms ease, transform 120ms ease",
    border: "1px solid transparent",
    borderRadius: 8
  },
  listItemDropTarget: {
    borderColor: "rgba(33, 150, 243, 0.5)",
    transform: "translateY(-1px)"
  },
  listItemPrimary: {
    borderColor: "rgba(76, 175, 80, 0.45)"
  },
  primaryChip: {
    color: "#2E7D32",
    display: "inline-block",
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 2
  },
  secondaryLine: {
    alignItems: "center",
    display: "flex"
  },
  secondaryLineIcon: {
    fontSize: 16,
    marginRight: 6
  },
  secondaryLineText: {
    wordBreak: "break-word"
  },
  urlText: {
    wordBreak: "break-all"
  }
})

type ProbeState =
  | {
      type: "idle"
    }
  | {
      type: "loading"
    }
  | {
      latencyMs: number
      type: "success"
    }
  | {
      latencyMs?: number
      message: string
      type: "error"
    }

interface EditorState {
  index: number | null
  url: string
}

function moveListItem<T>(items: T[], fromIndex: number, toIndex: number) {
  const nextItems = [...items]
  const [movedItem] = nextItems.splice(fromIndex, 1)
  nextItems.splice(toIndex, 0, movedItem)
  return nextItems
}

function getProbeMessage(probe: ProbeState, t: TFunction) {
  if (probe.type === "loading") {
    return t("app-settings.api-servers.status.loading")
  }

  if (probe.type === "success") {
    return t("app-settings.api-servers.status.healthy", { latencyMs: probe.latencyMs })
  }

  if (probe.type === "error") {
    return probe.latencyMs
      ? t("app-settings.api-servers.status.problem-with-latency", {
          latencyMs: probe.latencyMs,
          message: probe.message
        })
      : t("app-settings.api-servers.status.problem", { message: probe.message })
  }

  return t("app-settings.api-servers.status.idle")
}

function getEditorValidationError(
  url: string,
  index: number | null,
  horizonURLs: string[],
  t: TFunction
) {
  const trimmed = url.trim()

  if (!trimmed) {
    return undefined
  }

  let normalizedURL: string
  try {
    normalizedURL = normalizeHorizonServerURL(trimmed)
  } catch (error) {
    return t("app-settings.api-servers.editor.validation.invalid-url")
  }

  const duplicateIndex = horizonURLs.findIndex(
    (configuredURL, configuredIndex) => configuredURL === normalizedURL && configuredIndex !== index
  )

  if (duplicateIndex > -1) {
    return t("app-settings.api-servers.editor.validation.duplicate")
  }

  return undefined
}

const ApiServerSelectionList = React.memo(function ApiServerSelectionList() {
  const classes = useStyles()
  const { t } = useTranslation()
  const netWorker = useNetWorker()
  const { mainnetHorizonURLs, setSetting } = React.useContext(SettingsContext)

  const [draggingIndex, setDraggingIndex] = React.useState<number | null>(null)
  const [dropTargetIndex, setDropTargetIndex] = React.useState<number | null>(null)
  const [editor, setEditor] = React.useState<EditorState | null>(null)
  const [editorProbe, setEditorProbe] = React.useState<ProbeState>({ type: "idle" })
  const [probeStates, setProbeStates] = React.useState<Record<string, ProbeState>>({})

  const horizonURLs = mainnetHorizonURLs

  const saveURLs = React.useCallback(
    (urls: string[]) => {
      setSetting("mainnetHorizonURLs", deduplicateHorizonServerURLs(urls))
    },
    [setSetting]
  )

  const refreshProbe = React.useCallback(
    async (url: string) => {
      setProbeStates(prevState => ({ ...prevState, [url]: { type: "loading" } }))

      const probe = await netWorker.probeHorizonServer(url)

      setProbeStates(prevState => ({
        ...prevState,
        [url]: probe.ok
          ? { type: "success", latencyMs: probe.latencyMs }
          : {
              type: "error",
              latencyMs: probe.latencyMs,
              message: probe.message || t("app-settings.api-servers.status.problem-without-message")
            }
      }))
    },
    [netWorker, t]
  )

  React.useEffect(() => {
    horizonURLs.forEach(url => {
      refreshProbe(url).catch(() => undefined)
    })
  }, [horizonURLs, refreshProbe])

  React.useEffect(() => {
    if (!editor) {
      setEditorProbe({ type: "idle" })
      return
    }

    if (!editor.url.trim()) {
      setEditorProbe({ type: "idle" })
      return
    }

    const validationError = getEditorValidationError(editor.url, editor.index, horizonURLs, t)
    if (validationError) {
      setEditorProbe({ type: "error", message: validationError })
      return
    }

    const timeoutHandle = window.setTimeout(() => {
      const normalizedURL = normalizeHorizonServerURL(editor.url)
      setEditorProbe({ type: "loading" })

      netWorker
        .probeHorizonServer(normalizedURL)
        .then(probe => {
          setEditorProbe(
            probe.ok
              ? { type: "success", latencyMs: probe.latencyMs }
              : {
                  type: "error",
                  latencyMs: probe.latencyMs,
                  message: probe.message || t("app-settings.api-servers.status.problem-without-message")
                }
          )
        })
        .catch(error => {
          setEditorProbe({
            type: "error",
            message: error instanceof Error ? error.message : String(error)
          })
        })
    }, 350)

    return () => window.clearTimeout(timeoutHandle)
  }, [editor, horizonURLs, netWorker, t])

  const closeEditor = React.useCallback(() => {
    setEditor(null)
    setEditorProbe({ type: "idle" })
  }, [])

  const openAddDialog = React.useCallback(() => {
    setEditor({ index: null, url: "" })
  }, [])

  const openEditDialog = React.useCallback((index: number) => {
    setEditor({ index, url: horizonURLs[index] })
  }, [horizonURLs])

  const deleteServer = React.useCallback((index: number) => {
    saveURLs(horizonURLs.filter((_, currentIndex) => currentIndex !== index))
  }, [horizonURLs, saveURLs])

  const saveEditor = React.useCallback(() => {
    if (!editor || editorProbe.type !== "success") {
      return
    }

    const normalizedURL = normalizeHorizonServerURL(editor.url)
    const nextURLs =
      editor.index === null
        ? [...horizonURLs, normalizedURL]
        : horizonURLs.map((url, index) => (index === editor.index ? normalizedURL : url))

    saveURLs(nextURLs)
    refreshProbe(normalizedURL).catch(() => undefined)
    closeEditor()
  }, [closeEditor, editor, editorProbe.type, horizonURLs, refreshProbe, saveURLs])

  const startDragging = React.useCallback((event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.dataTransfer.effectAllowed = "move"
    event.dataTransfer.setData("text/plain", String(index))
    setDraggingIndex(index)
    setDropTargetIndex(index)
  }, [])

  const finishDragging = React.useCallback(() => {
    setDraggingIndex(null)
    setDropTargetIndex(null)
  }, [])

  const dropOnIndex = React.useCallback(
    (index: number) => {
      if (draggingIndex === null || draggingIndex === index) {
        finishDragging()
        return
      }

      saveURLs(moveListItem(horizonURLs, draggingIndex, index))
      finishDragging()
    },
    [draggingIndex, finishDragging, horizonURLs, saveURLs]
  )

  return (
    <>
      <List className={classes.list}>
        {horizonURLs.map((url, index) => {
          const probe = probeStates[url] || ({ type: "idle" } as ProbeState)

          return (
            <ListItem
              className={[
                classes.listItem,
                index === 0 ? classes.listItemPrimary : "",
                dropTargetIndex === index ? classes.listItemDropTarget : ""
              ].join(" ")}
              key={`${url}:${index}`}
              onDragOver={event => {
                event.preventDefault()
                if (dropTargetIndex !== index) {
                  setDropTargetIndex(index)
                }
              }}
              onDrop={event => {
                event.preventDefault()
                dropOnIndex(index)
              }}
            >
              <ListItemIcon style={{ marginRight: 0 }}>
                <div
                  className={`${classes.dragHandle} ${draggingIndex === index ? classes.dragging : ""}`}
                  draggable
                  onDragEnd={finishDragging}
                  onDragStart={event => startDragging(event, index)}
                  title={t("app-settings.api-servers.actions.reorder")}
                >
                  <DragIndicatorIcon />
                </div>
              </ListItemIcon>
              <ListItemIcon style={{ marginRight: 0 }}>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    {index === 0 ? <span className={classes.primaryChip}>{t("app-settings.api-servers.primary")}</span> : null}
                    <Typography className={classes.urlText} variant="body1">
                      {url}
                    </Typography>
                  </>
                }
                secondary={
                  <span className={classes.secondaryLine}>
                    {probe.type === "loading" ? <CircularProgress size={14} style={{ marginRight: 8 }} /> : null}
                    {probe.type === "error" ? <WarningIcon className={classes.secondaryLineIcon} color="error" /> : null}
                    <Typography
                      className={classes.secondaryLineText}
                      color={probe.type === "error" ? "error" : "textSecondary"}
                      variant="body2"
                    >
                      {getProbeMessage(probe, t)}
                    </Typography>
                  </span>
                }
              />
              <Tooltip title={t("app-settings.api-servers.actions.edit")}>
                <IconButton onClick={() => openEditDialog(index)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={t("app-settings.api-servers.actions.delete")}>
                <span>
                  <IconButton disabled={horizonURLs.length <= 1} onClick={() => deleteServer(index)}>
                    <DeleteIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </ListItem>
          )
        })}
      </List>

      {horizonURLs.length === 0 ? (
        <Typography align="center" className={classes.emptyState} color="textSecondary">
          {t("app-settings.api-servers.empty")}
        </Typography>
      ) : null}

      <ActionButton className={classes.addButton} icon={<AddIcon />} onClick={openAddDialog} type="primary">
        {t("app-settings.api-servers.actions.add")}
      </ActionButton>

      <Dialog fullWidth maxWidth="sm" onClose={closeEditor} open={Boolean(editor)}>
        <DialogTitle>
          {editor?.index === null
            ? t("app-settings.api-servers.editor.add-title")
            : t("app-settings.api-servers.editor.edit-title")}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label={t("app-settings.api-servers.editor.url-label")}
            margin="dense"
            onChange={event => {
              const { value } = event.target
              setEditor(current => (current ? { ...current, url: value } : current))
            }}
            value={editor?.url || ""}
          />
          {editorProbe.type !== "idle" ? (
            <Typography
              color={editorProbe.type === "error" ? "error" : "textSecondary"}
              style={{ marginTop: 16 }}
              variant="body2"
            >
              {getProbeMessage(editorProbe, t)}
            </Typography>
          ) : null}
        </DialogContent>
        <DialogActions>
          <ActionButton onClick={closeEditor}>{t("app-settings.api-servers.editor.actions.cancel")}</ActionButton>
          <ActionButton disabled={editorProbe.type !== "success"} onClick={saveEditor} type="primary">
            {editor?.index === null
              ? t("app-settings.api-servers.editor.actions.add")
              : t("app-settings.api-servers.editor.actions.save")}
          </ActionButton>
        </DialogActions>
      </Dialog>
    </>
  )
})

export default ApiServerSelectionList
