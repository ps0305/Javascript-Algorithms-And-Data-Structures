# README

## Algorithm

Selection of records with length n =
1 (select A) _ (Selection of records with length n - 1) +
1 (select L) _ (Selection of records with length n - 1) +
1 (select P) \* (Selection of records with length n - 1)

So we will have this relationship.

```js
// prettier-ignore
dp[i][j][k] = (j - 1 >= 0 ? dp[i - 1][j - 1][2] : 0)
  + (k - 1 >= 0 ? dp[i - 1][j][k - 1] : 0)
  + dp[i - 1][j][2];
```

`dp[i][j][k]` represents records with length i, select at most j of A, select at most k of L.

Above relationship takes O(npq) in space complexity.

It can be optimized to O(pq) since `dp[i]` depends only on `dp[i - 1]`.

```js
// prettier-ignore
next[j][k] = (j - 1 >= 0 ? dp[j - 1][2] : 0)
  + (k - 1 >= 0 ? dp[j][k - 1] : 0)
  + dp[j][2];
```
