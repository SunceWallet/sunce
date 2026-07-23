const DEFAULT_ENDPOINT = "https://bsn.expert/api/contacts/sync"

export interface ContactItem {
  label: string | null
  updated_at: number
}

export type ContactItems = Record<string, ContactItem>

interface SyncReport {
  errors: string[]
  permissions: {
    read: boolean
    create: boolean
    update: boolean
    delete: boolean
  }
  added: string[]
  not_added: string[]
  updated: string[]
  not_updated: string[]
  deleted: string[]
  not_deleted: string[]
}

interface SyncResponse {
  status: "OK"
  report: SyncReport
  items?: ContactItems
}

interface SyncContactsOptions {
  apiKey: string
  items?: ContactItems
  endpoint?: string
  signal?: AbortSignal
  fetch?: typeof globalThis.fetch
  now?: () => number
}

export class ContactsSyncApiError extends Error {
  readonly status: number
  readonly statusText: string
  readonly body: unknown

  constructor(status: number, statusText: string, body: unknown) {
    const responseMessage = getResponseMessage(body)
    const statusDescription = statusText ? `${status} ${statusText}` : String(status)

    super(responseMessage ?? `Contacts sync request failed with status ${statusDescription}`)

    this.name = "ContactsSyncApiError"
    this.status = status
    this.statusText = statusText
    this.body = body
  }
}

export async function syncContacts(options: SyncContactsOptions): Promise<SyncResponse> {
  const apiKey = requireNonEmptyString(options.apiKey, "apiKey")
  const endpoint = requireNonEmptyString(options.endpoint ?? DEFAULT_ENDPOINT, "endpoint")
  const fetchImplementation = options.fetch ?? globalThis.fetch

  if (typeof fetchImplementation !== "function") {
    throw new TypeError("fetch must be available or supplied in options")
  }

  const currentTimestamp = (options.now ?? Date.now)()
  if (!Number.isSafeInteger(currentTimestamp)) {
    throw new TypeError("now must return an integer timestamp in milliseconds")
  }

  const response = await fetchImplementation(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      current_timestamp: currentTimestamp,
      items: options.items ?? {}
    }),
    ...(options.signal ? { signal: options.signal } : {})
  })

  if (!response.ok) {
    throw new ContactsSyncApiError(response.status, response.statusText, await readErrorBody(response))
  }

  return (await response.json()) as SyncResponse
}

export function mergeContactItems(current: Readonly<ContactItems>, incoming?: Readonly<ContactItems>): ContactItems {
  const merged: ContactItems = {}

  for (const [address, item] of Object.entries(current)) {
    merged[address] = { ...item }
  }

  for (const [address, incomingItem] of Object.entries(incoming ?? {})) {
    const currentItem = current[address]
    if (!currentItem || incomingItem.updated_at > currentItem.updated_at) {
      merged[address] = { ...incomingItem }
    }
  }

  return merged
}

export function syncReportHasErrors(report: SyncReport) {
  return (
    !report.permissions.read ||
    report.errors.length > 0 ||
    report.not_added.length > 0 ||
    report.not_updated.length > 0 ||
    report.not_deleted.length > 0
  )
}

async function readErrorBody(response: Response): Promise<unknown> {
  const text = await response.text()
  if (text === "") return undefined

  try {
    return JSON.parse(text) as unknown
  } catch {
    return text
  }
}

function requireNonEmptyString(value: string, option: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError(`${option} must be a non-empty string`)
  }

  return value.trim()
}

function getResponseMessage(body: unknown): string | undefined {
  if (typeof body === "object" && body !== null && "message" in body && typeof body.message === "string") {
    return body.message
  }

  return undefined
}
