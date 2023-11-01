import { Injectable } from '@nestjs/common'
import fs from 'fs-extra'
import { extname, dirname } from 'path'

import { LoggerService } from '@lib/logger'

@Injectable()
export class FileSystemService {
  public readonly fs = fs

  constructor (private readonly logger: LoggerService) {
    this.logger.setup(this.constructor.name)
  }

  public exists (path: string): boolean {
    return this.fs.existsSync(path)
  }

  public stats (path: string): fs.Stats {
    return this.fs.statSync(path, { throwIfNoEntry: true })
  }

  public dirname (path: string): string {
    return dirname(path)
  }

  public extname (path: string): string {
    return extname(path)
  }

  public async read (file: string): Promise<string> {
    try {
      const raw = await this.fs.readFile(file, 'utf-8')

      return raw
    } catch (e: any) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`)
    }
  }

  public readSync (file: string): string {
    try {
      const raw = this.fs.readFileSync(file, 'utf-8')

      return raw
    } catch (e: any) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`)
    }
  }

  public async write (file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): Promise<void> {
    try {
      await this.fs.writeFile(file, data, typeof options === 'object' ? { encoding: 'utf-8', ...options } : options)
    } catch (e: any) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`)
    }
  }

  public writeSync (file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): void {
    try {
      this.fs.writeFileSync(file, data, typeof options === 'object' ? { encoding: 'utf-8', ...options } : options)
    } catch (e: any) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`)
    }
  }

  public async append (file: string, data: string | Buffer, options?: fs.WriteFileOptions): Promise<void> {
    try {
      await this.fs.appendFile(file, data, options)
    } catch (e: any) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`)
    }
  }

  public appendSync (file: string, data: string | Buffer): void {
    try {
      this.fs.appendFileSync(file, data)
    } catch (e: any) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`)
    }
  }

  public async remove (file: string, options?: fs.RmOptions): Promise<void> {
    try {
      await this.fs.rm(file, options)
    } catch (e: any) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`)
    }
  }

  public removeSync (file: string, options?: fs.RmOptions): void {
    try {
      this.fs.rmSync(file, options)
    } catch (e: any) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`)
    }
  }

  public async emptyDir (directory: string): Promise<void> {
    try {
      await this.fs.emptyDir(directory)
    } catch (e: any) {
      throw new Error(`Error while emptying the directory "${directory}": ${e.message}`)
    }
  }

  public emptyDirSync (directory: string): void {
    try {
      this.fs.emptyDirSync(directory)
    } catch (e: any) {
      throw new Error(`Error while emptying the directory "${directory}": ${e.message}`)
    }
  }

  public async removeDir (directory: string): Promise<void> {
    try {
      await this.fs.rmdir(directory)
    } catch (e: any) {
      throw new Error(`Error while removing the directory "${directory}": ${e.message}`)
    }
  }

  public removeDirSync (directory: string): void {
    try {
      this.fs.rmdirSync(directory)
    } catch (e: any) {
      throw new Error(`Error while removing the directory "${directory}": ${e.message}`)
    }
  }

  public async mkdir (directory: string): Promise<void> {
    try {
      await this.fs.mkdirp(directory)
    } catch (e: any) {
      throw new Error(`Error while creating the directory "${directory}": ${e.message}`)
    }
  }

  public mkdirSync (directory: string): void {
    try {
      this.fs.mkdirpSync(directory)
    } catch (e: any) {
      throw new Error(`Error while creating the directory "${directory}": ${e.message}`)
    }
  }
}
