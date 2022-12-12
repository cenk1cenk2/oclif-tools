# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io) [![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world) [![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main) [![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world) [![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->

- [oclif-hello-world](#oclif-hello-world)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g oclif2
$ oclif2 COMMAND
running command...
$ oclif2 (--version)
oclif2/1.0.0 linux-x64 node-v16.18.0
$ oclif2 --help [COMMAND]
USAGE
  $ oclif2 COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`oclif2 hello [PERSON]`](#oclif2-hello-person)
- [`oclif2 help [COMMAND]`](#oclif2-help-command)
- [`oclif2 plugins`](#oclif2-plugins)
- [`oclif2 plugins:install PLUGIN...`](#oclif2-pluginsinstall-plugin)
- [`oclif2 plugins:inspect PLUGIN...`](#oclif2-pluginsinspect-plugin)
- [`oclif2 plugins:install PLUGIN...`](#oclif2-pluginsinstall-plugin-1)
- [`oclif2 plugins:link PLUGIN`](#oclif2-pluginslink-plugin)
- [`oclif2 plugins:uninstall PLUGIN...`](#oclif2-pluginsuninstall-plugin)
- [`oclif2 plugins:uninstall PLUGIN...`](#oclif2-pluginsuninstall-plugin-1)
- [`oclif2 plugins:uninstall PLUGIN...`](#oclif2-pluginsuninstall-plugin-2)
- [`oclif2 plugins update`](#oclif2-plugins-update)

## `oclif2 hello [PERSON]`

Say hello

```
USAGE
  $ oclif2 hello [PERSON] [-f <value>]

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
```

_See code: [dist/commands/hello/index.ts](https://github.com/cenk1cenk2/hello-world/blob/v1.0.0/dist/commands/hello/index.ts)_

## `oclif2 help [COMMAND]`

Display help for oclif2.

```
USAGE
  $ oclif2 help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `oclif2 plugins`

List installed plugins.

```
USAGE
  $ oclif2 plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.8/src/commands/plugins/index.ts)_

## `oclif2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif2 plugins add

EXAMPLES
  $ oclif2 plugins:install myplugin

  $ oclif2 plugins:install https://github.com/someuser/someplugin

  $ oclif2 plugins:install someuser/someplugin
```

## `oclif2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif2 plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif2 plugins:inspect myplugin
```

## `oclif2 plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif2 plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif2 plugins add

EXAMPLES
  $ oclif2 plugins:install myplugin

  $ oclif2 plugins:install https://github.com/someuser/someplugin

  $ oclif2 plugins:install someuser/someplugin
```

## `oclif2 plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif2 plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif2 plugins:link myplugin
```

## `oclif2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif2 plugins unlink
  $ oclif2 plugins remove
```

## `oclif2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif2 plugins unlink
  $ oclif2 plugins remove
```

## `oclif2 plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif2 plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif2 plugins unlink
  $ oclif2 plugins remove
```

## `oclif2 plugins update`

Update installed plugins.

```
USAGE
  $ oclif2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

<!-- commandsstop -->
