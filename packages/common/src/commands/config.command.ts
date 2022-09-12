import type { ListrContext } from 'listr2'

import { Command as BaseCommand } from './base.command'
import type { ConfigCommandChoices, ConfigCommandSetup } from '@interfaces'
import type { LockerService } from '@lib'

export abstract class ConfigCommand<CommandChoices extends string = string, LockFile = any, Ctx extends ListrContext = ListrContext> extends BaseCommand<Ctx> {
  public choices: ConfigCommandChoices<CommandChoices>
  public locker: LockerService<LockFile>

  public async run (): Promise<void> {
    const setup = await this.setup()

    this.choices = setup.choices
    this.locker = setup.locker

    await this.generate()
  }

  private async generate (): Promise<void> {
    // prompt user for the action
    const response: string = await this.prompt({
      type: 'Select',
      message: 'Please select what to do with the configuration.',
      choices: Object.keys(this.choices)
    })

    return this.choices[response]()
  }

  public abstract setup (): ConfigCommandSetup<CommandChoices, LockFile> | Promise<ConfigCommandSetup<CommandChoices, LockFile>>
}
