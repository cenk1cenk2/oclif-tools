import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { ValidatorService } from './validator.service'
import { buildScopedModule } from '@lib/scoped-module'
import type { ScopedModuleExtras } from '@lib/scoped-module.interface'

const { ConfigurableModuleClass } = buildScopedModule<Record<never, never>>()

@Module({
  providers: [ValidatorService],
  exports: [ValidatorService]
})
export class ValidatorModule extends ConfigurableModuleClass {
  public static forRoot(options: Partial<ScopedModuleExtras> = {}): DynamicModule {
    return super.forRoot(options)
  }
}
