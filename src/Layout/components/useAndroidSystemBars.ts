import { useLayoutEffect, useRef } from "react"
import { brandColor, pageBackground } from "~App/theme"

function syncSystemBars() {
  // Material UI appends full-screen dialogs to the body in stacking order.
  const surfaces = document.querySelectorAll<HTMLElement>("[data-android-system-bars]")
  const colors = surfaces[surfaces.length - 1]?.dataset.androidSystemBars
  if (colors) {
    const [top, bottom] = colors.split(" ")
    window.parent.postMessage({ type: "app:system-bars", top, bottom }, "*")
  }
}

export default function useAndroidSystemBars(branded: boolean, fillsBottom: boolean) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = ref.current
    if (import.meta.env.VITE_PLATFORM !== "android" || !section) return

    const dialog = section.closest('[role="dialog"]')
    if (dialog ? !dialog.classList.contains("MuiDialog-paperFullScreen") : !branded) return

    const top = branded ? brandColor.main : pageBackground
    const bottom = branded && fillsBottom ? brandColor.dark : pageBackground
    section.dataset.androidSystemBars = top + " " + bottom
    syncSystemBars()
    return () => {
      delete section.dataset.androidSystemBars
      syncSystemBars()
    }
  }, [branded, fillsBottom])

  return ref
}
