var city = document.querySelector('.city');
        var days = document.querySelector('.days');
        var lat = document.querySelector('.lat');
        var lng = document.querySelector('.lng');
        var apiKey = "351ddf928a6db536016c58d838da3ece";
        var btn = document.querySelector('.button');
        var timeZone = document.querySelector('.tz');

        var oneA = document.querySelector('.oneA');
        var oneB = document.querySelector('.oneB');
        var oneC = document.querySelector('.oneC');
        var oneD = document.querySelector('.oneD');
        var oneE = document.querySelector('.oneE');
        var oneF = document.querySelector('.oneF');
        var oneG = document.querySelector('.oneG');
        var oneH = document.querySelector('.oneH');


        var twoA = document.querySelector('.twoA');
        var twoB = document.querySelector('.twoB');
        var twoC = document.querySelector('.twoC');
        var twoD = document.querySelector('.twoD');
        var twoE = document.querySelector('.twoE');
        var twoF = document.querySelector('.twoF');
        var twoG = document.querySelector('.twoG');
        var twoH = document.querySelector('.twoH');
        

        var threeA = document.querySelector('.threeA');
        var threeB = document.querySelector('.threeB');
        var threeC = document.querySelector('.threeC');
        var threeD = document.querySelector('.threeD');
        var threeE = document.querySelector('.threeE');
        var threeF = document.querySelector('.threeF');
        var threeG = document.querySelector('.threeG');
        var threeH = document.querySelector('.threeH');

        var fourA = document.querySelector('.fourA');
        var fourB = document.querySelector('.fourB');
        var fourC = document.querySelector('.fourC');
        var fourD = document.querySelector('.fourD');
        var fourE = document.querySelector('.fourE');
        var fourF = document.querySelector('.fourF');
        var fourG = document.querySelector('.fourG');
        var fourH = document.querySelector('.fourH');

        var fiveA = document.querySelector('.fiveA');
        var fiveB = document.querySelector('.fiveB');
        var fiveC = document.querySelector('.fiveC');
        var fiveD = document.querySelector('.fiveD');
        var fiveE = document.querySelector('.fiveE');
        var fiveF = document.querySelector('.fiveF');
        var fiveG = document.querySelector('.fiveG');
        var fiveH = document.querySelector('.fiveH');

        var sixA = document.querySelector('.sixA');
        var sixB = document.querySelector('.sixB');
        var sixC = document.querySelector('.sixC');
        var sixD = document.querySelector('.sixD');
        var sixE = document.querySelector('.sixE');
        var sixF = document.querySelector('.sixF');
        var sixG = document.querySelector('.sixG');
        var sixH = document.querySelector('.sixH');

        var sevenA = document.querySelector('.sevenA');
        var sevenB = document.querySelector('.sevenB');
        var sevenC = document.querySelector('.sevenC');
        var sevenD = document.querySelector('.sevenD');
        var sevenE = document.querySelector('.sevenE');
        var sevenF = document.querySelector('.sevenF');
        var sevenG = document.querySelector('.sevenG');
        var sevenH = document.querySelector('.sevenH');


        var eightA = document.querySelector('.eightA');
        var eightB = document.querySelector('.eightB');
        var eightC = document.querySelector('.eightC');
        var eightD = document.querySelector('.eightD');
        var eightE = document.querySelector('.eightE');
        var eightF = document.querySelector('.eightF');
        var eightG = document.querySelector('.eightG');
        var eightH = document.querySelector('.eightH');


        btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat.value+'&lon='+lng.value+'&exclude=hourly,alerts,minutely&appid=351ddf928a6db536016c58d838da3ece')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var tzValue = data['timezone'];
                timeZone.innerHTML = 'Timezone: ' + tzValue;
        
                var morningValue = data['daily'][0]['feels_like']['morn'] - 273.15;
                var eveningValue = data['daily'][0]['feels_like']['eve'] - 273.15;
                var dayValue = data['daily'][0]['feels_like']['day'] - 273.15;
                var nightValue = data['daily'][0]['feels_like']['night'] - 273.15;
                var humidValue = data['daily'][0]['humidity'];
                var pressure = data['daily'][0]['pressure'];
                var cloudDesc = data['daily'][0]['weather'][0]['description'];
                var wSpeed = data['daily'][0]['wind_speed'];

                oneA.innerHTML = 'Temp during the day is: ' + dayValue + '˚C' ;
                oneB.innerHTML = 'Temp during the night is: ' + nightValue + '˚C';
                oneC.innerHTML = 'Temp during the morning is: ' + morningValue + '˚C';
                oneD.innerHTML = 'Temp during the evening is: ' + eveningValue + '˚C';
                oneE.innerHTML = 'Humidity for today is: ' + humidValue + '%';
                oneF.innerHTML = 'Pressure for today is: ' + pressure + 'kPa';
                oneG.innerHTML = 'Weather description is: ' + cloudDesc;
                oneH.innerHTML = 'Wind speed is : '+ wSpeed + 'm/s';


                var morningValueOne = data['daily'][1]['feels_like']['morn'] - 273.15;
                var eveningValueOne = data['daily'][1]['feels_like']['eve'] - 273.15;
                var dayValueOne = data['daily'][1]['feels_like']['day'] - 273.15;
                var nightValueOne = data['daily'][1]['feels_like']['night'] - 273.15;
                var humidValueOne = data['daily'][1]['humidity'];
                var pressureOne = data['daily'][1]['pressure'];
                var cloudDescOne = data['daily'][1]['weather'][0]['description'];
                var wSpeedOne = data['daily'][1]['wind_speed'];

                twoA.innerHTML = 'Temp during the day is: ' + dayValueOne + '˚C';
                twoB.innerHTML = 'Temp during the night is: ' + nightValueOne + '˚C';
                twoC.innerHTML = 'Temp during the morning is: ' + morningValueOne + '˚C';
                twoD.innerHTML = 'Temp during the evening is: ' + eveningValueOne + '˚C';
                twoE.innerHTML = 'Humidity is: ' + humidValueOne + '%';
                twoF.innerHTML = 'Pressure is: ' + pressureOne + 'kPa';
                twoG.innerHTML = 'Weather description is: ' + cloudDescOne;
                twoH.innerHTML = 'Wind speed is : '+ wSpeedOne + 'm/s';


                var morningValueTwo = data['daily'][2]['feels_like']['morn'] - 273.15;
                var eveningValueTwo = data['daily'][2]['feels_like']['eve'] - 273.15;
                var dayValueTwo = data['daily'][2]['feels_like']['day'] - 273.15;
                var nightValueTwo = data['daily'][2]['feels_like']['night'] - 273.15;
                var humidValueTwo = data['daily'][2]['humidity'];
                var pressureTwo = data['daily'][2]['pressure'];
                var cloudDescTwo = data['daily'][2]['weather'][0]['description'];
                var wSpeedTwo = data['daily'][2]['wind_speed'];

                threeA.innerHTML = 'Temp during the day is: ' + dayValueTwo + '˚C';
                threeB.innerHTML = 'Temp during the night is: ' + nightValueTwo + '˚C';
                threeC.innerHTML = 'Temp during the morning is: ' + morningValueTwo + '˚C';
                threeD.innerHTML = 'Temp during the evening is: ' + eveningValueTwo + '˚C';
                threeE.innerHTML = 'Humidity is: ' + humidValueTwo + '%';
                threeF.innerHTML = 'Pressure is: ' + pressureTwo + 'kPa';
                threeG.innerHTML = 'Weather description is: ' + cloudDescTwo;
                threeH.innerHTML = 'Wind speed is : '+ wSpeedTwo + 'm/s';

                var morningValueThree = data['daily'][3]['feels_like']['morn'] - 273.15;
                var eveningValueThree = data['daily'][3]['feels_like']['eve'] - 273.15;
                var dayValueThree = data['daily'][3]['feels_like']['day'] - 273.15;
                var nightValueThree = data['daily'][3]['feels_like']['night'] - 273.15;
                var humidValueThree = data['daily'][3]['humidity'];
                var pressureThree = data['daily'][3]['pressure'];
                var cloudDescThree = data['daily'][3]['weather'][0]['description'];
                var wSpeedThree = data['daily'][3]['wind_speed'];

                fourA.innerHTML = 'Temp during the day is: ' + dayValueThree + '˚C';
                fourB.innerHTML = 'Temp during the night is: ' + nightValueThree + '˚C';
                fourC.innerHTML = 'Temp during the morning is: ' + morningValueThree + '˚C';
                fourD.innerHTML = 'Temp during the evening is: ' + eveningValueThree + '˚C';
                fourE.innerHTML = 'Humidity is: ' + humidValueThree + '%';
                fourF.innerHTML = 'Pressure is: ' + pressureThree + 'kPa';
                fourG.innerHTML = 'Weather description is: ' + cloudDescThree;
                fourH.innerHTML = 'Wind speed is : '+ wSpeedThree + 'm/s';

                var morningValueFour = data['daily'][4]['feels_like']['morn'] - 273.15;
                var eveningValueFour = data['daily'][4]['feels_like']['eve'] - 273.15;
                var dayValueFour = data['daily'][4]['feels_like']['day'] - 273.15;
                var nightValueFour = data['daily'][4]['feels_like']['night'] - 273.15;
                var humidValueFour = data['daily'][4]['humidity'];
                var pressureFour = data['daily'][4]['pressure'];
                var cloudDescFour = data['daily'][4]['weather'][0]['description'];
                var wSpeedFour = data['daily'][4]['wind_speed'];

                fiveA.innerHTML = 'Temp during the day is: ' + dayValueFour + '˚C';
                fiveB.innerHTML = 'Temp during the night is: ' + nightValueFour + '˚C';
                fiveC.innerHTML = 'Temp during the morning is: ' + morningValueFour + '˚C';
                fiveD.innerHTML = 'Temp during the evening is: ' + eveningValueFour + '˚C';
                fiveE.innerHTML = 'Humidity is: ' + humidValueFour + '%';
                fiveF.innerHTML = 'Pressure is: ' + pressureFour + 'kPa';
                fiveG.innerHTML = 'Weather description is: ' + cloudDescFour;
                fiveH.innerHTML = 'Wind speed is : '+ wSpeedFour + 'm/s';

                var morningValueFive = data['daily'][5]['feels_like']['morn'] - 273.15;
                var eveningValueFive = data['daily'][5]['feels_like']['eve'] - 273.15;
                var dayValueFive = data['daily'][5]['feels_like']['day'] - 273.15;
                var nightValueFive = data['daily'][5]['feels_like']['night'] - 273.15;
                var humidValueFive = data['daily'][5]['humidity'];
                var pressureFive = data['daily'][5]['pressure'];
                var cloudDescFive = data['daily'][5]['weather'][0]['description'];
                var wSpeedFive = data['daily'][5]['wind_speed'];

                sixA.innerHTML = 'Temp during the day is: ' + dayValueFive + '˚C';
                sixB.innerHTML = 'Temp during the night is: ' + nightValueFive+ '˚C';
                sixC.innerHTML = 'Temp during the morning is: ' + morningValueFive + '˚C';
                sixD.innerHTML = 'Temp during the evening is: ' + eveningValueFive + '˚C';
                sixE.innerHTML = 'Humidity is: ' + humidValueFive + '%';
                sixF.innerHTML = 'Pressure is: ' + pressureFive+ 'kPa';
                sixG.innerHTML = 'Weather description is: ' + cloudDescFive;
                sixH.innerHTML = 'Wind speed is : '+ wSpeedFive+ 'm/s';


                var morningValueSix = data['daily'][6]['feels_like']['morn'] - 273.15;
                var eveningValueSix = data['daily'][6]['feels_like']['eve'] - 273.15;
                var dayValueSix = data['daily'][6]['feels_like']['day'] - 273.15;
                var nightValueSix = data['daily'][6]['feels_like']['night'] - 273.15;
                var humidValueSix = data['daily'][6]['humidity'];
                var pressureSix = data['daily'][6]['pressure'];
                var cloudDescSix = data['daily'][6]['weather'][0]['description'];
                var wSpeedSix = data['daily'][6]['wind_speed'];

                sevenA.innerHTML = 'Temp during the day is: ' + dayValueSix + '˚C';
                sevenB.innerHTML = 'Temp during the night is: ' + nightValueSix + '˚C';
                sevenC.innerHTML = 'Temp during the morning is: ' + morningValueSix + '˚C';
                sevenD.innerHTML = 'Temp during the evening is: ' + eveningValueSix + '˚C';
                sevenE.innerHTML = 'Humidity is: ' + humidValueSix + '%';
                sevenF.innerHTML = 'Pressure is: ' + pressureSix + 'kPa';
                sevenG.innerHTML = 'Weather description is: ' + cloudDescSix;
                sevenH.innerHTML = 'Wind speed is : '+ wSpeedSix + 'm/s';


                var morningValueSeven = data['daily'][7]['feels_like']['morn'] - 273.15;
                var eveningValueSeven = data['daily'][7]['feels_like']['eve'] - 273.15;
                var dayValueSeven = data['daily'][7]['feels_like']['day'] - 273.15;
                var nightValueSeven = data['daily'][7]['feels_like']['night'] - 273.15;
                var humidValueSeven = data['daily'][7]['humidity'];
                var pressureSeven = data['daily'][7]['pressure'];
                var cloudDescSeven = data['daily'][7]['weather'][0]['description'];
                var wSpeedSeven = data['daily'][7]['wind_speed'];

                eightA.innerHTML = 'Temp during the day is: ' + dayValueSeven + '˚C';
                eightB.innerHTML = 'Temp during the night is: ' + nightValueSeven + '˚C';
                eightC.innerHTML = 'Temp during the morning is: ' + morningValueSeven + '˚C';
                eightD.innerHTML = 'Temp during the evening is: ' + eveningValueSeven + '˚C';
                eightE.innerHTML = 'Humidity is: ' + humidValueSeven + '%';
                eightF.innerHTML = 'Pressure is: ' + pressureSeven + 'kPa';
                eightG.innerHTML = 'Weather description is: ' + cloudDescSeven;
                eightH.innerHTML = 'Wind speed is : '+ wSpeedSeven + 'm/s';

            })
            .catch(err => console.log(err));


        console.log(city.value, days.value);

        }) 