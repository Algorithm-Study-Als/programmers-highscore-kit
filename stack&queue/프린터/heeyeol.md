```js
function solution(priorities, location) {
  let documents = priorities.map((priority, index) => {
    return { priority: priority, location: index };
  });

  let sortedDocuments = [];
  let isEmpty = false;

  while (!isEmpty) {
    for (let i = 0; i < documents.length; i++) {
      const shiftedDocument = documents.shift();

      const hasBiggerPriority = documents.some(
        (document) => document.priority > shiftedDocument.priority
      );

      if (hasBiggerPriority) {
        documents.push(shiftedDocument);
      } else {
        sortedDocuments.push(shiftedDocument);
      }

      if (documents.length === 0) {
        isEmpty = true;
        break;
      }
    }
  }

  return (
    sortedDocuments.findIndex((document) => document.location === location) + 1
  );
}
```
