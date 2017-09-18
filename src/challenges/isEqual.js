
function isEqual(a, b) {
	let aProps = Object.getOwnPropertyNames(a);
	let bProps = Object.getOwnPropertyNames(b);

	console.log(aProps);
	console.log(bProps);

	if(aProps.length !== bProps.length) {
		return false;
	}

	for(var i = 0; i < aProps.length; i++) {
		let propName = aProps[i];

		console.log('propName', propName);

		if(a[propName] !== b[propName]) {
			return false;
		}
	}

	return true;
}

let objA = {name: 'owain'};
let objB = {name: 'owain'};

console.log(isEqual(objA, objB));