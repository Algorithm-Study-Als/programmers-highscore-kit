# 풀이

1. 참여자와 완료자의 이름을 Key, 인원을 Value로 하는 Map 생성
2. Participant의 for문을 돌며 완료자의 이름이 참여자에 있을 경우 참여자의 인원 -1, 완료자 Map 삭제
3. 마지막 남은 참여자 결과값 반환

# 코드:

- 피드백: hash 이용한 풀이 적용 필요

```js
function solution(participant, completion) {
  var answer = "";
  // 정렬
  participant.sort();
  completion.sort();
  //완주안한사람
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  //동명이인 첫번째사람
  //  answer = participant[0]
  return answer;
}
```
