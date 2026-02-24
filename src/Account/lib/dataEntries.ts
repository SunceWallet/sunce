import BigNumber from "big.js"
import { AccountData } from "~Generic/lib/account"
import { BASE_RESERVE } from "~Generic/lib/stellar"

export const DATA_ENTRY_NAME_MAX_LENGTH = 64
export const DATA_ENTRY_VALUE_MAX_BYTES = 64
export const MAX_SUBENTRIES = 1000
export const MAX_TRANSACTION_OPERATIONS = 100

/** 100 stroops */
export const MIN_OPERATION_FEE_XLM = BigNumber("0.00001")

const DATA_ENTRY_ASCII_NAME_REGEX = /^[\x20-\x7E]+$/
const BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

export type DataEntryValueMode = "text" | "base64"

export interface ExistingDataEntryRow {
  id: string
  initialValueBase64: string
  kind: "existing"
  markedForDeletion: boolean
  name: string
  valueInput: string
  valueMode: DataEntryValueMode
}

export interface NewDataEntryRow {
  id: string
  kind: "new"
  name: string
  valueInput: string
  valueMode: DataEntryValueMode
}

export type DataEntryRow = ExistingDataEntryRow | NewDataEntryRow

export type DataEntryStatus = "deleted" | "invalid" | "new" | "unchanged" | "updated"

export interface DataEntryOperationDraft {
  name: string
  type: "add" | "delete" | "update"
  value: Buffer | null
}

export type DataEntryRowIssue =
  | { type: "duplicate-existing" }
  | { type: "duplicate-new" }
  | { type: "invalid-base64" }
  | { type: "name-ascii" }
  | { type: "name-length"; max: number }
  | { type: "name-required" }
  | { type: "value-required" }
  | { type: "value-too-large"; limit: number; actual: number }

export type DataEntryGeneralIssue =
  | { type: "insufficient-xlm" }
  | {
      additionsCount: number
      excess: number
      maxAdditionsBySubentries: number
      type: "subentries-limit"
    }
  | {
      additionsCount: number
      maxAdditionsByXLM: number
      type: "xlm-additions-limit"
    }
  | {
      excess: number
      maxOperations: number
      operationCount: number
      type: "operations-limit"
    }

export interface DataEntryAnalysis {
  additionsCount: number
  deletionsCount: number
  finalSubentryCount: number
  generalIssues: DataEntryGeneralIssue[]
  hasChanges: boolean
  hasErrors: boolean
  maxAdditionsBySubentries: number
  maxAdditionsByXLM: number
  operationCount: number
  operations: DataEntryOperationDraft[]
  rowIssues: Record<string, DataEntryRowIssue[]>
  rowStatuses: Record<string, DataEntryStatus>
  updatesCount: number
}

interface ParseResult {
  bytes?: Buffer
  error?: DataEntryRowIssue
}

export function buildExistingRows(dataAttr: AccountData["data_attr"]): ExistingDataEntryRow[] {
  return Object.keys(dataAttr)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => {
      const initialValueBase64 = dataAttr[name]
      const value = Buffer.from(initialValueBase64, "base64")
      const valueMode = detectValueMode(value)

      return {
        id: `existing:${name}`,
        initialValueBase64,
        kind: "existing",
        markedForDeletion: false,
        name,
        valueInput: stringifyValue(value, valueMode),
        valueMode
      }
    })
}

export function validateDataName(name: string): DataEntryRowIssue[] {
  const issues: DataEntryRowIssue[] = []

  if (!name) {
    issues.push({ type: "name-required" })
  }

  if (name.length > DATA_ENTRY_NAME_MAX_LENGTH) {
    issues.push({ type: "name-length", max: DATA_ENTRY_NAME_MAX_LENGTH })
  }

  if (name && !DATA_ENTRY_ASCII_NAME_REGEX.test(name)) {
    issues.push({ type: "name-ascii" })
  }

  return issues
}

