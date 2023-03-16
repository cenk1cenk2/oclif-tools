# Class: ux

[ux](../modules/ux.md).ux

## Properties

### config

▪ `Static` **config**: [`Config`](ux.Config.md)

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:11

## Accessors

### prompt

• `Static` `get` **prompt**(): (`name`: `string`, `options?`: [`IPromptOptions`](../interfaces/ux.IPromptOptions.md)) => `Promise`<`string`\>

#### Returns

`fn`

▸ (`name`, `options?`): `Promise`<`string`\>

prompt for input

**`See`**

IPromptOptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | prompt text |
| `options?` | [`IPromptOptions`](../interfaces/ux.IPromptOptions.md) |  |

##### Returns

`Promise`<`string`\>

Promise<string>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:12

___

### anykey

• `Static` `get` **anykey**(): (`message?`: `string`) => `Promise`<`string`\>

"press anykey to continue"

#### Returns

`fn`

▸ (`message?`): `Promise`<`string`\>

"press anykey to continue"

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `string` | optional message to display to user |

##### Returns

`Promise`<`string`\>

Promise<string>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:16

___

### confirm

• `Static` `get` **confirm**(): (`message`: `string`) => `Promise`<`boolean`\>

#### Returns

`fn`

▸ (`message`): `Promise`<`boolean`\>

confirmation prompt (yes/no)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | confirmation text |

##### Returns

`Promise`<`boolean`\>

Promise<boolean>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:17

___

### action

• `Static` `get` **action**(): [`ActionBase`](ux.ActionBase.md)

#### Returns

[`ActionBase`](ux.ActionBase.md)

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:18

___

### prideAction

• `Static` `get` **prideAction**(): [`ActionBase`](ux.ActionBase.md)

#### Returns

[`ActionBase`](ux.ActionBase.md)

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:19

___

### styledJSON

• `Static` `get` **styledJSON**(): (`obj`: `unknown`) => `void`

#### Returns

`fn`

▸ (`obj`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

##### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:22

___

### table

• `Static` `get` **table**(): typeof [`table`](../functions/ux.Table-1.table.md)

#### Returns

typeof [`table`](../functions/ux.Table-1.table.md)

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:23

___

### tree

• `Static` `get` **tree**(): () => `Tree`

#### Returns

`fn`

▸ (): `Tree`

##### Returns

`Tree`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:24

___

### wait

• `Static` `get` **wait**(): (`ms?`: `number`) => `Promise`<`void`\>

#### Returns

`fn`

▸ (`ms?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ms?` | `number` |

##### Returns

`Promise`<`void`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:25

___

### progress

• `Static` `get` **progress**(): (`options?`: `Options`) => `SingleBar`

#### Returns

`fn`

▸ (`options?`): `SingleBar`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options` |

##### Returns

`SingleBar`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:26

## Methods

### styledObject

▸ `Static` **styledObject**(`obj`, `keys?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `keys?` | `string`[] |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:20

___

### styledHeader

▸ `Static` **styledHeader**(`header`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:21

___

### done

▸ `Static` **done**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:27

___

### trace

▸ `Static` **trace**(`format`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:28

___

### debug

▸ `Static` **debug**(`format`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:29

___

### info

▸ `Static` **info**(`format`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:30

___

### log

▸ `Static` **log**(`format?`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:31

___

### url

▸ `Static` **url**(`text`, `uri`, `params?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `uri` | `string` |
| `params?` | `Object` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:32

___

### annotation

▸ `Static` **annotation**(`text`, `annotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `annotation` | `string` |

#### Returns

`void`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:33

___

### flush

▸ `Static` **flush**(`ms?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:34

## Constructors

### constructor

• **new ux**()
