import { Messages } from "~shared/ipc"
import { expose } from "./ipc"

export function initializeFileSharing() {
  expose(Messages.ShareFile, (secureStorage, keyStore, options) => {
    return new Promise((resolve, reject) => {
      if (!(window as any).plugins) {
        reject(new Error("Cordova plugins not available"))
        return
      }

      const socialSharing = (window as any).plugins.socialsharing

      if (!socialSharing) {
        reject(new Error("cordova-plugin-x-socialsharing not installed"))
        return
      }

      socialSharing.shareWithOptions(
        {
          message: options.message,
          subject: options.subject,
          files: [options.file],
        },
        resolve,
        reject
      )
    })
  })
}
