import React from "react"
import { useTranslation } from "react-i18next"
import { Horizon, Operation } from "@stellar/stellar-sdk"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/Delete"
import FilterListIcon from "@material-ui/icons/FilterList"
import RestoreIcon from "@material-ui/icons/Restore"
import SaveIcon from "@material-ui/icons/Save"
import UpdateIcon from "@material-ui/icons/Update"
import { nanoid } from "nanoid"
import { Account } from "~App/contexts/accounts"
import { trackError, NotificationsContext } from "~App/contexts/notifications"
import { ActionButton, ConfirmDialog, DialogActionsBox } from "~Generic/components/DialogActions"
import { SearchField } from "~Generic/components/FormFields"
import MainTitle from "~Generic/components/MainTitle"
import { useLiveAccountData } from "~Generic/hooks/stellar-subscriptions"
import { useRouter } from "~Generic/hooks/userinterface"
import { AccountData } from "~Generic/lib/account"
import { createTransaction } from "~Generic/lib/transaction"
import DialogBody from "~Layout/components/DialogBody"
import TransactionSender, { SendTransaction } from "~Transaction/components/TransactionSender"
import {
  analyzeDataEntryRows,
  buildExistingRows,
  convertValueMode,
  DataEntryGeneralIssue,
  DataEntryOperationDraft,
  DataEntryRow,
  DataEntryRowIssue,
  DataEntryStatus,
  DataEntryValueMode,
  ExistingDataEntryRow,
  parseValueInput,
  stringifyValue,
  validateDataName
} from "~Account/lib/dataEntries"

const useStyles = makeStyles((theme) => ({
  warningBox: {
    borderRadius: 8,
    marginBottom: 8,
    padding: "10px 12px"
  },
  warningError: {
    background: "#fdecea",
    color: "#8f2d24"
  },
  row: {
    alignItems: "stretch",
    background: "white",
    borderLeft: "4px solid #d3d7dd",
    borderRadius: 8,
    boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.08)",
    display: "block",
    marginBottom: 12,
    padding: 12
  },
  rowDeleted: {
    borderLeft: "4px solid #d65f5f"
  },
  rowUpdated: {
    borderLeft: "4px solid #4f84c4"
  },
  rowNew: {
    borderLeft: "4px solid #47a66a"
  },
  rowInvalid: {
    borderLeft: "4px solid #c77d00"
  },
  fieldsStack: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: 16
    }
  },
  nameRow: {
    alignItems: "flex-start",
    display: "flex",
    "& > * + *": {
      marginLeft: 12
    }
  },
  nameField: {
    flex: 1,
    minWidth: 0
  },
  rowActions: {
    alignItems: "flex-start",
    display: "flex",
    flexShrink: 0,
    justifyContent: "flex-end",
    marginTop: 4
  },
  statusLine: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 6
  },
  statusMeta: {
    alignItems: "center",
    display: "flex",
    "& > * + *": {
      marginLeft: 16
    }
  },
  statusText: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 13
  },
  encodingToggle: {
    borderBottom: "1px dotted rgba(0, 0, 0, 0.55)",
    color: "rgba(0, 0, 0, 0.75)",
    cursor: "pointer",
    fontSize: 13,
    lineHeight: 1.1,
    userSelect: "none"
  },
  issues: {
    marginTop: 6
  },
  issueText: {
    color: theme.palette.error.main,
    fontSize: 13,
    lineHeight: 1.4
  },
  dividerTitle: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 0.4,
    margin: "16px 0 12px",
    textTransform: "uppercase"
  },
  summary: {
    color: "rgba(0, 0, 0, 0.65)",
    fontSize: 13,
    margin: "12px 0 8px"
  },
  addButton: {
    alignSelf: "flex-start",
    marginTop: 4
  },
  actionsContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  topFilters: {
    alignItems: "center",
    display: "flex",
    marginBottom: 6,
    marginTop: 8,
    "& > * + *": {
      marginLeft: 8
    }
  },
  topFiltersSearch: {
    flex: 1,
    margin: 0
  },
  filterIconButton: {
    opacity: 0.8
  },
  filterIconButtonActive: {
    color: theme.palette.primary.main,
    opacity: 1
  },
  changedOnlyButton: {
    border: "1px solid rgba(0, 0, 0, 0.24)",
    borderRadius: 4,
    flexShrink: 0,
    height: 56,
    width: 56
  },
  changedOnlyButtonActive: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main
  },
  summaryInActions: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 13,
    margin: "8px 12px 0"
  }
}))

export interface DataEntriesDialogProps {
  account: Account
  onClose: () => void
}

interface DataEntriesEditorProps {
  account: Account
  horizon: Horizon.Server
  onClose: () => void
  sendTransaction: SendTransaction
}

interface NewEntryDraft {
  name: string
  valueInput: string
  valueMode: DataEntryValueMode
}

interface PendingRemoteUpdateState {
  incomingDataAttr: AccountData["data_attr"]
}

