/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const arr = [];
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    arr.splice(lowerBound(arr, num), 0, num);
    if (arr.length > k) {
      arr.splice(binarySearch(arr, nums[i - k]), 1);
    }
    if (arr.length === k) {
      const m = Math.floor(k / 2);
      const median = k % 2 === 1 ? arr[m] : (arr[m - 1] + arr[m]) / 2;
      output.push(median);
    }
  }
  return output;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
