# 풀이

1. 참여자와 완료자의 이름을 Key, 인원을 Value로 하는 Map 생성
2. Participant의 for문을 돌며 완료자의 이름이 참여자에 있을 경우 참여자의 인원 -1, 완료자 Map 삭제
3. 마지막 남은 참여자 결과값 반환

# 코드

1. Reduce 이용

```js
function solution(participant, completion) {
  // 1.객체의 key, value로 된 해쉬
  // * 초기에 객체로 설정
  // * 이전 객체의 요소에 현재 값이 key로 있으면 value는 +1 없으면 1
  // * completion 배열을 이름과 인원으로 하는 객체로 변환
  var newCompletion = completion.reduce((prev, cur) => {
    prev[cur] = prev[cur] ? prev[cur] + 1 : 1;
    return prev;
  }, {});

  // 2. participant과 newCompletion을 비교해 not complete 뽑아냄
  const findNotCompletion = (name) => {
    if (newCompletion[name]) {
      newCompletion[name] = newCompletion[name] - 1;
      return null;
    } else {
      return name;
    }
  };

  // 3. not complete 인원만 find
  const extractNotCompletion = (name) => {
    if (name) return true;
  };

  //3.findNotCompletion함수가 true로 리턴하는 name 출력
  return participant.map(findNotCompletion).find(extractNotCompletion);
}

const participant = ["kiki", "eden", "leo"];
const completion = ["kiki", "eden"];

console.log(solution(participant, completion));
```

2. Map 객체 이용

```js
function solution(participant, completion) {
  let answer = "";

  const participantMap = new Map();
  const completionMap = new Map();

  for (let i = 0; i < participant.length; i++) {
    const cur = participant[i];

    if (participantMap.has(cur)) {
      participantMap.set(cur, participantMap.get(cur) + 1);
    } else {
      participantMap.set(cur, 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    const cur = completion[i];

    if (completionMap.has(cur)) {
      completionMap.set(cur, completionMap.get(cur) + 1);
    } else {
      completionMap.set(cur, 1);
    }
  }

  for (let i = 0; i < completion.length; i++) {
    const cur = completion[i];
    if (participantMap.has(cur) && participantMap.get(cur) === 1) {
      participantMap.delete(cur);
    }

    if (participantMap.has(cur) && participantMap.get(cur) > 1) {
      participantMap.set(cur, participantMap.get(cur) - 1);
    }
  }

  for (let i of participantMap.keys()) {
    answer = i;
  }

  return answer;
}
```
