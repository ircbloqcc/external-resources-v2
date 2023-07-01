/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DATABLOCK_CATEGORY}" id="DATABLOCK_CATEGORY" colour="#0D918F" secondaryColour="#0D918F">
    <block type="dataBlock_mapping" id="dataBlock_mapping">
        <value name="DATA">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
		<value name="ARG1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		<value name="ARG2">
            <shadow type="math_whole_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
		<value name="ARG3">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		<value name="ARG4">
            <shadow type="math_whole_number">
                <field name="NUM">1000</field>
            </shadow>
        </value>
		</block>
		<block type="dataBlock_constrain" id="dataBlock_constrain">
        <value name="DATA">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
		<value name="ARG1">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
		<value name="ARG2">
            <shadow type="math_whole_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
		</block>
		<sep gap="36"/>
		<block type="dataBlock_convertType" id="dataBlock_convertType">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
	<block type="dataBlock_convertASCIIText" id="dataBlock_convertASCIIText">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">123</field>
            </shadow>
        </value>
    </block>
	<block type="dataBlock_convertASCIINum" id="dataBlock_convertASCIINum">
        <value name="NO">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
