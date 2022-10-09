```js
function solution(n, edge) {
  let node = new Array(n + 1).fill([]);
  let queue = [1];
  let check = new Array(n + 1).fill(0);
  
  edge.forEach((x) => {
    node[x[0]].push(x[1]);
    node[x[1]].push(x[0]);
  });

  check[1] = 1;

  while (queue.length !== 0) {
    let index = queue.shift();
    node[index].forEach((x) => {
      if (!check[x]) {
        queue.push(x);
        check[x] = check[index] + 1;
      }
    });
  }

  const max = Math.max(...check);
  return check.filter((x) => x === max).length;
}
```
