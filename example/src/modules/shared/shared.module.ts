import { Module } from '@nestjs/common'

import { LogLevels, LoggerModule, LogoModule, TaskModule } from '@cenk1cenk2/oclif-common'

@Module({
  imports: [LoggerModule.forRoot({ stderr: [LogLevels.FATAL, LogLevels.ERROR, LogLevels.WARN] }), LogoModule.forRoot(), TaskModule.forRoot()]
})
export class SharedModule {}
