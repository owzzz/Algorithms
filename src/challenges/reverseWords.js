function reverseWords(sentence) {
	let sent = sentence.split(' ');
	if(!sent && sent.length < 2) return sent;

	return sent.reverse().join(' ');
}

console.log(reverseWords('Owain David Llewellyn'));


function fancyReverseWords(str) {
	let outStr = [],
		wordCount = 0;

	for(var i = str.length-1; i >= 0; i--) {
		if(str[i] == '' || i == 0) {
			outStr.push(str.substr(i, wordCount+1));
			wordCount = 0;
		} else {
			wordCount++;
		}
	}

	return outStr.join(' ');
}

console.log(fancyReverseWords('Owain David Llewellyn'));