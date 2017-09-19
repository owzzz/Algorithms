// Question: How would you remove duplicate members from an array?


function removeDuplicates(arr) {
	let outArray = [];

	for(var i=0; i < arr.length; i++) {
		if(outArray.indexOf(arr[i]) === -1) {
			outArray.push(arr[i]);
		}
	}

	return outArray;
}

console.log(removeDuplicates([1,3,3,3,1,5,6,7,8,1]));