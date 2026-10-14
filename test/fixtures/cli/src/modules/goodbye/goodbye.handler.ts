import type { CommandSchemaInput } from '@cenk1cenk2/oclif-common'
import { LoggerService } from '@cenk1cenk2/oclif-common'
import { Injectable } from '@nestjs/common'

import type { goodbyeSchema } from './goodbye.schema.js'

@Injectable()
export class GoodbyeHandler {
  constructor(private readonly logger: LoggerService) {}

  public async run({ flags, args }: CommandSchemaInput<typeof goodbyeSchema>): Promise<void> {
    this.logger.info(`goodbye ${args.person}${flags.tone === 'casual' ? ', see you' : ''}`)
  }
}
