# Function: readdir

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).readdir

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

Reads the contents of a directory.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames. If the `encoding` is set to `'buffer'`, the filenames returned
will be passed as `Buffer` objects.

If `options.withFileTypes` is set to `true`, the resolved array will contain `fs.Dirent` objects.

```js
import { readdir } from 'fs/promises';

try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}
```

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } |

#### Returns

`Promise`<`string`[]\>

Fulfills with an array of the names of the files in the directory excluding `'.'` and `'..'`.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:628

▸ **readdir**(`path`, `options`): `Promise`<`Buffer`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:642

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| `Buffer`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes?`: ``false``  } | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`[] \| `Buffer`[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:656

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](../classes/fs.Dirent.md)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`ObjectEncodingOptions`](../interfaces/fs.ObjectEncodingOptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

`Promise`<[`Dirent`](../classes/fs.Dirent.md)[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:670
