# Function: readSync

[fs](../modules/fs.md).readSync

▸ **readSync**(`fd`, `buffer`, `offset`, `length`, `position`): `number`

Returns the number of `bytesRead`.

For detailed information, see the documentation of the asynchronous version of
this API: [read](fs.read.md).

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `ArrayBufferView` |
| `offset` | `number` |
| `length` | `number` |
| `position` | [`ReadPosition`](../types/fs.ReadPosition.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:2334

▸ **readSync**(`fd`, `buffer`, `opts?`): `number`

Similar to the above `fs.readSync` function, this version takes an optional `options` object.
If no `options` object is specified, it will default with the above values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `ArrayBufferView` |
| `opts?` | [`ReadSyncOptions`](../interfaces/fs.ReadSyncOptions.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:2339
