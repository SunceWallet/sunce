const normalizePath = (pathname: string) =>
  pathname
    .replace(/\/+/, "/")
    .replace(/^\//, "")
    .replace(/\/$/, "")

/**
 * @param pathname      Some actual path, like `router.location.pathname`.
 * @param routepath     A route path, potentially with placeholders, like `/account/:id`.
 * @param [exactMatch]  Path must match route if set. Otherwise it's ok if the path starts with that route (prefix match).
 */
export function matchesRoute(pathname: string, routepath: string, exactMatch?: boolean) {
  const pathFragments = normalizePath(pathname).split("/")
  const routeFragments = normalizePath(routepath).split("/")

  if (exactMatch && pathFragments.length !== routeFragments.length) {
    return false
  } else if (pathFragments.length < routeFragments.length) {
    return false
  }

  for (let index = 0; index < routeFragments.length; index++) {
    const routeFragment = routeFragments[index]
    const pathFragment = pathFragments[index]

    if (routeFragment === "*" || routeFragment.charAt(0) === ":") {
      continue
    } else if (pathFragment !== routeFragment) {
      return false
    }
  }

  return true
}

/**
 * @param pathname      Some actual path, like `router.location.pathname`.
 * @param routepath     A route path, potentially with placeholders, like `/account/:id` or `/account/:id?`.
 * @param [exactMatch]  Path must match route if set. Otherwise it's ok if the path starts with that route (prefix match).
 * @returns Object with parameter values if match found, undefined otherwise
 */
export function matchesRouteWithParams(pathname: string, routepath: string, exactMatch?: boolean): Record<string, string> | undefined {
  const pathFragments = normalizePath(pathname).split("/")
  const routeFragments = normalizePath(routepath).split("/")
  const params: Record<string, string> = {}

  // Count required segments in routepath
  const requiredSegments = routeFragments.filter(fragment => !fragment.endsWith("?")).length

  // Check if we have enough path fragments
  if (pathFragments.length < requiredSegments) {
    return undefined
  }

  // For exact match, path length must match route length (accounting for optional segments)
  if (exactMatch && pathFragments.length > routeFragments.length) {
    return undefined
  }

  for (let index = 0; index < routeFragments.length; index++) {
    const routeFragment = routeFragments[index]
    const pathFragment = pathFragments[index]

    // If we've run out of path fragments and the route fragment isn't optional, no match
    if (pathFragment === undefined) {
      if (!routeFragment.endsWith("?")) {
        return undefined
      }
      continue
    }

    if (routeFragment === "*") {
      continue
    } else if (routeFragment.charAt(0) === ":") {
      // Extract parameter name (removing the "?" if it's optional)
      const paramName = routeFragment.endsWith("?")
        ? routeFragment.slice(1, -1)
        : routeFragment.slice(1)

      params[paramName] = pathFragment
    } else if (pathFragment !== routeFragment) {
      return undefined
    }
  }

  return params
}
