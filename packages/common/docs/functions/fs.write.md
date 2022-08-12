# Function: write

[fs](../modules/fs.md).write

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](../types/fs.ArrayBufferView.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `position` | `number` |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:418

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](../types/fs.ArrayBufferView.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:426

▸ **write**(`fd`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `str`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:433

▸ **write**(`fd`, `data`, `offset`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `offset` | `number` |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `str`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:438

▸ **write**(`fd`, `data`, `offset`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `offset` | `number` |
| `encoding` | `string` |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `str`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:444

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset?`, `length?`, `position?`): `Promise`<{ `bytesWritten`: `number` ; `buffer`: `TBuffer`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](../types/fs.ArrayBufferView.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset?` | `number` |
| `length?` | `number` |
| `position?` | `number` |

#### Returns

`Promise`<{ `bytesWritten`: `number` ; `buffer`: `TBuffer`  }\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:451

▸ **write**(`fd`, `data`, `offset?`, `encoding?`): `Promise`<{ `bytesWritten`: `number` ; `buffer`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `offset?` | `number` |
| `encoding?` | `string` |

#### Returns

`Promise`<{ `bytesWritten`: `number` ; `buffer`: `string`  }\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:458
