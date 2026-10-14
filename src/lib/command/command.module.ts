import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { CommandContext } from './command.context'
import type { CommandModuleOptions } from './command.interface'

@Global()
@Module({})
export class CommandModule {
  public static forRoot(options: CommandModuleOptions): DynamicModule {
    return {
      module: CommandModule,
      providers: [
        {
          provide: CommandContext,
          useValue: options.context
        }
      ],
      exports: [CommandContext]
    }
  }
}
