/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const m = Math.floor((left + right) / 2);
    if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
      return nums[m];
    }
    const m1 = nums[m] === nums[m - 1] ? m - 1 : m;
    const m2 = nums[m] === nums[m - 1] ? m : m + 1;
    if (isOdd(right - m2 - 1)) {
      left = m2 + 1;
    } else {
      right = m1;
    }
  }
  return nums[left];
};

function isOdd(n) {
  return n % 2 === 1;
}
