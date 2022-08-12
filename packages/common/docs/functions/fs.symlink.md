# Function: symlink

[fs](../modules/fs.md).symlink

▸ **symlink**(`target`, `path`, `type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](../types/fs.PathLike.md) |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `type` | [`SymlinkType`](../types/fs.SymlinkType.md) |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:387

▸ **symlink**(`target`, `path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](../types/fs.PathLike.md) |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:393

▸ **symlink**(`target`, `path`, `type?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](../types/fs.PathLike.md) |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `type?` | [`SymlinkType`](../types/fs.SymlinkType.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:394
