/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SHARPIR_CATEGORY: 'Sharp IR',
        SHARPIR_INIT: 'init sharp IR sensor %1 pin %2 model %3',
        SHARPIR_READDISTANCE: 'sharp IR sensor %1 read distance'
    });
    return Blockly;
}

exports = addMsg;
