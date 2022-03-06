/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00D7B0';

    Blockly.Blocks.HC05Bluetooth_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_BEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'rx'
                }, {
                    type: 'input_value',
                    name: 'tx'
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
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.HC05Bluetooth_timeout = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_TIMEOUT,
                args0: [{
                    type: 'input_value',
                    name: 'tout'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.HC05Bluetooth_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_PRINT,
                args0: [{
                    type: 'input_value',
                    name: 'data'
                },
				{
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.HC05BLUETOOTH_WARP, '0'],
                            [Blockly.Msg.HC05BLUETOOTH_NOWARP, '1']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.HC05Bluetooth_available = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_AVAILABLE,
                args0: [],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.HC05Bluetooth_readAByte = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_READABYTE,
                args0: [],
                colour: color,
                extensions: ['output_string']
            });
        }
    };
    Blockly.Blocks.HC05Bluetooth_readInteger = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_READINTEGER,
                args0: [],
                colour: color,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.HC05Bluetooth_readString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_READSTRING,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.HC05Bluetooth_compareString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC05BLUETOOTH_COMPARESTRING,
                args0: [{
                    type: 'input_value',
                    name: 'data'
                }],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
