#include "amingoV1.h"
#include <inttypes.h>

#include <String.h>
#include "VarSpeedServo.h"


String voice;

VarSpeedServo myservo1;  //neck
VarSpeedServo myservo2;  //eye_lid
VarSpeedServo myservo3;  //eye_ball
VarSpeedServo myservo4;  //eye_tilt
VarSpeedServo myservo5;  //lower_mouth
VarSpeedServo myservo6;  //face
VarSpeedServo myservo7;  //upper_mouth
VarSpeedServo myservo8;  //right_eyebrow
VarSpeedServo myservo9;  //left_eyebrow


Amingo::Amingo(bool cond){
  _msg=cond;
}

void Amingo::neck(int val, int speed, int wait){
myservo1.write(val,speed,wait);
}
void Amingo::eyelid(int val, int speed, int wait){
myservo2.write(val,speed,wait);
}
void Amingo::eyeball(int val, int speed, int wait){
myservo3.write(val,speed,wait);
}
void Amingo::eyetilt(int val, int speed, int wait){
myservo4.write(val,speed,wait);
}
void Amingo::lowerlip(int val, int speed, int wait){
myservo5.write(val,speed,wait);
}
void Amingo::face(int val, int speed, int wait){
myservo6.write(val,speed,wait);
}
void Amingo::upperlip(int val, int speed, int wait){
myservo7.write(val,speed,wait);
}
void Amingo::righteyebrow(int val, int speed, int wait){
myservo8.write(val,speed,wait);
}
void Amingo::lefteyebrow(int val, int speed, int wait){
myservo9.write(val,speed,wait);
}

void Amingo::RGB(int R, int G, int B){
analogWrite(red,R);
analogWrite(green,G);
analogWrite(blue,B);

}



void Amingo::begin(long baudRate){
 if(_msg){
  Serial.begin(baudRate);
  Serial.println("Amingo Initialized");
 }
}


void Amingo::init(){
   
  pinMode(red, OUTPUT);
  pinMode(green, OUTPUT);
  pinMode(blue, OUTPUT);

  myservo1.attach(8);//neck
  myservo2.attach(2);//eye lid
  myservo3.attach(3);//eye ball
  myservo4.attach(4);//eye holder
  myservo5.attach(7);//upper mouth
  myservo6.attach(6);//face
  myservo7.attach(5);//lower mouth
  myservo8.attach(12);//left eye brow
  myservo9.attach(13);//Right eye brow
  delay(10);
  awake();

}
void Amingo::standby(){
  
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;

    myservo2.write(0);
    delay(100);
    myservo2.write(45);
    delay(100); //eye blink
  }
}

