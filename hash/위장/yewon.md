# 풀이

1. 예를 들어 모자 3가지, 상의 2가지가 있을때 모든 조합의 수는 3 * 2 = 6이다.
2. 하지만 아이템을 안입는 경우도 포함해야 하므로 3 * 2 대신 4 * 3을 해줘야한다 (1을 추가).
3. 모두 안입는 경우는 없으므로 전체에서 -1을 해주면 구하려는 경우의 수가 나온다.
4. 아이템 타입을 key, 종류의 수를 value로 놓고 reduce 를 사용해 변환
5. 모든 value를 곱해서 경우의 수를 구한 뒤 1을 뺀 답 반환

# 코드

```js
function solution(clothes) {
  var answer = 1; //나중에 곱하기를 해야하므로 1로 설정
  
  const groupByClothesType = clothes.reduce((acc, clothes) => {
    let key = clothes[1];
    acc[key] ? acc[key] = acc[key] + 1 : acc[key] = 2; //아이템을 안입는 경우가 있으므로 초기 숫자가 2로 셋팅
    return acc
   }, {});
   
   for (let key in groupByClothesType) {
    answer *= groupByClothesType[key];
   } //모든 숫자를 곱해서 경우의 수 구하기
   
  return answer - 1; //모두 안입는 경우를 제외
}
```