const EMPTY_NEW_ENTRY = {
  name: "",
  valueInput: "",
  valueMode: "text" as DataEntryValueMode
} as NewEntryDraft
const ANALYSIS_DEBOUNCE_MS = 200

function uniqueIssues(issues: DataEntryRowIssue[]) {
  const seen = new Set<string>()
  const unique: DataEntryRowIssue[] = []

  for (const issue of issues) {
    const key = issue.type === "value-too-large" ? `${issue.type}:${issue.actual}:${issue.limit}` : issue.type

    if (seen.has(key)) {
      continue
    }

    seen.add(key)
    unique.push(issue)
  }

  return unique
}

function cloneDataAttr(dataAttr: AccountData["data_attr"]): AccountData["data_attr"] {
  return Object.keys(dataAttr).reduce<AccountData["data_attr"]>((cloned, name) => {
    cloned[name] = dataAttr[name]
    return cloned
  }, {})
}

function applyOperationsToDataAttr(
  dataAttr: AccountData["data_attr"],
  operations: DataEntryOperationDraft[]
): AccountData["data_attr"] {
  const nextDataAttr = cloneDataAttr(dataAttr)

  for (const operation of operations) {
    if (operation.value === null) {
      delete nextDataAttr[operation.name]
      continue
    }

    nextDataAttr[operation.name] = operation.value.toString("base64")
  }

  return nextDataAttr
}

function serializeDataAttr(dataAttr: AccountData["data_attr"]) {
  return JSON.stringify(
    Object.keys(dataAttr)
      .sort((left, right) => left.localeCompare(right))
      .map((name) => [name, dataAttr[name]])
  )
}

function hasNewEntryDraft(entry: NewEntryDraft): boolean {
  return entry.name.trim() !== "" || entry.valueInput !== ""
}

function isExistingRowTouched(row: ExistingDataEntryRow, baseDataAttr: AccountData["data_attr"]): boolean {
  const initialValueBase64 = baseDataAttr[row.name]

  if (typeof initialValueBase64 !== "string") {
    return true
  }

  if (row.markedForDeletion || row.valueInput === "") {
    return true
  }

  const parsed = parseValueInput(row.valueMode, row.valueInput)

  if (!parsed.bytes) {
    const initialValueForCurrentMode = stringifyValue(Buffer.from(initialValueBase64, "base64"), row.valueMode)
    return row.valueInput !== initialValueForCurrentMode
  }

  return parsed.bytes.toString("base64") !== initialValueBase64
}

function hasLocalDraftChanges(rows: DataEntryRow[], newEntry: NewEntryDraft, baseDataAttr: AccountData["data_attr"]): boolean {
  if (hasNewEntryDraft(newEntry)) {
    return true
  }

  for (const row of rows) {
    if (row.kind === "new") {
      return true
    }

    if (isExistingRowTouched(row, baseDataAttr)) {
      return true
    }
  }

  return false
}

