# Function: writevSync

[fs](../modules/fs.md).writevSync

▸ **writevSync**(`fd`, `buffers`, `position?`): `number`

For detailed information, see the documentation of the asynchronous version of
this API: [writev](fs.writev.md).

**`Since`**

v12.9.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`number`

The number of bytes written.

#### Defined in

node_modules/@types/node/fs.d.ts:3706
