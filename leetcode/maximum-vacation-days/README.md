# README

## Algorithm

Define `dp[i][p]` as maximum value at `ith` day at `pth` city.

```js
dp[i][p] = Math.max(
  dp[i][p],
  dp[i - 1][q] + days[p][i] if (be able to stay at p)
)
```

So `dp[i][p]` is `dp[i - 1][q] + days[p][i]` if `p` is reachable from `q` for all `q`.
