# 풀이

- for 문을 돌면서 각 element의 역할을 수행
- I 일 경우 숫자만 substring으로 빼서 anwer 배열에 푸시
- D 1일 경우 answer 의 최대값을 제거
- D -1 일 경우 answer 의 최소값을 제거
- 제거하는 명령은 answer의 length 가 0 이 아닐 경우에만 수행
- for 문 종료 후 answer 가 빈 배열이면 [0,0] 을 리턴, 아니면 최대, 최소값 리턴

# 코드

```js
function solution(operations) {
  var answer = [];
  for (let i=0; i<operations.length; i++) {
    if(operations[i].startsWith('I')) {
      let number = Number(operations[i].substring(2));
      answer.push(number);
    } else if (answer.length && operations[i] === ('D 1')) {
      let max = Math.max(...answer);
      let maxIndex = answer.indexOf(max);
      answer.splice(maxIndex, 1);
    } else if (answer.length && operations[i] === ('D -1')) {
      let min = Math.min(...answer);
      let minIndex = answer.indexOf(min);
      answer.splice(minIndex, 1);
    }
  } 
  if (!answer.length) {
    return [0,0]
  } else {
    return [Math.max(...answer), Math.min(...answer)];
  }
}
```