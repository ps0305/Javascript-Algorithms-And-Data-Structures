# README

## Algorithm with constant space

Use two pointers for matching.

`s[i] === p[j] || p[j] === '?'` in these cases, it's matched, advance both pointers.

`p[j] === '*'` in this case, there are two cases that we need to try. `[i, j + 1]` and `[i + 1, j]`. So we try one case and store another case into the stack. Whenever one path is not matched, restore `i, j` from stack.

After running `while (i < m) {}` this loop, `i` must be equal to `m`. However, there may be remaining patterns. And also there could only be `*` in remaining patterns.

## Algorithm with DP

```js
s = 'adceb';
p = '*a*b';
```

- `dp[i][j]`: Is match for string `s.slice(0, i)` and `p.slice(0, j)`
- `dp[i][j] = dp[k][j]` means `*` represents n characters.
- `dp[i][j] = dp[i][j - 1]` means `*` represents zero characters.

<!-- prettier-ignore -->
```js
dp[i][j] = (() => {
  if (p[j - 1] === '*') {
    for (let k = 0; k < i; k++) {
      if (dp[k][j]) {
        return true;
      }
    }
    return dp[i][j - 1];
  }
  return (s[i - 1] === p[j - 1] || p[j - 1] === '?') && dp[i - 1][j - 1];
})();
```

## Boundary Conditions

- `dp[0][0] = true` because empty string is matched with empty pattern.
- `dp[0][j] = p[j - 1] === '*' && dp[i][j - 1]` because empty string is only matched with empty pattern.
