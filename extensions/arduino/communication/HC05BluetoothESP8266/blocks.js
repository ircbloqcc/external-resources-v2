/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color = '#00D7B0';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.HC05BluetoothEsp8266_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_BEGIN,
                args0: [{
                        type: 'field_dropdown',
                        name: 'rx',
                        options: digitalPins
                    }, {
                        type: 'field_dropdown',
                        name: 'tx',
                        options: digitalPins
                    }, {
                        type: 'field_dropdown',
                        name: 'baudrate',
                        options: [
                            ['4800', '4800'],
                            ['9600', '9600'],
                            ['19200', '19200'],
                            ['38400', '38400'],
                            ['57600', '57600'],
                            ['115200', '115200']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.HC05BluetoothEsp8266_timeout = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_TIMEOUT,
                args0: [{
                        type: 'input_value',
                        name: 'tout'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.HC05BluetoothEsp8266_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_PRINT,
                args0: [{
                        type: 'input_value',
                        name: 'data'
                    }, {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.HC05BLUETOOTHESP8266_WARP, '0'],
                            [Blockly.Msg.HC05BLUETOOTHESP8266_NOWARP, '1']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.HC05BluetoothEsp8266_available = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_AVAILABLE,
                args0: [],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.HC05BluetoothEsp8266_readAByte = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_READABYTE,
                args0: [],
                colour: color,
                extensions: ['output_string']
            });
        }
    };
    Blockly.Blocks.HC05BluetoothEsp8266_readInteger = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_READINTEGER,
                args0: [],
                colour: color,
                extensions: ['output_string']
            });
        }
    };
    Blockly.Blocks.HC05BluetoothEsp8266_readString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_READSTRING,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.HC05BluetoothEsp8266_compareString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTHESP8266_COMPARESTRING,
                args0: [{
                        type: 'input_value',
                        name: 'data'
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
