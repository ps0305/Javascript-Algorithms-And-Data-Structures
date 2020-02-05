/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums.length) {
    return [];
  }
  nums.sort();
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    const hash = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      const key = 0 - (nums[i] + nums[j]);
      if (hash.has(key)) {
        output.push([nums[i], key, nums[j]]);
        while (nums[j + 1] === nums[j]) {
          j += 1;
        }
      }
      if (!hash.has(nums[j])) {
        hash.set(nums[j], j);
      }
    }
  }
  return [...output];
};