void Amingo::chk_ble(){
    while (Serial.available()) { //Check if there is an available byte to read
    delay(10); //Delay added to make thing stable
    char c = Serial.read(); //Conduct a serial read
    if (c == '#') {
      break; //Exit the loop when the # is detected after the word
    }
    voice += c; //Shorthand for voice = voice + c
  }
    if (voice.length() > 0) {
    Serial.println(voice);


    //---------------HEAD TURN-----------//
    if (voice == "*turn your head")
    {
      headturn();
    }
    else if (voice == "*close your eyes") {
      eyeclose();
    }
    //-------------EYE LID-----------//
    else if (voice == "*open your eyes" ) {
      eyeopen();
    }

    //-------------EYE BALL-----------//
    else if (voice == "*look left")
    {
      left();
    }

    else if (voice == "*look straight") {
      straight();
    }

    else if (voice == "*look right") {
      right();
    }

    //-----------EYE HOLDER----------//
    else if (voice == "*eyes up") {
      eyesup();
    }
    else if (voice == "*eyes down") {
      eyesdown();
    }
    //----------LIPS-----------//
    else if (voice == "*mouth top") {
      mouthtop();
    }
    else if (voice == "*chees") {
      mouthdown();
    }
    //----------FACE----------//
    else if (voice == "*face straight") {
      facestraight();
    }
    else if (voice == "*face up") {
      faceup();
    }
    else if (voice == "*face down") {
      facedown();
    }

    else if (voice == "*awake" || voice == "*hi") {
      awake();
    }

    //---------eyebrow----------//
    else if (voice == "*center") {
      eyebrowsmid();
    }

    else if (voice == "*sider") {
      eyebrowssider();
    }

    else if (voice == "*normal") {
      eyebrowsnormal();
    }

    //--------RGB-----------//

    else if (voice == "*red") {
      redpin();
    }
    else if (voice == "*green") {
      greenpin();
    }
    else if (voice == "*blue") {
      bluepin();
    }
    else if (voice == "*pink") {
      pinkpin();
    }
    else if (voice == "*multi") {
      multicolor();
    }
    /////////////////////////////////////////////////////////////////--------expressions-------///////////////////////////////////////////////////////////////////////

    //--------wake up----------//
    else if (voice == "*wake up") {
      wakeup();
    }

    //--------excited----------//
    else if (voice == "*how you feeling" || voice == "*wow" || voice == "*how am I looking" || voice == "*amazing" || voice == "*we are all good") {
      bluepin();
      faceup();
      greenpin();
      //eyefullopen();
      mouthopenexcit();
      delay(1000);
      awake();

    }

    else if (voice == "*sad" || voice == "*then what") {
      awake();
      yellowpin();
      sad();
      delay(2000);
      awake();
    }

    else if (voice == "*selfie") {
      awake();
      greenpin();
      selfie();
      delay(1000);
      awake();
    }


    else if (voice == "*romantic") {
      awake();
      romantic();
      delay(1000);
      awake();
    }

    else if (voice == "*search" || voice == "*scan") {
      eyeopen();
      eyesdown();
      facedown();
      headturn();
      facestraight();
      eyesup();
      delay(1000);
      awake();
    }

    else if (voice == "*really" || voice == "*do you like all" || voice == "*yes") {
      awake();
      greenpin();
      eyebrowssider();
      yes();
      yes();
      yes();
      awake();
    }
    else if (voice == "*search") {
      awake();
      eyesdown();
      facedown();
      headturn();
      facestraight();
      eyesup();
      delay(1000);
      awake();
    }

    else if (voice == "*sleep") {

      sleep();
      multicolor();

    }

    else if (voice == "*laugh") {
      awake();
      pinkpin();
      headright();
      laugh();
      laugh(); laugh(); laugh();
      headleft();
      laugh();
      laugh(); laugh(); laugh();
      headcenter();
      laugh();
      laugh(); laugh(); laugh();
      awake();
    }
    else if (voice == "*no" || voice == "*are you bad" || voice == "*we are bad") {
      //eyeclose();
      awake();
      redpin();
      eyebrowsmid();
      no();
      no();
      no();
      awake();
    }

    else if (voice == "*bored") {
      awake();
      yellowpin();
      bored();
      delay(2000);
      awake();
    }
    else if (voice == "*think") {
      awake();
      eyesup();
      right();
      think();

      delay(2000);
      awake();
    }
    else if (voice == "*scared") {
      awake();
      darkgreenpin();
      eyefullopen();
      eyebrowssider();
      scared(); scared(); scared(); scared(); scared();
      scared(); scared(); scared(); scared(); scared();
      scared(); scared(); scared(); scared(); scared();
      delay(1000);
      awake();
    }
    else if (voice == "*sleepy") {
      awake();
      yellowpin();
      sleepy();
      left();
      delay(1000);
      right();
      delay(1000);
      awake();

    }

    else if (voice == "*yawning") {
      awake();
      yellowpin();
      mouthsmaximum();
      awake();
    }
    else if (voice == "*meditation") {
      awake();
      greenpin();
      yoga();
      delay(5000);
      awake();
    }

    else if (voice == "*shocking") {
      awake();
      yellowpin();
      shocking();
      delay(2000);
      awake();
    }
    else if (voice == "*angry") {
      awake();
      redpin();
      angry();
      delay(2000);
      awake();
    }

    else if (voice == "*impressed") {
      awake();
      pinkpin();
      impressed();
      headupdown(); headupdown(); headupdown();
      delay(2000);
      awake();
    }

    else if (voice == "*trembling") {
      awake();
      yellowpin();
      trembling();
      delay(2000);
      awake();
    }

    else if (voice == "*go crazy") {
      awake();
      pinkpin();
      crazy();
      crazy();
      delay(2000);
      awake();
    }

    else if (voice == "*be happy") {
      awake();
      pinkpin();
      happy();
      delay(2000);
      awake();
      //Serial.println("happiee");
    }
    voice = "";
  }
}

