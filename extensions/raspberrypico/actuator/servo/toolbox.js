/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO_RASPBERRYPICO_CATEGORY}" id="SERVO_RASPBERRYPICO_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00" iconURI="">
    <block type="servo_write_raspberrypico" id="servo_write_raspberrypico">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
		<value name="freq">
            <shadow type="math_angle">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
