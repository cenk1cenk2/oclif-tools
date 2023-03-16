# Function: readvSync

[fs](../modules/fs.md).readvSync

▸ **readvSync**(`fd`, `buffers`, `position?`): `number`

For detailed information, see the documentation of the asynchronous version of
this API: [readv](fs.readv.md).

**`Since`**

v13.13.0, v12.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`number`

The number of bytes read.

#### Defined in

node_modules/@types/node/fs.d.ts:3841
