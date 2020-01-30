let answer;

let number = 9;
answer = numberToEnglish(number);
console.log("The number " + number + " is " + answer + " in english");

number = 0;
answer = numberToEnglish(number);
console.log("The number " + number + " is " + answer + " in english");

number = 19;
answer = numberToEnglish(number);
console.log("The number " + number + " is " + answer + " in english");
//  convert a number between 0 and 9 to the corresponding english work
//      for instance 0 to zero
//          or 6 to six  
function numberToEnglish(numberX) {

    let numberWord = "";

    switch (numberX) {
        case 0: numberWord = "zero";    break;
        case 1: numberWord = "one";     break;
        case 2: numberWord = "two";     break;
        case 3: numberWord = "three"; break;
        case 4: numberWord = "four"; break;
        case 5: numberWord = "five"; break;
        case 6: numberWord = "six"; break;
        case 7: numberWord = "seven"; break;
        case 8: numberWord = "eight"; break;
        case 9: numberWord = "nine"; break;
    }
    return numberWord;
    // here is where the switch would go
}