# README

## Algorithm

```js
dp[i][j] = A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
```

Define `dp[i][j]` as repeated length containing last element with length `i, j`.

So if `A[i - 1] === B[j - 1]`, extends length by 1, otherwise set to zero.

It can be reduced to O(n) as:

```js
next[j] = A[i - 1] === B[j - 1] ? dp[j - 1] + 1 : 0;
```

Time Complexity: O(mn)
Space Complexity: O(n)
