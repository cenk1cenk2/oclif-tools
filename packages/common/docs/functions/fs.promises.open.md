# Function: open

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).open

▸ **open**(`path`, `flags?`, `mode?`): `Promise`<[`FileHandle`](../interfaces/fs.promises.FileHandle.md)\>

Opens a `FileHandle`.

Refer to the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more detail.

Some characters (`< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by [this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `flags?` | `string` \| `number` | See `support of file system `flags``. |
| `mode?` | `Mode` | Sets the file mode (permission and sticky bits) if the file is created. |

#### Returns

`Promise`<[`FileHandle`](../interfaces/fs.promises.FileHandle.md)\>

Fulfills with a {FileHandle} object.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:511
