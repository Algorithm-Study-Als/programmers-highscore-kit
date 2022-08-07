```jsx
function solution(s) {
  let answer = true;
  let arr = Array.from(s); //문자열로 배열만들기
  console.log(arr);
  let left = 0; // "(" 갯수 측정

  if (arr[0] === ")") return false; // 1번째 문자가 ")"이면 false. 종료

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      left++; //"("이면 left 1 증가
    } else if (left >= 1 && arr[i] === ")") {
      left--; // left가 1 이상이고 arr[i]가 ')' 이면 완전체이므로 left 감소.
    }
  }
  if (left === 0) {
    return true; //left가 0이면 true
  } else {
    return false; // 0이 아니면 false
  }
}
```
