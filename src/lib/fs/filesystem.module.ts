import type { DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'

import { FileSystemService } from './filesystem.service'
import { buildScopedModule } from '@lib/scoped-module'
import type { ScopedModuleExtras } from '@lib/scoped-module.interface'

const { ConfigurableModuleClass } = buildScopedModule<Record<never, never>>()

@Module({
  providers: [FileSystemService],
  exports: [FileSystemService]
})
export class FilesystemModule extends ConfigurableModuleClass {
  public static forRoot(options: Partial<ScopedModuleExtras> = {}): DynamicModule {
    return super.forRoot(options)
  }
}
