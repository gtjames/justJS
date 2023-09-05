/**
 * Created by Gary James on 4/24/2017.
 */

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
let max = 1000003;			//		 71751894;
let primes = getPrimes(max);
let primeCount = primes.length;
for (let i = primeCount - 1; i > primeCount - 20; i--)	console.log(primes[i])
console.log("There are " + primeCount + " primes less than " + max);

/*-------------------------------------------------------------------------------------------------
 *
 *  What are the factors of a number below 1,000,000,000,000
 *
 *-------------------------------------------------------------------------------------------------*/
primeTest(86963777);
primeTest(5191);
primeTest(123456789);
primeTest(987654321);
primeTest(660343699);
primeTest(999983 * 1000003);
primeTest(9811 * 9973);
primeTest(999999999989);
primeTest(13532385396179);
primeTest(11232017);

let month = [2, 3, 5, 7, 11];
let day = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
let factors = [];

//	find PRIME dates for the 21st century
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
		if (primes[i] > sqrtNum) { 				//  We've gone through all of the primes < the SQRT of the number
			factors.push(num); 					//  so this number must be prime!
			break; 								//  get out of the loop and take the not prime return at the bottom
		} else if ((num % primes[i]) === 0) { 	//  is the number evenly divisible by a prime number
			factors.push(primes[i]); 			//  Looks like we found a prime factor of our number, save it
			findPrimeFactors(num / primes[i], primes.slice(i), factors); //  recursively consume all other factors
			break; 								//  all factors consumed, leave
		}
	}
	return (factors.length === 1);
}

/*-------------------------------------------------------------------------------------------------
 *
 *  Get a list of all primes below a max number
 *  and do it efficiently. This is my own design and I think quite elegant!
 *		composite 	if the value at position X is true then the number X is a composite number
 * 		primes		the end product. A list of all primes <= max
 *
 *-------------------------------------------------------------------------------------------------*/
function getPrimes(max) {
	let composite = [];
	let primes = [2]; 											//  save 2 as prime, it is the only even prime and we now only look at odd numbers
	for (let nextNum = 3; nextNum <= max; nextNum += 2) { 		//  start at 3 and do a +2 increment to ignore all even
		if (!composite[nextNum]) { 								//  sieve == false if the number is prime
			primes.push(nextNum); 								//  if false sieve[i] has not yet been marked -- it is prime
			for (let j = 3 * nextNum; j <= max; j += 2 * nextNum) { //  just mark the odd multiples of nextNum, thus ignoring even numbers
				composite[j] = true; 							//  true : number is composite: not a prime
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
		power = 1; 							//  always start with the factor raised to the power of 1
		let base = factors[i]; 				//  base factor to compare the next factors against
		while (base === factors[i + 1]) { 	//  does this factor match a previous factor?
			power++; 						//  it does so increase the power to which that number s/b raised
			if (++i === factors.length) 	//  go to the next factor only if we are not at the end of the list
				break; 						//  we are at the end, so get out of the loop
		}
		collect += ((collect.length === 0) ? "" : " × ") + base + ((power > 1) ? "^" + power : "");
	}
	return collect;
}