# Variable: ux

[CliUx](../modules/CliUx.md).ux

• `Const` **ux**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`Config`](../classes/CliUx.Config.md) | - |
| `warn` | typeof [`__type`](../classes/ConfigCommand.md#__type) | - |
| `error` | typeof [`__type`](../classes/ConfigCommand.md#__type) | - |
| `exit` | typeof [`__type`](../classes/ConfigCommand.md#__type) | - |
| `prompt` | `prompt` | - |
| `anykey` | `anykey` | "press anykey to continue" |
| `confirm` | `confirm` | - |
| `action` | [`ActionBase`](../classes/CliUx.ActionBase.md) | - |
| `prideAction` | [`ActionBase`](../classes/CliUx.ActionBase.md) | - |
| `styledObject` | (`obj`: `any`, `keys?`: `string`[]) => `void` | - |
| `styledHeader` | `default` | - |
| `styledJSON` | `default` | - |
| `table` | typeof [`table`](../functions/CliUx.Table.table.md) | - |
| `tree` | `default` | - |
| `open` | `default` | - |
| `wait` | (`ms?`: `number`) => `Promise`<`unknown`\> | - |
| `progress` | `default` | - |
| `done` | () => `Promise`<`void`\> | - |
| `trace` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `debug` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `info` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `log` | (`format?`: `string`, ...`args`: `string`[]) => `void` | - |
| `url` | (`text`: `string`, `uri`: `string`, `params?`: {}) => `void` | - |
| `annotation` | (`text`: `string`, `annotation`: `string`) => `void` | - |
| `flush` | (`ms?`: `number`) => `Promise`<`void`\> | - |

#### Defined in

packages/common/node_modules/@oclif/core/lib/cli-ux/index.d.ts:7
