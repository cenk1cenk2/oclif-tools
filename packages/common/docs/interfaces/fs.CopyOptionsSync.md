# Interface: CopyOptionsSync

[fs](../modules/fs.md).CopyOptionsSync

## Hierarchy

- [`CopyOptions`](fs.CopyOptions.md)

  ↳ **`CopyOptionsSync`**

## Properties

### dereference

• `Optional` **dereference**: `boolean`

Dereference symlinks.

**`Default`**

false

#### Inherited from

[CopyOptions](fs.CopyOptions.md).[dereference](fs.CopyOptions.md#dereference)

#### Defined in

node_modules/@types/fs-extra/index.d.ts:957

___

### overwrite

• `Optional` **overwrite**: `boolean`

Overwrite existing file or directory.
_Note that the copy operation will silently fail if you set this to `false` and the destination exists._
Use the `errorOnExist` option to change this behavior.

**`Default`**

true

#### Inherited from

[CopyOptions](fs.CopyOptions.md).[overwrite](fs.CopyOptions.md#overwrite)

#### Defined in

node_modules/@types/fs-extra/index.d.ts:964

___

### preserveTimestamps

• `Optional` **preserveTimestamps**: `boolean`

When `true`, will set last modification and access times to the ones of the original source files.
When `false`, timestamp behavior is OS-dependent.

**`Default`**

false

#### Inherited from

[CopyOptions](fs.CopyOptions.md).[preserveTimestamps](fs.CopyOptions.md#preservetimestamps)

#### Defined in

node_modules/@types/fs-extra/index.d.ts:970

___

### errorOnExist

• `Optional` **errorOnExist**: `boolean`

When `overwrite` is `false` and the destination exists, throw an error.

**`Default`**

false

#### Inherited from

[CopyOptions](fs.CopyOptions.md).[errorOnExist](fs.CopyOptions.md#erroronexist)

#### Defined in

node_modules/@types/fs-extra/index.d.ts:975

___

### filter

• `Optional` **filter**: [`CopyFilterSync`](../types/fs.CopyFilterSync.md)

Function to filter copied files/directories. Return `true` to copy the item, `false` to ignore it.

#### Overrides

[CopyOptions](fs.CopyOptions.md).[filter](fs.CopyOptions.md#filter)

#### Defined in

node_modules/@types/fs-extra/index.d.ts:987
