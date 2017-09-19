// Question: How would you reverse a string

function reverse(string) {
	return string.split('').reverse().join('');
}

console.log(reverse('Owain'));


function fancyReverse(string) {
	let outArray = [];


	for(var i = string.length; i >= 0; i--){
		console.log(i);
		outArray.push(string[i]);
	}

	return outArray.join('');
}

console.log(fancyReverse('Llewellyn'));

String.prototype.reverse = function() {
	if(!this && this.length < 2) return this;

	return this.split('').reverse().join('');
}

console.log('David'.reverse());