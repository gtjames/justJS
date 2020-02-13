const fs = require('fs')

let titanic = [];

fs.readFile('/projects/csv/titanic.csv', {encoding: 'utf-8'}, 
                (err, data) => {
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
  let cnt;

  //  how many people sailed on the titanic?
  //  this way we count the size of the titanic array (this is much quicker)
  console.log(titanic.length);
  //  here we loop through the array and count the elements (we could also to ++total)
  //  what is this extra parameter for        v?
  //  this is the starting point 0. Make it a 100 and note that the total is 100 bigger
  //  it is an optional value. Remove the ',0' and look at your result
  cnt = titanic.reduce((total, t) => total+1, 0);
  console.table(cnt);

  //  how many survived the night to remember?
  //  for every survivor add one to total
  cnt = titanic.reduce((total, t) => total + (t.survivor ? 1 : 0), 0);
  console.table('number of survivors: ' + cnt);
  let died = titanic.reduce((total, t) => total + (t.survivor ? 0 : 1), 0);
  console.table('number of deaths:   ' + died);

  let henry = titanic.filter( p => p.name.includes('Henry'));
  console.table(henry);

  // let firstClass = titanic.reduce((total, t) => total + (t.passengerClass.includes('1st') ? 1 : 0), 0);
  // console.log('first class passengers ' + firstClass);

  //let list = titanic.filter();
//  console.table(titanic)

  cnt = titanic.reduce((tally, t) => {
    tally[t.passengerCrew] = (tally[t.passengerCrew] || 0) + 1;
    return tally;
  }, {})
  console.table(cnt);
})

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