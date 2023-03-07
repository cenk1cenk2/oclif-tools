# Function: read

[fs](../modules/fs.md).read

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`): `Promise`<{ `bytesRead`: `number` ; `buffer`: `TBuffer`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset` | `number` | The offset in the buffer at which to start writing. |
| `length` | `number` | The number of bytes to read. |
| `position` | `number` | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position. |

#### Returns

`Promise`<{ `bytesRead`: `number` ; `buffer`: `TBuffer`  }\>

#### Defined in

node_modules/@types/node/fs.d.ts:2305

▸ **read**<`TBuffer`\>(`fd`, `options`): `Promise`<{ `bytesRead`: `number` ; `buffer`: `TBuffer`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`ReadAsyncOptions`](../interfaces/fs.ReadAsyncOptions.md)<`TBuffer`\> |

#### Returns

`Promise`<{ `bytesRead`: `number` ; `buffer`: `TBuffer`  }\>

#### Defined in

node_modules/@types/node/fs.d.ts:2315

▸ **read**(`fd`): `Promise`<{ `bytesRead`: `number` ; `buffer`: `NodeJS.ArrayBufferView`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`Promise`<{ `bytesRead`: `number` ; `buffer`: `NodeJS.ArrayBufferView`  }\>

#### Defined in

node_modules/@types/node/fs.d.ts:2322

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

Read data from the file specified by `fd`.

The callback is given the three arguments, `(err, bytesRead, buffer)`.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

If this method is invoked as its `util.promisify()` ed version, it returns
a promise for an `Object` with `bytesRead` and `buffer` properties.

**`Since`**

v0.0.2

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | - |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset` | `number` | The position in `buffer` to write the data to. |
| `length` | `number` | The number of bytes to read. |
| `position` | [`ReadPosition`](../types/fs.ReadPosition.md) | Specifies where to begin reading from in the file. If `position` is `null` or `-1 `, data will be read from the current file position, and the file position will be updated. If `position` is an integer, the file position will be unchanged. |
| `callback` | (`err`: `ErrnoException`, `bytesRead`: `number`, `buffer`: `TBuffer`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2274

▸ **read**<`TBuffer`\>(`fd`, `options`, `callback`): `void`

Similar to the above `fs.read` function, this version takes an optional `options` object.
If not otherwise specified in an `options` object,
`buffer` defaults to `Buffer.alloc(16384)`,
`offset` defaults to `0`,
`length` defaults to `buffer.byteLength`, `- offset` as of Node 17.6.0
`position` defaults to `null`

**`Since`**

v12.17.0, 13.11.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`ReadAsyncOptions`](../interfaces/fs.ReadAsyncOptions.md)<`TBuffer`\> |
| `callback` | (`err`: `ErrnoException`, `bytesRead`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2291

▸ **read**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: `ErrnoException`, `bytesRead`: `number`, `buffer`: `ArrayBufferView`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2296
