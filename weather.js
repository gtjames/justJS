/*
https://www.ngdc.noaa.gov/hazel/view/hazards/volcano/event-data?maxYear=2021&minYear=-10000
https://www.ngdc.noaa.gov/hazel/view/hazards/earthquake/event-data?maxYear=2021&minYear=-10000
https://api.openweathermap.org/data/2.5/onecall?lat=32.708018&lon=-97.060992&exclude={part}&appid=dc6e40e10806f79c1a2354eaad1e04bd
https://openweathermap.org/api/one-call-api
*/

// don't forget to npm install node-fetch
var fetch = require("node-fetch");

let key = "dc6e40e10806f79c1a2354eaad1e04bd"
let lon = -97.060992
let lat = 32.708018;
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (let day of data.daily) {
            console.log("Temp: " + Math.floor((day.temp.max-273)) + " wind will be: " + day.wind_speed + " " + day.weather[0].description);
        }
        for (let hour of data.hourly) {
//            console.log("Temp: " + Math.floor((hour.temp-273)) + " wind will be: " + hour.wind_speed + " " + hour.weather[0].description);
            let date = new Date(hour.dt*1000 - 21600*1000);
            let time = date.toUTCString().substring(17, 19);
            console.log(`At ${time} o'clock the temperature will be ${KtoF(hour.temp)}F wind speed ${hour.wind_speed} and overal condidtion: ${hour.weather[0].description}`);
        }
    });

    function KtoF (temp) {
        let f = (temp - 273) * 9 / 5 + 32;
        return Math.floor(f);
    }