/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.Amingo_init = function () {
        Blockly.Arduino.includes_.Amingo_init = '#include "amingoV1.h"';
        Blockly.Arduino.definitions_.Amingo_init =
            `Amingo amingo(true);`;
		Blockly.Arduino.setups_.Amingo_init =
`amingo.begin(115200);
  amingo.init();`
		Blockly.Arduino.loops_.Amingo_init = 
		`amingo.chk_ble();`
        return '';
    };
	
	Blockly.Arduino.Amingo_home = function () {
		return `amingo.awake();\n`
	};
	
	Blockly.Arduino.Amingo_standby = function () {
		return `amingo.standby();\n`
	};
	
	Blockly.Arduino.Amingo_setServoParts = function () {
		const parts = this.getFieldValue('parts');
        const speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
        const degree = Blockly.Arduino.valueToCode(this, 'degree', Blockly.Arduino.ORDER_ATOMIC);
		const wait = this.getFieldValue('wait');
		if (parts === '1') {
        return `amingo.face(${degree},${speed},${wait});\n`;
		}
		else if (parts === '2') {
			return `amingo.neck(${degree},${speed},${wait});\n`;
		}
		else if (parts === '3') {
			return `amingo.eyelid(${degree},${speed},${wait});\n`;
		}
		else if (parts === '4') {
			return `amingo.eyetilt(${degree},${speed},${wait});\n`;
		}
		else if (parts === '5') {
			return `amingo.eyeball(${degree},${speed},${wait});\n`;
		}
		else if (parts === '6') {
			return `amingo.lowerlip(${degree},${speed},${wait});\n`;
		}
		else if (parts === '7') {
			return `amingo.upperlip(${degree},${speed},${wait});\n`;
		}
		else if (parts === '8') {
			return `amingo.lefteyebrow(${degree},${speed},${wait});\n`;
		}
		else if (parts === '9') {
			return `amingo.righteyebrow(${degree},${speed},${wait});\n`;
		}
    };
	
	Blockly.Arduino.Amingo_RGB= function () {
        const red = Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const green = Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC);
		const blue = Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC);

        return `amingo.RGB(${red},${green},${red});\n`;
    };
   
    return Blockly;
}

exports = addGenerator;
