# Function: rmdirSync

[fs](../modules/fs.md).rmdirSync

▸ **rmdirSync**(`path`, `options?`): `void`

Synchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). Returns `undefined`.

Using `fs.rmdirSync()` on a file (not a directory) results in an `ENOENT` error
on Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use [rmSync](fs.rmSync.md) with options `{ recursive: true, force: true }`.

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`RmDirOptions`](../interfaces/fs.RmDirOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1437
