import React from "react"
import * as webImpl from "./components/web"
import * as cordovaImpl from "./components/cordova"

interface QRReaderProps {
  onError: (error: Error) => void
  onScan: (data: string | null) => void
  style?: any // ignored
}


function getImplementation() {
  if (window.electron) {
    return webImpl 
  } else if (import.meta.env.VITE_PLATFORM === "android" || import.meta.env.VITE_PLATFORM === "ios") {
    return cordovaImpl
  } else if (typeof window !== 'undefined') {
    return webImpl
  } else {
    throw new Error("There are no platform components for your platform.")
  }
}

const components: any = getImplementation()

export const isFullscreenQRPreview: boolean = components.isFullscreenQRPreview

export const QRReader: React.ComponentType<QRReaderProps> = components.QRReader
