$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);
  $('#powersave').text(thermostat.powerSave);
  $('#usage').text(thermostat.usage);
  
  $('#up').on('click', function(){
    thermostat.up();
    $("#temperature").text(thermostat.temp);
    $('#usage').text(thermostat.usage);
  });

  $('#down').on('click', function(){
    thermostat.down();
    $("#temperature").text(thermostat.temp);
    $('#usage').text(thermostat.usage);
  });

  $('#reset').on('click', function(){
    thermostat.reset();
    $("#temperature").text(thermostat.temp);
    $('#usage').text(thermostat.usage);
    });

  $('#pson').on('click', function(){
    thermostat.isOn();
    $('#powersave').text(thermostat.powerSave)
    $('#usage').text(thermostat.usage);
  });  

  $('#psoff').on('click', function(){
    thermostat.switchOff();
    $('#powersave').text(thermostat.powerSave)
    $('#usage').text(thermostat.usage);
  })
  $('#eusage').on('click', function(){
    $('#usage').text(thermostat.energyUsage());
  });

});

// $.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=90c00a335031eec9c510112b569dfd57&units=metric', function(data){
//   $('#current-temperature').text(data.main.temp);
// })

// $('#current-city').change(function() {
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=90c00a335031eec9c510112b569dfd57&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp)
//   })
// })

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=90c00a335031eec9c510112b569dfd57&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})

