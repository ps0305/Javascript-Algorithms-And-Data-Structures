/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  const prefixSum = [0];
  let sum = 0;
  let nRangeSum = 0;
  for (const num of nums) {
    sum += num;
    nRangeSum += upperBound(prefixSum, sum - lower) - lowerBound(prefixSum, sum - upper);
    const index = upperBound(prefixSum, sum);
    prefixSum.splice(index, 0, sum);
  }
  return nRangeSum;
};

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
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
