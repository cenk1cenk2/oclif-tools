import type { OnApplicationBootstrap } from '@nestjs/common'
import { Inject, Injectable } from '@nestjs/common'
import type { Config } from '@oclif/core'
import { EOL } from 'os'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { TOKEN_OCLIF_CONFIG } from '@lib/command/command.constants'
import { ConfigService } from '@lib/config'
import { LogLevels, LoggerService } from '@lib/logger'

@Injectable()
export class LogoService implements OnApplicationBootstrap {
  constructor(
    public readonly cs: ConfigService,
    @Inject(TOKEN_OCLIF_CONFIG) public readonly oclif: Config,
    @Inject(TOKEN_LOGO_MODULE_OPTIONS) private readonly options: LogoModuleOptions,
    private readonly logger: LoggerService
  ) {}

  public onApplicationBootstrap(): void {
    this.generate()
  }

  public generate(): void {
    return (this.options.generator ?? this.fallback).call(this)
  }

  public shouldBeSilent(): boolean {
    return this.cs.isJson || this.cs.isSilent
  }

  public write(...data: string[]): void {
    this.logger.stream(LogLevels.INFO).write(data.join(' ') + EOL)
  }

  private fallback(this: LogoService): void {
    if (this.shouldBeSilent()) {
      return
    }

    const logo = this.oclif.name + ' ' + 'v' + this.oclif.version

    this.write(logo)
    this.write('-'.repeat(logo.length))
  }
}
