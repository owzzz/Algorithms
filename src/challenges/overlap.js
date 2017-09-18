

let eventA = {start: 100, end: 500};
let eventB = {start: 200, end: 600};


function overlap(evtA, evtB) {

	if(evtA.start <= evtB.start && evtA.end >= evtB.start) {
		return true;
	} else {
		return false;
	}

}

console.log(overlap(eventA, eventB));
console.log(overlap(eventB, eventA));