void Amingo::expression(){

}

void Amingo::sleep() {
  myservo2.write(0);
  myservo3.write(45);
  myservo4.write(0);
  myservo5.write(0);
  myservo6.write(85);
  myservo1.write(90);
  delay(1000);
}
void Amingo::awake() {

  myservo2.write(45);//eye lid
  myservo3.write(45);//eye ball
  myservo4.write(45);//eye holder
  myservo5.write(0);//lower mouth
  myservo6.write(40);//face holder
  myservo1.write(90);//neck
  myservo7.write(0);//upper mouth
  myservo8.write(30);
  myservo9.write(30);//eyebrow
  delay(1000);
  whitepin();
}

void Amingo::wakeup() {

  myservo2.write(90);//eye lid
  myservo1.write(70);//neck
  delay(200);
  myservo3.write(45);//eye ball
  myservo4.write(45);//eye holder
  myservo1.write(110);//neck
  delay(200);

  myservo5.write(0);//lower mouth
  myservo6.write(40);//face holder
  myservo1.write(90);//neck
  myservo7.write(0);//upper mouth
  myservo8.write(20);
  myservo9.write(40);//eyebrow
  delay(200);
  myservo3.write(0);//eye ball
  delay(500);
  myservo3.write(90);//eye ball
  delay(500);
  myservo3.write(45);//eye ball
  myservo2.write(45);//eye lid
  myservo8.write(30);
  myservo9.write(30);


  multicolor();
  delay(1000);
  multicolor();
  bluepin();
}

void Amingo::headturn() {
  greenpin();
  for (pos = 90; pos <= 180; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo1.write(pos);
    delay(25);
  }
  for (pos = 0; pos <= 90; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(15);
  }
}
void Amingo::headright(){
for (int pos = 90; pos <= 120; pos += 1) {
  // in steps of 1 degree
  myservo1.write(pos);
  delay(5);
}
}

void Amingo::headleft(){
for (int pos = 120; pos >= 60; pos -= 1) {
  myservo1.write(pos);
  delay(5);
}
}
void Amingo::headcenter(){
for ( pos = 60; pos <= 90; pos += 1) {
  // in steps of 1 degree
  myservo1.write(pos);
  delay(5);
}
}
void Amingo::eyebrowsmid() {
  myservo8.write(45);
  myservo9.write(15);
  delay(1000);
}

void Amingo::eyebrowssider()//eye brows reaches the side position at this sequence
{
  myservo8.write(20);
  myservo9.write(40);
  delay(1000);
}

void Amingo::eyebrowsnormal()//eye brows reaches the normal position at this sequence
{

  myservo8.write(30);
  myservo9.write(30);
  delay(1000);
}

void Amingo::eyeopen() {

  for (pos = 0; pos <= 50; pos += 1) {
    // in steps of 1 degree
    myservo2.write(pos);
    delay(15);
  }
}
void Amingo::eyefullopen() {

  for (pos = 0; pos <= 90; pos += 1) {
    // in steps of 1 degree
    myservo2.write(pos);
    delay(5);
  }
}

void Amingo::left() {

  myservo3.write(0);
  delay(25);
}

void Amingo::straight() {

  myservo3.write(45);
  delay(25);
}

void Amingo::right() {

  myservo3.write(90);
  delay(25);
}

