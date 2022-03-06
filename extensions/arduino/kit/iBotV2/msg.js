/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IBOT_V2_CATEGORY: 'iBot V2',
        IBOTV2_INIT: 'init iBot V2',
        IBOTV2_SETSERVODEGREE: 'set servo %1 degree %2 wait %3',
        IBOTV2_SETMOTORSPEED: 'set motor %1 direction %2 speed %3',
        IBOTV2_FORWARD: 'forward',
        IBOTV2_BACKWARD: 'backward',
        IBOTV2_STOPMOTOR: 'break motor %1',
        IBOTV2_SETRGBLEDCOLOR: '设置RGB LED %1 颜色为 %2',
        IBOTV2_ALL: 'all',
        IBOTV2_LEFT: 'left',
        IBOTV2_RIGHT: 'right',
        IBOTV2_SETBUZZER: 'Buzzer indicator : delay in ms %1',
		IBOTV2_STOPLED: 'LED Off',
		IBOTV2_STOPBUZZER: 'Buzzer Off',
		IBOTV2_SETLED: 'LED blink : delay in ms %1',
		IBOTV2_LIGHTSENSOR: 'Light Sense : %1',
		IBOTV2_ULTRASONIC: 'Read Ultrasonic distance',
		IBOTV2_DISPLAYMISC: 'Display image %1 %2',
		IBOTV2_DISPLAYEYE: 'Display Eye %1 %2',
		IBOTV2_CLEARDISPLAY: 'Clear %1 Display',
		IBOTV2_TEXTDISPLAY: 'Display Text %1 x(max:128) %2 y(max:64) %3 in %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IBOT_V2_CATEGORY: 'iBot V2',
        IBOTV2_INIT: 'init iBot V2',
        IBOTV2_SETSERVODEGREE: 'set servo %1 degree %2 wait %3',
        IBOTV2_SETMOTORSPEED: '设置电机 %1 方向 %2 速度 %3',
        IBOTV2_FORWARD: '正转',
        IBOTV2_BACKWARD: '倒转',
        IBOTV2_STOPMOTOR: '电机 %1 刹车',
        IBOTV2_SETRGBLEDCOLOR: '设置RGB LED %1 颜色为 %2',
        IBOTV2_ALL: '全部',
        IBOTV2_LEFT: '左边',
        IBOTV2_RIGHT: '右边',
        IBOTV2_SETBUZZER: 'Buzzer indicator : delay in ms %1',
		IBOTV2_STOPLED: 'LED Off',
		IBOTV2_STOPBUZZER: 'Buzzer Off',
		IBOTV2_SETLED: 'LED blink : delay in ms %1',
		IBOTV2_LIGHTSENSOR: 'Light Sense : %1',
		IBOTV2_ULTRASONIC: 'Read Ultrasonic distance',
		IBOTV2_DISPLAYMISC: 'Display image %1 %2',
		IBOTV2_DISPLAYEYE: 'Display Eye %1 %2',
		IBOTV2_CLEARDISPLAY: 'Clear %1 Display',
		IBOTV2_TEXTDISPLAY: 'Display Text %1 x(max:128) %2 y(max:64) %3 in %4'
    });
    return Blockly;
}

exports = addMsg;
