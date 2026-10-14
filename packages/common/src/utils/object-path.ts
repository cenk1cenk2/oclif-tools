export function getPath<T = any>(target: unknown, path: (string | number)[], fallback?: T): T {
  const value = path.reduce<any>((current, key) => current?.[key], target)

  return value === undefined ? fallback : value
}

export function setPath<T>(target: T, path: (string | number)[], value: unknown): T {
  if (path.length === 0) {
    return value as T
  }

  const result = structuredClone(target ?? container(path[0]))

  path.slice(0, -1).reduce<any>((current, key, index) => {
    if (typeof current[key] !== 'object' || current[key] === null) {
      current[key] = container(path[index + 1])
    }

    return current[key]
  }, result)[path.at(-1)] = value

  return result as T
}

/** An empty path deletes everything, so unlocking a locker without a root clears the whole lock. */
export function deletePath<T>(target: T, path: (string | number)[] = []): T | undefined {
  if (path.length === 0) {
    return
  }

  const result = structuredClone(target)
  const parent = getPath(result, path.slice(0, -1))
  const key = path.at(-1)

  if (Array.isArray(parent)) {
    if (parent[key] !== undefined) {
      parent.splice(Number(key), 1)
    }
  } else if (typeof parent === 'object' && parent !== null) {
    delete parent[key]
  }

  return result
}

function container(key: string | number): Record<PropertyKey, any> | any[] {
  return typeof key === 'number' ? [] : {}
}
