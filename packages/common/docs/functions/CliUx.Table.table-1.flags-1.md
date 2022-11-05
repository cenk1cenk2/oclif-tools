# Function: flags

[Table](../modules/CliUx.Table.md).[table](../modules/CliUx.Table.table-1.md).flags

▸ **flags**(): `IFlags`

#### Returns

`IFlags`

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/styled/table.d.ts:17

▸ **flags**<`Z`\>(`opts`): `ExcludeFlags`<`IFlags`, `Z`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Z` | extends ``"sort"`` \| ``"filter"`` \| ``"output"`` \| ``"extended"`` \| ``"columns"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` = ``"sort"`` \| ``"filter"`` \| ``"output"`` \| ``"extended"`` \| ``"columns"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.except` | `Z` \| `Z`[] |

#### Returns

`ExcludeFlags`<`IFlags`, `Z`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/styled/table.d.ts:18

▸ **flags**<`K`\>(`opts`): `IncludeFlags`<`IFlags`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"sort"`` \| ``"filter"`` \| ``"output"`` \| ``"extended"`` \| ``"columns"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` = ``"sort"`` \| ``"filter"`` \| ``"output"`` \| ``"extended"`` \| ``"columns"`` \| ``"csv"`` \| ``"no-truncate"`` \| ``"no-header"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.only` | `K` \| `K`[] |

#### Returns

`IncludeFlags`<`IFlags`, `K`\>

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/styled/table.d.ts:21
