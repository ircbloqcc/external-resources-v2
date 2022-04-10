/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'init channel %1 IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'channel %1 run %2 speed %3',
        L298N_FORWARD: 'foward',
        L298N_BACK: 'back',
        L298N_STOP: 'channel %1 stop'
    });
    return Blockly;
}

exports = addMsg;
