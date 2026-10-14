import type { CommandHandler, CommandInput } from '@cenk1cenk2/oclif-common'
import { TaskManager } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type Signal from '../../commands/signal.js'

@Injectable()
export class SignalHandler implements CommandHandler<typeof Signal> {
  constructor(private readonly tasks: TaskManager) {}

  public async run({ signal }: CommandInput<typeof Signal>): Promise<void> {
    this.tasks.add([
      {
        title: 'Wait for the signal',
        task: async (): Promise<void> => {
          process.stdout.write('READY\n')

          // the interval stands for the work of the task, which keeps the process alive until the signal arrives
          await new Promise<void>((resolve) => {
            const work = setInterval(() => {}, 1000)

            signal.addEventListener('abort', () => {
              clearInterval(work)
              resolve()
            })
          })
          await new Promise((resolve) => setTimeout(resolve, 100))

          process.stdout.write('TASK DONE\n')
        }
      }
    ])

    await this.tasks.runAll()
  }
}
