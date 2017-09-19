// Question: How would you find the greatest common divisor of two numbers?

function commonDivisor(a, b) {
	let divisor = 2,
		greatestCommonDivisor = 1;

	while(a >= divisor && b >= divisor) {
		if(a%divisor === 0 && b%divisor === 0) {
			greatestCommonDivisor = divisor;
		}

		divisor++;

	}

	return greatestCommonDivisor;
}

console.log(commonDivisor(14, 21));
console.log(commonDivisor(69, 169));