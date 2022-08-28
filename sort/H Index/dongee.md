```jsx
function solution(citations) {
  var answer = 0;
  //논문 인용 내림차순 정렬
  citations.sort((a, b) => b - a);
  let hIndex = 0;
  // 내가쓴 논문수보다 인용수가 작거나 같을 경우 종료
  while (hIndex + 1 <= citations[hIndex]) {
    hIndex++;
  }

  return hIndex;
}
```
