import { Module } from '@nestjs/common'

import { ConfigurableLoggerOptionsModule } from './logger.module-definition'

/** Holds only the logger options, the logger itself always comes from the runtime. */
@Module({})
export class LoggerOptionsModule extends ConfigurableLoggerOptionsModule {}
