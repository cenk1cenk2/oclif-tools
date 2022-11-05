# Interface: CopySyncOptions

[fs](../modules/fs.md).CopySyncOptions

## Hierarchy

- `CopyOptionsBase`

  ↳ **`CopySyncOptions`**

## Properties

### dereference

• `Optional` **dereference**: `boolean`

Dereference symlinks

**`Default`**

false

#### Inherited from

CopyOptionsBase.dereference

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3799

___

### errorOnExist

• `Optional` **errorOnExist**: `boolean`

When `force` is `false`, and the destination
exists, throw an error.

**`Default`**

false

#### Inherited from

CopyOptionsBase.errorOnExist

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3805

___

### force

• `Optional` **force**: `boolean`

Overwrite existing file or directory. _The copy
operation will ignore errors if you set this to false and the destination
exists. Use the `errorOnExist` option to change this behavior.

**`Default`**

true

#### Inherited from

CopyOptionsBase.force

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3812

___

### preserveTimestamps

• `Optional` **preserveTimestamps**: `boolean`

When `true` timestamps from `src` will
be preserved.

**`Default`**

false

#### Inherited from

CopyOptionsBase.preserveTimestamps

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3818

___

### recursive

• `Optional` **recursive**: `boolean`

Copy directories recursively.

**`Default`**

false

#### Inherited from

CopyOptionsBase.recursive

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3823

___

### verbatimSymlinks

• `Optional` **verbatimSymlinks**: `boolean`

When true, path resolution for symlinks will be skipped

**`Default`**

false

#### Inherited from

CopyOptionsBase.verbatimSymlinks

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3828

## Methods

### filter

▸ `Optional` **filter**(`source`, `destination`): `boolean`

Function to filter copied files/directories. Return
`true` to copy the item, `false` to ignore it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3842
