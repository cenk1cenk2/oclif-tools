# Function: opendir

[fs](../modules/fs.md).opendir

▸ **opendir**(`path`, `options?`): `Promise`<[`Dir`](../classes/fs.Dir.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`OpenDirOptions`](../interfaces/fs.OpenDirOptions.md) |

#### Returns

`Promise`<[`Dir`](../classes/fs.Dir.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:3777

▸ **opendir**(`path`, `cb`): `void`

Asynchronously open a directory. See the POSIX [`opendir(3)`](http://man7.org/linux/man-pages/man3/opendir.3.html) documentation for
more details.

Creates an `fs.Dir`, which contains all further functions for reading from
and cleaning up the directory.

The `encoding` option sets the encoding for the `path` while opening the
directory and subsequent read operations.

**`Since`**

v12.12.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `cb` | (`err`: `ErrnoException`, `dir`: [`Dir`](../classes/fs.Dir.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3774

▸ **opendir**(`path`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`OpenDirOptions`](../interfaces/fs.OpenDirOptions.md) |
| `cb` | (`err`: `ErrnoException`, `dir`: [`Dir`](../classes/fs.Dir.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3775
