# README

## Algorithm

```
S(i, j) = sum[i] - sum[j - 1]
lower <= sum[i] - sum[j - 1] <= upper

looking for some `sum` in the interval of [sum[i] - upper, sum[i] - lower]
sum[i] - upper <= sum[j - 1] <= sum[i] - lower

example prefixSum:

const prefixSum = [1,2,2,3,3,4]
assume:
sum[i] - upper = 2
sum[i] - lower = 3
count of range sum = upperBound(prefixSum, 3) - lowerBound(prefixSum, 2) = 5 - 1 = 4
```
