import { Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { EOL } from 'os'

import { TOKEN_LOGO_GENERATOR } from './logo.constants'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { LogoGeneratorFn } from './logo.interface'
import { ConfigService } from '@lib/config'

@Injectable()
export class LogoService {
  private generator: LogoGeneratorFn

  constructor (
    public readonly cs: ConfigService,
    moduleRef: ModuleRef
  ) {
    try {
      this.generator = moduleRef.get(TOKEN_LOGO_GENERATOR, { strict: false })
    } catch (e) {
      this.generator = function (this: LogoService): void {
        if (this.shouldBeSilent()) {
          return
        }

        this.write(this.cs.oclif.name, 'v' + this.cs.oclif.version)
      }
    }
  }

  public generate (): void {
    return this.generator.call(this)
  }

  public shouldBeSilent (): boolean {
    return this.cs.isJson || this.cs.isSilent
  }

  public write (...data: string[]): void {
    process.stdout.write(data.join(' ') + EOL)
  }
}
