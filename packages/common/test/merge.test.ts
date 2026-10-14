import { describe, expect, it } from 'vitest'

import { MergeStrategy, merge } from '../src'

describe('merge', () => {
  it('merges objects deep and lets later sources win', () => {
    const merged = merge<Record<string, any>>(MergeStrategy.OVERWRITE, { a: 1, nested: { b: 1, c: 1 } }, { nested: { c: 2, d: 2 } }, { e: 3 })

    expect(merged).toEqual({
      a: 1,
      nested: {
        b: 1,
        c: 2,
        d: 2
      },
      e: 3
    })
  })

  it('replaces arrays with the overwrite strategy', () => {
    expect(merge(MergeStrategy.OVERWRITE, { list: [1, 2] }, { list: [2, 3] })).toEqual({ list: [2, 3] })
  })

  it('concatenates arrays without duplicates with the extend strategy', () => {
    expect(merge(MergeStrategy.EXTEND, { list: [1, 2, 2] }, { list: [2, 3] })).toEqual({ list: [1, 2, 3] })
  })

  it('replaces values whose type changes between sources', () => {
    expect(merge<Record<string, any>>(MergeStrategy.EXTEND, { a: { b: 1 }, c: [1] }, { a: [1], c: { d: 1 } })).toEqual({ a: [1], c: { d: 1 } })
  })

  it('does not mutate the sources', () => {
    const target = { nested: { list: [1] } }

    const merged = merge(MergeStrategy.EXTEND, target, { nested: { list: [2] } })

    expect(target).toEqual({ nested: { list: [1] } })
    expect(merged.nested).not.toBe(target.nested)
  })

  it('does not let a parsed __proto__ key reach the prototype', () => {
    const merged = merge(MergeStrategy.OVERWRITE, {}, JSON.parse('{ "__proto__": { "polluted": true } }'))

    expect(({} as Record<string, unknown>).polluted).toBeUndefined()
    expect(Object.getPrototypeOf(merged)).toBe(Object.prototype)
  })
})
