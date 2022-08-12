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
      this.logger.fatal('Error while reading file from "%s": %s', file, e.message)

      throw e
    }
  }

  public readSync (file: string): string {
    try {
      const raw = fs.readFileSync(file, 'utf-8')

      return raw
    } catch (e) {
      this.logger.fatal('Error while reading file from "%s": %s', file, e.message)

      throw e
    }
  }

  public async write (file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): Promise<void> {
    try {
      await fs.writeFile(file, data, { encoding: 'utf-8', ...options })
    } catch (e) {
      this.logger.fatal('Error while writing file to "%s": %s', file, e.message)

      throw e
    }
  }

  public writeSync (file: string, data: string | Buffer, options: fs.WriteFileOptions = {}): void {
    try {
      fs.writeFileSync(file, data, { encoding: 'utf-8', ...options } as any)
    } catch (e) {
      this.logger.fatal('Error while writing file to "%s": %s', file, e.message)

      throw e
    }
  }

  public async append (file: string, data: string | Buffer): Promise<void> {
    try {
      await fs.appendFile(file, data)
    } catch (e) {
      this.logger.fatal('Error while appending file to "%s": %s', file, e.message)

      throw e
    }
  }

  public appendSync (file: string, data: string | Buffer): void {
    try {
      fs.appendFileSync(file, data)
    } catch (e) {
      this.logger.fatal('Error while appending file to "%s": %s', file, e.message)

      throw e
    }
  }

  public async remove (file: string): Promise<void> {
    const stats = this.stats(file)

    if (stats.isFile()) {
      return this.removeFile(file)
    } else if (stats.isDirectory()) {
      return this.removeDirectory(file)
    }

    throw new Error('Not implemented!')
  }

  public removeSync (file: string): void {
    const stats = this.stats(file)

    if (stats.isFile()) {
      return this.removeFileSync(file)
    } else if (stats.isDirectory()) {
      return this.removeDirectorySync(file)
    }

    throw new Error('Not implemented!')
  }

  public async removeFile (file: string): Promise<void> {
    try {
      if (this.stats(file).isFile()) {
        await fs.unlink(file)
      } else {
        throw new Error('Not a file.')
      }
    } catch (e) {
      this.logger.fatal('Error while deleting file from "%s": %s', file, e.message)

      throw e
    }
  }

  public removeFileSync (file: string): void {
    try {
      if (this.stats(file).isFile()) {
        fs.unlinkSync(file)
      } else {
        throw new Error('Not a file.')
      }
    } catch (e) {
      this.logger.fatal('Error while deleting file from "%s": %s', file, e.message)

      throw e
    }
  }

  public async removeDirectory (directory: string): Promise<void> {
    try {
      if (this.stats(directory).isDirectory()) {
        await fs.emptyDir(directory)
      } else {
        throw new Error('Not a folder.')
      }
    } catch (e) {
      this.logger.fatal('Error while deleting directory from "%s": %s', directory, e.message)

      throw e
    }
  }

  public removeDirectorySync (directory: string): void {
    try {
      if (this.stats(directory).isDirectory()) {
        fs.emptyDirSync(directory)
      } else {
        throw new Error('Not a folder.')
      }
    } catch (e) {
      this.logger.fatal('Error while deleting directory from "%s": %s', directory, e.message)

      throw e
    }
  }
}

export { fs }
