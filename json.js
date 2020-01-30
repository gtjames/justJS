/**
 * Created by Edge Tech Academy on 5/4/2017.
 */

let ourSchool = {
    name: "Edge Tech Academy",
    age: 2,
    parentCompany: 'Ancora Education',
    teachers : [
        "Jason", "Eric", "Nader"
    ],
    courses: {
        SD101: 'HTML',
        SD102: 'SQL',
        SD103: 'Java',
        SD104: 'C #',
        SD105: 'JavaScript'
    }
};
ourSchool.courses.SD201 = 'Mobile Project';
ourSchool.teachers.push("Gary");

let casablanca = require('./Casablanca.json');

//  Let's output the casablanca object.
console.log(casablanca);

/*--------------------------------------------------------------------------------------------------------------
 *	 Less than fulfilling wasn't it. The greatest movie ever and all we get is
 *	     { data: { movies: [ [Object] ] },
 *		     about: { version: '2.30.1', serverTime: '2017/05/03 21:14:46' } }
 *		 But what did we see?
 *	     Why is the data section different from the about?
 *	         'about' has details and 'data' has movies and Object
 *	         when a member like data only contains string values, the individual members can be printed
 *	         when the member contains an Object, the Object does not get 'unwound' and 'Object' is displayed
 *	         but you can open it in debug and expand the inner layers
 *------------------------------------------------------------------------------------------------------------*/

//  The JSON object hides the actual movie data down a few levels.
//      To find the actual movie data we need to step over these fields -> casablanca.data.movies[0]
//      This gets us a reference to the movie item in the movies array underneath the data object.
//      BTW We happen to know that there is only ever one movie in the movies array.
let movie = casablanca.data.movies[0];

//  Start easy with the name of the movie and a few facts
//  the members of a JSON object are reached by variableName.fieldName
//  these members are only one level deep.
console.log("Title:  " + movie.title);
console.log("Facts:  Released: " + movie.releaseDate);
console.log("        Plot:     " + movie.simplePlot + " Year: " + movie.year);
/*
 *	    I know what you're saying, Casablanca was actually released the year before on November 26
 *	    to coincide with the Allied invasion of North Africa and the capture of Casablanca. That's true.
 *	    Then it went into general release on Jan 23, 1943 to take advantage of
 *		    the Casablanca Conference between Churchill and Roosevelt
 *	    Which means that Saturday Nov 25 there will be a 75th anniversary party at my home to celebrate.
 */

/*--------------------------------------------------------------------------------------------------------------
 *	Actor data
 *		actors is an array of objects. We'll hard code 0 for the first one and get values for that first actor
 *	   	To get to object members below the first level we just keep tacking on periods
 *	   	So the name of the first actor is reached by movie.actors[0].actorName.
 *	   	If we had not created the movie variable and just stayed with our original casablanca variable we would
 *	   	have had to do the following to get the actorName casablanca.data.movies[0].actors[0].actorName
 *	   	You can always create a new variable to detail with a particular subtree of the object.
 *------------------------------------------------------------------------------------------------------------*/
console.log("Bogie:  " + movie.actors[0].actorName + " as " + movie.actors[0].character);

/*--------------------------------------------------------------------------------------------------------------
 *	Let's randomly choose an actor.
 *		Here we use Math.random() which generates a floating point # between 0 and less than 1
 *		To convert to an index that is within the range of our actors array,
 *			we multiply the length of the array by a random number. This is still a floating point number.
 *		We use Math.floor to drop off the decimal portion and leave us with a nice integer
 *
 *		This is a frequently used pattern to find a random item in an array and to be guaranteed
 *			you do not exceed the array length
 -------------------------------------------------------------------------------------------------------------*/
let actorNum = Math.floor(Math.random() * movie.actors.length);
let actor = movie.actors[actorNum];

//  Let's see which actor was chosen and the character they played
console.log("Actor[" + actorNum + "] of " + movie.actors.length + " :  " + actor.actorName + " as " + actor.character);

/*--------------------------------------------------------------------------------------------------------------
 *	Now output the actor object.
 *  Look at the console to see how it displays all of the details
 *	Note that it prints out everything because all that we have in the actor object are strings.
 *------------------------------------------------------------------------------------------------------------*/
console.log(actor);

/*--------------------------------------------------------------------------------------------------------------
 *	Various other objects and arrays in the movie object
 *      --------------------------------------------------------------------------------------------------------
 *		Directors: more of the same. It is a very simple object
 *------------------------------------------------------------------------------------------------------------*/
console.log("Directors: " + movie.directors[0].name);

/*--------------------------------------------------------------------------------------------------------------
 *	Genres: just an array of strings.
 *		Printing movie.genres will display all entries (comma separated) in the array.
 *------------------------------------------------------------------------------------------------------------*/
console.log("Genres:    " + movie.genres.length + " " + movie.genres);

/*--------------------------------------------------------------------------------------------------------------
 *	Trivia: Just a big array of strings. We'll chose one at random
 *	If we executed
 *		console.log("Trivia:    " + movie.movieTrivia );
 *	because it is an array of strings we would get a very long list of movie trivia
 *	    separated by commas and totally unreadable.
 *------------------------------------------------------------------------------------------------------------*/
let triviaNum = randMax(movie.movieTrivia.length);
console.log("Trivia: # " + triviaNum + " " + movie.movieTrivia[triviaNum]);

/*--------------------------------------------------------------------------------------------------------------
 *	Quote gets interesting. Let's chose a random trivia object and display it
 *		For each quote there is an array of objects (movie.nameId)
 *			with the actor's IMDB Id and the character's name
 *		and a matching array of strings (movie.quote) for the quote 'character name : quote'
 *		Since a quote may include a back and forth between characters
 *			we need to loop through all lines in the quote array
 *		We could just output movie.quote since it is an array of strings. JavaScript would know how to print
 *        the individual strings but then they would wrap and not be on individual lines to be readable.
 *------------------------------------------------------------------------------------------------------------*/
let quoteNum = randMax(movie.quotes.length);
let quote = movie.quotes[quoteNum];
console.log("Quotes:    " + movie.quotes.length + " " + quote);
for (q = 0; q < quote.nameId.length; q++)
    console.log("    " + quote.quote[q]);

function randMax(max) {
    return Math.floor(Math.random() * max);
}