// Question: How would you check if a word is a palindrome

// word must be odd number

function isPalindrome(str) {
	let copyStr = str.split('').reverse().join('');

	console.log(str);
	console.log(copyStr);
	console.log(str === copyStr);

	if(str === copyStr) {
		return true
	} else {
		return false
	}
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('toyota'));


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


console.log(isPalinDromeFancy('madam'));
console.log(isPalinDromeFancy('toyota'));