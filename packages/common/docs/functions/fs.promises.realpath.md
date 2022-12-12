# Function: realpath

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).realpath

▸ **realpath**(`path`, `options?`): `Promise`<`string`\>

Determines the actual location of `path` using the same semantics as the`fs.realpath.native()` function.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path. If the `encoding` is set to `'buffer'`, the path returned will be
passed as a `Buffer` object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) |

#### Returns

`Promise`<`string`\>

Fulfills with the resolved path upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:824

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

node_modules/@types/node/fs/promises.d.ts:830

▸ **realpath**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:836
