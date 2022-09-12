import type { Command as BaseCommand } from '@oclif/core'
import type { InferredFlags } from '@oclif/core/lib/interfaces'

export type InferFlags<T extends typeof BaseCommand> = InferredFlags<T['globalFlags'] & T['flags']>

export type InferArgs<T extends typeof BaseCommand> = Record<T['args'][number]['name'], string>

export type { ArgInput, FlagInput, Arg, Flag } from '@oclif/core/lib/interfaces'

export { Flags } from '@oclif/core'
