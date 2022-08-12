# Function: cp

[fs](../modules/fs.md).cp

▸ **cp**(`source`, `destination`, `callback`): `void`

Asynchronously copies the entire directory structure from `src` to `dest`,
including subdirectories and files.

When copying a directory to another directory, globs are not supported and
behavior is similar to `cp dir1/ dir2/`.

**`Since`**

v16.7.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` \| `URL` |
| `destination` | `string` \| `URL` |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3855

▸ **cp**(`source`, `destination`, `opts`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` \| `URL` |
| `destination` | `string` \| `URL` |
| `opts` | `CopyOptions` |
| `callback` | (`err`: `ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3856
