# 풀이

- 아예 감이 안와서 구글링해서 접근 방식을 보고 풀었다.

# 코드

```js
function solution(numbers) {
  var answer = '';
  let string = numbers.map((number) => number + '');

  string.sort((a, b) => b + a - (a + b));

  if (string.every((item) => item === '0')) return '0';

  string.forEach((item) => {
    answer += item;
  });
  return answer;
}

```
