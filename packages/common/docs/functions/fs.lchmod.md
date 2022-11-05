# Function: lchmod

[fs](../modules/fs.md).lchmod

▸ **lchmod**(`path`, `mode`, `callback`): `void`

Changes the permissions on a symbolic link. No arguments other than a possible
exception are given to the completion callback.

This method is only implemented on macOS.

See the POSIX [`lchmod(2)`](https://www.freebsd.org/cgi/man.cgi?query=lchmod&sektion=2) documentation for more detail.

**`Deprecated`**

Since v0.4.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `mode` | `Mode` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:797
