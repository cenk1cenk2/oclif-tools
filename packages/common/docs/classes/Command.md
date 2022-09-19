# Class: Command<Ctx, Flags, Args, Store\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | extends `ListrContext` = `ListrContext` |
| `Flags` | extends `Record`<`PropertyKey`, `any`\> = [`InferFlags`](../types/InferFlags.md)<typeof [`Command`](Command.md)\> |
| `Args` | extends `Record`<`PropertyKey`, `any`\> = [`InferArgs`](../types/InferArgs.md)<typeof [`Command`](Command.md)\> |
| `Store` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

## Hierarchy

- `default`

  ↳ **`Command`**

  ↳↳ [`ConfigCommand`](ConfigCommand.md)

## Properties

### \_base

▪ `Static` **\_base**: `string`

#### Inherited from

BaseCommand.\_base

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:11

___

### id

▪ `Static` **id**: `string`

A command ID, used mostly in error or verbose reporting.

#### Inherited from

BaseCommand.id

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:13

___

### summary

▪ `Static` `Optional` **summary**: `string`

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

BaseCommand.summary

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:18

___

### description

▪ `Static` **description**: `string`

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

BaseCommand.description

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:24

___

### hidden

▪ `Static` **hidden**: `boolean`

Hide the command from help?

#### Inherited from

BaseCommand.hidden

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:26

___

### state

▪ `Static` `Optional` **state**: `string`

Mark the command as a given state (e.g. beta) in help?

#### Inherited from

BaseCommand.state

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:28

___

### usage

▪ `Static` **usage**: `string` \| `string`[]

An override string (or strings) for the default usage documentation.

#### Inherited from

BaseCommand.usage

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:32

___

### help

▪ `Static` **help**: `string`

#### Inherited from

BaseCommand.help

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:33

___

### aliases

▪ `Static` **aliases**: `string`[]

An array of aliases for this command.

#### Inherited from

BaseCommand.aliases

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:35

___

### strict

▪ `Static` **strict**: `boolean`

When set to false, allows a variable amount of arguments

#### Inherited from

BaseCommand.strict

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:37

___

### parse

▪ `Static` **parse**: `boolean`

#### Inherited from

BaseCommand.parse

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:38

___

### args

▪ `Static` `Optional` **args**: [`ArgInput`](../types/ArgInput.md)

An order-dependent array of arguments for the command

#### Inherited from

BaseCommand.args

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:40

___

### plugin

▪ `Static` **plugin**: `Plugin`

#### Inherited from

BaseCommand.plugin

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:41

___

### examples

▪ `Static` **examples**: `Example`[]

An array of examples to show at the end of the command's help.

IF only a string is provided, it will try to look for a line that starts
with the cmd.bin as the example command and the rest as the description.
If found, the command will be formatted appropriately.

```
EXAMPLES:
  A description of a particular use case.

    $ <%= config.bin => command flags
```

#### Inherited from

BaseCommand.examples

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:56

___

### parserOptions

▪ `Static` **parserOptions**: `Object`

#### Inherited from

BaseCommand.parserOptions

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:57

___

### \_enableJsonFlag

▪ `Static` **\_enableJsonFlag**: `boolean`

#### Inherited from

BaseCommand.\_enableJsonFlag

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:58

___

### run

▪ `Static` **run**: (`argv?`: `string`[], `config?`: `LoadOptions`) => `PromiseLike`<`any`\>

#### Type declaration

▸ (`argv?`, `config?`): `PromiseLike`<`any`\>

