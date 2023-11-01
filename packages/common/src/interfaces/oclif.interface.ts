import type { Command, Interfaces } from '@oclif/core'

export type InferFlags<T extends typeof Command> = Interfaces.InferredFlags<(typeof Command)['baseFlags'] & T['flags']>
export type InferArgs<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export type { Flag, InferredFlags } from '@oclif/core/lib/interfaces'
export type { ArgInput, FlagInput, Arg } from '@oclif/core/lib/interfaces/parser'

export { Flags, Args } from '@oclif/core'
