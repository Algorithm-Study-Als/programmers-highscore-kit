```jsx
function solution(name) {
  var answer = 0;
  //알파벳 배열 만들기
  const alphabetList = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  const nameArr = name.split("");

  //A랑 가까운지||Z랑 가까운지 판단
  //A이면 조작 놉,Z이면 왼쪽으로 조작 1
  //A와 가까우면 오른쪽 으로 조작 Z랑 가까우면 왼쪽으로으로 조작
  //조작할때마다 count up
  nameArr.map((a) => {
    const idx = alphabetList.indexOf(a);

    if (idx < 13) {
      answer = answer + idx;
    } else {
      const back = 27 - idx;

      answer = answer + back;
    }
  });

  return answer;
}
```
