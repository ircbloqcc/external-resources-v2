/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.servo_write_maixduino = function () {
        const port = this.getFieldValue('port');
		const timer = this.getFieldValue('timer');
        const degree = Blockly.Python.valueToCode(this, 'degree', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.imports_["maixduino_board"] = 'from board import board_info';
		Blockly.Python.imports_.servo = 'from servo import servo';

        return `servo.angle(board_info.PIN${port}, ${timer}, ${degree})\n`;
    };

    return Blockly;
}

exports = addGenerator;
