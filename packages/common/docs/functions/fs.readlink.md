# Function: readlink

[fs](../modules/fs.md).readlink

▸ **readlink**(`path`, `options?`): `Promise`<`string`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1202

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

node_modules/@types/node/fs.d.ts:1208

▸ **readlink**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1214

▸ **readlink**(`path`, `options`, `callback`): `void`

Reads the contents of the symbolic link referred to by `path`. The callback gets
two arguments `(err, linkString)`.

See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path passed to the callback. If the `encoding` is set to `'buffer'`,
the link path returned will be passed as a `Buffer` object.

**`Since`**

v0.1.31

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) |
| `callback` | (`err`: `ErrnoException`, `linkString`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1178

▸ **readlink**(`path`, `options`, `callback`): `void`

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `linkString`: `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1184

▸ **readlink**(`path`, `options`, `callback`): `void`

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `linkString`: `string` \| `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1190

▸ **readlink**(`path`, `callback`): `void`

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `callback` | (`err`: `ErrnoException`, `linkString`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1195
