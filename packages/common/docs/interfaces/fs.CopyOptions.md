# Interface: CopyOptions

[fs](../modules/fs.md).CopyOptions

## Hierarchy

- **`CopyOptions`**

  ↳ [`CopyOptionsSync`](fs.CopyOptionsSync.md)

## Properties

### dereference

• `Optional` **dereference**: `boolean`

Dereference symlinks.

**`Default`**

false

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

#### Defined in

node_modules/@types/fs-extra/index.d.ts:964

___

### preserveTimestamps

• `Optional` **preserveTimestamps**: `boolean`

When `true`, will set last modification and access times to the ones of the original source files.
When `false`, timestamp behavior is OS-dependent.

**`Default`**

false

#### Defined in

node_modules/@types/fs-extra/index.d.ts:970

___

### errorOnExist

• `Optional` **errorOnExist**: `boolean`

When `overwrite` is `false` and the destination exists, throw an error.

**`Default`**

false

#### Defined in

node_modules/@types/fs-extra/index.d.ts:975

___

### filter

• `Optional` **filter**: [`CopyFilterSync`](../types/fs.CopyFilterSync.md) \| [`CopyFilterAsync`](../types/fs.CopyFilterAsync.md)

Function to filter copied files/directories. Return `true` to copy the item, `false` to ignore it.
Can also return a `Promise` that resolves to `true` or `false` (or pass in an `async` function).

#### Defined in

node_modules/@types/fs-extra/index.d.ts:980
