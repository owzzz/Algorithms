/*
	Question: How would you find the largest sum of any two elements?
	Answer: this is actually very simple and straight forward. Just find the two largest number and return sum of them
*/


function largestSum(arr) {
	// sort mutates
	arr.sort((a,b) => (b-a));

	return arr[0] + arr[1];
}

console.log(largestSum([5,6,18,9]));


function largestSumExtra(arr) {
	let largest = arr[0];
	let second = arr[1];

	if(arr.length<2) return null;

	if(largest<second) {
		second = arr[0];
		largest = arr[1];
	}

	for(var i = 2; i < arr.length; i++) {
		if(arr[i] > largest) {
			second = largest;
			largest = arr[i];
		} else if(arr[i] > second && arr[i] < largest) {
			second = arr[i]
		}
	}


	return largest + second;
}

console.log(largestSumExtra([5,6,18,9]));