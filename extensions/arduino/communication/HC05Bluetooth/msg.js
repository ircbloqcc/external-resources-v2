/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HC05BLUETOOTH_CATEGORY: 'HC05 Bluetooth',
        HC05BLUETOOTH_BEGIN: 'HC05 Bluetooth : TX pin %1 RX pin %2 begin baudrate %3',
		HC05BLUETOOTH_TIMEOUT: 'HC05 Bluetooth set timeout %1',
        HC05BLUETOOTH_PRINT: 'HC05 Bluetooth print %1 %2',
		HC05BLUETOOTH_WARP: 'warp',
		HC05BLUETOOTH_NOWARP: 'no-warp',	
        HC05BLUETOOTH_AVAILABLE: 'HC05 Bluetooth available data length',
        HC05BLUETOOTH_READABYTE: 'HC05 Bluetooth read a byte',
        HC05BLUETOOTH_READINTEGER: 'HC05 Bluetooth read integer',
        HC05BLUETOOTH_READSTRING: 'HC05 Bluetooth read string',
        HC05BLUETOOTH_COMPARESTRING: 'HC05 Bluetooth compare string %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HC05BLUETOOTH_CATEGORY: 'HC05 Bluetooth',
        HC05BLUETOOTH_BEGIN: 'HC05 Bluetooth : TX pin %1 RX pin %2 begin baudrate %3',
		HC05BLUETOOTH_TIMEOUT: 'HC05 Bluetooth set timeout %1',
        HC05BLUETOOTH_PRINT: 'HC05 Bluetooth print %1 %2',
		HC05BLUETOOTH_WARP: 'warp',
		HC05BLUETOOTH_NOWARP: 'no-warp',	
        HC05BLUETOOTH_AVAILABLE: 'HC05 Bluetooth available data length',
        HC05BLUETOOTH_READABYTE: 'HC05 Bluetooth read a byte',
        HC05BLUETOOTH_READINTEGER: 'HC05 Bluetooth read integer',
        HC05BLUETOOTH_READSTRING: 'HC05 Bluetooth read string',
        HC05BLUETOOTH_COMPARESTRING: 'HC05 Bluetooth compare string %1'
    });
    return Blockly;
}

exports = addMsg;
