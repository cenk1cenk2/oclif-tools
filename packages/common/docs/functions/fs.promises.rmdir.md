# Function: rmdir

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).rmdir

▸ **rmdir**(`path`, `options?`): `Promise`<`void`\>

Removes the directory identified by `path`.

Using `fsPromises.rmdir()` on a file (not a directory) results in the
promise being rejected with an `ENOENT` error on Windows and an `ENOTDIR`error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use `fsPromises.rm()` with options `{ recursive: true, force: true }`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`RmDirOptions`](../interfaces/fs.RmDirOptions.md) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:559
