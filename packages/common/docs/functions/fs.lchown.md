# Function: lchown

[fs](../modules/fs.md).lchown

▸ **lchown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:730

▸ **lchown**(`path`, `uid`, `gid`, `callback`): `void`

Set the owner of the symbolic link. No arguments other than a possible
exception are given to the completion callback.

See the POSIX [`lchown(2)`](http://man7.org/linux/man-pages/man2/lchown.2.html) documentation for more detail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:724
