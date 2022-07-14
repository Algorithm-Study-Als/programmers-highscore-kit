# 풀이

1. 소요시간을 담은 새로운 배열
2. 현재까지 가장 긴 소요시간, 해당 소요 시간동안 완료한 태스크를 담은 변수
3. 조건에 맞게 스택

# 코드

```js
function solution(progresses, speeds) {
  let answer = [];

  const takenDays = progresses.map((progress, index) => {
    let x = progress;
    let y = 0;

    while (x < 100) {
      x += speeds[index];
      y++;
    }

    return y;
  });

  let max = takenDays[0];
  let tasks = 0;

  for (let i = 0; i < takenDays.length; i++) {
    if (takenDays[i] > max && i !== 0) {
      answer.push(tasks);
      tasks = 1;
      max = takenDays[i];
      if (takenDays[i + 1] === undefined) answer.push(1);
    } else {
      tasks++;
      if (takenDays[i + 1] === undefined) answer.push(tasks);
    }
  }

  return answer;
}

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];
// [2, 1]

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
// [1, 3, 2]

console.log(solution(progresses, speeds));
```

# 다른 사람의 방식

## 얻을 것

- 소요 시간을 담은 새로운 배열을 만든 방식을 Math 메소드로도 구현할 수 있음
- for문 내에 변수를 i, j 두개 담아서 활용할 수 있음 (더 심플)

```js
function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  console.log(days);
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
```
