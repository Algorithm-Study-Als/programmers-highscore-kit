```js
function solution(priorities, location) {
  var answer = 0;

  //비교대상
  const numbers = [...new Set(priorities)].sort((a, b) => b - a);
  // console.log(numbers)
  //location 정보 부여
  const info = priorities.map((p, idx) => {
    return {
      location: idx,
      content: p,
    };
  });

  const temp = info.slice();
  for (let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < info.length; i++) {
      if (info[i].content < numbers[j]) {
        temp.shift();
        temp.push(info[j]);
        break;
      } else {
        if (info[i].content !== numbers[j]) {
          temp.shift();
          temp.unshift(info[j]);
          break;
        } else {
          temp.shift();
          temp.push(info[j]);
          break;
        }
      }
    }
  }
  answer = temp.map((a) => a.location).indexOf(location) + 1;
  return answer;
}
```
