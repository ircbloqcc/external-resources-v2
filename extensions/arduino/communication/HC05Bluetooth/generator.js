/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.HC05Bluetooth_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC);
        const tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC);
        const baudrate = this.getFieldValue('baudrate');

        Blockly.Arduino.includes_.dht_init = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.definitions_[`HC05Bluetooth_begin`] = `SoftwareSerial HC05Bluetooth(${rx}, ${tx});`;
        return `HC05Bluetooth.begin(${baudrate});\n`;
    };
	
	Blockly.Arduino.HC05Bluetooth_timeout = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const tout = Blockly.Arduino.valueToCode(block, 'tout', Blockly.Arduino.ORDER_ATOMIC);
        return `HC05Bluetooth.setTimeout(${tout});\n`;
    };

    Blockly.Arduino.HC05Bluetooth_print = function (block) {
       /// const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
         const eol = this.getFieldValue('EOL');

        if (eol === '0') {
            return `HC05Bluetooth.println(${data});\n`;
        }
        return `HC05Bluetooth.print(${data});\n`;
    };

    Blockly.Arduino.HC05Bluetooth_available = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`HC05Bluetooth.available()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.HC05Bluetooth_readAByte = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`HC05Bluetooth.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.HC05Bluetooth_readInteger = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`HC05Bluetooth.parseInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    Blockly.Arduino.HC05Bluetooth_readString = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return `String b_cmd;\nb_cmd=HC05Bluetooth.readString();\n`;
    };

    Blockly.Arduino.HC05Bluetooth_compareString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        return [`b_cmd == ${data}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = addGenerator;
