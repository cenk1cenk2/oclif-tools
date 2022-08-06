import { IsEnum } from 'class-validator'

import { LogLevels } from '@utils/logger'

export class BaseConfig {
  @IsEnum(LogLevels)
    loglevel: LogLevels
}
