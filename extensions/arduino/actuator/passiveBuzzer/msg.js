/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PASSIVEBUZZER_CATEGORY: 'Passive Buzzer',
        PASSIVEBUZZER_INIT: 'init passive buzzer pin %1',
        PASSIVEBUZZER_PLAYTONEFORBEAT: 'play tone %1 for %2 beat',
        PASSIVEBUZZER_SETTEMPO: 'set tempo to (bpm) %1',
        PASSIVEBUZZER_PLAYRINGTONE: 'play ringtone %1',
        PASSIVEBUZZER_CONNECTION: 'connection',
        PASSIVEBUZZER_DISCONNECTION: 'disconnet',
        PASSIVEBUZZER_DIDI: 'button pushed',
        PASSIVEBUZZER_MODE1: 'mode1',
        PASSIVEBUZZER_MODE2: 'mode2',
        PASSIVEBUZZER_MODE3: 'mode3',
        PASSIVEBUZZER_SURPRISE: 'surprise',
        PASSIVEBUZZER_OHOOH: 'OhOoh',
        PASSIVEBUZZER_OHOOH2: 'OhOoh2',
        PASSIVEBUZZER_CUDDLY: 'cuddly',
        PASSIVEBUZZER_SLEEPING: 'sleeping',
        PASSIVEBUZZER_HAPPY: 'happy',
        PASSIVEBUZZER_SUPERHAPPY: 'super happy',
        PASSIVEBUZZER_HAPPYSHORT: 'happy short',
        PASSIVEBUZZER_SAD: 'sad',
        PASSIVEBUZZER_CONFUSED: 'confused',
        PASSIVEBUZZER_FART1: 'fart1',
        PASSIVEBUZZER_FART2: 'fart2',
        PASSIVEBUZZER_FART3: 'fart3'
    });
    return Blockly;
}

exports = addMsg;
