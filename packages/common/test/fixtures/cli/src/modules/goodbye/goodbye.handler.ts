import type { CommandHandler, CommandInput } from '@cenk1cenk2/oclif-common'
import { LoggerService } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type Goodbye from '../../commands/goodbye.js'

@Injectable()
export class GoodbyeHandler implements CommandHandler<typeof Goodbye> {
  constructor(private readonly logger: LoggerService) {}

  public async run({ args }: CommandInput<typeof Goodbye>): Promise<void> {
    this.logger.info(`goodbye ${args.person}`)
  }
}
