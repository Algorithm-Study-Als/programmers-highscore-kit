```jsx
function solution(n, edge) {
  //노드 크기만큼의 2차원 배열을 선언
  const connects = new Array(n).fill().map((_) => []);
  console.log(connects);

  //주어진 vertex를 이용해서 연결된 노드들의 정보를 만들어 줄 것
  for (const e of edge) {
    // 양방향(무방향; Undirected) 그래프이므로 서로의 좌표에 모두 연결된 노드를 넣어준다.
    // -1을 하는 이유는 배열의 index는 0부터 시작하는 반면
    // 주어진 노드 번호는 1부터 시작하기 때문이다.
    connects[e[0] - 1].push(e[1] - 1);
    connects[e[1] - 1].push(e[0] - 1);

    //console.log(connects[e[0]-1],e[1]-1) //배열idx여서 0부터 시작.
    //console.log(connects[e[0]-1],e[0]-1)
  }

  // BFS를 통해 가장 멀리있는 노드의 개수를 체크: 그래프의 deps를 추적
  // BFS는 현재 deps에 해당하는 노드들을 먼저 다 탐색한 뒤 다음 deps로 넘어가기 때문에
  // 현재 deps값을 추적하여 가장 멀리 있는 노드를 탐색할 수 있다.

  // 해당 변수에 방문의 표시로 자신의 deps 값을 넣어주는 방식
  // deps임과 동시에 반환값에 개수로 사용할 것이므로 바로 1로 시작하게끔 초기화
  const visited = [1];
  const queue = [0];

  while (queue.length) {
    const cur = queue.shift(); //queue 1번째
    //console.log("cur",cur)
    // 현재노드(cur)와 연결된 노드들을 돌아가며

    //for...of의 경우 배열에 들어 있는 요소만 뽑을 수 있다.
    for (const next of connects[cur]) {
      // 연결된 노드 중 지금 차례의 노드(next)가
      // 아직 방문하지 않은 상태라면
      // console.log("connects",connects[cur],"next",next, "visited",visited[next])
      if (!visited[next]) {
        // 방문처리함과 동시에 그 값을 현재 deps + 1로 삽입
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }
  // BFS를 모두 돌고나면 visited 배열에는 각 deps가 담겨있을 것
  // 각각의 값은 노드 1번으로부터 떨어져있는 거리를 의미한다.
  console.log(visited);
  //우리가 필요한 것은 가장 멀리 떨어진 노드이므로
  //먼저 해당 visited 배열에서 최댓값을 찾은 뒤,
  const max = Math.max(...visited);
  console.log(max);
  //그 최댓값이 배열에 모두 몇개 있는지를 찾아 반환
  return visited.filter((el) => el === max).length;
}
//solution(6,[[3, 6],[4, 3]])
solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
```
