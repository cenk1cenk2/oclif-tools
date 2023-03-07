# Function: write

[fs](../modules/fs.md).write

▸ **write**<`TBuffer`\>(`fd`, `buffer?`, `offset?`, `length?`, `position?`): `Promise`<{ `bytesWritten`: `number` ; `buffer`: `TBuffer`  }\>

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer?` | `TBuffer` | - |
| `offset?` | `number` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `length?` | `number` | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
| `position?` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |

#### Returns

`Promise`<{ `bytesWritten`: `number` ; `buffer`: `TBuffer`  }\>

#### Defined in

node_modules/@types/node/fs.d.ts:2197

▸ **write**(`fd`, `string`, `position?`, `encoding?`): `Promise`<{ `bytesWritten`: `number` ; `buffer`: `string`  }\>

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position?` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | `BufferEncoding` | The expected string encoding. |

#### Returns

`Promise`<{ `bytesWritten`: `number` ; `buffer`: `string`  }\>

#### Defined in

node_modules/@types/node/fs.d.ts:2214

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

Write `buffer` to the file specified by `fd`.

`offset` determines the part of the buffer to be written, and `length` is
an integer specifying the number of bytes to write.

`position` refers to the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'`, the data will be written
at the current position. See [`pwrite(2)`](http://man7.org/linux/man-pages/man2/pwrite.2.html).

The callback will be given three arguments `(err, bytesWritten, buffer)` where`bytesWritten` specifies how many _bytes_ were written from `buffer`.

If this method is invoked as its `util.promisify()` ed version, it returns
a promise for an `Object` with `bytesWritten` and `buffer` properties.

It is unsafe to use `fs.write()` multiple times on the same file without waiting
for the callback. For this scenario, [createWriteStream](fs.createWriteStream.md) is
recommended.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

**`Since`**

v0.0.2

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `position` | `number` |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2125

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `callback`): `void`

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | - |
| `offset` | `number` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `length` | `number` | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2139

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `callback`): `void`

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | - |
| `offset` | `number` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2151

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `callback`): `void`

Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | - |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2161

▸ **write**(`fd`, `string`, `position`, `encoding`, `callback`): `void`

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding` | `BufferEncoding` | The expected string encoding. |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `str`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2169

▸ **write**(`fd`, `string`, `position`, `callback`): `void`

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position` | `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `str`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2182

▸ **write**(`fd`, `string`, `callback`): `void`

Asynchronously writes `string` to the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `callback` | (`err`: `ErrnoException`, `written`: `number`, `str`: `string`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2188
