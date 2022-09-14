# Class: Dir

[fs](../modules/fs.md).Dir

A class representing a directory stream.

Created by [opendir](../functions/fs.opendir.md), [opendirSync](../functions/fs.opendirSync.md), or `fsPromises.opendir()`.

```js
import { opendir } from 'fs/promises';

try {
  const dir = await opendir('./');
  for await (const dirent of dir)
    console.log(dirent.name);
} catch (err) {
  console.error(err);
}
```

When using the async iterator, the `fs.Dir` object will be automatically
closed after the iterator exits.

**`Since`**

v12.12.0

## Implements

- `AsyncIterable`<[`Dirent`](fs.Dirent.md)\>

## Constructors

### constructor

• **new Dir**()

## Properties

### path

• `Readonly` **path**: `string`

The read-only path of this directory as was provided to [opendir](../functions/fs.opendir.md),[opendirSync](../functions/fs.opendirSync.md), or `fsPromises.opendir()`.

**`Since`**

v12.12.0

#### Defined in

node_modules/@types/node/fs.d.ts:214

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<[`Dirent`](fs.Dirent.md)\>

Asynchronously iterates over the directory via `readdir(3)` until all entries have been read.

#### Returns

`AsyncIterableIterator`<[`Dirent`](fs.Dirent.md)\>

#### Implementation of

AsyncIterable.\_\_@asyncIterator@273

#### Defined in

node_modules/@types/node/fs.d.ts:218

___

### close

▸ **close**(): `Promise`<`void`\>

Asynchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

A promise is returned that will be resolved after the resource has been
closed.

**`Since`**

v12.12.0

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:227

▸ **close**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`NoParamCallback`](../types/fs.NoParamCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:228

___

### closeSync

▸ **closeSync**(): `void`

Synchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

**`Since`**

v12.12.0

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:234

___

### read

▸ **read**(): `Promise`<[`Dirent`](fs.Dirent.md)\>

Asynchronously read the next directory entry via [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) as an `fs.Dirent`.

A promise is returned that will be resolved with an `fs.Dirent`, or `null`if there are no more directory entries to read.

Directory entries returned by this function are in no particular order as
provided by the operating system's underlying directory mechanisms.
Entries added or removed while iterating over the directory might not be
included in the iteration results.

**`Since`**

v12.12.0

#### Returns

`Promise`<[`Dirent`](fs.Dirent.md)\>

containing {fs.Dirent|null}

#### Defined in

node_modules/@types/node/fs.d.ts:247

▸ **read**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`err`: `ErrnoException`, `dirEnt`: [`Dirent`](fs.Dirent.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:248

___

### readSync

▸ **readSync**(): [`Dirent`](fs.Dirent.md)

Synchronously read the next directory entry as an `fs.Dirent`. See the
POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more detail.

If there are no more directory entries to read, `null` will be returned.

Directory entries returned by this function are in no particular order as
provided by the operating system's underlying directory mechanisms.
Entries added or removed while iterating over the directory might not be
included in the iteration results.

**`Since`**

v12.12.0

#### Returns

[`Dirent`](fs.Dirent.md)

#### Defined in

node_modules/@types/node/fs.d.ts:261