void Amingo::eyeclose() {

  for (pos = 45; pos >= 0; pos -= 1) {
    myservo2.write(pos);
    delay(15);
  }

}

void Amingo::eyesup() {
  myservo4.write(90);
  delay(500);
}

void Amingo::eyesdown() {
  myservo4.write(0);
  delay(500);
}

void Amingo::mouthtop() {

  myservo5.write(0);
  delay(1000);
}

void Amingo::mouthdown() {
  myservo5.write(50);
  delay(1000);
}


void Amingo::mouthopen()// mouth movement maximum
{

  for (int i = 0; i <= 20; i++) {
    myservo5.write(i * 3);
    myservo7.write(i);
    delay(40);
  }
}
void Amingo::mouthopenexcit()// mouth movement maximum
{

  for (int i = 0; i <= 20; i++) {
    myservo5.write(i * 3);
    myservo7.write(i);
    myservo8.write(30 - i);
    myservo9.write(30 + i);
    myservo2.write(i * 4.5);
    delay(40);
  }
}
void Amingo::mouthsminimum()// mouth movement minimum
{
  //Individual Servo Control
  for (int i = 0; i <= 10  ; i++) {
    myservo5.write(i * 3);
    myservo7.write(i);
    delay(10);
  }
}

void Amingo::mouthsmaximum()// mouth movement maximum
{

  for (int i = 0; i <= 25; i++) {
    myservo5.write(i * 3);
    myservo7.write(i);
    delay(40);
  }

  for (int i = 25; i >= 0; i--) {
    myservo5.write(i * 3);
    myservo7.write(i);
    delay(40);
  }
}

void Amingo::facestraight()
{

  myservo6.write(45);
  delay(1000);
}
void Amingo::faceup()
{

  myservo6.write(0);
  delay(1000);
}
void Amingo::facedown() {

  myservo6.write(85);
  delay(1000);
}

//-------ROMANTIC----------//
void Amingo::romantic() {
  pinkpin();
  myservo2.write(15);//eye lid close
  myservo5.write(3);//mouth open
  for (i = 90; i < 130; i++) { //turn head
    myservo1.write(i);
    delay(30);
  }
  for (i = 40; i < 90; i++) {
    myservo6.write(i);//face down
    delay(30);
  }

  myservo2.write(45);//eye lid open

  for (i = 45; i < 90; i++) { //eye holder up
    myservo4.write(i);
    delay(30);
  }

  for (i = 45; i > 0; i--) {//eye ball right
    myservo3.write(i);
    delay(30);
  }
  delay(1000);
  myservo2.write(0);
  myservo3.write(45);
  myservo4.write(20);
  delay(1000);
  myservo2.write(45);

  myservo2.write(45);//eye lid open

  for (i = 45; i < 90; i++) { //eye holder up
    myservo4.write(i);
    delay(30);
  }

  for (i = 45; i > 0; i--) {//eye ball right
    myservo3.write(i);
    delay(30);
  }
  delay(1000);
  myservo2.write(0);
  myservo3.write(45);
  myservo4.write(20);
  delay(1000);
  for (i = 140; i > 90; i--) {
    myservo1.write(i);
    delay(30);
  }
  for (i = 90; i > 40; i--) {
    myservo6.write(i);
    delay(10);
  }

}
//-------YES----------//
void Amingo::yes()
{
  for (pos = 40; pos >= 5; pos -= 1) {
    myservo6.write(pos);
    delay(10);
  }
  //  myservo6.write(25);
  //delay(500);
  for (pos = 5; pos <= 60; pos += 1) {
    myservo6.write(pos);
    delay(10);
  }
  }
//-------NO----------//

void Amingo::no()
{

  for (pos = 65; pos <= 115; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(10);

  }

  for (pos = 115; pos >= 65; pos -= 1) {
    myservo1.write(pos);
    delay(10);
  }

}
//-------LAUGH----------//

