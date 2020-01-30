let names = [];
names.push("A.J.");         //  add these names to the end of the array
names.push("Ben");
names.push("LaShel");
names.push("Kendal");
names.push("Tim");
names.push("Michael");
names.unshift("Add your name"); //  add to the start of the array
console.log(names[4]);      //   this should print out Joseph

//  let's see how you can print out these names
//          your code here

//  now sort the array and print it out
names.sort().forEach(n => console.log(n));

//  just a list of ages
let ages = [8, 4, 6, 13, 42, 21, 14, 3, 5, 31, 21];
console.log("how long is the age array? " + ages.length);

let total = 0;      //  initialize total to 0
for (let age of ages) {
    total += age;       //  add up all ages in the array
    console.log("total=" + total + " this age is " + age);
}
console.log("total age is " + total);
console.log("average age= " + total / ages.length);

//  find the oldest and the youngest age in our list
let oldest, youngest;
//  initialize oldest and youngest with the first element of the array
oldest = youngest = ages[0];
for (let age of ages) {
    //  is the next age in the array less than the current youngest?
    if (age < youngest) {
        youngest = age;     //  found a new youngest age
    }
    if (age > oldest) {     //  is this age older than oldest?
        oldest = age;       //  found a new oldest age
    }
}

console.log("found the oldest " + oldest);
console.log("found the youngest  " + youngest);

//  call the loop method it will print the numbers
//  between the current hour of the day and and 40
//  jumping in increments of the argument passed in to loop
loop(5);        //  jump in increments of 5
loop(8);        //  increments of 8
loop(10);       //  increments of 10

//  loop from current hour to 40 with increments of jump
function  loop(jump) {
    let date = new Date();
    let hour = date.getHours();
    console.log("----Looping from " + hour + " to 40 in increments of " + jump + "----");
    for(let i = hour; i < 40; i+=jump) {
        console.log(i);
    }
}
