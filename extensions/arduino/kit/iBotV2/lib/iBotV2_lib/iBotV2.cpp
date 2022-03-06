#include "iBotV2.h"
#include <inttypes.h>
#include<String.h>
#include "VarSpeedServo.h"
#include "NewPing.h"
#include "Wire.h"
#include "Adafruit_GFX.h"
#include "Adafruit_SSD1306.h"
#include "img.h"

#include "Fonts/FreeSerif9pt7b.h"
#include "Fonts/FreeMonoBold9pt7b.h"

#define OLED_RESET 4     //OLED_RESET
Adafruit_SSD1306 displayl(OLED_RESET);
Adafruit_SSD1306 displayr(OLED_RESET);


#define TRIGGER_PIN  A2  // trigger pin on the ultrasonic sensor.
#define ECHO_PIN     A3  // echo pin on the ultrasonic sensor.
#define MAX_DISTANCE 200 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // NewPing setup of pins and maximum distance.


VarSpeedServo servo_1;
VarSpeedServo servo_2;



iBot::iBot(bool cond) {
  _msg = cond;
}

void iBot::begin(long baudRate) {
  if (_msg) {
    Serial.begin(baudRate);
    Serial.println(F("iBot intialized"));
  }
}

void iBot::app() {
  currentTime = millis() / 1000.0 - lastTime;

  readSerial();

  if (isAvailable) {
    unsigned char c = serialRead & 0xff;
    if (c == 0x55 && isStart == false) {
      if (prevc == 0xff) {
        index = 1;
        isStart = true;
      }
    } else {
      prevc = c;
      if (isStart) {
        if (index == 2) {
          dataLen = c;
        } else if (index > 2) {
          dataLen--;
        }
        writeBuffer(index, c);
      }
    }
    index++;
    if (index > 51) {
      index = 0;
      isStart = false;
    }
    if (isStart && dataLen == 0 && index > 3) {
      isStart = false;
      parseData();
      index = 0;
    }
  }

}


unsigned char iBot::readBuffer(int index) {
  return buffer[index];
}
void iBot::writeBuffer(int index, unsigned char c) {
  buffer[index] = c;
}

void iBot::writeHead() {
  writeSerial(0xff);
  writeSerial(0x55);
}

void iBot::writeEnd() {
  Serial.println();
}

void iBot::writeSerial(unsigned char c) {
  Serial.write(c);
}

void iBot::readSerial() {
  isAvailable = false;
  if (Serial.available() > 0) {
    isAvailable = true;
    //    isBluetooth = false;
    serialRead = Serial.read();
  }

}
/*
  ff 55 len idx action device port  slot  data a
  0  1  2   3   4      5      6     7     8
*/
void iBot::parseData() {
  isStart = false;
  int idx = readBuffer(3);
  int action = readBuffer(4);
  int device = readBuffer(5);
  switch (action) {
    case GET: {
        // Serial.println(device);
       // writeHead();
       // writeSerial(idx);
        //readSensor(device);
       // writeEnd();
      }
      break;
    case RUN: {
       runModule(device);
        //callOK();
      }
      break;
    case RESET: {
        //reset
        //        dc.reset(M1);
        //        dc.run(0);
        //        dc.reset(M2);
        //        dc.run(0);
        //        dc.reset(PORT_1);
        //        dc.run(0);
        //        dc.reset(PORT_2);
        //        dc.run(0);
        //        encoders[0].runSpeed(0);
        //        encoders[1].runSpeed(0);
        callOK();
      }
      break;
    case START: {
        //start
        callOK();
      }
      break;
  }
}

