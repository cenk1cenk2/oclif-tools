# Class: Dirent

[fs](../modules/fs.md).Dirent

A representation of a directory entry, which can be a file or a subdirectory
within the directory, as returned by reading from an `fs.Dir`. The
directory entry is a combination of the file name and file type pairs.

Additionally, when [readdir](../functions/fs.readdir.md) or [readdirSync](../functions/fs.readdirSync.md) is called with
the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s.

**`Since`**

v10.10.0

## Constructors

### constructor

• **new Dirent**()

## Methods

### isFile

▸ **isFile**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a regular file.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:148

___

### isDirectory

▸ **isDirectory**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a file system
directory.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:154

___

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a block device.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:159

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a character device.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:164

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a symbolic link.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:169

___

### isFIFO

▸ **isFIFO**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a first-in-first-out
(FIFO) pipe.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:175

___

### isSocket

▸ **isSocket**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a socket.

**`Since`**

v10.10.0

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:180

## Properties

### name

• **name**: `string`

The file name that this `fs.Dirent` object refers to. The type of this
value is determined by the `options.encoding` passed to [readdir](../functions/fs.readdir.md) or [readdirSync](../functions/fs.readdirSync.md).

**`Since`**

v10.10.0

#### Defined in

node_modules/@types/node/fs.d.ts:186
