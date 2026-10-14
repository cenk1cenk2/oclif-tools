import type { CommandSchemaInput } from '@cenk1cenk2/oclif-common'
import { LoggerService, TaskManager } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type { helloSchema } from './hello.schema.js'

@Injectable()
export class HelloHandler {
  constructor(
    private readonly logger: LoggerService,
    private readonly tasks: TaskManager
  ) {}

  public async run({ flags, args }: CommandSchemaInput<typeof helloSchema>): Promise<void> {
    this.tasks.add([
      {
        title: 'Greet',
        task: (): void => {
          this.logger.info(`hello ${args.person} from ${flags.from} x${flags.times}${flags.excited ? '!' : ''}`)
        }
      }
    ])

    await this.tasks.runAll()
  }
}
