/**
 * Created by Edge Tech Academy on 5/5/2017.
 */
let movie = require('./Casablanca.json');

//  Let's output the casablanca object.
//console.log(movie);

/*--------------------------------------------------------------------------------------------------------------
 *	 Less than fulfilling wasn't it. The greatest movie ever and all we get is
 *	     Object {title: "Casablanca", originalTitle: "", year: "1942", releaseDate: "19430123", directors: Array(1), …}
 *		 But what did we see?
 *	         We can see some of the individual attributes of the object
 *	         when the member contains an Object, the Object does not get 'unwound' 
 *           and 'Object' is displayed
 *	         but you can open it in debug and expand the inner layers
 *           But we have a start. If you need the title you can use the variable
 *           followed by the attribute movie.title
 *           some of the attributes are arrays
 *           movie.genres is an array of the genres War, Dramma, Romance
 *           movie.actors is an array of JSON objects each one is another set of data
 * 
 *------------------------------------------------------------------------------------------------------------*/

let title = movie.title;
console.log(title);

let releaseDate = movie.releaseDate;
console.log(releaseDate);

let simplePlot = movie.simplePlot;
console.log(simplePlot);

console.log(movie.length)


console.log(movie.urlPoster);
console.log('How many actors? ' + movie.actors.length);
console.log('How many quotes? ' + movie.quotes.length);
console.log('How many Trivia? ' + movie.movieTrivia.length);

for (const genre of movie.genres) {
    console.log(genre);
}

for (const actor of movie.actors) {
    console.log(actor.actorName + " played " + actor.character);
}

let rnd = getRandomNum(movie.actors.length);
let actor = movie.actors[rnd];
console.log(actor);
console.log("The actor's name is " + actor.actorName +
    "\nplayed the part of " + actor.character +
    "\nphoto " + actor.urlPhoto);

rnd = getRandomNum(movie.quotes.length);
let quote = movie.quotes[rnd];
for (const line of quote.quote) {
    console.log(line);
}

function getRandomNum(randMax) {
    return Math.floor((Math.random() * randMax));
}

//  from here on out you are on your own