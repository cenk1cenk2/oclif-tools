import { ConfigurableModuleBuilder } from '@nestjs/common'

import type { LoggerModuleOptions } from './logger.interface'

export const { ConfigurableModuleClass: ConfigurableLoggerOptionsModule, MODULE_OPTIONS_TOKEN: TOKEN_LOGGER_MODULE_OPTIONS } = new ConfigurableModuleBuilder<LoggerModuleOptions>()
  .setClassMethodName('forRoot')
  // the logger of the runtime reads the options, so they are global wherever the command module imports them
  .setExtras({}, (definition) => ({
    ...definition,
    global: true,
    exports: [...(definition.exports ?? []), TOKEN_LOGGER_MODULE_OPTIONS]
  }))
  .build()
