# Function: rmdir

[fs](../modules/fs.md).rmdir

▸ **rmdir**(`path`, `callback`): `void`

Asynchronous rmdir - removes the directory specified in {path}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `callback` | (`err`: `ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:381

▸ **rmdir**(`path`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | [`RmDirOptions`](../interfaces/fs.RmDirOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:382
