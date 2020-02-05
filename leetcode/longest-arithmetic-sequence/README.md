# README

## Algorithm

- `dp[i][diff]` stands for length of longest arithmetic sequence ending at `i` with `diff`. Similar to LIS, we scan each elements before `i` to see if `diff` exists ending at `j`. If exists, extends `dp[j][diff]` by 1.
- Since `diff` can be a very large number, we use an array of object to store diff as key.
