// Question: How would you remove duplicate members from an array?


function removeDuplicates(arr) {
	let outArr = [];

	for(var i = 0; i < arr.length; i++) {
		if(outArr.indexOf(arr[i]) == -1) {
			outArr.push(arr[i]);
		}
	}

	return outArr;
}

console.log(removeDuplicates([1,3,3,3,1,5,6,7,8,1]));