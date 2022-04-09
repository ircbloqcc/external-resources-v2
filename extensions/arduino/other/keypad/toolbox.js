/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_KEYPAD_CATEGORY}" id="KEYPAD_CATEGORY" colour="#2aa112" secondaryColour="#2aa112">
    <block type="keypad_init4x4" id="keypad_init4x4">
        <value name="r1">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
		<value name="r2">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
		<value name="r3">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
		<value name="r4">
            <shadow type="math_number">
                <field name="NUM">6</field>
            </shadow>
        </value>
		<value name="c1">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
		<value name="c2">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
		<value name="c3">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
		<value name="c4">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
    </block>
    <block type="keypad_init4x3" id="keypad_init4x3">
        <value name="r1">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
		<value name="r2">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
		<value name="r3">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
		<value name="r4">
            <shadow type="math_number">
                <field name="NUM">6</field>
            </shadow>
        </value>
		<value name="c1">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
		<value name="c2">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
		<value name="c3">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    </block>
	<block type="keypad_init3x3" id="keypad_init3x3">
        <value name="r1">
            <shadow type="math_number">
                <field name="NUM">9</field>
            </shadow>
        </value>
		<value name="r2">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
		<value name="r3">
            <shadow type="math_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
		<value name="c1">
            <shadow type="math_number">
                <field name="NUM">6</field>
            </shadow>
        </value>
		<value name="c2">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
		<value name="c3">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
    </block>
    <block type="keypad_scan" id="keypad_scan">
    </block>
	<block type="keypad_getValue" id="keypad_getValue">
    </block>
	<block type="keypad_keyValue" id="keypad_keyValue">
    </block>
	<block type="keypad_readString" id="keypad_readString">
    <field name="value">6</field>
    </block>
	<block type="keypad_readHash" id="keypad_readHash">
    </block>
	<block type="keypad_enteredString" id="keypad_enteredString">
    </block>
</category>`;
}

exports = addToolbox;
