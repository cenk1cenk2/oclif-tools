# Function: cpSync

[fs](../modules/fs.md).cpSync

▸ **cpSync**(`source`, `destination`, `opts?`): `void`

Synchronously copies the entire directory structure from `src` to `dest`,
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
| `opts?` | [`CopySyncOptions`](../interfaces/fs.CopySyncOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:3868
