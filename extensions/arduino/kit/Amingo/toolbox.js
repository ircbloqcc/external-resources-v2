/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_AMINGO_CATEGORY}" id="AMINGO_CATEGORY" colour="#a836a8" secondaryColour="#a836a8">
    <block type="Amingo_init" id="Amingo_init">
    </block>
	<block type="Amingo_home" id="Amingo_home">
    </block>
	<block type="Amingo_standby" id="Amingo_standby">
    </block>
	<block type="Amingo_RGB" id="Amingo_RGB">
        <value name="red">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
		<value name="green">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
		<value name="blue">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="Amingo_setServoParts" id="Amingo_setServoParts">
        <value name="degree">
            <shadow type="math_number">
                <field name="NUM">40</field>
            </shadow>
        </value>
		<value name="speed">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
	
</category>`;
}

exports = addToolbox;
