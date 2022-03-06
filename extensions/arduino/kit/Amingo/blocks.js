/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#a836a8';

    Blockly.Blocks.Amingo_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AMINGO_INIT,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Amingo_home = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AMINGO_HOME,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Amingo_standby = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AMINGO_STANDBY,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.Amingo_setServoParts = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AMINGO_SETSERVOPARTS,
                args0: [
					{
						type: 'field_dropdown',
						name: 'parts',
						options: [
						['face (0-80)','1'],
						['neck (0-180)','2'],
						['eyeLid (0-90)','3'],
						['eyeTilt (0-90)','4'],
						['eyeBall (0-180)','5'],
						['lower lip (0-90)','6'],
						['upper lip (0-30)','7'],
						['left EyeBrow (15-45)','8'],
						['right EyeBrow (15-45)','9']
						]
					},
                    {
                        type: 'input_value',
                        name: 'degree'
                    },
					{
                        type: 'input_value',
                        name: 'speed'
                    },
					{
						type: 'field_dropdown',
						name: 'wait',
						options : [
							['yes', '1'],
							['no', '0']
						]
					}
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


	Blockly.Blocks.Amingo_RGB = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AMINGO_RGB,
                args0: [
                    {
                        type: 'input_value',
                        name: 'red'
                    },
					{
                        type: 'input_value',
                        name: 'green'
                    },
					{
                        type: 'input_value',
                        name: 'blue'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
