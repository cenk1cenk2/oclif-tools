# Function: realpath

[fs](../modules/fs.md).realpath

▸ **realpath**(`path`, `options?`): `Promise`<`string`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1290

▸ **realpath**(`path`, `options`): `Promise`<`Buffer`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1296

▸ **realpath**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1302

▸ **realpath**(`path`, `options`, `callback`): `void`

Asynchronously computes the canonical pathname by resolving `.`, `..` and
symbolic links.

A canonical pathname is not necessarily unique. Hard links and bind mounts can
expose a file system entity through many pathnames.

This function behaves like [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html), with some exceptions:

1. No case conversion is performed on case-insensitive file systems.
2. The maximum number of symbolic links is platform-independent and generally
(much) higher than what the native [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html) implementation supports.

The `callback` gets two arguments `(err, resolvedPath)`. May use `process.cwd`to resolve relative paths.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path passed to the callback. If the `encoding` is set to `'buffer'`,
the path returned will be passed as a `Buffer` object.

If `path` resolves to a socket or a pipe, the function will return a system
dependent name for that object.

**`Since`**

v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1266

▸ **realpath**(`path`, `options`, `callback`): `void`

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1272

▸ **realpath**(`path`, `options`, `callback`): `void`

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `string` \| `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1278

▸ **realpath**(`path`, `callback`): `void`

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1283
