function solution(priorities, location) {
	let answer = [];
	const prioritiesWithIndex = priorities.map((priority, index) => {
		return [priority, index];
  });
  
  console.log(prioritiesWithIndex); 

	while (prioritiesWithIndex.length) {
		const first = prioritiesWithIndex.shift();
		const max = Math.max(...prioritiesWithIndex.map((x) => x[0]));
		if (first[0] >= max) {
			answer.push(first);
			if (first[1] === location) break;q
		} else {
			prioritiesWithIndex.push(first);
		}
	}

	return answer.findIndex((element) => element[1] === location) + 1;
}
