/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HC05BLUETOOTHESP8266_CATEGORY: 'HC05 Bluetooth',
        HC05BLUETOOTHESP8266_BEGIN: 'HC05 Bluetooth : TX pin %1 RX pin %2 begin baudrate %3',
        HC05BLUETOOTHESP8266_TIMEOUT: 'HC05 Bluetooth set timeout %1',
        HC05BLUETOOTHESP8266_PRINT: 'HC05 Bluetooth print %1 %2',
		HC05BLUETOOTHESP8266_WARP: 'warp',
		HC05BLUETOOTHESP8266_NOWARP: 'no-warp',	
        HC05BLUETOOTHESP8266_AVAILABLE: 'HC05 Bluetooth available data length',
        HC05BLUETOOTHESP8266_READABYTE: 'HC05 Bluetooth read a byte',
        HC05BLUETOOTHESP8266_READINTEGER: 'HC05 Bluetooth read integer',
        HC05BLUETOOTHESP8266_READSTRING: 'HC05 Bluetooth read string',
        HC05BLUETOOTHESP8266_COMPARESTRING: 'HC05 Bluetooth compare string %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HC05BLUETOOTHESP8266_CATEGORY: 'HC05 Bluetooth',
        HC05BLUETOOTHESP8266_BEGIN: 'HC05 Bluetooth : TX pin %1 RX pin %2 begin baudrate %3',
        HC05BLUETOOTHESP8266_TIMEOUT: 'HC05 Bluetooth set timeout %1',
        HC05BLUETOOTHESP8266_PRINT: 'HC05 Bluetooth print %1 %2',
		HC05BLUETOOTHESP8266_WARP: 'warp',
		HC05BLUETOOTHESP8266_NOWARP: 'no-warp',		
        HC05BLUETOOTHESP8266_AVAILABLE: 'HC05 Bluetooth available data length',
        HC05BLUETOOTHESP8266_READABYTE: 'HC05 Bluetooth read a byte',
        HC05BLUETOOTHESP8266_READINTEGER: 'HC05 Bluetooth read integer',
        HC05BLUETOOTHESP8266_READSTRING: 'HC05 Bluetooth read string',
        HC05BLUETOOTHESP8266_COMPARESTRING: 'HC05 Bluetooth compare string %1'
    });
    return Blockly;
}

exports = addMsg;
