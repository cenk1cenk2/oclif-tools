import { LogLevels, LoggerModule, LogoModule, TaskModule } from '@cenk1cenk2/oclif-common'
import { Module } from '@nestjs/common'

@Module({
  imports: [LoggerModule.forRoot({ stderr: [LogLevels.FATAL, LogLevels.ERROR, LogLevels.WARN] }), LogoModule.forRoot(), TaskModule.forRoot()],
  exports: [TaskModule]
})
export class SharedModule {}
