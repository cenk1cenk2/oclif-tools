import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import type { LockerServiceOptions } from './locker.interface'
import { LockerService } from './locker.service'
import { FileSystemService } from '@lib/fs'
import { LoggerService } from '@lib/logger'
import { ParserService } from '@lib/parser'

@Module({})
export class LockerModule {
  public static forFeature(options: LockerServiceOptions): DynamicModule {
    const token = options.token ?? LockerService

    return {
      module: LockerModule,
      providers: [
        {
          provide: token,
          useFactory: (logger: LoggerService, fs: FileSystemService, parser: ParserService) => new LockerService(logger, fs, parser, options),
          inject: [LoggerService, FileSystemService, ParserService]
        }
      ]
    }
  }
}
