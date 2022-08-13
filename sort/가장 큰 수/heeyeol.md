```js
function solution(numbers) {
  const strings = numbers.map((number) => number.toString())

  strings.sort((a, b) => Number(b + a) - Number(a + b))

  const answer = Number(strings.join('')) === 0 ? '0' : strings.join('')

  return answer
}
```
