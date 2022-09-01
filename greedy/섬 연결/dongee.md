```jsx
//모든 섬 통과
function solution(n, costs) {
  var answer = 0;

  //연결해야되는 섬갯수 구하기.
  const island = [];
  costs.map((a) => {
    if (!island.includes(a[0])) {
      if (!island.includes(a[1])) {
        island.push(a[0], a[1]);
      } else {
        island.push(a[1]);
      }
    }
  });

  //오름차순정렬 후 연결선 갯수(섬연결선)만큼 자르기
  const min = costs.sort((a, b) => a[2] - b[2]).slice(0, island.length - 1);

  min.map((a) => (answer = answer + a[2]));

  return answer;
}
```
