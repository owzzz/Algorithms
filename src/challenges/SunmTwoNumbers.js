// Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?

function sumFinder(arr, num) {

	for(var i =0; i < arr.length-1; i++){
		for(var j = i+1; j < arr.length-1; j++) {
			if(arr[i] + arr[j] === num) {
				return true;
			}
		}
	}

	return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9));

console.log(sumFinder([6,4,3,2,1,7], 2));