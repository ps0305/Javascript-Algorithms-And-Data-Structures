/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  [1,1,1,2,2,3]
*/
var removeDuplicates = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // prettier-ignore
    const shouldExchange = j < 2 ||
      nums[i] !== nums[j - 1] ||
      nums[i] === nums[j - 1] && nums[i] !== nums[j - 2];
    if (shouldExchange) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j += 1;
    }
  }
  return j;
};
