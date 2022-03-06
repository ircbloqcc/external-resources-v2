/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.iBotV2_init = function () {
        Blockly.Arduino.includes_.iBotV2_init = '#include "iBotV2.h"';
        Blockly.Arduino.definitions_.iBotV2_init =
            `iBot iBot(true);`;
		Blockly.Arduino.setups_.iBotV2_init = 
`iBot.begin(115200);
  iBot.init();`
		Blockly.Arduino.loops_.iBotV2_init = 
		`iBot.app();`
        return '';
    };

    Blockly.Arduino.iBotV2_setMotorSpeed = function () {
        const port = this.getFieldValue('port');
        const dir = this.getFieldValue('dir');
        const speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        return `iBot.Rotate(${port},${speed},${dir});\n`;
    };
	
	Blockly.Arduino.iBotV2_setServoDegree = function () {
        const port = this.getFieldValue('port');
        const degree = Blockly.Arduino.valueToCode(this, 'degree', Blockly.Arduino.ORDER_ATOMIC);
		const wait = this.getFieldValue('wait');

        return `iBot.servomotor(${port},${degree},${wait});\n`;
    };
	
    Blockly.Arduino.iBotV2_setLed = function () {
        const msec = Blockly.Arduino.valueToCode(this, 'msec', Blockly.Arduino.ORDER_ATOMIC);

        return `iBot.Blink(${msec});\n`;
    };
	
	
	Blockly.Arduino.iBotV2_stopLed = function () {
		return `iBot.StopLED();\n`
	}

    Blockly.Arduino.iBotV2_setBuzzer = function () {
        const msec = Blockly.Arduino.valueToCode(this, 'msec', Blockly.Arduino.ORDER_ATOMIC);

        return `iBot.IndicatorSound(${msec});\n`;
    };
	
	Blockly.Arduino.iBotV2_stopBuzzer = function () {
		return `iBot.StopBuzzer();\n`
	};
	
	Blockly.Arduino.iBotV2_lightSensor = function () {
		const direc = this.getFieldValue('direc');
		
		return [`iBot.Lightsensor() == ${direc}`, Blockly.Arduino.ORDER_ATOMIC];
	};
	
	Blockly.Arduino.iBotV2_ultrasonic = function () {
	
		return [`iBot.ultrasonic()`, Blockly.Arduino.ORDER_ATOMIC];
	};
	
	Blockly.Arduino.iBotV2_displayMisc = function () {
		const misc_image = this.getFieldValue('misc_image');
		const disp = this.getFieldValue('disp');
		
		return `iBot.Display_misc(${misc_image},${disp});\n`;
	};
	
	Blockly.Arduino.iBotV2_displayEye = function () {
		const eye_image = this.getFieldValue('eye_image');
		const disp = this.getFieldValue('disp');
		
		return `iBot.Display_image(${eye_image},${disp});\n`;
	};
	
	Blockly.Arduino.iBotV2_clearDisplay = function () {
		const disp1 = this.getFieldValue('disp1');
		
		if (disp1 === '0') {
            return `iBot.leftdisplayclear();\n`;
        }
        return `iBot.rightdisplayclear();\n`;
	};
	
	Blockly.Arduino.iBotV2_textDisplay = function () {
		const textdisp = Blockly.Arduino.valueToCode(this, 'textdisp', Blockly.Arduino.ORDER_ATOMIC);
		const xpos = Blockly.Arduino.valueToCode(this, 'xpos', Blockly.Arduino.ORDER_ATOMIC);
		const ypos = Blockly.Arduino.valueToCode(this, 'ypos', Blockly.Arduino.ORDER_ATOMIC);
		const disp1 = this.getFieldValue('disp1');
		
		if (disp1 === '0') {
            return `iBot.PrintLeft(${textdisp},${xpos},${ypos});\n`;
        }
        return `iBot.PrintRight(${textdisp},${xpos},${ypos});\n`;
	};
	
   
    return Blockly;
}

exports = addGenerator;
