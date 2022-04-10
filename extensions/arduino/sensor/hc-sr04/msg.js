/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HC_SR04_CATEGORY: 'HC_SR04',
        HC_SR04_READ_DISTANCE: 'ultrasonic sensor trig pin %1 echo pin %2 read distance in cm'
    });
    return Blockly;
}

exports = addMsg;
