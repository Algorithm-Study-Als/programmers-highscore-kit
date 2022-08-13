```js
function solution(citations) {
  let h = 0

  citations.sort((a, b) => b - a)

  while (h + 1 <= citations[h]) h++

  return h
}
```
