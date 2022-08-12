# Function: figures

▸ **figures**(`string`): `string`

Replace Unicode symbols depending on the OS.

**`Example`**

```
import figures = require('figures');

console.log(figures('✔︎ check'));
// On non-Windows OSes:  ✔︎ check
// On Windows:           √ check

console.log(figures.tick);
// On non-Windows OSes:  ✔︎
// On Windows:           √
```

#### Parameters

| Name     | Type     | Description                                                                                  |
| :------- | :------- | :------------------------------------------------------------------------------------------- |
| `string` | `string` | String where the Unicode symbols will be replaced with fallback symbols depending on the OS. |

#### Returns

`string`

The input with replaced fallback Unicode symbols on Windows.

#### Defined in

node_modules/figures/index.d.ts:83
