import { Injectable, OnModuleInit } from '@nestjs/common'
import type { RmOptions, Stats, WriteFileOptions } from 'fs'
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, rmdirSync, statSync, writeFileSync } from 'fs'
import { appendFile, mkdir, readFile, readdir, rm, rmdir, writeFile } from 'fs/promises'
import { extname, dirname, join } from 'path'

import { LoggerService } from '@lib/logger'

@Injectable()
export class FileSystemService implements OnModuleInit {
  constructor(private readonly logger: LoggerService) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public exists(path: string): boolean {
    return existsSync(path)
  }

  public stats(path: string): Stats {
    return statSync(path, { throwIfNoEntry: true })
  }

  public dirname(path: string): string {
    return dirname(path)
  }

  public extname(path: string): string {
    return extname(path)
  }

  public async read(file: string): Promise<string> {
    try {
      const raw = await readFile(file, 'utf-8')

      return raw
    } catch(e: any) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`, { cause: e })
    }
  }

  public readSync(file: string): string {
    try {
      const raw = readFileSync(file, 'utf-8')

      return raw
    } catch(e: any) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`, { cause: e })
    }
  }

  public async write(file: string, data: string | Buffer, options: WriteFileOptions = {}): Promise<void> {
    try {
      await writeFile(file, data, typeof options === 'object' ? { encoding: 'utf-8', ...options } : options)
    } catch(e: any) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`, { cause: e })
    }
  }

  public writeSync(file: string, data: string | Buffer, options: WriteFileOptions = {}): void {
    try {
      writeFileSync(file, data, typeof options === 'object' ? { encoding: 'utf-8', ...options } : options)
    } catch(e: any) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`, { cause: e })
    }
  }

  public async append(file: string, data: string | Buffer, options?: WriteFileOptions): Promise<void> {
    try {
      await appendFile(file, data, options)
    } catch(e: any) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`, { cause: e })
    }
  }

  public appendSync(file: string, data: string | Buffer): void {
    try {
      appendFileSync(file, data)
    } catch(e: any) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`, { cause: e })
    }
  }

  public async remove(file: string, options?: RmOptions): Promise<void> {
    try {
      await rm(file, options)
    } catch(e: any) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`, { cause: e })
    }
  }

  public removeSync(file: string, options?: RmOptions): void {
    try {
      rmSync(file, options)
    } catch(e: any) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`, { cause: e })
    }
  }

  public async emptyDir(directory: string): Promise<void> {
    try {
      await mkdir(directory, { recursive: true })

      await Promise.all((await readdir(directory)).map((entry) => rm(join(directory, entry), { recursive: true, force: true })))
    } catch(e: any) {
      throw new Error(`Error while emptying the directory "${directory}": ${e.message}`, { cause: e })
    }
  }

  public emptyDirSync(directory: string): void {
    try {
      mkdirSync(directory, { recursive: true })

      readdirSync(directory).forEach((entry) => rmSync(join(directory, entry), { recursive: true, force: true }))
    } catch(e: any) {
      throw new Error(`Error while emptying the directory "${directory}": ${e.message}`, { cause: e })
    }
  }

  public async removeDir(directory: string): Promise<void> {
    try {
      await rmdir(directory)
    } catch(e: any) {
      throw new Error(`Error while removing the directory "${directory}": ${e.message}`, { cause: e })
    }
  }

  public removeDirSync(directory: string): void {
    try {
      rmdirSync(directory)
    } catch(e: any) {
      throw new Error(`Error while removing the directory "${directory}": ${e.message}`, { cause: e })
    }
  }

  public async mkdir(directory: string): Promise<void> {
    try {
      await mkdir(directory, { recursive: true })
    } catch(e: any) {
      throw new Error(`Error while creating the directory "${directory}": ${e.message}`, { cause: e })
    }
  }

  public mkdirSync(directory: string): void {
    try {
      mkdirSync(directory, { recursive: true })
    } catch(e: any) {
      throw new Error(`Error while creating the directory "${directory}": ${e.message}`, { cause: e })
    }
  }
}
