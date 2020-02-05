# README

## Algorithm

```js
[[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]];
```

`dp[i][j]` represents maximal square at position (i, j).

- If `matrix[i][j]` is '0', `dp[i][j] = 0`.
- If `matrix[i][j]` is '1', `dp[i][j]` is equal to minimum of (top, top-left and left) + 1.

```js
dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
```

Because `dp[i][j]` depends on previous row and column only, it can be optimized to space complexity of `O(N)`.

```js
next[j] = Math.min(next[j - 1], dp[j], dp[j - 1]) + 1;
```
