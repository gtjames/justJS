/**
 * Created by Edge Tech Academy on 4/18/2017.
 */

const GRAVITY_IN_MPSS = 9.8;

console.log(GRAVITY_IN_MPSS);

//  attempting to assign a value to a const
//GRAVITY_IN_MPSS = 32;

/* In JavaScript, execution ends when
	when an error is throw. The next
	line will not get executed
 */
console.log(GRAVITY_IN_MPSS);

let radius = 3;
let pi = Math.PI;
let area = Math.pow(radius,2) + pi;
console.log("Circle Area = " + area);
console.log("Circle Area = " + area.toFixed(2));

/*
 *		Let's look at some basics of a simple piece of JavaScript.
 */
let myMassOnEarth = 147;
let planet = 'Mars';            //  This planet variable is different from the one IN the myWeightOn function
myWeightOnMars = myWeightOn(planet, myMassOnEarth);
console.log ('If I weigh ' + myMassOnEarth + ' on the Earth. I will weigh ' + myWeightOnMars + ' on ' + planet);
planet = 'Venus';
console.log ('If I weigh ' + myMassOnEarth + ' on the Earth. I will weigh ' +
										myWeightOn(planet, myMassOnEarth) + ' on ' + planet);

if ( myWeightOn("Mars", myMassOnEarth) > myWeightOn("Venus", myMassOnEarth))
	console.log("Let's go to Venus");
else
	console.log("Mars is nice this time of year");

/*
		myWeightOn
			given a planet and a mass this function will return you weight on the given sphere.
 */
function myWeightOn(planet, massOnEarth) {
	let ratio;          //  this value is only visible inside this function
	switch (planet) {
		case    "Sun"       :	ratio = 27072;		break;
		case    "Mercury"   :	ratio = 0.378;		break;
		case    "Venus"     :   ratio = 0.907;		break;
		case    "Moon"      :   ratio = 0.166;		break;
		case    "Mars"      :   ratio = 0.377;		break;
		case    "Jupiter"   :   ratio = 2.528;		break;
		case    "Saturn"    :   ratio = 1.064;		break;
		case    "Uranus"    :   ratio = 0.889;		break;
		case    "Neptune"   :   ratio = 1.125;		break;
		case    "Pluto"     :   ratio = 0.067;		break;
	}
	return massOnEarth * ratio;
}