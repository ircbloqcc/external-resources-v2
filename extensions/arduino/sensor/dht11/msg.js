/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'init dht %1 pin %2 mode %3',
        DHT_READ_TEMPERATURE: 'dht %1 read temperature %2',
        DHT_READ_HUMIDITY: 'dht %1 read humidity'
    });
    return Blockly;
}

exports = addMsg;
