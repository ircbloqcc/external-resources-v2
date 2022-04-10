/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD_CATEGORY: '1602 LCD',
        LCD_INIT: 'init lcd I2C address %1',
        LCD_SETCURSORPOSITION: 'set lcd cursor position x: %1 y: %2',
        LCD_PRINT: 'lcd print %1',
        LCD_CLEAR: 'clear lcd',
        LCD_SETBACKLIGHT: 'set lcd back light %1',
        LCD_SATE_ON: 'on',
        LCD_SATE_OFF: 'off',
        LCD_SETCURSORSTYLE: 'set lcd cursor %1 style %2',
        LCD_SATE_DISPLAY: 'display',
        LCD_SATE_HIDE: 'hide',
        LCD_STYLE_BLINK: 'blink',
        LCD_STYLE_NOBLINK: 'no-blink'
    });
    return Blockly;
}

exports = addMsg;
