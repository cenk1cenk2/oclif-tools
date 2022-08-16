import op from 'object-path-immutable'

import type { CommonLockerData, LockableData, LockData, UnlockData } from './locker.interface'
import { FileSystemService } from '@lib/fs'
import type { GenericParser } from '@lib/parser'
import { merge } from '@utils'
import { Logger } from '@utils/logger'

export class LockerService<LockFile extends LockableData = LockableData> {
  private toLock: LockData[] = []
  private toUnlock: UnlockData[] = []
  private readonly logger = new Logger(this.constructor.name)
  private readonly fs = new FileSystemService()

  constructor (private file: string, private parser: GenericParser, private root?: string) {}

  public hasLock (): boolean {
    return this.toLock.length > 0
  }

  public hasUnlock (): boolean {
    return this.toUnlock.length > 0
  }

  public addLock<T extends LockableData>(data: LockData<T> | LockData<T>[]): void {
    this.toLock = [ ...this.toLock, ...Array.isArray(data) ? data : [ data ] ]
  }

  public addUnlock (data?: UnlockData | UnlockData[]): void {
    this.toUnlock = [ ...this.toUnlock, ...Array.isArray(data) ? data : [ data ] ]
  }

  public async lockAll (): Promise<void> {
    if (this.hasLock()) {
      await this.lock(this.toLock)

      this.toLock = []
    }
  }

  public async unlockAll (): Promise<void> {
    if (this.toUnlock.length > 0) {
      await this.unlock(this.toUnlock)

      this.toUnlock = []
    }
  }

  public async lock<T extends LockableData>(data: LockData<T> | LockData<T>[]): Promise<void> {
    // cast to array
    if (!Array.isArray(data)) {
      data = [ data ]
    }

    let lock = await this.read() ?? {}

    await Promise.all(
      data.map(async (d) => {
        // enabled flag for not if checking every time
        if (d?.enabled === false) {
          return
        } else if (!d?.data || Array.isArray(d?.data) && d.data.length === 0 || typeof d?.data === 'object' && Object.keys(d.data).length === 0) {
          return
        }

        const path = this.buildPath(d)

        // set lock
        if (d?.merge) {
          let parsed: LockableData

          // check if array else merge as object
          if (typeof d.data === 'object') {
            parsed = merge(d.merge, op.get(lock, path) || Array.isArray(d.data) ? [] : {}, d.data)
          } else {
            this.logger.warn('"%s" path with type "%s" is not mergeable.', path, typeof d.data)

            parsed = d.data
          }

          // set lock data
          lock = op.set(lock, path, parsed)
          this.logger.verbose(`Merge lock: "${path}"`)
        } else {
          // dont merge directly set the data
          lock = op.set(lock, path, d.data)
          this.logger.verbose(`Override lock: "${path}"`)
        }
      })
    )

    // write data
    await this.write(lock)
  }

  public async unlock (data?: UnlockData | UnlockData[]): Promise<void> {
    // cast to array
    if (data && !Array.isArray(data)) {
      data = [ data ]
    }

    // get lock file
    let lock = await this.read()

    // write data
    if (!lock) {
      this.logger.verbose('Lock file not found. Nothing to unlock.')

      return
    }

    // option to delete all, or specific locks
    if (Array.isArray(data) && data.length > 0) {
      await Promise.all(
        data.map(async (d) => {
          // enabled flag for not if checking every time
          if (d?.enabled === false) {
            return
          }

          const path = this.buildPath(d)

          // set unlock
          lock = op.del(lock, path)
          this.logger.verbose(`Unlocked: ${path}`, { custom: 'locker' })
        })
      )
    } else {
      lock = op.del(lock, this.root)
      this.logger.verbose(`Unlocked module: ${this.root}`, { custom: 'locker' })
    }

    // write data
    await this.write(lock)
  }

  public async read (): Promise<LockFile> {
    return this.parser.parse(await this.fs.read(this.file))
  }

  public async write (data: LockFile): Promise<void> {
    return this.fs.write(this.file, await this.parser.stringify(data))
  }

  private buildPath<T extends CommonLockerData>(d: T): string {
    if (d?.root !== true && this.root) {
      return `${this.root}.${d.path}`
    }

    return d.path
  }
}
