# Function: open

[fs](../modules/fs.md).open

▸ **open**(`path`, `flags`, `mode?`): `Promise`<`number`\>

Asynchronous open(2) - open and possibly create a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `flags` | [`OpenMode`](../types/fs.OpenMode.md) | - |
| `mode?` | [`Mode`](../types/fs.Mode.md) | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`. |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@types/node/fs.d.ts:2020

▸ **open**(`path`, `flags?`, `mode?`, `callback`): `void`

Asynchronous file open. See the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more details.

`mode` sets the file mode (permission and sticky bits), but only if the file was
created. On Windows, only the write permission can be manipulated; see [chmod](fs.chmod.md).

The callback gets two arguments `(err, fd)`.

Some characters (`< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by [this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

Functions based on `fs.open()` exhibit this behavior as well:`fs.writeFile()`, `fs.readFile()`, etc.

**`Since`**

v0.0.2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `flags?` | [`OpenMode`](../types/fs.OpenMode.md) | See `support of file system `flags``. |
| `mode?` | [`Mode`](../types/fs.Mode.md) |  |
| `callback` | (`err`: `ErrnoException`, `fd`: `number`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2001

▸ **open**(`path`, `flags?`, `callback`): `void`

Asynchronous open(2) - open and possibly create a file. If the file is created, its mode will be `0o666`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `flags?` | [`OpenMode`](../types/fs.OpenMode.md) | See `support of file system `flags``. |
| `callback` | (`err`: `ErrnoException`, `fd`: `number`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2007

▸ **open**(`path`, `callback`): `void`

Asynchronous open(2) - open and possibly create a file. If the file is created, its mode will be `0o666`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: `ErrnoException`, `fd`: `number`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2012
