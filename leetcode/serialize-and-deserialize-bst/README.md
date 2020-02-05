# README

## Algorithm

Comparing to serializing Binary Tree, we can ignore `null` value in serializing Binary Search Tree by giving boundary.

ex:

```js
const serializedStr = [4, 2, 1, 6, 5, 7];
```

This is the serialized data of binary search tree. When constructing tree rooted at value 2, we give it boundary `min = -Infinity` and `max = 4`. So that we know value 6 does not belong to it. We can return null.
