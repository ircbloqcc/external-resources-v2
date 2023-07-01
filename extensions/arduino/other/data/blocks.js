/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#0D918F';
    const secondaryColour = '#0D918F';

    Blockly.Blocks.dataBlock_mapping = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DATABLOCK_MAPPING,
                args0: [{
                    type: 'input_value',
                    name: 'DATA'
                },
				{
                    type: 'input_value',
                    name: 'ARG1'
                },
				{
                    type: 'input_value',
                    name: 'ARG2'
                },
				{
                    type: 'input_value',
                    name: 'ARG3'
                },
				{
                    type: 'input_value',
                    name: 'ARG4'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
	
	Blockly.Blocks.dataBlock_constrain = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DATABLOCK_CONSTRAIN,
                args0: [{
                    type: 'input_value',
                    name: 'DATA'
                },
				{
                    type: 'input_value',
                    name: 'ARG1'
                },
				{
                    type: 'input_value',
                    name: 'ARG2'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
	
	Blockly.Blocks.dataBlock_convertType = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DATABLOCK_CONVERTTYPE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ARG1',
                        options: [
                            ['integer', 'INTEGER'],
                            ['decimal', 'DECIMAL'],
                            ['string', 'STRING'],
							['char*', 'CHARARRAY']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
	
	Blockly.Blocks.dataBlock_convertASCIIText = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DATABLOCK_CONVERTASCIITEXT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };
	
	Blockly.Blocks.dataBlock_convertASCIINum = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DATABLOCK_CONVERTASCIINUM,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