function DataEntriesEditor(props: DataEntriesEditorProps) {
  const classes = useStyles()
  const { t } = useTranslation()
  const { showNotification } = React.useContext(NotificationsContext)
  const router = useRouter()
  const { onClose } = props

  const liveAccountData = useLiveAccountData(props.account.accountID, props.account.testnet)
  const accountData = liveAccountData

  const [rows, setRows] = React.useState<DataEntryRow[]>(() => buildExistingRows(accountData.data_attr))
  const [rowsForAnalysis, setRowsForAnalysis] = React.useState<DataEntryRow[]>(() => buildExistingRows(accountData.data_attr))
  const [newEntry, setNewEntry] = React.useState<NewEntryDraft>(EMPTY_NEW_ENTRY)
  const [newEntryShowNameErrors, setNewEntryShowNameErrors] = React.useState(false)
  const [newEntryShowValueErrors, setNewEntryShowValueErrors] = React.useState(false)
  const [filtersVisible, setFiltersVisible] = React.useState(false)
  const [filterQuery, setFilterQuery] = React.useState("")
  const [filterChangedOnly, setFilterChangedOnly] = React.useState(false)
  const [pendingRemoteUpdate, setPendingRemoteUpdate] = React.useState<PendingRemoteUpdateState | null>(null)
  const [ignoreIncomingUpdates, setIgnoreIncomingUpdates] = React.useState(false)
  const [leaveConfirmOpen, setLeaveConfirmOpen] = React.useState(false)
  const [txPending, setTxPending] = React.useState(false)
  const [analysisDataAttr, setAnalysisDataAttr] = React.useState<AccountData["data_attr"]>(() => cloneDataAttr(accountData.data_attr))

  const baselineDataAttrRef = React.useRef<AccountData["data_attr"]>(cloneDataAttr(accountData.data_attr))
  const baselineDataAttrKeyRef = React.useRef(serializeDataAttr(accountData.data_attr))
  const rowsRef = React.useRef(rows)
  const newEntryRef = React.useRef(newEntry)
  const hasUnsavedChangesRef = React.useRef(false)
  const leaveConfirmOpenRef = React.useRef(false)
  const pendingRemoteUpdateRef = React.useRef<PendingRemoteUpdateState | null>(null)
  const ignoreIncomingUpdatesRef = React.useRef(false)
  const pendingNavigationRef = React.useRef<(() => void) | null>(null)
  const navigationBypassRef = React.useRef(false)

  const applyIncomingSnapshot = React.useCallback((nextDataAttr: AccountData["data_attr"]) => {
    const snapshot = cloneDataAttr(nextDataAttr)
    const nextRows = buildExistingRows(snapshot)

    baselineDataAttrRef.current = snapshot
    baselineDataAttrKeyRef.current = serializeDataAttr(snapshot)
    setAnalysisDataAttr(snapshot)

    setRows(nextRows)
    setRowsForAnalysis(nextRows)
    setNewEntry(EMPTY_NEW_ENTRY)
    setNewEntryShowNameErrors(false)
    setNewEntryShowValueErrors(false)
    setPendingRemoteUpdate(null)
    setIgnoreIncomingUpdates(false)
  }, [])

  React.useEffect(() => {
    rowsRef.current = rows
  }, [rows])

  React.useEffect(() => {
    newEntryRef.current = newEntry
  }, [newEntry])

  React.useEffect(() => {
    leaveConfirmOpenRef.current = leaveConfirmOpen
  }, [leaveConfirmOpen])

  React.useEffect(() => {
    pendingRemoteUpdateRef.current = pendingRemoteUpdate
  }, [pendingRemoteUpdate])

  React.useEffect(() => {
    ignoreIncomingUpdatesRef.current = ignoreIncomingUpdates
  }, [ignoreIncomingUpdates])

  React.useEffect(() => {
    const incomingDataAttr = cloneDataAttr(accountData.data_attr)
    const incomingDataAttrKey = serializeDataAttr(incomingDataAttr)

    if (incomingDataAttrKey === baselineDataAttrKeyRef.current) {
      if (pendingRemoteUpdateRef.current) {
        setPendingRemoteUpdate(null)
      }

      return
    }

    if (ignoreIncomingUpdatesRef.current) {
      return
    }

    const currentRows = rowsRef.current
    const currentNewEntry = newEntryRef.current
    const baselineDataAttr = baselineDataAttrRef.current
    const hasDraftChanges = hasLocalDraftChanges(currentRows, currentNewEntry, baselineDataAttr)

    if (!hasDraftChanges) {
      applyIncomingSnapshot(incomingDataAttr)
      return
    }

    setPendingRemoteUpdate({
      incomingDataAttr
    })
  }, [accountData.data_attr, applyIncomingSnapshot])

  React.useEffect(() => {
    const timerID = setTimeout(() => setRowsForAnalysis(rows), ANALYSIS_DEBOUNCE_MS)
    return () => clearTimeout(timerID)
  }, [rows])

  const flushAnalysis = React.useCallback(() => setRowsForAnalysis(rows), [rows])
  const accountDataForAnalysis = React.useMemo(
    () => ({
      ...accountData,
      data_attr: analysisDataAttr
    }),
    [accountData, analysisDataAttr]
  )

  const analysis = React.useMemo(
    () => analyzeDataEntryRows(rowsForAnalysis, accountDataForAnalysis),
    [rowsForAnalysis, accountDataForAnalysis]
  )
  const analysisPending = rows !== rowsForAnalysis
  const hasUnsavedChanges = React.useMemo(
    () => hasLocalDraftChanges(rows, newEntry, baselineDataAttrRef.current),
    [newEntry, rows]
  )

  React.useEffect(() => {
    hasUnsavedChangesRef.current = hasUnsavedChanges
  }, [hasUnsavedChanges])

  React.useEffect(() => {
    if (!hasUnsavedChanges && ignoreIncomingUpdatesRef.current) {
      setIgnoreIncomingUpdates(false)
    }
  }, [hasUnsavedChanges])

  const queueLeaveConfirmation = React.useCallback((navigate: () => void) => {
    pendingNavigationRef.current = navigate
    setLeaveConfirmOpen(true)
  }, [])

  const executeNavigationWithBypass = React.useCallback((navigate: () => void) => {
    navigationBypassRef.current = true
    navigate()
    window.setTimeout(() => {
      navigationBypassRef.current = false
    }, 0)
  }, [])

  const confirmLeave = React.useCallback(() => {
    const pendingNavigation = pendingNavigationRef.current
    pendingNavigationRef.current = null
    setLeaveConfirmOpen(false)

    if (pendingNavigation) {
      executeNavigationWithBypass(pendingNavigation)
    }
  }, [executeNavigationWithBypass])

  const cancelLeave = React.useCallback(() => {
    pendingNavigationRef.current = null
    setLeaveConfirmOpen(false)
  }, [])

  React.useEffect(() => {
    const unblock = router.history.block((nextLocation, action) => {
      if (navigationBypassRef.current || !hasUnsavedChangesRef.current) {
        return undefined
      }

      if (!leaveConfirmOpenRef.current) {
        queueLeaveConfirmation(() => {
          const nextPath = `${nextLocation.pathname}${nextLocation.search || ""}${nextLocation.hash || ""}`

          if (action === "REPLACE" || action === "POP") {
            router.history.replace(nextPath)
            return
          }

          router.history.push(nextPath)
        })
      }

      return false
    })

    return unblock
  }, [queueLeaveConfirmation, router.history])

  React.useEffect(() => {
    if (!hasUnsavedChanges) {
      return undefined
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ""
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [hasUnsavedChanges])

  const handleBackNavigation = React.useCallback(() => {
    if (!hasUnsavedChangesRef.current) {
      onClose()
      return
    }

    queueLeaveConfirmation(onClose)
  }, [onClose, queueLeaveConfirmation])

  const activeExistingNames = React.useMemo(() => {
    const names = new Set<string>()

    for (const row of rows) {
      if (row.kind !== "existing") {
        continue
      }

      if (!row.markedForDeletion && row.valueInput !== "") {
        names.add(row.name)
      }
    }

    return names
  }, [rows])

  const existingNewNames = React.useMemo(
    () => new Set(rows.filter((row): row is Extract<DataEntryRow, { kind: "new" }> => row.kind === "new").map((row) => row.name)),
    [rows]
  )

  const newEntryIssues = React.useMemo(() => {
    const issues: DataEntryRowIssue[] = []

    issues.push(...validateDataName(newEntry.name))

    if (activeExistingNames.has(newEntry.name)) {
      issues.push({ type: "duplicate-existing" })
    }

    if (newEntry.name && existingNewNames.has(newEntry.name)) {
      issues.push({ type: "duplicate-new" })
    }

    if (!newEntry.valueInput) {
      issues.push({ type: "value-required" })
    }

    if (newEntry.valueInput) {
      const parsed = parseValueInput(newEntry.valueMode, newEntry.valueInput)

      if (parsed.error) {
        issues.push(parsed.error)
      }
    }

    return uniqueIssues(issues)
  }, [activeExistingNames, existingNewNames, newEntry])

  const isNewEntryNameIssue = React.useCallback((issue: DataEntryRowIssue) => {
    return issue.type === "name-required" || issue.type === "name-length" || issue.type === "name-ascii" || issue.type === "duplicate-existing" || issue.type === "duplicate-new"
  }, [])

  const newEntryNameIssues = React.useMemo(() => newEntryIssues.filter(isNewEntryNameIssue), [isNewEntryNameIssue, newEntryIssues])
  const newEntryValueIssues = React.useMemo(() => newEntryIssues.filter((issue) => !isNewEntryNameIssue(issue)), [isNewEntryNameIssue, newEntryIssues])

  const visibleNewEntryIssues = React.useMemo(
    () => [...(newEntryShowNameErrors ? newEntryNameIssues : []), ...(newEntryShowValueErrors ? newEntryValueIssues : [])],
    [newEntryNameIssues, newEntryShowNameErrors, newEntryShowValueErrors, newEntryValueIssues]
  )

  const canAddNewEntry = newEntryIssues.length === 0

  const setRow = React.useCallback((rowID: string, updater: (row: DataEntryRow) => DataEntryRow) => {
    setRows((prevRows) => prevRows.map((row) => (row.id === rowID ? updater(row) : row)))
  }, [])

  const deleteNewRow = React.useCallback((rowID: string) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== rowID))
  }, [])

  const addNewRow = React.useCallback(() => {
    if (!canAddNewEntry) {
      return
    }

    setRows((prevRows) => [
      ...prevRows,
      {
        id: `new:${nanoid()}`,
        kind: "new",
        name: newEntry.name,
        valueInput: newEntry.valueInput,
        valueMode: newEntry.valueMode
      }
    ])

    setNewEntry(EMPTY_NEW_ENTRY)
    setNewEntryShowNameErrors(false)
    setNewEntryShowValueErrors(false)
  }, [canAddNewEntry, newEntry])

  const toggleRowEncoding = React.useCallback((rowID: string) => {
    setRow(rowID, (currentRow) => {
      const nextMode: DataEntryValueMode = currentRow.valueMode === "text" ? "base64" : "text"
      const converted = convertValueMode(currentRow.valueInput, currentRow.valueMode, nextMode)
      return {
        ...currentRow,
        valueInput: converted.input,
        valueMode: converted.mode
      }
    })
  }, [setRow])

  const restoreExistingRowValue = React.useCallback((rowID: string) => {
    setRow(rowID, (currentRow) => {
      if (currentRow.kind !== "existing") {
        return currentRow
      }

      const initialBytes = Buffer.from(currentRow.initialValueBase64, "base64")

      return {
        ...currentRow,
        markedForDeletion: false,
        valueInput: stringifyValue(initialBytes, currentRow.valueMode)
      }
    })
  }, [setRow])

  const getRowIssueMessage = React.useCallback(
    (issue: DataEntryRowIssue) => {
      if (issue.type === "name-required") {
        return t<string>("account.data-entries.validation.name-required")
      }

      if (issue.type === "name-length") {
        return t<string>("account.data-entries.validation.name-length", { max: issue.max })
      }

      if (issue.type === "name-ascii") {
        return t<string>("account.data-entries.validation.name-ascii")
      }

      if (issue.type === "value-required") {
        return t<string>("account.data-entries.validation.value-required")
      }

      if (issue.type === "invalid-base64") {
        return t<string>("account.data-entries.validation.invalid-base64")
      }

      if (issue.type === "value-too-large") {
        return t<string>("account.data-entries.validation.value-too-large", {
          actual: issue.actual,
          max: issue.limit
        })
      }

      if (issue.type === "duplicate-existing") {
        return t<string>("account.data-entries.validation.duplicate-existing")
      }

      return t<string>("account.data-entries.validation.duplicate-new")
    },
    [t]
  )

  const getGeneralIssueMessage = React.useCallback(
    (issue: DataEntryGeneralIssue) => {
      if (issue.type === "subentries-limit") {
        return t<string>("account.data-entries.validation.subentries-limit", {
          additions: issue.additionsCount,
          excess: issue.excess,
          max: issue.maxAdditionsBySubentries
        })
      }

      if (issue.type === "operations-limit") {
        return t<string>("account.data-entries.validation.operations-limit", {
          excess: issue.excess,
          max: issue.maxOperations,
          operations: issue.operationCount
        })
      }

      if (issue.type === "xlm-additions-limit") {
        return t<string>("account.data-entries.validation.xlm-additions-limit", {
          additions: issue.additionsCount,
          max: issue.maxAdditionsByXLM
        })
      }

      return t<string>("account.data-entries.validation.insufficient-xlm")
    },
    [t]
  )

  const getStatusText = React.useCallback(
    (status: DataEntryStatus) => {
      if (status === "new") {
        return t<string>("account.data-entries.status.new")
      }

      if (status === "updated") {
        return t<string>("account.data-entries.status.updated")
      }

      if (status === "deleted") {
        return t<string>("account.data-entries.status.deleted")
      }

      if (status === "invalid") {
        return t<string>("account.data-entries.status.invalid")
      }

      return t<string>("account.data-entries.status.unchanged")
    },
    [t]
  )

  const reloadFromRemoteUpdate = React.useCallback(() => {
    if (pendingRemoteUpdate) {
      applyIncomingSnapshot(pendingRemoteUpdate.incomingDataAttr)
      return
    }

    setPendingRemoteUpdate(null)
    setIgnoreIncomingUpdates(false)
  }, [applyIncomingSnapshot, pendingRemoteUpdate])

  const ignoreRemoteUpdates = React.useCallback(() => {
    setPendingRemoteUpdate(null)
    setIgnoreIncomingUpdates(true)
  }, [])

  const createAndSendTransaction = React.useCallback(async () => {
    const latestAnalysis = analyzeDataEntryRows(rows, accountDataForAnalysis)

    if (!latestAnalysis.hasChanges) {
      showNotification("info", t("account.data-entries.notification.no-changes"))
      return
    }

    if (latestAnalysis.hasErrors) {
      return
    }

    try {
      setIgnoreIncomingUpdates(false)
      setTxPending(true)

      const operations = latestAnalysis.operations.map((operation) =>
        Operation.manageData({
          name: operation.name,
          value: operation.value
        })
      )

      if (operations.length === 0) {
        showNotification("info", t("account.data-entries.notification.no-changes"))
        setTxPending(false)
        return
      }

      const tx = await createTransaction(operations, {
        accountData,
        horizon: props.horizon,
        walletAccount: props.account
      })

      await props.sendTransaction(tx)
      applyIncomingSnapshot(applyOperationsToDataAttr(accountData.data_attr, latestAnalysis.operations))

      try {
        const refreshedAccount = await props.horizon
          .accounts()
          .accountId(props.account.accountID)
          .call()

        applyIncomingSnapshot(refreshedAccount.data || {})
      } catch (error) {
        trackError(error)
      }

      showNotification("success", t("account.data-entries.notification.saved"))
    } catch (error) {
      trackError(error)
    } finally {
      setTxPending(false)
    }
  }, [accountData, accountDataForAnalysis, applyIncomingSnapshot, props, rows, showNotification, t])

  const saveDisabled = txPending || analysisPending || analysis.hasErrors || !analysis.hasChanges || !!pendingRemoteUpdate

  const existingRows = rows.filter((row): row is Extract<DataEntryRow, { kind: "existing" }> => row.kind === "existing")
  const newRows = rows.filter((row): row is Extract<DataEntryRow, { kind: "new" }> => row.kind === "new")
  const normalizedFilterQuery = React.useMemo(() => filterQuery.trim().toLocaleLowerCase(), [filterQuery])
  const filtersApplied = filtersVisible

  const matchesRowFilter = React.useCallback(
    (row: Extract<DataEntryRow, { name: string; valueInput: string }>) => {
      if (!filtersApplied) {
        return true
      }

      if (!normalizedFilterQuery) {
        return true
      }

      return (
        row.name.toLocaleLowerCase().includes(normalizedFilterQuery) ||
        row.valueInput.toLocaleLowerCase().includes(normalizedFilterQuery)
      )
    },
    [filtersApplied, normalizedFilterQuery]
  )

  const visibleExistingRows = React.useMemo(
    () =>
      existingRows.filter((row) => {
        if (filtersApplied && filterChangedOnly && (analysis.rowStatuses[row.id] || "unchanged") === "unchanged") {
          return false
        }

        return matchesRowFilter(row)
      }),
    [analysis.rowStatuses, existingRows, filterChangedOnly, filtersApplied, matchesRowFilter]
  )

  const visibleNewRows = React.useMemo(
    () =>
      newRows.filter((row) => {
        if (filtersApplied && !matchesRowFilter(row)) {
          return false
        }

        return true
      }),
    [filtersApplied, matchesRowFilter, newRows]
  )

  const resolveRowClass = (status: DataEntryStatus) => {
    if (status === "deleted") {
      return `${classes.row} ${classes.rowDeleted}`
    }

    if (status === "updated") {
      return `${classes.row} ${classes.rowUpdated}`
    }

    if (status === "new") {
      return `${classes.row} ${classes.rowNew}`
    }

    if (status === "invalid") {
      return `${classes.row} ${classes.rowInvalid}`
    }

    return classes.row
  }

  const summaryText = t("account.data-entries.summary", {
    additions: analysis.additionsCount,
    deletions: analysis.deletionsCount,
    operations: analysis.operationCount,
    updates: analysis.updatesCount
  })

  const encodingTitle = t<string>("account.data-entries.field.encoding")

  return (
    <>
      <DialogBody
      actions={
        <DialogActionsBox expandedHeight>
          <div className={classes.actionsContent}>
            <Typography className={classes.summaryInActions}>{summaryText}</Typography>
            <ActionButton
              disabled={saveDisabled}
              icon={<SaveIcon />}
              loading={txPending}
              onClick={createAndSendTransaction}
              type="primary"
            >
              {t("account.data-entries.action.save")}
            </ActionButton>
          </div>
        </DialogActionsBox>
      }
      excessWidth={12}
      top={
        <>
          <MainTitle
            actions={
              <IconButton
                aria-label={t("account.data-entries.action.toggle-filters")}
                className={`${classes.filterIconButton} ${filtersVisible ? classes.filterIconButtonActive : ""}`}
                onClick={() => setFiltersVisible((prevState) => !prevState)}
              >
                <FilterListIcon />
              </IconButton>
            }
            onBack={handleBackNavigation}
            title={t("account.data-entries.title")}
          />
          {filtersVisible ? (
            <div className={classes.topFilters}>
              <SearchField
                className={classes.topFiltersSearch}
                onChange={(event) => setFilterQuery(event.target.value)}
                placeholder={t("account.data-entries.placeholder.search")}
                value={filterQuery}
              />
              <IconButton
                aria-label={t("account.data-entries.action.changed-only")}
                className={`${classes.changedOnlyButton} ${filterChangedOnly ? classes.changedOnlyButtonActive : ""}`}
                onClick={() => setFilterChangedOnly((prevState) => !prevState)}
                title={t("account.data-entries.action.changed-only")}
              >
                <UpdateIcon />
              </IconButton>
            </div>
          ) : null}
        </>
      }
    >
      {analysis.generalIssues.map((issue, index) => (
        <div key={`issue-${index}`} className={`${classes.warningBox} ${classes.warningError}`}>
          <Typography variant="body2">{getGeneralIssueMessage(issue)}</Typography>
        </div>
      ))}

      <List disablePadding>
        {visibleExistingRows.map((row) => {
          const rowIssues = uniqueIssues(analysis.rowIssues[row.id] || [])
          const status = analysis.rowStatuses[row.id] || "unchanged"
          const deleting = row.markedForDeletion || row.valueInput === ""
          const statusText =
            deleting && row.markedForDeletion
              ? t("account.data-entries.hint.deleted-by-action")
              : deleting
              ? t("account.data-entries.hint.empty-deletes")
              : status === "unchanged"
              ? null
              : getStatusText(status)
          const parsed = deleting ? undefined : parseValueInput(row.valueMode, row.valueInput)
          const byteCount = parsed?.bytes?.length
          const initialValueForCurrentMode = stringifyValue(Buffer.from(row.initialValueBase64, "base64"), row.valueMode)
          const hasEditedValue = !row.markedForDeletion && row.valueInput !== initialValueForCurrentMode
          const showUndoAction = row.markedForDeletion || row.valueInput === "" || hasEditedValue

          return (
            <ListItem className={resolveRowClass(status)} key={row.id}>
              <div className={classes.fieldsStack}>
                <div className={classes.nameRow}>
                  <TextField
                    className={classes.nameField}
                    disabled={row.markedForDeletion}
                    fullWidth
                    label={t("account.data-entries.field.name")}
                    inputProps={{ tabIndex: -1 }}
                    value={row.name}
                    InputProps={{
                      readOnly: true,
                      style: row.markedForDeletion ? { textDecoration: "line-through" } : undefined
                    }}
                  />
                  <div className={classes.rowActions}>
                    <IconButton
                      aria-label={showUndoAction ? t("account.data-entries.action.restore") : t("account.data-entries.action.delete")}
                      onClick={() => {
                        if (showUndoAction) {
                          restoreExistingRowValue(row.id)
                          return
                        }

                        setRow(row.id, (currentRow) =>
                          currentRow.kind === "existing"
                            ? {
                                ...currentRow,
                                markedForDeletion: true
                              }
                            : currentRow
                        )
                      }}
                    >
                      {showUndoAction ? <RestoreIcon /> : <DeleteIcon />}
                    </IconButton>
                  </div>
                </div>
                <TextField
                  disabled={row.markedForDeletion}
                  error={rowIssues.length > 0}
                  fullWidth
                  label={t("account.data-entries.field.value")}
                  multiline
                  rows={2}
                  onChange={(event) => {
                    const valueInput = event.target.value
                    setRow(row.id, (currentRow) => ({
                      ...currentRow,
                      valueInput
                    }))
                  }}
                  onBlur={flushAnalysis}
                  value={row.valueInput}
                  InputProps={{
                    style: row.markedForDeletion ? { textDecoration: "line-through" } : undefined
                  }}
                />
              </div>
              <div className={classes.statusLine}>
                <Typography className={classes.statusText}>{statusText || ""}</Typography>
                <div className={classes.statusMeta}>
                  {typeof byteCount === "number" ? (
                    <Typography className={classes.statusText}>
                      {t<string>("account.data-entries.hint.bytes", { count: byteCount })}
                    </Typography>
                  ) : null}
                  <Typography
                    className={classes.encodingToggle}
                    onClick={() => !row.markedForDeletion && toggleRowEncoding(row.id)}
                    style={{ opacity: row.markedForDeletion ? 0.5 : 1, pointerEvents: row.markedForDeletion ? "none" : undefined }}
                    title={encodingTitle}
                  >
                    {row.valueMode === "text"
                      ? t<string>("account.data-entries.encoding.text-short")
                      : t<string>("account.data-entries.encoding.base64")}
                  </Typography>
                </div>
              </div>
              {rowIssues.length > 0 ? (
                <div className={classes.issues}>
                  {rowIssues.map((issue, issueIndex) => (
                    <Typography className={classes.issueText} key={`${row.id}-issue-${issueIndex}`}>
                      {getRowIssueMessage(issue)}
                    </Typography>
                  ))}
                </div>
              ) : null}
            </ListItem>
          )
        })}

        <Typography className={classes.dividerTitle}>{t("account.data-entries.section.new")}</Typography>

        {visibleNewRows.map((row) => {
          const rowIssues = uniqueIssues(analysis.rowIssues[row.id] || [])
          const status = analysis.rowStatuses[row.id] || "new"
          const parsed = parseValueInput(row.valueMode, row.valueInput)
          const byteCount = parsed.bytes?.length

          return (
            <ListItem className={resolveRowClass(status)} key={row.id}>
              <div className={classes.fieldsStack}>
                <div className={classes.nameRow}>
                  <TextField
                    className={classes.nameField}
                    error={rowIssues.length > 0}
                    fullWidth
                    label={t("account.data-entries.field.name")}
                    onChange={(event) => {
                      const name = event.target.value
                      setRow(row.id, (currentRow) => ({
                        ...currentRow,
                        name
                      }))
                    }}
                    onBlur={flushAnalysis}
                    value={row.name}
                  />
                  <div className={classes.rowActions}>
                    <IconButton
                      aria-label={t("account.data-entries.action.delete")}
                      onClick={() => deleteNewRow(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
                <TextField
                  error={rowIssues.length > 0}
                  fullWidth
                  label={t("account.data-entries.field.value")}
                  multiline
                  rows={2}
                  onChange={(event) => {
                    const valueInput = event.target.value
                    setRow(row.id, (currentRow) => ({
                      ...currentRow,
                      valueInput
                    }))
                  }}
                  onBlur={flushAnalysis}
                  value={row.valueInput}
                />
              </div>
              <div className={classes.statusLine}>
                <Typography className={classes.statusText}>{getStatusText(status)}</Typography>
                <div className={classes.statusMeta}>
                  {typeof byteCount === "number" ? (
                    <Typography className={classes.statusText}>
                      {t<string>("account.data-entries.hint.bytes", { count: byteCount })}
                    </Typography>
                  ) : null}
                  <Typography
                    className={classes.encodingToggle}
                    onClick={() => toggleRowEncoding(row.id)}
                    title={encodingTitle}
                  >
                    {row.valueMode === "text"
                      ? t<string>("account.data-entries.encoding.text-short")
                      : t<string>("account.data-entries.encoding.base64")}
                  </Typography>
                </div>
              </div>
              {rowIssues.length > 0 ? (
                <div className={classes.issues}>
                  {rowIssues.map((issue, issueIndex) => (
                    <Typography className={classes.issueText} key={`${row.id}-issue-${issueIndex}`}>
                      {getRowIssueMessage(issue)}
                    </Typography>
                  ))}
                </div>
              ) : null}
            </ListItem>
          )
        })}

        <ListItem className={`${classes.row} ${classes.rowNew}`}>
          <div className={classes.fieldsStack}>
            <div className={classes.nameRow}>
              <TextField
                className={classes.nameField}
                error={newEntryShowNameErrors && newEntryNameIssues.length > 0}
                fullWidth
                label={t("account.data-entries.field.name")}
                onChange={(event) => {
                  const name = event.target.value
                  setNewEntry((prevState) => ({ ...prevState, name }))
                }}
                onBlur={() => setNewEntryShowNameErrors(true)}
                onFocus={() => setNewEntryShowNameErrors(false)}
                placeholder={t("account.data-entries.placeholder.name")}
                value={newEntry.name}
              />
              <div className={classes.rowActions}>
                <Button
                  className={classes.addButton}
                  color="primary"
                  disabled={!canAddNewEntry}
                  onClick={addNewRow}
                  variant="contained"
                >
                  {t("account.data-entries.action.add")}
                </Button>
              </div>
            </div>
            <TextField
              error={newEntryShowValueErrors && newEntryValueIssues.length > 0}
              fullWidth
              label={t("account.data-entries.field.value")}
              multiline
              rows={2}
              onChange={(event) => {
                const valueInput = event.target.value
                setNewEntry((prevState) => ({ ...prevState, valueInput }))
              }}
              onBlur={() => setNewEntryShowValueErrors(true)}
              onFocus={() => setNewEntryShowValueErrors(false)}
              placeholder={t("account.data-entries.placeholder.value")}
              value={newEntry.valueInput}
            />
          </div>
          <div className={classes.statusLine}>
            <Typography className={classes.statusText}>{visibleNewEntryIssues.length > 0 ? "" : t("account.data-entries.status.new")}</Typography>
            <div className={classes.statusMeta}>
              {(() => {
                const parsed = newEntry.valueInput ? parseValueInput(newEntry.valueMode, newEntry.valueInput) : undefined
                const bytes = parsed?.bytes?.length
                return typeof bytes === "number" ? (
                  <Typography className={classes.statusText}>
                    {t<string>("account.data-entries.hint.bytes", { count: bytes })}
                  </Typography>
                ) : null
              })()}
              <Typography
                className={classes.encodingToggle}
                onClick={() =>
                  setNewEntry((prevState) => {
                    const nextMode: DataEntryValueMode = prevState.valueMode === "text" ? "base64" : "text"
                    const converted = convertValueMode(prevState.valueInput, prevState.valueMode, nextMode)
                    return {
                      ...prevState,
                      valueInput: converted.input,
                      valueMode: converted.mode
                    }
                  })
                }
                title={encodingTitle}
              >
                {newEntry.valueMode === "text"
                  ? t<string>("account.data-entries.encoding.text-short")
                  : t<string>("account.data-entries.encoding.base64")}
              </Typography>
            </div>
          </div>
          {visibleNewEntryIssues.length > 0 ? (
            <div className={classes.issues}>
              {visibleNewEntryIssues.map((issue, issueIndex) => (
                <Typography className={classes.issueText} key={`new-form-issue-${issueIndex}`}>
                  {getRowIssueMessage(issue)}
                </Typography>
              ))}
            </div>
          ) : null}
        </ListItem>
      </List>
      </DialogBody>
      <Dialog open={!!pendingRemoteUpdate} onClose={ignoreRemoteUpdates}>
        <DialogTitle>{t("account.data-entries.sync-update.title")}</DialogTitle>
        <DialogContent style={{ paddingBottom: 24 }}>
          <Typography variant="body2">
            {t("account.data-entries.sync-update.text")}
          </Typography>
          <DialogActionsBox preventMobileActionsBox smallDialog>
            <ActionButton onClick={ignoreRemoteUpdates}>
              {t("account.data-entries.sync-update.action.ignore")}
            </ActionButton>
            <ActionButton onClick={reloadFromRemoteUpdate} type="primary">
              {t("account.data-entries.sync-update.action.reload")}
            </ActionButton>
          </DialogActionsBox>
        </DialogContent>
      </Dialog>
      <ConfirmDialog
        cancelButton={<ActionButton onClick={cancelLeave}>{t("account.data-entries.leave-confirm.action.stay")}</ActionButton>}
        confirmButton={
          <ActionButton onClick={confirmLeave} type="primary">
            {t("account.data-entries.leave-confirm.action.discard")}
          </ActionButton>
        }
        onClose={cancelLeave}
        open={leaveConfirmOpen}
        title={t("account.data-entries.leave-confirm.title")}
      >
        {t("account.data-entries.leave-confirm.text")}
      </ConfirmDialog>
    </>
  )
}

function DataEntriesDialog(props: DataEntriesDialogProps) {
  return (
    <TransactionSender account={props.account}>
      {({ horizon, sendTransaction }) => (
        <DataEntriesEditor
          account={props.account}
          horizon={horizon}
          onClose={props.onClose}
          sendTransaction={sendTransaction}
        />
      )}
    </TransactionSender>
  )
}

export default React.memo(DataEntriesDialog)
