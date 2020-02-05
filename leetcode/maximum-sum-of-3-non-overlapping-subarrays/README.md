## README

- `sums`: Sliding window sum of size `k` at index `i`
- `left`: Index position of max sliding window sum in the interval of [0, i]
- `right`: Index position of max sliding window sum in the interval of [i, n - 1]

### Brute force approach

Try to find the max value between all sliding windows `window[i] + window[j] window[k]`

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const k = 3;
const w1 = [[1, 2, 3], [7, 8, 9], [10, 11, 12]];
const w2 = [[2, 3, 4], [7, 8, 9], [10, 11, 12]];
```

### Optimization

1. Cache sliding window sum so that we don't need to recalculate the same input again.
2. When calculating max value of sibling sliding window, we don't need to recalculate from the beginning. Just compare current value and previous max value. So it takes only O(n) time.

ex for 2.:

When calculating max value of `[1, 2, 3, 4, 5, 6]`, we just need to compare sliding window sum of `[4, 5, 6]` and max sliding window sum of `[1, 2, 3, 4, 5]`.
