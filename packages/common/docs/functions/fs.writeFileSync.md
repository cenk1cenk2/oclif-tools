# Function: writeFileSync

[fs](../modules/fs.md).writeFileSync

▸ **writeFileSync**(`file`, `data`, `options?`): `void`

Returns `undefined`.

The `mode` option only affects the newly created file. See [open](fs.open.md) for more details.

For detailed information, see the documentation of the asynchronous version of
this API: [writeFile](fs.writeFile.md).

**`Since`**

v0.1.29

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathOrFileDescriptor`](../types/fs.PathOrFileDescriptor.md) | filename or file descriptor |
| `data` | `string` \| `ArrayBufferView` | - |
| `options?` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2773
