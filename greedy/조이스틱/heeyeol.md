# 풀이

1. 위아래 / 양옆 조이스틱의 경우를 나누어서 접근
2. 위아래의 경우 알파벳이 26개이므로 13번째 알파벳 기준으로 더 크면 조이스틱을 아래로 당기고, 그렇지 않으면 위로 당김
3. 양옆의 경우 중간에 A가 있느냐에 따라서 달라지므로 전부 계산해주어야 함 (이게 그리디가 맞나?)
4. name의 길이만큼 for문을 돌면서 연속되는 A를 기준으로 시작지점과 끝지점 지정
5. 오른쪽으로 먼저 moveToStartOfA 만큼 움직이고 왼쪽으로 움직여 마무리하는 경우
6. 왼쪽으로 먼저 moveToEndOfA 만큼 움직이고 오른쪽으로 움직여 마무리하는 경우를 배열에 추가
7. 그 모든 경우의 수 중 가장 작은 수와 위아래로 움직인 수를 더하여 결과 도출

# 코드

```js
function solution(name) {
  let answer = 0
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < name.length; i++) {
    const index = alphabet.indexOf(name[i])

    if (index > 13) {
      answer += 26 - index
    } else {
      answer += index
    }
  }

  // 다른사람 코드 참고
  let leftRightCountList = [name.length - 1]

  for (let startOfA = 0; startOfA < name.length; startOfA++) {
    let endOfA = startOfA + 1
    while (endOfA < name.length && name[endOfA] === 'A') endOfA++
    const [moveToStartOfA, moveToEndOfA] = [startOfA, name.length - endOfA]
    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)
    leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)
  }

  return answer + Math.min(...leftRightCountList)
}
```
