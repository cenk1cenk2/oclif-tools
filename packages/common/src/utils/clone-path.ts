import { clone, isPlainObject } from 'es-toolkit'

/**
 * Copies only the containers along the path, so a following set or unset leaves the target untouched
 * while everything else, including values that can not be cloned, stays shared.
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
