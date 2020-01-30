/**
 * Created by Edge Tech Academy on 4/26/2017.
 */

let json = {one:['a','b','c','d'], two: 'test', three:{four:[1,2,3,4], five:'six', seven:{'eight':'nine'}}};
console.log (json);

let test = ['a','b','c','d'];
test.push('name');
test.push('age');
console.log(test);

let r = -400;
for (let i = 0; i < 4; i++) {
	let a = r>>>i;
	let b = r << i;
	let c = r >> i;
	console.log("test: " + a + " " + a .toString(16) + " " + b + " " + c);
}

let arrayOfInts1 = [1,2,3,4,5,6,7,10,9,8,7,6,5];
let arrayOfInts2 = [91,82,63,54,45,36,27,110,19,28,37,46,65];
let searchfor = 189;
let foundIt = false;

search:
	for ( let i = 0; i < arrayOfInts1.length; i++) {
		for ( let j = 0; j < arrayOfInts1.length; j++ ) {
			if ( arrayOfInts1[i] * arrayOfInts2[j] == searchfor ) {
				foundIt = true;
				break search;
			}
		}
	}
console.log(foundIt);

let names = [];
names[9] = 'ajems';
let fullPathName = "C:\\Projects\\firstJava\\Version.1.2.0\\src\\FirstClass.js";
let slashIndex = fullPathName.lastIndexOf ("\\");			// find the last slash
let fullFileName = fullPathName.substring (slashIndex + 1);	// found slash now go 1 more  char
console.log ("File Name is: " + fullFileName);
let tokens = fullPathName.split ("\\");
for (let i = 0; i < tokens.length-1; i++)
	console.log (i + " " + tokens[i]);

console.log(new Date());

let ages = [3, 10, 18, 20];

function checkAdult(age) {
	return age >= 18;
}

function testing(age) {
	console.log('My age is', age);
}
let a = ages.some(checkAdult);
let b = ages.every(checkAdult);
let c = ages.filter(checkAdult);
let d = ages.find(checkAdult);

 d = ages.find(z => z >= 18);
ages.forEach(testing)
