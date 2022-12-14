# Function: mkdtemp

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).mkdtemp

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string`\>

Creates a unique temporary directory. A unique directory name is generated by
appending six random characters to the end of the provided `prefix`. Due to
platform inconsistencies, avoid trailing `X` characters in `prefix`. Some
platforms, notably the BSDs, can return more than six random characters, and
replace trailing `X` characters in `prefix` with random characters.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js
import { mkdtemp } from 'fs/promises';

try {
  await mkdtemp(path.join(os.tmpdir(), 'foo-'));
} catch (err) {
  console.error(err);
}
```

The `fsPromises.mkdtemp()` method will append the six randomly selected
characters directly to the `prefix` string. For instance, given a directory`/tmp`, if the intention is to create a temporary directory _within_`/tmp`, the`prefix` must end with a trailing
platform-specific path separator
(`require('path').sep`).

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) |

#### Returns

`Promise`<`string`\>

Fulfills with a string containing the filesystem path of the newly created temporary directory.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:864

▸ **mkdtemp**(`prefix`, `options`): `Promise`<`Buffer`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:870

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:876
