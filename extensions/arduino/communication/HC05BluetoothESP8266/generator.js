/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.HC05BluetoothEsp8266_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const rx = this.getFieldValue('rx');
        const tx = this.getFieldValue('tx');
        const baudrate = this.getFieldValue('baudrate');

        Blockly.Arduino.includes_.dht_init = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.definitions_[`HC05BluetoothEsp8266_begin`] = `SoftwareSerial HC05BluetoothEsp8266;`;
        return `HC05BluetoothEsp8266.begin(${baudrate}, SWSERIAL_8N1, ${rx}, ${tx}, false, 95, 11);\n`;
    };
	
	Blockly.Arduino.HC05BluetoothEsp8266_timeout = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const tout = Blockly.Arduino.valueToCode(block, 'tout', Blockly.Arduino.ORDER_ATOMIC);
        return `HC05BluetoothEsp8266.setTimeout(${tout});\n`;
    };

    Blockly.Arduino.HC05BluetoothEsp8266_print = function (block) {
       /// const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        const eol = this.getFieldValue('EOL');

        if (eol === '0') {

            return `HC05BluetoothEsp8266.println(${data});\n`;
        }
        return `HC05BluetoothEsp8266.print(${data});\n`;
    };

    Blockly.Arduino.HC05BluetoothEsp8266_available = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`HC05BluetoothEsp8266.available()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.HC05BluetoothEsp8266_readAByte = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`HC05BluetoothEsp8266.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.HC05BluetoothEsp8266_readInteger = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return [`HC05BluetoothEsp8266.parseInt()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    Blockly.Arduino.HC05BluetoothEsp8266_readString = function (block) {
      //  const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        return `String b_cmd;\nb_cmd=HC05BluetoothEsp8266.readString();\n`;
    };

    Blockly.Arduino.HC05BluetoothEsp8266_compareString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        return [`b_cmd == ${data}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = addGenerator;
