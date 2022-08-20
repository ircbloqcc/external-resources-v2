/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#3333ff';

    Blockly.Blocks.wifiWebServer_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_BEGIN,
                args0: [{
                        type: 'field_dropdown',
                        name: 'baudrate',
                        options: [
                            ['4800', '4800'],
                            ['9600', '9600'],
                            ['19200', '19200'],
                            ['38400', '38400'],
                            ['57600', '57600'],
                            ['76800', '76800'],
                            ['115200', '115200']]
                    }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifiWebServer_wifi = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_WIFI,
                args0: [{
                    type: 'input_value',
                    name: 'locssid'
                }, {
                    type: 'input_value',
                    name: 'locpswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifiWebServer_apbegin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_APBEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'locssid'
                }, {
                    type: 'input_value',
                    name: 'locpswd'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifiWebServer_chkRequest = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_CHKREQUEST,
                args0: [{
                    type: 'input_value',
                    name: 'request'
                }],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

	Blockly.Blocks.wifiWebServer_mainPage = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_MAINPAGE,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifiWebServer_guiLabel = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_GUILABEL,
                args0: [{
                    type: 'input_value',
                    name: 'labelText'
                },
				{
                    type: 'input_value',
                    name: 'timeInterval'
                }
				],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifiWebServer_guiButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_GUIBUTTON,
                args0: [
				{
                    type: 'input_value',
                    name: 'req_cmd'
                },
				{
                    type: 'input_value',
                    name: 'BtText'
                },
                {
                    type: 'field_dropdown',
                    name: 'warp',
                    options:[
                    ['Space','&nbsp'],
                    ['NewLine','<br><br>']
                    ]
                }
            ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

	Blockly.Blocks.wifiWebServer_guiSlider = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_GUISLIDER,
                args0: [{
                    type: 'input_value',
                    name: 'SliderName'
                },
				{
                    type: 'input_value',
                    name: 'SliderValue'
                },
				{
                    type: 'input_value',
                    name: 'min'
                },
				{
                    type: 'input_value',
                    name: 'max'
                },
                {
                    type: 'field_dropdown',
                    name: 'warp',
                    options:[
                    ['Space','&nbsp'],
                    ['NewLine','<br><br>']
                    ]
                }
            ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

	Blockly.Blocks.wifiWebServer_handleClient = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_HANDLECLIENT,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

	Blockly.Blocks.wifiWebServer_string = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_STRING,
                args0: [{
                    type: 'input_value',
                    name: 'aiostr'
                }],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

	Blockly.Blocks.wifiWebServer_stringeql = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_STRINGEQL,
                args0: [{
                    type: 'input_value',
                    name: 'aiostr'
                },
				{
                    type: 'input_value',
                    name: 'aiostreq'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifiWebServer_htmlEnd = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WIFIWEBSERVER_HTMLEND,
                args0: [],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
