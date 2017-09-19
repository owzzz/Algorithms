function missingNumbers(arr) {

	console.log(arr);

	let len = arr.length+1,
		total = 0,
		expectedSum = len* (len+1)/2;

		console.log('len', len);
		console.log('SUM', total);
		console.log('ExpectedSum:', expectedSum);

		total = arr.reduce((sum, item) => sum += item);

		console.log(total);

		return expectedSum - total;
}

function generateArray(num = 8) {
	let outArray = [];

	for(var i =0; i <=100; i++) {
		if(i !== num) {
			outArray.push(i);
		}
	}

	return outArray;
}

let largeArray = generateArray(9);

console.log(missingNumbers(largeArray));
console.log(missingNumbers([5, 2, 6, 1, 3]));