import type { LogoService } from './logo.service'

export type LogoGeneratorFn = (this: LogoService) => void

export interface LogoModuleOptions {
  generator?: LogoGeneratorFn
}
