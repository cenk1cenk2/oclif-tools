# @cenk1cenk2/oclif-common

Oclif common package for [oclif2](https://github.com/oclif/core) projects.

Shared building blocks for oclif-based CLIs: base commands, hooks, interfaces and utility helpers that the CLIs in this organisation compose instead of re-implementing.

## Install

```sh
pnpm add @cenk1cenk2/oclif-common
```

The package is ESM-only. Node.js >= 20.19 or >= 22.12 is required.

## Usage

Extend the exported base classes and wire the hooks in your CLI's `oclif.manifest.json` / `package.json` oclif configuration. The `commands/`, `hooks/` and `lib/` exports cover the shared command factory, init hooks and the DI container setup used across the CLIs built on this package.

## Development

This package lives in the `oclif-tools` pnpm workspace. Build and lint run from the repository root:

```sh
pnpm install
pnpm lint
pnpm build
```

Releases are cut by `multi-semantic-release` from `main` and published through npm staged publishing - the `npm stage publish` step parks the version for maintainer approval with 2FA before it reaches the registry.
