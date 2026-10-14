import type { DynamicModule } from '@nestjs/common'
import { ConfigurableModuleBuilder, Module } from '@nestjs/common'

import { FileSystemService } from './filesystem.service'

@Module({
  providers: [FileSystemService],
  exports: [FileSystemService]
})
export class FilesystemModule
  extends new ConfigurableModuleBuilder<Record<never, never>>()
    .setClassMethodName('forRoot')
    .setExtras({ isGlobal: false }, (definition, extras) => ({ ...definition, global: extras.isGlobal }))
    .build().ConfigurableModuleClass {
  public static forRoot(options: { isGlobal?: boolean } = {}): DynamicModule {
    return super.forRoot(options)
  }
}
