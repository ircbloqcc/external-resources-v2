/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function addMsg (Blockly) {

    Object.assign(Blockly.ScratchMsgs.locales.en,{
          MAX30102_CATEGORY: 'MAX30102',
          MAX30102_INIT: 'init max30102',
          MAX30102_GETDATA: 'max30102 get date',
          MAX30102_IRVALUE: 'max30102 IR value',
          MAX30102_HEARTBEAT: 'max30102 heart beat value per minite',
          MAX30102_ISTOUCHED: 'max30102 is touched?'
        });
    return Blockly;
}

exports = addMsg;
