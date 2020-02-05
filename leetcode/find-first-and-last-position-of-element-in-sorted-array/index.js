/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const left = lowerBound(nums, target);
  const right = upperBound(nums, target);
  if (left < right) {
    return [left, right - 1];
  }
  return [-1, -1];
};

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
