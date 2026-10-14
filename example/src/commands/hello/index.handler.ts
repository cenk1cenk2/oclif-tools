import { Injectable } from '@nestjs/common'

import type Hello from './index.js'
import type { CommandHandler, CommandInput } from '@cenk1cenk2/oclif-common'
import { LoggerService, TaskManager } from '@cenk1cenk2/oclif-common'

@Injectable()
export class HelloHandler implements CommandHandler<typeof Hello> {
  constructor(
    private readonly logger: LoggerService,
    private readonly tasks: TaskManager
  ) {}

  public async run({ flags, args }: CommandInput<typeof Hello>): Promise<void> {
    this.logger.info(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.handler.ts)`)

    this.tasks.add([
      {
        title: 'Test task',
        task: (_, task): void => {
          task.output = 'doing something'
        }
      }
    ])

    await this.tasks.runAll()
  }
}
