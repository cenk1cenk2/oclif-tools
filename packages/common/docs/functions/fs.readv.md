# Function: readv

[fs](../modules/fs.md).readv

▸ **readv**(`fd`, `buffers`, `cb`): `void`

Read from a file specified by `fd` and write to an array of `ArrayBufferView`s
using `readv()`.

`position` is the offset from the beginning of the file from where data
should be read. If `typeof position !== 'number'`, the data will be read
from the current position.

The callback will be given three arguments: `err`, `bytesRead`, and`buffers`. `bytesRead` is how many bytes were read from the file.

If this method is invoked as its `util.promisify()` ed version, it returns
a promise for an `Object` with `bytesRead` and `buffers` properties.

**`Since`**

v13.13.0, v12.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `cb` | (`err`: `ErrnoException`, `bytesRead`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3721

▸ **readv**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position` | `number` |
| `cb` | (`err`: `ErrnoException`, `bytesRead`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3722
