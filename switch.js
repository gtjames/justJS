let answer;

for (let i = 0; i < 100; i++) {
    answer = numberToEnglish(i);
    console.log(i + " => " + answer);
}
function numberToEnglish(number) {

    let ones = number % 10;
    let tens = Math.floor(number / 10);
    let numberWord = "";

    switch (ones) {
        case 0: numberWord = (tens === 0) ? "zero" : "";    break;
        case 1: numberWord = "one";         break;
        case 2: numberWord = "two";         break;
        case 3: numberWord = "three";       break;
        case 4: numberWord = "four";        break;
        case 5: numberWord = "five";        break;
        case 6: numberWord = "six";         break;
        case 7: numberWord = "seven";       break;
        case 8: numberWord = "eight";       break;
        case 9: numberWord = "nine";        break;
    }
    switch(tens) {
        case 0:                 break;
        case 1: switch(ones) {
                    case 0:             numberWord = "ten";       break;
                    case 1:             numberWord = "eleven";    break;
                    case 2:             numberWord = "twelve";    break;
                    case 3:             numberWord = "thirteen";  break;
                    case 5:             numberWord = "fifteen";   break;
                    case 4:   case 6:   case 7:       
                    case 8:   case 9:   numberWord += "teen";     break;
                }
            break;
        case 2: numberWord = "twenty "  + numberWord;     break;
        case 3: numberWord = "thirty "  + numberWord; break;
        case 4: numberWord = "fouryt "  + numberWord; break;
        case 5: numberWord = "fifty "   + numberWord; break;
        case 6: numberWord = "sixty "   + numberWord; break;
        case 7: numberWord = "seventy " + numberWord; break;
        case 8: numberWord = "eighty "  + numberWord; break;
        case 9: numberWord = "ninety "  + numberWord; break;        
    }
    return numberWord;
}