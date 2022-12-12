# Function: opendirSync

[fs](../modules/fs.md).opendirSync

▸ **opendirSync**(`path`, `options?`): [`Dir`](../classes/fs.Dir.md)

Synchronously open a directory. See [`opendir(3)`](http://man7.org/linux/man-pages/man3/opendir.3.html).

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
| `options?` | [`OpenDirOptions`](../interfaces/fs.OpenDirOptions.md) |

#### Returns

[`Dir`](../classes/fs.Dir.md)

#### Defined in

node_modules/@types/node/fs.d.ts:3762