void iBot::callOK() {
  /*writeSerial(0xff);
  writeSerial(0x55);
  writeEnd();*/
}
void iBot::sendByte(char c) {
  writeSerial(1);
  writeSerial(c);
}
void iBot::sendString(String s) {
  int l = s.length();
  writeSerial(4);
  writeSerial(l);
  for (int i = 0; i < l; i++) {
    writeSerial(s.charAt(i));
  }
}
void iBot::sendFloat(float value) {
  writeSerial(0x2);
  val.floatVal = value;
  writeSerial(val.byteVal[0]);
  writeSerial(val.byteVal[1]);
  writeSerial(val.byteVal[2]);
  writeSerial(val.byteVal[3]);
}
void iBot::sendShort(double value) {
  writeSerial(3);
  valShort.shortVal = value;
  writeSerial(valShort.byteVal[0]);
  writeSerial(valShort.byteVal[1]);
  writeSerial(valShort.byteVal[2]);
  writeSerial(valShort.byteVal[3]);
}
void iBot::sendDouble(double value) {
  writeSerial(2);
  valDouble.doubleVal = value;
  writeSerial(valDouble.byteVal[0]);
  writeSerial(valDouble.byteVal[1]);
  writeSerial(valDouble.byteVal[2]);
  writeSerial(valDouble.byteVal[3]);
}
short iBot::readShort(int idx) {
  valShort.byteVal[0] = readBuffer(idx);
  valShort.byteVal[1] = readBuffer(idx + 1);
  return valShort.shortVal;
}
float iBot::readFloat(int idx) {
  val.byteVal[0] = readBuffer(idx);
  val.byteVal[1] = readBuffer(idx + 1);
  val.byteVal[2] = readBuffer(idx + 2);
  val.byteVal[3] = readBuffer(idx + 3);
  return val.floatVal;
}
void iBot::runModule(int device) {
  //0xff 0x55 0x6 0x0 0x1 0xa 0x9 0x0 0x0 0xa
  int port = readBuffer(6);

  int pin = port;
  switch (device) {
    case MOTOR: {
        int speed = readBuffer(7);
        int direction = readBuffer(8);
        Rotate(port, speed, direction);
        //     dc.reset(port);
        //    dc.run(speed);
      }
      break;
    case BLINK: {
        pinMode(13, OUTPUT);
        pin = readShort(6);
        digitalWrite(13, !(digitalRead(13)));
        delay(pin);
      }
      break;
    case BUZZ: {
        pinMode(3, OUTPUT);
        pin = readShort(6);
        digitalWrite(3, !(digitalRead(3)));
        delay(pin);
      }
      break;
    case BUZZOFF: {
        pinMode(3, OUTPUT);
        digitalWrite(3, 0);
      }
      break;

    case LEDOFF: {
        pinMode(13, OUTPUT);
        digitalWrite(13, 0);
      }
      break;

    case INOUT:{
      int j = readBuffer(7);
      inout(port,j);
    }
      
    case SERVO: {
        int angle = readBuffer(7);
        int wait = readBuffer(8);
        servomotor(port, angle, wait);
      }
      break;
      case PLAYBOT:{
        int fromangle = readBuffer(7);
        int toangle = readBuffer(8);

       Playbot(port,fromangle, toangle);
      }
      break;
      
    case LTEXT: {
        int len = readBuffer(2) - 5;  //10-5=5(0-4)
        char s[50] = "";
        //String s1;
        for (int i = 0; i < len; i++) {
          s[i] = (char)readBuffer(6 + i);
        }
        int x = readBuffer(len + 6);//a(9+6)
        int y = readBuffer(len + 7);//b

        PrintLeft(s, x, y);
      }
      break;

    case RTEXT: {
        int len = readBuffer(2) - 5;  //10-5=5(0-4)
        char s[50] = "";
        //String s1;
        for (int i = 0; i < len; i++) {
          s[i] = (char)readBuffer(6 + i);
        }
        int x = readBuffer(len + 6);//a(9+6)
        int y = readBuffer(len + 7);//b

        PrintRight(s, x, y);
      }
      break;
    case DIGITAL: {
      }
      break;

    case IMAGE: {
        int slot = readBuffer(7);
        Display_misc(port, slot);

      }
      break;
    case EYES: {
        int slot = readBuffer(7);
        Display_image(port, slot);
      }
      break;
    case LCLEAR: {
        leftdisplayclear();

      }

      break;
    case RCLEAR: {
        rightdisplayclear();

      }
      break;

  }
}
void iBot::readSensor(int device) {
  /**************************************************
      ff 55 len idx action device port slot data a
      0  1  2   3   4      5      6    7    8
  ***************************************************/
  float value = 0.0;
  int port, slot, pin;
  port = readBuffer(6);
  pin = port;
  switch (device) {
    case  ULTRASONIC_SENSOR: {
        float value = ultrasonic();
        // Serial.println("here");
        sendFloat(value);
      }
      break;

    case  TOUCH_SENSOR:
    case  IR:

      {
        pin = analogs[pin];
        float value = IRSensor(pin);
        sendFloat(value);
        //  Serial.println(pin);
      }

      break;

    case  POTENTIONMETER:
      {
        pin = analogs[pin];
        float value = analogSensor(pin);
        sendFloat(value);
        //  Serial.println(pin);
      }
      break;

    case LIGHT_SENSOR:
      {
        float value = Lightsensor();
        sendFloat(value);
        if (value == 2) {
          sendString("LEFT");

        }
        if (value == 3) {
          sendString("RIGHT");
        }
        if (value == 1) {
          sendString("Low Light");
        }
      }
      break;
    case SIDES: {
        sendFloat(port);
      }
      break;

  }
}
void iBot::init() {


  displayl.begin(SSD1306_SWITCHCAPVCC, 0x3C);  // initialize with the I2C addr 0x3D (for the 128x64)
  displayr.begin(SSD1306_SWITCHCAPVCC, 0x3D);  // initialize with the I2C addr 0x3D (for the 128x64)
  pinMode(BoardLED, OUTPUT);
  pinMode(Buzz, OUTPUT);
  pinMode(Ls1, INPUT);
  pinMode(Ls2, INPUT);
  pinMode(S1, INPUT);
  pinMode(S2, INPUT);
  pinMode(S4, INPUT);
  pinMode(S5, INPUT);
  pinMode(Motor1, OUTPUT);
  pinMode(Motor2, OUTPUT);
  pinMode(M1Speed, OUTPUT);
  pinMode(M2Speed, OUTPUT);
  pinMode(IO1, OUTPUT);
  pinMode(IO2, OUTPUT);
  digitalWrite(IO1,HIGH);
  digitalWrite(IO2,HIGH);     
  servo_1.attach(11);
  servo_2.attach(12);

  displayl.clearDisplay();
  displayl.setFont(&FreeMonoBold9pt7b);
  displayl.setTextSize(1);
  displayl.setTextColor(WHITE);
  //displayl.clearDisplay();
  displayl.setCursor(0,10);
  displayl.print("IRC");

  // Serial.println(c);
  //displayl.display();
  displayl.drawBitmap(32, 0, logo, 64, 64, WHITE);
  displayl.display();

  displayr.clearDisplay();
  displayr.drawBitmap(0, 0, ibot, 128, 64, WHITE);
  displayr.display();

  delay(1000);
  
}

