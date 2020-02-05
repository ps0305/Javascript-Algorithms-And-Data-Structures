# README

## Algorithm

Define `dp1[i][j]` as number of required changes to make `s.substring(i, j + 1)` become palindrome. It can be computed using following function.

```js
function createDP1(s, m) {
  const dp = new Array(m).fill(null).map(() => new Array(m).fill(0));
  for (let j = 0; j < m; j++) {
    for (let i = 0; i <= j; i++) {
      dp[i][j] = (s[i] === s[j] ? 0 : 1) + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
    }
  }
  return dp;
}
```

Define `dpk[i][k]` as number of required changes to make `s.substring(0, i + 1)` become palindrome.

```
dpk[i][k] = min {
  dpk[x][k - 1] + dp1[x + 1][j]
} x from 0 to i - 1
```

To make k partitions, we make last substring to palindrome and then partition the rest with k - 1 partitions.
