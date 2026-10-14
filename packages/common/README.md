# @cenk1cenk2/oclif-common

Oclif common package for [oclif2](https://github.com/oclif/core) projects.

Shared building blocks for oclif-based CLIs: base commands, hooks, interfaces and utility helpers that the CLIs in this organisation compose instead of re-implementing.

## Install

```sh
pnpm add @cenk1cenk2/oclif-common
```

The package is ESM-only. Node.js >= 24 is required.

## Usage

Extend the exported base command and its modules. The `commands/` and `lib/` exports cover the shared command and the DI container setup used across the CLIs built on this package.

### Plugin

The package is also an oclif plugin that registers a `command_not_found` hook, which reports the unknown command and prints the help. Enable it by listing the package in the plugins of your CLI's `package.json`:

```json
{
  "oclif": {
    "plugins": ["@cenk1cenk2/oclif-common"]
  }
}
```

### Modules and services

Every command boots a NestJS application context from its `static module`, which defaults to `CliModule.forRoot()`. Declare your own root module to configure the shared modules and add your own, and read the running command in module factories from the global `CommandModule`: parsed flags through `TOKEN_COMMAND_FLAGS`, arguments through `TOKEN_COMMAND_ARGS`, the oclif `Config` through `TOKEN_OCLIF_CONFIG` and the command class through `TOKEN_COMMAND`. Services reach the command through `@Inject()` properties, `@Optional()` ones stay empty when nothing provides them.

```ts
import { Module } from '@nestjs/common'

import { CliModule, Command, Flags, Inject, JsonParser, LogLevels, TOKEN_COMMAND_FLAGS, YamlParser } from '@cenk1cenk2/oclif-common'

@Module({
  imports: [
    CliModule.forRoot({ logger: { stderr: Object.values(LogLevels) }, parser: { parsers: [JsonParser, YamlParser] } }),
    PrinterModule.forRootAsync({ inject: [TOKEN_COMMAND_FLAGS], useFactory: (flags) => ({ browser: flags.browser }) })
  ]
})
class PrintModule {}

export default class Print extends Command<typeof Print> {
  static module = PrintModule

  static flags = {
    browser: Flags.string()
  }

  @Inject() private readonly printer: PrinterService

  public async run(): Promise<void> {
    await this.printer.print()
  }
}
```

Property injection reads the design type that TypeScript emits, so build with `experimentalDecorators` and `emitDecoratorMetadata`, and import injected services as values: an `import type`, or an interface as the property type, leaves nothing to resolve at runtime. Inject interfaces through a token with `@Inject(token)`.

The logger writes `FATAL` and `ERROR` to stderr and every other level to stdout. `CliModule.forRoot({ logger: { stderr } })` takes the list of levels to write to stderr instead, and the logo, printed at `INFO`, goes to stderr when that list holds `INFO`. A command that fails before its logger options are known writes every level to stderr.

## Development

This package lives in the `oclif-tools` pnpm workspace. Build, lint and test run from the repository root:

```sh
pnpm install
pnpm lint
pnpm build
pnpm test
```

Releases are cut by `multi-semantic-release` from `main` and published through npm staged publishing - the `npm stage publish` step parks the version for maintainer approval with 2FA before it reaches the registry.
