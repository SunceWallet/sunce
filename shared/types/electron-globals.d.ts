interface ElectronIPCCallMessage<Message extends keyof IPC.MessageType> {
  args: IPC.MessageArgs<Message>
  callID: number
}

interface ElectronIPCCallErrorMessage {
  callID: number
  error: Error & { __extraProps?: string[] }
}

interface ElectronIPCCallResultMessage {
  callID: number
  result: any
}

type ElectronIPCCallResponseMessage = ElectronIPCCallErrorMessage | ElectronIPCCallResultMessage

interface ElectronContext {
  sendIPCMessage<Message extends keyof IPC.MessageType>(
    messageType: Message,
    message: ElectronIPCCallMessage<Message>
  ): Promise<any>
  subscribeToIPCMessages<Message extends keyof IPC.MessageType>(
    messageType: Message,
    subscribeCallback: (result: IPC.MessageReturnType<Message>) => void
  ): () => void
}

interface Window {
  // Will only be defined when in an electron build.
  electron?: ElectronContext
}
