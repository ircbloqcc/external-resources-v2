/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_IBOT_V2_CATEGORY}" id="IBOT_V2_CATEGORY" colour="#f90b9e" secondaryColour="#f90b9e">
    <block type="iBotV2_init" id="iBotV2_init">
    </block>
    <block type="iBotV2_setMotorSpeed" id="iBotV2_setMotorSpeed">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="iBotV2_setServoDegree" id="iBotV2_setServoDegree">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
	<block type="iBotV2_setLed" id="iBotV2_setLed">
	<value name="msec">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
	<block type="iBotV2_stopLed" id="iBotV2_stopLed">
	</block>
    <block type="iBotV2_setBuzzer" id="iBotV2_setBuzzer">
	<value name="msec">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
	<block type="iBotV2_stopBuzzer" id="iBotV2_stopBuzzer">
	</block>
	<block type="iBotV2_lightSensor" id="iBotV2_lightSensor">
	</block>
	<block type="iBotV2_ultrasonic" id="iBotV2_ultrasonic">
	</block>
	<block type="iBotV2_displayMisc" id="iBotV2_displayMisc">
	</block>
	<block type="iBotV2_displayEye" id="iBotV2_displayEye">
	</block>
	<block type="iBotV2_clearDisplay" id="iBotV2_clearDisplay">
	</block>
	<block type="iBotV2_textDisplay" id="iBotV2_textDisplay">
	<value name="textdisp">
            <shadow type="text">
                <field name="TEXT">Hello ircBloq</field>
            </shadow>
        </value>
	<value name="xpos">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
		<value name="ypos">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
	</block>
	
</category>`;
}

exports = addToolbox;
