import { Args, Command, Flags } from '@cenk1cenk2/oclif-common'

import { HelloHandler } from '../modules/hello/hello.handler.js'
import { HelloModule } from '../modules/hello/hello.module.js'

export default class Hello extends Command {
  static description = 'Say hello'

  static module = HelloModule

  static handler = HelloHandler

  static flags = {
    from: Flags.string({ char: 'f', description: 'Whom is saying hello', default: 'fixture' })
  }

  static args = {
    person: Args.string({ description: 'Person to say hello to', default: 'world' })
  }
}
