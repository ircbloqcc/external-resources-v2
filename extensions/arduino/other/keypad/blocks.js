/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#2aa112';
	//const secondaryColour = '#0d7d23';

    Blockly.Blocks.keypad_init4x4 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_INIT4X4,
                args0: [{
                    type: 'input_value',
                    name: 'r1'
                },{
                    type: 'input_value',
                    name: 'r2'
                },{
                    type: 'input_value',
                    name: 'r3'
                },{
                    type: 'input_value',
                    name: 'r4'
                },{
                    type: 'input_value',
                    name: 'c1'
                },{
                    type: 'input_value',
                    name: 'c2'
                },{
                    type: 'input_value',
                    name: 'c3'
                },{
                    type: 'input_value',
                    name: 'c4'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.keypad_init4x3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_INIT4X3,
                args0: [{
                    type: 'input_value',
                    name: 'r1'
                },{
                    type: 'input_value',
                    name: 'r2'
                },{
                    type: 'input_value',
                    name: 'r3'
                },{
                    type: 'input_value',
                    name: 'r4'
                },{
                    type: 'input_value',
                    name: 'c1'
                },{
                    type: 'input_value',
                    name: 'c2'
                },{
                    type: 'input_value',
                    name: 'c3'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.keypad_init3x3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_INIT3X3,
                args0: [{
                    type: 'input_value',
                    name: 'r1'
                },{
                    type: 'input_value',
                    name: 'r2'
                },{
                    type: 'input_value',
                    name: 'r3'
                },{
                    type: 'input_value',
                    name: 'c1'
                },{
                    type: 'input_value',
                    name: 'c2'
                },{
                    type: 'input_value',
                    name: 'c3'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.keypad_scan = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_SCAN,
			args0: [],
			colour: color,
			extensions: ['shape_statement']
			});
		}
	};
	
	Blockly.Blocks.keypad_getValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_GETVALUE,
			args0: [],
			colour: color,
			extensions: ['output_boolean']
			});
		}
	};
	
	Blockly.Blocks.keypad_keyValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_KEYVALUE,
			args0: [],
			colour: color,
			extensions: ['output_number']
			});
		}
	};
	
	Blockly.Blocks.keypad_readString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_READSTRING,
                args0: [{
                    type: 'field_dropdown',
                    name: 'value',
                    options: [
                        ['2','2'],
						['3','3'],
						['4','4'],
						['5','5'],
						['6','6'],
						['7','7'],
						['8','8'],
						['9','9'],
						['10','10'],
						['11','11'],
						['12','12'],
						['13','13'],
						['14','14'],
						['15','15'],
						['16','16']]	
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.keypad_readHash = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_READHASH,
			args0: [],
			colour: color,
			extensions: ['shape_statement']
			});
		}
	};
	
	Blockly.Blocks.keypad_enteredString = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KEYPAD_ENTEREDSTRING,
			args0: [],
			colour: color,
			extensions: ['output_number']
			});
		}
	};
    
    return Blockly;
}

exports = addBlocks;
