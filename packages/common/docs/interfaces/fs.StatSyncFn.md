# Interface: StatSyncFn

[fs](../modules/fs.md).StatSyncFn

## Hierarchy

- `Function`

  ↳ **`StatSyncFn`**

## Callable

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `undefined` |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:972

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`StatSyncOptions`](fs.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:973

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](fs.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatSyncOptions`](fs.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`BigIntStats`](fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:980

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`StatSyncOptions`](fs.StatSyncOptions.md) & { `bigint?`: ``false``  } |

#### Returns

[`Stats`](../classes/fs.Stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:987

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](fs.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatSyncOptions`](fs.StatSyncOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:993

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](fs.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | [`StatSyncOptions`](fs.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } |

#### Returns

[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:999

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](fs.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`StatSyncOptions`](fs.StatSyncOptions.md) |

#### Returns

[`Stats`](../classes/fs.Stats.md) \| [`BigIntStats`](fs.BigIntStats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1006

## Properties

### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

Function.name

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:95

___

### prototype

• **prototype**: `any`

#### Inherited from

Function.prototype

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:301

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Function.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:302

___

### arguments

• **arguments**: `any`

#### Inherited from

Function.arguments

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:305

___

### caller

• **caller**: `Function`

#### Inherited from

Function.caller

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:306

## Methods

### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

Function.\_\_@hasInstance@258

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:164

___

### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the this object. |
| `argArray?` | `any` | A set of arguments to be passed to the function. |

#### Returns

`any`

#### Inherited from

Function.apply

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:281

___

### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the current object. |
| `...argArray` | `any`[] | A list of arguments to be passed to the method. |

#### Returns

`any`

#### Inherited from

Function.call

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:288

___

### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[] | A list of arguments to be passed to the new function. |

#### Returns

`any`

#### Inherited from

Function.bind

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:296

___

### toString

▸ **toString**(): `string`

Returns a string representation of a function.

#### Returns

`string`

#### Inherited from

Function.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:299
