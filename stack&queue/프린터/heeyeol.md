```js
function solution(priorities, location) {
  let documents = priorities.map((priority, index) => {
    return { priority: priority, location: index };
  });

  let newDocuments = [...documents];
  let sortedDocuments = [];
  let isEmpty = false;

  while (!isEmpty) {
    for (let i = 0; i < documents.length; i++) {
      const shiftedDocument = newDocuments.shift();

      const hasBiggerPriority = newDocuments.some(
        (newDocument) => newDocument.priority > shiftedDocument.priority
      );
      const hasSamePriority = newDocuments.some(
        (newDocument) => newDocument.priority === shiftedDocument.priority
      );

      if (hasBiggerPriority) {
        newDocuments.push(shiftedDocument);
      }

      if (!hasBiggerPriority && !hasSamePriority) {
        sortedDocuments.push(shiftedDocument);
      }

      if (!hasBiggerPriority && hasSamePriority) {
        sortedDocuments.push(shiftedDocument);
      }

      if (newDocuments.length === 0) {
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
