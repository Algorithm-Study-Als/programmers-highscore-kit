# 풀이

- 문제를 처음에 잘 못 이해했다. h번 인용된 논문이 h개 이상인것을 citations 배열의 요소에서 찾으려고 했다.
- h를 0으로 설정해놓고, h가 h번 인용된 논문의 수보다 작거나 같은 한 h를 하나씩 증가 시킨다.
- 예) h가 0일때, 0번 인용된 논문의 수는 당연히 0보다 많으므로 h가 1 증가
- h가 h번 인용된 논문의 수보다 크게 되면 멈추고, h - 1을 해주어 답을 리턴한다.

# 코드

```js
function solution(citations) {
	var answer = 0;
	function filterNumberOfCitations(number) {
		return citations.filter((citation) => citation >= number).length;
	}

	let h = 0;
	let length = 0;
	while (h <= length) {
		h++;
		length = filterNumberOfCitations(h);
	}
	answer = h - 1;

	return answer;
}

solution ([1, 3, 5, 7, 9, 11]); //4 
```
