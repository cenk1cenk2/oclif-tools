import { isPlainObject, mergeWith, uniq } from 'es-toolkit'

import { MergeStrategy } from './merge.constants'

/** Merge objects deep from overwriting the properties from source to target.
 * Does not mutate the object */
export function merge<T extends Record<PropertyKey, any> | any[]>(strategy: MergeStrategy, ...source: Partial<T>[]): T {
  const customizer = (target: unknown, value: unknown): unknown => {
    if (Array.isArray(value)) {
      return mergeWith([], strategy === MergeStrategy.EXTEND ? uniq([...(Array.isArray(target) ? target : []), ...value]) : value, customizer)
    } else if (isPlainObject(value) && !isPlainObject(target)) {
      return mergeWith({}, value, customizer)
    }
  }

  // wrapping every source lets the customizer replace or extend top level arrays as well
  return source.reduce((merged, value) => mergeWith({ root: merged }, { root: value }, customizer).root, {}) as T
}
