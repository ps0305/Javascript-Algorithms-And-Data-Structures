## README

## Algorithm

Find out the LCS of two words. To minimize delete operations, we just delete words that are not LCS. So our goal becomes finding LCS of two words.

```js
// dp[i][j] represents LCS of word1 with string length i and word2 with string length j.
dp[i][j] = (() => {
  if (word1[i - 1] === word2[j - 1]) {
    return dp[i - 1][j - 1] + 1;
  }
  return Math.max(dp[i][j - 1], dp[i - 1][j]);
})();
```
