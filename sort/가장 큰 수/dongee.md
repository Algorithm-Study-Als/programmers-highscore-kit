```jsx
function solution(numbers) {
  var answer = "";
  //내림차순 정렬
  numbers.sort((a, b) => b - a);
  //앞자리수 큰순서대로 나열
  const strArr = numbers
    .map((a) => Array.from(String(a)))
    .sort((a, b) => b[0] - a[0]);
  //숫자로 변환
  const numArr = strArr.map((a) => a.join("")).join("");

  return (answer = numArr);
}
```
