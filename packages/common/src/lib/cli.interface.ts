import type { LoggerModuleOptions } from './logger'
import type { LogoModuleOptions } from './logo'
import type { ParserModuleOptions } from './parser'

export interface CliModuleOptions {
  logger?: LoggerModuleOptions
  parser?: ParserModuleOptions
  logo?: LogoModuleOptions
}
