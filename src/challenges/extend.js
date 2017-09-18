// Create a function that takes an object as first argument and all subsequent objects passed in will be merged into the first one



let extend = function(obj) {

	return function(obj, ...params) {
		let length = arguments.length;

		if(length < 2 || obj === null) return obj;

		for(let i = 1; i < length; i++) {
			let source = arguments[i]
			let keys = Object.keys(source);

			for(let i = 0; i < keys.length; i++) {
				let key = keys[i];
				obj[key] = source[key];
			}
		}

		return obj;

	}
}

let val = extend()({name: 'Owain'}, {lastName: 'Llewellyn'});
