import type { DynamicModule } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'

import { TOKEN_CONFIG_MODULE_OPTIONS } from './config.constants'
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
        }
      ],
      exports: [TOKEN_CONFIG_MODULE_OPTIONS]
    }
  }
}
