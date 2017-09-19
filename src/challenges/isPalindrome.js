function isPalinDrome(str) {
	let flippedStr = str.split('').reverse().join('');

	if(flippedStr === str) {
		return true;
	}
	return false;
}

console.log('----------------------------');
console.log(isPalinDrome('madam'));
console.log(isPalinDrome('toyota'));

function isPalinDromeComplex(str) {
	let char,
		i = 0,
		j = str.length-1;

	for(; i < j;) {
		if(str[i] === str[j]) {
			i++;
			j--;
		} else {
			return false;
		}
	}

	return true;
}

console.log('----------------------------');
console.log(isPalinDromeComplex('madam'));
console.log(isPalinDromeComplex('bomob'));
console.log(isPalinDromeComplex('toyota'));

function isPalinDromeFancy(str) {
	let copyStr = str,
		idx = 0;

	for(var i = str.length-1; i >= 0; i--) {
		if(copyStr[i] === str[idx]) {
			idx++;
		} else {
			return false;
		}
	}

	return true;


}

console.log('----------------------------');
console.log(isPalinDromeFancy('madam'));
console.log(isPalinDromeFancy('bomob'));
console.log(isPalinDromeFancy('toyota'));

