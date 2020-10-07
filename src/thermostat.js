'use strict';

class Thermostat {
  constructor(temp) {
   this.temp = temp; 
   this.minTemp = 10;
   this.maxTemp_ps_On = 25;
   this.maxTemp_ps_Off = 32;
   this.powerSave = true;
  }

  showTemp() {
    return this.temp;
  }
  
  up(num) {
    if (this.powerSave) {
      if ((this.temp + num) > this.maxTemp_ps_On) {
        return this.temp = this.maxTemp_ps_On
      } else {
      return this.temp += num 
      }
    } else {
      if ((this.temp + num) > this.maxTemp_ps_Off) {
        return this.temp = this.maxTemp_ps_Off
      } else {
      return this.temp += num;
      }
    }
  }
  
  down(num) {
    if ((this.temp - num) < this.minTemp) {
      return this.temp = this.minTemp
    } 
    return this.temp -= num;
  }
  
  isOn() {
    return this.powerSave === true;
  }

  switchOff() {
    this.powerSave = false;
  }

  maximumTemp() {
    if (this.isOn() === false) {
    return this.temp === this.maxTemp_ps_Off;
    }
    return this.temp === this.maxTemp_ps_On;
  }
 
}

