# README

## Algorithm

Use BFS starting from each node to search for the shortest path.

Use `dist[k][i]` to remember shortest distance with given selected set and current node.

```js
path1 = '123 4';
path2 = '213 4';
```

If we already know that path('123') is shorter than path('213'), then we don't need to go further for any path starting with path('213'). That's why we use `dist[k][i]` to remember shortest path with given set and last node.

To represent a selected set, we need a way to encode selected set. So we use bit mask to encode selected set.

For example, consider an integer as binary representation

`0000` => no elements selected
`0011` => `0th`, `1th` elements are selected
`1001` => `0th`, `3th` elements are selected

In javascript `array.shift()` is slower than `array.pop()`. So instead of using shift() which results in time limit exceeds, here we use `array.pop()` with level order traversal to ensure the visiting sequence.
