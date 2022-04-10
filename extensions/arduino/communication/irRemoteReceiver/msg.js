/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IRREMOTERECEIVER_CATEGORY: 'IR Remote Receiver',
        IRREMOTERECEIVER_INIT: 'init IR remote receiver pin %1',
        IRREMOTERECEIVER_DATAAVAILABLE: 'IR remote receiver data available?',
        IRREMOTERECEIVER_RECIVEDCOMMAND: 'IR remote recived command',
        IRREMOTERECEIVER_RESUME: 'IR remote resume recive'
    });
    return Blockly;
}

exports = addMsg;
