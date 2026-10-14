import { HelloHandler } from './index.handler.js'
import { HelloModule } from './index.module.js'
import { Args, Command, Flags } from '@cenk1cenk2/oclif-common'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = ['$ oex hello friend --from oclif']

  static module = HelloModule

  static handler = HelloHandler

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
}
