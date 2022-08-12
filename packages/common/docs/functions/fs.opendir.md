# Function: opendir

[fs](../modules/fs.md).opendir

▸ **opendir**(`path`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `cb` | (`err`: `ErrnoException`, `dir`: [`Dir`](../classes/fs.Dir.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:265

▸ **opendir**(`path`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | [`OpenDirOptions`](../interfaces/fs.OpenDirOptions.md) |
| `cb` | (`err`: `ErrnoException`, `dir`: [`Dir`](../classes/fs.Dir.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:266

▸ **opendir**(`path`, `options?`): `Promise`<[`Dir`](../classes/fs.Dir.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`OpenDirOptions`](../interfaces/fs.OpenDirOptions.md) |

#### Returns

`Promise`<[`Dir`](../classes/fs.Dir.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:271
