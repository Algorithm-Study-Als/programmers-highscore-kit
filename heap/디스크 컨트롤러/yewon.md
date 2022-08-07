# 풀이

- 요청 시점이 0 인 것 부터 먼저 제거하고 그 다음 오는 작업들의 대기 순위와 시간을 고려해서 차례로 제거 하는 방법을 생각해서 코드를 작성했는데 30%의 정답만 맞았다.
- 결국 다른 해답을 참고했다

# 해답
- 처음에 요청 시점 순으로 sort를 해준다
- totalTime 이 jobs 의 요청 시점과 같거나 크면, 실행 될 수 있는 작업이므로, jobsAvailable에 푸시
- 작업 총 시간을 계산해주고 shift
- jobsAvailable이 빈 배열일때 맨 처음에 있는 작업의 요청시점을 totalTime으로 할당 (이부분을 생각 못 했다)


# 틀린 코드
```js
function solution(jobs) {
	let totalTime = 0;
	let totalTimePerJob = 0;
	let jobsAvailable = jobs;
	const numberOfJobs = jobs.length;

	//0번째 job 실행
	let firstJobIdx = jobsAvailable.findIndex((job) => job[0] === 0);
	totalTime += jobsAvailable[firstJobIdx][1];
	totalTimePerJob += jobsAvailable[firstJobIdx][1];
	jobsAvailable.splice(firstJobIdx, 1);

	//앞 작업 소요시간 안에 대기하고 있는 태스크 들 중 가장 빠른 job 부터 실행
	while (jobsAvailable.length > 0) {
		let nextJobs = jobsAvailable
			.filter((job) => job[0] <= totalTime)
			.sort((a, b) => a[1] - b[1]);
		
		let indx = jobsAvailable.indexOf(nextJobs[0]);
		totalTime += nextJobs[0][1];
		totalTimePerJob += totalTime - nextJobs[0][0];
		jobsAvailable.splice(indx, 1);
	}
	return Math.floor(totalTimePerJob / numberOfJobs);
}
```
# 코드

```js
function solution(jobs) {
	let j = 0;
	let totalTime = 0;
	let sum = 0;
	let jobsAvailable = [];
	jobs.sort((a, b) => a[0] - b[0]);

	while (jobs.length > j || jobsAvailable.length !== 0) {
		if (jobs.length > j && totalTime >= jobs[j][0]) {
			jobsAvailable.push(jobs[j++]);
			jobsAvailable.sort((a, b) => {
				return a[1] - b[1];
			});
			continue;
		}
		if (jobsAvailable.length !== 0) {
			totalTime += jobsAvailable[0][1];
			sum += totalTime - jobsAvailable[0][0];

			jobsAvailable.shift();
		} else {
			totalTime = jobs[j][0];
		}
	}

	return Math.floor(sum / jobs.length);
}
```