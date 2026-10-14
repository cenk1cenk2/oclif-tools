import type { Command, Interfaces } from '@oclif/core'

export type InferFlags<T extends Pick<typeof Command, 'baseFlags' | 'flags'>> = Interfaces.InferredFlags<T['baseFlags'] & T['flags']>
export type InferArgs<T extends Pick<typeof Command, 'args'>> = Interfaces.InferredArgs<T['args']>

export type { Arg, ArgInput, Flag, FlagInput, InferredFlags } from '@oclif/core/interfaces'

export { Flags, Args } from '@oclif/core'
