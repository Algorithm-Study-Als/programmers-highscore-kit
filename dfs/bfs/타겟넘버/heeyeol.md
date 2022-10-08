```js
function solution(numbers, target) {
  let answer = 0

  function dfs(depth, ac) {
    console.log(depth, ac)
    //depth와 length 비교해서 작을 때만 재귀시킴
    if (depth < numbers.length) {
      //현재 numbers의 값을 더하거나 뺀 값을 다시 dfs로 재귀시킴
      dfs(depth + 1, ac + numbers[depth])
      dfs(depth + 1, ac - numbers[depth])
    } else {
      //추산된 값과 타겟이 같다면 answer의 값을 증가시킴
      if (ac === target) {
        answer++
      }
    }
  }
  //초기값 설정하고 시작
  dfs(0, 0)
  return answer
}

const numbers = [1, 2]
const target = 3

solution(numbers, target)
```
