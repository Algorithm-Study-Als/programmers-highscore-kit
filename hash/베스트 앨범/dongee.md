# 풀이

1. key - 장르, value - 총 플레이수, 고유번호 배열로 하는 Map 객체 생성
2. 해당 Map 객체를 배열로
3. 장르별 가장 많이 재생된 장르 순서대로 정렬
4. 장르 내 가장 많이 재생된 곡 순으로 정렬
5. 곡 중 2개만 뽑기
6. 정렬된 배열 flat()

# 코드

```jsx
function solution(genres, plays) {
  const genreList = [...new Set(genres)];

  const infoList = genres.map((genre, i) => {
    return {
      id: i,
      genre: genre,
      play: plays[i],
    };
  });
  // console.log(infoList)

  const groupBy = groupByKey(infoList, "genre");
  console.log(groupBy);

  genreList.map((genre) => {
    //  const groupBy[genre].sort((a,b)=>a.play-b.play)
    console.log(groupBy[genre]);
  });
}
```
