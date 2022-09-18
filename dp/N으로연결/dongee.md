```jsx
function solution(N, number) {
  const s = [new Set()];
  for (let i = 1; i <= 8; i++) {
    s.push(new Set([new Array(i).fill(N).join("") * 1]));
    //new Set: 중복없는 데이터를 표현
    //fill: 배열의 start index부터 end index 전까지(end index는 미포함) value값으로 채워주는 함수
    //start index: 입력하지 않으면 기본값은 0
    //end index: 입력하지 않으면 기본값은 배열의 길이(arr.length)

    //dp[2]의 결과는 N의 숫자를 2번 사용할 결과 set이므로,
    //dp[1] 과 dp[1]의 사칙연산 결과 +, -, *, / 를 넣어주면 된다.
    for (let j = 1; j <= i; j++) {
      //for...of : 배열을 순환
      for (const x1 of [...s[j]]) {
        for (const x2 of [...s[i - j]]) {
          s[i].add(x1 + x2);
          s[i].add(x1 - x2);
          s[i].add(x1 * x2);
          if (x2) {
            s[i].add(x1 / x2 - ((x1 / x2) % 1));
          }
        }
      }
    }
    //Set.has(): 요소의 존재 여부를 확인
    if (s[i].has(number)) {
      return i;
    }
  }
  //반복문에서도 결정이 되지않으면 -1을 리턴
  return -1;
}
```

### 동적계획법(Dynamic Programming)

- 답을 여러번 계산하는 대신 한번만 계산한다.
- 재활용 => 속도 향상
- 피보나치 수열 (참고사이트 https://reakwon.tistory.com/3)

#### 메모이제이션

동적계획법에서 각 문제는 한번만 풀이한다. 중복되는 부분 문제의 경우도 마찬가지로 한 번만 풀이한다.
동적계획법은 Optimal Substructure를 만족하기 때문에, 같은 문제는 정답이 같다.
이러한 특성을 이용하기 위해, 정답을 한번 구하면 그 정답을 캐시(Cache)에 메모해놓는다.
이는 배열에 저장하는 것으로 구현 할 수 있다.
