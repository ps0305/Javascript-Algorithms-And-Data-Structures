# README

## Algorithm

Define `dp[i]` as minimum cost at day `i`.

For 1-day pass

```js
dp[i] = min { dp[i - j] + cost1 } for j from 1 to 1
```

For 7-day pass

```js
dp[i] = min { dp[i - j] + cost7 } for j from 1 to 7
```

For 30-day pass

```js
dp[i] = min { dp[i - j] + cost30 } for j from 1 to 30
```

Also, since `dp` is increasing and never decrease, we can reduce further.

```js
dp[i] = Math.min(dp[i - 1] + cost1, dp[i - 7] + cost7, dp[i - 30] + cost30);
```
