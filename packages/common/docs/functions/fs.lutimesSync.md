# Function: lutimesSync

[fs](../modules/fs.md).lutimesSync

▸ **lutimesSync**(`path`, `atime`, `mtime`): `void`

Change the file system timestamps of the symbolic link referenced by `path`.
Returns `undefined`, or throws an exception when parameters are incorrect or
the operation fails. This is the synchronous version of [lutimes](fs.lutimes.md).

**`Since`**

v14.5.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:731
