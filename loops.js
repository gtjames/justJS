/**
 * Created by Edge Tech Academy on 4/24/2017.
 */

/*
	Demonstrating the While loop

	Print out all passing scores
 */

let studentGrades = [34, 73, 43, 94, 100, 48, 86, 38, 77];

let student = 0;
while (student < studentGrades.length) {
	if (studentGrades[student] >= 70) {
		console.log(`Student ${student} had a passing grade of ${studentGrades[student]}`);
	}
	student++;
}

let name = "edge tech academy";
let i = 0;
while (name.charAt(i) != 't' && i < name.length) {
	console.log("found: " + name.charAt(i));
	i++;
}


/*-------------------------------------------------------------------------------------------------
 *  Demonstrating the Do...While loop
 *
 *  Stay in this loop until we get a random number greater than 97
 *-------------------------------------------------------------------------------------------------*/
let rand;
let count = 0;
do {
	count++;
	rand = Math.floor((Math.random() * 100));
	console.log(rand);
} while (rand < 97);

console.log("Traversed loop " + count + " times \n" +
	"Before we found a random number greater than 97." +
	"It was " + rand);

/*-------------------------------------------------------------------------------------------------
 *    Demonstrating the For loop
 *
 *  Let's sum up all numbers between o and 1000
 *-------------------------------------------------------------------------------------------------*/
let sum = 0;
for (let i = 0; i <= 1000; i++) {
	sum += i;
}
console.log("The sum of all numbers below 1000: " + sum);

/*-------------------------------------------------------------------------------------------------
 *	Here we see how the break and continue statements can exit a loop early or skip lines of code
 *
 *	Let's introduce a JSON object with a collection of students and their respective scores
 *-------------------------------------------------------------------------------------------------*/
let testScores = {
	classList: [{
			'name': "Adam",
			'score': 91
		}, {
			'name': "Ben",
			'score': 80
		},
		{
			'name': "Cecil",
			'score': 31
		}, {
			'name': "Deb",
			'score': 86
		},
		{
			'name': "Eve",
			'score': 100
		}, {
			'name': "Frank",
			'score': 75
		},
		{
			'name': "Gene",
			'score': 43
		}, {
			'name': "Hank",
			'score': 67
		},
		{
			'name': "Iris",
			'score': 98
		}, {
			'name': "Jerrie",
			'score': 12
		},
		{
			'name': "Ken",
			'score': 100
		}, {
			'name': "Lou",
			'score': 100
		},
		{
			'name': "Mary",
			'score': 49
		}
	]
};

let passingScores = 0;
let passingStudents = [];
for (let i = 0; i < testScores.classList.length; i++) {
	if (testScores.classList[i].score < 70)
		continue;
	passingScores++;
	passingStudents.push(testScores.classList[i].name);
}
console.log("There were " + passingScores + " students who passed.\n" +
	"Passing Students: " + passingStudents);

//	find the first perfect scsore and exit then the loop
for (let i = 0; i < testScores.classList.length; i++) {
	if (testScores.classList[i].score === 100) {
		console.log("The first perfect score was " + testScores.classList[i].name);
		break;
	}
}

/*-------------------------------------------------------------------------------------------------
 *	Up till now we have used the standard for loop
 *		initiailize, test, do the body of the for loop, and increment
 *
 *		We also have a 'for in' and a 'for of' loop style
 *		we will use our same testScores variable from above
 *
 *-------------------------------------------------------------------------------------------------*/
for (let student in testScores.classList) {
	console.log("student " + student);
}

for (let student of testScores.classList) {
	console.log("student " + student + " name: " + student.name + " score: " + student.score);
}
let highestScore = {};
highestScore.score = 0;
for (let student of testScores.classList) {
	if (student.score > highestScore.score)
		highestScore = student;
}
console.log("good student " + highestScore.name);

let countries = {
	list: [{
			name: 'Anguilla',
			captital: 'The Valley',
			pop: 13000
		},
		{
			name: 'Mexico',
			captital: 'Mexico City',
			pop: 13000000
		},
		{
			name: 'Tunisia',
			captital: 'Tunis',
			pop: 800000
		},
		{
			name: 'The Netherlands',
			captital: 'Den Haag',
			pop: 3000000
		}
	]
};

for (let x in countries.list) {
	console.log("x " + x);
	for (let y in x)
		console.log("y " + y);
}

for (let x of countries.list) {
	console.log("x " + x);
	for (let y in x)
		console.log("y " + y + " " + x[y]);
}

/*-------------------------------------------------------------------------------------------------
 *	How about something a little more challenging
 *  When it comes to loops and breaks
 *
 *  How many primes are there less than a particular number?
 *
 *      BTW we are getting all of the primes less than 1,000,003
 *      Because it is the first prime north of 1M
 *      and that allows us to calculate the factors of all numbers less the 1 Trillion
 *          (actually 1,000,006,000,009)
 *
 *-------------------------------------------------------------------------------------------------*/
