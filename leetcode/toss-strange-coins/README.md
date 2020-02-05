# README

## Algorithm

```js
// prettier-ignore
dp[i][j] = (j - 1 >= 0 ? dp[i - 1][j - 1] * prob[i - 1] : 0)
  + dp[i - 1][j] * (1 - prob[i - 1]);
```

```
dp[3][1] = dp[2][0] * prob[3 - 1] + dp[2][1] * (1 - prob[3 - 1]);
```

The probability of tossing 3 coins with 1 head is equal to the sum of followings:

- 2 coins tossed with 0 head and toss head this time.
- 2 coins tossed with 1 head and toss not head this time.

Above recursion takes O(mn) in space. It can be optimized to followings.

```js
next[j] = dp[j - 1] * prob[i - 1] + dp[j] * (1 - prob[i - 1]);
```

Time complexity: O(mn)
Space Complexity: O(n)
