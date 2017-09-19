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
		elA = a[0],
		elB = b[0],
		i = 1,
		j = 1;

	if(a.length === 0) return b;
	if(b.length === 0) return a;

	while(elA || elB) {
		if((elA && !elB) || elA < elB) {
			outArray.push(elA);
			elA = a[i++];
		} else {
			outArray.push(elB);
			elB = b[j++];
		}
	}

	return outArray;
}


console.log(mergeArrays([2,5,6,9], [1,2,3,29]));

