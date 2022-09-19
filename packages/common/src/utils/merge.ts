import deepmerge from 'deepmerge'

import { MergeStrategy } from './merge.constants'

/** Merge objects deep from overwriting the properties from source to target.
 * Does not mutate the object */
export function merge<T extends Record<PropertyKey, any> | any[]> (strategy: MergeStrategy, ...source: Partial<T>[]): T {
  return deepmerge.all(source, {
    arrayMerge: strategy === MergeStrategy.EXTEND ? (dest, src): any[] => [ ...dest, ...src ].filter(uniqueFilter) : (_, src): any[] => src
  }) as T
}

export function uniqueFilter (value: any, index: any, self: string | any[]): boolean {
  return self.indexOf(value) === index
}
