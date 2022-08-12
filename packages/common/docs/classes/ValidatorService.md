# Class: ValidatorService

## Properties

### logger

• `Private` `Readonly` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/validator/validator.service.ts:10

---

### options

• `Optional` **options**: [`ValidatorServiceOptions`](../interfaces/ValidatorServiceOptions.md)

#### Defined in

packages/common/src/lib/validator/validator.service.ts:12

## Constructors

### constructor

• **new ValidatorService**(`options?`)

#### Parameters

| Name       | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| `options?` | [`ValidatorServiceOptions`](../interfaces/ValidatorServiceOptions.md) |

#### Defined in

packages/common/src/lib/validator/validator.service.ts:12

## Methods

### validate

▸ **validate**<`T`\>(`classType`, `object`): `Promise`<`T`\>

#### Type parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `T`  | extends `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name        | Type                                       |
| :---------- | :----------------------------------------- |
| `classType` | [`ClassType`](../types/ClassType.md)<`T`\> |
| `object`    | `T`                                        |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/common/src/lib/validator/validator.service.ts:25

---

### validateSync

▸ **validateSync**<`T`\>(`classType`, `object`): `T`

#### Type parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `T`  | extends `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name        | Type                                       |
| :---------- | :----------------------------------------- |
| `classType` | [`ClassType`](../types/ClassType.md)<`T`\> |
| `object`    | `T`                                        |

#### Returns

`T`

#### Defined in

packages/common/src/lib/validator/validator.service.ts:41

---

### logValidationError

▸ `Private` **logValidationError**(`err`): `void`

#### Parameters

| Name  | Type              |
| :---- | :---------------- |
| `err` | `ValidationError` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/validator/validator.service.ts:57
