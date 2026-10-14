import type { Command, Config } from '@oclif/core'

export interface CommandModuleOptions {
  oclif: Config
  command?: typeof Command
  flags?: Record<string, any>
  args?: Record<string, any>
}
