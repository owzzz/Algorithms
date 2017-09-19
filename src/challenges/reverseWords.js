function reverseWords(str) {
	if(!str || str.length < 2 || typeof str !== 'string') return str;

	return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('Owain David Llewellyn'));


function fancyReverseWords(str) {
	let outArray = [],
		count = 0;

	for(var i = str.length-1; i >= 0; i--) {
		if(str[i] == '' || i == 0) {
			outArray.push(str.substr(i, count+1));
			count = 0;
		} else {
			count++;
		}
	}

	return outArray.join('');
}

console.log(fancyReverseWords('Owain David Llewellyn'));