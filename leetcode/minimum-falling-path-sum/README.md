# README

## Algorithm

Define `dp[i][j]` as path sum from first row sum up to `(i, j)`. So at `(i, j)`, the path can come from left, middle or right.

```js
dp[i][j] = A[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
```

This formula takes `O(MN)` space. We can optimize it to use `O(N)` space.

```js
next[j] = A[i][j] + Math.min(dp[j - 1], dp[j], dp[j + 1]);
```
