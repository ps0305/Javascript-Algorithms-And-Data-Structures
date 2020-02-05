## README

### Test Cases

<!-- prettier-ignore -->
```js
// nums[mid] >= nums[left]
// search (mid + 1, right)
[3,4,5,1,2]
[2,3,4,5,1]

// nums[left] <= nums[right]
[1,2,3,4,5]

// nums[mid] <= nums[right]
// search (left, mid)
[5,1,2,3,4]
[4,5,1,2,3]

// edge cases
[2,1]
```

Since there is no duplicactes, `=` only happens with the case that there are only two elements.

ex:

<!-- prettier-ignore -->
```js
// nums[mid] === nums[left]
[2, 1]
```
