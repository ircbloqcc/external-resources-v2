/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#f90b9e';

    Blockly.Blocks.iBotV2_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_INIT,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.iBotV2_setMotorSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_SETMOTORSPEED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['M1', '1'],
                            ['M2', '2'],
                            ['M3', '3'],
                            ['M4', '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dir',
                        options: [
                            [Blockly.Msg.IBOTV2_FORWARD, '1'],
                            [Blockly.Msg.IBOTV2_BACKWARD, '0'],
							['Stop Motor', '2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.iBotV2_setServoDegree = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_SETSERVODEGREE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['1', '1'],
                            ['2', '2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'degree'
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
	
    Blockly.Blocks.iBotV2_setLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_SETLED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'msec'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.iBotV2_stopLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_STOPLED,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
    Blockly.Blocks.iBotV2_setBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_SETBUZZER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'msec'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.iBotV2_stopBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_STOPBUZZER,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.iBotV2_lightSensor = {
	init: function () {
		this.jsonInit({
			message0: Blockly.Msg.IBOTV2_LIGHTSENSOR,
			args0: [
                    {
                        type: 'field_dropdown',
                        name: 'direc',
                        options: [
                            ['left', '3'],
                            ['right', '2'],
							['both', '1']
                        ]
                    }
				 ],
			colour: color,
			extensions: ['output_boolean']
			});
		}
	};
	
	Blockly.Blocks.iBotV2_ultrasonic = {
		init: function () {
		this.jsonInit({
			message0: Blockly.Msg.IBOTV2_ULTRASONIC,
			colour: color,
			extensions: ['output_number']
			});
		}
	};
	
	Blockly.Blocks.iBotV2_displayMisc = {
		init: function () {
			this.jsonInit({ 
				message0: Blockly.Msg.IBOTV2_DISPLAYMISC,
			args0: [
					{
						type: 'field_dropdown',
						name: 'misc_image',
						options: [
							['logo','1'],
							['ibot','2'],
							['up','3'],
							['down','4'],
							['left','5'],
							['right','6'],
							['white','7'],
							['black','8'],
							['heart','9'],
							['star','0'],
							['Distance','10']
						]				
				},
				{
					type: 'field_dropdown',
						name: 'disp',
						options: [
							['left','1'],
							['right','2']
							]
				}],
				colour: color,
				extensions: ['shape_statement']
				});
		}
		
	};
	
	Blockly.Blocks.iBotV2_displayEye = {
		init: function () {
			this.jsonInit({ 
				message0: Blockly.Msg.IBOTV2_DISPLAYEYE,
			args0: [
					{
						type: 'field_dropdown',
						name: 'eye_image',
						options: [
							['Blink','11'],
							['Bottom Left','12'],
							['Bottom Right','13'],
							['Center','14'],
							['Normal','15'],
							['Top Left','16'],
							['Top Right','17'],
							['UP','18'],
							['Close','19']
						]				
				},
				{
					type: 'field_dropdown',
						name: 'disp',
						options: [
							['left','1'],
							['right','2']
							]
				}],
				colour: color,
				extensions: ['shape_statement']
				});
		}
		
	};
	
	Blockly.Blocks.iBotV2_clearDisplay = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_CLEARDISPLAY,
				args0: [
					{
					type: 'field_dropdown',
					name: 'disp1',
					options: [
						['left','0'],
						['right','1']
						]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	
	Blockly.Blocks.iBotV2_textDisplay = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IBOTV2_TEXTDISPLAY,
				args0: [
					{
					type: 'input_value',
                    name: 'textdisp'
					},
					{
					type: 'input_value',
                    name: 'xpos'
					},
					{
					type: 'input_value',
                    name: 'ypos'
					},
					{
					type: 'field_dropdown',
					name: 'disp1',
					options: [
						['left','0'],
						['right','1']
						]
				}],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
	

    return Blockly;
}

exports = addBlocks;
