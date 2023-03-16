# Function: lchownSync

[fs](../modules/fs.md).lchownSync

▸ **lchownSync**(`path`, `uid`, `gid`): `void`

Set the owner for the path. Returns `undefined`.

See the POSIX [`lchown(2)`](http://man7.org/linux/man-pages/man2/lchown.2.html) documentation for more details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `uid` | `number` | The file's new owner's user id. |
| `gid` | `number` | The file's new group's group id. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:739
