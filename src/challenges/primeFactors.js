//Question: How could you find all prime factors of a number?

function primeFactors(num) {
	let factors = [],
		divisor = 2;

	while(num >= divisor) {
		if(num % divisor === 0) {
			factors.push(divisor);
			num = num / divisor;
		} else {
			divisor++;
		}
	}

	return factors;
}


console.log(primeFactors(69));