import type { ConfigurableModuleHost, InjectionToken } from '@nestjs/common'
import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { ScopedModuleExtras } from './scoped-module.interface'

/** Builds the forRoot of an opt-in module, which stays local to the module that imports it unless it is registered with isGlobal. */
export function buildScopedModule<T>(token?: InjectionToken): ConfigurableModuleHost<T, 'forRoot', 'create', ScopedModuleExtras> {
  return new ConfigurableModuleBuilder<T>(token ? { optionsInjectionToken: token as symbol } : {})
    .setClassMethodName('forRoot')
    .setExtras<ScopedModuleExtras>({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
    .build()
}
