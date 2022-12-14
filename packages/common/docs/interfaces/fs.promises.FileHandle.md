# Interface: FileHandle

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).FileHandle

## Properties

### fd

• `Readonly` **fd**: `number`

The numeric file descriptor managed by the {FileHandle} object.

**`Since`**

v10.0.0

#### Defined in

node_modules/@types/node/fs/promises.d.ts:89

## Methods

### appendFile

▸ **appendFile**(`data`, `options?`): `Promise`<`void`\>

Alias of `filehandle.writeFile()`.

When operating on file handles, the mode cannot be changed from what it was set
to with `fsPromises.open()`. Therefore, this is equivalent to `filehandle.writeFile()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](fs.ObjectEncodingOptions.md) & [`FlagAndOpenMode`](fs.promises.FlagAndOpenMode.md) |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:98

___

### chown

▸ **chown**(`uid`, `gid`): `Promise`<`void`\>

Changes the ownership of the file. A wrapper for [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html).

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uid` | `number` | The file's new owner's user id. |
| `gid` | `number` | The file's new group's group id. |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:106

___

### chmod

▸ **chmod**(`mode`): `Promise`<`void`\>

Modifies the permissions on the file. See [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html).

**`Since`**

v10.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | `Mode` | the file mode bit mask. |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:113

___

### createReadStream

▸ **createReadStream**(`options?`): [`ReadStream`](../classes/fs.ReadStream.md)

Unlike the 16 kb default `highWaterMark` for a `stream.Readable`, the stream
returned by this method has a default `highWaterMark` of 64 kb.

`options` can include `start` and `end` values to read a range of bytes from
the file instead of the entire file. Both `start` and `end` are inclusive and
start counting at 0, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. If `start` is
omitted or `undefined`, `filehandle.createReadStream()` reads sequentially from
the current file position. The `encoding` can be any one of those accepted by `Buffer`.

If the `FileHandle` points to a character device that only supports blocking
reads (such as keyboard or sound card), read operations do not finish until data
is available. This can prevent the process from exiting and the stream from
closing naturally.

By default, the stream will emit a `'close'` event after it has been
destroyed.  Set the `emitClose` option to `false` to change this behavior.

```js
import { open } from 'fs/promises';

const fd = await open('/dev/input/event0');
// Create a stream from some character device.
const stream = fd.createReadStream();
setTimeout(() => {
  stream.close(); // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null);
  stream.read(0);
}, 100);
```

If `autoClose` is false, then the file descriptor won't be closed, even if
there's an error. It is the application's responsibility to close it and make
sure there's no file descriptor leak. If `autoClose` is set to true (default
behavior), on `'error'` or `'end'` the file descriptor will be closed
automatically.

An example to read the last 10 bytes of a file which is 100 bytes long:

```js
import { open } from 'fs/promises';

const fd = await open('sample.txt');
fd.createReadStream({ start: 90, end: 99 });
```

**`Since`**

v16.11.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CreateReadStreamOptions`](fs.promises.CreateReadStreamOptions.md) |

#### Returns

[`ReadStream`](../classes/fs.ReadStream.md)

#### Defined in

node_modules/@types/node/fs/promises.d.ts:167

___

### createWriteStream

▸ **createWriteStream**(`options?`): [`WriteStream`](../classes/fs.WriteStream.md)

`options` may also include a `start` option to allow writing data at some
position past the beginning of the file, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. Modifying a file rather than
replacing it may require the `flags` `open` option to be set to `r+` rather than
the default `r`. The `encoding` can be any one of those accepted by `Buffer`.

If `autoClose` is set to true (default behavior) on `'error'` or `'finish'`the file descriptor will be closed automatically. If `autoClose` is false,
then the file descriptor won't be closed, even if there's an error.
It is the application's responsibility to close it and make sure there's no
file descriptor leak.

By default, the stream will emit a `'close'` event after it has been
destroyed.  Set the `emitClose` option to `false` to change this behavior.

**`Since`**

v16.11.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CreateWriteStreamOptions`](fs.promises.CreateWriteStreamOptions.md) |

#### Returns

[`WriteStream`](../classes/fs.WriteStream.md)

#### Defined in

node_modules/@types/node/fs/promises.d.ts:184

___

### datasync

