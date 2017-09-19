// Question: If you have a function that generate
// random number between 1 to 5 how could u generate random number 1 to 7 by using that function?


function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function random5() {
	return Math.round(1 + Math.random() * 2);
}

function random7() {
	return Math.round(5 + random5() / 5 * 2);
}

console.log(random(1,7));


console.log(random5());

console.log(random7());