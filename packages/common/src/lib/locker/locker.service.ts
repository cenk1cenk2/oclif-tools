import { Injectable, OnModuleInit } from '@nestjs/common'
import { get, set, unset } from 'es-toolkit/compat'

import type { CommonLockerData, LockData, LockableData, LockerServiceOptions, UnlockData } from './locker.interface'
import { FileSystemService } from '@lib/fs'
import { LoggerService } from '@lib/logger'
import { ParserService } from '@lib/parser'
import { clonePath, merge } from '@utils'

@Injectable()
export class LockerService<LockFile extends LockableData = LockableData> implements OnModuleInit {
  private toLock: LockData[] = []
  private toUnlock: UnlockData[] = []

  constructor(
    private readonly logger: LoggerService,
    private readonly fs: FileSystemService,
    private readonly parser: ParserService,
    private readonly options: LockerServiceOptions
  ) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public hasLock(): boolean {
    return this.toLock.length > 0
  }

  public hasUnlock(): boolean {
    return this.toUnlock.length > 0
  }

  public addLock<T extends LockableData = LockFile>(...data: LockData<T>[]): void {
    this.toLock.push(...data)
  }

  public addUnlock(...data: UnlockData[]): void {
    this.toUnlock.push(...data)
  }

  public async applyLockAll(lock: LockFile): Promise<LockFile> {
    if (this.hasLock()) {
      return this.applyLock(lock, ...this.toLock)
    }

    return lock
  }

  public async lockAll(): Promise<void> {
    if (this.hasLock()) {
      await this.lock(...this.toLock)

      this.toLock = []
    }
  }

  public async applyUnlockAll(lock: LockFile): Promise<LockFile> {
    if (this.hasUnlock()) {
      return this.applyUnlock(lock, ...this.toUnlock)
    }

    return lock
  }

  public async unlockAll(): Promise<void> {
    if (this.hasUnlock()) {
      await this.unlock(...this.toUnlock)

      this.toUnlock = []
    }
  }

  public async all(): Promise<void> {
    await this.unlockAll()
    await this.lockAll()
  }

  public async applyAll(lock: LockFile): Promise<LockFile> {
    lock = await this.applyUnlockAll(lock)
    lock = await this.applyLockAll(lock)

    return lock
  }

  public async applyLock<T extends LockableData = LockFile>(lock: LockFile, ...data: LockData<T>[]): Promise<LockFile> {
    data.forEach((d) => {
      if (d?.enabled === false) {
        return
      } else if (!d?.data || (Array.isArray(d?.data) && d.data.length === 0) || (typeof d?.data === 'object' && Object.keys(d.data).length === 0)) {
        return
      }

      const path = this.buildPath(d)

      if (d?.merge) {
        let parsed: LockableData

        if (typeof d.data === 'object') {
          parsed = merge(d.merge, get(lock, path, Array.isArray(d.data) ? [] : {}), d.data)
        } else {
          this.logger.warn('"%s" path with type "%s" is not mergeable.', path, typeof d.data)

          parsed = d.data
        }

        lock = set<LockFile>(clonePath(lock, path), path, parsed)
        this.logger.verbose('Merge lock: %s -> %o', path, d.data)

        return
      }

      lock = set<LockFile>(clonePath(lock, path), path, d.data)
      this.logger.verbose('Override lock: %s -> %o', path, d.data)
    })

    return lock
  }

  public async lock<T extends LockableData = LockFile>(...data: LockData<T>[]): Promise<LockFile> {
    const lock = await this.applyLock((await this.tryRead()) ?? ({} as LockFile), ...data)

    await this.write(lock)

    return lock
  }

  public async applyUnlock(lock: LockFile, ...data: UnlockData[]): Promise<LockFile> {
    if (data.length > 0) {
      data.forEach((d) => {
        if (d?.enabled === false) {
          return
        }

        const path = this.buildPath(d)

        lock = clonePath(lock, path)
        unset(lock, path)
        this.logger.verbose('Unlocked: %s', path)

        // an emptied lock file is removed on write, so the walk stops at the top level key
        for (let i = path.length - 1; i > 0; i--) {
          const parentPath = path.slice(0, i)

          const parent = get(lock, parentPath)

          if (!parent || (Array.isArray(parent) && parent.length === 0) || (typeof parent === 'object' && Object.keys(parent).length === 0)) {
            this.logger.verbose('Unlocked parent: %s -> %s', path, parentPath)

            lock = clonePath(lock, parentPath)
            unset(lock, parentPath)
          } else {
            break
          }
        }
      })

      return lock
    }

    if (!this.options.root?.length) {
      this.logger.warn('Nothing to unlock, there is neither a path to unlock nor a root for this locker.')

      return lock
    }

    lock = clonePath(lock, this.options.root)
    unset(lock, this.options.root)
    this.logger.verbose('Unlocked module: %s', this.options.root)

    return lock
  }

  public async unlock(...data: UnlockData[]): Promise<LockFile | undefined> {
    const state = await this.tryRead()

    if (!state) {
      this.logger.verbose('Lock file not found. Nothing to unlock.')

      return
    }

    const lock = await this.applyUnlock(state, ...data)

    await this.write(lock)

    return lock
  }

  public async read(): Promise<LockFile> {
    return this.parser.fetch(this.options.parser).parse(await this.fs.read(this.options.file))
  }

  public async tryRead(): Promise<LockFile | undefined> {
    const lock = await this.fs.read(this.options.file).catch((err) => {
      this.logger.trace('Can not read lockfile: %s -> %s', this.options.file, err.message)
    })

    if (!lock) {
      return
    }

    return this.parser.fetch(this.options.parser).parse<LockFile>(lock)
  }

  public async tryRemove(): Promise<void> {
    return this.fs
      .remove(this.options.file)
      .then(() => {
        this.logger.trace('Removed lockfile: %s', this.options.file)
      })
      .catch((err) => {
        this.logger.trace('Can not remove lockfile: %s -> %s', this.options.file, err.message)
      })
  }

  public async write(data: LockFile): Promise<void> {
    if (!data || (Array.isArray(data) && data.length === 0) || (typeof data === 'object' && Object.keys(data).length === 0)) {
      this.logger.trace('Trying to write empty lock file, deleting it instead: %s', this.options.file)

      return this.fs.remove(this.options.file)
    }

    return this.fs.write(this.options.file, this.parser.fetch(this.options.parser).stringify(data))
  }

  private buildPath<T extends Partial<CommonLockerData>>(d: T): string[] {
    if (d?.root !== true && this.options.root?.length) {
      return [...this.options.root, ...this.normalizePath(d.path)]
    }

    return this.normalizePath(d.path)
  }

  private normalizePath(path: string | (string | number)[]): string[] {
    if (Array.isArray(path)) {
      return path.map((p) => p.toString())
    } else if (typeof path === 'string') {
      return path.split('.')
    }

    return []
  }
}