void Amingo::laugh() {

  myservo2.write(15);
  myservo8.write(25);
  myservo9.write(35);

  delay(100);

  for (pos = 10; pos <= 25; pos += 1) {
    // in steps of 1 degree
    myservo5.write(pos * 3);
    myservo7.write(pos);
    delay(5);
  }
  for (pos = 15; pos >= 0; pos -= 1) {
    myservo5.write(pos * 3);
    delay(5);
  }

}
//-------BORED----------//

void Amingo::bored()
{
  for (pos = 90; pos <= 115; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    myservo2.write(15);
    myservo8.write(40);
    myservo9.write(20);
    delay(70);
  }

  for (int i = 10; i <= 20; i++) {
    myservo5.write(i * 3);
    myservo7.write(i);
    delay(50);
  }
  delay(500);

  for (int i = 20; i >= 0; i--) {
    myservo5.write(i * 3);
    myservo7.write(i);
    delay(25);
  }
  for (pos = 115; pos >= 90; pos -= 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(30);
  }

}
//-------THINK----------//

void Amingo::think()
{
  for (pos = 90; pos <= 115; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(30);
  }
  for (pos = 45; pos >= 10; pos -= 1) {
    // in steps of 1 degree
    myservo6.write(pos);
    delay(25);
  }
  for (int i = 0; i < 5; i++) {
    myservo8.write(40);
    myservo9.write(20);
    redpin();
    delay(500);
    myservo8.write(30);
    myservo9.write(30);
    greenpin();
    delay(500);
  }
}
//-------SCARED----------//
void Amingo::scared() {

  for (pos = 0; pos <= 5; pos += 1) {
    // in steps of 1 degree
    myservo5.write(pos);
    myservo7.write(pos);
    delay(15);
  }
  for (pos = 5; pos <= 0; pos -= 1) {
    // in steps of 1 degree
    myservo5.write(pos);
    myservo7.write(pos);
    delay(15);
  }
}
//-------SLEEPY----------//

void Amingo::sleepy() {

  for (pos = 45; pos >= 10; pos -= 1) {
    myservo2.write(pos);
    yellowpin();
    delay(100);
  }
  for (pos = 90; pos <= 110; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(50);
  }

  for (pos = 45; pos <= 70; pos += 1) {
    // in steps of 1 degree
    myservo6.write(pos);
    bluepin();
    delay(50);
  }

  for (pos = 70; pos >= 40; pos -= 1) {
    // in steps of 1 degree
    myservo6.write(pos);
    greenpin();
    delay(50);
  }

  for (pos = 40; pos <= 70; pos += 1) {
    // in steps of 1 degree
    myservo6.write(pos);
    redpin();
    delay(50);
  }
  for (pos = 70; pos >= 40; pos -= 1) {
    // in steps of 1 degree
    myservo6.write(pos);
    bluepin();
    delay(50);
  }

  for (pos = 40; pos <= 70; pos += 1) {
    // in steps of 1 degree
    myservo6.write(pos);
    greenpin();
    delay(50);
  }


  for (pos = 50; pos >= 25; pos -= 1) {
    myservo4.write(pos);
    redpin();
    delay(70);
  }

  delay(1000);

  for (pos = 110; pos >= 90; pos -= 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(5);
  }
  bluepin();
  for (pos = 0; pos <= 90; pos += 1) {
    // in steps of 1 degree
    myservo2.write(pos);//eye lid
    delay(2);
  }

  for (pos = 0; pos <= 50; pos += 1) {
    myservo4.write(pos);//eyeholder
    delay(2);
  }
  for (pos = 70; pos >= 30; pos -= 1) {
    // in steps of 1 degree
    myservo6.write(pos);//head
    delay(2);
  }
  eyebrowsnormal();
}
//--------SAD-------//