export function parseValueInput(mode: DataEntryValueMode, input: string): ParseResult {
  if (mode === "text") {
    const bytes = Buffer.from(input, "utf8")

    if (bytes.length > DATA_ENTRY_VALUE_MAX_BYTES) {
      return {
        error: {
          actual: bytes.length,
          limit: DATA_ENTRY_VALUE_MAX_BYTES,
          type: "value-too-large"
        }
      }
    }

    return { bytes }
  }

  if (!BASE64_REGEX.test(input)) {
    return { error: { type: "invalid-base64" } }
  }

  const decodedBytes = Buffer.from(input, "base64")

  if (decodedBytes.length > DATA_ENTRY_VALUE_MAX_BYTES) {
    return {
      error: {
        actual: decodedBytes.length,
        limit: DATA_ENTRY_VALUE_MAX_BYTES,
        type: "value-too-large"
      }
    }
  }

  return { bytes: decodedBytes }
}

export function stringifyValue(bytes: Buffer, mode: DataEntryValueMode) {
  return mode === "text" ? bytes.toString("utf8") : bytes.toString("base64")
}

export function detectValueMode(bytes: Buffer): DataEntryValueMode {
  if (!bytes.length) {
    return "text"
  }

  try {
    const asText = bytes.toString("utf8")

    if (Buffer.from(asText, "utf8").equals(bytes) && !/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(asText)) {
      return "text"
    }

    return "base64"
  } catch (_error) {
    return "base64"
  }
}

export function convertValueMode(
  input: string,
  oldMode: DataEntryValueMode,
  newMode: DataEntryValueMode
): { input: string; mode: DataEntryValueMode } {
  if (oldMode === newMode) {
    return { input, mode: newMode }
  }

  const parsed = parseValueInput(oldMode, input)

  if (!parsed.bytes) {
    return { input, mode: newMode }
  }

  return {
    input: stringifyValue(parsed.bytes, newMode),
    mode: newMode
  }
}

