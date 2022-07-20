# 풀이

- s를 배열 aArray로 만들어서 '()'가 만들어질 때 마다 빈 배열에 스택
- 재귀함수로 남은 aArray에 따라 return 처리

# 간과한 것

- 꼭 배열에 요소가 추가되고 제거되어야 스택 & 큐가 아니다
- 올바른 괄호가 꼭 "()"로 체크되어야 하는 것은 아니다
- 숫자로 표현하면 for문을 돌 때 절대 음수가 나올 수 없다 (음수가 나온다 = 올바른 괄호가 아니다)

# 효율성 실패 코드 (내 코드)

```js
function solution(s) {
  let answer = false;

  let sArray = [...s];
  let newSArray = [];
  let check = false;

  while (!check) {
    for (let i = 0; i < sArray.length; i++) {
      if (sArray[i] === "(" && sArray[i + 1] === ")") {
        newSArray.push(sArray.splice(i, 2));
      }

      if (sArray.length === 0) {
        answer = true;
        check = true;
        break;
      }

      if (sArray.length === 1) {
        check = true;
        break;
      }

      if (sArray.length === 2 && sArray[0] + sArray[1] !== "()") {
        check = true;
        break;
      }
    }
  }

  return answer;
}
```

# 다른 사람 정답 참조한 코드

```js
function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count++;
    else count--;
    if (count < 0) return false;
  }

  if (count !== 0) return false;
  else return true;
}
```
