# Function: readFile

[fs](../modules/fs.md).readFile

▸ **readFile**(`file`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `callback` | (`err`: `ErrnoException`, `data`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:289

▸ **readFile**(`file`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `encoding` | `string` |
| `callback` | (`err`: `ErrnoException`, `data`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:290

▸ **readFile**(`file`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `options` | { `flag?`: `string`  } \| { `encoding`: `string` ; `flag?`: `string`  } |
| `callback` | (`err`: `ErrnoException`, `data`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:295

▸ **readFile**(`file`, `options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `options` | { `flag?`: `string`  } \| { `encoding`: `string` ; `flag?`: `string`  } |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:300

▸ **readFile**(`file`, `encoding`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `encoding` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:305

▸ **readFile**(`file`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:306
