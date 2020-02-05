# README

## Algorithm

Use `left` and `right` to find all combinations of columns. That is, `left` starts from `0 ~ n`. `right` starts from `left ~ n`. So that it will start from any position and with any width. For each fixed width, we store the sum in each row between column `left` and `right` to `arr[i]`. Then we use this 1-D array to find maximum subarray no larger than k. Because `S1 - S2 <= k`, `S2 >= S1 - k`. We store prefix sum into an array. For each time, we use `lowerBound` to find a prefix sum such that `prefix sum >= sum - target`. If the index is valid, then we do find such a prefix sum. So update max value. Then insert the prefix sum into array.
