# Function: mkdir

[fs](../modules/fs.md).mkdir

▸ **mkdir**(`path`, `callback`): `void`

Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `callback` | (`err`: `ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:238

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `options` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) | - |
| `callback` | (`err`: `ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:244

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`Mode`](../types/fs.Mode.md) \| [`MakeDirectoryOptions`](../interfaces/fs.MakeDirectoryOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:249
