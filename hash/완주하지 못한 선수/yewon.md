# 풀이

Solution 1
1. 참여자와 완료자 이름의 배열을 sort 하여 순서대로 정렬
2. 완주하지 못한 선수는 항상 한명이므로 위 두 배열의 요소를 하나씩 비교하여 같지 않은 요소를 반환

Solution 2
1. 참여자 이름을 key, 명 수를 value로 participant 배열을 reduce 사용해서 변환
2. 완료자의 이름의 수만큼 참여자 value를 하나씩 줄임
3. value 가 0이 아닌 key 값, 즉 완료하지 못한 선수 이름 반환

# 코드

Solution 1
```js
function solution(participant, completion) {
  var answer= '';
  const sortedParticipants = participant.sort();
  const sortedCompletions = completion.sort();    
  
  for(let i=0; i < sortedParticipants.length; i++) {
      if (sortedParticipants[i] !== sortedCompletions[i]){
        return answer = sortedParticipants[i];
        //완료하지 못한 선수는 한명이므로 sort 된 두 배열이 순서가 다른 첫번째 그 participant가 답
    }
  }
}
```

Solution 2
```js
function solution(participant, completion) {
    var answer= '';
    const participantList = participant.reduce((prev, cur) => {
      prev[cur] = prev[cur] ? prev[cur] + 1 : 1;
      return prev;
    }, {}) // 이름 key, 명수 value
 
    for(let i=0; i < completion.length; i++) {
      if (participantList[completion[i]]) {
        participantList[completion[i]] --;
      }
    } //완료한 선수들 제외
    
    for (let k in participantList) {
      if (participantList[k] !== 0) {
        answer = k;
      }
    } //명 수가 0이 아닌 이름 찾기
    
    return answer;
}
```
