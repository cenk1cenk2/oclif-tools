# Function: rm

[fs](../modules/fs.md).rm

▸ **rm**(`path`, `options?`): `Promise`<`void`\>

Asynchronously removes files and directories (modeled on the standard POSIX
`rm` utility).

Only available in node >= v14.14.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](../types/fs.PathLike.md) |
| `options?` | `Object` |
| `options.force?` | `boolean` |
| `options.maxRetries?` | `number` |
| `options.recursive?` | `boolean` |
| `options.retryDelay?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:366
