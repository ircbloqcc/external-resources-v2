/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KEYPAD_CATEGORY: 'Keypad',
        KEYPAD_INIT4X4: 'Intialize 4x4 Rows: %1 %2 %3 %4 Cols: %5 %6 %7 %8',
		KEYPAD_INIT4X3: 'Intialize 4x3 Rows: %1 %2 %3 %4 Cols: %5 %6 %7',
		KEYPAD_INIT3X3: 'Intialize 3x3 Rows: %1 %2 %3 Cols: %4 %5 %6',
		KEYPAD_SCAN: 'Scan the Keypad',
		KEYPAD_GETVALUE: 'Get any key value?',
		KEYPAD_KEYVALUE: 'Key Value',
		KEYPAD_READSTRING: 'Read a string of %1 chars',
		KEYPAD_READHASH: 'Read String to #',
		KEYPAD_ENTEREDSTRING: 'Entered String'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KEYPAD_CATEGORY: 'Keypad',
        KEYPAD_INIT4X4: 'Intialize 4x4 Rows: %1 %2 %3 %4 Cols: %5 %6 %7 %8',
		KEYPAD_INIT4X3: 'Intialize 4x3 Rows: %1 %2 %3 %4 Cols: %5 %6 %7',
		KEYPAD_INIT3X3: 'Intialize 3x3 Rows: %1 %2 %3 Cols: %4 %5 %6',
		KEYPAD_SCAN: 'Scan the Keypad',
		KEYPAD_GETVALUE: 'Get any key value?',
		KEYPAD_KEYVALUE: 'Key Value',
		KEYPAD_READSTRING: 'Read a string of %1 chars',
		KEYPAD_READHASH: 'Read String to #',
		KEYPAD_ENTEREDSTRING: 'Entered String'
    });
    return Blockly;
}

exports = addMsg;
