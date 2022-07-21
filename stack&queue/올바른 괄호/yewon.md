# 해답

- s 스트링을 ()로 나누고 (split 메서드) 빈 스트링이거나 더이상 안 나눠질 때까지 반복
- 최대한 나눈 후 빈 배열이면 true, 아니면 false 리턴

# 풀이

- 기존 내 해답이 테스트는 통과하였으나 효율성 체크에서 통과하지 못함
- while, forEach, for...of 코드는 효율성 테스트에서 통과하지 못하는 것으로 보임

# 효율성 실패 코드 (내 코드)

```js
function solution(s) {
	let splitByPair = s;
  let joinedAfterSplit = s;	

  while (splitByPair.length) {
    splitByPair = joinedAfterSplit.split("()");

    if (joinedAfterSplit === splitByPair.join("")) {
      break;
    } else {
      joinedAfterSplit = splitByPair.join("");
    }
  }
  return joinedAfterSplit.length ? false : true;
}
```

# 참조하여 고친 해답

```js
function solution(s) {
  let opened = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") opened += 1;
    if (s[i] === ")") opened -= 1;
    if (opened < 0) return false;
  }
  return opened === 0;
}
```
