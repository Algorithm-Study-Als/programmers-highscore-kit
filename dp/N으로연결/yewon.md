# 풀이

## Dynamic Programming

다이내믹 프로그래밍은 쉽게 말해 반복적인 계산을 줄여서 알고리즘을 더 효율적으로 만드는 문제 해결 방식을 말한다.
보통 recursion, memoization, bottom-up 등을 이용해 해결한다.

### 다이나믹 프로그래밍을 사용할 수 있는 문제의 조건

- 작은 문제가 반복되는 경우. 예)피보나치 수열: fib(3)을 알기위해선 fib(2), fib(1)을 알아야한다
- 같은 문제는 구할때마다 답같은 경우.

단순 recursion에서는 반복이 많다. 이런 반복을 막기위해서 작은 문제는 한번만 풀게 한다. 이때 memoization이나 bottom-up으로 접근할 수 있다.

### N으로연결
- N의 숫자를 연산이 아닌 단순히 붙여서 사용하는 경우를 각 list[i] 에 저장 (5, 55, 555...)
- **여기서 i 는 N을 몇번 사용했는지에 대한 변수이므로** <br>
N을 2번 사용하는 경우(5+5, 5*5, 5/5, 5-5)를 저장. (list[2]) <br>
N을 3번 사용하는 경우는 N을 1번 사용하는 경우와 N을 2번사용하는 경우를 사칙연산하여 저장. [list[3])<br>
N을 4번 사용하는 경우는 N을 1번 3번, 2번 2번, 3번 1번 하는 경우를 사칙연산하여 저장. [list[4])<br>
- 각 i에 대해 가능한 연산들을 추가하고, number와 같으면 i를 리턴.
- 문제에서 N이 8보다 크면 -1을 리턴하라고 하였으므로, 반복문에서도 결정이 되지않으면 -1을 리턴.

# 코드

```js
function solution(N, number) {
  const list = Array.from({ length: 9 }).map(
    (me, index) => new Set([Number(String(N).repeat(index))])
  ); //숫자를 단순히 붙여서 사용하는 경우 (5, 55, 555)를 추가

  for (let i = 0; i < list.length; i++) if (list[i].has(number)) return i;
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      for (let x of list[j]) {
        for (let y of list[i - j]) {
          const calc = ([a, b, c, d] = [x + y, x - y, x * y, x / y]);
          for (component of calc) list[i].add(component);
          if (a === number) return i;
          if (b === number) return i;
          if (c === number) return i;
          if (d === number) return i;
        }
      }
    }
  }
  return -1;
}
```
