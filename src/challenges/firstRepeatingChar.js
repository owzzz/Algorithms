// Question: How could you find the first non repeating char in a string?

function repeatingChar(str) {
	let tempArray = [];

	console.log(str);

	for(var i = 0; i < str.length; i++) {
		if(str[i] == ' ' || tempArray.indexOf(str[i]) == -1) {
			tempArray.push(str[i]);
		} else {
			return str[i];
		}
	}
}

console.log(repeatingChar('the quick brown fox jumps then quickly blow air'));