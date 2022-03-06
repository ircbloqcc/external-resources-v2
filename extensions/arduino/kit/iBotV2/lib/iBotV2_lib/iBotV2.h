#ifndef IBOTV2_CFG_H
#define IBOTV2_CFG_H
#if (ARDUINO>=100)
#include "Arduino.h"
#else
#include "WProgram.h"
#endif
class iBot {
  public:
    iBot(bool cond = false);
    void begin(long baudRate = 115200);
    void init();
    void inout(int,int);
    void Blink(int);
    void StopBuzzer();
    void StopLED();
    void Buzzer(int);
    int Lightsensor();
    int touchSensor(int);
    int analogSensor(int);
    int IRSensor(int);
    void IndicatorSound(int);
    int ultrasonic();
    void Rotate(int, int, int);
    void servomotor( int, int,  int);
    void Display_misc(int , int);
    void Display_image(int, int);
    void PrintLeft(char*, int, int);
    void PrintRight(char*, int, int);
    void leftdisplayclear();
    void rightdisplayclear();
    void Playbot(int, int, int);
    
	void app();
	unsigned char readBuffer(int);
	void writeBuffer(int index, unsigned char);
	void writeHead();
	void writeEnd();
	void writeSerial(unsigned char);
	void readSerial();
	void parseData();
	void callOK();
	void sendByte(char);
	void sendString(String);
	void sendFloat(float);
	void sendShort(double);
	void sendDouble(double);
	short readShort(int);
	float readFloat(int);
	void runModule(int);
	void readSensor(int);
	
	
	
	
	
	
  private:
    unsigned long previousMillis = 0;        // will store last time LED was updated
    unsigned long previousMillis1 = 0;
    // constants won't change:
    // interval at which to blink (milliseconds)
    const long interval1 = 1;           // interval at which to blink (milliseconds)
    bool _msg;

#define BoardLED 13 //LED
#define Buzz 3   //Buzzer
#define Ls1 2     //Light Sensor
#define Ls2 4   //Light Sensor
#define S1 A0    //Sensor1
#define S2 A1    //Sensor2
#define S4 A6    //Sensor4
#define S5 A7    //Sensor5

#define Motor1 7
#define Motor2 8
#define Motor3 7 //Motor1 and Motor3 are Same
#define Motor4 8 //Motor2 and Motor4 are Same

#define M1Speed 5 //motor 1 Speed
#define M2Speed 6 //Motor 2 Speed
#define M3Speed 5 //motor 3 Speed
#define M4Speed 6 //Motor 4 Speed

#define servo1 11
#define servo2 12
#define IO1 10
#define IO2  9

#define image_logo 1
#define image_ibot 2
#define image_up 3
#define image_down 4
#define image_left 5
#define image_right 6
#define image_white 7
#define image_black 8
#define image_heart 9
#define image_star 0
#define text 10

union {
  byte byteVal[4];
  float floatVal;
  long longVal;
} val;

union {
  byte byteVal[8];
  double doubleVal;
} valDouble;

union {
  byte byteVal[2];
  short shortVal;
} valShort;
boolean isAvailable = false;

int len = 52;
char buffer[52];
byte index = 0;
byte dataLen;
byte modulesLen = 0;
boolean isStart = false;
unsigned char irRead;
int analogs[4] = {A0, A1, A6, A7};
char serialRead;

#define ULTRASONIC_SENSOR 1
#define LIGHT_SENSOR      3
#define SIDES 4
#define BLINK 5
#define POTENTIONMETER 6
#define BUZZ 7
#define BUZZOFF 8
#define LEDOFF 9
#define MOTOR 10
#define SERVO 11
//#define ENCODER 12
#define IR 13
#define TOUCH_SENSOR 12
#define LCLEAR 13
#define RCLEAR 14
#define PLAYBOT 15
#define INOUT 16
//#define PIRMOTION 15
//#define INFRARED 16
//#define LINEFOLLOWER 17
//#define SHUTTER 20
//#define LIMITSWITCH 21
//#define BUTTON 22

#define LTEXT 22
#define RTEXT 23
#define DIGITAL 30
#define ANALOG 31
#define IMAGE 32

//#define PWM 32
//#define SERVO_PIN 33
#define EYES 34
//#define STEPPER 40
//#define ENCODER 41
//#define TIMER 50

#define GET 1
#define RUN 2
#define RESET 4
#define START 5
//float angleServo = 90.0;
unsigned char prevc = 0;
double lastTime = 0.0;
double currentTime = 0.0;
int irDelay = 0;
int irIndex = 0;
//int irRead = 0;
boolean irReady = false;
String irBuffer = "";
double lastIRTime = 0.0;

};

#endif // iBotV2_CFG_H
