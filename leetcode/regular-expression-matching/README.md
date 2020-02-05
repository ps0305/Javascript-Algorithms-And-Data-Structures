# README

## Algorithm

```js
s = 'aa b';
p = 'c*a* b';
```

```js
s = 'aa a';
p = 'c*a*';
```

```js
s = 'aa';
p = 'a* c*';
```

Given s, p, we can seperate them into two parts, part one, **last character**, and part two, **other characters**. S and P are matched if part one is matched and part two is matched. To derive current state, it requires previous state. So we can use dynamic programming approach to solve the problem.

Recursion formula:

- `dp` stands for isMatched for s with length i and p with length j
- space complexity: O(N \*\* 2)
- time complexity: O(N \*\* 2)

```js
dp[i][j] = (() => {
  if (p[j - 1] === '*') {
    return ((s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]) || dp[i][j - 2];
  }
  return (s[i - 1] === p[j - 1] || p[j - 1] === '.') && dp[i - 1][j - 1];
})();
```

Because `dp[i][j]` only depends on `dp[i - 1]`, we can optimize space complexity to O(N)

- space complexity: O(N)
- time complexity: O(N \*\* 2)

```js
for (let i = 1; i <= m; i++) {
  const next = new Array(n + 1).fill(false);
  for (let j = 1; j <= n; j++) {
    next[j] = (() => {
      if (p[j - 1] === '*') {
        // prettier-ignore
        return (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[j]
         || next[j - 2];
      }
      return (s[i - 1] === p[j - 1] || p[j - 1] === '.') && dp[j - 1];
    })();
  }
  dp = next;
}
```
