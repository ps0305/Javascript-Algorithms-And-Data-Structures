# README

## Algorithm

`dp[i][j]` stands for longest palindromic subsequence within substring `s[i:j]`

```js
// prettier-ignore
dp[i][j] = s[i] === s[j]
  ? dp[i + 1][j - 1] + 2
  : Math.max(dp[i][j - 1], dp[i + 1][j]);
```
