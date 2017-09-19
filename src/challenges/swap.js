function swap(a,b) {
	return [b,a];
}


function swapTwoNumbers(a, b) {
	b = b-a;
	a = a+b;
	b = a-b;

	return [a,b];
}

function fancySwap(a,b) {
	console.log(`Before Fancy Swap: A: ${a} B: ${b}`);
	b = a ^ b;
	a = a ^ b;
	b = a ^ b;
	console.log(`After Fancy Swap: A: ${a} B: ${b}`);

	return [a,b];
}

console.log(swap(2,3));

console.log(swapTwoNumbers(1,2));

console.log(fancySwap(1,2));

