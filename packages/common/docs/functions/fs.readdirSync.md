# Function: readdirSync

[fs](../modules/fs.md).readdirSync

▸ **readdirSync**(`path`, `options?`): `string`[]

Reads the contents of the directory.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames returned. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the result will contain `fs.Dirent` objects.

**`Since`**

v0.1.21

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `withFileTypes?`: ``false``  } |

#### Returns

`string`[]

#### Defined in

node_modules/@types/node/fs.d.ts:2007

▸ **readdirSync**(`path`, `options`): `Buffer`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`[]

#### Defined in

node_modules/@types/node/fs.d.ts:2022

▸ **readdirSync**(`path`, `options?`): `string`[] \| `Buffer`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`[] \| `Buffer`[]

#### Defined in

node_modules/@types/node/fs.d.ts:2036

▸ **readdirSync**(`path`, `options`): [`Dirent`](../classes/fs.Dirent.md)[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

[`Dirent`](../classes/fs.Dirent.md)[]

#### Defined in

node_modules/@types/node/fs.d.ts:2050
