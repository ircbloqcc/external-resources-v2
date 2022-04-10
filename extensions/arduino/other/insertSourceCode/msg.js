/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        INSERTSOURCECODE_CATEGORY: 'Insert Source Code',
        INSERTSOURCECODE_COMMANDBLOCK: 'insert source code %1 %2',
        INSERTSOURCECODE_ESCAPE: 'escape newline',
        INSERTSOURCECODE_DONTESCAPE: 'don\'t escape newline',
        INSERTSOURCECODE_ROUNDBLOCK: 'insert source code %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'insert source code %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'insert source code %1 in include area %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'insert source code %1 in define area %2'
    });
    return Blockly;
}

exports = addMsg;
