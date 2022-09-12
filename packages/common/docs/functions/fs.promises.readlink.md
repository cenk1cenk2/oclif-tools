# Function: readlink

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).readlink

▸ **readlink**(`path`, `options?`): `Promise`<`string`\>

Reads the contents of the symbolic link referred to by `path`. See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more detail. The promise is
resolved with the`linkString` upon success.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `'buffer'`, the link path
returned will be passed as a `Buffer` object.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) |

#### Returns

`Promise`<`string`\>

Fulfills with the `linkString` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:669

▸ **readlink**(`path`, `options`): `Promise`<`Buffer`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:675

▸ **readlink**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `string` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:681
