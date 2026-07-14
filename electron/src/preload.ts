import { contextBridge, ipcRenderer } from "electron"

const electronProcess = process
const deepLinkURLMessage = "DeepLinkURL"
const deepLinkSubscribers = new Set<(url: string) => void>()
const queuedDeepLinkURLs: string[] = []

function emitDeepLinkURL(url: string) {
  if (deepLinkSubscribers.size === 0) {
    queuedDeepLinkURLs.push(url)
    return
  }

  deepLinkSubscribers.forEach(callback => callback(url))
}

ipcRenderer.on(deepLinkURLMessage, (_event: Electron.IpcRendererEvent, url: string) => emitDeepLinkURL(url))

function sendMessage<Message extends keyof IPC.MessageType>(
  messageType: Message,
  callID: number,
  ...args: IPC.MessageArgs<Message>
): Promise<IPC.MessageReturnType<Message> | void> {
  const responsePromise = new Promise<IPC.MessageReturnType<Message> | void>((resolve, reject) => {
    const listener = (_event: Electron.IpcRendererEvent, data: ElectronIPCCallResponseMessage) => {
      if (data.callID === callID) {
        ipcRenderer.removeListener(messageType, listener)

        if ("error" in data && data.error) {
          const error = Object.assign(Error(data.error.message), {
            name: data.error.name || "Error",
            stack: data.error.stack
          })
          reject(error)
        } else if ("result" in data) {
          resolve(data.result)
        } else {
          resolve()
        }
      }
    }
    ipcRenderer.on(messageType, listener)
  })

  ipcRenderer.send(messageType, { callID, args })
  return responsePromise
}

async function sendIPCMessage<Message extends keyof IPC.MessageType>(
  messageType: Message,
  message: ElectronIPCCallMessage<Message>
) {
  const { args, callID } = message

  return sendMessage(messageType, callID, ...args)
}

function subscribeToIPCMessages<Message extends keyof IPC.MessageType>(
  messageType: Message,
  subscribeCallback: (result: IPC.MessageReturnType<Message>) => void
) {
  if (messageType === deepLinkURLMessage) {
    const callback = subscribeCallback as (url: string) => void
    deepLinkSubscribers.add(callback)
    queuedDeepLinkURLs.splice(0).forEach(callback)

    return () => deepLinkSubscribers.delete(callback)
  }

  const listener = (_event: Electron.IpcRendererEvent, result: IPC.MessageReturnType<Message>) => subscribeCallback(result)
  ipcRenderer.on(messageType, listener)
  const unsubscribe = () => ipcRenderer.removeListener(messageType, listener)
  return unsubscribe
}

const electron: ElectronContext = {
  sendIPCMessage,
  subscribeToIPCMessages
}

contextBridge.exposeInMainWorld("electron", electron)

process.once("loaded", () => {
  const newProcess = {
    env: electronProcess.env,
    pid: electronProcess.pid,
    platform: electronProcess.platform
  }

  contextBridge.exposeInMainWorld("process", newProcess)
})
