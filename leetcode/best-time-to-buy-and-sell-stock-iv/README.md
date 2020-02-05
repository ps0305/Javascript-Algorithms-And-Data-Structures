## README

1. `dp[k][i] = Max { dp[k - 1][j] + prices[i] - prices[j], dp[k][i - 1] } j from 0 to i - 1`
   - It can be simplified to 2.
2. `dp[i] = Max { dp[j] + prices[i] - prices[j], dp[i - 1] } j from 0 to i - 1`
   - It can be simplified to 3.
3. ```
   diff = dp[i] - prices[i]
   dp[i] = Max { dp[i - 1], maxDiff + prices[i] } i from 0 to n - 1`
   maxDiff = Max { maxDiff, diff }
   ```
   - Time complexity is optimized from `O(k * n ** 2)` to `O(k * n)`
   - Space complexity is optimized from `O(k * n)` to `O(n)`
