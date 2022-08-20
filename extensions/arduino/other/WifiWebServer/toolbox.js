/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_WIFIWEBSERVER_CATEGORY}" id="WIFIWEBSERVER_CATEGORY" colour="#3333ff" secondaryColour="#3333ff">
    <block type="wifiWebServer_begin" id="wifiWebServer_begin">
      <field name="baudrate">76800</field>
    </block>
    <block type="wifiWebServer_wifi" id="wifiWebServer_wifi">
        <value name="locssid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="locpswd">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>

    <block type="wifiWebServer_apbegin" id="wifiWebServer_apbegin">
        <value name="locssid">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="locpswd">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>
    <block type="wifiWebServer_mainPage" id="wifiWebServer_mainPage">
    </block>
    <block type="wifiWebServer_chkRequest" id="wifiWebServer_chkRequest">
    <value name="request">
            <shadow type="text">
                <field name="TEXT">LedOn</field>
            </shadow>
        </value>
    </block>
	<block type="wifiWebServer_guiLabel" id="wifiWebServer_guiLabel">
    <value name="labelText">
            <shadow type="text">
                <field name="TEXT">Led is On</field>
            </shadow>
        </value>
	<value name="timeInterval">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="wifiWebServer_guiButton" id="wifiWebServer_guiButton">
    <value name="req_cmd">
            <shadow type="text">
                <field name="TEXT">LedOn</field>
            </shadow>
    </value>
    <value name="BtText">
        <shadow type="text">
            <field name="TEXT">Turn on Button</field>
        </shadow>
    </value>
    <value name="warp">
        <shadow type="text">
            <field name="TEXT">Space</field>
        </shadow>
    </value>
    </block>
	<block type="wifiWebServer_guiSlider" id="wifiWebServer_guiSlider">
	<value name="SliderName">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
    </value>
	<value name="SliderValue">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
    </value>
    <value name="min">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
    </value>
	<value name="max">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
    </value>
    <value name="warp">
        <shadow type="text">
            <field name="TEXT">Space</field>
        </shadow>
    </value>
    </block>
	<block type="wifiWebServer_string" id="wifiWebServer_string">
        <value name="aiostr">
            <shadow type="text">
                <field name="TEXT">string_data</field>
            </shadow>
        </value>
    </block>
	<block type="wifiWebServer_stringeql" id="wifiWebServer_stringeql">
        <value name="aiostr">
            <block type="wifiWebServer_string" id="wifiWebServer_string">
        <value name="aiostr">
            <shadow type="text">
                <field name="TEXT">string_data</field>
            </shadow>
        </value>
    </block>
        </value>
		<value name="aiostreq">
            <shadow type="text">
                <field name="TEXT"></field>
            </shadow>
        </value>
    </block>
	<block type="wifiWebServer_handleClient" id="wifiWebServer_handleClient">
    </block>
</category>`;
}

exports = addToolbox;
