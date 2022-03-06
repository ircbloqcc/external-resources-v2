/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_HC05BLUETOOTH_CATEGORY}" id="HC05BLUETOOTH_CATEGORY" colour="#00D7B0" secondaryColour="#00D7B0">
    <block type="HC05Bluetooth_begin" id="HC05Bluetooth_begin">
        <value name="rx">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="tx">
            <shadow type="math_number">
                <field name="NUM">11</field>
            </shadow>
        </value>
        <field name="baudrate">9600</field>
    </block>
	<block type="HC05Bluetooth_timeout" id="HC05Bluetooth_timeout">
        <value name="tout">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="HC05Bluetooth_print" id="HC05Bluetooth_print">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="HC05Bluetooth_available" id="HC05Bluetooth_available">
    </block>
    <block type="HC05Bluetooth_readAByte" id="HC05Bluetooth_readAByte">
    </block>
    <block type="HC05Bluetooth_readInteger" id="HC05Bluetooth_readInteger">
    </block>
    <block type="HC05Bluetooth_readString" id="HC05Bluetooth_readString">
    </block>
    <block type="HC05Bluetooth_compareString" id="HC05Bluetooth_compareString">
    <value name="data">
            <shadow type="text">
                <field name="TEXT">LEDON</field>
            </shadow>
        </value>
        </block>
</category>`;
}

exports = addToolbox;
