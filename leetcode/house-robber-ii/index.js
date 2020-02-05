/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 2) {
    return Math.max(...nums, 0);
  }
  return Math.max(helper(nums, 1, nums.length), helper(nums, 0, nums.length - 1));
};

function helper(arr, start, end) {
  let x = arr[start];
  let y = Math.max(x, arr[start + 1]);
  let dp = y;
  for (let i = start + 2; i < end; i++) {
    dp = Math.max(y, x + arr[i]);
    x = y;
    y = dp;
  }
  return dp;
}
