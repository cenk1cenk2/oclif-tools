# Function: truncateSync

[fs](../modules/fs.md).truncateSync

▸ **truncateSync**(`path`, `len?`): `void`

Truncates the file. Returns `undefined`. A file descriptor can also be
passed as the first argument. In this case, `fs.ftruncateSync()` is called.

Passing a file descriptor is deprecated and may result in an error being thrown
in the future.

**`Since`**

v0.8.6

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `len?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:568
