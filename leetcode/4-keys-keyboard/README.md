# README

## Algorithm

```js
// left = 'AAAAAAAA'
// right = 'acvv'
str = 'AAAAAAAA acvvv';
```

Given a length N. If we use `j` length to derive max length at left and use `i - j` length to make copies. Then total number of A's would be `j * (i - j - 2 + 1)` => `j * (i - j - 1)`.

So we have the formula to derive max length with string length of `i`

```js
dp[i] = (() => {
  let max = i;
  for (let j = 1; j <= i - 3; j++) {
    max = Math.max(max, dp[j] * (i - j - 1));
  }
  return max;
})();
```

To get current state, we need to know previous state. So we can use bottom up approach to solve it.

```js
const dp = [...new Array(N + 1)].map((_, i) => i);
for (let i = 4; i <= N; i++) {
  for (let j = 1; j <= i - 3; j++) {
    dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
  }
}
return dp[N];
```
