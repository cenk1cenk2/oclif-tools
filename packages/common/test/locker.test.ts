import { describe, expect, it, vi } from 'vitest'

import type { FileSystemService, LockerServiceOptions, LoggerService, ParserService } from '../src'
import { JsonParser, LockerService, MergeStrategy } from '../src'

describe('LockerService', () => {
  function locker(options: Partial<LockerServiceOptions> = {}): LockerService {
    return new LockerService({ verbose: vi.fn(), warn: vi.fn() } as unknown as LoggerService, {} as FileSystemService, {} as ParserService, {
      file: 'lock.json',
      parser: JsonParser,
      ...options
    })
  }

  it('keeps values that can not be cloned in the lock', async() => {
    const url = new URL('https://kilic.dev')
    const lock = { kept: { url } }

    const applied = await locker().applyLock(
      lock,
      { path: 'added', data: { url } },
      {
        path: 'kept',
        data: { list: [1] },
        merge: MergeStrategy.EXTEND
      }
    )

    expect(applied.added.url).toBe(url)
    expect(applied.kept.url).toBe(url)
    expect(lock).toEqual({ kept: { url } })
  })

  it('removes emptied parents but keeps the rest of the lock', async() => {
    const lock = { a: { b: { c: 1 } }, d: 2 }

    expect(await locker().applyUnlock(lock, { path: 'a.b.c' })).toEqual({ d: 2 })
    expect(lock).toEqual({ a: { b: { c: 1 } }, d: 2 })
  })

  it('unlocks only its root', async() => {
    expect(await locker({ root: ['module'] }).applyUnlock({ module: { a: 1 }, other: 2 })).toEqual({ other: 2 })
  })

  it('does not wipe the lock when unlocking everything without a root', async() => {
    expect(await locker().applyUnlock({ a: 1 })).toEqual({ a: 1 })
  })
})
