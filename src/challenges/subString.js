// Question: How can you match substring of a sting?

function subString(str, substr) {
	return str.match(substr) !== null ? true : false;
}

console.log(subString('The Boy Jumped High', 'Jump'));


function subStringComplex(str, subStr) {
	let len = str.length,
		word = '',
		i = 0,
		j = 0;

		for(; i < len; i++) {
			if(str[i] === subStr[j]) {
				word += subStr[j];
				if(word === subStr) return true;
				j++;
			} else {
				word = [];
				j = 0;
			}
		}

		return false;
}

console.log(subStringComplex('The Boy Jumped High', 'Jumped'));
console.log(subStringComplex('abbcdabbbbbck', 'bbbck'));