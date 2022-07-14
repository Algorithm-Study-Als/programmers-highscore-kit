# 풀이

1. 남은 작업 일 수 구하기
2. 첫 배포 가능한 날을 maxDays로 설정
3. requiredDays와 maxDays 를 비교하여 카운트

# 코드

```js
function solution(progresses, speeds) {
  var answer = [0];
  //남은 작업 일수 구하기
  let requiredDays = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress)/speeds[idx]);
  })
  let maxDays = requiredDays[0]; //첫 배포 가능한 날을 maxDays로 설정
 
  for (let i=0, j=0; i<requiredDays.length; i++) {
    //남은 작업 일수는 i, 배포하는 작업수는 j를 인덱스로 함
    if(requiredDays[i]<=maxDays) {
     answer[j] += 1;
    } else {
      //requiredDays 가 maxDays 보다 크면 배포될 수 없으니,
      //maxDays를 현재 requiredDays로 업데이트하고, 다음 배포 날 ([++j])에 추가
     maxDays = requiredDays[i];
     answer[++j] = 1;
    }
  }
return answer;
}
```
