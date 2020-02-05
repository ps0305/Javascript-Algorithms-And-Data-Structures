## REDAME

### Test Cases

```js
// can split but not equal
// [[1], [1], [3], [3]]
nums = [1, 2, 1, 2, 3, 2, 3];

// [[1, 1], [1, 1], [1, 1], [1, 1]]
nums = [1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1];
```

### Algorithm

- Calculate cumulative sum. It can be used to compute range sum in O(1).
- Split array into two parts with `j` first.
- For each part, check if we can split into equal sum and record the values of equal sum.
- If both parts can be split into equal sum and has the same value of equal sum, return true.

### Complexity

- We scan `j` over nums. So it's `O(n)`.
- For each `j`, we scan `left` and `right` once. So it's `O(n)`.

* Time Complexity: `O(n ** 2)`
* Space Complexity: `O(n)`

### Notes

- If we scan with order `i`, `j`, `k`, there would be unnecessary and duplicated scanning resulting in `O(n ** 3)` time. With `j` fixed and scan left, right once, we can reduce time complexity to `O(n ** 2)`.