instantiate and run the command

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argv?` | `string`[] | argv |
| `config?` | `LoadOptions` | - |

##### Returns

`PromiseLike`<`any`\>

#### Inherited from

BaseCommand.run

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:67

___

### \_globalFlags

▪ `Static` `Protected` **\_globalFlags**: `object`

#### Inherited from

BaseCommand.\_globalFlags

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:68

___

### \_flags

▪ `Static` `Protected` **\_flags**: `object`

A hash of flags for the command

#### Inherited from

BaseCommand.\_flags

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:72

___

### id

• **id**: `string`

#### Inherited from

BaseCommand.id

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:75

___

### debug

• `Protected` **debug**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Inherited from

BaseCommand.debug

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:76

___

### logger

• **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/commands/base.command.ts:34

___

### tasks

• **tasks**: `Manager`<`Ctx`, ``"default"`` \| ``"verbose"`` \| ``"silent"`` \| ``"simple"``, ``"verbose"``\>

#### Defined in

packages/common/src/commands/base.command.ts:35

___

### validator

• **validator**: [`ValidatorService`](ValidatorService.md)

#### Defined in

packages/common/src/commands/base.command.ts:36

___

### cs

• **cs**: [`ConfigService`](ConfigService.md)

#### Defined in

packages/common/src/commands/base.command.ts:37

___

### parser

• **parser**: [`ParserService`](ParserService.md)

#### Defined in

packages/common/src/commands/base.command.ts:38

___

### fs

• **fs**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/commands/base.command.ts:39

___

### store

• **store**: [`StoreService`](StoreService.md)<`Store`\>

#### Defined in

packages/common/src/commands/base.command.ts:40

___

### flags

• **flags**: `Flags`

#### Defined in

packages/common/src/commands/base.command.ts:42

___

### args

• **args**: `Args`

#### Defined in

packages/common/src/commands/base.command.ts:43

___

### argv

• **argv**: `string`[]

#### Inherited from

BaseCommand.argv

#### Defined in

packages/common/src/commands/base.command.ts:45

___

### config

• **config**: `Config`

#### Inherited from

BaseCommand.config

#### Defined in

packages/common/src/commands/base.command.ts:45

## Accessors

### enableJsonFlag

• `Static` `get` **enableJsonFlag**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommand.enableJsonFlag

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:59

• `Static` `set` **enableJsonFlag**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

BaseCommand.enableJsonFlag

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:60

___

### flags

• `Static` `get` **flags**(): `object`

#### Returns

`object`

#### Inherited from

BaseCommand.flags

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:73

• `Static` `set` **flags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `object` |

#### Returns

`void`

#### Inherited from

BaseCommand.flags

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:74

___

### ctor

• `get` **ctor**(): typeof `default`

#### Returns

typeof `default`

#### Inherited from

BaseCommand.ctor

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:78

___

### globalFlags

• `Static` `get` **globalFlags**(): `object`

#### Returns

`object`

#### Overrides

BaseCommand.globalFlags

#### Defined in

packages/common/src/commands/base.command.ts:23

• `Static` `set` **globalFlags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `object` |

#### Returns

`void`

#### Overrides

BaseCommand.globalFlags

#### Defined in

packages/common/src/commands/base.command.ts:28

## Methods

### warn

▸ **warn**(`input`): `string` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |

#### Returns

`string` \| `Error`

#### Inherited from

BaseCommand.warn

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:81

___

### error

▸ **error**(`input`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options` | { `code?`: `string` ; `exit`: ``false``  } & `PrettyPrintableError` |

#### Returns

`void`

#### Inherited from

BaseCommand.error

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:82

