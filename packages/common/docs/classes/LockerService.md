# Class: LockerService<LockFile\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `LockFile` | extends [`LockableData`](../types/LockableData.md) = [`LockableData`](../types/LockableData.md) |

## Properties

### toLock

• `Private` **toLock**: [`LockData`](../interfaces/LockData.md)<`any`\>[] = `[]`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:11

___

### toUnlock

• `Private` **toUnlock**: [`UnlockData`](../interfaces/UnlockData.md)[] = `[]`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:12

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/locker/locker.service.ts:13

___

### fs

• `Private` **fs**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/lib/locker/locker.service.ts:14

___

### file

• `Private` **file**: `string`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:16

___

### parser

• `Private` `Optional` **parser**: [`GenericParser`](GenericParser.md)

#### Defined in

packages/common/src/lib/locker/locker.service.ts:16

___

### root

• `Private` `Optional` **root**: `string`[]

#### Defined in

packages/common/src/lib/locker/locker.service.ts:16

## Constructors

### constructor

• **new LockerService**<`LockFile`\>(`file`, `parser?`, `root?`, `context?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LockFile` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `parser?` | [`GenericParser`](GenericParser.md) |
| `root?` | `string`[] |
| `context?` | `string` |

#### Defined in

packages/common/src/lib/locker/locker.service.ts:16

## Methods

### hasLock

▸ **hasLock**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:28

___

### hasUnlock

▸ **hasUnlock**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:32

___

### addLock

▸ **addLock**<`T`\>(`...data`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | [`LockData`](../interfaces/LockData.md)<`T`\>[] |

#### Returns

`void`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:36

___

### addUnlock

▸ **addUnlock**(`...data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | [`UnlockData`](../interfaces/UnlockData.md)[] |

#### Returns

`void`

#### Defined in

packages/common/src/lib/locker/locker.service.ts:40

___

### lockAll

▸ **lockAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:44

___

### unlockAll

▸ **unlockAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:52

___

### all

▸ **all**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:60

___

### lock

▸ **lock**<`T`\>(`...data`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | [`LockData`](../interfaces/LockData.md)<`T`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:65

___

### unlock

▸ **unlock**(`...data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | [`UnlockData`](../interfaces/UnlockData.md)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:105

___

### read

▸ **read**(): `Promise`<`LockFile`\>

#### Returns

`Promise`<`LockFile`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:153

___

### tryRead

▸ **tryRead**(): `Promise`<`LockFile`\>

#### Returns

`Promise`<`LockFile`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:157

___

### write

▸ **write**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `LockFile` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/locker/locker.service.ts:165

___

### buildPath

▸ `Private` **buildPath**<`T`\>(`d`): `string`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<[`CommonLockerData`](../interfaces/CommonLockerData.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `T` |

#### Returns

`string`[]

#### Defined in

packages/common/src/lib/locker/locker.service.ts:175

___

### normalizePath

▸ `Private` **normalizePath**(`path`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| (`string` \| `number`)[] |

#### Returns

`string`[]

#### Defined in

packages/common/src/lib/locker/locker.service.ts:183
