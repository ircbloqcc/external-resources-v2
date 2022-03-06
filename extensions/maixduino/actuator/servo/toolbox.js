/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO_MAIXDUINO_CATEGORY}" id="SERVO_MAIXDUINO_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00" iconURI="">
    <block type="servo_write_maixduino" id="servo_write_maixduino">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
