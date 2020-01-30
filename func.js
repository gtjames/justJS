let resultMessage, num;

resultMessage = hello("Edge Tech Academy");
console.log(resultMessage);

num = add10(100);
console.log("number: " + num);
num = add10(num);
console.log("number: " + num);

num = add2Numbers(88, num);
console.log("1 -> number: " + num);
num = add2Numbers(123, 680);
console.log("2 -> number: " + num);
num = add2Numbers(0, Math.PI);
console.log("3 -> number: " + num);

function add10(num) {
    return num + 10;
}

function hello(name) {
    return "Hello " + name + "!";
}

function add2Numbers(num1 , num2) {
    return num1 + num2;
 }

let msg = movieTest('Casablanca');
console.log(msg);

//      Or is it Start Wars
msg = movieTest('Star Wars');
console.log(msg);

function movieTest ( testAnswer ) {
    if (testAnswer == 'Casablanca')  {
        return 'Of course it is';
    }
}

function determineLifeExpectancy(packsPerDay, drinkPerWeek, age, familyHistory) {
    let expectedAge;
    //  do someting here with all the data that was passed in to the function
    return expectedAge;
}