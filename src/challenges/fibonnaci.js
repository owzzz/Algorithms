function fibonacci(num) {
	let fib = [0,1];

	for(var i = 2; i<=num; i++) {
		fib[i] = fib[i-1]+fib[i-2];

	}

	return fib[num];
}

function fibonacci(num) {
	let fibo = [0, 1];

	for(let i = 2; i < num; i++) {
		fibo[i] = fibo[i-1]+fibo[i-2];
	}

	return fibo[num];
}


function fiboRecursive(num) {
	if(num < 2) return 1;

	return fiboRecursive(num-2) + fiboRecursive(num-1);
}

console.log(fiboRecursive(7))
