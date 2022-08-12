# Function: utimes

[fs](../modules/fs.md).utimes

▸ **utimes**(`path`, `atime`, `mtime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | `number` |
| `mtime` | `number` |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:408

▸ **utimes**(`path`, `atime`, `mtime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | `Date` |
| `mtime` | `Date` |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:414

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | `number` |
| `mtime` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:415

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `atime` | `Date` |
| `mtime` | `Date` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:416
