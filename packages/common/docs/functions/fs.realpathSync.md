# Function: realpathSync

[fs](../modules/fs.md).realpathSync

▸ **realpathSync**(`path`, `options?`): `string`

Returns the resolved pathname.

For detailed information, see the documentation of the asynchronous version of
this API: [realpath](fs.realpath.md).

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

node_modules/@types/node/fs.d.ts:1332

▸ **realpathSync**(`path`, `options`): `Buffer`

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1338

▸ **realpathSync**(`path`, `options?`): `string` \| `Buffer`

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1344
