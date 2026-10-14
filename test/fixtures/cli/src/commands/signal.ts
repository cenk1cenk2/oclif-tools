import { Command } from '@cenk1cenk2/oclif-common'

import { SignalHandler } from '../modules/signal/signal.handler.js'
import { SignalModule } from '../modules/signal/signal.module.js'

export default class Signal extends Command {
  static description = 'Wait for a signal in a task'

  static hidden = true

  static module = SignalModule

  static handler = SignalHandler
}
