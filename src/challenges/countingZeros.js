// Question: Count Total number of zeros from 1 upto n?

function countingZeros(arr) {
	let count = 0;

	for(var i= 0; i < arr.length; i++) {
		if(arr[i] === 0) {
			count++;
		}
	}

	return count;
}

console.log(countingZeros([1,2,3,1,0,0,2,0,0,2,1,8,7,0]));



function countZero(num){
	let count = 0;

	while(num > 0) {
		count += Math.floor(num/10);
		console.log('num before: ', num);
		num = num / 10;
		console.log('num after: ', num);
	}

	return count;
}

console.log(countZero(2014));
console.log(countZero(100));

