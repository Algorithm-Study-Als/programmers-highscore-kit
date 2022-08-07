```jsx
function solution(jobs) {
  var answer = 0;
  let total = 0;
  let count = 0;
  //작업이 요청되는 시점 정렬
  jobs.sort((a, b) => a[0] - b[0]);
  console.log(jobs);

  //현재 작업중인것
  const curr = 0;

  while (count < jobs.length) {
    if (curr >= jobs[count][0]) {
      count += 1;
      continue;
    }
    if (jobs[count][0]) {
      curr = jobs[count][0];
    }
  }

  answer = Math.floor(total / jobs.length);
  return answer;
}
```