void iBot::inout(int i, int j){
  digitalWrite(i,j);
}

void iBot::Blink( int Blink_interval) {        //Blinking with delay
  unsigned long currentMillis1 = millis();
  if (currentMillis1 - previousMillis1 >= Blink_interval) {
    // save the last time you blinked the LED
    previousMillis1 = currentMillis1;
    digitalWrite(BoardLED, !(digitalRead(BoardLED)));
  }
}

void iBot::StopBuzzer() {
  digitalWrite(Buzz, LOW);
}

void iBot::StopLED() {
  digitalWrite(BoardLED, LOW);
}


void iBot::Buzzer( int msec) {        //Blinking with delay
  digitalWrite(Buzz, HIGH);
  delay(msec);
  digitalWrite(Buzz, LOW);
  delay(msec);
}

int iBot::Lightsensor() {    // Sensing two LDR Value and return corresponding Value
  int a = digitalRead(Ls1);
  int b = digitalRead(Ls2);
  if (a == 0 && b == 0) {
    return 1;
  }
  if (a == 1 && b == 1) {
    return 1;
  }
  if (a == 0 && b == 1) {      //RIGHT
    return 2;
  }
  if (a == 1 && b == 0) {    //LEFT
    return 3;
  }
}


int iBot::touchSensor( int sensor) {
  int detect;
  if (sensor == A6) {
    detect = analogRead(A6) > 100 ? 1 : 0;
  }
  else if (sensor == A7) {
    detect = analogRead(A7) > 100 ? 1 : 0;
  }
  else {
    detect = digitalRead(sensor);
  }
  return detect;
}

int iBot::analogSensor( int sensor) {
  int pressed = analogRead(sensor);
  return pressed;
}

int iBot::IRSensor( int sensor) {
  int detect;
  if (sensor == A6) {
    detect = analogRead(A6) > 100 ? 1 : 0;
  }
  else if (sensor == A7) {
    detect = analogRead(A7) > 100 ? 1 : 0;
  }
  else {
    detect = digitalRead(sensor);
  }
  return detect;
}


void iBot::IndicatorSound( int Buz_interval) {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= Buz_interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    digitalWrite(Buzz, !(digitalRead(Buzz)));

  }
}

int iBot::ultrasonic() {
  int value = sonar.ping_cm();
  return value;
}


