```js
function solution(n, edge) {
  let answer = 0

  // 연결 리스트 생성
  const edgeList = new Map()
  for (let i = 0; i < edge.length; i++) {
    for (let j = 0; j < edge[i].length; j++) {
      let newEdge = edge[i].filter((e) => e !== edge[i][j])
      if (edgeList.has(edge[i][j])) {
        edgeList.set(edge[i][j], [...edgeList.get(edge[i][j]), ...newEdge])
      } else {
        edgeList.set(edge[i][j], [...newEdge])
      }
    }
  }

  // BFS로 Depth 조회
  const visited = [null, 1]
  const queue = [1]
  while (queue.length) {
    const cur = queue.shift()
    for (const next of edgeList.get(cur)) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1
        queue.push(next)
      }
    }
  }
  return visited.filter((el) => el === Math.max(...visited)).length
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]) // 3
```
