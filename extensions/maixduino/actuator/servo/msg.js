/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO_MAIXDUINO_CATEGORY: 'Servo',
        SERVO_WRITE_MAIXDUINO: 'set servo pin %1 angle as %2 timer %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO_MAIXDUINO_CATEGORY: 'Servo',
        SERVO_WRITE_MAIXDUINO: 'set servo pin %1 angle as %2 timer %3'
    });
    return Blockly;
}

exports = addMsg;
