'use strict';

describe('Thermostat', function() {
  
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat(20)
  });
  
  it('it has a starting temp of 20', function() {
    expect(thermostat.showTemp()).toEqual(20)
  });
  it('can increase temperature by a given number', function() {
    expect(thermostat.up(3)).toEqual(23)
  });
  it('can decrease the temperature by a given number', function() {
    expect(thermostat.down(5)).toEqual(15)
  });
  it('has a minimum temperature of 10', function(){
      expect(thermostat.minTemp).toEqual(10)
  });
  it('cannot go below min temp', function(){
    expect(thermostat.down(11)).toEqual(10)
  });
  it('has a max temp of 25', function() {
    thermostat.up(5)
    expect(thermostat.showTemp()).toEqual(25)
  });
  it('cannot go above maximum with powersave on ', function() {
    expect(thermostat.up(20)).toEqual(25)
  });
  it('cannot go above max with powersave off', function(){
    thermostat.switchOff();
    thermostat.up(10);
    expect(thermostat.showTemp()).toEqual(30)
  });
  it('powersave is on by default', function() {
    expect(thermostat.powerSave).toBe(true)
  });
  it('can turn off powersave', function() {
    thermostat.switchOff()
    expect(thermostat.powerSave).toBe(false)
  });
  it("can increase temperature up to 32 when powersave is off", function(){
    thermostat.switchOff();
    thermostat.up(12); 
    expect(thermostat.showTemp()).toEqual(32)
  });
  it("can reset set the temp to 20", function() {
    thermostat.up(5);
    thermostat.reset()
    expect(thermostat.showTemp()).toEqual(20)
  });
  it("if temp < 18 energy usage is low", function(){
    thermostat.down(3);
    expect(thermostat.energyUsage()).toEqual("green");
  });
  it("if temp <= 25 energy usage is medium", function () {
    thermostat.up(3);
    expect(thermostat.energyUsage()).toEqual("black");
  });
  it("if temp > 25 energy usage is high", function () {
    thermostat.switchOff();
    thermostat.up(10);
    expect(thermostat.energyUsage()).toEqual("red");
  });
});