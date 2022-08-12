# Interface: IUtil

[config](../modules/config-1.md).IUtil

## Methods

### extendDeep

▸ **extendDeep**(`mergeInto`, `mergeFrom`, `depth?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mergeInto` | `any` |
| `mergeFrom` | `any` |
| `depth?` | `number` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:19

▸ **extendDeep**(`mergeInto`, `mergeFrom1`, `mergeFrom2`, `depth?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mergeInto` | `any` |
| `mergeFrom1` | `any` |
| `mergeFrom2` | `any` |
| `depth?` | `number` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:20

▸ **extendDeep**(`mergeInto`, ...`mergeFrom`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mergeInto` | `any` |
| `...mergeFrom` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:21

___

### cloneDeep

▸ **cloneDeep**(`copyFrom`, `depth?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `copyFrom` | `any` |
| `depth?` | `number` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:24

___

### equalsDeep

▸ **equalsDeep**(`object1`, `object2`, `dept?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object1` | `any` |
| `object2` | `any` |
| `dept?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/config/index.d.ts:27

___

### diffDeep

▸ **diffDeep**(`object1`, `object2`, `depth?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object1` | `any` |
| `object2` | `any` |
| `depth?` | `number` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:30

___

### makeImmutable

▸ **makeImmutable**(`object`, `propertyName?`, `propertyValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `propertyName?` | `string` |
| `propertyValue?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:33

___

### makeHidden

▸ **makeHidden**(`object`, `propertyName`, `propertyValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `propertyName` | `string` |
| `propertyValue?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:36

___

### getEnv

▸ **getEnv**(`varName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `varName` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/config/index.d.ts:39

___

### loadFileConfigs

▸ **loadFileConfigs**(`configDir?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configDir?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:42

___

### getConfigSources

▸ **getConfigSources**(): [`IConfigSource`](config-1.IConfigSource.md)[]

#### Returns

[`IConfigSource`](config-1.IConfigSource.md)[]

#### Defined in

node_modules/@types/config/index.d.ts:45

___

### toObject

▸ **toObject**(`config?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:48

___

### setModuleDefaults

▸ **setModuleDefaults**(`moduleName`, `defaults`): `any`

This allows module developers to attach their configurations onto the default configuration object
so they can be configured by the consumers of the module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `defaults` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@types/config/index.d.ts:54

## Properties

### getCustomEnvVars

• **getCustomEnvVars**: <T\>(`path`: `string`, `extensions`: `string`[]) => `Partial`<`T`\>

#### Type declaration

▸ <`T`\>(`path`, `extensions`): `Partial`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `extensions` | `string`[] |

##### Returns

`Partial`<`T`\>

#### Defined in

packages/common/src/lib/config/config.d.ts:6

___

### parseFile

• **parseFile**: <T\>(`path`: `string`, `options?`: { `skipConfigSources?`: `boolean`  }) => `T`

#### Type declaration

▸ <`T`\>(`path`, `options?`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.skipConfigSources?` | `boolean` |

##### Returns

`T`

#### Defined in

packages/common/src/lib/config/config.d.ts:7
