# 풀이

1. genres, plays, id(idx) 를 key로 하는 객체 array 생성
2. 같은 genre 끼리 plays 수 토탈 구하기
3. 많이 play 된 장르로 sort
4. 그 중 가장 많이 play 된 2개만 고르기
5. answer 에 각 id push

# 코드

```js
function solution(genres, plays) {
	var answer = [];
	let genresPlaysCombined = [];
	//index 끼리 두개의 array 합치기
	for (let i = 0; i < genres.length; i++) {
		genresPlaysCombined[i] = { id: i, genre: genres[i], plays: plays[i] };
	}

	//같은 genre 끼리 plays 수 토탈 구하기
	const totalPlaysByGenres = genresPlaysCombined.reduce((acc, curr) => {
		let genre = curr.genre;
		let plays = curr.plays;
		acc[genre] ? (acc[genre] = acc[genre] + plays) : (acc[genre] = plays);
		return acc;
	}, {});

	// 많이 play 된 장르로 sort
	const genresByMostPlayed = Object.keys(totalPlaysByGenres).sort((a, b) => {
		return totalPlaysByGenres[b] - totalPlaysByGenres[a];
	});
  
  //많이 play 된 장르 순서대로 2곡 뽑기
	for (let i = 0; i < genresByMostPlayed.length; i++) {
		let twoMostPlayedPerGenre = [];
		genresPlaysCombined.forEach((song) => {
			if (song.genre === genresByMostPlayed[i] &&
				twoMostPlayedPerGenre.length < 2) {
				  twoMostPlayedPerGenre.push(song);
			} else if (song.genre === genresByMostPlayed[i] &&
				twoMostPlayedPerGenre.length == 2 &&
				twoMostPlayedPerGenre.some((val) => val.plays < song.plays)) {
          twoMostPlayedPerGenre.pop();
          twoMostPlayedPerGenre.push(song);
			}
			twoMostPlayedPerGenre.sort((a, b) => b.plays - a.plays);
		});
	
		for (let i = 0; i < 2 && i < twoMostPlayedPerGenre.length; i++) {
			answer.push(twoMostPlayedPerGenre[i].id);
		}
	}
	return answer;
}
```
