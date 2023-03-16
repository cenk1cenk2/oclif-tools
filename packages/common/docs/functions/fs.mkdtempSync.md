# Function: mkdtempSync

[fs](../modules/fs.md).mkdtempSync

▸ **mkdtempSync**(`prefix`, `options?`): `string`

Returns the created directory path.

For detailed information, see the documentation of the asynchronous version of
this API: [mkdtemp](fs.mkdtemp.md).

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

**`Since`**

v5.10.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/node/fs.d.ts:1852

▸ **mkdtempSync**(`prefix`, `options`): `Buffer`

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1858

▸ **mkdtempSync**(`prefix`, `options?`): `string` \| `Buffer`

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1864
