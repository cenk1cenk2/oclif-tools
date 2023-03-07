# Class: FileSystemService

## Properties

### instance

▪ `Static` `Private` **instance**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:7

___

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:8

## Constructors

### constructor

• **new FileSystemService**()

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:10

## Methods

### exists

▸ **exists**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:22

___

### stats

▸ **stats**(`path`): [`Stats`](fs.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Stats`](fs.Stats.md)

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:26

___

### dirname

▸ **dirname**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:30

___

### extname

▸ **extname**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:34

___

### read

▸ **read**(`file`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:38

___

### readSync

▸ **readSync**(`file`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`string`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:48

___

### write

▸ **write**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |
| `options` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:58

___

### writeSync

▸ **writeSync**(`file`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |
| `options` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:66

___

### append

▸ **append**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |
| `options?` | [`WriteFileOptions`](../types/fs.WriteFileOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:74

___

### appendSync

▸ **appendSync**(`file`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:82

___

### remove

▸ **remove**(`file`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`RmOptions`](../interfaces/fs.RmOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:90

___

### removeSync

▸ **removeSync**(`file`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`RmOptions`](../interfaces/fs.RmOptions.md) |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:98

___

### emptyDir

▸ **emptyDir**(`directory`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:106

___

### emptyDirSync

▸ **emptyDirSync**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:114

___

### removeDir

▸ **removeDir**(`directory`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:122

___

### removeDirSync

▸ **removeDirSync**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:130

___

### mkdir

▸ **mkdir**(`directory`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:138

___

### mkdirSync

▸ **mkdirSync**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:146
