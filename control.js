"use strict";
/**
 * Created by Edge Tech Academy on 4/24/2017.
 */

let movieMessage;		// this is our string to hold the answer to the movieTest question

//      If you are going to be serious about movie standards you only need an if statement
//      What is the greatest movie ever?
//      Is it Casablanca?
movieMessage = movieTest('Casablanca');
console.log(movieMessage);

//      Or is it Start Wars
//      Notice the message printed when we use a different movie of lesser value.
movieMessage = movieTest('Star Wars');
console.log(movieMessage);

function movieTest ( testAnswer ) {
    if (testAnswer === 'Casablanca')  {
        return 'Of course it is';
    }
}


//      If you let you standards be a little lax then you'll need an if-then-else construct
//      What is the greatest movie ever?
//      Is it Casablanca?
movieMessage = movieTest2('Casablanca');
console.log(movieMessage);

//      Or is it Start Wars
movieMessage = movieTest2('Star Wars');
console.log(movieMessage);

function movieTest2 ( testAnswer ) {
    if (testAnswer === 'Casablanca') {
        return 'Of course it is';
    }
    else {
        return testAnswer + ' is NOT the best movie';
    }
}


//      Maybe there are more that a few great movies so let's add in if-then-else if-else if
//      What are the greatest movies ever?
//      Is it Casablanca?
movieMessage = movieTest3('Casablanca');
console.log(movieMessage);

//      Or is it Star Wars
movieMessage = movieTest3('Star Wars');
movieMessage = console.log(movieMessage);

//      Or is it What's up, Doc?
movieMessage = movieTest3("What's up, Doc?");
console.log(movieMessage);

//      Or is it Interstellar
movieMessage = movieTest3("Interstellar");
console.log(movieMessage);

function movieTest3 ( testAnswer ) {
    if (testAnswer === 'Casablanca') {
        return testAnswer + ' is the greatest ever!';
    }
    else if (testAnswer === 'Star Wars') {
        return testAnswer + ' was pretty good';
    }
    else if (testAnswer === "What's up, Doc?") {
        return testAnswer + ' was perfect';
    }
    else {
        return 'Sorry ' + testAnswer + ' was not a great movie.';
    }
}

//  convert State Abbreviations to their full name
let stateName;

stateName = stateConversion('UT');
console.log(stateName);

console.log(stateConversion('TX'));

stateName = stateConversion('DC');
console.log(stateName);

let numberName;
numberName = stateConversion(66);
console.log(numberName);


function numberConversion (number) {
    let numberName;

    switch (number % 10) {
        case 1: numberName = "one";                break;
        case 2: numberName = "two";                break;
        case 3: numberName = "three";              break;
        case 4: numberName = "four";               break;
        case 5: numberName = "five";               break;
        case 6: numberName = "six";                break;
        case 7: numberName = "seven";              break;
        case 8: numberName = "eight";              break;
        case 9: numberName = "nine";               break;
        //statements to execute if no matching cases were found
        default:   numberName = "";                break;
    }
    return numberName;
}

/**
 *
 * @param stateAbbreviation
 * @returns string with the state name
 */
function stateConversion (stateAbbreviation) {
    let stateName;

    switch (stateAbbreviation) {
        case "AL": stateName = "Alabama";                break;
        case "AK": stateName = "Alaska";                 break;
        case "AZ": stateName = "Arizona";                break;
        case "AR": stateName = "Arkansas";               break;
        case "CA": stateName = "California";             break;
        case "CO": stateName = "Colorado";               break;
        case "CT": stateName = "Connecticut";            break;
        case "DE": stateName = "Delaware";               break;
        case "DC": stateName = "District Of Columbia";   break;
        case "FL": stateName = "Florida";                break;
        case "GA": stateName = "Georgia";                break;
        case "HI": stateName = "Hawaii";                 break;
        case "ID": stateName = "Idaho";                  break;
        case "IL": stateName = "Illinois";               break;
        case "IN": stateName = "Indiana";                break;
        case "IA": stateName = "Iowa";                   break;
        case "KS": stateName = "Kansas";                 break;
        case "KY": stateName = "Kentucky";               break;
        case "LA": stateName = "Louisiana";              break;
        case "ME": stateName = "Maine";                  break;
        case "MD": stateName = "Maryland";               break;
        case "MA": stateName = "Massachusetts";          break;
        case "MI": stateName = "Michigan";               break;
        case "MN": stateName = "Minnesota";              break;
        case "MS": stateName = "Mississippi";            break;
        case "MO": stateName = "Missouri";               break;
        case "MT": stateName = "Montana";                break;
        case "NE": stateName = "Nebraska";               break;
        case "NV": stateName = "Nevada";                 break;
        case "NH": stateName = "New Hampshire";          break;
        case "NJ": stateName = "New Jersey";             break;
        case "NM": stateName = "New Mexico";             break;
        case "NY": stateName = "New York";               break;
        case "NC": stateName = "North Carolina";         break;
        case "ND": stateName = "North Dakota";           break;
        case "OH": stateName = "Ohio";                   break;
        case "OK": stateName = "Oklahoma";               break;
        case "OR": stateName = "Oregon";                 break;
        case "PA": stateName = "Pennsylvania";           break;
        case "PR": stateName = "Peurto Rico";            break;
        case "RI": stateName = "Rhode Island";           break;
        case "SC": stateName = "South Carolina";         break;
        case "SD": stateName = "South Dakota";           break;
        case "TN": stateName = "Tennessee";              break;
        case "TX": stateName = "Texas";                  break;
        case "UT": stateName = "Utah";                   break;
        case "VT": stateName = "Vermont";                break;
        case "VA": stateName = "Virginia";               break;
        case "WA": stateName = "Washington";             break;
        case "WV": stateName = "West Virginia";          break;
        case "WI": stateName = "Wisconsin";              break;
        case "WY": stateName = "Wyoming";                break;
        //statements to execute if no matching cases were found
        default:   stateName = "";                       break;
    }
    return stateName;
}

function diagnosis(bodyTemp) {
    if(bodyTemp < 85) {
        return "Hypothermia call 911";
    } else if (bodyTemp > 85 && bodyTemp < 94) {            //  note to future class
        return "Just cold put on a jacket";
    } else if (bodyTemp > 94 && bodyTemp < 99) {            //  what happens here if the temp 94, 99, 101
        return "Normal - no action required";
    } else if (bodyTemp > 99 && bodyTemp < 101) {
        return "Slight fever - take an aspirin";
    } else if (bodyTemp > 101 && bodyTemp < 105) {
        return "Get to a hospital";
    } else {
        return "RIP";
    }
}
