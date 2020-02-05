# README

## Algorithm

Number of square submatrices containing i, j is equal to maximum length of submatrices containing i, j. So we only need to find maximum length for each i, j and summarize all positions.

Define `dp[i][j]` as maximum length submatrices containing i, j.

```js
dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
```

It takes O(mn) in space. It can be reduced to this.

```js
next[j] = Math.min(next[j - 1], dp[j], dp[j - 1]) + 1;
```

It takes O(n) in space.
