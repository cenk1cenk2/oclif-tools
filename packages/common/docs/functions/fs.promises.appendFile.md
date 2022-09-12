# Function: appendFile

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).appendFile

▸ **appendFile**(`path`, `data`, `options?`): `Promise`<`void`\>

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a `Buffer`.

If `options` is a string, then it specifies the `encoding`.

The `mode` option only affects the newly created file. See `fs.open()` for more details.

The `path` may be specified as a `FileHandle` that has been opened
for appending (using `fsPromises.open()`).

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) \| [`FileHandle`](../interfaces/fs.promises.FileHandle.md) | filename or {FileHandle} |
| `data` | `string` \| `Uint8Array` | - |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & [`FlagAndOpenMode`](../interfaces/fs.promises.FlagAndOpenMode.md) | - |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:934
