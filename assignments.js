/**
 * Created by gjames on 12/19/2017.
 */
//
// function getRandomNum(num) {
//     return Math.floor((Math.random()* num));
// }
//
// function coinToss() {
//     return (getRandomNum(2) == 0) ? "Tails" : "Heads";
// }
//
// let plus = 0;
// let heads = 0;
// for (let i = 0; i < 100000; i++) {
//     if (getRandomNum(20) > 10 ) plus++;
//     if (coinToss() == "Heads")  heads++
// }

// console.log("Heads " + heads + " top half " + plus);

// let declaration = "We hold these 0truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";
// let myArray = declaration.split(" ").sort();
// console.log(myArray);
//
//        JS uses square brackets to define arrays.
let tvShows = [ 'MASH', 'NCIS', 'Star Trek', 'Big Bang Theory' ];

//        if you need an array variable but are not ready to use it yet. [] will create an array
let cableTVShows = [];
console.log(tvShows[0]);          // Prints 'Mash' to the console
console.log(tvShows[2]);          // not a surprise this prints 'Star Trek'
console.log(tvShows[tvShows.length-1]);    // This the last entry ''Big Bang Theory'
console.log(tvShows[8]);

// you show already know that this prints undefined
tvShows[8] = 'Friends';           // What do you think this will do?
console.log(tvShows[8]);          // Any guesses what this will print out?
tvShows.push('The Expanse');
tvShows.push('Friday Night Lights');
tvShows.push('Dr. Who');
tvShows.push('Designated Survivor');
tvShows.push('Mickey Mouse Club');
console.log(tvShows[tvShows.length-1]);    // This the last entry

let car = [];
car["make"] = "Acura";
car["model"] = "TLX";
car["miles"] = 20000;
car["enginesize"] = 290;
car["doors"] = 4;
car["windows"] = 9;

console.log(car.miles);
console.log(car['miles']);
console.log(car.length);

const goodbye = function bye(){
    console.log('Goodbye World!');
};
goodbye();

square = (x, y) => {return Math.sqrt(x*x+y*y)};
console.log(square(44,3));
let z = [1,2,3,4,5].reduce( (acc,val) => acc + val,-15 );
console.log(z);

var animals = ["cat","dog","fish"];
var threeLetterAnimals = animals.filter(animal => animal.length === 3);
console.log(threeLetterAnimals); // ["cat", "dog"]

const quiz =new Map ([
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
]);
const answer =new Map ([
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
]);
console.log(quiz);
var good = 0;
answer.forEach((val,key)=> {(good += quiz.get(key) == val) ? 1 : 0; })
console.log(good);

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 2){
        setTimeout(()=>{resolve(n)},n*1200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});
roll.then(result => console.log(`I rolled a ${result}`) )
    .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
console.log('After the roll');
// var dt = new Date()
// console.log(dt.getMonth());
//
// let  num = 99;
// let  str = 'something';
//
// let test = num;
// switch ( test ) {
//     case    10          :  console.log("found 10");        break;
//     case    100         :  console.log("found 100");       break;
//     case    'something' :  console.log("found something"); break;
//     case    "99"        :  console.log("found 99");        break;
//     default             :  console.log("no match");        break;
// }