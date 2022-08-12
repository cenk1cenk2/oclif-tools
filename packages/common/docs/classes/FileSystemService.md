# Class: FileSystemService

## Properties

### instance

▪ `Static` **instance**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:7

___

### logger

• `Private` `Readonly` **logger**: [`Logger`](Logger.md)

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

packages/common/src/lib/fs/filesystem.service.ts:20

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

packages/common/src/lib/fs/filesystem.service.ts:24

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

packages/common/src/lib/fs/filesystem.service.ts:28

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

packages/common/src/lib/fs/filesystem.service.ts:32

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

packages/common/src/lib/fs/filesystem.service.ts:36

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
| `options` | [`WriteFileOptions`](../interfaces/fs.WriteFileOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:60

___

### writeSync

▸ **writeSync**(`file`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |
| `options` | [`WriteFileOptions`](../interfaces/fs.WriteFileOptions.md) |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:70

___

### append

▸ **append**(`file`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `string` \| `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:80

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

packages/common/src/lib/fs/filesystem.service.ts:90

___

### remove

▸ **remove**(`file`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:100

___

### removeSync

▸ **removeSync**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:112

___

### removeFile

▸ **removeFile**(`file`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:124

___

### removeFileSync

▸ **removeFileSync**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:138

___

### removeDirectory

▸ **removeDirectory**(`directory`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:152

___

### removeDirectorySync

▸ **removeDirectorySync**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:166
