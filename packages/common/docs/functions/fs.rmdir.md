# Function: rmdir

[fs](../modules/fs.md).rmdir

▸ **rmdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous rmdir(2) - delete a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`RmDirOptions`](../interfaces/fs.RmDirOptions.md) | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1526

▸ **rmdir**(`path`, `callback`): `void`

Asynchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). No arguments other than a possible exception are given
to the completion callback.

Using `fs.rmdir()` on a file (not a directory) results in an `ENOENT` error on
Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use [rm](fs.rm.md) with options `{ recursive: true, force: true }`.

**`Since`**

v0.0.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1519

▸ **rmdir**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`RmDirOptions`](../interfaces/fs.RmDirOptions.md) |
| `callback` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1520
