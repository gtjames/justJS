/**
 * Created by Edge Tech Academy on 5/8/2017.
 */

//  First of all we need a fun string to experiment with.
let einstein = "\"Two things are infinite: the universe and human stupidity; " +
					"and I'm not sure about the the universe.\" — Albert Einstein";

// var stdin = process.openStdin();
//
// stdin.addListener("data", function(d) {
//     // note:  d is an object, and when converted to a string it will
//     // end with a linefeed.  so we (rather crudely) account for that
//     // with toString() and then trim()
//     console.log("you entered: [" + d.toString().trim() + "]");
// });

//  Start off slow. Just output the string
console.log("Einstein Quote: " + einstein);

//  how long is it
let msg = "Length: " + einstein.length;
console.log(msg);

//  split the string into an array. You can split on a character a string or nothing
//  Here we split on the empty string which creates an array of all of the characters in the original string
msg = "Number of letters in: " + einstein.split("").length + " Word Array: " + einstein.split("");
console.log(msg);
var chars = einstein.split("");

//  The above approach is wasteful. We split the string twice just to save one line of code
//  lets save the array and reuse it without recreating it
let spaceArray = einstein.split(" ");
console.log("Number of words in spaceArray: " + spaceArray.length + " Word Array: " + spaceArray);

//  The below test revealed something inadvertently
//      I went to http://www.great-quotes.com/quotes/author/Albert/Einstein to find a good quote
//      They actually have a typo. Did you notice it? The two the's
//      what will this do to our splitting?
let theArray = einstein.split("the");
console.log("Split string on 'the's: " + theArray.length + " the strings: " + theArray);

//  find the first and last references to a particular word
let firstUniverse = einstein.indexOf('universe');
let secondUniverse = einstein.indexOf('universe', firstUniverse+1);
let lastUniverse  = einstein.lastIndexOf('universe');
console.log("First 'Universe' in string found at: " + firstUniverse + " Last 'Universe' was found at: " + lastUniverse);

let firstPhrase = einstein.indexOf(":");
let phraseOne = einstein.slice(0,firstPhrase);
console.log ("Phrase One '" + phraseOne + "' ends at: " + firstPhrase + " just before the ':'");

//  the above output leaves a leading " on the line lets slice off that first character
phraseOne = phraseOne.slice(1);
console.log ("Phrase One minus the double quote '" + phraseOne + "'");

//  replace acts differently whether you have a simple search string or a regular expression
//      The first examples only changes the first string that matches
//      To replace all instances of a string we need to use a regular expression.
//      RegEx is worthy of a full day's discussion.
//      We will show just a single frequently used expression.
//          /the/g  forward slashes delimit the string and g says globally replace all instances
console.log (einstein.replace('the', 'THE'));
console.log (einstein.replace(/the/g, 'THE'));