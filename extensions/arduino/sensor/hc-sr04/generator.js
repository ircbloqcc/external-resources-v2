/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.hc_sr04_read_distance = function (block) {

        const trig = block.getFieldValue('TRIG');
        const echo = block.getFieldValue('ECHO');

         Blockly.Arduino.definitions_[`hc_sr04_read${trig}${echo}`] =
    `float getDistance(int trig,int echo) {
     pinMode(trig,OUTPUT);
     digitalWrite(trig,LOW);
     delayMicroseconds(2);
     digitalWrite(trig,HIGH);
     delayMicroseconds(10);
     digitalWrite(trig,LOW);
     pinMode(echo, INPUT);
     return pulseIn(echo,HIGH,30000)/58.0;
     }`;
    return [`getDistance(${trig},${echo})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
