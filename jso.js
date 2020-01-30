/**
 * Created by Edge Teach Academy on 5/1/2017.
 */

function Student (firstName, lastName, age, year) {
	return {
		firstName:  firstName,
		lastName:   lastName,
		age:        age,
		year:       year,
		fullName: function () {
			return this.firstName + " " + this.lastName;
		}
	};
}

let student = Student('Gary', 'James', 63, 2017);
console.log(student.fullName() + ' ' + student.age );
