import { CustomError } from "../../Generic/lib/errors"
import { Messages } from "../../shared/ipc"
import pick from "lodash.pick"

let nextCallID = 1
const deepLinkSubscribers = new Set<(url: string) => void>()
const queuedDeepLinkURLs: string[] = []

function emitDeepLinkURL(url: string) {
  if (deepLinkSubscribers.size === 0) {
    queuedDeepLinkURLs.push(url)
    return
  }

  deepLinkSubscribers.forEach(callback => callback(url))
}

window.addEventListener("message", event => {
  if (event instanceof MessageEvent && event.source === window.parent) {
    const message = event.data
    if (message && typeof message === "object" && message.messageType === Messages.DeepLinkURL) {
      emitDeepLinkURL(message.result)
    }
  }
})

export function call<Message extends keyof IPC.MessageType>(
  messageType: Message,
  ...args: IPC.MessageArgs<Message>
): Promise<IPC.MessageReturnType<Message>> {
  const callID = nextCallID++

  const responsePromise = new Promise<IPC.MessageReturnType<Message>>((resolve, reject) => {
    const eventListener = (event: Event) => {
      if (event instanceof MessageEvent && event.source === window.parent) {
        const message = event.data
        if (
          !message ||
          typeof message !== "object" ||
          message.callID !== callID ||
          message.messageType !== messageType
        ) {
          return
        }

        unsubscribe()

        if ("error" in message && message.error) {
          const error = message.error
          const extra = error.__extraProps ? pick(error, error.__extraProps || []) : undefined
          reject(CustomError(error.name, error.message, extra))
        } else {
          resolve((message as any).result)
        }
      }
    }

    window.addEventListener("message", eventListener)
    const unsubscribe = () => window.removeEventListener("message", eventListener)

    window.parent.postMessage({ messageType, args, callID }, "*")
  })
  return responsePromise
}

type UnsubscribeFn = () => void

export function subscribeToMessages<Message extends keyof IPC.MessageType>(
  messageType: Message,
  callback: (message: any) => void
): UnsubscribeFn {
  if (messageType === Messages.DeepLinkURL) {
    deepLinkSubscribers.add(callback)
    queuedDeepLinkURLs.splice(0).forEach(callback)

    return () => deepLinkSubscribers.delete(callback)
  }

  const eventListener = (event: Event) => {
    if (event instanceof MessageEvent && event.source === window.parent) {
      if (event.data.messageType === messageType) {
        callback(event.data.result)
      }
    }
  }

  window.addEventListener("message", eventListener)

  return () => window.removeEventListener("message", eventListener)
}
