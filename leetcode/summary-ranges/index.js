/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const output = [];
  for (let i = 0; i < nums.length; ) {
    let j = i + 1;
    while (nums[j] === nums[j - 1] + 1) {
      j += 1;
    }
    // prettier-ignore
    const range = nums[i] + '' +
      (j - i > 1 ? '->' + nums[j - 1] : '');
    output.push(range);
    i = j;
  }
  return output;
};
