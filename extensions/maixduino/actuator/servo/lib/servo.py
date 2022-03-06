from machine import Timer,PWM
import time


class Servo:
  class Struct:
    def __init__(self, pin, obj):
      self.pin = pin
      self.obj = obj
  def __init__(self):
    self.map = []
  def attach(self, pin, tim):
    tim = Timer(eval('Timer.TIMER'+str(tim//4)), eval('Timer.CHANNEL'+str(tim%4)), mode=Timer.MODE_PWM)
    s = PWM(tim, freq=50, duty=0, pin=pin)
    self.map.append(self.Struct(pin,s))
  def angle(self, pin, tim, angle):
    for i, map in enumerate(self.map):
      if map.pin == pin:
        return map.obj.duty(angle/180*10+2.5)
    self.attach(pin, tim)
    return self.angle(pin, tim, angle)

servo = Servo()