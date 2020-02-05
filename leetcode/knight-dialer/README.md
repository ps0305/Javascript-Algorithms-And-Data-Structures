# README

## Algorithm

Dynamic Programming

dp stands for number of combinations with N digits at i

recursion:

```
dp[N][i] = dp[N - 1][j], for j in neighbors
```

optimize with O(N) of space complexity

```
next[i] += pre[neighbor] for neighbor in neighbors
```