▸ **datasync**(): `Promise`<`void`\>

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX [`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details.

Unlike `filehandle.sync` this method does not flush modified metadata.

**`Since`**

v10.0.0

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:193

___

### sync

▸ **sync**(): `Promise`<`void`\>

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail.

**`Since`**

v10.0.0

#### Returns

`Promise`<`void`\>

Fufills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:201

___

### read

▸ **read**<`T`\>(`buffer`, `offset?`, `length?`, `position?`): `Promise`<[`FileReadResult`](fs.promises.FileReadResult.md)<`T`\>\>

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

**`Since`**

v10.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `T` | A buffer that will be filled with the file data read. |
| `offset?` | `number` | The location in the buffer at which to start filling. |
| `length?` | `number` | The number of bytes to read. |
| `position?` | `number` | The location where to begin reading data from the file. If `null`, data will be read from the current file position, and the position will be updated. If `position` is an integer, the current file position will remain unchanged. |

#### Returns

`Promise`<[`FileReadResult`](fs.promises.FileReadResult.md)<`T`\>\>

Fulfills upon success with an object with two properties:

#### Defined in

node_modules/@types/node/fs/promises.d.ts:215

▸ **read**<`T`\>(`options?`): `Promise`<[`FileReadResult`](fs.promises.FileReadResult.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ArrayBufferView` = `Buffer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FileReadOptions`](fs.promises.FileReadOptions.md)<`T`\> |

#### Returns

`Promise`<[`FileReadResult`](fs.promises.FileReadResult.md)<`T`\>\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:216

___

### readableWebStream

▸ **readableWebStream**(): `ReadableStream`<`any`\>

Returns a `ReadableStream` that may be used to read the files data.

An error will be thrown if this method is called more than once or is called after the `FileHandle` is closed
or closing.

```js
import { open } from 'node:fs/promises';

const file = await open('./some/file/to/read');

for await (const chunk of file.readableWebStream())
  console.log(chunk);

await file.close();
```

While the `ReadableStream` will read the file to completion, it will not close the `FileHandle` automatically. User code must still call the `fileHandle.close()` method.

**`Since`**

v17.0.0

#### Returns

`ReadableStream`<`any`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:239

___

### readFile

▸ **readFile**(`options?`): `Promise`<`Buffer`\>

Asynchronously reads the entire contents of a file.

If `options` is a string, then it specifies the `encoding`.

The `FileHandle` has to support reading.

If one or more `filehandle.read()` calls are made on a file handle and then a`filehandle.readFile()` call is made, the data will be read from the current
position till the end of the file. It doesn't always read from the beginning
of the file.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.encoding?` | ``null`` |
| `options.flag?` | [`OpenMode`](../types/fs.OpenMode.md) |

#### Returns

`Promise`<`Buffer`\>

Fulfills upon a successful read with the contents of the file. If no encoding is specified (using `options.encoding`), the data is returned as a {Buffer} object. Otherwise, the
data will be a string.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:254

▸ **readFile**(`options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: [`OpenMode`](../types/fs.OpenMode.md)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:266

▸ **readFile**(`options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](fs.ObjectEncodingOptions.md) & { `flag?`: [`OpenMode`](../types/fs.OpenMode.md)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:280

___

### readLines

▸ **readLines**(`options?`): `Interface`

Convenience method to create a `readline` interface and stream over the file. For example:

```js
import { open } from 'node:fs/promises';

const file = await open('./some/file/to/read');

for await (const line of file.readLines()) {
  console.log(line);
}
```

**`Since`**

v18.11.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`CreateReadStreamOptions`](fs.promises.CreateReadStreamOptions.md) | See `filehandle.createReadStream()` for the options. |

#### Returns

`Interface`

#### Defined in

node_modules/@types/node/fs/promises.d.ts:304

___

### stat

▸ **stat**(`opts?`): `Promise`<[`Stats`](../classes/fs.Stats.md)\>

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StatOptions`](fs.StatOptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md)\>

Fulfills with an {fs.Stats} for the file.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:309

