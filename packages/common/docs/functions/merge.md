# Function: merge

▸ **merge**<`T`\>(`strategy`, `target`, ...`source`): `T`

Merge objects deep from overwriting the properties from source to target.
Does not mutate the object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] \| `Record`<`PropertyKey`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`MergeStrategy`](../enums/MergeStrategy.md) |
| `target` | `T` |
| `...source` | `Partial`<`T`\>[] |

#### Returns

`T`

#### Defined in

packages/common/src/utils/merge.ts:7
