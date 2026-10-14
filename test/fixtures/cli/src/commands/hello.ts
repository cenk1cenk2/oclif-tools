import { Args, Command, Flags, UseHandler } from '@cenk1cenk2/oclif-common'

import { HelloHandler } from '../modules/hello/hello.handler.js'
import { HelloModule } from '../modules/hello/hello.module.js'
import { helloSchema } from '../modules/hello/hello.schema.js'

@UseHandler({ module: HelloModule, handler: HelloHandler, schema: helloSchema })
export default class Hello extends Command {
  static description = 'Say hello'

  static flags = {
    from: Flags.string({ char: 'f' }),
    times: Flags.integer(),
    excited: Flags.boolean({ description: 'Say it excitedly' })
  }

  static args = {
    person: Args.string()
  }
}
