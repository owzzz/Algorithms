
function addBase(base) {

	return function(num) {
		return base + num;
	}
}

let addTo = addBase(10);


console.log(addTo(20));
console.log(addTo(35));
console.log(addTo(1));


Function.prototype.curry = () => {
	let self = this;
	return () => {
		return self.apply(this, [...arguments]);
	}
}