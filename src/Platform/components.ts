import React from "react"

interface QRReaderProps {
  onError: (error: Error) => void
  onScan: (data: string | null) => void
  style?: any // ignored
}

async function getImplementation() {
  if (window.electron) {
    const implementation = await import("./components/electron")
    return implementation
  } else if (import.meta.env.VITE_PLATFORM === "android" || import.meta.env.VITE_PLATFORM === "ios") {
    const implementation = await import("./components/cordova")
    return implementation
  } else if (typeof window !== 'undefined') {
    const implementation = await import("./components/web")
    return implementation
  } else {
    throw new Error("There are no platform components for your platform.")
  }
}

const components: any = await getImplementation()

export const isFullscreenQRPreview: boolean = components.isFullscreenQRPreview

export const QRReader: React.ComponentType<QRReaderProps> = components.QRReader
