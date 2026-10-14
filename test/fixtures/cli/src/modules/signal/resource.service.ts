import type { OnModuleDestroy } from '@nestjs/common'
import { Injectable } from '@nestjs/common'

@Injectable()
export class Resource implements OnModuleDestroy {
  public onModuleDestroy(): void {
    process.stdout.write('DESTROYED\n')
  }
}
