# Class: StoreService<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

## Properties

### instance

▪ `Static` **instance**: [`StoreService`](StoreService.md)<`Record`<`PropertyKey`, `any`\>\>

#### Defined in

packages/common/src/lib/store/store.service.ts:4

___

### store

• `Private` **store**: [`DataStore`](../types/DataStore.md)<`T`\>

#### Defined in

packages/common/src/lib/store/store.service.ts:5

## Constructors

### constructor

• **new StoreService**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`PropertyKey`, `any`\> = `Record`<`PropertyKey`, `any`\> |

#### Defined in

packages/common/src/lib/store/store.service.ts:7

## Methods

### has

▸ **has**<`K`\>(`key`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/store/store.service.ts:15

___

### get

▸ **get**<`K`\>(`key`): [`DataStore`](../types/DataStore.md)<`T`\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

[`DataStore`](../types/DataStore.md)<`T`\>[`K`]

#### Defined in

packages/common/src/lib/store/store.service.ts:19

___

### set

▸ **set**<`K`\>(`key`, `data`): [`DataStore`](../types/DataStore.md)<`T`\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `data` | [`DataStore`](../types/DataStore.md)<`T`\>[`K`] |

#### Returns

[`DataStore`](../types/DataStore.md)<`T`\>[`K`]

#### Defined in

packages/common/src/lib/store/store.service.ts:23
