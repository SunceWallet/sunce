import { Messages } from "~shared/ipc";
import { refreshLastNativeInteractionTime } from "./app.cordova";
import { expose } from "./ipc";

function getBase64(jsonString: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const reader = new FileReader();

    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      // Extract just the base64 part (after the comma)
      const base64Data = dataUrl.split(',')[1];
      resolve(base64Data);
    };

    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function saveFileToDevice(content: string, fileName: string): Promise<boolean> {
  try {
    // Convert to Base64 (The plugin requires Base64 strings)
    const base64Data = await getBase64(content)

    const params = {
      data: base64Data,
      filename: fileName, // The suggested filename in the picker
    };

    // This launches the Android intent that lets the user pick any folder
    await cordova.plugins.safMediastore.saveFile(params);
    refreshLastNativeInteractionTime()
    return true
  } catch (error) {
    refreshLastNativeInteractionTime()
    if (String(error).indexOf('Cancelled') >= 0) return false;
    console.error("Save failed", error);
    throw error;
  }
}

export function initializeFileSaving() {
  expose(Messages.SaveFile, (secureStorage, keyStore, options) => {
    return saveFileToDevice(options.content, options.subject + ".json")
  })
}
