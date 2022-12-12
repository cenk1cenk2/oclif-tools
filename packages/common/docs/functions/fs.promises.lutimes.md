# Function: lutimes

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).lutimes

▸ **lutimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Changes the access and modification times of a file in the same way as `fsPromises.utimes()`, with the difference that if the path refers to a
symbolic link, then the link is not dereferenced: instead, the timestamps of
the symbolic link itself are changed.

**`Since`**

v14.5.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:789
