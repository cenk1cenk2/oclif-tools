# Function: writeSync

[fs](../modules/fs.md).writeSync

▸ **writeSync**(`fd`, `buffer`, `offset?`, `length?`, `position?`): `number`

For detailed information, see the documentation of the asynchronous version of
this API: [write](fs.write.md).

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `ArrayBufferView` |
| `offset?` | `number` |
| `length?` | `number` |
| `position?` | `number` |

#### Returns

`number`

The number of bytes written.

#### Defined in

node_modules/@types/node/fs.d.ts:2330

▸ **writeSync**(`fd`, `string`, `position?`, `encoding?`): `number`

Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position?` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | `BufferEncoding` | The expected string encoding. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:2338
