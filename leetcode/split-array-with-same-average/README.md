# README

## Algorithm

```
sum / n = sumA / k
sumA = sum * k / n, k from 1 to n / 2
```

- Since A is an integer array, its sum must be integer.
- So select k that (sum \* k % n ==== 0) holds
- If k is fixed, then we know sumA.
- If there exists a combination with length is k and sum is sumA, then it can be split with the same avg.
- So we need to find out all combination sums with k selected and sum is sumA.

`dp[i][j]`: combination sums of array with lenght i and j selected

- select `j` elements from `arr.slice(0, i - 1)`
- select `j - 1` from `arr.slice(0, i - 1)` and select `arr[i - 1]`

```js
dp[i][j] = [...dp[i - 1][j], ...dp[i - 1][j - 1].map((val) => val + arr[i - 1])];
```

- If `dp[i][j]` is an array, it may contain duplicates. So we can use `Set` to prevent this.

Analysis

- space complexity: O(n \* k)

```js
next[j] = [...dp[j], ...dp[j - 1].map((val) => val + arr[i - 1])];
```

- Since `dp[i]` depends on `dp[i - 1]` only, space complexity can be reduced to O(n)
