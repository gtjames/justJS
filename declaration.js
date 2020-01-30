/**
 * Created by Edge Tech Academy on 5/1/2017.
 */

let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

let words = declaration.split(" ");
let wordCnt = words.length-1;
for ( let i = wordCnt; i >= 0; i--) {
	if ( words[i].length <= 6) {
		let w1 = words.slice(0, i);
		let w2 = words.slice(i + 1);
		words = w1.concat(w2);
	}
}
console.log(words);

let keepWords = [];
for ( let i = 0; i < words.length; i++) {
	if (words[i].length > 6)
		keepWords.push(words[i])
}
//console.log(keepWords);

let i = 0;
do {
	if (words[i][0].toUpperCase() == words[i][0])       //  also .toLowerCase == [i]
		words[i] = words[i].toUpperCase();
} while (++i < words.length);

words = words.sort();
i = 0;
while (i < words.length)
	console.log(words[i++]);
