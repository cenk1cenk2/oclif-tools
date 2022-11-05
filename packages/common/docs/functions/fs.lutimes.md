# Function: lutimes

[fs](../modules/fs.md).lutimes

▸ **lutimes**(`path`, `atime`, `mtime`, `callback`): `void`

Changes the access and modification times of a file in the same way as [utimes](fs.utimes.md), with the difference that if the path refers to a symbolic
link, then the link is not dereferenced: instead, the timestamps of the
symbolic link itself are changed.

No arguments other than a possible exception are given to the completion
callback.

**`Since`**

v14.5.0, v12.19.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:713
