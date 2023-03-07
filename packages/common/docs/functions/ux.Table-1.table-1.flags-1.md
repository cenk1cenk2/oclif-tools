# Function: flags

[Table](../modules/ux.Table-1.md).[table](../modules/ux.Table-1.table-1.md).flags

▸ **flags**(): `IFlags`

#### Returns

`IFlags`

#### Defined in

node_modules/@oclif/core/lib/cli-ux/styled/table.d.ts:17

▸ **flags**<`Z`\>(`opts`): `ExcludeFlags`<`IFlags`, `Z`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Z` | extends ``"output"`` \| ``"extended"`` \| ``"sort"`` \| ``"columns"`` \| ``"filter"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` = ``"output"`` \| ``"extended"`` \| ``"sort"`` \| ``"columns"`` \| ``"filter"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.except` | `Z` \| `Z`[] |

#### Returns

`ExcludeFlags`<`IFlags`, `Z`\>

#### Defined in

node_modules/@oclif/core/lib/cli-ux/styled/table.d.ts:18

▸ **flags**<`K`\>(`opts`): `IncludeFlags`<`IFlags`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"output"`` \| ``"extended"`` \| ``"sort"`` \| ``"columns"`` \| ``"filter"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` = ``"output"`` \| ``"extended"`` \| ``"sort"`` \| ``"columns"`` \| ``"filter"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.only` | `K` \| `K`[] |

#### Returns

`IncludeFlags`<`IFlags`, `K`\>

#### Defined in

node_modules/@oclif/core/lib/cli-ux/styled/table.d.ts:21
