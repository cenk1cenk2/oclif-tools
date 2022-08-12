import deepmerge from 'deepmerge'

import { MergeStrategy } from './merge.constants'

/** Merge objects deep from overwriting the properties from source to target.
 * Does not mutate the object */
export function merge<T extends Record<PropertyKey, any> | any[]> (strategy: MergeStrategy, target: T, ...source: Partial<T>[]): T {
  return source.reduce<T>((o, val) => {
    return deepmerge(o, val ?? {}, {
      arrayMerge: strategy === MergeStrategy.EXTEND ? (destinationArray, sourceArray): any[] => [ ...destinationArray, ...sourceArray ] : (_, sourceArray): any[] => sourceArray
    }) as T
  }, target)
}