export function analyzeDataEntryRows(rows: DataEntryRow[], accountData: AccountData): DataEntryAnalysis {
  const rowIssues: Record<string, DataEntryRowIssue[]> = {}
  const rowStatuses: Record<string, DataEntryStatus> = {}
  const generalIssues: DataEntryGeneralIssue[] = []

  const initialMap = new Map<string, Buffer>(
    Object.keys(accountData.data_attr).map((name) => [name, Buffer.from(accountData.data_attr[name], "base64")])
  )

  const activeExistingRows = rows.filter((row): row is ExistingDataEntryRow => {
    if (row.kind !== "existing") {
      return false
    }

    return !row.markedForDeletion && row.valueInput !== ""
  })

  const activeExistingNames = new Set(activeExistingRows.map((row) => row.name))

  const validatedExisting = new Map<string, Buffer>()

  for (const row of rows) {
    if (row.kind !== "existing") {
      continue
    }

    const issues: DataEntryRowIssue[] = []
    const initialValue = Buffer.from(row.initialValueBase64, "base64")
    const deleting = row.markedForDeletion || row.valueInput === ""

    if (deleting) {
      rowStatuses[row.id] = "deleted"
      rowIssues[row.id] = issues
      continue
    }

    const parsed = parseValueInput(row.valueMode, row.valueInput)

    if (!parsed.bytes) {
      if (parsed.error) {
        issues.push(parsed.error)
      }
      rowStatuses[row.id] = "invalid"
      rowIssues[row.id] = issues
      continue
    }

    validatedExisting.set(row.name, parsed.bytes)
    rowStatuses[row.id] = parsed.bytes.equals(initialValue) ? "unchanged" : "updated"
    rowIssues[row.id] = issues
  }

  const newRowNameCounter = new Map<string, number>()

  for (const row of rows) {
    if (row.kind !== "new") {
      continue
    }

    newRowNameCounter.set(row.name, (newRowNameCounter.get(row.name) || 0) + 1)
  }

  const validatedNewRows = new Map<string, Buffer>()

  for (const row of rows) {
    if (row.kind !== "new") {
      continue
    }

    const issues: DataEntryRowIssue[] = []

    const nameIssues = validateDataName(row.name)
    issues.push(...nameIssues)

    if (activeExistingNames.has(row.name)) {
      issues.push({ type: "duplicate-existing" })
    }

    if (row.name && (newRowNameCounter.get(row.name) || 0) > 1) {
      issues.push({ type: "duplicate-new" })
    }

    if (!row.valueInput) {
      issues.push({ type: "value-required" })
    }

    const parsed = row.valueInput ? parseValueInput(row.valueMode, row.valueInput) : { bytes: undefined, error: undefined }

    if (!parsed.bytes) {
      if (parsed.error) {
        issues.push(parsed.error)
      }
      rowStatuses[row.id] = "invalid"
      rowIssues[row.id] = issues
      continue
    }

    if (issues.length > 0) {
      rowStatuses[row.id] = "invalid"
      rowIssues[row.id] = issues
      continue
    }

    validatedNewRows.set(row.name, parsed.bytes)
    rowStatuses[row.id] = "new"
    rowIssues[row.id] = issues
  }

  const finalMap = new Map<string, Buffer>(validatedExisting)

  for (const [name, value] of validatedNewRows.entries()) {
    finalMap.set(name, value)
  }

  const operations: DataEntryOperationDraft[] = []

  const names = Array.from(new Set([...initialMap.keys(), ...finalMap.keys()])).sort((a, b) => a.localeCompare(b))

  for (const name of names) {
    const initialValue = initialMap.get(name)
    const finalValue = finalMap.get(name)

    if (initialValue && !finalValue) {
      operations.push({ name, type: "delete", value: null })
      continue
    }

    if (!initialValue && finalValue) {
      operations.push({ name, type: "add", value: finalValue })
      continue
    }

    if (initialValue && finalValue && !initialValue.equals(finalValue)) {
      operations.push({ name, type: "update", value: finalValue })
    }
  }

  const additionsCount = operations.filter((operation) => operation.type === "add").length
  const deletionsCount = operations.filter((operation) => operation.type === "delete").length
  const updatesCount = operations.filter((operation) => operation.type === "update").length
  const operationCount = operations.length
  const hasChanges = operationCount > 0

  const maxAdditionsBySubentries = Math.max(0, MAX_SUBENTRIES - (accountData.subentry_count - deletionsCount))

  if (additionsCount > maxAdditionsBySubentries) {
    generalIssues.push({
      additionsCount,
      excess: additionsCount - maxAdditionsBySubentries,
      maxAdditionsBySubentries,
      type: "subentries-limit"
    })
  }

  if (operationCount > MAX_TRANSACTION_OPERATIONS) {
    generalIssues.push({
      excess: operationCount - MAX_TRANSACTION_OPERATIONS,
      maxOperations: MAX_TRANSACTION_OPERATIONS,
      operationCount,
      type: "operations-limit"
    })
  }

  const nativeBalance = accountData.balances.find((balance) => balance.asset_type === "native")
  const rawBalance = BigNumber(nativeBalance?.balance || 0)
  const sellingLiabilities = BigNumber(nativeBalance?.asset_type === "native" ? nativeBalance.selling_liabilities : 0)

  const fixedMinimumBalance = BigNumber(2 + accountData.subentry_count - deletionsCount).mul(BASE_RESERVE)
  const fixedFees = BigNumber(updatesCount + deletionsCount).mul(MIN_OPERATION_FEE_XLM)
  const balanceAvailableForNewEntries = rawBalance.minus(sellingLiabilities).minus(fixedMinimumBalance).minus(fixedFees)

  const perAddedEntryCost = BigNumber(BASE_RESERVE).plus(MIN_OPERATION_FEE_XLM)
  const maxAdditionsByXLM = balanceAvailableForNewEntries.lte(0)
    ? 0
    : Number(balanceAvailableForNewEntries.div(perAddedEntryCost).round(0, 0).toString())

  if (additionsCount > maxAdditionsByXLM) {
    generalIssues.push({
      additionsCount,
      maxAdditionsByXLM,
      type: "xlm-additions-limit"
    })
  }

  const finalSubentryCount = accountData.subentry_count + additionsCount - deletionsCount
  const finalMinimumBalance = BigNumber(2 + finalSubentryCount).mul(BASE_RESERVE)
  const estimatedFee = BigNumber(operationCount).mul(MIN_OPERATION_FEE_XLM)

  const requiredBalance = finalMinimumBalance.plus(sellingLiabilities).plus(estimatedFee)

  if (rawBalance.lt(requiredBalance)) {
    generalIssues.push({ type: "insufficient-xlm" })
  }

  const hasRowIssues = Object.values(rowIssues).some((issues) => issues.length > 0)

  return {
    additionsCount,
    deletionsCount,
    finalSubentryCount,
    generalIssues,
    hasChanges,
    hasErrors: hasRowIssues || generalIssues.length > 0,
    maxAdditionsBySubentries,
    maxAdditionsByXLM,
    operationCount,
    operations,
    rowIssues,
    rowStatuses,
    updatesCount
  }
}
