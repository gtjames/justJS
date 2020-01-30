let animals = [];

animals.push('zebra');
animals.push('horse');
animals.push('long horn');
animals.push('lemur');
animals.push('lion');
animals.push('labradoodle');
animals.push('lizard');
animals.push('dog');
animals.push('sheep');
animals.push('seal');
animals.push('donkey');
animals.push('zebra');
animals.push('dolphin');
animals.push('saint bernard');
animals.push('deer');
animals.unshift('cat');
animals.unshift('snake');
animals.unshift('snail');
animals.unshift('worm');
animals.unshift('gerbil');

console.log("animal 0: " + animals[0]);
animals[0] = 'Monkey';
console.log("animal 0: " + animals[0]);

let last = animals.pop();
last += " updated ";
console.log("last animal was: " + last);
animals.push(last);
console.log(animals);

let first = animals.shift();
console.log("first animal was: " + first);
console.log(animals);
//let zoo = animals.slice(2,5);
//console.log(zoo);

let array2;
animals.forEach(e => console.log("-->" + e));         //  list all animals longer than 5
array2 = animals.filter(e => e.length > 5);         //  list all animals longer than 5
console.log("array2 " + array2);

let count = 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//count = countries.list.reduce()

function conlog (element) {
    console.log('dif this! ', element);
}

for (let a = 0; a < animals.length; a++ )
    console.log("What animal is at location " + a + ": " +animals[a]);

for (animal of animals )
    console.log(animal);

animals.forEach(conlog);

animals.forEach(function (element) { console.log(element); });

animals.forEach(element => console.log(element));
