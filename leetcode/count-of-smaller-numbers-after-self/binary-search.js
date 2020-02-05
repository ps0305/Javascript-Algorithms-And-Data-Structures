/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const m = nums.length;
  const output = new Array(m).fill(0);
  const arr = [];
  for (let i = m - 1; i >= 0; i--) {
    const index = lowerBound(arr, nums[i]);
    output[i] = index;
    arr.splice(index, 0, nums[i]);
  }
  return output;
};

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
