# README

## Algorithm

Define dp as minimum number of coins required to achieve `i` amount.

```js
dp[i] = min { 1 + dp[i - coins[j]] } for j from 1 to coins.length - 1
```
