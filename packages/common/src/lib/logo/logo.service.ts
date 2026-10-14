import { Inject, Injectable } from '@nestjs/common'
import { EOL } from 'os'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { ConfigService } from '@lib/config'
import { LogLevels, LoggerService } from '@lib/logger'

@Injectable()
export class LogoService {
  constructor(
    public readonly cs: ConfigService,
    @Inject(TOKEN_LOGO_MODULE_OPTIONS) private readonly options: LogoModuleOptions,
    private readonly logger: LoggerService
  ) {}

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

    const logo = this.cs.oclif.name + ' ' + 'v' + this.cs.oclif.version

    this.write(logo)
    this.write('-'.repeat(logo.length))
  }
}
