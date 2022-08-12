# Function: open

[fs](../modules/fs.md).open

▸ **open**(`path`, `flags`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `flags` | `string` \| `number` |
| `callback` | (`err`: `ErrnoException`, `fd`: `number`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:252

▸ **open**(`path`, `flags`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `flags` | `string` \| `number` |
| `mode` | [`Mode`](../types/fs.Mode.md) |
| `callback` | (`err`: `ErrnoException`, `fd`: `number`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:257

▸ **open**(`path`, `flags`, `mode?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `flags` | `string` \| `number` |
| `mode?` | [`Mode`](../types/fs.Mode.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:263
