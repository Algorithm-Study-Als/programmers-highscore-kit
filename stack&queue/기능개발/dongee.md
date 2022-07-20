```jsx
function solution(progresses, speeds) {
  let answer = [];
  let finalCount = [];
  let restDays = [];
  //남은 날짜구함
  for (let i = 0; i <= progresses.length - 1; i++) {
    let restDay = 1;
    while (progresses[i] < 100) {
      progresses[i] = progresses[i] + speeds[i];
      if (progresses[i] >= 100) {
        restDays.push(restDay);
      }
      restDay = restDay + 1;
    }
  }
  // 남은 날짜 비교
  let day = 1;
  let prev = restDays[0];

  for (let i = 1; i < restDays.length; i++) {
    let curr = restDays[i];
    if (prev >= curr) {
      day = day + 1; //될때까지 더한다
    } else {
      answer.push(day);
      prev = curr; //prevㅇㅔ curr재할당
      day = 1; //그동안  쌓인 day은 1일로 리셋
    }
  }
  answer.push(day);
  return answer;
}
```
