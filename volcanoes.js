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
})
