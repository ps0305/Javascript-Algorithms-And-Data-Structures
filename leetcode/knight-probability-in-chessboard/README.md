# README

## Algorithm

The probability of `k` steps at `(i, j)` is equal to the sum of `k - 1` steps at `(x, y)` where `(x, y)` is the position around `(i, j)`.

```js
dp[k][i][j] = (() => {
  let p = 0;
  for (const [di, dj] of dirs) {
    const x = i + di;
    const y = j + dj;
    p += (dp[k - 1][x][y] * 1) / 8;
  }
  return p;
})();
```
