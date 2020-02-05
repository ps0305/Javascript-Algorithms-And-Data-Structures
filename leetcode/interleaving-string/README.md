# README

```
aa bc c
d bbc a
aad bbc bc a c
```

```js
dp[i][j] =
  (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) || (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]);
dp[0][j] = s2.substring(0, j) === s3.substring(0, j);
dp[i][0] = s1.substring(0, i) === s3.substring(0, i);
```
