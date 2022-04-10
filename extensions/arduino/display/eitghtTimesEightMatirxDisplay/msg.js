/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY: '8x8 Matrix Display',
        EITGHTTIMESEIGHTMATIRXDISPLAY_INIT: 'init 8x8 matrix display pin CS %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_INIT_TOOLTIP: 'pin DIN to MOSI and CLK to SCK.',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWPIXEL: '8x8 martix display draw pixel x: %1 y: %2 color %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED: 'red',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK: 'black',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWLINE: '8x8 martix display draw line x0: %1 y0: %2, x1: %3 y1: %4 color %5',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWCHAR: '8x8 martix display show char %1 color %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWNUMBER: '8x8 martix display show number %1 color %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_FILL: '8x8 martix display fill color %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_REFRESH: 'refresh the display of 8x8 martix display',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETBRIGHTNESS: '8x8 martix display set brightness %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETROTATION: '8x8 martix display set rotation %1'

    });
    return Blockly;
}

exports = addMsg;
