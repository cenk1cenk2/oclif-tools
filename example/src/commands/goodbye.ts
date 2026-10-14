import { GoodbyeHandler } from '../modules/goodbye/goodbye.handler.js'
import { GoodbyeModule } from '../modules/goodbye/goodbye.module.js'
import { Args, Command } from '@cenk1cenk2/oclif-common'

export default class Goodbye extends Command {
  static description = 'Say goodbye'

  static examples = ['$ oclif2 goodbye friend']

  static module = GoodbyeModule

  static handler = GoodbyeHandler

  static args = {
    person: Args.string({
      description: 'Person to say goodbye to',
      default: 'world'
    })
  }
}
