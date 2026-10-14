import { set, unset } from 'es-toolkit/compat'
import { describe, expect, it } from 'vitest'

import { clonePath } from '../src'

describe('clonePath', () => {
  it('copies the containers along the path and shares everything else', () => {
    const url = new URL('https://kilic.dev')
    const target = {
      a: { b: { c: 1 } },
      other: { d: 2 },
      url
    }

    const cloned = clonePath(target, ['a', 'b', 'c'])

    expect(cloned).not.toBe(target)
    expect(cloned.a).not.toBe(target.a)
    expect(cloned.a.b).not.toBe(target.a.b)
    expect(cloned.other).toBe(target.other)
    expect(cloned.url).toBe(url)
  })

  it('lets set and unset leave the target untouched', () => {
    const target = { a: { b: 1, c: 2 } }

    expect(set(clonePath(target, ['a', 'd', 'e']), ['a', 'd', 'e'], 3)).toEqual({
      a: {
        b: 1,
        c: 2,
        d: { e: 3 }
      }
    })

    const unlocked = clonePath(target, ['a', 'b'])

    unset(unlocked, ['a', 'b'])

    expect(unlocked).toEqual({ a: { c: 2 } })
    expect(target).toEqual({ a: { b: 1, c: 2 } })
  })

  it('starts from an empty object without a target', () => {
    expect(set(clonePath(undefined, ['a']), ['a'], 1)).toEqual({ a: 1 })
  })
})
