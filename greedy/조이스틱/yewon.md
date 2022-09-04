```js
function solution(name) {
  var answer = 0;
  const length = name.length;
  name.split("").forEach((letter) => (answer += getNumberOfUpDownMoves(letter)));

  //다른 풀이참고
  let leftRightCountList = [length - 1];
  for (let startOfA = 0; startOfA < name.length; startOfA++) {
    let endOfA = startOfA + 1;
    while (endOfA < length && name[endOfA] === "A") endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA];
    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA) /
      leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA);
  }
  answer = answer + Math.min(...leftRightCountList);

  return answer;
}

function getNumberOfUpDownMoves(letter) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVYZ";
  const index = letters.indexOf(letter);
  return Math.min(index, 26 - index);
}
```
