const fs = require('fs')

let volcanoes = [];

fs.readFile('volcanoes.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    volcanoes = JSON.parse(data);
    console.log(volcanoes.length);
    
    let cnt;
    cnt = volcanoes.filter(v => v.DEATHS |= 0, 0);
    console.table(cnt.length);
    

    cnt = volcanoes.reduce((total, v) => total + v.DEATHS, 0);
    console.table(cnt);
})