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
    expect(thermostat.down(11)).toEqual('Cannot go below minimum')
  });
  it('has a max temp of 25', function() {
    expect(thermostat.maxTemp).toEqual(25)
  });
  it('cannot go above maximum', function() {
    expect(thermostat.up(20)).toEqual('Cannot go above maximum')
  });
  it('powersave = false', function() {
    expect(thermostat.isOn()).toBe(true)
  });
  it('can turn on powersave', function() {
    thermostat.switchOff()
    expect(thermostat.isOn()).toBe(false)
  });

  it("has a max temperature of 32 when powerSave is off", function() {
    thermostat.swtichOff()
    expect(thermostat.maxTemp()).toEqual(32)
  });

});