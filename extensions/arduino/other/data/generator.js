/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dataBlock_mapping = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const arg1 = Blockly.Arduino.valueToCode(block, 'ARG1', Blockly.Arduino.ORDER_ATOMIC);
        const arg2 = Blockly.Arduino.valueToCode(block, 'ARG2', Blockly.Arduino.ORDER_ATOMIC);
        const arg3 = Blockly.Arduino.valueToCode(block, 'ARG3', Blockly.Arduino.ORDER_ATOMIC);
        const arg4 = Blockly.Arduino.valueToCode(block, 'ARG4', Blockly.Arduino.ORDER_ATOMIC);

        return [`map(${data}, ${arg1}, ${arg2}, ${arg3}, ${arg4})`, Blockly.Arduino.ORDER_ATOMIC];
    };
	
	Blockly.Arduino.dataBlock_constrain = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const arg1 = Blockly.Arduino.valueToCode(block, 'ARG1', Blockly.Arduino.ORDER_ATOMIC);
        const arg2 = Blockly.Arduino.valueToCode(block, 'ARG2', Blockly.Arduino.ORDER_ATOMIC);

        return [`constrain(${data}, ${arg1}, ${arg2})`, Blockly.Arduino.ORDER_ATOMIC];
    };
	
	Blockly.Arduino.dataBlock_convertType = function (block) {
        const arg0 = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const arg1 = this.getFieldValue('ARG1');
		var code;
		switch(arg1) {
		case 'INTEGER':
		  code = 'String(' + arg0 + ').toInt()';
		  break;
		case 'DECIMAL':
		  code = 'String(' + arg0 + ').toFloat()';
		  break;
		case 'STRING':
		  code = 'String(' + arg0 + ')';
		  break;
		case 'CHARARRAY':
		Blockly.Arduino.definitions_[`Chararray`] = 
	`char* C_chararray(float received_data){
	String Data_convert_to_string = String(received_data);
    if(Data_convert_to_string.indexOf('.') != -1){
        int get_point_index = Data_convert_to_string.indexOf('.');
        if(Data_convert_to_string[get_point_index+1] == '0' && Data_convert_to_string[get_point_index+2] == '0'){
          Data_convert_to_string[get_point_index] = '\\0';
		}
    }
	static char myString_to_char[30];
	return (strcpy(myString_to_char, Data_convert_to_string.c_str()));
	}`;
		  code = 'C_chararray(' + arg0 + ')';
		  break;
		}
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
	Blockly.Arduino.dataBlock_convertASCIIText = function (block) {
        const arg0 = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_UNARY_POSTFIX);
        var code = 'String(char(' + arg0 + '))';
		
		return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
	Blockly.Arduino.dataBlock_convertASCIINum = function (block) {
		var arg0 = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';

		var code = 'toascii(String(' + arg0 + ')[0])';
		return [code, Blockly.Arduino.ORDER_ATOMIC];
	};

    return Blockly;
}

exports = addGenerator;
