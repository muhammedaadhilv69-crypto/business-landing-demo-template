import * as React from "react"

const MOBILE_BREAKPOINT = 768
let mediaQueryList: MediaQueryList | undefined

function getMediaQueryList() {
  if (!mediaQueryList) {
    mediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  }
  return mediaQueryList
}

function subscribe(onStoreChange: () => void) {
  const query = getMediaQueryList()
  query.addEventListener("change", onStoreChange)
  return () => query.removeEventListener("change", onStoreChange)
}

function getSnapshot() {
  return getMediaQueryList().matches
}

function getServerSnapshot() {
  return false
}

export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
