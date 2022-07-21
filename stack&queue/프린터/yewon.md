# 해답

- priority와 그 인덱스를 묶어서 배열로 만듬
- 재귀문을 돌며 제일 큰 priority를 체크하여 첫번째 엘레먼트를 shift 해서 비교
- 제일 큰 priority와 일치할 경우 먼저 프린트 되어야 하므로 빈 answer 배열에 푸시
- 제일 큰 priority보다 작을 경우 맨 뒤로 넘겨야 하기 때문에 기존 priorities 배열에 푸시

# 풀이

- 처음에 최대 priority를 설정 해놓고 for 문을 써서 해결 해보려고 시도했지만 실패했다.
- while 문 안에서 shift, push를 사용하고, 매 iteration 마다 새로 max를 구해주면 된다는게 핵심 

# 효율성 실패 코드 (내 코드)

```js
function solution(priorities, location) {
  let answer = [];
  const prioritiesWithIndex = priorities.map((priority, index) => {
    return [priority, index];
  });
    
  while (prioritiesWithIndex.length) {
    const first = prioritiesWithIndex.shift();
    const max = Math.max(...prioritiesWithIndex.map(x => x[0]))
  	if (first[0] >= max) {
      answer.push(first);
      if (first[1] === location) break;
    } else {
      prioritiesWithIndex.push(first);
    }
  }

  return answer.findIndex((element) => element[1] === location) + 1;
}
```


