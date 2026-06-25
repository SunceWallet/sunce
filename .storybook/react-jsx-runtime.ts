import React from "react"

export const Fragment = React.Fragment

export function jsx(type: React.ElementType, props: Record<string, unknown> | null, key?: React.Key) {
  return React.createElement(type, key === undefined ? props : { ...props, key })
}

export const jsxs = jsx
