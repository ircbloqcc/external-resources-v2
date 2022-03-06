/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AMINGO_CATEGORY: 'Amingo Robot',
        AMINGO_INIT: 'init Amingo',
		AMINGO_HOME: 'HOME POSITION',
		AMINGO_STANDBY: 'standby mode',
		AMINGO_SETSERVOPARTS: 'set %1 angle %2 speed %3 wait %4',
		AMINGO_RGB: 'set RGB -> Red %1 Green %2 Blue %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AMINGO_CATEGORY: 'Amingo Robot',
        AMINGO_INIT: 'init Amingo',
		AMINGO_HOME: 'HOME POSITION',
		AMINGO_STANDBY: 'standby mode',
		AMINGO_SETSERVOPARTS: 'set %1 angle %2 speed %3 wait %4',
		AMINGO_RGB: 'set RGB -> Red %1 Green %2 Blue %3'
    });
    return Blockly;
}

exports = addMsg;
