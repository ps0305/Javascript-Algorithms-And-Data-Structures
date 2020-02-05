# README

## Algorithm

```js
dp[i][j] = S[i - 1] === T[j - 1] ? dp[i - 1][j - 1] : dp[i - 1][j];
```

`dp[i][j]`: Starting index in string `S` such that `S.substring(dp[i][j], i)` matching sequence to `T.substring(0, j)`.
`i`: Substring length with i in S.
`j`: Substring length with j in T.
It takes O(mn) in space.

It can be optimized to use only O(n) in space.

```js
next[j] = S[i - 1] === T[j - 1] ? dp[j - 1] : dp[j];
```

Time Complexity: O(mn)
Space Complexity: O(n)
