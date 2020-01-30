"use strict";
//  variables help you keep track of what is going on
//  they keep score
let team1Player1Pts, team1Player1Name, team1Player1Fowls, team1Player1Assists, team1Player1Rebounds;
let team1Player2Pts, team2Player1Name, team1Player2Fowls, team1Player2Assists, team1Player2Rebounds;
let team1Player3Pts, team3Player1Name, team1Player3Fowls, team1Player3Assists, team1Player3Rebounds;
let team1Player4Pts, team4Player1Name, team1Player4Fowls, team1Player4Assists, team1Player4Rebounds;
let team1Player5Pts, team5Player1Name, team1Player5Fowls, team1Player5Assists, team1Player5Rebounds;

let team2Player1Pts, team2Player1Name, team2Player1Fowls, team2Player1Assists, team2Player1Rebounds;
let team2Player2Pts, team2Player2Name, team2Player2Fowls, team2Player2Assists, team2Player2Rebounds;
let team2Player3Pts, team2Player3Name, team2Player3Fowls, team2Player3Assists, team2Player3Rebounds;
let team2Player4Pts, team2Player4Name, team2Player4Fowls, team2Player4Assists, team2Player4Rebounds;
let team2Player5Pts, team2Player5Name, team2Player5Fowls, team2Player5Assists, team2Player5Rebounds;
let team1Score, team2Score;

let studentGrades, studentName;

//  They are called variables because they change.
//  They vary over the life of the program
//  Initially a variable may need to be initialized
studentName = "Alexander T. Beck";

player1Name = "Larry Bird";
player1Pts = 0;         //  at the start of the game the player has zero ponts

player2Name = "Earvin Johnson";
player2Pts = 0;         //  at the start of the game the player has zero ponts
teamScore = 0;          //  the team has zero points

studentGrades = 0;      //  that's right grades start at the bottom and you need to earn your way to an 'A'


//  Assignment:
//      Create 10 variables represetning something in your life.
//      Initialize them appropriately

//  Now the game begins
player2Name = "Magic Johnson";
player1Pts += 2;        //  Player 1 just made a layup
teamScore += 2;         //      and the team got 2 more points as well

player2Pts += 3;        //  Player 2 just just made a 3 pointer
teamScore += 3;         //      and the team got 3 more points as well

player1Pts++;           //  Player 1 just made a free throw
teamScore++;            //      and the team got 1 more points as well

player2Pts += 3;        //  Player 2 just just made a 3 pointer
teamScore += 3;         //      and the team got 3 more points as well
player2Pts += 3;        //  Player 2 just just made a 3 pointer
teamScore += 3;         //      and the team got 3 more points as well

studentGrades += 100;   //  perfect score
studentGrades += 50;    //  not so good. someone didn't study
studentGrades += 75;    //  a little better but not good

//  Assignment
//      make changes to 5 of your variables

//  Making decisions
//      We use the 'if' statement to make decisions
//      This next example is NOT how we do it
if ( player1Pts > player2Pts )
    console.log("Best player: " + player1Name);
if ( player2Pts > player1Pts )                  //  if the first if failed you KNOW that player 2 is better
    console.log("Best player: " + player2Name); //  no need to check again

if ( player1Pts > player2Pts ) {                 //  if player one has more points then
    console.log("Best player: " + player1Name); //  then show the players name
}
else {                                           //  ELSE the other player must be the better player
    console.log("Best player: " + player2Name); //  show their name
}

if ( studentGrades < 150 ) {
    console.log("set up counseling session with " + studentName);
}
else if ( studentGrades < 225 ) {
    console.log("Assign more homework to bring up " + studentName + "'s scores");
}
else if ( studentGrades < 275 ) {
    console.log("Give " + studentName + " a pat on the back");
} else {
    console.log("Ask " + studentName + " to tutor other students");
}

//  Assignment:
//      take 5 of your variables and create some tests with them
//      is A > B, is C == D, is R longer than S

//  Functions take us away from dealing with one player or one studnet
//  our code gets generalized to be used for many
function getStudentRecommendation (grade, name) {
    let recommendation;

    if ( grade < 150 ) {
        recommendation = "set up counseling session with " + name;
    }
    else if ( grade < 225 ) {       //  score is not < 150 is it < 225?
        recommendation = "Assign more homework to bring up " + name + "'s scores";
    }
    else if ( grade < 275 ) {       //  score is not < 225 is it < 275
        recommendation = "Give " + name + " a pat on the back";
    } else {                        //  score is >= 275
        recommendation = "Ask " + name + " to tutor other students";
    }
    return recommendation;
}

console.log();

//  now we can get recommendations for many students
let msg;
msg = getStudentRecommendation(295, "Alice");
console.log(msg);
msg = getStudentRecommendation(145, "Zeke");
console.log(msg);
msg = getStudentRecommendation(195, "Seth");
console.log(msg);


function whoIsBigger(numA, numB) {
    if (numA > numB)
        return numA;
    else
        return numB;
}

function findHypotneus(numA, numB) {
    return Math.sqrt(Math.pow(numA,2) + Math.pow(numB,2))
}

function findAverage(numA, numB, numC, numD, numE) {
    let result = 0;
    result += numA;
    result += numB;
    result += numC;
    result += numD;
    result += numE;
    result /= 5;
    return result;
}

let ave;
ave = findAverage(1, 3.99999, 63.2345, 2421, 7232);
console.log("The average is " + ave);

ave = findAverage(1,4,8,2,4);
console.log("The average is " + ave);

ave = findAverage(4674567, 576435, 1324134, 4336, 12342);
console.log("The average is " + ave.toFixed(3));


// let bigger;
// bigger = whoIsBigger(32, 66);
// console.log("who is bigger " + bigger);
//
// bigger = whoIsBigger(bigger, 99);
// console.log("who is bigger " + bigger);
//
// bigger = whoIsBigger(bigger, 55);
// console.log("who is bigger " + bigger);
//



