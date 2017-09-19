/*

Expected output:

0, 12, 0, 100
0, 12, 1, 100
0, 12, 2, 100
...
0, 12, 100, 100
1, 12, 0, 100
1, 12, 1, 100
...
12, 12, 100, 100

*/


function findOutput() {
	let xStrt = 0,
		xEnd = 12,
		yStrt = 0,
		yEnd = 100;

	for(; xStrt <= xEnd; xStrt++){
		console.log('parent', xStrt);
		console.log('yStart', yStrt);
	    for(yStrt = 0; yStrt <= yEnd; yStrt++){
	    	console.log('child');
	    	console.log(xStrt, xEnd, yStrt, yEnd);
	    }
	}
}

console.log(findOutput());
