import { Flags } from '@oclif/core'

import { Command } from '@cenk1cenk2/oclif-common'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [ '$ oex hello friend --from oclif' ]

  static flags = {
    from: Flags.string({
      char: 'f',
      description: 'Whom is saying hello',
      required: false
    })
  }

  static args = [
    {
      name: 'person',
      description: 'Person to say hello to',
      required: false
    }
  ]

  public async run (): Promise<void> {
    const { args, flags } = await this.parse(Hello)

    this.logger.info(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
