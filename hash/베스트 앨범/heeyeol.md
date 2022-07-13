# 풀이

1. key - 장르, value - 총 플레이수, 고유번호 배열로 하는 Map 객체 생성
2. 해당 Map 객체를 배열로
3. 장르별 가장 많이 재생된 장르 순서대로 정렬
4. 장르 내 가장 많이 재생된 곡 순으로 정렬
5. 곡 중 2개만 뽑기
6. 정렬된 배열 flat()

# 코드

```js
function solution(genres, plays) {
  const topGenresArrayMap = new Map();

  for (let j = 0; j < genres.length; j++) {
    if (topGenresArrayMap.has(genres[j])) {
      topGenresArrayMap.set(genres[j], {
        ...topGenresArrayMap.get(genres[j]),
        play: topGenresArrayMap.get(genres[j]).play + plays[j],
        number: [...topGenresArrayMap.get(genres[j]).number, j],
      });
    } else {
      topGenresArrayMap.set(genres[j], {
        play: plays[j],
        number: [j],
      });
    }
  }

  const sortByMostPlayedGenre = [...topGenresArrayMap].sort(
    (a, b) => b[1].play - a[1].play
  );
  const sortByMostPlayedSongOfGenre = sortByMostPlayedGenre.map((x) => [
    x[0],
    { ...x[1], number: x[1].number.sort((a, b) => plays[b] - plays[a]) },
  ]);
  const sortByTopTwoSongsArray = sortByMostPlayedSongOfGenre
    .map((y) => [...y[1].number.slice(0, 2)])
    .flat();

  return sortByTopTwoSongsArray;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays)); // [ 4, 1, 3, 0 ]
```
