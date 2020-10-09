$(function(){
  
  let temperature;
  
  var thermostat = new Thermostat;
  
  thermostat.getTemp(setTemp);
  // getTemp()
  // setTemp(temperature);
  //$("#temperature").text(thermostat.getTemp()); 
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
  
  $("#select-city").submit(function (event) {
    event.preventDefault();
    var city = $("#current-city").val();
    displayWeather(city);
  });
  
  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var token = "&";
    var units = "&units=metric";
    $.get(url + token + units, function (data) {
      $("#current-temperature").text(data.main.temp);
    });
  };

  function setTemp(temp) {
    $('#temperature').text(temp)
  };
  // function getTemp(){
  //   var url = "http://localhost:9292/temp";
  //   $.get(url, function(data) {
  //   temperature = data.temp
  //   console.log(data.temp)
  //   });
  // };

  // function setTemp(temp) {
  //   $('#temperature').text(thermostat.updateTemperature(temp))
  // }

});
