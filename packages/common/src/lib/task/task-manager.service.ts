import { Manager } from '@listr2/manager'
import { Injectable } from '@nestjs/common'
import type { ListrContext } from 'listr2'

import { ConfigService } from '@lib/config'

@Injectable()
export class TaskManager<Ctx extends ListrContext = ListrContext> extends Manager<Ctx> {
  constructor(cs: ConfigService) {
    super({
      fallbackRendererCondition: cs.isDebug,
      silentRendererCondition: cs.isSilent || cs.isJson,
      ctx: {} as Ctx
    })
  }
}
