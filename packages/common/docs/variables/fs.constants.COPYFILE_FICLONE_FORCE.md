# Variable: COPYFILE\_FICLONE\_FORCE

[fs](../modules/fs.md).[constants](../modules/fs.constants.md).COPYFILE_FICLONE_FORCE

• `Const` **COPYFILE\_FICLONE\_FORCE**: `number`

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

#### Defined in

node_modules/@types/node/fs.d.ts:3168
