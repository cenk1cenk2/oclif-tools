import fs from 'fs-extra'
import { extname, dirname } from 'path'

import { Logger } from '@utils/logger'

export class FileSystemService {
  static instance: FileSystemService
  private readonly logger = new Logger(this.constructor.name)

  constructor () {
    if (FileSystemService.instance) {
      return FileSystemService.instance
    } else {
      FileSystemService.instance = this

      this.logger.trace('Created a new instance.')
    }
  }

  public exists (path: string): boolean {
    return fs.existsSync(path)
  }

  public stats (path: string): fs.Stats {
    return fs.statSync(path, { throwIfNoEntry: true })
  }

  public dirname (path: string): string {
    return dirname(path)
  }

  public extname (path: string): string {
    return extname(path)
  }

  public async read (file: string): Promise<string> {
    try {
      const raw = await fs.readFile(file, 'utf-8')

      return raw
    } catch (e) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`)
    }
  }

  public readSync (file: string): string {
    try {
      const raw = fs.readFileSync(file, 'utf-8')

      return raw
    } catch (e) {
      throw new Error(`Error while reading file from "${file}": ${e.message}`)
    }
  }

  public async write (file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): Promise<void> {
    try {
      await fs.writeFile(file, data, { encoding: 'utf-8', ...options })
    } catch (e) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`)
    }
  }

  public writeSync (file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): void {
    try {
      fs.writeFileSync(file, data, { encoding: 'utf-8', ...options } as any)
    } catch (e) {
      throw new Error(`Error while writing file to "${file}": ${e.message}`)
    }
  }

  public async append (file: string, data: string | Buffer, options?: fs.WriteFileOptions): Promise<void> {
    try {
      await fs.appendFile(file, data, options)
    } catch (e) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`)
    }
  }

  public appendSync (file: string, data: string | Buffer): void {
    try {
      fs.appendFileSync(file, data)
    } catch (e) {
      throw new Error(`Error while appending to file  "${file}": ${e.message}`)
    }
  }

  public async remove (file: string, options?: fs.RmOptions): Promise<void> {
    try {
      await fs.rm(file, options)
    } catch (e) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`)
    }
  }

  public removeSync (file: string, options?: fs.RmOptions): void {
    try {
      fs.rmSync(file, options)
    } catch (e) {
      throw new Error(`Error while deleting the file "${file}": ${e.message}`)
    }
  }

  public async emptyDir (directory: string): Promise<void> {
    try {
      await fs.emptyDir(directory)
    } catch (e) {
      throw new Error(`Error while deleting the directory "${directory}": ${e.message}`)
    }
  }

  public emptyDirSync (directory: string): void {
    try {
      fs.emptyDirSync(directory)
    } catch (e) {
      throw new Error(`Error while deleting the directory "${directory}": ${e.message}`)
    }
  }
}

export { fs }
