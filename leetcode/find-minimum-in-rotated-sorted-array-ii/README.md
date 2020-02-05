## README

### Test Cases

<!-- prettier-ignore -->
```js
// nums[mid] > nums[left]
// search (mid + 1, right)
[3,4,5,1,2]
[2,3,4,5,1]

// nums[left] < nums[right]
[1,2,3,4,5]

// nums[mid] < nums[right]
// search (left, mid)
[5,1,2,3,4]
[4,5,1,2,3]

// duplicates
// search (left + 1, right)
[2,2,2,0,1]
```

### Complexity

Time:

- O(log(N)) for best case, i.e., no duplicates
- O(N) for worst case, i.e., all duplicates
