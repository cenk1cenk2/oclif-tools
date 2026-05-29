import type { Command, Interfaces } from '@oclif/core'

export type InferFlags<T extends typeof Command> = Interfaces.InferredFlags<(typeof Command)['baseFlags'] & T['flags']>
export type InferArgs<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export type { Arg, ArgInput, Flag, FlagInput, InferredFlags } from '@oclif/core/interfaces'

export { Flags, Args } from '@oclif/core'
