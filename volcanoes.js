const fs = require('fs')

let volcanoes = [];

fs.readFile('volcanoes.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    volcanoes = JSON.parse(data);
    console.log(volcanoes.length);
    let cnt = volcanoes.reduce((tot, t) => tot + (t.DEATHS | 0), 0);
    console.table(cnt);
})