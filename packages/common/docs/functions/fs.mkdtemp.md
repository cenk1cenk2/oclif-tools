# Function: mkdtemp

[fs](../modules/fs.md).mkdtemp

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1728

▸ **mkdtemp**(`prefix`, `options`): `Promise`<`Buffer`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](../types/fs.BufferEncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1734

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs.d.ts:1740

▸ **mkdtemp**(`prefix`, `options`, `callback`): `void`

Creates a unique temporary directory.

Generates six random characters to be appended behind a required`prefix` to create a unique temporary directory. Due to platform
inconsistencies, avoid trailing `X` characters in `prefix`. Some platforms,
notably the BSDs, can return more than six random characters, and replace
trailing `X` characters in `prefix` with random characters.

The created directory path is passed as a string to the callback's second
parameter.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js
import { mkdtemp } from 'fs';

mkdtemp(path.join(os.tmpdir(), 'foo-'), (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
});
```

The `fs.mkdtemp()` method will append the six randomly selected characters
directly to the `prefix` string. For instance, given a directory `/tmp`, if the
intention is to create a temporary directory _within_`/tmp`, the `prefix`must end with a trailing platform-specific path separator
(`require('path').sep`).

```js
import { tmpdir } from 'os';
import { mkdtemp } from 'fs';

// The parent directory for the new temporary directory
const tmpDir = tmpdir();

// This method is *INCORRECT*:
mkdtemp(tmpDir, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Will print something similar to `/tmpabc123`.
  // A new temporary directory is created at the file system root
  // rather than *within* the /tmp directory.
});

// This method is *CORRECT*:
import { sep } from 'path';
mkdtemp(`${tmpDir}${sep}`, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Will print something similar to `/tmp/abc123`.
  // A new temporary directory is created within
  // the /tmp directory.
});
```

**`Since`**

v5.10.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) |
| `callback` | (`err`: `ErrnoException`, `folder`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1696

▸ **mkdtemp**(`prefix`, `options`, `callback`): `void`

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `folder`: `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1702

▸ **mkdtemp**(`prefix`, `options`, `callback`): `void`

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`EncodingOption`](../types/fs.EncodingOption.md) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |
| `callback` | (`err`: `ErrnoException`, `folder`: `string` \| `Buffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1716

▸ **mkdtemp**(`prefix`, `callback`): `void`

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `callback` | (`err`: `ErrnoException`, `folder`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1721
