# README

## Algorithm

Define `dp[n][m]` as number of ways with exactly `n` steps to stay at index `m`.

```js
dp[n][m] = dp[n - 1][m] + dp[n - 1][m - 1] + dp[n - 1][m + 1];
```

Number of ways with `n` steps staying at `m` is equal to

- `n - 1` steps at `m` + `stay`
- `n - 1` steps at `m - 1` + `right`
- `n - 1` steps at `m + 1` + `left`

Space Complexity: `O(n ** 2)`

It can be optimized to:

```js
next[m] = dp[m] + dp[m - 1] + dp[m + 1];
```

Space Complexity: `O(n)`

One more optimization, `n` steps can reach no farther than index of `n`. So we can stop if `j > Math.min(i + 1, m)`.
