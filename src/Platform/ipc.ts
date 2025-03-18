// Global IPC.* types are defined in types/ipc.d.ts

async function getImplementation() {
  if (window.electron) {
    const impl = import("./ipc/electron")
    return impl
  } else if (import.meta.env.VITE_PLATFORM === "android" || import.meta.env.VITE_PLATFORM === "ios") {
    const impl = import("./ipc/cordova")
    return impl
  } else if (typeof window !== 'undefined') {
    const impl = import("./ipc/web")
    return impl
  } else {
    throw new Error("There is no IPC implementation for your platform.")
  }
}

const implementation: any = await getImplementation()

export function call<Message extends keyof IPC.MessageType>(
  messageType: Message,
  ...args: IPC.MessageArgs<Message>
): Promise<IPC.MessageReturnType<Message>> {
  return implementation.call(messageType, ...args)
}

type UnsubscribeFn = () => void

export function subscribeToMessages<Message extends keyof IPC.MessageType>(
  messageType: Message,
  callback: (message: any) => void
): UnsubscribeFn {
  return implementation.subscribeToMessages(messageType, callback)
}
