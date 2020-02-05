# README

## Algorithm

It's similar to house robber question. Because delete `n`, it will delete both `n - 1` and `n + 1`. It means `n` and `n - 1` can't be selected at the same time.

Define `dp[i]` as maximum value at `i`.

```js
dp[i] = Math.max(dp[i - 1], freq[i] * i + dp[i - 2]);
```
