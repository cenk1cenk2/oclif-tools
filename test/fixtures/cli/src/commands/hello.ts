import { Args, Command, Flags, UseHandler, schemaFlag } from '@cenk1cenk2/oclif-common'
import { z } from 'zod'

import { HelloHandler } from '../modules/hello/hello.handler.js'
import { HelloModule } from '../modules/hello/hello.module.js'

@UseHandler({ module: HelloModule, handler: HelloHandler })
export default class Hello extends Command {
  static description = 'Say hello'

  static flags = {
    from: Flags.string({ char: 'f', description: 'Whom is saying hello', default: 'fixture' }),
    times: schemaFlag(z.coerce.number().int().positive())({ description: 'How many times to say hello', default: 1 })
  }

  static args = {
    person: Args.string({ description: 'Person to say hello to', default: 'world' })
  }
}
