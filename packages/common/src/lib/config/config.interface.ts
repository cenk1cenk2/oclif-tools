import { Transform } from 'class-transformer'
import { IsEnum } from 'class-validator'

import { LogLevels } from '@utils/logger'

export class BaseConfig {
  @Transform((p) => p.value.toUpperCase())
  @IsEnum(LogLevels)
    loglevel: LogLevels
}
