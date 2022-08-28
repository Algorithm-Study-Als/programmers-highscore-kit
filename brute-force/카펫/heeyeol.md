```js
function solution(brown, yellow) {
  let answer = []
  let sum = brown + yellow

  for (let height = 3; height < brown / 2; height++) {
    if (sum % height === 0) {
      let weight = sum / height
      if ((height - 2) * (weight - 2) === yellow && weight >= height) {
        answer = [weight, height]
      }
    }
  }

  return answer
}
```

- 스스로 해결하지 못함
