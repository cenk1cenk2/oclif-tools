import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { TOKEN_LOGGER_MODULE_OPTIONS } from './logger.constants'
import type { LoggerModuleOptions } from './logger.interface'

const { ConfigurableModuleClass } = new ConfigurableModuleBuilder<LoggerModuleOptions>({ optionsInjectionToken: TOKEN_LOGGER_MODULE_OPTIONS as symbol })
  .setClassMethodName('forRoot')
  // the logger of the runtime reads the options, so they are global wherever the command module imports them
  .setExtras({}, (definition) => ({
    ...definition,
    global: true,
    exports: [...(definition.exports ?? []), TOKEN_LOGGER_MODULE_OPTIONS]
  }))
  .build()

/** Holds only the logger options, the logger itself always comes from the runtime. */
@Module({})
export class LoggerOptionsModule extends ConfigurableModuleClass {}
