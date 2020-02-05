/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  nums.sort((a, b) => a - b);
  const freq = createFreq(nums);
  for (const num of nums) {
    if (freq[num] > 0) {
      for (let i = 0; i < k; i++) {
        freq[num + i] = (freq[num + i] || 0) - 1;
        if (!(freq[num + i] >= 0)) {
          return false;
        }
      }
    }
  }
  return true;
};

function createFreq(arr) {
  const freq = {};
  for (const val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
  return freq;
}
