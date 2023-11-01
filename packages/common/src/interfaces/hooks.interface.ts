import type { DynamicModule } from '@nestjs/common'

import type { CliModuleOptions } from '@lib'

export declare class ShouldRunBeforeHook {
  public shouldRunBefore (): void | Promise<void>
}

export declare class ShouldRunAfterHook<Ctx> {
  public shouldRunAfter (ctx: Ctx): void | Promise<void>
}

export declare class RegisterHook {
  public register (cli: DynamicModule, options: CliModuleOptions): DynamicModule | Promise<DynamicModule>
}
