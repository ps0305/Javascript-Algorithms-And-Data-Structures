/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const i = findNextIncrementIndex(nums);
  if (i < 0) {
    return nums.reverse();
  }
  const j = findGreaterIndex(nums, i);
  [nums[i], nums[j]] = [nums[j], nums[i]];
  reverse(nums, i + 1);
};

function findNextIncrementIndex(nums) {
  const n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      return i;
    }
  }
  return -1;
}

function findGreaterIndex(nums, index) {
  for (let i = nums.length - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      return i;
    }
  }
}

function reverse(nums, start, end = nums.length - 1) {
  let left = start;
  let right = end;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left += 1;
    right -= 1;
  }
}
