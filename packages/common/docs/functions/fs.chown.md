# Function: chown

[fs](../modules/fs.md).chown

▸ **chown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Asynchronous chown(2) - Change ownership of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:648

▸ **chown**(`path`, `uid`, `gid`, `callback`): `void`

Asynchronously changes owner and group of a file. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html) documentation for more detail.

**`Since`**

v0.1.97

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

node_modules/@types/node/fs.d.ts:642
