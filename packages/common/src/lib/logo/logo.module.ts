import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { LogoService } from './logo.service'

const { ConfigurableModuleClass } = new ConfigurableModuleBuilder<LogoModuleOptions>({ optionsInjectionToken: TOKEN_LOGO_MODULE_OPTIONS as symbol })
  .setClassMethodName('forRoot')
  .build()

@Module({
  providers: [LogoService],
  exports: [LogoService]
})
export class LogoModule extends ConfigurableModuleClass {
  public static forRoot(options: LogoModuleOptions = {}): DynamicModule {
    return super.forRoot(options)
  }
}
