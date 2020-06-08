function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let sum = 0;
	if (a.length === 0) {
		sum = 0;
	} else {
		for (let i = 0; i < a.length; i++) {
			sum += Number.parseInt(a[i]);
		}
	}

	return sum;
}

function multiply (a) {
	let result = 1;
	for (let i = 0; i < a.length; i++) {
		result *= Number.parseInt(a[i]);
	}
	return result;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let result = 1;
	for (let i = a; i > 0; i--) {
		result *= i;
	}
	
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}