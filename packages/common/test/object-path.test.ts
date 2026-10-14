import { describe, expect, it } from 'vitest'

import { deletePath, getPath, setPath } from '../src'

describe('getPath', () => {
  it('reads nested values and falls back when they are missing', () => {
    expect(getPath({ a: { b: [1, 2] } }, ['a', 'b', 1])).toBe(2)
    expect(getPath({ a: {} }, ['a', 'b', 'c'], 'fallback')).toBe('fallback')
  })

  it('keeps null values instead of falling back', () => {
    expect(getPath({ a: null }, ['a'], 'fallback')).toBeNull()
  })
})

describe('setPath', () => {
  it('sets the value on a clone and creates missing parents', () => {
    const target = { a: { b: 1 } }

    expect(setPath(target, ['a', 'c', 'd'], 2)).toEqual({ a: { b: 1, c: { d: 2 } } })
    expect(target).toEqual({ a: { b: 1 } })
  })

  it('creates arrays for numeric keys', () => {
    expect(setPath({}, ['list', 0, 'name'], 'x')).toEqual({ list: [{ name: 'x' }] })
  })

  it('replaces the target for an empty path', () => {
    expect(setPath({ a: 1 }, [], { b: 2 })).toEqual({ b: 2 })
  })
})

describe('deletePath', () => {
  it('deletes keys and array elements on a clone', () => {
    const target = { a: { b: 1, c: 2 }, list: [1, 2, 3] }

    expect(deletePath(deletePath(target, ['a', 'b']), ['list', 1])).toEqual({ a: { c: 2 }, list: [1, 3] })
    expect(target).toEqual({ a: { b: 1, c: 2 }, list: [1, 2, 3] })
  })

  it('leaves the target alone when the path does not exist', () => {
    expect(deletePath({ a: 1 }, ['b', 'c'])).toEqual({ a: 1 })
  })

  it('deletes everything for an empty or missing path', () => {
    expect(deletePath({ a: 1 }, [])).toBeUndefined()
    expect(deletePath({ a: 1 }, undefined)).toBeUndefined()
  })
})
