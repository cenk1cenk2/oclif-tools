import { Args, Command, Flags, UseHandler } from '@cenk1cenk2/oclif-common'

import { GoodbyeHandler } from '../modules/goodbye/goodbye.handler.js'
import { GoodbyeModule } from '../modules/goodbye/goodbye.module.js'
import { goodbyeSchema } from '../modules/goodbye/goodbye.schema.js'

@UseHandler({ module: GoodbyeModule, handler: GoodbyeHandler, schema: goodbyeSchema })
export default class Goodbye extends Command {
  static description = 'Say goodbye'

  static flags = {
    tone: Flags.string({ char: 't' })
  }

  static args = {
    person: Args.string()
  }
}
