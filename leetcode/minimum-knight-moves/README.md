# README

## Algorithm

Start from the origin and use BFS to explore around the point. Because we are looking for the minimum moves, we can use priority queue to pick the candidate with minimum moves and closer to the target. This way, we can get to the target more efficient. Also, we can use visited to prevent revisit the same position.

Use integer as a cache key is way fater than string.

```js
function createKey(i, j) {
  const m = 600;
  const n = 600;
  // prettier-ignore
  return n * (i - (-m)) + j - (-n);
}
```

Because there exists a constraint that:

```
|x| + |y| <= 300
```

We can consider as matrix with size `m * n` and relative to `(-m, -n)`.
