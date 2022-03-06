#ifndef AMINGOV1_CFG_H
#define AMINGOV1_CFG_H
#if (ARDUINO>=100)
#include "Arduino.h"
#else
#include "WProgram.h"
#endif


class Amingo {
  public:
    Amingo(bool cond = false);
    void begin(long baudRate = 9600);
    void init();
    void standby();
    void chk_ble();
    void expression();
    void sleep();
    void awake();
    void wakeup();
    void headturn();
    void headright();
    void headleft();
    void headcenter();
    void eyebrowsmid();
    void eyebrowssider();
    void eyebrowsnormal();
    void eyeopen();
    void eyefullopen();
    void left();
    void straight();
    void right();
    void eyeclose();
    void eyesup();
    void eyesdown();
    void mouthtop();
    void mouthdown();
    void mouthopen();
    void mouthopenexcit();
    void mouthsminimum();
    void mouthsmaximum();
    void facestraight();
    void faceup();
    void facedown();
    void romantic();
    void yes();
    void no();
    void laugh();
    void bored();
    void think();
    void scared();
    void sleepy();
    void sad();
    void yoga();
    void darkgreenpin();
    void whitepin();
    void redpin();
    void greenpin();
    void bluepin();
    void pinkpin();
    void multicolor();
    void yellowpin();
    void shocking();
    void angry();
    void impressed();
    void trembling();
    void headupdown();
    void creepy();
    void crazy();
    void selfie();
    void happy();


    void neck(int val, int speed, int wait);
    void eyelid(int val, int speed, int wait);
    void eyeball(int val, int speed, int wait);
    void eyetilt(int val, int speed, int wait);
    void lowerlip(int val, int speed, int wait);
    void face(int val, int speed, int wait);
    void upperlip(int val, int speed, int wait);
    void righteyebrow(int val, int speed, int wait);
    void lefteyebrow(int val, int speed, int wait);

    void RGB(int R, int G, int B);
  private:
    int i, pos = 0;   // variable to store the servo position
    int red = 9;//RGB-red 1
    int green = 10;//RGB -green 2
    int blue = 11;//RGB-blue 3
    // Generally, you should use "unsigned long" for variables that hold time
    // The value will quickly become too large for an int to store
    unsigned long previousMillis = 0;        // will store last time LED was updated

    // constants won't change:
    const long interval = 3000;           // interval at which to blink (milliseconds)
    const long interval1 = 1;           // interval at which to blink (milliseconds)
    bool _msg;
};

#endif // AMINGOV1_CFG_H

