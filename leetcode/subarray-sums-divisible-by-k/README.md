# README

## Algorithm

`prefixSum(i, j) = sum[j] - sum[i - 1]`

If `prefixSum(i, j)` is divisible by k, then `sum[j]` and `sum[i - 1]` should have the same reminder. So that reminder can be removed. `sum[j]` is the prefix sum so far. So in the process of iteration, we keep a map of how many prefix sums have the same reminder. So for the current position, we calculate reminder and increment n by how many prefix sum prior to `i` have the same reminder.
