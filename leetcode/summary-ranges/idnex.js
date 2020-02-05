/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) {
    return [];
  }
  const output = [[nums[0], nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    const lastRange = output[output.length - 1];
    if (nums[i] === lastRange[1] + 1) {
      lastRange[1] = nums[i];
    } else {
      output.push([nums[i], nums[i]]);
    }
  }
  return output.map(([n1, n2]) => (n1 !== n2 ? `${n1}->${n2}` : `${n1}`));
};
