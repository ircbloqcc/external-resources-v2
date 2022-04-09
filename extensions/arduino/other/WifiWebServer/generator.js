/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.wifiWebServer_begin = function (block) {
       // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const locssid = Blockly.Arduino.valueToCode(block, 'locssid', Blockly.Arduino.ORDER_ATOMIC);
        const locpswd = Blockly.Arduino.valueToCode(block, 'locpswd', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.wifiWebServer_init = 
    `#ifdef ESP32
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#else
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#endif`;

         Blockly.Arduino.definitions_[`wifiWebServer_begin`] =
`const char* ssid = ${locssid};
const char* password = ${locpswd};
#ifdef ESP32
WebServer server(80);
#else
ESP8266WebServer server(80);
#endif`;

         Blockly.Arduino.setups_[`wifiWebServer_begin`] =
    `Serial.begin(115200);
    WiFi.begin(ssid,password);
     while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }
    Serial.println("WiFi Connected");
    server.begin();
    Serial.println("Server started");
    Serial.print("ip Address :");
    Serial.println(WiFi.localIP());`;
       return '';
    };
     
    Blockly.Arduino.wifiWebServer_apbegin = function (block) {
        // const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
         const locssid = Blockly.Arduino.valueToCode(block, 'locssid', Blockly.Arduino.ORDER_ATOMIC);
         const locpswd = Blockly.Arduino.valueToCode(block, 'locpswd', Blockly.Arduino.ORDER_ATOMIC);
 
         Blockly.Arduino.includes_.wifiWebServer_init = 
    `#ifdef ESP32
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#else
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#endif`;
         Blockly.Arduino.definitions_[`wifiWebServer_begin`] =
`const char* ssid = ${locssid};
const char* password = ${locpswd};
#ifdef ESP32
WebServer server(80);
#else
ESP8266WebServer server(80);
#endif`;
 
          Blockly.Arduino.setups_[`wifiWebServer_begin`] =
     `Serial.begin(115200);
     WiFi.softAP(ssid,password);
     IPAddress apip = WiFi.softAPIP();
     server.begin();
     Serial.println("Server started");
     Serial.print("ip Address : ");
     Serial.println(apip);`;
        return '';
     };

   Blockly.Arduino.wifiWebServer_mainPage = function (block) {
	   Blockly.Arduino.definitions_[`wifiWebServer_mainPage`] = 
`const char MAIN_page[] PROGMEM = R"=====(
<!DOCTYPE html>
<html>
<title>IRC WEB SERVER</title>
<center>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<h1>IRC WiFi WEB SERVER</h1>
</head>
<body>
<script></script>
</body>
</center>
</html>
)=====";

void handleRoot() {
  String s = MAIN_page; //Read HTML contents
  server.send(200, "text/html", s); //Send web page
}`;

Blockly.Arduino.setups_[`wifiWebServer_mainPage`] = 
`server.on("/", handleRoot);`;
return '';
   };
   
   Blockly.Arduino.wifiWebServer_chkRequest = function (block) {
    var request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
    request = request.replace(/\"/g, "");
	request = request.replace(/\ /g, "_");
    return [`b_state_ls ==\"${request}\"`, Blockly.Arduino.ORDER_ATOMIC];
   };
  
   Blockly.Arduino.wifiWebServer_guiLabel = function (block) {
    var labelText = Blockly.Arduino.valueToCode(block, 'labelText', Blockly.Arduino.ORDER_ATOMIC);
	var labelText_change = labelText.replace(/\"/g, "");
	labelText_change = labelText_change.replace(/\ /g, "_");
	const timeInterval = Blockly.Arduino.valueToCode(block, 'timeInterval', Blockly.Arduino.ORDER_ATOMIC);
	var mainPage = Blockly.Arduino.definitions_[`wifiWebServer_mainPage`];
	mainPage = mainPage.replace(/\<script>/g, 
`<p><span id="${labelText_change}"></span></p>
<script>`);
mainPage = mainPage.replace(/\<\/script>/g,
`
labelTextLS_${labelText_change}();
window.setInterval(() => { labelTextLS_${labelText_change}();}, ${timeInterval});
function labelTextLS_${labelText_change}(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      document.getElementById("${labelText_change}").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "labelTextLS_${labelText_change}", true);
  xhttp.send();
}
</script>`);
    Blockly.Arduino.definitions_[`wifiWebServer_mainPage`] = mainPage;
	Blockly.Arduino.definitions_[`wifiWebServer_guiLabel_${labelText_change}`] = 
`void handleLabelTextLS_${labelText_change}() {
  String labelText = String(${labelText});
  server.send(200, "text/html", labelText);
}`;
	Blockly.Arduino.setups_[`wifiWebServer_guiLabel_${labelText_change}`] = `server.on("/labelTextLS_${labelText_change}", handleLabelTextLS_${labelText_change});  //Print data to webpage`;
    return '';
   };
   

   Blockly.Arduino.wifiWebServer_guiButton = function (block) {
	var req_cmd = Blockly.Arduino.valueToCode(block, 'req_cmd', Blockly.Arduino.ORDER_ATOMIC);
    req_cmd = req_cmd.replace(/\"/g, "");
	req_cmd = req_cmd.replace(/\ /g, "_");


    var BtText = Blockly.Arduino.valueToCode(block, 'BtText', Blockly.Arduino.ORDER_ATOMIC);
    BtText = BtText.replace(/\"/g, "");
    const warp = this.getFieldValue('warp');
    
	var mainPage = Blockly.Arduino.definitions_[`wifiWebServer_mainPage`];
	mainPage = mainPage.replace(/\<script>/g, 
`<button type="button" onclick="buttonDataLS('${req_cmd}')" class="btn">${BtText}</button>${warp}
<script>`);
	mainPage = mainPage.replace(/\<script></g,
`<script>
function buttonDataLS(StatusSerLS) { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 
        document.getElementById("buttonStateLS").innerHTML = this.responseText;     
    }
    };        
    xhttp.open("GET", "B_State_LS?;buttonStateLS=" + StatusSerLS, true);   
    xhttp.send();
}
<`);

   mainPage = mainPage.replace(/\}<\/script>/g,
`}

function buttonDataLS(StatusSerLS) { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 
        document.getElementById("buttonStateLS").innerHTML = this.responseText;     
    }
    };        
    xhttp.open("GET", "B_State_LS?;buttonStateLS=" + StatusSerLS, true);   
    xhttp.send();
}
</script>`);
	Blockly.Arduino.definitions_[`wifiWebServer_mainPage`] = mainPage;
	Blockly.Arduino.definitions_[`wifiWebServer_GUIButton`] = 
`String b_state_ls;
void handleButton() {
  b_state_ls = server.arg("buttonStateLS");
}`;
	Blockly.Arduino.setups_[`wifiWebServer_GUIButton`] = "server.on(\"/B_State_LS\", handleButton);  //button State\n";
    return '';
   };
   
   Blockly.Arduino.wifiWebServer_guiSlider = function (block) {
	var SliderName = Blockly.Arduino.valueToCode(block, 'SliderName', Blockly.Arduino.ORDER_ATOMIC);
    var SliderValue = Blockly.Arduino.valueToCode(block, 'SliderValue', Blockly.Arduino.ORDER_ATOMIC);
    var min = Blockly.Arduino.valueToCode(block, 'min', Blockly.Arduino.ORDER_ATOMIC);
    var max = Blockly.Arduino.valueToCode(block, 'max', Blockly.Arduino.ORDER_ATOMIC);
    const warp = this.getFieldValue('warp');
    
	var mainPage = Blockly.Arduino.definitions_[`wifiWebServer_mainPage`];
	mainPage = mainPage.replace(/\<script>/g, 
`<input type="range" min="${min}" max="${max}" value="0" class="slider" id="myRange_LS_${SliderName}">
<p>Slider Value: <span id="demoLS_${SliderName}"></span></p>
<script>`);
	mainPage = mainPage.replace(/\<\/script>/g,
`
function servoStateLs_${SliderName}(pos) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
     }
    };
    xhttp.open("GET", "setPOS_LS_${SliderName}?sliderPOS_LS_${SliderName}="+pos, true);
    xhttp.send();
}
var sliderLS_${SliderName} = document.getElementById("myRange_LS_${SliderName}");
var outputLS_${SliderName} = document.getElementById("demoLS_${SliderName}");
outputLS_${SliderName}.innerHTML = sliderLS_${SliderName}.value;
sliderLS_${SliderName}.oninput = function() {
outputLS_${SliderName}.innerHTML = this.value;
servoStateLs_${SliderName}(outputLS_${SliderName}.innerHTML);
}</script>`);
	Blockly.Arduino.definitions_[`wifiWebServer_mainPage`] = mainPage;
	Blockly.Arduino.definitions_[`wifiWebServer_GUISlider_${SliderName}`] = 
`void handleSlider_${SliderName}() {
  String POS = server.arg("sliderPOS_LS_${SliderName}");
  ${SliderValue} = POS.toInt();
  server.send(200, "text/plane", "");
}`;
	Blockly.Arduino.setups_[`wifiWebServer_GUISlider_${SliderName}`] = `server.on("/setPOS_LS_${SliderName}", handleSlider_${SliderName});  //Slider State`;
    return '';
   };
   
   Blockly.Arduino.wifiWebServer_string = function (block) {
        var aiostr = Blockly.Arduino.valueToCode(block, 'aiostr', Blockly.Arduino.ORDER_ATOMIC);
		aiostr = aiostr.replace(/\"/g, "");
        Blockly.Arduino.definitions_[`wifiWebServer_${aiostr}`] = `String ${aiostr};`;
		return [`${aiostr}`, Blockly.Arduino.ORDER_ATOMIC];
    };
	
  Blockly.Arduino.wifiWebServer_stringeql = function (block) {
		var aiostr = Blockly.Arduino.valueToCode(block, 'aiostr', Blockly.Arduino.ORDER_ATOMIC);
		aiostr = aiostr.replace(/\"/g, "");
        var aiostreq = Blockly.Arduino.valueToCode(block, 'aiostreq', Blockly.Arduino.ORDER_ATOMIC);
		return `${aiostr} = ${aiostreq};\n`;
    };
   
	Blockly.Arduino.wifiWebServer_handleClient = function (block) {
	//const request = Blockly.Arduino.valueToCode(block, 'request', Blockly.Arduino.ORDER_ATOMIC);
    return 'server.handleClient();\n';
   };
    return Blockly;
}

exports = addGenerator;
