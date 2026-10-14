import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { EOL } from 'os'

import { TOKEN_LOGO_GENERATOR } from './logo.constants'
import type { LogoGeneratorFn } from './logo.interface'
import { ConfigService } from '@lib/config'
import type { LoggerModuleOptions } from '@lib/logger'
import { TOKEN_LOGGER_MODULE_OPTIONS } from '@lib/logger/logger.constants'

@Injectable()
export class LogoService implements OnModuleInit {
  private generator: LogoGeneratorFn

  constructor(
    public readonly cs: ConfigService,
    private readonly moduleRef: ModuleRef,
    @Inject(TOKEN_LOGGER_MODULE_OPTIONS) private readonly options: LoggerModuleOptions
  ) {}

  public async onModuleInit(): Promise<void> {
    try {
      this.generator = this.moduleRef.get(TOKEN_LOGO_GENERATOR, { strict: false })
    } catch {
      this.generator = function(this: LogoService): void {
        if (this.shouldBeSilent()) {
          return
        }

        const logo = this.cs.oclif.name + ' ' + 'v' + this.cs.oclif.version

        this.write(logo)
        this.write('-'.repeat(logo.length))
      }
    }
  }

  public generate(): void {
    return this.generator.call(this)
  }

  public shouldBeSilent(): boolean {
    return this.cs.isJson || this.cs.isSilent
  }

  public write(...data: string[]): void {
    const stream = this.options.stderr ? process.stderr : process.stdout

    stream.write(data.join(' ') + EOL)
  }
}
