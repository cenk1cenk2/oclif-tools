# Function: writev

[fs](../modules/fs.md).writev

▸ **writev**(`fd`, `buffers`, `position?`): `Promise`<[`WriteVResult`](../interfaces/fs.WriteVResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`Promise`<[`WriteVResult`](../interfaces/fs.WriteVResult.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:3798

▸ **writev**(`fd`, `buffers`, `cb`): `void`

Write an array of `ArrayBufferView`s to the file specified by `fd` using`writev()`.

`position` is the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'`, the data will be written
at the current position.

The callback will be given three arguments: `err`, `bytesWritten`, and`buffers`. `bytesWritten` is how many bytes were written from `buffers`.

If this method is `util.promisify()` ed, it returns a promise for an`Object` with `bytesWritten` and `buffers` properties.

It is unsafe to use `fs.writev()` multiple times on the same file without
waiting for the callback. For this scenario, use [createWriteStream](fs.createWriteStream.md).

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

**`Since`**

v12.9.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `cb` | (`err`: `ErrnoException`, `bytesWritten`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3786

▸ **writev**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | readonly `ArrayBufferView`[] |
| `position` | `number` |
| `cb` | (`err`: `ErrnoException`, `bytesWritten`: `number`, `buffers`: `ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3787
