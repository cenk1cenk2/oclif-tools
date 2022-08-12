# Interface: LockData<T\>

## Type parameters

| Name | Type                                                                                            |
| :--- | :---------------------------------------------------------------------------------------------- |
| `T`  | extends [`LockableData`](../types/LockableData.md) = [`LockableData`](../types/LockableData.md) |

## Hierarchy

- [`CommonLockerData`](CommonLockerData.md)

  ↳ **`LockData`**

## Properties

### path

• **path**: `string`

#### Inherited from

[CommonLockerData](CommonLockerData.md).[path](CommonLockerData.md#path)

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:4

---

### enabled

• `Optional` **enabled**: `boolean`

#### Inherited from

[CommonLockerData](CommonLockerData.md).[enabled](CommonLockerData.md#enabled)

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:5

---

### root

• `Optional` **root**: `boolean`

#### Inherited from

[CommonLockerData](CommonLockerData.md).[root](CommonLockerData.md#root)

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:6

---

### data

• **data**: `T`

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:12

---

### merge

• `Optional` **merge**: [`MergeStrategy`](../enums/MergeStrategy.md)

#### Defined in

packages/common/src/lib/locker/locker.interface.ts:13
