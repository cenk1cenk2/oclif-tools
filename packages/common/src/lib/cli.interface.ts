import type { CommandModuleOptions } from './command'
import type { ConfigModuleOptions } from './config'

export interface CliRuntimeOptions extends ConfigModuleOptions, CommandModuleOptions {}
