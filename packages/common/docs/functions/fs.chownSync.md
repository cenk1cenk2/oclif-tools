# Function: chownSync

[fs](../modules/fs.md).chownSync

▸ **chownSync**(`path`, `uid`, `gid`): `void`

Synchronously changes owner and group of a file. Returns `undefined`.
This is the synchronous version of [chown](fs.chown.md).

See the POSIX [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html) documentation for more detail.

**`Since`**

v0.1.97

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:657
