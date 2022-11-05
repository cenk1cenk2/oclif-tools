# Class: ExitError

[CliUx](../modules/CliUx.md).ExitError

## Hierarchy

- `Error`

  ↳ **`ExitError`**

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4

## Properties

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### cli-ux

• **cli-ux**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exit` | `number` |

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/exit.d.ts:2

___

### code

• **code**: ``"EEXIT"``

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/exit.d.ts:5

___

### error

• `Optional` **error**: `Error`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/exit.d.ts:6

## Constructors

### constructor

• **new ExitError**(`status`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `error?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/exit.d.ts:7
