# Class: StatsFs

[fs](../modules/fs.md).StatsFs

Provides information about a mounted file system

Objects returned from [statfs](../functions/fs.statfs.md) and [statfsSync](../functions/fs.statfsSync.md) are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`.

**`Since`**

v18.15.0

## Hierarchy

- [`StatsFsBase`](../interfaces/fs.StatsFsBase.md)<`number`\>

  ↳ **`StatsFs`**

## Constructors

### constructor

• **new StatsFs**()

#### Inherited from

StatsFsBase<number\>.constructor

## Properties

### type

• **type**: `number`

Type of file system.

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[type](../interfaces/fs.StatsFsBase.md#type)

#### Defined in

node_modules/@types/node/fs.d.ts:137

___

### bsize

• **bsize**: `number`

Optimal transfer block size.

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[bsize](../interfaces/fs.StatsFsBase.md#bsize)

#### Defined in

node_modules/@types/node/fs.d.ts:139

___

### blocks

• **blocks**: `number`

Total data blocks in file system.

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[blocks](../interfaces/fs.StatsFsBase.md#blocks)

#### Defined in

node_modules/@types/node/fs.d.ts:141

___

### bfree

• **bfree**: `number`

Free blocks in file system.

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[bfree](../interfaces/fs.StatsFsBase.md#bfree)

#### Defined in

node_modules/@types/node/fs.d.ts:143

___

### bavail

• **bavail**: `number`

Available blocks for unprivileged users

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[bavail](../interfaces/fs.StatsFsBase.md#bavail)

#### Defined in

node_modules/@types/node/fs.d.ts:145

___

### files

• **files**: `number`

Total file nodes in file system.

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[files](../interfaces/fs.StatsFsBase.md#files)

#### Defined in

node_modules/@types/node/fs.d.ts:147

___

### ffree

• **ffree**: `number`

Free file nodes in file system.

#### Inherited from

[StatsFsBase](../interfaces/fs.StatsFsBase.md).[ffree](../interfaces/fs.StatsFsBase.md#ffree)

#### Defined in

node_modules/@types/node/fs.d.ts:149
