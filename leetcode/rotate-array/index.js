/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const r = k % nums.length;
  reverse(nums, nums.length - r, nums.length - 1);
  reverse(nums, 0, nums.length - r - 1);
  reverse(nums, 0, nums.length - 1);
};

function reverse(arr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1;
    right -= 1;
  }
}
