# Class: ActionBase

[ux](../modules/ux.md).ActionBase

## Constructors

### constructor

• **new ActionBase**()

## Properties

### type

• **type**: `ActionType`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:11

___

### std

• **std**: ``"stdout"`` \| ``"stderr"``

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:12

___

### stdmocks

• `Protected` `Optional` **stdmocks**: [``"stdout"`` \| ``"stderr"``, `string`[]][]

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:13

___

### stdmockOrigs

• `Private` **stdmockOrigs**: `any`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:14

## Methods

### start

▸ **start**(`action`, `status?`, `opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `status?` | `string` |
| `opts?` | `Options` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:15

___

### stop

▸ **stop**(`msg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:16

___

### pauseAsync

▸ **pauseAsync**<`T`\>(`fn`, `icon?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`T`\> |
| `icon?` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:25

___

### pause

▸ **pause**(`fn`, `icon?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `any` |
| `icon?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:26

___

### \_start

▸ `Protected` **_start**(): `void`

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:27

___

### \_stop

▸ `Protected` **_stop**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:28

___

### \_resume

▸ `Protected` **_resume**(): `void`

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:29

___

### \_pause

▸ `Protected` **_pause**(`_?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_?` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:30

___

### \_updateStatus

▸ `Protected` **_updateStatus**(`_`, `__?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `__?` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:31

___

### \_stdout

▸ `Protected` **_stdout**(`toggle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:32

___

### \_flushStdout

▸ `Protected` **_flushStdout**(): `void`

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:33

___

### \_write

▸ `Protected` **_write**(`std`, `s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `std` | ``"stdout"`` \| ``"stderr"`` |
| `s` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:34

## Accessors

### globals

• `Private` `get` **globals**(): `any`

#### Returns

`any`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:17

___

### task

• `get` **task**(): `ITask`

#### Returns

`ITask`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:18

• `set` **task**(`task`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `ITask` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:19

___

### output

• `Protected` `get` **output**(): `string`

#### Returns

`string`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:20

• `Protected` `set` **output**(`output`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:21

___

### running

• `get` **running**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:22

___

### status

• `get` **status**(): `string`

#### Returns

`string`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:23

• `set` **status**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/action/base.d.ts:24
