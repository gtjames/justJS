const fs = require('fs')

let titanic = [];

fs.readFile('titanic.csv', {
  encoding: 'utf-8'
}, (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let lines = data.split('\r\n');
  lines.shift();
  for (let line of lines) {
    let attributes = line.split(',');
    let person = new Passenger(attributes[0], attributes[1], attributes[2], attributes[3], attributes[4], attributes[5]);
    titanic.push(person);
  }
  console.log(titanic.length);
  let cnt = titanic.reduce((tot, t) => tot + (t.survivor ? 1 : 0), 0);
  console.table(cnt);

  cnt = titanic.reduce((tally, t) => {
    tally[t.passengerCrew] = (tally[t.passengerCrew] || 0) + 1;
    return tally;
  }, {})
  console.table(cnt);
})

// var fs = require('fs'),
//     path = require('path'),    
//     filePath = path.join(__dirname, 'start.html');

// fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
//     if (!err) {
//         console.log('received data: ' + data);
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
//     } else {
//         console.log(err);
//     }
// });

class Passenger {
  constructor(Name, Age, PassengerClass, PassengerCrew, Role, Survivor) {
    this.name = Name;
    this.age = +Age;
    this.passengerClass = PassengerClass;
    this.passengerCrew = PassengerCrew;
    this.role = Role;
    this.survivor = Survivor == 'T';
  }
}