# Variable: default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ux` | { `config`: `Config` ; `warn`: (`input`: `string` \| `Error`) => `void` ; `error`: (`input`: `string` \| `Error`, `options`: { `exit`: ``false``  } & `PrettyPrintableError`) => `void`(`input`: `string` \| `Error`, `options?`: { `exit?`: `number`  } & `PrettyPrintableError`) => `never` ; `exit`: (`code?`: `number`) => `never` ; `prompt`: (`name`: `string`, `options?`: `IPromptOptions`) => `Promise`<`any`\> ; `anykey`: (`message?`: `string`) => `Promise`<`void`\> ; `confirm`: (`message`: `string`) => `Promise`<`boolean`\> ; `action`: `ActionBase` ; `prideAction`: `ActionBase` ; `styledObject`: (`obj`: `any`, `keys?`: `string`[]) => `void` ; `styledHeader`: (`header`: `string`) => `void` ; `styledJSON`: (`obj`: `any`) => `void` ; `table`: typeof `table` ; `tree`: () => `Tree` ; `open`: (`target`: `string`, `opts?`: `Options`) => `Promise`<`unknown`\> ; `wait`: (`ms?`: `number`) => `Promise`<`unknown`\> ; `progress`: (`options?`: `any`) => `any` ; `done`: () => `Promise`<`void`\> ; `trace`: (`format`: `string`, ...`args`: `string`[]) => `void` ; `debug`: (`format`: `string`, ...`args`: `string`[]) => `void` ; `info`: (`format`: `string`, ...`args`: `string`[]) => `void` ; `log`: (`format?`: `string`, ...`args`: `string`[]) => `void` ; `url`: (`text`: `string`, `uri`: `string`, `params?`: {}) => `void` ; `annotation`: (`text`: `string`, `annotation`: `string`) => `void` ; `flush`: (`ms?`: `number`) => `Promise`<`void`\>  } |
| `ux.config` | `Config` |
| `ux.warn` | (`input`: `string` \| `Error`) => `void` |
| `ux.error` | (`input`: `string` \| `Error`, `options`: { `exit`: ``false``  } & `PrettyPrintableError`) => `void`(`input`: `string` \| `Error`, `options?`: { `exit?`: `number`  } & `PrettyPrintableError`) => `never` |
| `ux.exit` | (`code?`: `number`) => `never` |
| `ux.prompt` | (`name`: `string`, `options?`: `IPromptOptions`) => `Promise`<`any`\> |
| `ux.anykey` | (`message?`: `string`) => `Promise`<`void`\> |
| `ux.confirm` | (`message`: `string`) => `Promise`<`boolean`\> |
| `ux.action` | `ActionBase` |
| `ux.prideAction` | `ActionBase` |
| `ux.styledObject` | [object Object] |
| `ux.styledHeader` | (`header`: `string`) => `void` |
| `ux.styledJSON` | (`obj`: `any`) => `void` |
| `ux.table` | typeof `table` |
| `ux.tree` | () => `Tree` |
| `ux.open` | (`target`: `string`, `opts?`: `Options`) => `Promise`<`unknown`\> |
| `ux.wait` | (`ms?`: `number`) => `Promise`<`unknown`\> |
| `ux.progress` | (`options?`: `any`) => `any` |
| `ux.done` | [object Object] |
| `ux.trace` | [object Object] |
| `ux.debug` | [object Object] |
| `ux.info` | [object Object] |
| `ux.log` | [object Object] |
| `ux.url` | [object Object] |
| `ux.annotation` | [object Object] |
| `ux.flush` | [object Object] |

#### Defined in

packages/common/src/index.ts:10
