var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var maxTemp = document.querySelector('.tempMax');
var minTemp = document.querySelector('.tempMin');
var feelsLike = document.querySelector('.feelslike');
var humidity = document.querySelector('.humid');
var pressure = document.querySelector('.pressure');
var speed = document.querySelector('.speed');
var cloudiness = document.querySelector('.clouds');
var apiKey = "351ddf928a6db536016c58d838da3ece";

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value
    +'&appid=351ddf928a6db536016c58d838da3ece')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var countryValue = data['sys']['country'];
        var nameValue = data['name'];
        var tempValue = data['main']['temp'] - 273.15;
        var descValue = data['weather'][0]['description'];
        var humidValue = data['main']['humidity'];
        var pressureValue = data['main']['pressure'];
        var feelsValue = data['main']['feels_like'] - 273.15;
        var speedValue = data['wind']['speed'];
        var cloudValue = data['clouds']['all'];
        var tempMax = data['main']['temp_max'] - 273.15;
        var tempMin = data['main']['temp_min'] - 273.15;
        

        cityName.innerHTML = 'Current weather of ' + nameValue + ' (' + countryValue + ')';
        temp.innerHTML = 'Temp: ' + tempValue + '˚C';
        maxTemp.innerHTML = 'Max. Temp: ' + tempMax + '˚C';
        minTemp.innerHTML = 'Min. Temp: ' + tempMin + '˚C';
        desc.innerHTML = 'Description: ' + descValue;
        humidity.innerHTML = 'Humidity: ' + humidValue + '%';
        pressure.innerHTML = 'Pressure: ' + pressureValue + 'hPa';
        feelsLike.innerHTML = 'Feels like: ' + feelsValue + '˚C';
        speed.innerHTML = 'Wind Speed: ' + speedValue + 'm/s';
        cloudiness.innerHTML = 'Cloudiness: ' + cloudValue + '%';
        
    })
    .catch(err => alert("Wrong city name! " + err))
})


var clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', function(){
    clearFn();
})

function clearFn(){
    return inputValue.value = "";
};