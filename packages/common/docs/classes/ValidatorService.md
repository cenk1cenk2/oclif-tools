# Class: ValidatorService

## Properties

### instance

▪ `Static` `Private` **instance**: [`ValidatorService`](ValidatorService.md)

#### Defined in

packages/common/src/lib/validator/validator.service.ts:10

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/validator/validator.service.ts:11

___

### options

• `Optional` **options**: [`ValidatorServiceOptions`](../interfaces/ValidatorServiceOptions.md)

#### Defined in

packages/common/src/lib/validator/validator.service.ts:13

## Constructors

### constructor

• **new ValidatorService**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ValidatorServiceOptions`](../interfaces/ValidatorServiceOptions.md) |

#### Defined in

packages/common/src/lib/validator/validator.service.ts:13

## Methods

### validate

▸ **validate**<`T`\>(`classType`, `object`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classType` | [`ClassType`](../types/ClassType.md)<`T`\> |
| `object` | `T` |
| `options?` | [`ValidatorServiceOptions`](../interfaces/ValidatorServiceOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/validator/validator.service.ts:36

___

### validateSync

▸ **validateSync**<`T`\>(`classType`, `object`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classType` | [`ClassType`](../types/ClassType.md)<`T`\> |
| `object` | `T` |
| `options?` | [`ValidatorServiceOptions`](../interfaces/ValidatorServiceOptions.md) |

#### Returns

`T`

#### Defined in

packages/common/src/lib/validator/validator.service.ts:52

___

### logValidationError

▸ `Private` **logValidationError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `ValidationError` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/validator/validator.service.ts:68
