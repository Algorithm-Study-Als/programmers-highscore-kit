```js
function solution(jobs) {
  const lengthJobs = jobs.length
  let result = 0

  jobs.sort((a, b) => a[0] - b[0])

  let currentTime = 0
  let runningTaskEndTime = 0

  const priorityQueue = []

  while (priorityQueue.length !== 0 || jobs.length !== 0) {
    const startTimeOfNextJob = jobs[0] && jobs[0][0]

    if (currentTime >= startTimeOfNextJob) {
      // jobs 배열에서 가장 첫번째 순서 뽑아냄
      const jobCandidate = jobs.shift()
      // 우선순위 큐 태스크에 넣음
      priorityQueue.push(jobCandidate)
      // 쌓여있는 우선순위 큐 태스크 중 소요시간이 가장 빠른 순서대로 정렬
      priorityQueue.sort((a, b) => a[1] - b[1])
      // continue;
    }

    if (currentTime >= runningTaskEndTime && priorityQueue[0] && currentTime >= priorityQueue[0][0]) {
      const nextTask = priorityQueue.shift()
      runningTaskEndTime = currentTime + nextTask[1]

      result += runningTaskEndTime - nextTask[0]
    }

    currentTime++
  }

  return Math.floor(result / lengthJobs)
}

const jobs = [
  [0, 3],
  [2, 6],
  [1, 9],
]
// expect: 9

console.log(solution(jobs))
```
