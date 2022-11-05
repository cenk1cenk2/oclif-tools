# Variable: COPYFILE\_FICLONE

[fs](../modules/fs.md).[constants](../modules/fs.constants.md).COPYFILE_FICLONE

• `Const` **COPYFILE\_FICLONE**: `number`

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

#### Defined in

node_modules/@types/node/ts4.8/fs.d.ts:3163
