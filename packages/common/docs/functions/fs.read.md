# Function: read

[fs](../modules/fs.md).read

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

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
| `callback` | (`err`: `ErrnoException`, `bytesRead`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:273

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`): `Promise`<{ `bytesRead`: `number` ; `buffer`: `TBuffer`  }\>

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

#### Returns

`Promise`<{ `bytesRead`: `number` ; `buffer`: `TBuffer`  }\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:281
