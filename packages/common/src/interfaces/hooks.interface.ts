import type { DynamicModule } from '@nestjs/common'
import type { ListrContext } from 'listr2'

import type { CliModuleOptions } from '@lib'

export declare class ShouldRunBeforeHook {
  public shouldRunBefore(): void | Promise<void>
}

export declare class ShouldRunAfterHook<Ctx extends ListrContext = ListrContext> {
  public shouldRunAfter(ctx: Ctx): void | Promise<void>
}

export declare class RegisterHook {
  public register(cli: DynamicModule, options: CliModuleOptions): DynamicModule | Promise<DynamicModule>
}
