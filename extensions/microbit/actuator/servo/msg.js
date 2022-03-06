/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO_MICROBIT_CATEGORY: 'Servo',
        SERVO_WRITE_MICROBIT: 'set servo pin %1 out %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO_MICROBIT_CATEGORY: '舵机',
        SERVO_WRITE_MICROBIT: '设置引脚 %1 舵机为 %2'
    });
    return Blockly;
}

exports = addMsg;
