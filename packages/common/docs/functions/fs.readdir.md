# Function: readdir

[fs](../modules/fs.md).readdir

▸ **readdir**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `callback` | (`err`: `ErrnoException`, `files`: `string`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:308

▸ **readdir**(`path`, `options`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } |

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:309

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `string` \| { `encoding`: `string` ; `withFileTypes?`: ``false``  } |

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:313

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| `Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `Object` |
| `options.encoding?` | `string` |
| `options.withFileTypes?` | ``false`` |

#### Returns

`Promise`<`string`[] \| `Buffer`[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:321

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](../classes/fs.Dirent.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options` | `Object` |
| `options.encoding?` | `string` |
| `options.withFileTypes` | ``true`` |

#### Returns

`Promise`<[`Dirent`](../classes/fs.Dirent.md)[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:325
