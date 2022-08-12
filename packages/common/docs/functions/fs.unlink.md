# Function: unlink

[fs](../modules/fs.md).unlink

▸ **unlink**(`path`, `callback`): `void`

Asynchronous unlink - deletes the file specified in {path}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) | - |
| `callback` | (`err`: `ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:405

▸ **unlink**(`path`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:406
