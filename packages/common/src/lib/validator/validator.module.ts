import { ConfigurableModuleBuilder, Global, Module } from '@nestjs/common'

import { TOKEN_VALIDATOR_MODULE_OPTIONS } from './validator.constants'
import type { ValidatorModuleOptions } from './validator.interface'
import { ValidatorService } from './validator.service'

@Global()
@Module({
  providers: [ValidatorService],
  exports: [ValidatorService]
})
export class ValidatorModule
  extends new ConfigurableModuleBuilder<ValidatorModuleOptions>({ optionsInjectionToken: TOKEN_VALIDATOR_MODULE_OPTIONS as symbol }).setClassMethodName('forRoot').build()
    .ConfigurableModuleClass {}
