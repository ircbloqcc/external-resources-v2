/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO_MICROBIT_CATEGORY}" id="SERVO_MICROBIT_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00" iconURI="">
    <block type="servo_write_microbit" id="servo_write_microbit">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
