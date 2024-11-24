import type { Command as BaseCommand } from '@oclif/core'

import type { RegisterHook, ShouldRunAfterHook, ShouldRunBeforeHook } from '@interfaces'

export function isHookedWithShouldRunBefore<T extends BaseCommand = BaseCommand>(command: T): command is T & ShouldRunBeforeHook {
  return typeof (command as unknown as ShouldRunBeforeHook).shouldRunBefore === 'function'
}

export function isHookedWithShouldRunAfter<T extends BaseCommand = BaseCommand>(command: T): command is T & ShouldRunAfterHook<any> {
  return typeof (command as unknown as ShouldRunAfterHook).shouldRunAfter === 'function'
}

export function isHookedWithRegister<T extends BaseCommand = BaseCommand>(command: T): command is T & RegisterHook {
  return typeof (command as unknown as RegisterHook).register === 'function'
}
