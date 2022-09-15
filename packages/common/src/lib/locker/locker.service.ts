import op from 'object-path-immutable'

import type { CommonLockerData, LockableData, LockData, UnlockData } from './locker.interface'
import { FileSystemService } from '@lib/fs'
import type { GenericParser } from '@lib/parser/parser.interface'
import { merge } from '@utils'
import { Logger } from '@utils/logger'

export class LockerService<LockFile extends LockableData = LockableData> {
  private toLock: LockData[] = []
  private toUnlock: UnlockData[] = []
  private logger: Logger
  private fs: FileSystemService

  constructor (private file: string, private parser: GenericParser, private root?: string, context?: string) {
    this.logger = new Logger(context ?? this.constructor.name)
    this.fs = new FileSystemService()
  }

  public hasLock (): boolean {
    return this.toLock.length > 0
  }

  public hasUnlock (): boolean {
    return this.toUnlock.length > 0
  }

  public addLock<T extends LockableData = LockableData>(...data: LockData<T>[]): void {
    this.toLock = [ ...this.toLock, ...data ]
  }

  public addUnlock (...data: UnlockData[]): void {
    this.toUnlock = [ ...this.toUnlock, ...data ]
  }

  public async lockAll (): Promise<void> {
    if (this.hasLock()) {
      await this.lock(...this.toLock)

      this.toLock = []
    }
  }

  public async unlockAll (): Promise<void> {
    if (this.toUnlock.length > 0) {
      await this.unlock(...this.toUnlock)

      this.toUnlock = []
    }
  }

  public async all (): Promise<void> {
    await this.unlockAll()
    await this.lockAll()
  }

  public async lock<T extends LockableData = LockableData>(...data: LockData<T>[]): Promise<void> {
    let lock: LockFile = await this.tryRead() ?? ({} as LockFile)

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
          this.logger.verbose('Merge lock: %s -> %o', path, parsed)
        } else {
          // dont merge directly set the data
          lock = op.set(lock, path, d.data)
          this.logger.verbose('Override lock: %s -> %o', path, d.data)
        }
      })
    )

    // write data
    await this.write(lock)
  }

  public async unlock (...data: UnlockData[]): Promise<void> {
    // get lock file
    let lock = await this.tryRead()

    // write data
    if (!lock) {
      this.logger.verbose('Lock file not found. Nothing to unlock.')

      return
    }

    // option to delete all, or specific locks
    if (data.length > 0) {
      await Promise.all(
        data.map(async (d) => {
          // enabled flag for not if checking every time
          if (d?.enabled === false) {
            return
          }

          const path = this.buildPath(d)

          // set unlock
          lock = op.del(lock, path)
          this.logger.verbose('Unlocked: %s', path)
        })
      )
    } else {
      lock = op.del(lock, this.root)
      this.logger.verbose('Unlocked module: %s', this.root)
    }

    // write data
    await this.write(lock)
  }

  public async read (): Promise<LockFile> {
    return this.parser.parse(await this.fs.read(this.file))
  }

  public async tryRead (): Promise<LockFile | undefined> {
    try {
      return this.parser.parse(await this.fs.read(this.file))
    } catch {
      this.logger.trace('Can not read lockfile: %s', this.file)
    }
  }

  public async write (data: LockFile): Promise<void> {
    return this.fs.write(this.file, this.parser.stringify(data))
  }

  private buildPath<T extends Partial<CommonLockerData>>(d: T): string[] {
    if (d?.root !== true && this.root) {
      return [ this.root, ...this.normalizePath(d.path) ]
    }

    return this.normalizePath(d.path)
  }

  private normalizePath (path: string | string[]): string[] {
    if (Array.isArray(path)) {
      return path
    } else if (typeof path === 'string') {
      return path.split('.')
    }

    return []
  }
}
