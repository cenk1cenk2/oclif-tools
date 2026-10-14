import type { ModuleMetadata } from '@nestjs/common'

import type { CommandModuleOptions } from './command'
import type { ConfigModuleOptions } from './config'

export interface CliRuntimeOptions extends ConfigModuleOptions, CommandModuleOptions {}

/** Anything a module can import: a module class, a dynamic module, a promise of one or a forward reference. */
export type CliModuleImport = NonNullable<ModuleMetadata['imports']>[number]
