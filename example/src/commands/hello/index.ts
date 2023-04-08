import { Args, Flags } from '@oclif/core'

import type { InferArgs, InferFlags } from '@cenk1cenk2/oclif-common'
import { Command } from '@cenk1cenk2/oclif-common'

export default class Hello extends Command<any, InferFlags<typeof Hello>, InferArgs<typeof Hello>> {
  static description = 'Say hello'

  static examples = [ '$ oex hello friend --from oclif' ]

  static flags = {
    from: Flags.string({
      char: 'f',
      description: 'Whom is saying hello',
      required: false
    })
  }

  static args = {
    person: Args.string({
      description: 'Person to say hello to',
      required: false
    })
  }

  public async run (): Promise<void> {
    this.logger.info(`hello ${this.args.person} from ${this.flags.from}! (./src/commands/hello/index.ts)`)

    this.tasks.add([
      {
        task: (_, task): void => {
          task.output = 'doing something'

          task.title = 'Test task'
        }
      }
    ])
  }
}
