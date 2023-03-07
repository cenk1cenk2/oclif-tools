# Function: readdir

[fs](../modules/fs.md).readdir

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/@types/node/fs.d.ts:1844

▸ **readdir**(`path`, `options`): `Promise`<`Buffer`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

node_modules/@types/node/fs.d.ts:1859

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| `Buffer`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`[] \| `Buffer`[]\>

#### Defined in

node_modules/@types/node/fs.d.ts:1873

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](../classes/fs.Dirent.md)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent |

#### Returns

`Promise`<[`Dirent`](../classes/fs.Dirent.md)[]\>

#### Defined in

node_modules/@types/node/fs.d.ts:1887

▸ **readdir**(`path`, `options`, `callback`): `void`

Reads the contents of a directory. The callback gets two arguments `(err, files)`where `files` is an array of the names of the files in the directory excluding`'.'` and `'..'`.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames passed to the callback. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the `files` array will contain `fs.Dirent` objects.

**`Since`**

v0.1.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `withFileTypes?`: ``false``  } |
| `callback` | (`err`: `ErrnoException`, `files`: `string`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1778

▸ **readdir**(`path`, `options`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `files`: `Buffer`[]) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1795

▸ **readdir**(`path`, `options`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `files`: `string`[] \| `Buffer`[]) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1810

▸ **readdir**(`path`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: `ErrnoException`, `files`: `string`[]) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1825

▸ **readdir**(`path`, `options`, `callback`): `void`

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |
| `callback` | (`err`: `ErrnoException`, `files`: [`Dirent`](../classes/fs.Dirent.md)[]) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1831
