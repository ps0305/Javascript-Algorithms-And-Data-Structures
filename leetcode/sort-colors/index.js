/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var sortColors = function(nums) {
  let i = 0;
  let j = 0;
  let k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      swap(nums, i, j);
      i += 1;
      j += 1;
    } else if (nums[i] === 1) {
      i += 1;
    } else if (nums[i] === 2) {
      swap(nums, i, k);
      k -= 1;
    }
  }
};
