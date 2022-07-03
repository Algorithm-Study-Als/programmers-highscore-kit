# 풀이

1. 의상 종류 key 의상 개수 value 값으로 하는 Map 생성
2. 각 의상 종류에 따라 갯수를 곱한다
3. 갯수를 곱할 때는 '입지않는 경우'를 추가한 뒤, 결과값에서 -1을 해준다 (모두 입지않는 경우 제거)

# 코드

```js
function solution(clothes) {
  var answer = 1;

  const clothesMap = new Map();

  for (let i = 0; i < clothes.length; i++) {
    const clothType = clothes[i][1];

    if (clothesMap.has(clothType)) {
      clothesMap.set(clothType, clothesMap.get(clothType) + 1);
    } else {
      clothesMap.set(clothType, 2);
    }
  }

  for (let j of clothesMap.values()) {
    answer *= j;
  }

  return answer - 1;
}

const option = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(option));
```
