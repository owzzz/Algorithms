// Question: How would you remove remove a duplicate char


function removeDuplicateChar(str) {
	let tempArray = [];

	for(var i = 0; i < str.length; i++) {
		if(str[i] == ' ' || tempArray.indexOf(str[i]) == -1) {
			tempArray.push(str[i]);
		}
	}

	return tempArray.join(' ');
}

console.log(removeDuplicateChar('Learn more javascript dude'));

function RemoveDuplicatesExtra(str) {
	let outStr = [],
		ltrCnt = {};


	for(var i =0; i < str.length; i++) {
		if(ltrCnt[str[i]] !== undefined && ltrCnt[str[i]] !== ' ') {
			ltrCnt[str[i]]++;
		} else {
			ltrCnt[str[i]] = 1;
		}
	}

	for(var w in ltrCnt) {
		if(ltrCnt[w] === 1) {
			outStr.push(w);
		}
	}


	console.log(' Count obj', outStr.join());

	return outStr.join('');

}

console.log(RemoveDuplicatesExtra('Learn more javascript dude'));