▸ **error**(`input`, `options?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options?` | { `code?`: `string` ; `exit?`: `number`  } & `PrettyPrintableError` |

#### Returns

`never`

#### Inherited from

BaseCommand.error

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:86

___

### log

▸ **log**(`message?`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

BaseCommand.log

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:90

___

### logToStderr

▸ **logToStderr**(`message?`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

BaseCommand.logToStderr

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:91

___

### jsonEnabled

▸ **jsonEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseCommand.jsonEnabled

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:92

___

### parse

▸ `Protected` **parse**<`F`, `G`, `A`\>(`options?`, `argv?`): `Promise`<`ParserOutput`<`F`, `G`, `A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `F` |
| `G` | `G` |
| `A` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Input`<`F`, `G`\> |
| `argv?` | `string`[] |

#### Returns

`Promise`<`ParserOutput`<`F`, `G`, `A`\>\>

#### Inherited from

BaseCommand.parse

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:98

___

### toSuccessJson

▸ `Protected` **toSuccessJson**(`result`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `unknown` |

#### Returns

`any`

#### Inherited from

BaseCommand.toSuccessJson

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:105

___

### toErrorJson

▸ `Protected` **toErrorJson**(`err`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

`any`

#### Inherited from

BaseCommand.toErrorJson

#### Defined in

node_modules/@oclif/core/lib/command.d.ts:106

___

### shouldRunBefore

▸ **shouldRunBefore**(): `void` \| `Promise`<`void`\>

Construct the class if you dont want to extend init or constructor.

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

packages/common/src/commands/base.command.ts:53

___

### shouldRunAfter

▸ **shouldRunAfter**(`_ctx?`): `void` \| `Promise`<`void`\>

Deconstruct the class if you dont want to extend finally or catch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ctx?` | `Ctx` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

packages/common/src/commands/base.command.ts:59

___

### run

▸ **run**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Overrides

BaseCommand.run

#### Defined in

packages/common/src/commands/base.command.ts:62

___

### \_run

▸ **_run**<`T`\>(): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

#### Overrides

BaseCommand.\_run

#### Defined in

packages/common/src/commands/base.command.ts:67

___

### exit

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

#### Overrides

BaseCommand.exit

#### Defined in

packages/common/src/commands/base.command.ts:88

___

### runTasks

▸ **runTasks**<`C`\>(): `Promise`<`C`\>

Run all tasks from task manager.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `unknown` = `Ctx` |

#### Returns

`Promise`<`C`\>

#### Defined in

packages/common/src/commands/base.command.ts:95

___

### prompt

▸ **prompt**<`T`\>(`options`): `Promise`<`T`\>

Gets prompt from user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `PromptOptions`<``false``\> |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/commands/base.command.ts:100

___

### setCtxDefaults

▸ `Protected` **setCtxDefaults**(...`defaults`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...defaults` | `Partial`<`Ctx`\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/commands/base.command.ts:109

___

### setCtxAssign

▸ `Protected` **setCtxAssign**<`K`\>(...`assigns`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...assigns` | [`SetCtxAssignOptions`](../interfaces/SetCtxAssignOptions.md)<`K`\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/commands/base.command.ts:115

___

### init

▸ `Protected` **init**(): `Promise`<`void`\>

Initial functions / constructor

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.init

#### Defined in

packages/common/src/commands/base.command.ts:123

___

### finally

▸ `Protected` **finally**<`C`\>(): `Promise`<{ `ctx`: `C`  }\>

Tasks to run before end of the command.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `unknown` = `Ctx` |

#### Returns

`Promise`<{ `ctx`: `C`  }\>

#### Overrides

BaseCommand.finally

#### Defined in

packages/common/src/commands/base.command.ts:197

___

### catch

▸ `Protected` **catch**(`e`): `Promise`<`void`\>

Catch any error occurred during command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.catch

#### Defined in

packages/common/src/commands/base.command.ts:213

___

### greet

▸ `Private` **greet**(): `void`

#### Returns

`void`

#### Defined in

packages/common/src/commands/base.command.ts:223

## Constructors

### constructor

• **new Command**<`Ctx`, `Flags`, `Args`, `Store`\>(`argv`, `config`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ctx` | extends `unknown` = `any` |
| `Flags` | extends `Record`<`PropertyKey`, `any`\> = `unknown` |
| `Args` | extends `Record`<`PropertyKey`, `any`\> = [`InferArgs`](../types/InferArgs.md)<typeof [`Command`](Command.md)\> |
| `Store` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |
| `config` | `Config` |

#### Overrides

BaseCommand.constructor

#### Defined in

packages/common/src/commands/base.command.ts:45
