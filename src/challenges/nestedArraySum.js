var arr = [1, [2, 1, 3, [43, 2]]];


function sum(arr, total) {
	total = total || 0;

	if(arr.length === 0) return total;

	let curItem = arr[0];

	if(typeof curItem === 'number') {
		return sum(arr.slice(1), total + curItem);
	} else {
		return sum(curItem, total);
	}
}


console.log(sum(arr));