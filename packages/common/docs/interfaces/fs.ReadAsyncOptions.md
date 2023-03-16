# Interface: ReadAsyncOptions<TBuffer\>

[fs](../modules/fs.md).ReadAsyncOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `NodeJS.ArrayBufferView` |

## Hierarchy

- [`ReadSyncOptions`](fs.ReadSyncOptions.md)

  ↳ **`ReadAsyncOptions`**

## Properties

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Inherited from

[ReadSyncOptions](fs.ReadSyncOptions.md).[offset](fs.ReadSyncOptions.md#offset)

#### Defined in

node_modules/@types/node/fs.d.ts:2344

___

### length

• `Optional` **length**: `number`

**`Default`**

`length of buffer`

#### Inherited from

[ReadSyncOptions](fs.ReadSyncOptions.md).[length](fs.ReadSyncOptions.md#length)

#### Defined in

node_modules/@types/node/fs.d.ts:2348

___

### position

• `Optional` **position**: [`ReadPosition`](../types/fs.ReadPosition.md)

**`Default`**

null

#### Inherited from

[ReadSyncOptions](fs.ReadSyncOptions.md).[position](fs.ReadSyncOptions.md#position)

#### Defined in

node_modules/@types/node/fs.d.ts:2352

___

### buffer

• `Optional` **buffer**: `TBuffer`

#### Defined in

node_modules/@types/node/fs.d.ts:2355
