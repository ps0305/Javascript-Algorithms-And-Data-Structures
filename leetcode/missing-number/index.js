/**
 * @param {number[]} nums
 * @return {number}
 */

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var missingNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i && nums[i] !== undefined) {
      swap(nums, i, nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};
