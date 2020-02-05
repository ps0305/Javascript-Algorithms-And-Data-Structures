/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const arr = [];
  for (const num of nums) {
    if (!arr.length || num > arr[arr.length - 1]) {
      arr.push(num);
    } else {
      const index = lowerBound(arr, num);
      arr[index] = num;
    }
  }
  return arr.length;
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
