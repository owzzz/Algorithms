// Question: How would you merge two sorted array?


// Merge to arrays
// Set to elements to first positions in arrays
// set pointers
// Loop over arrays untill completion

	// check if first item exists and second doesnt
	// or  check if first item is less than second
	// if either clause is true push in first item and set new item
	// run while

	//if scond item exists and is less than first item then in sert that and update item


function mergeArrays(a, b) {
	let outArray = [],
		itemA = a[0],
		itemB = b[0],
		i = 1,
		j = 1;

	if(a.length === 0) return b;
	if(b.length === 0) return a;

	while(itemA || itemB) {
		if((itemA && !itemB) || itemA < itemB) {
			console.log('ITEMA', itemA);
			outArray.push(itemA);

			itemA = a[i++];

			console.log('After update itemA', itemA);
		} else {
			console.log('ITEMB', itemB);
			outArray.push(itemB);
			itemB = b[j++];

			console.log('After update itemB', itemB);
		}
	}

	return outArray;
}


console.log(mergeArrays([2,5,6,9], [1,2,3,29]));