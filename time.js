let tvShows = [ 'MASH', 'NCIS', 'Star Trek', 'Big Bang Theory' ];
console.log(tvShows[0]);          // Prints 'Mash' to the console
console.log(tvShows[2]);          // not a surprise this prints 'Star Trek'
console.log(tvShows[tvShows.length-1]);    // This the last entry ''Big Bang Theory'
console.log(tvShows[0]);          // you show already know that this prints undefined
console.log('array len :', tvShows.length);

tvShows[80] = 'Friends';           // What do you think this will do? 
console.log(tvShows[80]);          // Any guesses what this will print out? 
console.log('array len :', tvShows.length);

tvShows.push('The Flash');        // This will add our new entry at the end of the array
tvShows.push('The Expanse');
tvShows.push('Friday Night Lights');
tvShows.push('Dr. Who');
tvShows.push('Designated Survivor');
tvShows.push('Mickey Mouse Club');
console.log(tvShows[tvShows.length-1]);    // This the last entry
console.log('array len :', tvShows.length);

let secsSince12 = timeSinceMidnight();
console.log(secsSince12);

let result = timeChangeCase("Edge Tech");
console.log('result :', result);

function timeChangeCase(str) {
    if (getSeconds() > 30) {
        str = str.toUpperCase();
    } else {
        str = str.toLowerCase();
    }
    return str;
}

function timeSinceMidnight() {
    let date = new Date();
    let secs = date.getHours()*60*60;
    secs += date.getMinutes()*60;
    secs += date.getSeconds();
    return  secs;
}

function getSeconds() {
    let date = new Date();
    return  date.getSeconds();
}
function getMinutes() {
    let date = new Date();
    return  date.getMinutes();
}
function getHours() {
    let date = new Date();
    return  date.getHours();
}

function convertMilesToFeet(miles) {
    let feet;
    feet = miles * 5280;
    return feet;
}
let mi = 26.2;
let feet = convertMilesToFeet(mi);
console.log('There are ', feet.toLocaleString(), ' feet in ', mi,'miles');


// Create a function with two parameters that adds then together and returns the value
//      calc(55, 33);


// Create a function to take two numbers and a string value that represents a math operation “*”, “+”,… Your code will switch on the math operation and do the chosen operation on the two numbers. 
// let result = calculate (47, 81, “+”);        // returns 128
// result = calculate (11, 11, “*”);         //  returns 121
// Create a function that takes one parameter, which represents a part of time “h” for hour, “d” for date, “M” for month, and so on. Your method will get the current date and extract the hour, date,… from it and return to the user.
// let now = new Date(); // this will get you the current date and time
// let currentHour = getDatePart(“h”);
// let currentDate = getDatePart(“d”);
// Using the above two functions get the current hour and add 5 to it. Do this with one line of code
// Take the hardness switch code above and put it into a method returning the hardness of a mineral.
// Take the create initials code above and put it into a method return the initials of the persons name passed in o the function.