void Amingo::sad()
{

  for (pos = 40; pos >= 0; pos -= 1) {
    myservo4.write(pos);
    myservo2.write(pos);
    myservo8.write(40);
    myservo9.write(20);
    delay(50);
  }
  for (i = 40; i <= 85; i += 1 ) {
    myservo6.write(i);
    delay(50);
  }
  delay(1000);
}
//--------YOGA----------//
void Amingo::yoga() {
  for (pos = 30; pos >= 10; pos -= 1) {
    // in steps of 1 degree
    myservo2.write(pos);
    myservo6.write(0);
    delay(15);
  }
  delay(5000);
  for (pos = 10; pos <= 40; pos += 1) {
    // in steps of 1 degree
    myservo2.write(pos);
    myservo6.write(30);
    delay(15);
  }

}

////////--------------RGB-----------//////////

void Amingo::darkgreenpin()
{ // the LED glows white colour
  analogWrite(red , 200);
  analogWrite(green , 255);
  analogWrite(blue , 102);

}
void Amingo::whitepin()
{ // the LED glows white colour
  analogWrite(red , 255);
  analogWrite(green , 255);
  analogWrite(blue , 255);

}

void Amingo::redpin()
{ // the LED glows red colour
  analogWrite(red , 255);
  analogWrite(green , 0);
  analogWrite(blue , 0);

}


void Amingo::greenpin()
{ // the LED green pink colour
  analogWrite(red , 0);
  analogWrite(green, 255);
  analogWrite(blue , 0);

}


void Amingo::bluepin()
{ // the LED glows blue colour
  analogWrite(red , 0);
  analogWrite(green , 0);
  analogWrite(blue , 255);

}

void Amingo::pinkpin()
{ // the LED glows pink colour
  analogWrite(red , 255);
  analogWrite(green , 0);
  analogWrite(blue , 153);

}

void Amingo::multicolor()
{
  for (int i = 0; i <= 3; i++) {
    redpin();
    delay(250);
    greenpin();
    delay(250);
    bluepin();
    delay(250);

  }
}

void Amingo::yellowpin()
{ // the LED glows white colour
  analogWrite(red , 255);
  analogWrite(green , 255);
  analogWrite(blue , 0);
}

void Amingo::shocking()
{
  myservo2.write(90);
  myservo4.write(90);
  myservo6.write(80);
  myservo7.write(20);
  myservo8.write(45);
  myservo9.write(15);
  delay(1000);

}

void Amingo::angry()
{
  myservo2.write(40);
  myservo3.write(45);
  myservo4.write(50);
  myservo6.write(70);
  myservo8.write(45);
  myservo9.write(15);
  delay(1000);

}

void Amingo::impressed()
{

  myservo2.write(90);
  myservo4.write(45);
  myservo8.write(15);
  myservo9.write(45);
  for (i = 0; i <= 45; i += 1) {
    myservo5.write(i);
    delay(50);
  }

}

void Amingo::trembling()
{
  myservo2.write(90);//eye lid
  myservo4.write(45);//eye holder
  myservo8.write(45);//eye brow
  myservo9.write(15);//eye brow
  myservo7.write(30);//upper mouth
  myservo5.write(30);//lower mouth

  for (int i = 0; i < 20; ++i)
  {
    myservo1.write(80);//neck
    delay(75);
    myservo1.write(100);
    delay(75);
  }

}
void Amingo::headupdown()
{
  for (int i = 40; i > 20; i--)
  {
    myservo6.write(i);//neck
    delay(25);
  }
  for (int i = 20; i < 60; i++)
  {
    myservo6.write(i);//neck
    delay(25);
  }

  for (int i = 60; i > 40; i--)
  {
    myservo6.write(i);//neck
    delay(25);
  }
}
void Amingo::creepy()
{
  myservo2.write(90);//eye lid
  myservo4.write(45);//eye holder
  myservo8.write(45);//eye brow
  myservo9.write(15);//eye brow
  myservo7.write(30);//upper mouth
  myservo5.write(30);//lower mouth

  for (int i = 0; i < 20; ++i)
  {
    myservo1.write(80);//neck
    delay(75);
    myservo1.write(90);
    delay(75);
  }
}

