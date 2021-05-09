const fs = require('fs')

//  read a list of Volcanoes
let volcanoes = [];
fs.readFile('volcanoes.json', {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    //  convert the text of the Volcanoes into an array of JSON objects
    volcanoes = JSON.parse(data);
    console.log(`There are #{volcanoes.length} volcanoes in our list`);

    //  this will tidy up our data. The DEATHS attribute is inside of quotes
    //  so JS sees it as a string. This little tweak will convert DEATHS to a number
    volcanoes.forEach(v => v.DEATHS = +v.DEATHS);

    //  calculate the total number of deaths
    let deaths = volcanoes.reduce((total, v) => total + v.DEATHS, 0);
    console.table(`number of deaths ${deaths}`);
    let aveDeaths = deaths / volcanoes.length;
    console.table(`average number of deaths ${aveDeaths.toFixed(0)}`);

    let elevationTot = volcanoes.reduce((total, v) => total + v.Elevation, 0);
    let aveElevation = elevationTot / volcanoes.length;
    console.table(`Average Elevation of all volcanoes ${aveElevation.toFixed(0)}`);

    // use map to extract just the names of the volcanoes
    let names = volcanoes.map(v => v.Name);
    //console.table(names);

    let newZealand = volcanoes.filter(v => v.Country === 'New Zealand');
    console.log(`There were ${newZealand.length} volcanoes in New Zealand`);

    //  a little more complex. How do we find the average location of all eruptions
    //  in New Zealand
    //      first find all volcanoes in NZ
    //      next use reduce to find the sum of all the longitudes and latitudes
    //      then divide by the number of NZ vocanoes
    let longLat = volcanoes.filter(v => v.Country === 'New Zealand')
        .reduce((loc, v) =>  {
            loc.lat += v.Latitude;
            loc.long += v.Longitude;
            return loc;
        }, {lat:0,long:0});
    longLat.long /= newZealand.length;
    longLat.lat  /= newZealand.length;
    longLat.long = longLat.long.toFixed(2);
    longLat.lat  = longLat.lat.toFixed(2);
    console.table(longLat);
})
