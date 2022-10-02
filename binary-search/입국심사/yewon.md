# 풀이

## 이분탐색
- 최솟값, 최댓값이 반드시 필요함
- 최솟값, 최댓값의 중앙값을 설정하고, 각 입국심사대 당 처리할 수 있는 사람의 수를 count 에 할당한다.
- 그 count 가 n 보다 크면, 시간을 더 줄일 수 있다는 의미이므로 최댓값을 mid - 1 로 줄인다.
- 그 count 가 n 보다 작으면, 시간을 더 늘려야 한다는 의미이므로 최솟값을 mid + 1 로 늘린다.

# 코드

```js
function solution(n, times) {
  times.sort((a, b) => a - b);
  let min = 1;
  let max = n * times[times.length - 1];
  let answer = max; // 최댓값으로 설정
  
  while (min <= max) {
    let mid = Math.floor((min + max) / 2); 
    let count = 0;
    times.forEach((value) => {
      count += Math.floor(mid / value); // 각 심사관 당 몇명 처리할 수 있는지
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값
        return;
      }
    });
    if (count >= n) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return answer;
}

```
