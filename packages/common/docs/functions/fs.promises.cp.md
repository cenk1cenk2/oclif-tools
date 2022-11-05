# Function: cp

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).cp

▸ **cp**(`source`, `destination`, `opts?`): `Promise`<`void`\>

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
| `opts?` | `CopyOptions` |

#### Returns

`Promise`<`void`\>

Fulfills with `undefined` upon success.

#### Defined in

node_modules/@types/node/ts4.8/fs/promises.d.ts:1134
