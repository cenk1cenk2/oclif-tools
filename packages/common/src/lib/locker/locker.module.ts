import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import type { LockerModuleAsyncOptions, LockerServiceOptions } from './locker.interface'
import { LockerService } from './locker.service'
import { FileSystemService } from '@lib/fs'
import { LoggerService } from '@lib/logger'
import { ParserService } from '@lib/parser'

@Module({})
export class LockerModule {
  public static forFeature(options: LockerServiceOptions): DynamicModule {
    return LockerModule.forFeatureAsync({ token: options.token, useFactory: () => options })
  }

  public static forFeatureAsync(options: LockerModuleAsyncOptions): DynamicModule {
    const token = options.token ?? LockerService

    return {
      module: LockerModule,
      imports: options.imports,
      providers: [
        {
          provide: token,
          useFactory: async(logger: LoggerService, fs: FileSystemService, parser: ParserService, ...args: any[]) =>
            new LockerService(logger, fs, parser, await options.useFactory(...args)),
          inject: [LoggerService, FileSystemService, ParserService, ...(options.inject ?? [])]
        }
      ],
      exports: [token]
    }
  }
}
