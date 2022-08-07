```js
function solution(operations) {
  let answer = []
  let priority = []

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i]
    const operationLength = operations[i].length

    const pushChecker = operations[i].slice(0, 1) === 'I'
    const deleteMaxChecker = operations[i] === 'D 1'
    const deleteMinChecker = operations[i] === 'D -1'

    if (pushChecker) {
      priority.push(operation.slice(2, operationLength))
    }

    if (deleteMaxChecker) {
      if (priority.length > 0) {
        const newPriority = priority.filter((item) => item !== Math.max(...priority).toString())
        priority = newPriority
      }
    }

    if (deleteMinChecker) {
      if (priority.length > 0) {
        const newPriority = priority.filter((item) => item !== Math.min(...priority).toString())
        priority = newPriority
      }
    }
  }

  const maxPriority = priority.length > 0 ? Math.max(...priority) : 0
  const minPriority = priority.length > 0 ? Math.min(...priority) : 0

  answer = [maxPriority, minPriority]

  return answer
}

const operations = ['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']
// const operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
console.log(solution(operations))
```
