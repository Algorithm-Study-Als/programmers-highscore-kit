```js
function solution(brown, yellow) {
  var answer = [];
  let area = brown + yellow;
 
  for(let height = 3; height < brown; height++) {
    if (area % height === 0) {
      let width = area / height;

      if ((height-2) * (width-2) === yellow) {
        return [width, height]
      }
    }
  }
}
```