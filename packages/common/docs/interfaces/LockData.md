# Interface: LockData<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LockableData`](../types/LockableData.md) = [`LockableData`](../types/LockableData.md) |

## Hierarchy

- `Partial`<[`CommonLockerData`](CommonLockerData.md)\>

  ↳ **`LockData`**

## Properties

### path

• `Optional` **path**: `string` \| `string`[]

#### Inherited from

Partial.path

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:4

___

### enabled

• `Optional` **enabled**: `boolean`

#### Inherited from

Partial.enabled

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:5

___

### root

• `Optional` **root**: `boolean`

#### Inherited from

Partial.root

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:6

___

### data

• **data**: `T`

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:12

___

### merge

• `Optional` **merge**: [`MergeStrategy`](../enums/MergeStrategy.md)

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:13
