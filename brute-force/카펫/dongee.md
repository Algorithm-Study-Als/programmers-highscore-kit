```jsx
function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow;
  let horizons = [];
  for (let i = 1; i < sum + 1; i++) {
    if (sum % i === 0) {
      horizons.push(i);
    }
  }
  console.log(horizons);

  if (horizons.length % 2 === 0) {
    const t = parseInt(horizons.length / 2);
    // console.log("몫",t)
    const a = horizons[t];
    const b = horizons[t - 1];
    return answer.concat(a, b);
  } else {
    const t = parseInt(horizons.length / 2);
    const c = horizons[t];
    return answer.concat(c, c);
  }

  return answer;
}
```