let max = 1000003;
let primes = getPrimes(max);
let primeCount = primes.length;

console.log("There are " + primeCount + " primes less than " + max);

/*-------------------------------------------------------------------------------------------------
 *
 *  What are the factors of a number below 1,000,000,000,000
 *
 *-------------------------------------------------------------------------------------------------*/
primeTest(5191);
primeTest(123456789);
primeTest(987654321);
primeTest(660343699);
primeTest(999983 * 1000003);
primeTest(9811 * 9973);
primeTest(343 * 625 * 625 * 243 * 251 * 251);
primeTest(999999999989);
primeTest(13532385396179);
primeTest(11232017);

let month = [2, 3, 5, 7, 11];
let day = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
let factors = [];

for (var y = 2001; y < 2100; y++) {
	if (!findPrimeFactors(y, primes, [])) continue;
	if (!findPrimeFactors(y - 2000, primes, [])) continue;
	for (var m of month) {
		for (var d of day) {
			if (!findPrimeFactors(m * 100 + d, primes, [])) continue;
			let prime1 = findPrimeFactors(m * 1000000 + d * 10000 + y, primes, []);
			let prime2 = findPrimeFactors(y * 10000 + m * 100 + d, primes, []);

			if (prime1) console.log(m + "-" + d + "-" + y);
			if (prime2) console.log(y + "-" + m + "-" + d);
			if (prime1 && prime2) console.log("!!");
		}
	}
}

var x = "Play it, Sam. Play ‘As Time Goes By.’".substring(20, 35);
console.log(x);
/*-------------------------------------------------------------------------------------------------
 *  Convenience method to test numbers
 -------------------------------------------------------------------------------------------------*/
function primeTest(number) {
	let factors = [];
	let prime = findPrimeFactors(number, primes, factors);
	console.log("The factors of " + number + " are: " + collectTerms(factors) + ((prime) ? " Boo Ya! This baby is prime" : ""));
}

/*-------------------------------------------------------------------------------------------------
 *
 *  take a number and an array of primes and determine all prime factors for that number
 *  return true if the number itself is prime
 *
 *-------------------------------------------------------------------------------------------------*/
function findPrimeFactors(num, primes, factors) {
	let sqrtNum = Math.floor(Math.sqrt(num));
	for (let i = 0; i < primes.length; i++) {
		if (primes[i] > sqrtNum) { //  We've gone through all of the primes < the SQRT of the number
			factors.push(num); //  so this number must be prime!
			break; //  get out of the loop and take the not prime return at the bottom
		} else if ((num % primes[i]) == 0) { //  is the number evenly divisible by a prime number
			factors.push(primes[i]); //  Looks like we found a prime factor of our number, save it
			findPrimeFactors(num / primes[i], primes.slice(i), factors); //  recursively consume all other factors
			break; //  all factors consumed, leave
		}
	}
	return (factors.length == 1);
}

/*-------------------------------------------------------------------------------------------------
 *
 *  Get a list of all primes below a max number
 *  and do it efficiently. This is my own design and I think quite elegant!
 *
 *-------------------------------------------------------------------------------------------------*/
function getPrimes(max) {
	let sieve = [];
	let primes = [2]; //  save 2 as prime, it is the only even prime and we now only look at odd numbers
	for (let i = 3; i <= max; i += 2) { //  start at 3 and do a +2 increment to ignore all even
		if (!sieve[i]) { //  sieve == false if the number is prime
			primes.push(i); //  if false sieve[i] has not yet been marked -- it is prime
			for (let j = 3 * i; j <= max; j += 2 * i) { //  just mark the odd multiples of i, thus ignoring even numbers
				sieve[j] = true; //  true : number is composite: not a prime
			}
		}
	}
	return primes;
}

/*-------------------------------------------------------------------------------------------------
 *
 *  take the factors of a number and collect the terms together
 *  1024 = 2*2*2*2*2*2*2*2*2*2 looks better as 2^10
 *
 *-------------------------------------------------------------------------------------------------*/
function collectTerms(factors) {
	let collect = "",
		power;
	for (let i = 0; i < factors.length; i++) {
		power = 1; //  always start with the factor raised to the power of 1
		let base = factors[i]; //  base factor to compare the next factors against
		while (base == factors[i + 1]) { //  does this factor match a previous factor?
			power++; //  it does so increase the power to which that number s/b raised
			if (++i == factors.length) //  go to the next factor only if we are not at the end of the list
				break; //  we are at the end, so get out of the loop
		}
		collect += ((collect.length == 0) ? "" : " × ") + base + ((power > 1) ? "^" + power : "");
	}
	return collect;
}