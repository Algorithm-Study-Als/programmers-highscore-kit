# 풀이

1. 종점 기준으로 카메라 설치 여부 결정
2. 종점 기준으로 sort
3. 초기 카메라 위치 -30001로 설정
4. 카메라위치가 차의 진입시점보다 작으면 카메라 개수 1 증가, 카메라 위치 해당 차의 종점 위치

# 코드

```js
function solution(routes) {
  let answer = 0

  const newRoutes = routes.sort((a, b) => a[1] - b[1])
  let camera = -30001

  for (let i = 0; i < newRoutes.length; i++) {
    if (camera < newRoutes[i][0]) {
      answer += 1
      camera = newRoutes[i][1]
    }
  }

  return answer
}
```
