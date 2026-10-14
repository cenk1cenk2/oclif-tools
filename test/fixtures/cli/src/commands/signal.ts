import { Command, UseHandler } from '@cenk1cenk2/oclif-common'

import { SignalHandler } from '../modules/signal/signal.handler.js'
import { SignalModule } from '../modules/signal/signal.module.js'

@UseHandler({ module: SignalModule, handler: SignalHandler })
export default class Signal extends Command {
  static description = 'Wait for a signal in a task'

  static hidden = true
}
