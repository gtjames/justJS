function loop(jump) {
    let date = new Date();
    console.log(date);
    let hour = date.getHours()
    let secs = date.getSeconds()

    let count = 0;
    for (let i = hour; i < secs; i+=jump) {
        console.log(i);
        count++;
    }
    return count;
}

let counter = loop(12);
console.log(`Looped ${counter} times`)

counter = loop(1);
console.log(`Looped ${counter} times`)

counter = loop(5);
console.log(`Looped ${counter} times`)



let movie = require('./Casablanca.json');

let title = movie.title;
console.log(title);

let releaseDate = movie.releaseDate;
console.log(releaseDate);

for (let genre of movie.genres) {
    console.log(genre);
}

console.log(movie.movieTrivia[75]);

movie.genres.forEach(g => console.log(`Casablanca Genres: ${g}`))

console.log(`how many quotes ${movie.quotes.length}`)
console.log(`how much trivia ${movie.movieTrivia.length}`);

console.log('actor[0] :>> ', movie.actors[0].actorName);
console.log('actor[6] :>> ', movie.actors[6].actorName);

for (var i = 0; i < movie.actors.length; i++) {
    console.log('actor name :>> ', movie.actors[i].actorName);
}

movie.actors.forEach(a => console.log(`${a.actorName} played ${a.character}`));

for (let i = 0; i < 5; i++) {
    console.log(movie.movieTrivia[i]);
}

let resume = {
    name: "Gary James",
    bio: "Able to leap tall building in a single bound",
    previousEmployers: [{
            name: "Edge Tech",
            howLong: 4,
            title: "Instructor"
        },
        {
            name: "James Gang",
            howLong: 1,
            title: "Owner"
        },
        {
            name: "Colonial Savings",
            howLong: 2,
            title: "Data Czar"
        }
    ],
    strengths: ["hard worker", "fast learner", 'honest'],
    school: ['edge tech', 'Orem High Shcool'],
}

console.log(`I am ${resume.name} and here's what I do ${resume.bio}`);

resume.previousEmployers.forEach(emp =>
    console.log(`i worked at ${emp.name} for ${emp.howLong} years as a ${emp.title}`));