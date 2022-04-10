/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGBLEDSTRIP_CATEGORY: 'RGB LED Strip',
        RGBLEDSTRIP_INIT: 'init RGB LED strip length %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'set pixel %1 color %2',
        RGBLEDSTRIP_FILL: 'fill from pixel %1 count %2 with color %3',
        RGBLEDSTRIP_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'set brightness %1',
        RGBLEDSTRIP_CLEAR: 'clear all',
        RGBLEDSTRIP_SHOW: 'refresh'
    });
    return Blockly;
}

exports = addMsg;
