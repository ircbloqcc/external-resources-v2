/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WIFIWEBSERVER_CATEGORY: 'WebServer',
        WIFIWEBSERVER_BEGIN: 'Connect SSID %1 Password %2 for WebServer',
        WIFIWEBSERVER_APBEGIN: 'Set SSID %1 Password %2 for Access Point',
		WIFIWEBSERVER_MAINPAGE: 'Create Main Page',
		WIFIWEBSERVER_GUILABEL: 'Print %1 every %2 ms in WebPage',
        WIFIWEBSERVER_GUIBUTTON:'Create GUI Button for %1 text %2 with %3',		
        WIFIWEBSERVER_CHKREQUEST: 'Button Command == %1',
		WIFIWEBSERVER_GUISLIDER: 'Create GUI Slider %1 position %2 range: min %3 max %4 with %5',
		WIFIWEBSERVER_STRING: 'String Variable %1',
		WIFIWEBSERVER_STRINGEQL: 'Assign %1 = %2',
		WIFIWEBSERVER_HANDLECLIENT: 'Run Client Handle'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WIFIWEBSERVER_CATEGORY: 'WebServer',
        WIFIWEBSERVER_BEGIN: 'Connect SSID %1 Password %2 for WebServer',
        WIFIWEBSERVER_APBEGIN: 'Set SSID %1 Password %2 for Access Point',
		WIFIWEBSERVER_MAINPAGE: 'Create Main Page',
		WIFIWEBSERVER_GUILABEL: 'Print %1 every %2 ms in WebPage',
        WIFIWEBSERVER_GUIBUTTON:'Create GUI Button for %1 text %2 with %3',		
        WIFIWEBSERVER_CHKREQUEST: 'Button Command == %1',
		WIFIWEBSERVER_GUISLIDER: 'Create GUI Slider %1 position %2 range: min %3 max %4 with %5',
		WIFIWEBSERVER_STRING: 'String Variable %1',
		WIFIWEBSERVER_STRINGEQL: 'Assign %1 = %2',
		WIFIWEBSERVER_HANDLECLIENT: 'Run Client Handle'
    });
    return Blockly;
}

exports = addMsg;
