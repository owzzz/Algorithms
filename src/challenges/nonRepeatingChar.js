function firstNonRepeatChar(str) {
	let len = str.length,
		char,
		charCount = {};

	// Loop over array collect all the times a char is used
	// then loop over that object or key values checking for the first char with a value of 1

	for (var i=0; i < len; i++) {
		char = str[i];

		if(charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	for(var j in charCount) {
		if(charCount[j] === 1) {
			return j;
		}
	}

}


console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));



















































function firstNonRepeatChar(str) {
	let len = str.length,
		char,
		charCount = {};

	for(var i = 0; i < len; i++) {
		char = str[i];

		if(charCount[char]) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}

	for(var j in charCount) {
		if(charCount[j] == 1) {
			return j;
		}
	}
}


console.log(firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));