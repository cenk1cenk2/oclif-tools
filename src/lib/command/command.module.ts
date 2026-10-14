import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { TOKEN_COMMAND, TOKEN_COMMAND_ARGS, TOKEN_COMMAND_FLAGS, TOKEN_OCLIF_CONFIG } from './command.constants'
import type { CommandModuleOptions } from './command.interface'

@Global()
@Module({})
export class CommandModule {
  public static forRoot(options: CommandModuleOptions): DynamicModule {
    return {
      module: CommandModule,
      providers: [
        {
          provide: TOKEN_OCLIF_CONFIG,
          useValue: options.oclif
        },
        {
          provide: TOKEN_COMMAND,
          useValue: options.command
        },
        {
          provide: TOKEN_COMMAND_FLAGS,
          useValue: options.flags ?? {}
        },
        {
          provide: TOKEN_COMMAND_ARGS,
          useValue: options.args ?? {}
        }
      ],
      exports: [TOKEN_OCLIF_CONFIG, TOKEN_COMMAND, TOKEN_COMMAND_FLAGS, TOKEN_COMMAND_ARGS]
    }
  }
}
