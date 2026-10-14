import { MergeStrategy } from './merge.constants'

/** Merge objects deep from overwriting the properties from source to target.
 * Does not mutate the object */
export function merge<T extends Record<PropertyKey, any> | any[]>(strategy: MergeStrategy, ...source: Partial<T>[]): T {
  return source.reduce((target, value) => mergeValue(strategy, target, value), {}) as T
}

export function uniqueArrayFilter(value: any, index: any, self: string | any[]): boolean {
  return self.indexOf(value) === index
}

function mergeValue(strategy: MergeStrategy, target: unknown, source: unknown): unknown {
  if (Array.isArray(source)) {
    return strategy === MergeStrategy.EXTEND ? [...(Array.isArray(target) ? target : []), ...source].filter(uniqueArrayFilter) : source
  }

  if (!isMergeable(source)) {
    return source
  }

  const base = isMergeable(target) && !Array.isArray(target) ? target : {}

  return Object.fromEntries(
    [...new Set([...Object.keys(base), ...Object.keys(source)])].map((key) => [
      key,
      Object.hasOwn(source, key) ? mergeValue(strategy, base[key], source[key]) : mergeValue(strategy, undefined, base[key])
    ])
  )
}

function isMergeable(value: unknown): value is Record<PropertyKey, any> {
  return typeof value === 'object' && value !== null && !(value instanceof Date) && !(value instanceof RegExp)
}
