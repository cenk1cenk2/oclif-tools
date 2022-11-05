# Function: native

[fs](../modules/fs.md).[realpath](../modules/fs.realpath-1.md).native

▸ **native**(`path`, `options`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"``  } |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:344

▸ **native**(`path`, `options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | `string` \| { `encoding`: `string`  } |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:345

▸ **native**(`path`, `options`): `Promise`<`string` \| `Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | `string` \| { `encoding`: `string`  } |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:349

▸ **native**(`path`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:352

▸ **native**(`path`, `options`, `callback`): `void`

Asynchronous [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html).

The `callback` gets two arguments `(err, resolvedPath)`.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path passed to the callback. If the `encoding` is set to `'buffer'`,
the path returned will be passed as a `Buffer` object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

**`Since`**

v9.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1320

▸ **native**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1321

▸ **native**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `string` \| `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1322

▸ **native**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | (`err`: `ErrnoException`, `resolvedPath`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1323
