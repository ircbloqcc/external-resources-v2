/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.keypad_init4x4 = function (block) {
        const r1 = Blockly.Arduino.valueToCode(block, 'r1', Blockly.Arduino.ORDER_ATOMIC);
		const r2 = Blockly.Arduino.valueToCode(block, 'r2', Blockly.Arduino.ORDER_ATOMIC);
		const r3 = Blockly.Arduino.valueToCode(block, 'r3', Blockly.Arduino.ORDER_ATOMIC);
		const r4 = Blockly.Arduino.valueToCode(block, 'r4', Blockly.Arduino.ORDER_ATOMIC);
		const c1 = Blockly.Arduino.valueToCode(block, 'c1', Blockly.Arduino.ORDER_ATOMIC);
		const c2 = Blockly.Arduino.valueToCode(block, 'c2', Blockly.Arduino.ORDER_ATOMIC);
		const c3 = Blockly.Arduino.valueToCode(block, 'c3', Blockly.Arduino.ORDER_ATOMIC);
		const c4 = Blockly.Arduino.valueToCode(block, 'c4', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.keypad_init = `#include "Keypad.h"`;
        Blockly.Arduino.definitions_[`keypad_init4x4`] =
`const byte ROWS = 4; //four rows
const byte COLS = 4; //four columns
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
byte rowPins[ROWS] = { ${r1}, ${r2}, ${r3}, ${r4}}; //connect to the row pinouts of the keypad
byte colPins[COLS] = { ${c1}, ${c2}, ${c3}, ${c4}}; //connect to the column pinouts of the keypad

Keypad keypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );
char key_value;
String keyin_string="";

double currentTime44 = 0;
double lastTime44 = 0;
double getLastTime44(){
    return currentTime44 = millis()/1000.0 - lastTime44;
}`;

       return '';
    };
	
	Blockly.Arduino.keypad_init4x3 = function (block) {
        const r1 = Blockly.Arduino.valueToCode(block, 'r1', Blockly.Arduino.ORDER_ATOMIC);
		const r2 = Blockly.Arduino.valueToCode(block, 'r2', Blockly.Arduino.ORDER_ATOMIC);
		const r3 = Blockly.Arduino.valueToCode(block, 'r3', Blockly.Arduino.ORDER_ATOMIC);
		const r4 = Blockly.Arduino.valueToCode(block, 'r4', Blockly.Arduino.ORDER_ATOMIC);
		const c1 = Blockly.Arduino.valueToCode(block, 'c1', Blockly.Arduino.ORDER_ATOMIC);
		const c2 = Blockly.Arduino.valueToCode(block, 'c2', Blockly.Arduino.ORDER_ATOMIC);
		const c3 = Blockly.Arduino.valueToCode(block, 'c3', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.keypad_init = `#include "Keypad.h"`;
        Blockly.Arduino.definitions_[`keypad_init4x3`] =
`const byte ROWS = 4; //four rows
const byte COLS = 3; //three columns
char keys[ROWS][COLS] = {
  {'1','2','3'},
  {'4','5','6'},
  {'7','8','9'},
  {'*','0','#'}
};
byte rowPins[ROWS] = { ${r1}, ${r2}, ${r3}, ${r4}}; //connect to the row pinouts of the keypad
byte colPins[COLS] = { ${c1}, ${c2}, ${c3}}; //connect to the column pinouts of the keypad

Keypad keypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );
char key_value;
String keyin_string="";

double currentTime44 = 0;
double lastTime44 = 0;
double getLastTime44(){
    return currentTime44 = millis()/1000.0 - lastTime44;
}`;

       return '';
    };
	
	Blockly.Arduino.keypad_init3x3 = function (block) {
        const r1 = Blockly.Arduino.valueToCode(block, 'r1', Blockly.Arduino.ORDER_ATOMIC);
		const r2 = Blockly.Arduino.valueToCode(block, 'r2', Blockly.Arduino.ORDER_ATOMIC);
		const r3 = Blockly.Arduino.valueToCode(block, 'r3', Blockly.Arduino.ORDER_ATOMIC);
		const c1 = Blockly.Arduino.valueToCode(block, 'c1', Blockly.Arduino.ORDER_ATOMIC);
		const c2 = Blockly.Arduino.valueToCode(block, 'c2', Blockly.Arduino.ORDER_ATOMIC);
		const c3 = Blockly.Arduino.valueToCode(block, 'c3', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.keypad_init = `#include "Keypad.h"`;
        Blockly.Arduino.definitions_[`keypad_init3x3`] =
`const byte ROWS = 3; //three rows
const byte COLS = 3; //three columns
char keys[ROWS][COLS] = {
  {'1','2','3'},
  {'4','5','6'},
  {'7','8','9'}
};
byte rowPins[ROWS] = { ${r1}, ${r2}, ${r3}}; //connect to the row pinouts of the keypad
byte colPins[COLS] = { ${c1}, ${c2}, ${c3}}; //connect to the column pinouts of the keypad

Keypad keypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );
char key_value;
String keyin_string="";

double currentTime44 = 0;
double lastTime44 = 0;
double getLastTime44(){
    return currentTime44 = millis()/1000.0 - lastTime44;
}`;

       return '';
    };
     
    Blockly.Arduino.keypad_scan = function (block) {
      return 'key_value = keypad.getKey();\n';
   };
   
   Blockly.Arduino.keypad_getValue = function (block) {
      return ['key_value != NO_KEY', Blockly.Arduino.ORDER_ATOMIC];
   };
   
   Blockly.Arduino.keypad_keyValue = function (block) {
      return ['key_value', Blockly.Arduino.ORDER_ATOMIC];
   };
   Blockly.Arduino.keypad_readString = function (block) {
	  const value = this.getFieldValue('value');
	  var cmd = 
`keyin_string = "";
  int key_digitals = 0;
  lastTime44 = millis()/1000.0;
  while(!((key_digitals == ${value})  ||  (getLastTime44() > 10)))
  {
      key_value = keypad.getKey();
      while(!((key_value != NO_KEY)  ||  (getLastTime44() > 10)))
      {
          key_value = keypad.getKey();
      }
      if(key_value != NO_KEY)
      {
          keyin_string = keyin_string + key_value;
          key_digitals += 1;
          delay(20);
          lastTime44 = millis()/1000.0;
      }
  }\n`
      return cmd;
   };
   
   Blockly.Arduino.keypad_readHash = function (block) {
	  var cmd = 
`keyin_string = "";
  lastTime44 = millis()/1000.0;
  key_value = keypad.getKey();
  while(!((key_value == '#')  ||  (getLastTime44() > 10)))
  {
      key_value = keypad.getKey();
      while(!((key_value != NO_KEY)  ||  (getLastTime44() > 10)))
      {
          key_value = keypad.getKey();
      }
      if((key_value != NO_KEY) && (key_value != '#'))
      {
          keyin_string = keyin_string + key_value;
          delay(20);
          lastTime44 = millis()/1000.0;
      }
  }\n`
      return cmd;
   };
   
   Blockly.Arduino.keypad_enteredString = function (block) {
      return ['keyin_string', Blockly.Arduino.ORDER_ATOMIC];
   };
   
    return Blockly;
}

exports = addGenerator;
