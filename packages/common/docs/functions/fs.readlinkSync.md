# Function: readlinkSync

[fs](../modules/fs.md).readlinkSync

▸ **readlinkSync**(`path`, `options?`): `string`

Returns the symbolic link's string value.

See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `'buffer'`,
the link path returned will be passed as a `Buffer` object.

**`Since`**

v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1227

▸ **readlinkSync**(`path`, `options`): `Buffer`

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1233

▸ **readlinkSync**(`path`, `options?`): `string` \| `Buffer`

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:1239
