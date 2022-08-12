# Function: writev

[fs](../modules/fs.md).writev

▸ **writev**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ArrayBufferView`[] |
| `position` | `number` |
| `cb` | (`err`: `ErrnoException`, `bytesWritten`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:478

▸ **writev**(`fd`, `buffers`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ArrayBufferView`[] |
| `cb` | (`err`: `ErrnoException`, `bytesWritten`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:484

▸ **writev**(`fd`, `buffers`, `position?`): `Promise`<[`WritevResult`](../interfaces/fs.WritevResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`Promise`<[`WritevResult`](../interfaces/fs.WritevResult.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:489
