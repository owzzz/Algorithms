function isTwoPassed() {
	let args = Array.prototype.slice.call(arguments);
	console.log(args);
	return args.indexOf(2) != -1;
}

console.log(isTwoPassed(1,2,3,4,5,6,7,8,9));