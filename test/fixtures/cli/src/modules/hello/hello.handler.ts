import type { CommandHandler, CommandInput } from '@cenk1cenk2/oclif-common'
import { LoggerService, TaskManager } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type Hello from '../../commands/hello.js'

@Injectable()
export class HelloHandler implements CommandHandler<typeof Hello> {
  constructor(
    private readonly logger: LoggerService,
    private readonly tasks: TaskManager
  ) {}

  public async run({ flags, args }: CommandInput<typeof Hello>): Promise<void> {
    this.tasks.add([
      {
        title: 'Greet',
        task: (): void => {
          this.logger.info(`hello ${args.person} from ${flags.from} x${flags.times}`)
        }
      }
    ])

    await this.tasks.runAll()
  }
}
