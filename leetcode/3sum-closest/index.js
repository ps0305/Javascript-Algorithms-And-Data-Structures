/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  let closetSum;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const diff = Math.abs(sum - target);
      if (diff < min) {
        min = diff;
        closetSum = sum;
      }
      if (sum > target) {
        k -= 1;
      } else if (sum < target) {
        j += 1;
      } else {
        return target;
      }
    }
  }
  return closetSum;
};