void iBot::Rotate( int motor,  int mspeed,  int direction) {
  if (direction != 2) {
    if (motor == Motor1) {
      analogWrite(M1Speed, mspeed);
   //   digitalWrite(IO1, LOW);
    }
    if (motor == Motor2) {
      analogWrite(M2Speed, mspeed);
   //   digitalWrite(IO2, LOW);
    }
    if (motor == Motor3) {
      analogWrite(M3Speed, mspeed);
    //  digitalWrite(IO1, LOW);
    }
    if (motor == Motor4) {
      analogWrite(M4Speed, mspeed);
    //  digitalWrite(IO2, LOW);
    }
    digitalWrite(motor, direction);
  }
  else {
    if (motor == Motor1) {
      analogWrite(M1Speed, 0);
     // digitalWrite(IO1, HIGH);
    }
    if (motor == Motor2) {
      analogWrite(M2Speed, 0);
     // digitalWrite(IO2, HIGH);
    }
    if (motor == Motor3) {
      analogWrite(M3Speed, 0);
   //   digitalWrite(IO1, HIGH);
    }
    if (motor == Motor4) {
      analogWrite(M4Speed, 0);
   //   digitalWrite(IO2, HIGH);
    }
  }
}

void iBot::servomotor( int motor, int angle,  int wait) {
  if (motor == 1) {
    if (wait == 0) {
      servo_1.write(angle, 255, false);
    }
    else {
      servo_1.write(angle, 255, true);
    }
  }
  if (motor == 2) {
    if (wait == 0) {
      servo_2.write(angle, 255, false);
    }
    else {
      servo_2.write(angle, 255, true);
    }
  }
}

void iBot::Playbot(int motor, int fromangle, int toangle) {
  if (motor == 1) {
    servo_1.write(toangle, 255, true);
    delay(400);
    servo_1.write(fromangle, 255, true);
    delay(100);
  }
  else {
    servo_2.write(toangle, 255, true);
    delay(400);
    servo_2.write(fromangle, 255, true);
    delay(100);
  }
}




void iBot::Display_misc(int image, int disp) {
  displayl.clearDisplay();
  if (image == 0) {
    displayl.fillTriangle(64, 0, 44, 64, 84, 64, WHITE);
    displayl.fillTriangle(64, 51, 47, 64, 81, 64, BLACK);
    displayl.fillTriangle(33, 23, 94, 23, 64, 51, WHITE);
    // displayl.drawBitmap(32, 0, star, 64, 64, WHITE);
  }
  if (image == 1) {
    displayl.drawBitmap(32, 0, logo, 64, 64, WHITE);
  }
  if (image == 2) {
    displayl.drawBitmap(0, 0, ibot, 128, 64, WHITE);
  }
  if (image == 3) {
    // displayl.drawBitmap(0, 0, up, 128, 64, WHITE);
    displayl.fillTriangle(64, 0, 34, 30, 94, 30, WHITE);
    displayl.fillRoundRect(54, 12, 20, 52, 5, WHITE);
  }
  if (image == 4) {
    // displayl.drawBitmap(0, 0, down, 128, 64, WHITE);
    displayl.fillTriangle(64, 64, 34, 34, 94, 34, WHITE);
    displayl.fillRoundRect(54, 0, 20, 52, 5, WHITE);
  }
  if (image == 5) {
    //  displayl.drawBitmap(0, 0, left, 128, 64, WHITE);
    displayl.fillTriangle(20, 32, 55, 10, 55, 54, WHITE);
    displayl.fillRoundRect(50, 22, 55, 20, 5, WHITE);
  }
  if (image == 6) {
    //displayl.drawBitmap(0, 0, right, 128, 64, WHITE);

    displayl.fillTriangle(108, 32, 73, 10, 73, 54, WHITE);
    displayl.fillRoundRect(30, 22, 60, 20, 5, WHITE);
  }
  if (image == 7) {
    //displayl.drawBitmap(0, 0, white, 128, 64, WHITE);
    displayl.setFont(&FreeSerif9pt7b);
    displayl.setTextSize(3);
    displayl.setTextColor(WHITE);
    displayl.setCursor(5, 40);
    displayl.setTextSize(2);
    displayl.println("WHITE");
  }
  if (image == 8) {
    // displayl.drawBitmap(0, 0, black, 128, 64, WHITE);
    displayl.setFont(&FreeSerif9pt7b);
    displayl.setTextSize(3);
    displayl.fillRect(0, 0, 128, 64, WHITE);
    displayl.setTextColor(BLACK);
    displayl.setCursor(5, 40);
    displayl.setTextSize(2);
    displayl.println("BLACK");
  }
  if (image == 9) {
    displayl.drawBitmap(32, 0, heart, 64, 64, WHITE);
  }
  if (image == 10) {
    int value = sonar.ping_cm();
    displayl.setFont(&FreeMonoBold9pt7b);
    displayl.setTextSize(1);
    displayl.setTextColor(WHITE);
    displayl.setCursor(0, 40);
    displayl.println(value);
    // displayl.setTextSize(2);
    displayl.println("cm");
    //displayl.setTextSize(2);
    displayl.setCursor(0, 20);
    displayl.println("DISTANCE");
    displayl.drawBitmap(75, 16, us, 48, 48, WHITE);
  }

  if (disp == 1) {
    displayl.display();
  }
  if (disp == 2) {
    displayr.display();
  }
}


