import { Messages } from "~shared/ipc"
import { expose } from "./ipc"

let postDeepLinkURL: ((url: string) => void) | undefined
const queuedDeepLinkURLs: string[] = []

window.handleOpenURL = (url: string) => {
  if (postDeepLinkURL) {
    postDeepLinkURL(url)
  } else {
    queuedDeepLinkURLs.push(url)
  }
}

export function registerURLHandler(contentWindow: Window, iframeReady: Promise<void>) {
  postDeepLinkURL = (url: string) => {
    iframeReady.then(() => {
      contentWindow.postMessage({ messageType: Messages.DeepLinkURL, result: url }, "*")
    })
  }
  queuedDeepLinkURLs.splice(0).forEach(postDeepLinkURL)

  // there is no way we can check for default handler in cordova
  expose(Messages.IsDefaultProtocolClient, () => {
    return true
  })

  expose(Messages.IsDifferentHandlerInstalled, () => {
    return false
  })

  expose(Messages.SetAsDefaultProtocolClient, () => {
    return true
  })
}
