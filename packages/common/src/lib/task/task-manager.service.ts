import { Manager } from '@listr2/manager'
import { Inject, Injectable } from '@nestjs/common'
import type { ListrContext } from 'listr2'

import { TOKEN_TASK_MODULE_OPTIONS } from './task.constants'
import type { TaskModuleOptions } from './task.interface'
import { ConfigService } from '@lib/config'

@Injectable()
export class TaskManager<Ctx extends ListrContext = ListrContext> extends Manager<Ctx> {
  constructor(cs: ConfigService, @Inject(TOKEN_TASK_MODULE_OPTIONS) options: TaskModuleOptions) {
    super({
      fallbackRendererCondition: cs.isDebug,
      silentRendererCondition: cs.isSilent || cs.isJson,
      ctx: {} as Ctx,
      ...options
    })
  }
}
