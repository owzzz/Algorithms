
function addNestedNumbers(arr, total) {
	let curItem,
		i = 0;

	if(arr.length === 0) return total;

	for(; i<arr.length; i++) {
		curItem = arr[i]

		if(typeof arr[i] == 'number') {
			console.log('total before', total);
			console.log('current number to add', arr[i]);
			total += arr[i];
			console.log('total after', total);
		} else {
			addNestedNumbers(arr[i], total);
		}
	}

	return total;
}

console.log(addNestedNumbers([1,4,[1,6,5,4],2,[5,9,7,8],6,5], 0))