/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
		DATABLOCK_CATEGORY: 'Data',
        DATABLOCK_MAPPING: 'map %1 from (%2 %3) to (%4 %5)',
        DATABLOCK_CONSTRAIN: 'constrain %1 between (%2 %3)',
		DATABLOCK_CONVERTTYPE: 'convert %1 to %2',
		DATABLOCK_CONVERTASCIITEXT: 'convert %1 to ASCII character',
		DATABLOCK_CONVERTASCIINUM: 'convert %1 to ASCII number'
    });
    return Blockly;
}

exports = addMsg;
