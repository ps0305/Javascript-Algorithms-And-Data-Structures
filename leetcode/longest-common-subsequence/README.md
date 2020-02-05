# README

## Algorithm

```js
dp[i][j] = (() => {
  if (text1[i - 1] === text2[j - 1]) {
    return dp[i - 1][j - 1] + 1;
  }
  return Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
})();
```
