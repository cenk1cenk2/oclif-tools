import { Args, Command, Flags, UseHandler } from '@cenk1cenk2/oclif-common'

import { HelloHandler } from '../modules/hello/hello.handler.js'
import { HelloModule } from '../modules/hello/hello.module.js'
import { helloSchema } from '../modules/hello/hello.schema.js'

@UseHandler({ module: HelloModule, handler: HelloHandler, schema: helloSchema })
export default class Hello extends Command {
  static description = 'Say hello'

  static flags = {
    from: Flags.string({ char: 'f', description: 'Whom is saying hello', default: 'fixture' }),
    times: Flags.integer({ description: 'How many times to say hello', default: 1 }),
    excited: Flags.boolean({ description: 'Say it excitedly', default: false })
  }

  static args = {
    person: Args.string({ description: 'Person to say hello to', default: 'world' })
  }
}
