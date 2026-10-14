import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { TOKEN_COMMAND_ARGS, TOKEN_COMMAND_FLAGS, TOKEN_CONFIG_MODULE_OPTIONS } from './config.constants'
import type { ConfigModuleOptions } from './config.interface'
import { ConfigService } from './config.service'

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {
  public static forRoot(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: TOKEN_CONFIG_MODULE_OPTIONS,
          useValue: options
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
      exports: [TOKEN_CONFIG_MODULE_OPTIONS, TOKEN_COMMAND_FLAGS, TOKEN_COMMAND_ARGS]
    }
  }
}
