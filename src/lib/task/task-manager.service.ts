import { Manager } from '@listr2/manager'
import { Inject, Injectable } from '@nestjs/common'
import type { ListrContext } from 'listr2'

import type { TaskModuleOptions } from './task.interface'
import { TOKEN_TASK_MODULE_OPTIONS } from './task.module-definition'
import { ConfigService } from '@lib/config'

@Injectable()
export class TaskManager<Ctx extends ListrContext = ListrContext> extends Manager<Ctx> {
  constructor(cs: ConfigService, @Inject(TOKEN_TASK_MODULE_OPTIONS) options: TaskModuleOptions) {
    super({
      fallbackRendererCondition: cs.isDebug,
      silentRendererCondition: cs.isSilent || cs.isJson,
      ctx: {} as Ctx,
      // the command handles signals, listr would exit the process in the middle of it
      registerSignalListeners: false,
      ...options
    })
  }
}
