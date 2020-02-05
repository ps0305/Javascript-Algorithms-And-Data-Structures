# README

## Algorithm

`dp[i][j]` represents maximum sum of subarray ending at `i` with `j` deletion.

#### idea

The idea is to compute maximum sum of subarray ending at `i` with `j` deletion. `j` starts from `0` to `1`. For each computed `dp[i][j]`, we update those values to `max`. So we are going to find out all possible combinations of each number of deletion.

combinations of zero deletion:

- arr[i]
- arr[i] + dp[i - 1][0]
  - arr[i] extended from previous

combinations of 1 deletion:

- arr[i]
- arr[i] + dp[i - 1][1]
  - use 1 deletion before i
- 0 + dp[i - 1][0]
  - use 1 deletion at i, so 0 deletion before i

```js
dp[i][0] = Math.max(arr[i], arr[i] + dp[i - 1][0]);
dp[i][1] = Math.max(arr[i], arr[i] + dp[i - 1][1], dp[i - 1][0]);
```

This takes O(n) spaces. It can be further optimized.

```js
next[0] = Math.max(arr[i], arr[i] + dp[0]);
next[1] = Math.max(arr[i], arr[i] + dp[1], dp[0]);
```

Space Compelxity: O(1)
