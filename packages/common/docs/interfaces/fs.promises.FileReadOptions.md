# Interface: FileReadOptions<T\>

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).FileReadOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NodeJS.ArrayBufferView` = `Buffer` |

## Properties

### buffer

• `Optional` **buffer**: `T`

**`Default`**

`Buffer.alloc(0xffff)`

#### Defined in

node_modules/@types/node/fs/promises.d.ts:61

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Defined in

node_modules/@types/node/fs/promises.d.ts:65

___

### length

• `Optional` **length**: `number`

**`Default`**

`buffer.byteLength`

#### Defined in

node_modules/@types/node/fs/promises.d.ts:69

___

### position

• `Optional` **position**: `number`

#### Defined in

node_modules/@types/node/fs/promises.d.ts:70
