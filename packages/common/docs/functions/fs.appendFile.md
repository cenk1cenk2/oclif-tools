# Function: appendFile

[fs](../modules/fs.md).appendFile

▸ **appendFile**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `data` | `any` |
| `options` | `Object` |
| `options.encoding?` | `string` |
| `options.mode?` | `string` \| `number` |
| `options.flag?` | `string` |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:167

▸ **appendFile**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `data` | `any` |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:177

▸ **appendFile**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `number` \| [`PathLike`](../types/fs.PathLike.md) |
| `data` | `any` |
| `options?` | `string` \| { `encoding?`: `string` ; `mode?`: `string` \| `number` ; `flag?`: `string`  } |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:178
