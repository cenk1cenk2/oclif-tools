import { clone, isPlainObject } from 'es-toolkit'

/**
 * Copies the target and the arrays and plain objects along the path, so a following set or unset leaves the target untouched
 * while everything else stays shared. A class instance along the path is shared as well, since a copy of one with internal
 * state, such as a URL, would break, so a set or unset through it changes the original.
 */
export function clonePath<T>(target: T, path: PropertyKey[]): T & object {
  const root = clone(target ?? {}) as T & object

  path.slice(0, -1).reduce<any>((current, key) => {
    if (Array.isArray(current?.[key]) || isPlainObject(current?.[key])) {
      current[key] = clone(current[key])
    }

    return current?.[key]
  }, root)

  return root
}
