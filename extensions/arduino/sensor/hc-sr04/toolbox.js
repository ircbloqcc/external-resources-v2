/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#D39DDB" secondaryColour="#D39DDB" iconURI="">
    <block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
    </block>
</category> `;
}
exports = addToolbox;
