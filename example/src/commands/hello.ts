import { HelloHandler } from '../modules/hello/hello.handler.js'
import { HelloModule } from '../modules/hello/hello.module.js'
import { Args, Command, Flags } from '@cenk1cenk2/oclif-common'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = ['$ oclif2 hello friend --from oclif']

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
