# Function: lchmod

[fs](../modules/fs.md).lchmod

▸ **lchmod**(`path`, `mode`): `Promise`<`void`\>

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | [`Mode`](../types/fs.Mode.md) | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:841

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
| `mode` | [`Mode`](../types/fs.Mode.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:833
