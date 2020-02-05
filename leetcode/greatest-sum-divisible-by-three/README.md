# README

## Algorithm

Define `dp[i][r]` as maximum sum with reminder r and with array ending at i

```js
const r = (nums[i] + dp[i - 1][j]) % m;
dp[i][r] = Math.max(dp[i][r], nums[i] + dp[i - 1][j]);
```

```js
next[r] = Math.max(next[r], nums[i] + dp[j]);
```
