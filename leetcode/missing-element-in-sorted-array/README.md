# README

## Algorithm

Use binary search to search for a range. If there are more than 2 elements ( inclusive ) in the range, we keep narrowing down. For each iteration, we compare number of missing elements and target number. If target > nLeftMissing, it means there is not enough elements in the left. So we search in the right. And vice versa.

Number of missing elements in the left can be computed using following.

```js
const nLeftMissing = nums[mid] - nums[left] + 1 - (mid - left + 1);
```
