import { Inject, Injectable } from '@nestjs/common'
import { EOL } from 'os'

import { TOKEN_LOGO_MODULE_OPTIONS } from './logo.constants'
import type { LogoModuleOptions } from './logo.interface'
import { ConfigService } from '@lib/config'
import type { LoggerModuleOptions } from '@lib/logger'
import { TOKEN_LOGGER_MODULE_OPTIONS } from '@lib/logger/logger.constants'

@Injectable()
export class LogoService {
  constructor(
    public readonly cs: ConfigService,
    @Inject(TOKEN_LOGO_MODULE_OPTIONS) private readonly options: LogoModuleOptions,
    @Inject(TOKEN_LOGGER_MODULE_OPTIONS) private readonly loggerOptions: LoggerModuleOptions
  ) {}

  public generate(): void {
    return (this.options.generator ?? this.fallback).call(this)
  }

  public shouldBeSilent(): boolean {
    return this.cs.isJson || this.cs.isSilent
  }

  public write(...data: string[]): void {
    const stream = this.loggerOptions.stderr ? process.stderr : process.stdout

    stream.write(data.join(' ') + EOL)
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
