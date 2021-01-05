function KtoF(temp) {
    let f = (temp - 273) * 9 / 5 + 32;
    return Math.floor(f);
}

let compass = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

function direction(degree) {
    let deg = Math.floor(((degree + 11.25) % 360) / 22.5);
    return compass[deg];
}

let wx = zz.list.map(d => ({
   dt:(new Date(d.dt*1000)), sunrise:"", sunset:"",
high: KtoF(d.main.temp_min),
low: KtoF(d.main.temp_max),
THI: KtoF(d.main.feels_like),
humidity: d.main.humidity,
windSpeed: d.wind.speed,
windDirection: direction(d.wind.deg),
forecast: d.weather[0].description,
icon: `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`,
clouds: d.clouds.all,
rain: d.pop,
}))
wx.name = zz.city.name;
wx.lat = zz.city.coord.lat;
wx.lon = zz.city.coord.lon;
console.table(wx);
console.table(wx);


wx = z.daily.map(d => ({
    dt:(new Date(d.dt*1000)), sunrise:(new Date(d.sunrise)), sunset:(new Date(d.sunset)),
high: KtoF(d.temp.min),
low: KtoF(d.temp.max),
THI: KtoF(d.feels_like.day),
humidity: d.humidity,
windSpeed: d.wind_speed,
windDirection: direction(d.wind_deg),
forecast: d.weather[0].description,
icon: `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`,
clouds: d.clouds,
pop: d.pop,
}))
wx.lat = z.lat;
wx.lon = z.lon;
wx.name = "";