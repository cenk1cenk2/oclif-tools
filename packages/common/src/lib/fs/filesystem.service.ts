import { Injectable, OnModuleInit } from '@nestjs/common'
import fs from 'fs-extra'
import { extname, dirname } from 'path'

import { LoggerService } from '@lib/logger'

@Injectable()
export class FileSystemService implements OnModuleInit {
  public readonly extra: typeof fs = fs

  constructor(private readonly logger: LoggerService) {}

  public async onModuleInit(): Promise<void> {
    this.logger.setup(this.constructor.name)
  }

  public exists(path: string): boolean {
    return this.extra.existsSync(path)
  }

  public stats(path: string): fs.Stats {
    return this.extra.statSync(path, { throwIfNoEntry: true })
  }

  public dirname(path: string): string {
    return dirname(path)
  }

  public extname(path: string): string {
    return extname(path)
  }

  public async read(file: string): Promise<string> {
    try {
      const raw = await this.extra.readFile(file, 'utf-8')

      return raw
    } catch(e: any) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`)
    }
  }

  public readSync(file: string): string {
    try {
      const raw = this.extra.readFileSync(file, 'utf-8')

      return raw
    } catch(e: any) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`)
    }
  }

  public async write(file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): Promise<void> {
    try {
      await this.extra.writeFile(file, data, typeof options === 'object' ? { encoding: 'utf-8', ...options } : options)
    } catch(e: any) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`)
    }
  }

  public writeSync(file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): void {
    try {
      this.extra.writeFileSync(file, data, typeof options === 'object' ? { encoding: 'utf-8', ...options } : options)
    } catch(e: any) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`)
    }
  }

  public async append(file: string, data: string | Buffer, options?: fs.WriteFileOptions): Promise<void> {
    try {
      await this.extra.appendFile(file, data, options)
    } catch(e: any) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`)
    }
  }

  public appendSync(file: string, data: string | Buffer): void {
    try {
      this.extra.appendFileSync(file, data)
    } catch(e: any) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`)
    }
  }

  public async remove(file: string, options?: fs.RmOptions): Promise<void> {
    try {
      await this.extra.rm(file, options)
    } catch(e: any) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`)
    }
  }

  public removeSync(file: string, options?: fs.RmOptions): void {
    try {
      this.extra.rmSync(file, options)
    } catch(e: any) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`)
    }
  }

  public async emptyDir(directory: string): Promise<void> {
    try {
      await this.extra.emptyDir(directory)
    } catch(e: any) {
      throw new Error(`Error while emptying the directory "${directory}": ${e.message}`)
    }
  }

  public emptyDirSync(directory: string): void {
    try {
      this.extra.emptyDirSync(directory)
    } catch(e: any) {
      throw new Error(`Error while emptying the directory "${directory}": ${e.message}`)
    }
  }

  public async removeDir(directory: string): Promise<void> {
    try {
      await this.extra.rmdir(directory)
    } catch(e: any) {
      throw new Error(`Error while removing the directory "${directory}": ${e.message}`)
    }
  }

  public removeDirSync(directory: string): void {
    try {
      this.extra.rmdirSync(directory)
    } catch(e: any) {
      throw new Error(`Error while removing the directory "${directory}": ${e.message}`)
    }
  }

  public async mkdir(directory: string): Promise<void> {
    try {
      await this.extra.mkdirp(directory)
    } catch(e: any) {
      throw new Error(`Error while creating the directory "${directory}": ${e.message}`)
    }
  }

  public mkdirSync(directory: string): void {
    try {
      this.extra.mkdirpSync(directory)
    } catch(e: any) {
      throw new Error(`Error while creating the directory "${directory}": ${e.message}`)
    }
  }
}
