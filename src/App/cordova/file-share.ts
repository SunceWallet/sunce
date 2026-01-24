import { Messages } from "~shared/ipc"
import { expose } from "./ipc"

// Helper function to encode UTF-8 strings to base64 for iOS sharing
const utf8ToBase64 = (str: string): string => {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  let binary = ""
  for (let i = 0; i < data.length; i++) {
    binary += String.fromCharCode(data[i])
  }
  return btoa(binary)
}

export function initializeFileSharing() {
  expose(Messages.ShareFile, (secureStorage, keyStore, options) => {
    return new Promise((resolve, reject) => {
      if (!(window as any).plugins) {
        reject(new Error("Cordova plugins not available"))
        return
      }

      const device = (window as any).device
      const isAndroid = device && device.platform === "Android"

      if (isAndroid) {
        // On Android, use cordova-plugin-file to save to Downloads folder
        const filePlugin = (window as any).cordova?.plugin?.file || (window as any).cordova.file

        if (!filePlugin) {
          reject(new Error("cordova-plugin-file not available"))
          return
        }

        const fileName = options.subject + ".json"
        const blob = new Blob([options.content], { type: "application/json" })

          // Write file using File API
          ; (window as any).resolveLocalFileSystemURL(
            filePlugin.externalRootDirectory + "Download",
            (dirEntry: any) => {
              dirEntry.getFile(
                fileName,
                { create: true, exclusive: false },
                (fileEntry: any) => {
                  fileEntry.createWriter((writer: any) => {
                    writer.onwriteend = () => resolve(undefined)
                    writer.onerror = reject
                    writer.write(blob)
                  }, reject)
                },
                reject
              )
            },
            reject
          )
      } else {
        // On iOS, use cordova-plugin-file to create a file with proper name, then share it
        const filePlugin = (window as any).cordova?.plugin?.file || (window as any).cordova.file
        const socialSharing = (window as any).plugins.socialsharing

        const fileName = options.subject + ".json"
        const blob = new Blob([options.content], { type: "application/json" })

        // Create temporary file with proper name, then share it
        ;(window as any).resolveLocalFileSystemURL(
          filePlugin.cacheDirectory,
          (dirEntry: any) => {
            dirEntry.getFile(
              fileName,
              { create: true, exclusive: false },
              (fileEntry: any) => {
                fileEntry.createWriter((writer: any) => {
                  writer.onwriteend = () => {
                    socialSharing.shareWithOptions(
                      {
                        subject: options.subject,
                        files: [fileEntry.nativeURL],
                      },
                      resolve,
                      reject
                    )
                  }
                  writer.onerror = reject
                  writer.write(blob)
                }, reject)
              },
              reject
            )
          },
          reject
        )
      }
    })
  })
}
