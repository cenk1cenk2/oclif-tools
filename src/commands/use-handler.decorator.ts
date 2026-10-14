import type { Command } from './base.command'
import { TOKEN_USE_HANDLER } from './base.command.constants'
import type { CommandHandler, CommandInput, UseHandlerOptions } from './base.command.interface'

/** Requires the handler to take exactly the input of the command, naming the mismatch in the type error of a handler written for another command. */
type HandlerFor<C extends typeof Command, H extends CommandHandler<any>> = [CommandInput<C>] extends [Parameters<H['run']>[0]]
  ? [Parameters<H['run']>[0]] extends [CommandInput<C>]
    ? unknown
    : HandlerMismatch
  : HandlerMismatch

interface HandlerMismatch {
  useHandler: 'the handler takes the flags and args of another command'
}

/** Registers the module a command boots and the handler that runs it. */
export function UseHandler<H extends CommandHandler<any>>(options: UseHandlerOptions<H>) {
  return <C extends typeof Command>(target: C & HandlerFor<C, H>): void => {
    Reflect.defineMetadata(TOKEN_USE_HANDLER, options, target)
  }
}
