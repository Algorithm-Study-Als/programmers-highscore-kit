# 풀이
- 블로그 참고 한 풀이

# 코드
```js
function solution(n, costs) {
  var answer = 0;
  //비용이 작도록 정렬
  costs.sort((a, b) => a[2] - b[2]);
  const vis = new Array(n).fill(false);
  const bridge = new Array(costs.length).fill(false);

  //다리 연결의 시작
  vis[costs[0][0]] = true;
  vis[costs[0][1]] = true;
  answer += costs[0][2];
  let cnt = 1; //연결 된 갯수
  while (cnt < n - 1) {
    // 노드 갯수 -1 === 간선의 수 (모든 노드가 연결되는 시점)
    for (let i = 0; i < costs.length; i++) {
      const [start, end, cost] = costs[i];
      if (bridge[i]) continue; //이미 연결된 경우라면 넘어감
      if ((!vis[start] && vis[end]) || (vis[start] && !vis[end])) {
        // 둘 중하나는 연결되었지만 하나는 연결안됨 > 연결할 수 있음!
        cnt += 1; //다리 연결+1
        vis[start] = true;
        vis[end] = true;
        bridge[i] = true;
        answer += cost;
        break; // break하는 이유: 최대한 가중치가 적은 곳(costs의 앞 부분이 먼저 연결되도록 하기위해서)
      }
    }
  }

  return answer;
}
```
