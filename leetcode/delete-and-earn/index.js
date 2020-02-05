/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const freq = createFreq(nums);
  const max = Math.max(...nums);
  let x = (freq[1] || 0) * 1;
  let y = Math.max(x, (freq[2] || 0) * 2);
  let dp = y;
  for (let i = 3; i <= max; i++) {
    dp = Math.max(y, (i in freq ? freq[i] * i : 0) + x);
    x = y;
    y = dp;
  }
  return dp;
};

function createFreq(nums) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}
