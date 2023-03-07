# Function: lchmodSync

[fs](../modules/fs.md).lchmodSync

▸ **lchmodSync**(`path`, `mode`): `void`

Changes the permissions on a symbolic link. Returns `undefined`.

This method is only implemented on macOS.

See the POSIX [`lchmod(2)`](https://www.freebsd.org/cgi/man.cgi?query=lchmod&sektion=2) documentation for more detail.

**`Deprecated`**

Since v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `mode` | [`Mode`](../types/fs.Mode.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:815
