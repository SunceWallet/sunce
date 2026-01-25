import { Messages } from "~shared/ipc";
import { refreshLastNativeInteractionTime } from "./app.cordova";
import { expose } from "./ipc";

interface ShareResult {
  completed: boolean;
  app?: string;
}

export function initializeFileSharing() {
  expose(Messages.ShareFile, (secureStorage, keyStore, options) => {
    return new Promise<void>((resolve, reject) => {
      const fileName = options.subject + ".json"
      const blob = new Blob([options.content], { type: "application/json" })

      const logAndReject = (e: any) => {
        refreshLastNativeInteractionTime();
        reject(e)
      }

      // Create temporary file with proper name, then share it
      ;(window as any).resolveLocalFileSystemURL(
        cordova.file.cacheDirectory,
        (dirEntry: any) => {
          dirEntry.getFile(
            fileName,
            { create: true, exclusive: false },
            (fileEntry: any) => {
              fileEntry.createWriter((writer: any) => {
                writer.onwriteend = () => {
                  window.plugins.socialsharing.shareWithOptions(
                    {
                      subject: options.subject,
                      files: [fileEntry.nativeURL],
                    },
                    (result: ShareResult) => {
                      console.log(`Shared: ${result.completed}`);
                      refreshLastNativeInteractionTime();
                      resolve();
                    },
                    logAndReject
                  )
                }
                writer.onerror = logAndReject
                writer.write(blob)
              }, logAndReject)
            },
            logAndReject
          )
        },
        logAndReject
      )
    })
  })
}