void iBot::Display_image(int image, int disp) {
  displayl.clearDisplay();
  if (image == 11) {
    displayl.drawBitmap(0, 0, Eyes_Blink, 128, 64, WHITE);
  }
  if (image == 12) {
    //  displayl.drawBitmap(0, 0, Eyes_Bottom_Left, 128, 64, WHITE);

    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);
    displayl.fillRoundRect(20, 26, 46, 32, 13, WHITE);
  }
  if (image == 13) {
    //displayl.drawBitmap(0, 0, Eyes_Bottom_Right, 128, 64, WHITE);
    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);

    displayl.fillRoundRect(58, 26, 46, 32, 13, WHITE);
  }
  if (image == 14) {
    // displayl.drawBitmap(0, 0, Eyes_Center, 128, 64, WHITE);
    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);
    displayl.fillRoundRect(40, 15, 46, 32, 13, WHITE);
  }
  if (image == 15) {
    // displayl.drawBitmap(0, 0, Eyes_Normal, 128, 64, WHITE);
    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);
    displayl.fillRoundRect(40, 26, 46, 32, 13, WHITE);
  }
  if (image == 16) {
    //  displayl.drawBitmap(0, 0, Eyes_Top_Left, 128, 64, WHITE);
    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);
    displayl.fillRoundRect(20, 5, 46, 32, 13, WHITE);
  }
  if (image == 17) {
    //  displayl.drawBitmap(0, 0, Eyes_Top_Right, 128, 64, WHITE);
    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);
    displayl.fillRoundRect(58, 5, 46, 32, 13, WHITE);
  }
  if (image == 18) {
    //displayl.drawBitmap(0, 0, Eyes_UP, 128, 64, WHITE);
    displayl.fillRoundRect(20, 5, 84, 53, 20, WHITE);
    displayl.fillRoundRect(22, 7, 80, 49, 19, BLACK);
    displayl.fillRoundRect(40, 5, 46, 32, 13, WHITE);
  }
  if (image == 19) {
    //   displayl.drawBitmap(0, 0, Eyes_close, 128, 64, WHITE);
    displayl.fillRoundRect(20, 26, 88, 10, 12, WHITE);
    displayl.fillRoundRect(22, 28, 84, 7, 10, BLACK);
    displayl.fillRoundRect(40, 26, 48, 7, 10, WHITE);
  }
  if (disp == 1) {
    displayl.display();
  }
  if (disp == 2) {
    displayr.display();
  }
}

void iBot::PrintLeft(char* c, int x, int y) {
  displayl.clearDisplay();
  displayl.setFont(&FreeMonoBold9pt7b);
  displayl.setTextSize(1);
  displayl.setTextColor(WHITE);
  //displayl.clearDisplay();
  displayl.setCursor(x, y + 20);
  displayl.print(c);

  // Serial.println(c);
  displayl.display();
}
void iBot::PrintRight(char* c, int x, int y) {
  displayr.clearDisplay();
  displayr.setFont(&FreeMonoBold9pt7b);
  displayr.setTextSize(1);
  displayr.setTextColor(WHITE);
  //displayr.clearDisplay();
  displayr.setCursor(x, y + 20);
  displayr.println(c);
  displayr.display();
}

void iBot::leftdisplayclear() {
  displayl.clearDisplay();
  displayl.display();
}
void iBot::rightdisplayclear() {
  displayr.clearDisplay();
  displayr.display();
}
