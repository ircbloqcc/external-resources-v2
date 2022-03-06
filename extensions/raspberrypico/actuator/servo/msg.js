/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO_RASPBERRYPICO_CATEGORY: 'Servo',
        SERVO_WRITE_RASPBERRYPICO: 'set servo pin %1 out %2 freq %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO_RASPBERRYPICO_CATEGORY: 'Servo',
        SERVO_WRITE_RASPBERRYPICO: 'set servo pin %1 out %2 freq %3'
    });
    return Blockly;
}

exports = addMsg;
