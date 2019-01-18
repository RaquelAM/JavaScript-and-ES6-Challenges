/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

function sum(){
	var total = 0
	for (var i = arguments.length - 1; i >= 0; i--) {
		total = total + arguments[i]
	}
	console.log(total)
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
