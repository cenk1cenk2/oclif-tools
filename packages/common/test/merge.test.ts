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

  it('merges top level arrays with the strategy', () => {
    expect(merge(MergeStrategy.EXTEND, [1, 2], [2, 3])).toEqual([1, 2, 3])
    expect(merge(MergeStrategy.OVERWRITE, [1, 2], [2, 3])).toEqual([2, 3])
  })

  it.each(Object.values(MergeStrategy))('does not mutate or alias the sources with the %s strategy', (strategy) => {
    const target = { nested: { list: [{ a: 1 }] } }
    const source = { nested: { list: [{ b: 2 }] }, other: { c: 3 } }

    const merged = merge<Record<string, any>>(strategy, target, source)

    expect(target).toEqual({ nested: { list: [{ a: 1 }] } })
    expect(source).toEqual({ nested: { list: [{ b: 2 }] }, other: { c: 3 } })
    expect(merged.nested).not.toBe(target.nested)
    expect(merged.nested.list).not.toBe(source.nested.list)
    expect(merged.nested.list.at(-1)).not.toBe(source.nested.list[0])
    expect(merged.other).not.toBe(source.other)
  })

  it('keeps values that can not be cloned as they are', () => {
    const url = new URL('https://kilic.dev')

    expect(merge<Record<string, any>>(MergeStrategy.OVERWRITE, { a: 1 }, { url }).url).toBe(url)
  })

  it('does not let a parsed __proto__ key reach the prototype', () => {
    const merged = merge(MergeStrategy.OVERWRITE, {}, JSON.parse('{ "__proto__": { "polluted": true } }'))

    expect(({} as Record<string, unknown>).polluted).toBeUndefined()
    expect(Object.getPrototypeOf(merged)).toBe(Object.prototype)
  })
})