▸ **stat**(`opts`): `Promise`<[`BigIntStats`](fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StatOptions`](fs.StatOptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:314

▸ **stat**(`opts?`): `Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](fs.BigIntStats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StatOptions`](fs.StatOptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](fs.BigIntStats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:319

___

### truncate

▸ **truncate**(`len?`): `Promise`<`void`\>

Truncates the file.

If the file was larger than `len` bytes, only the first `len` bytes will be
retained in the file.

The following example retains only the first four bytes of the file:

```js
import { open } from 'fs/promises';

let filehandle = null;
try {
  filehandle = await open('temp.txt', 'r+');
  await filehandle.truncate(4);
} finally {
  await filehandle?.close();
}
```

If the file previously was shorter than `len` bytes, it is extended, and the
extended part is filled with null bytes (`'\0'`):

If `len` is negative then `0` will be used.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `len?` | `number` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:348

___

### utimes

▸ **utimes**(`atime`, `mtime`): `Promise`<`void`\>

Change the file system timestamps of the object referenced by the `FileHandle` then resolves the promise with no arguments upon success.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `atime` | [`TimeLike`](../types/fs.TimeLike.md) |
| `mtime` | [`TimeLike`](../types/fs.TimeLike.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:353

___

### writeFile

▸ **writeFile**(`data`, `options?`): `Promise`<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.`data` can be a string, a buffer, an
[AsyncIterable](https://tc39.github.io/ecma262/#sec-asynciterable-interface) or
[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object.
The promise is resolved with no arguments upon success.

If `options` is a string, then it specifies the `encoding`.

The `FileHandle` has to support writing.

It is unsafe to use `filehandle.writeFile()` multiple times on the same file
without waiting for the promise to be resolved (or rejected).

If one or more `filehandle.write()` calls are made on a file handle and then a`filehandle.writeFile()` call is made, the data will be written from the
current position till the end of the file. It doesn't always write from the
beginning of the file.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `options?` | `BufferEncoding` \| [`ObjectEncodingOptions`](fs.ObjectEncodingOptions.md) & [`FlagAndOpenMode`](fs.promises.FlagAndOpenMode.md) & `Abortable` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:372

___

### write

▸ **write**<`TBuffer`\>(`buffer`, `offset?`, `length?`, `position?`): `Promise`<{ `bytesWritten`: `number` ; `buffer`: `TBuffer`  }\>

Write `buffer` to the file.

The promise is resolved with an object containing two properties:

It is unsafe to use `filehandle.write()` multiple times on the same file
without waiting for the promise to be resolved (or rejected). For this
scenario, use `filehandle.createWriteStream()`.

On Linux, positional writes do not work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

**`Since`**

v10.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `Uint8Array`<`TBuffer`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `TBuffer` | - |
| `offset?` | `number` | The start position from within `buffer` where the data to write begins. |
| `length?` | `number` | - |
| `position?` | `number` | The offset from the beginning of the file where the data from `buffer` should be written. If `position` is not a `number`, the data will be written at the current position. See the POSIX pwrite(2) documentation for more detail. |

#### Returns

`Promise`<{ `bytesWritten`: `number` ; `buffer`: `TBuffer`  }\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:391

▸ **write**(`data`, `position?`, `encoding?`): `Promise`<{ `bytesWritten`: `number` ; `buffer`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `position?` | `number` |
| `encoding?` | `BufferEncoding` |

#### Returns

`Promise`<{ `bytesWritten`: `number` ; `buffer`: `string`  }\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:400

___

### writev

▸ **writev**(`buffers`, `position?`): `Promise`<[`WriteVResult`](fs.WriteVResult-1.md)\>

Write an array of [ArrayBufferView](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) s to the file.

The promise is resolved with an object containing a two properties:

It is unsafe to call `writev()` multiple times on the same file without waiting
for the promise to be resolved (or rejected).

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

**`Since`**

v12.9.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | readonly `ArrayBufferView`[] | - |
| `position?` | `number` | The offset from the beginning of the file where the data from `buffers` should be written. If `position` is not a `number`, the data will be written at the current position. |

#### Returns

`Promise`<[`WriteVResult`](fs.WriteVResult-1.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:423

___

### readv

▸ **readv**(`buffers`, `position?`): `Promise`<[`ReadVResult`](fs.ReadVResult.md)\>

Read from a file and write to an array of [ArrayBufferView](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) s

**`Since`**

v13.13.0, v12.17.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | readonly `ArrayBufferView`[] | - |
| `position?` | `number` | The offset from the beginning of the file where the data should be read from. If `position` is not a `number`, the data will be read from the current position. |

#### Returns

`Promise`<[`ReadVResult`](fs.ReadVResult.md)\>

Fulfills upon success an object containing two properties:

#### Defined in

node_modules/@types/node/fs/promises.d.ts:430

___

### close

▸ **close**(): `Promise`<`void`\>

Closes the file handle after waiting for any pending operation on the handle to
complete.

```js
import { open } from 'fs/promises';

let filehandle;
try {
  filehandle = await open('thefile.txt', 'r');
} finally {
  await filehandle?.close();
}
```

**`Since`**

v10.0.0

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:448
