/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  const max = Math.max(...nums);
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return binarySearch(nums, max, sum, m);
};

function binarySearch(nums, min, max, m) {
  let left = min;
  let right = max + 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canSplit(nums, mid, m)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canSplit(nums, max, m) {
  let sum = 0;
  let n = 1;
  for (const num of nums) {
    if (sum + num > max) {
      sum = 0;
      n += 1;
      if (n > m) {
        return false;
      }
    }
    sum += num;
  }
  return true;
}
