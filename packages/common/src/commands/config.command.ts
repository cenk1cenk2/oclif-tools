import type { ListrContext } from 'listr2'

import { Command } from './base.command'
import { CLI_FLAGS } from '@constants'
import type { ConfigCommandChoices, ConfigCommandSetup, InferArgs, InferFlags } from '@interfaces'
import type { LockerService } from '@lib'
import { CliUx } from '@utils'

export class ConfigCommand<
  CommandChoices extends string = string,
  LockFile = any,
  Ctx extends ListrContext = ListrContext,
  Flags extends Record<PropertyKey, any> = InferFlags<typeof ConfigCommand>,
  Args extends Record<PropertyKey, any> = InferArgs<typeof ConfigCommand>,
  Store extends Record<PropertyKey, any> = Record<PropertyKey, any>
> extends Command<Ctx, Flags, Args, Store> {
  static globalFlags = CLI_FLAGS

  public choices: ConfigCommandChoices<CommandChoices>
  public locker: LockerService<LockFile>

  protected ux = CliUx.ux

  public async run (): Promise<void> {
    this.logger.stage('Setting up config command.')
    const setup = await this.setup()

    this.choices = setup.choices
    this.locker = setup.locker

    this.logger.stage('User selection for configuration.')
    const response = await this.select()

    this.logger.stage('Will run selection: %s', response)

    return this.choices[response]()
  }

  public setup (): ConfigCommandSetup<CommandChoices, LockFile> | Promise<ConfigCommandSetup<CommandChoices, LockFile>> {
    throw new Error('The command should be setup first!')
  }

  protected table (...options: Parameters<typeof CliUx.ux.table>): void {
    this.ux.table(...options)
  }

  protected async select (): Promise<string> {
    // prompt user for the action
    const response: string = await this.prompt({
      type: 'Select',
      message: 'Please select what to do with the configuration.',
      choices: Object.keys(this.choices)
    })

    return response
  }
}
