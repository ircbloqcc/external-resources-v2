/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Python.servo_write_raspberrypico = function () {
        const pin = this.getFieldValue('port');
        const degree = Blockly.Python.valueToCode(this, 'degree', Blockly.Python.ORDER_ATOMIC);
		const freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);

	Blockly.Python.imports_["raspberrypico_pin"] = "from machine import Pin";
	Blockly.Python.imports_["raspberrypico_pwm"] = "from machine import PWM";
	Blockly.Python.setups_["raspberrypico_servo_"+pin] = "servo_"+pin+" = PWM(Pin("+pin+"))";
	Blockly.Python.setups_["raspberrypico_freq_"+pin] = "servo_"+pin+".freq("+freq+")";
	
	Blockly.Python.customFunctions_['servo_write'] = "def setServoAngle(angle):\n"
+Blockly.Python.INDENT +
"position = (angle*(2000000)//(180)+500000)\n"
+ Blockly.Python.INDENT + 
"servo_" + pin+ ".duty_ns(position)";

        return `setServoAngle(${degree})\n`;
    };

    return Blockly;
}

exports = addGenerator;