void Amingo::crazy() {
  greenpin();
  myservo2.write(90);//eye lid
  myservo3.write(90);//eye ball
  myservo4.write(45);//eye holder
  myservo5.write(45);//lower mouth
  myservo6.write(40);//face holder
  myservo7.write(0);//upper mouth
  myservo8.write(20);
  myservo9.write(40);//eyebrow
  for (pos = 90; pos <= 150; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(15);
  }
  delay(250);
  redpin();
  myservo2.write(15);//eye lid
  myservo3.write(0);//eye ball
  myservo4.write(45);//eye holder
  myservo5.write(0);//lower mouth
  myservo6.write(40);//face holder
  myservo7.write(30);//upper mouth
  myservo8.write(40);
  myservo9.write(20);//eyebrow
  for (pos = 150; pos >= 60; pos -= 1) {
    myservo1.write(pos);

    delay(15);
  }
  delay(250);
  pinkpin();
  myservo2.write(45);//eye lid
  myservo3.write(45);//eye ball
  myservo4.write(45);//eye holder
  myservo5.write(0);//lower mouth
  myservo6.write(40);//face holder
  myservo7.write(0);//upper mouth
  myservo8.write(30);
  myservo9.write(30);//eyebrow
  for (pos = 60; pos <= 90; pos += 1) {
    // in steps of 1 degree
    myservo1.write(pos);
    delay(15);
  }
  delay(250);
  yellowpin();
  myservo2.write(90);//eye lid
  myservo3.write(45);//eye ball
  myservo4.write(90);//eye holder
  myservo8.write(20);
  myservo9.write(40);//eyebrow
  for (int i = 40; i > 36; i--) {////////head up and lip moving
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 36; i > 32; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 32; i > 28; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 28; i > 24; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 24; i > 20; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 20; i > 16; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 16; i > 12; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 12; i > 8; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 8; i > 4; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 4; i > 0; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  delay(250);
  whitepin();
  myservo2.write(20);//eye lid
  myservo3.write(45);//eye ball
  myservo4.write(10);//eye holder
  myservo8.write(40);
  myservo9.write(20);//eyebrow
  for (int i = 0; i < 4; i++) {////////head down and lip moving
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 4; i < 8; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 8; i < 12; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 12; i < 16; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 16; i < 20; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(20); delay(25);
  }
  for (int i = 20; i < 24; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 24; i < 28; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  for (int i = 28; i < 32; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 32; i < 36; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  for (int i = 36; i < 40; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 40; i < 44; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  for (int i = 44; i < 48; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 48; i < 52; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  for (int i = 52; i < 56; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 56; i < 60; i++) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }

  delay(250);
  redpin();
  myservo2.write(45);//eye lid
  myservo3.write(45);//eye ball
  myservo4.write(45);//eye holder
  myservo8.write(30);
  myservo9.write(30);//eyebrow
  for (int i = 60; i > 56; i--) {////////head up to original and lip moving
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 56; i > 52; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  for (int i = 52; i > 48; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 48; i > 44; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  for (int i = 44; i > 40; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(0); myservo5.write(0); delay(25);
  }
  for (int i = 40; i > 36; i--) {
    myservo6.write(i);//delay(25);
    myservo7.write(15); myservo5.write(30); delay(25);
  }
  myservo7.write(0); myservo5.write(0); delay(25);
  delay(250);
}


void Amingo::selfie() {
  myservo1.write(60);//neck
  myservo3.write(90);
  myservo2.write(80);//eye brow
  myservo5.write(30);
  myservo8.write(20);//eye brow
  myservo9.write(40);//eye brow
  multicolor();
  delay(2000);
}

void Amingo::happy()
{
  myservo5.write(15);
  myservo7.write(15);
  for (int i = -0; i < 5; i++) {
    myservo8.write(40);//eye brow
    myservo9.write(40);//eye brow
    myservo3.write(0);
    delay(500);

    myservo8.write(20);//eye brow
    myservo9.write(20);//eye brow
    myservo3.write(90);
    delay(500);
  }

}



