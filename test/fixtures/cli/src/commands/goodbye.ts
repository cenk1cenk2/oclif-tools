import { Args, Command, UseHandler } from '@cenk1cenk2/oclif-common'

import { GoodbyeHandler } from '../modules/goodbye/goodbye.handler.js'
import { GoodbyeModule } from '../modules/goodbye/goodbye.module.js'

@UseHandler({ module: GoodbyeModule, handler: GoodbyeHandler })
export default class Goodbye extends Command {
  static description = 'Say goodbye'

  static args = {
    person: Args.string({ description: 'Person to say goodbye to', default: 'world' })
  }
}
