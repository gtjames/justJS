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

    //  this will tidy up our data. The Deaths attribute is inside of quotes
    //  so JS sees it as a string. This little tweeak will convert Deaths to a number
    volcanoes.forEach(v => v.Deaths = +v.Deaths);

    let deaths = volcanoes.reduce((total, v) => total + v.Deaths, 0);
    console.table(`number of deaths ${deaths}`);
    let aveDeaths = deaths / volcanoes.length;
    console.table(`avegage of deaths ${aveDeaths.toFixed(0)}`);

    let elevationTot = volcanoes.reduce((total, v) => total + v.Elevation, 0);
    let aveElevation = elevationTot / volcanoes.length;
    console.table(`Total Elevation ${aveElevation.toFixed(0)}`);

    let names = volcanoes.map(v => v.Name);
    //console.table(names);
})
