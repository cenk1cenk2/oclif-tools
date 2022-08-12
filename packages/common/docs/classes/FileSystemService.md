# Class: FileSystemService

## Properties

### instance

▪ `Static` **instance**: [`FileSystemService`](FileSystemService.md)

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:7

---

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

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:20

---

### stats

▸ **stats**(`path`): `Stats`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`Stats`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:24

---

### dirname

▸ **dirname**(`path`): `string`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`string`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:28

---

### extname

▸ **extname**(`path`): `string`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`string`

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:32

---

### read

▸ **read**(`file`): `Promise`<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:36

---

### write

▸ **write**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name      | Type                 |
| :-------- | :------------------- |
| `file`    | `string`             |
| `data`    | `string` \| `Buffer` |
| `options` | `WriteFileOptions`   |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:48

---

### append

▸ **append**(`file`, `data`): `Promise`<`void`\>

#### Parameters

| Name   | Type                 |
| :----- | :------------------- |
| `file` | `string`             |
| `data` | `string` \| `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:58

---

### remove

▸ **remove**(`file`): `Promise`<`void`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:68

---

### removeFile

▸ **removeFile**(`file`): `Promise`<`void`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:80

---

### removeDirectory

▸ **removeDirectory**(`directory`): `Promise`<`void`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `directory` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/common/src/lib/fs/filesystem.service.ts:94
