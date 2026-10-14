import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { LogoService } from './logo.service'

@Module({
  providers: [LogoService],
  exports: [LogoService]
})
export class LogoModule
  extends new ConfigurableModuleBuilder<LogoModuleOptions>({ optionsInjectionToken: TOKEN_LOGO_MODULE_OPTIONS as symbol })
    .setClassMethodName('forRoot')
    .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
    .build().ConfigurableModuleClass {
  public static forRoot(options: LogoModuleOptions & { isGlobal?: boolean } = {}): DynamicModule {
    return super.forRoot(options)
  }
}
