# README

## Algorithm

```js
dp(n) = (if last two characters is decodable ? dp(n - 2) : 0) +
  (if last characters is decodable ? dp(n - 1) : 0)
```

```js
dp = x + y;
// x = dp[n - 2]
// y = dp[n - 1]
```
