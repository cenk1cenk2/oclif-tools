import type { Command as BaseCommand } from '@oclif/core'
import type { InferredFlags } from '@oclif/core/lib/interfaces'

export type InferFlags<T extends typeof BaseCommand> = InferredFlags<T['baseFlags'] & T['flags']>

export type InferArgs<T extends typeof BaseCommand> = Record<T['args'][number]['name'], string>

export type { Flag, InferredFlags } from '@oclif/core/lib/interfaces'
export type { ArgInput, FlagInput, Arg } from '@oclif/core/lib/interfaces/parser'

export { Flags } from '@oclif/core'
