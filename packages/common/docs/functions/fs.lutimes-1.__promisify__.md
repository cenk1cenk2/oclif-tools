# Function: \_\_promisify\_\_

[fs](../modules/fs.md).[lutimes](../modules/fs.lutimes-1.md).__promisify__

▸ **__promisify__**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Changes the access and modification times of a file in the same way as `fsPromises.utimes()`,
with the difference that if the path refers to a symbolic link, then the link is not
dereferenced: instead, the timestamps of the symbolic link itself are changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:759
