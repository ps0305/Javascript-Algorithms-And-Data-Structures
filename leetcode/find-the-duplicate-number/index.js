/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const head = nums[0];
  let slow = nums[head];
  let fast = nums[nums[head]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = head;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow || -1;
};
