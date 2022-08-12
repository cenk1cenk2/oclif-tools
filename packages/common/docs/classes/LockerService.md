# Class: LockerService

## Properties

### toLock

• `Private` **toLock**: [`LockData`](../interfaces/LockData.md)<`any`\>[] = `[]`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:10

---

### toUnlock

• `Private` **toUnlock**: [`UnlockData`](../interfaces/UnlockData.md)[] = `[]`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:11

---

### logger

• `Private` `Readonly` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/locker/locker.service.ts:12

---

### fs

• `Private` `Readonly` **fs**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/lib/locker/locker.service.ts:13

## Constructors

### constructor

• **new LockerService**(`file`, `parser`, `root?`)

#### Parameters

| Name     | Type                                |
| :------- | :---------------------------------- |
| `file`   | `string`                            |
| `parser` | [`GenericParser`](GenericParser.md) |
| `root?`  | `string`                            |

#### Defined in

packages/common/src/lib/locker/locker.service.ts:15

## Methods

### hasLock

▸ **hasLock**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:17

---

### hasUnlock

▸ **hasUnlock**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:21

---

### addLock

▸ **addLock**<`T`\>(`data`): `void`

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | extends `unknown` |

#### Parameters

| Name   | Type                                                                                             |
| :----- | :----------------------------------------------------------------------------------------------- |
| `data` | [`LockData`](../interfaces/LockData.md)<`T`\> \| [`LockData`](../interfaces/LockData.md)<`T`\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:25

---

### addUnlock

▸ **addUnlock**(`data?`): `void`

#### Parameters

| Name    | Type                                                                                         |
| :------ | :------------------------------------------------------------------------------------------- |
| `data?` | [`UnlockData`](../interfaces/UnlockData.md) \| [`UnlockData`](../interfaces/UnlockData.md)[] |

#### Returns

`void`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:29

---

### lockAll

▸ **lockAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:33

---

### unlockAll

▸ **unlockAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:41

---

### lock

▸ **lock**<`T`\>(`data`): `Promise`<`void`\>

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | extends `unknown` |

#### Parameters

| Name   | Type                                                                                             |
| :----- | :----------------------------------------------------------------------------------------------- |
| `data` | [`LockData`](../interfaces/LockData.md)<`T`\> \| [`LockData`](../interfaces/LockData.md)<`T`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:49

---

### unlock

▸ **unlock**(`data?`): `Promise`<`void`\>

#### Parameters

| Name    | Type                                                                                         |
| :------ | :------------------------------------------------------------------------------------------- |
| `data?` | [`UnlockData`](../interfaces/UnlockData.md) \| [`UnlockData`](../interfaces/UnlockData.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:96

---

### read

▸ **read**<`LockFile`\>(): `Promise`<`LockFile`\>

#### Type parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `LockFile` | extends `unknown` = `any` |

#### Returns

`Promise`<`LockFile`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:137

---

### write

▸ **write**<`LockFile`\>(`data`): `Promise`<`void`\>

#### Type parameters

| Name       | Type              |
| :--------- | :---------------- |
| `LockFile` | extends `unknown` |

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `data` | `LockFile` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:141

---

### buildPath

▸ `Private` **buildPath**<`T`\>(`d`): `string`

#### Type parameters

| Name | Type                                                            |
| :--- | :-------------------------------------------------------------- |
| `T`  | extends [`CommonLockerData`](../interfaces/CommonLockerData.md) |

#### Parameters

| Name | Type |
| :--- | :--- |
| `d`  | `T`  |

#### Returns

`string`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:145
