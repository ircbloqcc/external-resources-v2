/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';

    Blockly.Blocks.servo_write_maixduino = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVO_WRITE_MAIXDUINO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9'],
                            ['10', '10'],
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'degree'
                    },
					{
                        type: 'field_dropdown',
                        name: 'timer',
                        options: [
                            ['T0', '0'],
                            ['T1', '1'],
                            ['T2', '2'],
                            ['T3', '3'],
                            ['T4', '4'],
                            ['T5', '5'],
                            ['T6', '6'],
                            ['T7', '7'],
                            ['T8', '8'],
                            ['T9', '9'],
                            ['T10', '10'],
							['T11', '11']                       ]
                    },
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
